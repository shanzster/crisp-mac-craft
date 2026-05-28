import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { WORK_ITEMS, type WorkItem } from "@/lib/work-data";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/work/$id")({
  component: WorkDetail,
  loader: ({ params }) => {
    const item = WORK_ITEMS.find((w) => w.id === params.id);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title} — Shanzster` }],
  }),
});

/* ─── Placeholder image box ─── */
function ImgBox({
  src,
  alt,
  color,
  label,
  className = "",
  style = {},
}: {
  src?: string;
  alt?: string;
  color: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[12px] border border-border/40 flex items-center justify-center ${className}`}
      style={{ background: color, ...style }}
    >
      {src ? (
        <img src={src} alt={alt ?? ""} className="w-full h-full object-cover" />
      ) : (
        <div className="text-center p-4">
          <p className="text-white/15 text-[28px]">✦</p>
          {label && <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/20">{label}</p>}
        </div>
      )}
    </div>
  );
}

/* ─── Graphic modal — full-page sheet rising from bottom ─── */
function GraphicModal({
  graphic,
  color,
  onClose,
}: {
  graphic: { src?: string; title: string; description: string; process?: string[]; tools?: string[] };
  color: string;
  onClose: () => void;
}) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-end"
      style={{ background: "oklch(0.1 0.01 240 / 0.5)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Sheet — slides up from bottom */}
      <div
        className="relative w-full bg-card overflow-hidden"
        style={{
          borderRadius: "20px 20px 0 0",
          maxHeight: "92vh",
          animation: "sheet-up 0.45s cubic-bezier(.2,.8,.2,1) both",
          boxShadow: "0 -8px 48px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* macOS title bar */}
        <div className="flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-5 shrink-0 sticky top-0 z-10">
          <div className="flex items-center gap-1.5">
            <button onClick={onClose} className="h-[11px] w-[11px] rounded-full transition hover:opacity-80" style={{ background: "var(--traffic-red)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/50">{graphic.title}.jpeg</span>
          <button onClick={onClose} className="text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition">
            ✕ close
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(92vh - 40px)" }}
          onWheel={(e) => e.stopPropagation()}
        >

          {/* Hero image — full width, tall */}
          <div
            className="w-full flex items-center justify-center relative"
            style={{ height: 480, background: color }}
          >
            {graphic.src
              ? <img src={graphic.src} alt={graphic.title} className="w-full h-full object-cover" />
              : (
                <div className="text-center">
                  <p className="text-white/10 text-[64px]">✦</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/20">add screenshot</p>
                </div>
              )
            }
            {/* Gradient scrim at bottom */}
            <div
              className="absolute inset-x-0 bottom-0"
              style={{ height: "40%", background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" }}
            />
            {/* Title overlay */}
            <div className="absolute bottom-0 inset-x-0 px-10 pb-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/40 mb-1">Graphic</p>
              <h2 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tightest text-foreground leading-tight">
                {graphic.title}
              </h2>
            </div>
          </div>

          {/* Body — 3 column on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border">

            {/* Col 1: Description + tools */}
            <div className="px-8 py-8">
              <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-4">About this graphic</p>
              <p className="text-[14px] leading-relaxed tracking-tight text-foreground/65 mb-6">
                {graphic.description}
              </p>
              {graphic.tools && graphic.tools.length > 0 && (
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-3">Made with</p>
                  <div className="flex flex-wrap gap-2">
                    {graphic.tools.map((t) => (
                      <span key={t} className="rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/55">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Col 2 + 3: Process */}
            <div className="lg:col-span-2 px-8 py-8">
              <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-6">How I made it</p>
              {graphic.process && graphic.process.length > 0 ? (
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {graphic.process.map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        className="shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white mt-0.5"
                        style={{ background: "oklch(0.62 0.18 255)" }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[13px] tracking-tight text-foreground/65 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="rounded-[12px] border border-dashed border-border p-6 text-center">
                  <p className="text-[12px] tracking-tight text-foreground/30">
                    Add <code className="bg-secondary px-1.5 py-0.5 rounded text-[11px]">process: [...]</code> in work-data.ts
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slanted folder with graphics inside ─── */
function GraphicsFolder({ item }: { item: WorkItem }) {
  const [open, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState<number | null>(null);
  const [modal, setModal] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-open when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay so the animation feels intentional
          setTimeout(() => setOpen(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const graphics = item.graphics ?? [];
  const slots = Array.from({ length: 6 }, (_, i) => graphics[i] ?? null);
  const activeGraphic = modal !== null ? slots[modal] : null;

  return (
    <>
      {activeGraphic && (
        <GraphicModal
          graphic={activeGraphic ?? { title: `Graphic ${modal! + 1}`, description: "Add a description in work-data.ts.", process: [], tools: [] }}
          color={item.color}
          onClose={() => setModal(null)}
        />
      )}

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-[16px] border border-border bg-card"
        style={{ height: 380 }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => { setOpen(false); setTooltip(null); }}
      >
        {/* Hint */}
        <p
          className="absolute top-4 left-5 text-[10px] uppercase tracking-[0.18em] text-foreground/25 transition-opacity duration-300 z-20"
          style={{ opacity: open ? 0 : 1 }}
        >
          hover to open
        </p>

        {/* ── Graphics — slide in from right on hover ── */}
        <div className="absolute inset-0 flex items-center justify-start pl-8 gap-4 z-10">
          {slots.map((graphic, i) => (
            <div
              key={i}
              className="relative"
              style={{
                width: 130,
                height: 160,
                flexShrink: 0,
                transform: open
                  ? `translateX(0px) rotate(${[-3, 1, -2, 2, -1, 3][i]}deg)`
                  : `translateX(${120 + i * 40}px) rotate(0deg)`,
                opacity: open ? 1 : 0,
                transition: `transform 0.55s cubic-bezier(.2,.8,.2,1) ${i * 60}ms, opacity 0.4s ease ${i * 60}ms`,
                zIndex: tooltip === i ? 40 : 10 + i,
                cursor: open ? "pointer" : "default",
              }}
              onMouseEnter={() => open && setTooltip(i)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => open && setModal(i)}
            >
              <ImgBox
                src={graphic?.src}
                color={item.color}
                label={graphic?.title ?? `graphic ${i + 1}`}
                className="w-full h-full shadow-[0_8px_28px_-6px_oklch(0.2_0.02_240/0.25)]"
                style={{
                  borderRadius: 12,
                  outline: tooltip === i ? "2px solid oklch(0.62 0.18 255)" : "none",
                  outlineOffset: 2,
                }}
              />

              {/* Tooltip */}
              {tooltip === i && (
                <div
                  className="absolute pointer-events-none z-50"
                  style={{ bottom: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", animation: "modal-in 0.18s ease both" }}
                >
                  <div
                    className="rounded-[8px] px-3 py-2 text-center whitespace-nowrap"
                    style={{ background: "oklch(0.18 0.01 240 / 0.92)", backdropFilter: "blur(8px)", boxShadow: "0 4px 16px -4px oklch(0.2 0.02 240 / 0.3)" }}
                  >
                    <p className="text-[11px] font-semibold tracking-tight text-white">{graphic?.title ?? `Graphic ${i + 1}`}</p>
                    <p className="text-[9px] tracking-tight text-white/50 mt-0.5">click to learn more</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-2 h-2 rotate-45" style={{ background: "oklch(0.18 0.01 240 / 0.92)", marginTop: -4 }} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Folder — half-visible on RIGHT, heavily slanted ── */}
        <div
          className="absolute select-none"
          style={{ width: 340, height: 280, right: -120, top: "50%", marginTop: -140, transform: "rotate(22deg)", transformOrigin: "center center", perspective: 1000, zIndex: 15 }}
        >
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 280, height: 24, background: "oklch(0.55 0.12 240 / 0.25)", filter: "blur(16px)" }} />
          <div className="absolute inset-0 rounded-[22px]" style={{ background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))" }} />
          <div className="absolute -top-6 left-5 h-8 w-[40%] rounded-t-[14px]" style={{ background: "oklch(0.66 0.14 240)" }} />
          <div
            className="absolute inset-0 rounded-[22px] origin-bottom"
            style={{
              background: "linear-gradient(160deg, oklch(0.80 0.11 232), oklch(0.70 0.14 242))",
              boxShadow: "inset 0 2px 0 oklch(1 0 0 / 0.28), 0 16px 48px -12px oklch(0.3 0.1 240 / 0.45)",
              transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
              transition: "transform 0.52s cubic-bezier(.2,.8,.2,1)",
            }}
          >
            <div className="absolute inset-x-8 top-5 h-px rounded-full" style={{ background: "oklch(1 0 0 / 0.22)" }} />
            <div className="absolute inset-x-12 top-8 h-px rounded-full" style={{ background: "oklch(1 0 0 / 0.10)" }} />
            {!open && <p className="absolute bottom-5 right-6 text-[11px] tracking-[0.2em] uppercase text-white/35">graphics</p>}
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Main page ─── */
function WorkDetail() {
  const item = Route.useLoaderData();

  // Gallery items — extract src strings from graphics, combine with reels + gallery
  const galleryItems: (string | undefined)[] = [
    ...(item.gallery ?? []),
    ...(item.graphics ?? []).map((g) => g.src),
    ...(item.reels ?? []),
  ];
  const galleryPlaceholders = Array.from({ length: Math.max(8, galleryItems.length) });

  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />
      <main className="mx-auto max-w-[1200px] px-6 pt-10 sm:px-10">

        {/* Back */}
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-8"
        >
          ← Back to work
        </Link>

        {/* ── 1. Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-2">{item.category}</p>
            <h1
              className="font-bold tracking-tightest text-foreground leading-[0.88]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              {item.title}
            </h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50">{item.tag}</span>
              {item.platform && <span className="rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50">{item.platform}</span>}
              {item.duration && <span className="rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50">{item.duration}</span>}
            </div>
          </div>
          {/* Logo */}
          <div
            className="rounded-[16px] border border-border overflow-hidden shrink-0 flex items-center justify-center"
            style={{ width: 80, height: 80, background: item.color }}
          >
            {item.logo
              ? <img src={item.logo} alt={`${item.client} logo`} className="w-full h-full object-contain p-2" />
              : <p className="text-white/30 text-[11px] tracking-tight">logo</p>
            }
          </div>
        </div>

        {/* ── 2. Before & After ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Before & After</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[14px] border border-border overflow-hidden mac-shadow">
              <div className="flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3">
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-green)" }} />
                <span className="ml-2 text-[10px] tracking-tight text-foreground/40">before.jpeg</span>
              </div>
              <ImgBox
                src={item.beforeImg}
                color={`${item.color}88`}
                label="before"
                style={{ height: 280 }}
              />
            </div>
            <div className="rounded-[14px] border border-border overflow-hidden mac-shadow">
              <div className="flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3">
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-green)" }} />
                <span className="ml-2 text-[10px] tracking-tight text-foreground/40">after.jpeg</span>
              </div>
              <ImgBox
                src={item.afterImg}
                color={item.color}
                label="after"
                style={{ height: 280 }}
              />
            </div>
          </div>
        </div>

      {/* ── 3. Graphics folder ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-6">Graphics I Designed</p>
          <GraphicsFolder item={item} />
        </div>

        {/* ── 3b. Content Calendar ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Content Calendar</p>
          <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
            <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
              </div>
              <span className="text-[11px] tracking-tight text-foreground/50">content_calendar.notion</span>
              <div className="w-10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — context */}
              <div className="p-7 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] font-bold tracking-tightest text-foreground mb-3">
                    The system behind the content.
                  </h3>
                  <p className="text-[13px] leading-relaxed tracking-tight text-foreground/55">
                    Every post on {item.client} was planned. This is the content calendar I built — mapping out posts by content pillar, format, and date so nothing was ever random.
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  {["Content pillars defined", "Posts planned 2–4 weeks ahead", "Format variety (posts, stories, reels)", "Aligned with key dates & trends"].map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-[12px] tracking-tight text-foreground/60">
                      <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "oklch(0.62 0.18 255)" }} />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — screenshot */}
              <div className="p-4">
                <ImgBox
                  src={item.calendarImg}
                  color={`${item.color}22`}
                  label="content calendar screenshot"
                  style={{ height: 280, borderRadius: 10 }}
                />
                <p className="mt-2 text-[10px] tracking-tight text-foreground/30 text-center">
                  {item.calendarImg ? "Content calendar" : "Add your Notion/calendar screenshot here"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. Analytics & Results ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Analytics & Results</p>
          <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
            <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
              </div>
              <span className="text-[11px] tracking-tight text-foreground/50">analytics.csv</span>
              <div className="w-10" />
            </div>
            <div className="p-6">
              {/* Metrics */}
              {item.analytics && item.analytics.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {item.analytics.map((a) => (
                    <div key={a.label} className="rounded-[10px] border border-border bg-secondary/40 p-4">
                      <p className="text-[28px] font-bold tracking-tightest leading-none text-foreground">{a.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40">{a.label}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {["Reach", "Engagement", "Followers", "Posts"].map((l) => (
                    <div key={l} className="rounded-[10px] border border-border bg-secondary/40 p-4">
                      <p className="text-[28px] font-bold tracking-tightest leading-none text-foreground/20">—</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/30">{l}</p>
                    </div>
                  ))}
                </div>
              )}
              {/* Analytics screenshot placeholder */}
              <ImgBox
                color={`${item.color}22`}
                label="analytics screenshot"
                style={{ height: 180, borderRadius: 10 }}
              />
              {/* Result statement */}
              <div
                className="mt-4 rounded-[10px] p-4"
                style={{ background: `${item.color}18` }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/35 mb-1">Result</p>
                <p className="text-[15px] font-semibold tracking-tightest text-foreground">{item.result}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. Reels (if applicable) ── */}
        {(item.reels && item.reels.length > 0) || true ? (
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Reels & Video</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(item.reels ?? [null, null, null]).map((reel, i) => (
                <div
                  key={i}
                  className="rounded-[14px] border border-border overflow-hidden mac-shadow"
                  style={{ aspectRatio: "9/16" }}
                >
                  <div className="flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3">
                    <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                    <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                    <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-green)" }} />
                    <span className="ml-2 text-[9px] tracking-tight text-foreground/40">reel_{i + 1}.mp4</span>
                  </div>
                  <ImgBox
                    src={reel ?? undefined}
                    color={item.color}
                    label={`reel ${i + 1}`}
                    style={{ height: "calc(100% - 32px)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* ── 6. Gallery ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Everything I Made</p>
          <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
            <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
              </div>
              <span className="text-[11px] tracking-tight text-foreground/50">gallery.finder</span>
              <span className="text-[10px] tracking-tight text-foreground/30">{galleryPlaceholders.length} items</span>
            </div>
            <div className="py-4 space-y-3 overflow-hidden">
              {/* Row 1 - Scrolls Left */}
              <div className="relative flex gap-3 animate-marquee-left">
                {[...galleryPlaceholders.slice(0, Math.ceil(galleryPlaceholders.length / 2)), ...galleryPlaceholders.slice(0, Math.ceil(galleryPlaceholders.length / 2))].map((_, i) => (
                  <div key={`row1-${i}`} className="flex-shrink-0" style={{ width: 180 }}>
                    <ImgBox
                      src={galleryItems[i % Math.max(galleryItems.length, 1)]}
                      color={item.color}
                      label={`item ${i + 1}`}
                      style={{ height: 160, borderRadius: 10 }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Row 2 - Scrolls Right */}
              <div className="relative flex gap-3 animate-marquee-right">
                {[...galleryPlaceholders.slice(Math.ceil(galleryPlaceholders.length / 2)), ...galleryPlaceholders.slice(Math.ceil(galleryPlaceholders.length / 2))].map((_, i) => {
                  const actualIndex = Math.ceil(galleryPlaceholders.length / 2) + i;
                  return (
                    <div key={`row2-${i}`} className="flex-shrink-0" style={{ width: 180 }}>
                      <ImgBox
                        src={galleryItems[actualIndex % Math.max(galleryItems.length, 1)]}
                        color={item.color}
                        label={`item ${actualIndex + 1}`}
                        style={{ height: 160, borderRadius: 10 }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {item.tools.map((t) => (
              <span key={t} className="rounded-full bg-secondary border border-border px-2.5 py-0.5 text-[10px] tracking-tight text-foreground/45">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background transition hover:opacity-85"
            >
              Work with me →
            </a>
            <Link
              to="/"
              hash="work"
              className="rounded-full border border-border bg-card px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-secondary transition"
            >
              ← All work
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
