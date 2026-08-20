import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { WORK_ITEMS, type WorkItem } from "@/lib/work-data";
import { useWork } from "@/lib/content";
import { EditableText, EditableImage } from "@/lib/edit-mode";
import { NavBar } from "@/components/NavBar";
import { TrafficLights } from "@/components/TrafficLights";

export const Route = createFileRoute("/work/$id")({
  component: WorkDetail,
  loader: ({ params }) => {
    // Seed lookup is only for the initial title / instant render; the live
    // content (including CMS edits and new items) is resolved in the component.
    const seed = WORK_ITEMS.find((w) => w.id === params.id) ?? null;
    return { id: params.id, seed };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.seed?.title ?? "Project"} — Shanzster` }],
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
        <img src={src} alt={alt ?? ""} className="w-full h-full object-contain" />
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
  graphic: { src?: string; title: string; description: string; process?: string[]; tools?: string[]; portrait?: boolean };
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
          <TrafficLights onClose={onClose} />
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

          {/* Hero image — full width, tall; portrait images scroll naturally */}
          <div
            className="w-full flex items-center justify-center relative"
            style={{ 
              height: graphic.portrait ? "auto" : 480, 
              minHeight: graphic.portrait ? 0 : undefined,
              background: color 
            }}
          >
            {graphic.src
              ? <img 
                  src={graphic.src} 
                  alt={graphic.title} 
                  className={graphic.portrait ? "w-full h-auto block" : "w-full h-full object-contain"}
                />
              : (
                <div className="text-center" style={{ height: 480, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <p className="text-white/10 text-[64px]">✦</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/20">add screenshot</p>
                </div>
              )
            }
            {/* Gradient scrim at bottom — only for non-portrait */}
            {!graphic.portrait && <div
              className="absolute inset-x-0 bottom-0"
              style={{ height: "40%", background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" }}
            />}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0
    );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
  const desktopSlots = Array.from({ length: Math.min(6, graphics.length) }, (_, i) => graphics[i] ?? null);
  const extraGraphics = graphics.slice(6); // anything beyond 6 shown below on desktop
  const activeGraphic = modal !== null ? (graphics[modal] ?? null) : null;

  return (
    <>
      {activeGraphic && (
        <GraphicModal
          graphic={activeGraphic ?? { title: `Graphic ${modal! + 1}`, description: "Add a description in work-data.ts.", process: [], tools: [] }}
          color={item.color}
          onClose={() => setModal(null)}
        />
      )}

      {/* ── MOBILE: simple grid showing ALL graphics ── */}
      {isMobile ? (
        <div className="grid grid-cols-2 gap-3">
          {graphics.map((graphic, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => setModal(i)}
            >
              <ImgBox
                src={graphic?.src}
                color={item.color}
                label={graphic?.title ?? `graphic ${i + 1}`}
                style={{ height: 140, borderRadius: 12 }}
                className="w-full shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.2)]"
              />
              {graphic?.title && (
                <p className="mt-1.5 text-[11px] tracking-tight text-foreground/55 text-center leading-snug px-1">
                  {graphic.title}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
      /* ── DESKTOP: animated folder + extras ── */
      <>
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
          {desktopSlots.map((graphic, i) => (
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

        {/* ── Folder — half-visible on RIGHT, heavily slanted — desktop only ── */}
        <div
          className="absolute select-none hidden sm:block"
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
      {/* Extra graphics beyond 6 — shown as grid below the folder on desktop */}
      {extraGraphics.length > 0 && (
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
          {extraGraphics.map((graphic, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => setModal(6 + i)}
            >
              <ImgBox
                src={graphic?.src}
                color={item.color}
                label={graphic?.title ?? `graphic ${6 + i + 1}`}
                style={{ height: 130, borderRadius: 10 }}
                className="w-full shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.2)]"
              />
              {graphic?.title && (
                <p className="mt-1.5 text-[10px] tracking-tight text-foreground/50 text-center leading-snug px-1">
                  {graphic.title}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
      </>
      )}
    </>
  );
}

/* ─── Carousel section ─── */
function CarouselSection({ item }: { item: WorkItem }) {
  const slides = item.carouselSlides ?? [];
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: "oklch(0.08 0.01 240 / 0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={slides[lightbox]}
            alt={`Slide ${lightbox + 1}`}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-[12px]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-6 text-[12px] tracking-tight text-white/50 hover:text-white transition"
          >✕ close</button>
        </div>
      )}

      <div className="mb-10">
        <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Carousel Post</p>
        <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
          {/* macOS title bar */}
          <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
            <div className="flex items-center gap-1.5">
              <TrafficLights size={11} />
            </div>
            <span className="text-[11px] tracking-tight text-foreground/50">carousel_post.instagram</span>
            <span className="text-[10px] tracking-tight text-foreground/30">{current + 1} / {slides.length}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — context */}
            <div className="px-7 py-7 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold tracking-tightest text-foreground mb-3">
                  How I build carousels.
                </h3>
                <p className="text-[13px] leading-relaxed tracking-tight text-foreground/55 mb-5">
                  Carousels are one of the highest-engagement post formats on Facebook and Instagram. Each slide needs to earn the swipe — a hook on slide 1, value in the middle, and a clear CTA at the end.
                </p>
                <div className="space-y-2.5">
                  {[
                    { n: "01", t: "Hook slide", d: "Slide 1 stops the scroll — bold headline, strong visual" },
                    { n: "02", t: "Value slides", d: "Middle slides deliver the content — tips, steps, or info" },
                    { n: "03", t: "CTA slide", d: "Final slide drives action — follow, save, or contact" },
                    { n: "04", t: "Brand consistency", d: "Every slide uses the same colors, fonts, and layout system" },
                  ].map(({ n, t, d }) => (
                    <div key={n} className="flex items-start gap-3">
                      <span className="text-[10px] font-bold tracking-[0.12em] text-foreground/25 mt-0.5 shrink-0">{n}</span>
                      <div>
                        <p className="text-[12px] font-semibold tracking-tight text-foreground/80">{t}</p>
                        <p className="text-[11px] tracking-tight text-foreground/45">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dot indicators */}
              <div className="flex items-center gap-2 mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full transition-all"
                    style={{
                      width: i === current ? 20 : 6,
                      height: 6,
                      background: i === current ? item.color : "oklch(0.6 0.01 240 / 0.3)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — carousel viewer */}
            <div className="p-5 flex flex-col gap-3">
              {/* Main slide */}
              <div
                className="relative overflow-hidden rounded-[10px] cursor-zoom-in"
                style={{ background: `${item.color}22` }}
                onClick={() => setLightbox(current)}
              >
                <img
                  src={slides[current]}
                  alt={`Slide ${current + 1}`}
                  className="w-full object-contain"
                  style={{ maxHeight: 380 }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                  <div />
                  <p className="text-[9px] uppercase tracking-[0.14em] text-white/50 bg-black/20 rounded-full px-2 py-0.5 backdrop-blur-sm">
                    click to enlarge
                  </p>
                </div>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={prev}
                  className="flex-1 rounded-[8px] border border-border bg-secondary/50 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-secondary transition"
                >
                  ← Prev
                </button>
                <button
                  onClick={next}
                  className="flex-1 rounded-[8px] border border-border bg-secondary/50 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-secondary transition"
                >
                  Next →
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {slides.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="shrink-0 rounded-[6px] overflow-hidden border-2 transition"
                    style={{
                      width: 52, height: 52,
                      borderColor: i === current ? item.color : "transparent",
                      opacity: i === current ? 1 : 0.5,
                    }}
                  >
                    <img src={src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Main page ─── */
function WorkDetail() {
  const { id, seed } = Route.useLoaderData();
  const { items, loading } = useWork();
  // Prefer the live (CMS) version; fall back to the seed while it loads.
  const item: WorkItem | null = items.find((w) => w.id === id) ?? seed;

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <main className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-10 text-center">
          {loading ? (
            <p className="text-[13px] tracking-tight text-foreground/40">Loading…</p>
          ) : (
            <>
              <h1 className="text-xl font-semibold tracking-tight text-foreground">Project not found</h1>
              <p className="mt-2 text-[13px] text-foreground/50">This case study doesn't exist or was removed.</p>
              <Link
                to="/"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Go home
              </Link>
            </>
          )}
        </main>
      </div>
    );
  }

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
            <EditableText collection="work" id={item.id} item={item} path={["category"]} value={item.category} as="p" className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-2" />
            <EditableText
              collection="work"
              id={item.id}
              item={item}
              path={["title"]}
              value={item.title}
              as="h1"
              className="font-bold tracking-tightest text-foreground leading-[0.88]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            />
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
            <EditableImage collection="work" id={item.id} item={item} path={["logo"]} src={item.logo ?? ""} alt={`${item.client} logo`} wrapperClassName="flex items-center justify-center w-full h-full" className="w-full h-full object-contain p-2" />
          </div>
        </div>

        {/* ── 2. Before & After ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Before & After</p>
          <div className="grid grid-cols-2 gap-3">
            {/* Before — image if exists, else story text */}
            <div className="rounded-[14px] border border-border overflow-hidden mac-shadow">
              <div className="flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3">
                <TrafficLights size={9} />
                <span className="ml-2 text-[10px] tracking-tight text-foreground/40">before.jpeg</span>
              </div>
              {item.beforeImg ? (
                <ImgBox
                  src={item.beforeImg}
                  color={`${item.color}88`}
                  label="before"
                  style={{ height: 280 }}
                />
              ) : (
                <div
                  className="flex flex-col justify-center gap-4 px-6 py-7"
                  style={{ minHeight: 280, background: `${item.color}14` }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30">The starting point</p>
                  {(item.beforePoints ?? [
                    { icon: "💬", text: `A client DM'd me wanting to start a business from the ground up.` },
                    { icon: "📭", text: "No brand. No logo. No social media. No budget. Just an idea and a phone." },
                    { icon: "🔧", text: "My job: build everything from scratch and make it look like it's been around." },
                  ]).map(({ icon, text }: { icon: string; text: string }) => (
                    <div key={text} className="flex items-start gap-3">
                      <span className="text-[16px] shrink-0">{icon}</span>
                      <p className="text-[12px] sm:text-[13px] leading-relaxed tracking-tight text-foreground/65">{text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* After — results text */}
            <div className="rounded-[14px] border border-border overflow-hidden mac-shadow flex flex-col">
              <div className="flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3">
                <TrafficLights size={9} />
                <span className="ml-2 text-[10px] tracking-tight text-foreground/40">after.md</span>
              </div>
              <div
                className="flex flex-1 flex-col justify-center gap-5 px-5 py-6"
                style={{ minHeight: 280, background: `${item.color}18` }}
              >
                {(item.afterPoints ?? [
                  { icon: "◈", text: "Built a comprehensive brand personality — voice, tone, visual identity, and content system from scratch." },
                  { icon: "↑", text: "Generated consistent revenue growth through strategic content and community engagement." },
                  { icon: "✦", text: "Sourced and secured a B2B collaboration — found the client, pitched the idea, and handled all the paperwork." },
                ]).map(({ icon, text }: { icon: string; text: string }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[14px]" style={{ color: `oklch(from ${item.color} calc(l + 0.3) c h)` }}>{icon}</span>
                    <p className="text-[12px] sm:text-[13px] leading-relaxed tracking-tight text-foreground/70">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* ── 3. Graphics folder ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-6">Graphics I Designed</p>
          <GraphicsFolder item={item} />
        </div>

      {/* ── 3b. Carousel Post (if applicable) ── */}
        {item.carouselSlides && item.carouselSlides.length > 0 && (
          <CarouselSection item={item} />
        )}

        {/* ── 3c. Live Website (if applicable) ── */}
        {item.websiteUrl && (
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Live Website</p>
            <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
              <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
                <div className="flex items-center gap-1.5">
                  <TrafficLights size={11} />
                </div>
                <span className="text-[11px] tracking-tight text-foreground/50">{item.websiteUrl.replace("https://", "")}</span>
                <a
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-tight text-foreground/35 hover:text-foreground transition"
                >
                  open ↗
                </a>
              </div>
              <iframe
                src={item.websiteUrl}
                className="w-full border-0"
                style={{ height: 520 }}
                title="Live Website"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* ── 3d. PDF Documents (if applicable) ── */}
        {item.pdfDocs && item.pdfDocs.length > 0 && (
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Documents & Reports</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.pdfDocs.map((doc) => (
                <div key={doc.url} className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col">
                  <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <TrafficLights size={11} />
                    </div>
                    <span className="text-[11px] tracking-tight text-foreground/50 truncate mx-3">{doc.title}</span>
                    <a
                      href={doc.url}
                      download
                      className="text-[10px] tracking-tight text-foreground/35 hover:text-foreground transition shrink-0"
                    >
                      ↓
                    </a>
                  </div>
                  <iframe
                    src={doc.url}
                    className="w-full border-0 flex-1"
                    style={{ height: 340 }}
                    title={doc.title}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      {/* ── 3f. Printing Guidelines Flipbook (if applicable) ── */}
        {item.flipbookUrl && (
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Printing Guidelines</p>
            <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
              <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
                <div className="flex items-center gap-1.5">
                  <TrafficLights size={11} />
                </div>
                <span className="text-[11px] tracking-tight text-foreground/50">PrintingGuidelines.pdf</span>
                <div className="w-10" />
              </div>
              <div style={{ height: 480 }}>
                <iframe
                  src={item.flipbookUrl}
                  frameBorder="0"
                  allowTransparency={true}
                  allowFullScreen={true}
                  allow="clipboard-write"
                  className="w-full h-full"
                  title="Printing Guidelines"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── 3c. Content Calendar ── */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Content Calendar</p>
          <div className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow">
            <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
              <div className="flex items-center gap-1.5">
                <TrafficLights size={11} />
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
                <TrafficLights size={11} />
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
              {/* Analytics screenshot */}
              <ImgBox
                src={item.analyticsImg}
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
                <EditableText collection="work" id={item.id} item={item} path={["result"]} value={item.result} as="p" className="text-[15px] font-semibold tracking-tightest text-foreground" />
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
                    <TrafficLights size={9} />
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
                <TrafficLights size={11} />
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
