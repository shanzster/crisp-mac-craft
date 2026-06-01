# Production Build Audit

## Issue
The rotating hero role label in the folder header was behaving differently in `npm run dev` versus `npm run build && npm run preview`.

The affected component is `src/components/SelectingRoles.tsx`.

## Root Cause
The role rotator used a long-lived `setInterval` that created nested `setTimeout` calls inside the interval callback.

The cleanup function was returned from inside the `setInterval` callback, which means it was never used by React. That left the timer chain fragile in production builds.

### Before
```tsx
useEffect(() => {
  if (!mounted) return;

  const id = setInterval(() => {
    setPhase("hiding");

    const swap = setTimeout(() => {
      setIndex((v) => (v + 1) % ROLES.length);
      setPhase("hidden");
    }, 160);

    const show = setTimeout(() => {
      setPhase("visible");
    }, 220);

    return () => {
      clearTimeout(swap);
      clearTimeout(show);
    };
  }, 2800);

  return () => clearInterval(id);
}, [mounted]);
```

### After
```tsx
useEffect(() => {
  if (!mounted) return;

  let cycleTimeout: ReturnType<typeof window.setTimeout> | null = null;
  let swapTimeout: ReturnType<typeof window.setTimeout> | null = null;
  let showTimeout: ReturnType<typeof window.setTimeout> | null = null;

  const runCycle = () => {
    setPhase("hiding");

    swapTimeout = window.setTimeout(() => {
      setIndex((v) => (v + 1) % ROLES.length);
      setPhase("hidden");
    }, 160);

    showTimeout = window.setTimeout(() => {
      setPhase("visible");
      cycleTimeout = window.setTimeout(runCycle, 2800);
    }, 220);
  };

  cycleTimeout = window.setTimeout(runCycle, 2800);

  return () => {
    if (cycleTimeout) window.clearTimeout(cycleTimeout);
    if (swapTimeout) window.clearTimeout(swapTimeout);
    if (showTimeout) window.clearTimeout(showTimeout);
  };
}, [mounted]);
```

## Why It Showed Up In Preview
`npm run preview` is the production bundle, so it does not get dev-time behavior like Fast Refresh or React development quirks that can hide timing bugs.

That made the timer chain behave differently enough that the visible role text could appear stuck or fail to animate correctly in production, while dev still looked fine.

## Files Changed
- `src/components/SelectingRoles.tsx`

## Verification
- `npm run build` completed successfully.
- The build still includes the expected TanStack `use client` warnings from dependencies, but those are not the root cause of the animation bug.

## Notes
If another animation still feels clipped in production, the next things to inspect are fixed-height wrappers and `overflow-hidden` containers in the hero and folder sections.
