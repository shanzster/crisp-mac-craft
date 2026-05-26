import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/graphics")({
  component: GraphicsPage,
  head: () => ({
    meta: [
      { title: "Graphics — Shanzster" },
      { name: "description", content: "Brand posts, story templates, promo graphics and more." },
    ],
  }),
});

/* ─── DATA ─── */
type Graphic = {
  id: string; title: string; client: string; category: string; bg: string; src?: string;
};

const GRAPHICS: Graphic[] = [
  { id: "g1",  title: "Steal & Style — Brand Post",    client: "Steal & Style",    category: "Social Post",  bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))" },
  { id: "g2",  title: "Story Template",                client: "Steal & Style",    category: "Story",        bg: "linear-gradient(135deg, oklch(0.32 0.12 300), oklch(0.55 0.20 285))" },
  { id: "g3",  title: "Highlight Cover Set",           client: "Steal & Style",    category: "Profile",      bg: "linear-gradient(135deg, oklch(0.45 0.18 270), oklch(0.65 0.14 300))" },
  { id: "g4",  title: "Promo Graphic",                 client: "Steal & Style",    category: "Promotion",    bg: "linear-gradient(135deg, oklch(0.60 0.22 285), oklch(0.40 0.20 270))" },
  { id: "g5",  title: "Caption Card",                  client: "Steal & Style",    category: "Engagement",   bg: "linear-gradient(135deg, oklch(0.50 0.20 275), oklch(0.35 0.16 290))" },
  { id: "g6",  title: "Collection Launch Graphic",     client: "Steal & Style",    category: "Launch",       bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))" },
  { id: "g7",  title: "Destination Post",              client: "Masinloc Tourism", category: "Social Post",  bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))" },
  { id: "g8",  title: "Food Feature Post",             client: "Junz Restaurant",  category: "Social Post",  bg: "linear-gradient(135deg, oklch(0.65 0.16 55),  oklch(0.78 0.12 70))"  },
  { id: "g9",  title: "Product Showcase",              client: "CSA Print",        category: "Showcase",     bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))" },
  { id: "g10", title: "Event Announcement",            client: "Masinloc Tourism", category: "Event",        bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))" },
  { id: "g11", title: "Brand Voice Post",              client: "Steal & Style",    category: "Engagement",   bg: "linear-gradient(135deg, oklch(0.45 0.16 240), oklch(0.62 0.12 250))" },
  { id: "g12", title: "Weekend Special Promo",         client: "Junz Restaurant",  category: "Promotion",    bg: "linear-gradient(135deg, oklch(0.70 0.14 60),  oklch(0.82 0.10 75))"  },
];

const TOTAL = GRAPHICS.length;

/* ─── RULED LINES ─── */
function RuledLines({ redMargin = false }: { redMargin?: boolean }) {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="absolute pointer-events-none" style={{ top: `${3 + i * 3.3}%`, left: redMargin ? 40 : 0, right: 0, height: 1, background: "oklch(0.86 0.006 240 / 0.45)" }} />
      ))}
      {redMargin && <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: 40, width: 1, background: "oklch(0.72 0.18 27 / 0.18)" }} />}
    </>
  );
}

/* ─── PAGE CONTENT ─── */
function GraphicContent({ g, num, padLeft }: { g: Graphic; num: number; padLeft?: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ padding: padLeft ? "16px 14px 14px 50px" : "16px 14px 14px 14px" }}>
      <div className="flex items-center justify-between mb-2 shrink-0">
        <p className="text-[8px] uppercase tracking-[0.2em] text-foreground/25">{g.category}</p>
        <p className="text-[8px] tracking-tight text-foreground/20">{num} / {TOTAL}</p>
      </div>
      <div className="flex-1 rounded-[6px] overflow-hidden border border-border/20 min-h-0" style={{ background: g.bg }}>
        {g.src
          ? <img src={g.src} alt={g.title} className="w-full h-full object-contain" />
          : <div className="w-full h-full flex flex-col items-center justify-center gap-1.5"><span className="text-white/10 text-[24px]">✦</span><p className="text-white/12 text-[9px] tracking-[0.14em] uppercase">add graphic</p></div>
        }
      </div>
      <div className="mt-2 shrink-0">
        <p className="text-[11px] font-semibold tracking-tight text-foreground leading-snug">{g.title}</p>
        <p className="text-[10px] tracking-tight text-foreground/40 mt-0.5">{g.client}</p>
      </div>
    </div>
  );
}

