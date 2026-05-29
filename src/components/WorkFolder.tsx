import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "@tanstack/react-router";
import { type WorkItem } from "@/lib/work-data";

// 3 left, 3 right — neat columns flanking the folder
// x: distance from center, y: vertical offset from center
const POSITIONS: { x: number; y: number; rot: number; side: "left" | "right" }[] = [
  // Left column — top to bottom
  { x: -380, y: -200, rot: -5,  side: "left"  },
  { x: -380, y:    0, rot: -3,  side: "left"  },
  { x: -380, y:  200, rot: -7,  side: "left"  },
  // Right column — top to bottom
  { x:  380, y: -200, rot:  5,  side: "right" },
  { x:  380, y:    0, rot:  3,  side: "right" },
  { x:  380, y:  200, rot:  7,  side: "right" },
];

/* ─── Paper card ─── */
function WorkPaper({
  item,
  index,
  open,
  hoveredIndex,
  onHover,
  onLeave,
  onSelect,
  isMobile,
}: {
  item: WorkItem;
  index: number;
  open: boolean;
  hoveredIndex: number | null;
  onHover: (i: number) => void;
  onLeave: () => void;
  onSelect: (item: WorkItem) => void;
  isMobile: boolean;
}) {
  const navigate = useNavigate();
  const isHovered = hoveredIndex === index;
  const pos = POSITIONS[index];

  const scaleX = isMobile ? 0.3 : 1;
  const scaleY = isMobile ? 0.3 : 1;

  const cardWidth = isMobile ? 110 : 200;
  const cardHeight = isMobile ? 148 : 260;
  const halfW = cardWidth / 2;
  const halfH = cardHeight / 2;

  return (
    <div
      className="absolute cursor-pointer select-none"
      style={{
        top: "50%",
        left: "50%",
        width: cardWidth,
        height: cardHeight,
        marginTop: -halfH,
        marginLeft: -halfW,
        transform: open
          ? `translate(${pos.x * scaleX}px, ${pos.y * scaleY + (isHovered ? -14 : 0)}px) rotate(${isHovered ? 0 : pos.rot}deg) scale(${isHovered ? 1.05 : 1})`
          : `translate(0px, 30px) rotate(0deg) scale(${isMobile ? 0.72 : 0.8})`,
        opacity: open ? 1 : 0,
        transition: `transform 0.65s cubic-bezier(.2,.8,.2,1) ${index * 60}ms, opacity 0.4s ease ${index * 60}ms`,
        zIndex: isHovered ? 40 : 20 + index,
        pointerEvents: open ? "auto" : "none",
      }}
      onMouseEnter={() => open && onHover(index)}
      onMouseLeave={() => open && onLeave()}
      onClick={() => {
        if (!open) return;
        onSelect(item);
        if (!isMobile) {
          navigate({ to: "/work/$id", params: { id: item.id } });
        }
      }}
    >
      <div
        className="w-full h-full rounded-[14px] border overflow-hidden transition-all duration-300"
        style={{
          borderColor: isHovered
            ? "oklch(0.74 0.13 240 / 0.55)"
            : "oklch(0.88 0.005 240)",
          boxShadow: isHovered
            ? "0 28px 60px -10px oklch(0.2 0.02 240 / 0.35), 0 0 0 1.5px oklch(0.74 0.13 240 / 0.2)"
            : "0 8px 28px -6px oklch(0.2 0.02 240 / 0.22)",
        }}
      >
        {/* Visual — swap for real image */}
        <div
          className="w-full relative flex items-center justify-center"
          style={{ height: isMobile ? 96 : 165, background: item.color }}
        >
          <span className="text-white/10 text-[40px]">✦</span>
          {isHovered && (
            <div className="absolute top-2.5 right-2.5 rounded-full bg-black/25 px-2 py-0.5">
              <p className="text-[9px] tracking-tight text-white/80 font-medium">open →</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-paper px-3 py-2.5 border-t border-border/40">
          <p className="text-[8px] uppercase tracking-[0.14em] text-foreground/35">{item.tag}</p>
          <p className="mt-0.5 text-[12px] font-semibold tracking-tight text-foreground/85 leading-snug">
            {item.title}
          </p>
          <p className="mt-1 text-[9.5px] tracking-tight text-foreground/45 leading-snug line-clamp-2">
            {item.overview.slice(0, 72)}…
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileWorkPreviewModal({
  item,
  onClose,
  onCheckout,
}: {
  item: WorkItem;
  onClose: () => void;
  onCheckout: () => void;
}) {
  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-3"
      onClick={onClose}
      style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
    >
      <div
        className="w-full overflow-hidden rounded-[16px] border border-border bg-card shadow-[0_30px_80px_-20px_oklch(0.2_0.02_240/0.5)]"
        style={{ maxWidth: 340, boxSizing: "border-box" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3">
          <div className="flex items-center gap-1.5">
            <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
            <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
          </div>
          <button onClick={onClose} className="text-[11px] tracking-tight text-foreground/50 hover:text-foreground transition">
            Close
          </button>
        </div>

        <div className="p-3">
          <div className="overflow-hidden rounded-[14px] border border-border/40" style={{ background: item.color }}>
            <div className="flex aspect-[4/5] flex-col justify-end p-4">
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/55">Selected work</p>
              <h3 className="mt-1 text-[18px] font-bold leading-tight tracking-tightest text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-white/78">{item.tag}</p>
              <p className="mt-2 text-[10px] leading-relaxed text-white/70 line-clamp-3">
                {item.overview}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-tight text-foreground">{item.client}</p>
              <p className="mt-0.5 text-[10px] tracking-tight text-foreground/45">Tap checkout to open the full page</p>
            </div>
            <button
              onClick={onCheckout}
              className="shrink-0 rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background transition hover:opacity-85"
            >
              Check out →
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ─── Big folder ─── */
function BigFolder({ open, isMobile }: { open: boolean; isMobile?: boolean }) {
  const w = isMobile ? 238 : 480;
  const h = isMobile ? 212 : 390;
  return (
    <div
      className="relative select-none shrink-0"
      style={{ width: w, height: h, perspective: 1400 }}
    >
      {/* Shadow */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: 380, height: 32,
          background: "oklch(0.55 0.12 240 / 0.22)",
          filter: "blur(20px)",
          opacity: open ? 0.3 : 0.65,
          transition: "opacity 0.4s",
        }}
      />
      {/* Back */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{ background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))" }}
      />
      {/* Tab */}
      <div
        className="absolute -top-7 left-6 h-10 w-[38%] rounded-t-[16px]"
        style={{ background: "linear-gradient(90deg, oklch(0.68 0.14 238), oklch(0.64 0.15 242))" }}
      />
      {/* Front flap */}
      <div
        className="absolute inset-0 rounded-[28px] origin-bottom"
        style={{
          background: "linear-gradient(160deg, oklch(0.82 0.10 230) 0%, oklch(0.72 0.13 242) 100%)",
          boxShadow:
            "inset 0 2.5px 0 oklch(1 0 0 / 0.30), inset 0 -1px 0 oklch(0.5 0.1 240 / 0.12), 0 20px 60px -14px oklch(0.3 0.1 240 / 0.5)",
          transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
          transition: "transform 0.55s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div className="absolute inset-x-10 top-6 h-px rounded-full" style={{ background: "oklch(1 0 0 / 0.24)" }} />
        <div className="absolute inset-x-16 top-9 h-px rounded-full" style={{ background: "oklch(1 0 0 / 0.12)" }} />
        {!open && (
          <p className="absolute bottom-6 right-8 text-[13px] tracking-[0.24em] uppercase text-white/35 font-medium">
            selected work
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function WorkFolderScene({ items }: { items: WorkItem[] }) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileItem, setActiveMobileItem] = useState<WorkItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!activeMobileItem) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMobileItem]);

  useEffect(() => {
    const resetScene = () => {
      setOpen(false);
      setHoveredIndex(null);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resetScene();
      }
    };

    window.addEventListener("focus", resetScene);
    window.addEventListener("pageshow", resetScene);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", resetScene);
      window.removeEventListener("pageshow", resetScene);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Only show first 6 items (3 left, 3 right)
  const visible = items.slice(0, 6);

  return (
    <div className="flex flex-col items-center w-full">
      {activeMobileItem && isMobile && (
        <MobileWorkPreviewModal
          item={activeMobileItem}
          onClose={() => setActiveMobileItem(null)}
          onCheckout={() => navigate({ to: "/work/$id", params: { id: activeMobileItem.id } })}
        />
      )}

      <div
        className="relative flex items-center justify-center w-full"
        style={{ height: isMobile ? 300 : 720 }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => {
          setOpen(false);
          setHoveredIndex(null);
        }}
      >
        {/* Cards */}
        {visible.map((item, i) => (
          <WorkPaper
            key={item.id}
            item={item}
            index={i}
            open={open}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            onLeave={() => setHoveredIndex(null)}
            onSelect={(selectedItem) => {
              if (isMobile) {
                setActiveMobileItem(selectedItem);
              }
              setOpen(false);
              setHoveredIndex(null);
            }}
            isMobile={isMobile}
          />
        ))}

        {/* Folder — center, above cards in z */}
        <button
          type="button"
          className="relative z-10 cursor-pointer"
          style={{ background: "transparent", border: 0, padding: 0 }}
          onClick={() => {
            setOpen((current) => !current);
            setHoveredIndex(null);
          }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
            setHoveredIndex(null);
          }}
          aria-label="Toggle selected work folder"
        >
          <BigFolder open={open} isMobile={isMobile} />
        </button>
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/25">
        {isMobile ? "tap to open · tap a card to view" : "hover to open · click a card to view"}
      </p>
    </div>
  );
}
