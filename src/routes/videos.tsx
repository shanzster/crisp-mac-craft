import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
  head: () => ({
    meta: [
      { title: "Videos & Reels — Shanzster" },
      { name: "description", content: "Reels, vlogs, promo videos, motion captions, and collection launches." },
    ],
  }),
});

/* ─── DATA ─── */
type Video = {
  id: string;
  title: string;
  client: string;
  category: string;
  bg: string;
  src?: string;
};

const VIDEOS: Video[] = [
  { id: "v1", title: "Collection Launch Reel",   client: "Steal & Style",    category: "Reel",       bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))" },
  { id: "v2", title: "Promotional Video",        client: "Masinloc Tourism", category: "Promo",      bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))" },
  { id: "v3", title: "Vlog Edit",                client: "Steal & Style",    category: "Vlog",       bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))" },
  { id: "v4", title: "Motion Caption Overlay",   client: "Steal & Style",    category: "Motion",     bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))" },
  { id: "v5", title: "Freeze Frame Reel",        client: "Steal & Style",    category: "Reel",       bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))" },
  { id: "v6", title: "Restaurant Promo",         client: "Junz Restaurant",  category: "Promo",      bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))" },
  { id: "v7", title: "Behind the Scenes",        client: "Steal & Style",    category: "BTS",        bg: "linear-gradient(135deg, oklch(0.15 0.02 240), oklch(0.26 0.06 246))" },
  { id: "v8", title: "Product Showcase Video",   client: "CSA Print",        category: "Showcase",   bg: "linear-gradient(135deg, oklch(0.19 0.03 240), oklch(0.33 0.08 250))" },
];

/* ─── VIDEO CARD ─── */
function VideoCard({ video, onClick }: { video: Video; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative w-full text-left cursor-pointer"
    >
      {/* Video Preview */}
      <div 
        className="relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]"
        style={{ aspectRatio: "9 / 16", background: video.bg }}
      >
        {video.src ? (
          <video 
            src={video.src} 
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-white/10 text-[32px]">▶</span>
            <p className="text-white/12 text-[10px] tracking-[0.14em] uppercase">
              Add Video
            </p>
          </div>
        )}
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-foreground ml-1">
              <path d="M5 3L17 10L5 17V3Z" />
            </svg>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30">
            {video.category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3 className="text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors">
          {video.title}
        </h3>
        <p className="text-[11px] tracking-tight text-foreground/50 mt-1">
          {video.client}
        </p>
      </div>
    </button>
  );
}

/* ─── FULL VIEW MODAL ─── */
function FullViewModal({ 
  video, 
  onClose, 
  onNext, 
  onPrev,
  currentIndex,
  total
}: { 
  video: Video; 
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
        className="relative max-w-2xl max-h-[85vh] w-full mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Display */}
        <div 
          className="relative w-full rounded-xl overflow-hidden border border-border shadow-2xl"
          style={{ aspectRatio: "9 / 16", background: video.bg }}
        >
          {video.src ? (
            <video 
              src={video.src} 
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <span className="text-white/10 text-[48px]">▶</span>
              <p className="text-white/12 text-[12px] tracking-[0.14em] uppercase">
                Add Video
              </p>
            </div>
          )}
        </div>

        {/* Info Bar */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60">
                {video.category}
              </span>
              <span className="text-[10px] text-foreground/30">
                {currentIndex + 1} / {total}
              </span>
            </div>
            <h2 className="text-[18px] font-semibold tracking-tight text-foreground leading-snug">
              {video.title}
            </h2>
            <p className="text-[13px] tracking-tight text-foreground/50 mt-1">
              {video.client}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openVideo = (video: Video, index: number) => {
    setSelectedVideo(video);
    setSelectedIndex(index);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const goToNext = () => {
    if (selectedIndex < VIDEOS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedVideo(VIDEOS[nextIndex]);
    }
  };

  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedVideo(VIDEOS[prevIndex]);
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
            Gallery · Videos
          </p>
          <h1 
            className="font-bold tracking-tightest text-foreground leading-[0.88]" 
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Videos & Reels
          </h1>
          <p className="mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md">
            Reels, vlogs, promo videos, motion captions, and collection launches — {VIDEOS.length} video pieces.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {VIDEOS.map((video, index) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={() => openVideo(video, index)}
            />
          ))}
        </div>
      </main>

      {/* Full View Modal */}
      {selectedVideo && (
        <FullViewModal
          video={selectedVideo}
          onClose={closeVideo}
          onNext={goToNext}
          onPrev={goToPrev}
          currentIndex={selectedIndex}
          total={VIDEOS.length}
        />
      )}
    </div>
  );
}
