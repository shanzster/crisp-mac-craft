import { useState } from "react";

/* ─── Service data ─── */
export type Service = {
  label: string;
  icon: string;
  tagline: string;
  story: string[];
  tags: string[];
  angle: number;
  x: number;
  y: number;
};

const SERVICES: Service[] = [
  {
    label: "Content Strategist",
    icon: "✦",
    tagline: "Words that build systems, not just posts.",
    story: [
      "I don't just write — I architect content that compounds. Every piece I create is part of a larger system designed to attract, educate, and convert.",
      "From editorial calendars to topic clusters, I build content engines that keep working long after I've shipped them. I've managed pages where a single strategy shift tripled organic reach in under 60 days.",
      "My approach: understand the audience deeply, map the funnel honestly, then create content that earns attention instead of begging for it.",
    ],
    tags: ["Editorial Systems", "SEO Writing", "Content Calendars", "Storytelling"],
    angle: -26,
    x: -260,
    y: -80,
  },
  {
    label: "Social Media Marketing",
    icon: "◈",
    tagline: "Scroll-stopping content for real audiences.",
    story: [
      "I've managed social pages for local businesses, tourism offices, and fashion brands — each with a completely different voice, audience, and goal.",
      "For Steal & Style, I built a playful, witty brand voice that blends Filipino internet humor with trendy aesthetics. For Masinloc Tourism, I created content that made people actually want to visit.",
      "I understand the algorithm, but more importantly I understand people. Engagement isn't a metric I chase — it's a result of content that genuinely resonates.",
    ],
    tags: ["Instagram", "Facebook", "Reels", "Community Building", "Brand Voice"],
    angle: -13,
    x: -130,
    y: -140,
  },
  {
    label: "Brand Identity",
    icon: "◉",
    tagline: "Visuals that make people feel something.",
    story: [
      "Brand identity is more than a logo. It's the feeling someone gets when they see your content before they even read a word.",
      "I work in Illustrator, Photoshop, and Canva to build visual systems — color palettes, typography hierarchies, and design languages that stay consistent across every touchpoint.",
      "My design taste leans premium and modern: clean layouts, strong type, and just enough personality to feel human. I've built identities for print shops, restaurants, and social-first brands.",
    ],
    tags: ["Visual Identity", "Adobe Illustrator", "Typography", "Canva", "Design Systems"],
    angle: 0,
    x: 0,
    y: -165,
  },
  {
    label: "Video Editing",
    icon: "▶",
    tagline: "Edits that hit before the caption loads.",
    story: [
      "I edit with the same instinct I use for design — every cut, caption, and sound choice is intentional. My style is cinematic but internet-native: freeze frames, motion text, and sound design that makes people rewatch.",
      "I've produced vlogs, promotional reels, collection launches, and campaign content. I know the difference between a video that gets views and one that gets saved.",
      "The goal is always the same: make it feel like it was made for the person watching it.",
    ],
    tags: ["Reels", "Vlogs", "Motion Captions", "Sound Design", "Promotional Content"],
    angle: 13,
    x: 130,
    y: -140,
  },
  {
    label: "Campaign Strategy",
    icon: "⬡",
    tagline: "From idea to execution, start to finish.",
    story: [
      "A campaign without strategy is just noise. I plan launches, promotions, and awareness pushes with a clear narrative arc — what we're saying, who we're saying it to, and why they should care.",
      "I've run campaigns for local businesses with zero budget that outperformed paid ads, purely through timing, creative, and community leverage.",
      "My process: define the goal, reverse-engineer the audience journey, build the content stack, then execute with consistency. No guesswork.",
    ],
    tags: ["Launch Strategy", "Campaign Planning", "Organic Growth", "Local Marketing"],
    angle: 26,
    x: 260,
    y: -80,
  },
];