function EndContent() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-6">
      <p className="text-foreground/12 text-[28px]">✦</p>
      <p className="text-[11px] font-semibold tracking-tight text-foreground/28">End of notebook</p>
      <p className="text-[9px] tracking-tight text-foreground/18">← go back</p>
    </div>
  );
}

/* ─── FLIP HALF — animates via ref, no backface tricks ─── */
type Phase = "idle" | "fold" | "unfold";

function FlipHalf({ phase, origin, children }: { phase: Phase; origin: "left" | "right"; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const foldTo    = origin === "right" ? "rotateY(-90deg)" : "rotateY(90deg)";
    const unfoldFrom = origin === "right" ? "rotateY(90deg)"  : "rotateY(-90deg)";

    if (phase === "fold") {
      el.style.transition = "transform 0.3s cubic-bezier(.4,0,.6,1)";
      el.style.transform  = foldTo;
    } else if (phase === "unfold") {
      el.style.transition = "none";
      el.style.transform  = unfoldFrom;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transition = "transform 0.3s cubic-bezier(.4,0,.6,1)";
          ref.current.style.transform  = "rotateY(0deg)";
        }
      }));
    } else {
      el.style.transition = "none";
      el.style.transform  = "rotateY(0deg)";
    }
  }, [phase, origin]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden"
      style={{
        transform: "rotateY(0deg)",
        transformOrigin: origin === "right" ? "left center" : "right center",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   NOTEBOOK
   
   State machine:
   - "closed"  → single-page cover, centered
   - "opening" → cover swings left (rotateY 0 → -175deg)
   - "open"    → two-page spread, cover hidden behind
   
   Spread index:
   - 0 → left: blank/back-of-cover, right: graphic[0]
   - 1 → left: graphic[0], right: graphic[1]
   - N → left: graphic[N-1], right: graphic[N] or end
───────────────────────────────────────────── */

type BookState = "closed" | "opening" | "open";

function Notebook() {
  const [bookState, setBookState] = useState<BookState>("closed");
  const [spread, setSpread]       = useState(0);
  const [phase, setPhase]         = useState<Phase>("idle");
  const [flipDir, setFlipDir]     = useState<"next" | "prev">("next");
  const pending = useRef(0);
  const timer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-open on mount
  useEffect(() => {
    const t1 = setTimeout(() => setBookState("opening"), 600);
    const t2 = setTimeout(() => setBookState("open"), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  function go(dir: "next" | "prev") {
    if (phase !== "idle" || bookState !== "open") return;
    const next = dir === "next" ? spread + 1 : spread - 1;
    if (next < 0 || next > TOTAL) return;
    pending.current = next;
    setFlipDir(dir);
    setPhase("fold");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSpread(pending.current);
      setPhase("unfold");
      timer.current = setTimeout(() => setPhase("idle"), 320);
    }, 320);
  }

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft")  go("prev");
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  });

  const leftGraphic  = spread === 0 ? null : GRAPHICS[spread - 1];
  const rightGraphic = spread >= TOTAL ? null : GRAPHICS[spread];
  const rightFlipping = flipDir === "next";
  const leftFlipping  = flipDir === "prev";

  // ── CLOSED: single A4 page centered ──
  if (bookState === "closed") {
    return (
      <div className="flex flex-col items-center select-none">
        <div className="relative" style={{ width: "min(420px, 88vw)" }}>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ width: "60%", height: 20, background: "oklch(0.4 0.05 240 / 0.14)", filter: "blur(18px)" }} />
          <div className="relative rounded-[4px]" style={{ width: "100%", aspectRatio: "1 / 1.414" }}>
            <CoverFace total={TOTAL} />
          </div>
        </div>
        <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-foreground/25 animate-pulse">Opening…</p>
      </div>
    );
  }

  // ── OPENING: cover swings open, book expands to spread ──
  if (bookState === "opening") {
    return (
      <div className="flex flex-col items-center select-none">
        <div className="relative" style={{ width: "min(860px, 94vw)" }}>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ width: "55%", height: 22, background: "oklch(0.4 0.05 240 / 0.14)", filter: "blur(20px)" }} />
          <div className="relative rounded-[4px]" style={{ width: "100%", aspectRatio: "1.414 / 1" }}>
            <BookBack />
            <SpineCenter />
            {/* Left page — revealed as cover opens */}
            <LeftPageShell>
              <RuledLines redMargin />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-foreground/10 text-[28px]">✦</p>
              </div>
            </LeftPageShell>
            {/* Right page */}
            <RightPageShell>
              <RuledLines />
              {GRAPHICS[0] && <GraphicContent g={GRAPHICS[0]} num={1} />}
            </RightPageShell>
            {/* Cover swinging open */}
            <div
              className="absolute inset-0 rounded-[4px] overflow-hidden"
              style={{
                zIndex: 20,
                transformOrigin: "left center",
                transform: "rotateY(-175deg)",
                transition: "transform 0.9s cubic-bezier(.4,0,.2,1)",
                perspective: 1400,
              }}
            >
              <CoverFace total={TOTAL} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── OPEN: full two-page spread ──
  return (
    <div className="flex flex-col items-center select-none">
      <div className="relative" style={{ width: "min(860px, 94vw)" }}>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full pointer-events-none" style={{ width: "55%", height: 22, background: "oklch(0.4 0.05 240 / 0.14)", filter: "blur(20px)" }} />

        <div className="relative rounded-[4px]" style={{ width: "100%", aspectRatio: "1.414 / 1" }}>
          <BookBack />
          <SpineCenter />

          {/* ── LEFT PAGE ── */}
          <LeftPageShell>
            <RuledLines redMargin />
            <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{ width: 18, background: "linear-gradient(to right, transparent, oklch(0.5 0.02 240 / 0.08))" }} />
            {leftFlipping ? (
              <FlipHalf phase={phase} origin="left">
                <div className="absolute inset-0" style={{ background: "oklch(0.985 0.002 60)" }}>
                  <RuledLines redMargin />
                  {leftGraphic
                    ? <GraphicContent g={leftGraphic} num={spread} padLeft />
                    : <div className="absolute inset-0 flex items-center justify-center"><p className="text-foreground/10 text-[28px]">✦</p></div>
                  }
                </div>
              </FlipHalf>
            ) : (
              leftGraphic
                ? <GraphicContent g={leftGraphic} num={spread} padLeft />
                : <div className="absolute inset-0 flex items-center justify-center"><p className="text-foreground/10 text-[28px]">✦</p></div>
            )}
          </LeftPageShell>

          {/* ── RIGHT PAGE ── */}
          <RightPageShell>
            <RuledLines />
            <div className="absolute top-0 bottom-0 left-0 pointer-events-none" style={{ width: 18, background: "linear-gradient(to left, transparent, oklch(0.5 0.02 240 / 0.08))" }} />
            {rightFlipping ? (
              <FlipHalf phase={phase} origin="right">
                <div className="absolute inset-0" style={{ background: "oklch(0.99 0.002 60)" }}>
                  <RuledLines />
                  {rightGraphic
                    ? <GraphicContent g={rightGraphic} num={spread + 1} />
                    : <EndContent />
                  }
                </div>
              </FlipHalf>
            ) : (
              rightGraphic
                ? <GraphicContent g={rightGraphic} num={spread + 1} />
                : <EndContent />
            )}
          </RightPageShell>

        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-5 mt-10">
        <button onClick={() => go("prev")} disabled={spread === 0 || phase !== "idle"} className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-[12px] tracking-tight text-foreground/55 hover:text-foreground hover:bg-secondary transition disabled:opacity-20 disabled:cursor-not-allowed">
          ← Prev
        </button>
        <div className="flex items-center gap-1.5 flex-wrap justify-center" style={{ maxWidth: 320 }}>
          {Array.from({ length: TOTAL + 1 }).map((_, i) => (
            <button key={i} onClick={() => { if (phase === "idle") setSpread(i); }} className="rounded-full transition-all duration-200" style={{ width: spread === i ? 18 : 5, height: 5, background: spread === i ? "var(--foreground)" : "oklch(0.18 0.01 240 / 0.18)" }} aria-label={`Spread ${i}`} />
          ))}
        </div>
        <button onClick={() => go("next")} disabled={spread >= TOTAL || phase !== "idle"} className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-[12px] tracking-tight text-foreground/55 hover:text-foreground hover:bg-secondary transition disabled:opacity-20 disabled:cursor-not-allowed">
          Next →
        </button>
      </div>
      <p className="mt-3 text-[10px] tracking-tight text-foreground/25">
        {spread === 0 ? "Opening spread" : `Pages ${spread} – ${spread + 1} of ${TOTAL}`} · ← → keys work
      </p>
    </div>
  );
}

