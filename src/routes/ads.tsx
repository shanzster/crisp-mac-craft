import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/ads")({
  component: AdsPage,
  head: () => ({
    meta: [
      { title: "Campaign Ads — Shanzster" },
      { name: "description", content: "Meta ad creatives, story ads, carousel frames, and A/B test variants." },
    ],
  }),
});

/* ─── DATA ─── */
type Ad = {
  id: string;
  title: string;
  client: string;
  category: string;
  bg: string;
  src?: string;
};

const ADS: Ad[] = [
  { id: "a1", title: "Meta Ad Creative",      client: "CSA Print",       category: "Meta Ads",  bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))" },
  { id: "a2", title: "Story Ad",              client: "Junz Restaurant", category: "Stories",   bg: "linear-gradient(135deg, oklch(0.45 0.22 250), oklch(0.62 0.16 265))" },
  { id: "a3", title: "Carousel Ad Frame",     client: "Steal & Style",   category: "Carousel",  bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))" },
  { id: "a4", title: "A/B Test Variant",      client: "CSA Print",       category: "Testing",   bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))" },
  { id: "a5", title: "Lookalike Audience Ad", client: "Steal & Style",   category: "Meta Ads",  bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))" },
  { id: "a6", title: "Retargeting Creative",  client: "Junz Restaurant", category: "Retarget",  bg: "linear-gradient(135deg, oklch(0.42 0.18 255), oklch(0.58 0.14 262))" },
  { id: "a7", title: "Lead Generation Ad",    client: "Masinloc Tourism",category: "Lead Gen",  bg: "linear-gradient(135deg, oklch(0.40 0.20 250), oklch(0.60 0.16 260))" },
  { id: "a8", title: "Video Ad Creative",     client: "Steal & Style",   category: "Video Ads", bg: "linear-gradient(135deg, oklch(0.36 0.18 255), oklch(0.54 0.16 258))" },
];

/* ─── AD CARD ─── */
function AdCard({ ad, onClick }: { ad: Ad; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative w-full text-left cursor-pointer"
    >
      {/* Ad Preview */}
      <div 
        className="relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]"
        style={{ aspectRatio: "1 / 1", background: ad.bg }}
      >
        {ad.src ? (
          <img 
            src={ad.src} 
            alt={ad.title} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-white/10 text-[32px]">⬡</span>
            <p className="text-white/12 text-[10px] tracking-[0.14em] uppercase">
              Add Ad
            </p>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30">
            {ad.category}
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
          {ad.title}
        </h3>
        <p className="text-[11px] tracking-tight text-foreground/50 mt-1">
          {ad.client}
        </p>
      </div>
    </button>
  );
}

/* ─── FULL VIEW MODAL ─── */
function FullViewModal({ 
  ad, 
  onClose, 
  onNext, 
  onPrev,
  currentIndex,
  total
}: { 
  ad: Ad; 
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
        className="relative max-w-3xl max-h-[85vh] w-full mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ad Display */}
        <div 
          className="relative w-full rounded-xl overflow-hidden border border-border shadow-2xl"
          style={{ aspectRatio: "1 / 1", background: ad.bg }}
        >
          {ad.src ? (
            <img 
              src={ad.src} 
              alt={ad.title} 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <span className="text-white/10 text-[48px]">⬡</span>
              <p className="text-white/12 text-[12px] tracking-[0.14em] uppercase">
                Add Ad
              </p>
            </div>
          )}
        </div>

        {/* Info Bar */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60">
                {ad.category}
              </span>
              <span className="text-[10px] text-foreground/30">
                {currentIndex + 1} / {total}
              </span>
            </div>
            <h2 className="text-[18px] font-semibold tracking-tight text-foreground leading-snug">
              {ad.title}
            </h2>
            <p className="text-[13px] tracking-tight text-foreground/50 mt-1">
              {ad.client}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
function AdsPage() {
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openAd = (ad: Ad, index: number) => {
    setSelectedAd(ad);
    setSelectedIndex(index);
  };

  const closeAd = () => {
    setSelectedAd(null);
  };

  const goToNext = () => {
    if (selectedIndex < ADS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedAd(ADS[nextIndex]);
    }
  };

  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedAd(ADS[prevIndex]);
    }
  };

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
            Gallery · Ads
          </p>
          <h1 
            className="font-bold tracking-tightest text-foreground leading-[0.88]" 
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Campaign Ads
          </h1>
          <p className="mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md">
            Meta ad creatives, story ads, carousel frames, and A/B test variants — {ADS.length} ad pieces.
          </p>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ADS.map((ad, index) => (
            <AdCard 
              key={ad.id} 
              ad={ad} 
              onClick={() => openAd(ad, index)}
            />
          ))}
        </div>
      </main>

      {/* Full View Modal */}
      {selectedAd && (
        <FullViewModal
          ad={selectedAd}
          onClose={closeAd}
          onNext={goToNext}
          onPrev={goToPrev}
          currentIndex={selectedIndex}
          total={ADS.length}
        />
      )}
    </div>
  );
}
