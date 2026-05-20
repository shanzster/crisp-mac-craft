import { useEffect, useState } from "react";

function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function MenuBar() {
  const now = useClock();
  const time = now
    ? now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto flex h-7 max-w-[1400px] items-center justify-between px-4 text-[12px] tracking-tight">
        <div className="flex items-center gap-5">
          <AppleLogo />
          <span className="font-semibold">Portfolio</span>
          <span className="hidden sm:inline text-foreground/80">File</span>
          <span className="hidden sm:inline text-foreground/80">Edit</span>
          <span className="hidden sm:inline text-foreground/80">View</span>
          <span className="hidden md:inline text-foreground/80">Work</span>
          <span className="hidden md:inline text-foreground/80">Window</span>
          <span className="hidden md:inline text-foreground/80">Help</span>
        </div>
        <div className="flex items-center gap-3 text-foreground/80">
          <span className="hidden sm:inline">⌘K</span>
          <BatteryIcon />
          <WifiIcon />
          <SpotlightIcon />
          <span>{time || "—"}</span>
        </div>
      </div>
    </div>
  );
}

function AppleLogo() {
  return (
    <svg width="13" height="14" viewBox="0 0 14 16" fill="currentColor" aria-hidden>
      <path d="M11.6 8.5c0-2 1.6-3 1.7-3-0.9-1.4-2.4-1.6-2.9-1.6-1.2-0.1-2.4 0.7-3 0.7-0.6 0-1.6-0.7-2.6-0.7-1.3 0-2.6 0.8-3.3 2-1.4 2.4-0.4 6 1 8 0.7 1 1.5 2 2.5 2 1 0 1.4-0.6 2.6-0.6 1.2 0 1.5 0.6 2.6 0.6 1.1 0 1.7-1 2.4-2 0.5-0.7 0.9-1.4 1.1-2.2-2.1-0.8-2.1-3.2-2.1-3.2zM9.7 2.6c0.6-0.7 1-1.7 0.9-2.6-0.8 0.0 -1.7 0.5-2.3 1.2-0.5 0.6-1 1.6-0.9 2.6 0.9 0.1 1.8-0.5 2.3-1.2z"/>
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor" aria-hidden>
      <path d="M8 11l1.5-1.5a2.1 2.1 0 00-3 0L8 11zm-3-3l1.2 1.2a3.8 3.8 0 015.6 0L13 8a5.6 5.6 0 00-8 0zm-3-3l1.2 1.2a8 8 0 0111.6 0L16 5A9.8 9.8 0 002 5z"/>
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg width="22" height="10" viewBox="0 0 26 12" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
      <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" />
      <rect x="2" y="2" width="14" height="8" rx="1" fill="currentColor" />
      <rect x="22.5" y="4" width="2" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}
function SpotlightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="7" cy="7" r="5" />
      <path d="M11 11l3.5 3.5" />
    </svg>
  );
}