/* ─── SHARED BOOK PARTS ─── */

function BookBack() {
  return (
    <div className="absolute inset-0 rounded-[4px]" style={{ background: "linear-gradient(160deg, oklch(0.20 0.02 240), oklch(0.14 0.01 240))", boxShadow: "5px 5px 0 oklch(0.10 0.01 240), 9px 9px 0 oklch(0.08 0.01 240 / 0.35)" }} />
  );
}

function SpineCenter() {
  return (
    <div className="absolute top-0 bottom-0" style={{ left: "calc(50% - 14px)", width: 28, zIndex: 10, background: "linear-gradient(90deg, oklch(0.11 0.01 240) 0%, oklch(0.20 0.02 240) 50%, oklch(0.11 0.01 240) 100%)", boxShadow: "inset 0 0 8px oklch(0 0 0 / 0.5)" }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="absolute left-1/2 -translate-x-1/2" style={{ top: `${5 + i * 8.2}%`, width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg, oklch(0.32 0.02 240), oklch(0.22 0.02 240))", border: "1.5px solid oklch(0.20 0.02 240)", boxShadow: "inset 0 1px 3px oklch(0 0 0 / 0.5), 0 1px 0 oklch(0.38 0.02 240 / 0.3)" }} />
      ))}
    </div>
  );
}

function LeftPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-0 bottom-0 left-0 overflow-hidden" style={{ right: "calc(50% + 14px)", background: "oklch(0.985 0.002 60)", perspective: 1200, zIndex: 2 }}>
      {children}
    </div>
  );
}

function RightPageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-0 bottom-0 right-0 rounded-r-[4px] overflow-hidden" style={{ left: "calc(50% + 14px)", background: "oklch(0.99 0.002 60)", perspective: 1200, zIndex: 2 }}>
      {children}
    </div>
  );
}

function CoverFace({ total }: { total: number }) {
  return (
    <div className="absolute inset-0 rounded-[4px] overflow-hidden" style={{ background: "linear-gradient(160deg, oklch(0.20 0.02 240), oklch(0.14 0.01 240))" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="absolute w-full" style={{ top: `${18 + i * 15}%`, height: 1, background: "oklch(1 0 0 / 0.03)" }} />
      ))}
      <div className="absolute inset-0 flex flex-col items-start justify-end" style={{ padding: "0 28px 32px 36px" }}>
        <p className="text-[8px] uppercase tracking-[0.32em] text-white/18 mb-2">Shanzster · Portfolio</p>
        <p className="font-bold tracking-tightest text-white/65 leading-tight" style={{ fontSize: "clamp(20px, 3.5vw, 40px)" }}>
          Graphics<br />&amp; Visuals
        </p>
        <p className="mt-2 text-[9px] tracking-tight text-white/22">{total} pages</p>
      </div>
      {/* Left spine strip */}
      <div className="absolute top-0 bottom-0 left-0" style={{ width: 28, background: "oklch(0.10 0.01 240)", boxShadow: "inset -2px 0 5px oklch(0 0 0 / 0.35)" }} />
    </div>
  );
}

/* ─── PAGE ─── */
function GraphicsPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />
      <main className="mx-auto max-w-[1100px] px-6 pt-10 sm:px-10">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10">
          ← Back to Gallery
        </Link>
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3">Gallery · Graphics</p>
          <h1 className="font-bold tracking-tightest text-foreground leading-[0.88]" style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>The notebook.</h1>
          <p className="mt-3 text-[13px] tracking-tight text-foreground/40 max-w-sm">Flip through every graphic — one page at a time.</p>
        </div>
        <Notebook />
      </main>
    </div>
  );
}
