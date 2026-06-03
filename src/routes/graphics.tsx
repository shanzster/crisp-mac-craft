import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  id: string;
  title: string;
  client: string;
  category: string;
  bg: string;
  src?: string;
};

const GRAPHICS: Graphic[] = [
  { id: "g1",  title: "Steal & Style Collection 1",     client: "Steal & Style",     category: "Collection",   bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))", src: "/Graphics/00_STEAL&STYLE_COLLECTION-1_SK01-05.png" },
  { id: "g2",  title: "Collection 3 Cover",            client: "Steal & Style",     category: "Cover Design", bg: "linear-gradient(135deg, oklch(0.32 0.12 300), oklch(0.55 0.20 285))", src: "/Graphics/01_Collection3_Cover1.png" },
  { id: "g3",  title: "Call to Action Post",           client: "Steal & Style",     category: "Social Post",  bg: "linear-gradient(135deg, oklch(0.45 0.18 270), oklch(0.65 0.14 300))", src: "/Graphics/calltoactionpost2.png" },
  { id: "g4",  title: "Collection 2 Cover",            client: "Steal & Style",     category: "Cover Design", bg: "linear-gradient(135deg, oklch(0.60 0.22 285), oklch(0.40 0.20 270))", src: "/Graphics/COLLECTION2_CH-01.png" },
  { id: "g5",  title: "Cover Design 1",                client: "Steal & Style",     category: "Cover Design", bg: "linear-gradient(135deg, oklch(0.50 0.20 275), oklch(0.35 0.16 290))", src: "/Graphics/Cover1 (1).png" },
  { id: "g6",  title: "Dingalan Event Invitation",     client: "Masinloc Tourism",  category: "Event",        bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))", src: "/Graphics/Dingalan - Poster Invitation (1).png" },
  { id: "g7",  title: "Event Invitation Post",         client: "General",           category: "Event",        bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))", src: "/Graphics/InvitationPost.png" },
  { id: "g8",  title: "PSG Hits Logo",                 client: "PSG Hits",          category: "Logo Design",  bg: "linear-gradient(135deg, oklch(0.65 0.16 55),  oklch(0.78 0.12 70))",  src: "/Graphics/Logo.png" },
  { id: "g9",  title: "Onboarding Post",               client: "General",           category: "Social Post",  bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))", src: "/Graphics/OnboardingPost.png" },
  { id: "g10", title: "PSG Hits Brand Board",          client: "PSG Hits",          category: "Brand Kit",    bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))", src: "/Graphics/OverallBrandBoard.png" },
  { id: "g11", title: "Event Poster 1",                client: "Masinloc Tourism",  category: "Event",        bg: "linear-gradient(135deg, oklch(0.45 0.16 240), oklch(0.62 0.12 250))", src: "/Graphics/Poster-1.png" },
  { id: "g12", title: "Event Poster 2",                client: "Masinloc Tourism",  category: "Event",        bg: "linear-gradient(135deg, oklch(0.70 0.14 60),  oklch(0.82 0.10 75))",  src: "/Graphics/Poster-2.png" },
  { id: "g13", title: "Slide Design 3",                client: "General",           category: "Presentation", bg: "linear-gradient(135deg, oklch(0.42 0.18 255), oklch(0.58 0.14 262))", src: "/Graphics/slide-3.png" },
  { id: "g14", title: "Slide Design 5",                client: "General",           category: "Presentation", bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))", src: "/Graphics/slide-5.png" },
];

/* ─── GRAPHIC CARD ─── */
function GraphicCard({ graphic, onClick }: { graphic: Graphic; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative w-full text-left cursor-pointer"
    >
      {/* Graphic Preview */}
      <div 
        className="relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]"
        style={{ aspectRatio: "1 / 1", background: graphic.bg }}
      >
        {graphic.src ? (
          <img 
            src={graphic.src} 
            alt={graphic.title} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-white/10 text-[32px]">✦</span>
            <p className="text-white/12 text-[10px] tracking-[0.14em] uppercase">
              Add Graphic
            </p>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30">
            {graphic.category}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[11px] tracking-tight text-foreground">
              View Full Size
            </div>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3 className="text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors">
          {graphic.title}
        </h3>
        <p className="text-[11px] tracking-tight text-foreground/50 mt-1">
          {graphic.client}
        </p>
      </div>
    </button>
  );
}

/* ─── FULL VIEW MODAL ─── */
function FullViewModal({ 
  graphic, 
  onClose, 
  onNext, 
  onPrev,
  currentIndex,
  total
}: { 
  graphic: Graphic; 
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10"
        aria-label="Close"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M2 2L14 14M14 2L2 14" />
        </svg>
      </button>

      {/* Navigation - Previous */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4L6 10L12 16" />
          </svg>
        </button>
      )}

      {/* Navigation - Next */}
      {currentIndex < total - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 4L14 10L8 16" />
          </svg>
        </button>
      )}

      {/* Content */}
      <div 
        className="relative max-w-5xl max-h-[85vh] w-full mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Graphic Display */}
        <div 
          className="relative w-full rounded-xl overflow-hidden border border-border shadow-2xl"
          style={{ aspectRatio: "1 / 1", background: graphic.bg }}
        >
          {graphic.src ? (
            <img 
              src={graphic.src} 
              alt={graphic.title} 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <span className="text-white/10 text-[48px]">✦</span>
              <p className="text-white/12 text-[12px] tracking-[0.14em] uppercase">
                Add Graphic
              </p>
            </div>
          )}
        </div>

        {/* Info Bar */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60">
                {graphic.category}
              </span>
              <span className="text-[10px] text-foreground/30">
                {currentIndex + 1} / {total}
              </span>
            </div>
            <h2 className="text-[18px] font-semibold tracking-tight text-foreground leading-snug">
              {graphic.title}
            </h2>
            <p className="text-[13px] tracking-tight text-foreground/50 mt-1">
              {graphic.client}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
function GraphicsPage() {
  const [selectedGraphic, setSelectedGraphic] = useState<Graphic | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openGraphic = (graphic: Graphic, index: number) => {
    setSelectedGraphic(graphic);
    setSelectedIndex(index);
  };

  const closeGraphic = () => {
    setSelectedGraphic(null);
  };

  const goToNext = () => {
    if (selectedIndex < GRAPHICS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedGraphic(GRAPHICS[nextIndex]);
    }
  };

  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedGraphic(GRAPHICS[prevIndex]);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedGraphic) return;
    
    if (e.key === "Escape") closeGraphic();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
  };

  // Add keyboard listener
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />
      <main className="mx-auto max-w-[1200px] px-6 pt-10 sm:px-10">
        <Link 
          to="/gallery" 
          className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10"
        >
          ← Back to Gallery
        </Link>
        
        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3">
            Gallery · Graphics
          </p>
          <h1 
            className="font-bold tracking-tightest text-foreground leading-[0.88]" 
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Graphics & Visuals
          </h1>
          <p className="mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md">
            Brand posts, story templates, promo graphics and more — {GRAPHICS.length} pieces showcasing social media design work.
          </p>
        </div>

        {/* Graphics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {GRAPHICS.map((graphic, index) => (
            <GraphicCard 
              key={graphic.id} 
              graphic={graphic} 
              onClick={() => openGraphic(graphic, index)}
            />
          ))}
        </div>
      </main>

      {/* Full View Modal */}
      {selectedGraphic && (
        <FullViewModal
          graphic={selectedGraphic}
          onClose={closeGraphic}
          onNext={goToNext}
          onPrev={goToPrev}
          currentIndex={selectedIndex}
          total={GRAPHICS.length}
        />
      )}
    </div>
  );
}