/* ─── Desktop floating elements ─── */
const DESKTOP_ELEMENTS = [
  // ── Left side ──
  {
    id: "folder-webdesign",
    type: "folder",
    label: "web design",
    top: "8%",
    left: "4%",
    size: "sm",
  },
  {
    id: "app-photoshop",
    type: "app",
    label: "Photoshop",
    top: "5%",
    left: "16%",
    icon: <img src="/src/image_reference/logos/PS.png" alt="Photoshop" className="w-full h-full object-cover" />,
  },
  {
    id: "app-capcut",
    type: "app",
    label: "CapCut",
    top: "38%",
    left: "4%",
    icon: <img src="/src/image_reference/logos/capcut.png" alt="CapCut" className="w-full h-full object-cover" />,
  },
  {
    id: "app-illustrator",
    type: "app",
    label: "Illustrator",
    top: "58%",
    left: "16%",
    icon: <img src="/src/image_reference/logos/AI.png" alt="Illustrator" className="w-full h-full object-cover" />,
  },
  {
    id: "folder-portfolio-sm",
    type: "folder",
    label: "portfolio",
    top: "76%",
    left: "5%",
    size: "sm",
  },

  // ── Right side ──
  {
    id: "file-brand",
    type: "file",
    label: "brand_kit.jpeg",
    top: "6%",
    right: "18%",
    preview: {
      bg: "linear-gradient(135deg, oklch(0.75 0.12 260), oklch(0.65 0.18 290))",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/90 text-[11px] font-bold tracking-widest uppercase">Brand</span>
        </div>
      ),
    },
  },
  {
    id: "folder-socialmedia",
    type: "folder",
    label: "social media",
    top: "10%",
    right: "4%",
    size: "sm",
  },
  {
    id: "app-meta-ads",
    type: "app",
    label: "Meta Ads",
    top: "38%",
    right: "4%",
    icon: <img src="/src/image_reference/logos/meta.png" alt="Meta Ads" className="w-full h-full object-cover" />,
  },
  {
    id: "app-canva",
    type: "app",
    label: "Canva",
    top: "58%",
    right: "16%",
    icon: <img src="/src/image_reference/logos/canva.png" alt="Canva" className="w-full h-full object-cover" />,
  },
  {
    id: "file-campaign",
    type: "file",
    label: "campaign_2025.jpeg",
    top: "76%",
    right: "5%",
    preview: {
      bg: "linear-gradient(135deg, oklch(0.82 0.08 85), oklch(0.72 0.14 55))",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-2">
          <div className="text-white/90 text-[9px] font-bold tracking-wider uppercase text-center leading-tight">Campaign<br />2025</div>
        </div>
      ),
    },
  },
];

