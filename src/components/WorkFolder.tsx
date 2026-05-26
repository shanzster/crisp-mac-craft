import { useState } from "react";
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
}: {
  item: WorkItem;
  index: number;
  open: boolean;
  hoveredIndex: number | null;
  onHover: (i: number) => void;
  onLeave: () => void;
}) {
  const navigate = useNavigate();
  const isHovered = hoveredIndex === index;
  const pos = POSITIONS[index];

  return (
    <div
      className="absolute cursor-pointer select-none"
      style={{
        top: "50%",
        left: "50%",
        width: 200,
        height: 260,
        marginTop: -130,
        marginLeft: -100,
        transform: open
          ? `translate(${pos.x}px, ${pos.y + (isHovered ? -14 : 0)}px) rotate(${isHovered ? 0 : pos.rot}deg) scale(${isHovered ? 1.05 : 1})`
          : `translate(0px, 30px) rotate(0deg) scale(0.8)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.65s cubic-bezier(.2,.8,.2,1) ${index * 60}ms, opacity 0.4s ease ${index * 60}ms`,
        zIndex: isHovered ? 40 : 20 + index,
      }}
      onMouseEnter={() => open && onHover(index)}
      onMouseLeave={() => open && onLeave()}
      onClick={() => open && navigate({ to: "/work/$id", params: { id: item.id } })}
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
          style={{ height: 165, background: item.color }}
        >
          <span className="text-white/10 text-[40px]">✦</span>
          {isHovered && (
            <div className="absolute top-2.5 right-2.5 rounded-full bg-black/25 px-2 py-0.5">
              <p className="text-[9px] tracking-tight text-white/80 font-medium">open →</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-paper px-4 py-3 border-t border-border/40">
          <p className="text-[9px] uppercase tracking-[0.14em] text-foreground/35">{item.tag}</p>
          <p className="mt-1 text-[13px] font-semibold tracking-tight text-foreground/85 leading-snug">
            {item.title}
          </p>
          <p className="mt-1.5 text-[10.5px] tracking-tight text-foreground/45 leading-snug line-clamp-2">
            {item.overview.slice(0, 72)}…
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Big folder ─── */
function BigFolder({ open }: { open: boolean }) {
  return (
    <div
      className="relative select-none shrink-0"
      style={{ width: 480, height: 390, perspective: 1400 }}
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

  // Only show first 6 items (3 left, 3 right)
  const visible = items.slice(0, 6);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative flex items-center justify-center w-full"
        style={{ height: 720 }}
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
          />
        ))}

        {/* Folder — center, above cards in z */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <BigFolder open={open} />
        </div>
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/25">
        hover to open · click a card to view
      </p>
    </div>
  );
}
