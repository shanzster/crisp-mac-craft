import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/calendars")({
  component: CalendarsPage,
  head: () => ({
    meta: [
      { title: "Content Calendars — Shanzster" },
      { name: "description", content: "Monthly editorial calendars, posting schedules, and campaign timelines." },
    ],
  }),
});

/* ─── DATA ─── */
type Calendar = {
  id: string;
  title: string;
  client: string;
  category: string;
  bg: string;
  src?: string;
};

const CALENDARS: Calendar[] = [
  { id: "cal1", title: "Steal & Style — October 2024",    client: "Steal & Style",    category: "Monthly",   bg: "linear-gradient(135deg, oklch(0.55 0.14 240), oklch(0.72 0.10 250))" },
  { id: "cal2", title: "Masinloc Tourism — Q4 2024",      client: "Masinloc Tourism", category: "Quarterly", bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))" },
  { id: "cal3", title: "Junz Restaurant — November 2024", client: "Junz Restaurant",  category: "Monthly",   bg: "linear-gradient(135deg, oklch(0.65 0.14 55),  oklch(0.78 0.10 65))"  },
  { id: "cal4", title: "CSA Print — Campaign Brief",      client: "CSA Print",        category: "Campaign",  bg: "linear-gradient(135deg, oklch(0.55 0.12 270), oklch(0.68 0.10 280))" },
  { id: "cal5", title: "Holiday Campaign Timeline",       client: "Steal & Style",    category: "Campaign",  bg: "linear-gradient(135deg, oklch(0.50 0.16 240), oklch(0.65 0.12 255))" },
  { id: "cal6", title: "Summer Content Strategy",         client: "Masinloc Tourism", category: "Seasonal",  bg: "linear-gradient(135deg, oklch(0.58 0.14 210), oklch(0.72 0.10 220))" },
];

/* ─── CALENDAR CARD ─── */
function CalendarCard({ calendar, onClick }: { calendar: Calendar; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="group relative w-full text-left cursor-pointer"
    >
      {/* Calendar Preview */}
      <div 
        className="relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]"
        style={{ aspectRatio: "16 / 9", background: calendar.bg }}
      >
        {calendar.src ? (
          <img 
            src={calendar.src} 
            alt={calendar.title} 
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-white/10 text-[32px]">◈</span>
            <p className="text-white/12 text-[10px] tracking-[0.14em] uppercase">
              Add Calendar
            </p>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30">
            {calendar.category}
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
          {calendar.title}
        </h3>
        <p className="text-[11px] tracking-tight text-foreground/50 mt-1">
          {calendar.client}
        </p>
      </div>
    </button>
  );
}

/* ─── FULL VIEW MODAL ─── */
function FullViewModal({ 
  calendar, 
  onClose, 
  onNext, 
  onPrev,
  currentIndex,
  total
}: { 
  calendar: Calendar; 
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
        {/* Calendar Display */}
        <div 
          className="relative w-full rounded-xl overflow-hidden border border-border shadow-2xl"
          style={{ aspectRatio: "16 / 9", background: calendar.bg }}
        >
          {calendar.src ? (
            <img 
              src={calendar.src} 
              alt={calendar.title} 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <span className="text-white/10 text-[48px]">◈</span>
              <p className="text-white/12 text-[12px] tracking-[0.14em] uppercase">
                Add Calendar
              </p>
            </div>
          )}
        </div>

        {/* Info Bar */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60">
                {calendar.category}
              </span>
              <span className="text-[10px] text-foreground/30">
                {currentIndex + 1} / {total}
              </span>
            </div>
            <h2 className="text-[18px] font-semibold tracking-tight text-foreground leading-snug">
              {calendar.title}
            </h2>
            <p className="text-[13px] tracking-tight text-foreground/50 mt-1">
              {calendar.client}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */
function CalendarsPage() {
  const [selectedCalendar, setSelectedCalendar] = useState<Calendar | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openCalendar = (calendar: Calendar, index: number) => {
    setSelectedCalendar(calendar);
    setSelectedIndex(index);
  };

  const closeCalendar = () => {
    setSelectedCalendar(null);
  };

  const goToNext = () => {
    if (selectedIndex < CALENDARS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedCalendar(CALENDARS[nextIndex]);
    }
  };

  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedCalendar(CALENDARS[prevIndex]);
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
            Gallery · Calendars
          </p>
          <h1 
            className="font-bold tracking-tightest text-foreground leading-[0.88]" 
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Content Calendars
          </h1>
          <p className="mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md">
            Monthly editorial calendars, posting schedules, and campaign timelines — {CALENDARS.length} planning documents.
          </p>
        </div>

        {/* Calendars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {CALENDARS.map((calendar, index) => (
            <CalendarCard 
              key={calendar.id} 
              calendar={calendar} 
              onClick={() => openCalendar(calendar, index)}
            />
          ))}
        </div>
      </main>

      {/* Full View Modal */}
      {selectedCalendar && (
        <FullViewModal
          calendar={selectedCalendar}
          onClose={closeCalendar}
          onNext={goToNext}
          onPrev={goToPrev}
          currentIndex={selectedIndex}
          total={CALENDARS.length}
        />
      )}
    </div>
  );
}