/* ─── Mini macOS Folder SVG ─── */
function FolderIcon({ size = "sm" }: { size?: "sm" | "md" }) {
  const w = size === "md" ? 72 : 56;
  const h = size === "md" ? 58 : 46;
  return (
    <svg width={w} height={h} viewBox="0 0 72 58" fill="none">
      <rect x="0" y="8" width="72" height="50" rx="6" fill="oklch(0.68 0.14 240)" />
      <rect x="0" y="8" width="72" height="50" rx="6" fill="url(#fgrad)" />
      <path d="M0 14 Q0 8 6 8 L28 8 Q32 8 34 12 L36 16 L72 16 L72 58 Q72 58 66 58 L6 58 Q0 58 0 52 Z" fill="oklch(0.72 0.13 240)" />
      <defs>
        <linearGradient id="fgrad" x1="36" y1="8" x2="36" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.78 0.12 235)" />
          <stop offset="100%" stopColor="oklch(0.64 0.15 242)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Desktop element renderer ─── */
function DesktopItem({ el }: { el: (typeof DESKTOP_ELEMENTS)[number] }) {
  const pos: React.CSSProperties = {
    position: "absolute",
    top: (el as any).top,
    left: (el as any).left,
    right: (el as any).right,
  };

  if (el.type === "folder") {
    return (
      <div style={pos} className="flex flex-col items-center gap-1 select-none">
        <FolderIcon size={(el as any).size} />
        <span className="text-[10px] tracking-tight text-foreground/55 text-center leading-tight max-w-[70px]">
          {el.label}
        </span>
      </div>
    );
  }

  if (el.type === "app") {
    return (
      <div style={pos} className="flex flex-col items-center gap-1 select-none">
        <div
          className="rounded-[16px] overflow-hidden shadow-[0_4px_16px_-4px_oklch(0.2_0.02_240/0.22)]"
          style={{ width: 52, height: 52 }}
        >
          {(el as any).icon}
        </div>
        <span className="text-[10px] tracking-tight text-foreground/55">{el.label}</span>
      </div>
    );
  }

  if (el.type === "file") {
    const preview = (el as any).preview;
    return (
      <div style={pos} className="flex flex-col items-center gap-1 select-none">
        <div
          className="rounded-[6px] overflow-hidden border border-border/60 shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)]"
          style={{
            width: 72,
            height: 88,
            background: preview.bg,
          }}
        >
          {preview.content}
        </div>
        <span className="text-[10px] tracking-tight text-foreground/55 text-center leading-tight max-w-[80px]">
          {el.label}
        </span>
      </div>
    );
  }

  return null;
}

/* ─── Modal ─── */
function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        background: "oklch(0.1 0.01 240 / 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[20px] border border-border bg-card overflow-hidden mac-shadow"
        style={{ animation: "modal-in 0.38s cubic-bezier(.2,.8,.2,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="flex h-[11px] w-[11px] items-center justify-center rounded-full transition hover:opacity-80"
              style={{ background: "var(--traffic-red)" }}
              aria-label="Close"
            />
            <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/60">
            {service.label}.md
          </span>
          <div className="w-[44px]" />
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-start gap-4">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-[20px]"
              style={{ background: "var(--folder)", color: "white" }}
            >
              {service.icon}
            </span>
            <div>
              <h3 className="text-[22px] font-bold tracking-tightest leading-tight text-foreground">
                {service.label}
              </h3>
              <p className="mt-0.5 text-[13px] tracking-tight text-foreground/50">
                {service.tagline}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {service.story.map((para, i) => (
              <p key={i} className="text-[13.5px] leading-relaxed tracking-tight text-foreground/75">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] tracking-tight text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Paper card ─── */
function ServicePaper({
  service,
  index,
  open,
  hoveredIndex,
  onHover,
  onLeave,
  onClick,
}: {
  service: Service;
  index: number;
  open: boolean;
  hoveredIndex: number | null;
  onHover: (i: number) => void;
  onLeave: () => void;
  onClick: (s: Service) => void;
}) {
  const isHovered = hoveredIndex === index;
  const isNeighbor =
    hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) === 1;
  const isFarNeighbor =
    hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) >= 2;

  const extraX = isNeighbor
    ? index < (hoveredIndex ?? 0) ? -36 : 36
    : isFarNeighbor
    ? index < (hoveredIndex ?? 0) ? -18 : 18
    : 0;
  const extraY = isHovered ? -32 : 0;

  return (
    <div
      className="absolute"
      style={{
        bottom: 168,
        left: "50%",
        transform: open
          ? `translateX(-50%) translateX(${service.x + extraX}px) translateY(${service.y + extraY}px) rotate(${isHovered ? 0 : service.angle}deg) scale(${isHovered ? 1.07 : 1})`
          : `translateX(-50%) translateX(0px) translateY(20px) rotate(0deg) scale(1)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.52s cubic-bezier(.2,.8,.2,1) ${index * 45}ms, opacity 0.38s ease ${index * 45}ms`,
        zIndex: isHovered ? 30 : 10 + index,
        cursor: open ? "pointer" : "default",
        pointerEvents: open ? "auto" : "none",
      }}
      onMouseEnter={() => open && onHover(index)}
      onMouseLeave={() => open && onLeave()}
      onClick={() => open && onClick(service)}
    >
      <div
        className="rounded-[10px] border bg-paper transition-all duration-300"
        style={{
          width: isHovered ? 196 : 162,
          borderColor: isHovered ? "oklch(0.74 0.13 240 / 0.5)" : "oklch(0.88 0.005 240)",
          boxShadow: isHovered
            ? "0 18px 44px -8px oklch(0.2 0.02 240 / 0.24), 0 0 0 1px oklch(0.74 0.13 240 / 0.15)"
            : "0 6px 18px -6px oklch(0.2 0.02 240 / 0.18)",
          padding: isHovered ? "12px 14px 14px" : "10px 12px",
        }}
      >
        {/* Binder holes */}
        <div className="flex flex-col gap-1.5 absolute left-2.5 top-1/2 -translate-y-1/2">
          <div className="h-1 w-1 rounded-full bg-foreground/12" />
          <div className="h-1 w-1 rounded-full bg-foreground/12" />
        </div>

        <div className="pl-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[13px]" style={{ color: "var(--folder)" }}>
              {service.icon}
            </span>
            <p className="text-[11px] font-semibold tracking-tight text-foreground/85 leading-snug">
              {service.label}
            </p>
          </div>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: isHovered ? 70 : 0, opacity: isHovered ? 1 : 0 }}
          >
            <p className="mt-1.5 text-[10.5px] leading-snug tracking-tight text-foreground/55">
              {service.tagline}
            </p>
            <p className="mt-2 text-[10px] tracking-[0.12em] uppercase text-foreground/35">
              click to read more →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Big central folder ─── */
function BigFolder({ open }: { open: boolean }) {
  return (
    <div
      className="relative select-none cursor-default"
      style={{ width: 320, height: 260, perspective: 1100 }}
    >
      {/* Shadow */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: 260,
          height: 24,
          background: "oklch(0.55 0.12 240 / 0.22)",
          filter: "blur(14px)",
          transition: "opacity 0.4s",
          opacity: open ? 0.5 : 0.8,
        }}
      />
      {/* Back panel */}
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{
          background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))",
        }}
      />
      {/* Tab */}
      <div
        className="absolute -top-5 left-4 h-7 w-[42%] rounded-t-[12px]"
        style={{
          background: "linear-gradient(90deg, oklch(0.68 0.14 238), oklch(0.64 0.15 242))",
        }}
      />
      {/* Front flap */}
      <div
        className="absolute inset-0 rounded-[20px] origin-bottom"
        style={{
          background: "linear-gradient(160deg, oklch(0.78 0.12 232) 0%, oklch(0.68 0.15 242) 100%)",
          boxShadow:
            "inset 0 1.5px 0 oklch(1 0 0 / 0.28), inset 0 -1px 0 oklch(0.5 0.1 240 / 0.15), 0 12px 40px -10px oklch(0.3 0.1 240 / 0.4)",
          transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
          transition: "transform 0.52s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        {/* Shine */}
        <div
          className="absolute inset-x-6 top-4 h-px rounded-full"
          style={{ background: "oklch(1 0 0 / 0.22)" }}
        />
        <div
          className="absolute inset-x-10 top-6 h-px rounded-full"
          style={{ background: "oklch(1 0 0 / 0.10)" }}
        />
        {!open && (
          <div className="absolute bottom-4 right-5 text-[11px] tracking-[0.22em] uppercase text-white/45 font-medium">
            portfolio
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export function HeroFolder() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}

      {/* Fill parent height entirely */}
      <div className="relative w-full h-full">
        {/* ── Static desktop elements ── */}
        {DESKTOP_ELEMENTS.map((el) => (
          <DesktopItem key={el.id} el={el} />
        ))}

        {/* ── Interactive folder zone (centered, anchored to bottom) ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          style={{ width: 700 }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => {
            setOpen(false);
            setHoveredIndex(null);
          }}
        >
          {/* Papers */}
          {SERVICES.map((s, i) => (
            <ServicePaper
              key={s.label}
              service={s}
              index={i}
              open={open}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              onLeave={() => setHoveredIndex(null)}
              onClick={setActiveService}
            />
          ))}

          {/* Big folder */}
          <div className="flex justify-center pb-6" style={{ paddingTop: 260 }}>
            <BigFolder open={open} />
          </div>
        </div>

        {/* Hover hint — bottom center above folder */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ bottom: 8, opacity: open ? 0 : 1, transition: "opacity 0.3s" }}
        >
          <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/25">
            hover the folder
          </p>
        </div>
      </div>
    </>
  );
}
