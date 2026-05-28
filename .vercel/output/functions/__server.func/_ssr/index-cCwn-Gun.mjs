import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { N as NavBar } from "./NavBar-BW_mhBgI.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { W as WORK_ITEMS } from "./router-CO1TR2Dx.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/cookie-es.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function MacWindow({ label, title, children, rightChip, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mac-shadow overflow-hidden rounded-[12px] border border-border bg-card ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full bg-[var(--traffic-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full bg-[var(--traffic-yellow)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full bg-[var(--traffic-green)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] tracking-tight text-foreground/70", children: [
        label ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-foreground/40", children: label }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[44px] text-right", children: rightChip && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-background px-2 py-0.5 text-[10px] tracking-tight text-foreground/70 border border-border", children: rightChip }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children })
  ] });
}
const ROLES = [
  "content strategist",
  "growth marketer",
  "social media manager",
  "brand storyteller",
  "video editor"
];
function SelectingRoles() {
  const [i, setI] = reactExports.useState(0);
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % ROLES.length);
        setVisible(true);
      }, 180);
    }, 2600);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "auto-select",
      style: {
        opacity: visible ? 1 : 0,
        transition: "opacity 0.18s ease"
      },
      children: ROLES[i]
    },
    i
  );
}
const SERVICES = [
  {
    label: "Content Strategist",
    icon: "✦",
    tagline: "Words that build systems, not just posts.",
    story: [
      "I don't just write — I architect content that compounds. Every piece I create is part of a larger system designed to attract, educate, and convert.",
      "From editorial calendars to topic clusters, I build content engines that keep working long after I've shipped them. I've managed pages where a single strategy shift tripled organic reach in under 60 days.",
      "My approach: understand the audience deeply, map the funnel honestly, then create content that earns attention instead of begging for it."
    ],
    tags: ["Editorial Systems", "SEO Writing", "Content Calendars", "Storytelling"],
    angle: -26,
    x: -260,
    y: -80
  },
  {
    label: "Social Media Marketing",
    icon: "◈",
    tagline: "Scroll-stopping content for real audiences.",
    story: [
      "I've managed social pages for local businesses, tourism offices, and fashion brands — each with a completely different voice, audience, and goal.",
      "For Steal & Style, I built a playful, witty brand voice that blends Filipino internet humor with trendy aesthetics. For Masinloc Tourism, I created content that made people actually want to visit.",
      "I understand the algorithm, but more importantly I understand people. Engagement isn't a metric I chase — it's a result of content that genuinely resonates."
    ],
    tags: ["Instagram", "Facebook", "Reels", "Community Building", "Brand Voice"],
    angle: -13,
    x: -130,
    y: -140
  },
  {
    label: "Brand Identity",
    icon: "◉",
    tagline: "Visuals that make people feel something.",
    story: [
      "Brand identity is more than a logo. It's the feeling someone gets when they see your content before they even read a word.",
      "I work in Illustrator, Photoshop, and Canva to build visual systems — color palettes, typography hierarchies, and design languages that stay consistent across every touchpoint.",
      "My design taste leans premium and modern: clean layouts, strong type, and just enough personality to feel human. I've built identities for print shops, restaurants, and social-first brands."
    ],
    tags: ["Visual Identity", "Adobe Illustrator", "Typography", "Canva", "Design Systems"],
    angle: 0,
    x: 0,
    y: -165
  },
  {
    label: "Video Editing",
    icon: "▶",
    tagline: "Edits that hit before the caption loads.",
    story: [
      "I edit with the same instinct I use for design — every cut, caption, and sound choice is intentional. My style is cinematic but internet-native: freeze frames, motion text, and sound design that makes people rewatch.",
      "I've produced vlogs, promotional reels, collection launches, and campaign content. I know the difference between a video that gets views and one that gets saved.",
      "The goal is always the same: make it feel like it was made for the person watching it."
    ],
    tags: ["Reels", "Vlogs", "Motion Captions", "Sound Design", "Promotional Content"],
    angle: 13,
    x: 130,
    y: -140
  },
  {
    label: "Campaign Strategy",
    icon: "⬡",
    tagline: "From idea to execution, start to finish.",
    story: [
      "A campaign without strategy is just noise. I plan launches, promotions, and awareness pushes with a clear narrative arc — what we're saying, who we're saying it to, and why they should care.",
      "I've run campaigns for local businesses with zero budget that outperformed paid ads, purely through timing, creative, and community leverage.",
      "My process: define the goal, reverse-engineer the audience journey, build the content stack, then execute with consistency. No guesswork."
    ],
    tags: ["Launch Strategy", "Campaign Planning", "Organic Growth", "Local Marketing"],
    angle: 26,
    x: 260,
    y: -80
  }
];
const DESKTOP_ELEMENTS = [
  // ── Left side ──
  {
    id: "folder-webdesign",
    type: "folder",
    label: "web design",
    top: "8%",
    left: "4%",
    size: "sm"
  },
  {
    id: "app-photoshop",
    type: "app",
    label: "Photoshop",
    top: "5%",
    left: "16%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/PS.png", alt: "Photoshop", className: "w-full h-full object-cover" })
  },
  {
    id: "app-capcut",
    type: "app",
    label: "CapCut",
    top: "38%",
    left: "4%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/capcut.png", alt: "CapCut", className: "w-full h-full object-cover" })
  },
  {
    id: "app-illustrator",
    type: "app",
    label: "Illustrator",
    top: "58%",
    left: "16%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/AI.png", alt: "Illustrator", className: "w-full h-full object-cover" })
  },
  {
    id: "folder-portfolio-sm",
    type: "folder",
    label: "portfolio",
    top: "76%",
    left: "5%",
    size: "sm"
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
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 text-[11px] font-bold tracking-widest uppercase", children: "Brand" }) })
    }
  },
  {
    id: "folder-socialmedia",
    type: "folder",
    label: "social media",
    top: "10%",
    right: "4%",
    size: "sm"
  },
  {
    id: "app-meta-ads",
    type: "app",
    label: "Meta Ads",
    top: "38%",
    right: "4%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/meta.png", alt: "Meta Ads", className: "w-full h-full object-cover" })
  },
  {
    id: "app-canva",
    type: "app",
    label: "Canva",
    top: "58%",
    right: "16%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/canva.png", alt: "Canva", className: "w-full h-full object-cover" })
  },
  {
    id: "file-campaign",
    type: "file",
    label: "campaign_2025.jpeg",
    top: "76%",
    right: "5%",
    preview: {
      bg: "linear-gradient(135deg, oklch(0.82 0.08 85), oklch(0.72 0.14 55))",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col items-center justify-center gap-1 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/90 text-[9px] font-bold tracking-wider uppercase text-center leading-tight", children: [
        "Campaign",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "2025"
      ] }) })
    }
  }
];
function FolderIcon({ size = "sm" }) {
  const w = size === "md" ? 72 : 56;
  const h = size === "md" ? 58 : 46;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: w, height: h, viewBox: "0 0 72 58", fill: "none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "8", width: "72", height: "50", rx: "6", fill: "oklch(0.68 0.14 240)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "8", width: "72", height: "50", rx: "6", fill: "url(#fgrad)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 14 Q0 8 6 8 L28 8 Q32 8 34 12 L36 16 L72 16 L72 58 Q72 58 66 58 L6 58 Q0 58 0 52 Z", fill: "oklch(0.72 0.13 240)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "fgrad", x1: "36", y1: "8", x2: "36", y2: "58", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.78 0.12 235)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.64 0.15 242)" })
    ] }) })
  ] });
}
function DesktopItem({ el }) {
  const pos = {
    position: "absolute",
    top: el.top,
    left: el.left,
    right: el.right
  };
  if (el.type === "folder") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: pos, className: "flex flex-col items-center gap-1 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon, { size: el.size }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/55 text-center leading-tight max-w-[70px]", children: el.label })
    ] });
  }
  if (el.type === "app") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: pos, className: "flex flex-col items-center gap-1 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-[16px] overflow-hidden shadow-[0_4px_16px_-4px_oklch(0.2_0.02_240/0.22)]",
          style: { width: 52, height: 52 },
          children: el.icon
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/55", children: el.label })
    ] });
  }
  if (el.type === "file") {
    const preview = el.preview;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: pos, className: "flex flex-col items-center gap-1 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-[6px] overflow-hidden border border-border/60 shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)]",
          style: {
            width: 72,
            height: 88,
            background: preview.bg
          },
          children: preview.content
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/55 text-center leading-tight max-w-[80px]", children: el.label })
    ] });
  }
  return null;
}
function ServiceModal({
  service,
  onClose
}) {
  const modal = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: { zIndex: 99999, background: "rgba(0,0,0,0.6)" },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative w-full max-w-lg rounded-[20px] border border-border bg-card overflow-hidden mac-shadow",
          style: { animation: "modal-in 0.38s cubic-bezier(.2,.8,.2,1) both" },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "flex h-[11px] w-[11px] items-center justify-center rounded-full transition hover:opacity-80",
                    style: { background: "var(--traffic-red)" },
                    "aria-label": "Close"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] tracking-tight text-foreground/60", children: [
                service.label,
                ".md"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[44px]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-[20px]",
                    style: { background: "var(--folder)", color: "white" },
                    children: service.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[22px] font-bold tracking-tightest leading-tight text-foreground", children: service.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[13px] tracking-tight text-foreground/50", children: service.tagline })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: service.story.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] leading-relaxed tracking-tight text-foreground/75", children: para }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: service.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] tracking-tight text-foreground/60",
                  children: tag
                },
                tag
              )) })
            ] })
          ]
        }
      )
    }
  );
  return reactDomExports.createPortal(modal, document.body);
}
function ServicePaper({
  service,
  index,
  open,
  hoveredIndex,
  onHover,
  onLeave,
  onClick
}) {
  const isHovered = hoveredIndex === index;
  const isNeighbor = hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) === 1;
  const isFarNeighbor = hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) >= 2;
  const extraX = isNeighbor ? index < (hoveredIndex ?? 0) ? -36 : 36 : isFarNeighbor ? index < (hoveredIndex ?? 0) ? -18 : 18 : 0;
  const extraY = isHovered ? -32 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute",
      style: {
        bottom: 168,
        left: "50%",
        transform: open ? `translateX(-50%) translateX(${service.x + extraX}px) translateY(${service.y + extraY}px) rotate(${isHovered ? 0 : service.angle}deg) scale(${isHovered ? 1.07 : 1})` : `translateX(-50%) translateX(0px) translateY(20px) rotate(0deg) scale(1)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.52s cubic-bezier(.2,.8,.2,1) ${index * 45}ms, opacity 0.38s ease ${index * 45}ms`,
        zIndex: isHovered ? 30 : 10 + index,
        cursor: open ? "pointer" : "default",
        pointerEvents: open ? "auto" : "none"
      },
      onMouseEnter: () => open && onHover(index),
      onMouseLeave: () => open && onLeave(),
      onClick: () => open && onClick(service),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-[10px] border bg-paper transition-all duration-300",
          style: {
            width: isHovered ? 196 : 162,
            borderColor: isHovered ? "oklch(0.74 0.13 240 / 0.5)" : "oklch(0.88 0.005 240)",
            boxShadow: isHovered ? "0 18px 44px -8px oklch(0.2 0.02 240 / 0.24), 0 0 0 1px oklch(0.74 0.13 240 / 0.15)" : "0 6px 18px -6px oklch(0.2 0.02 240 / 0.18)",
            padding: isHovered ? "12px 14px 14px" : "10px 12px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 absolute left-2.5 top-1/2 -translate-y-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-foreground/12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-foreground/12" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px]", style: { color: "var(--folder)" }, children: service.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold tracking-tight text-foreground/85 leading-snug", children: service.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "overflow-hidden transition-all duration-300",
                  style: { maxHeight: isHovered ? 70 : 0, opacity: isHovered ? 1 : 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10.5px] leading-snug tracking-tight text-foreground/55", children: service.tagline }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] tracking-[0.12em] uppercase text-foreground/35", children: "click to read more →" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function BigFolder$1({ open }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative select-none cursor-default",
      style: { width: "min(320px, 80vw)", height: "min(260px, 65vh)", perspective: 1100 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full",
            style: {
              width: 260,
              height: 24,
              background: "oklch(0.55 0.12 240 / 0.22)",
              filter: "blur(14px)",
              transition: "opacity 0.4s",
              opacity: open ? 0.5 : 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[20px]",
            style: {
              background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-5 left-4 h-7 w-[42%] rounded-t-[12px]",
            style: {
              background: "linear-gradient(90deg, oklch(0.68 0.14 238), oklch(0.64 0.15 242))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 rounded-[20px] origin-bottom",
            style: {
              background: "linear-gradient(160deg, oklch(0.78 0.12 232) 0%, oklch(0.68 0.15 242) 100%)",
              boxShadow: "inset 0 1.5px 0 oklch(1 0 0 / 0.28), inset 0 -1px 0 oklch(0.5 0.1 240 / 0.15), 0 12px 40px -10px oklch(0.3 0.1 240 / 0.4)",
              transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
              transition: "transform 0.52s cubic-bezier(.2,.8,.2,1)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-x-6 top-4 h-px rounded-full",
                  style: { background: "oklch(1 0 0 / 0.22)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-x-10 top-6 h-px rounded-full",
                  style: { background: "oklch(1 0 0 / 0.10)" }
                }
              ),
              !open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-5 text-[11px] tracking-[0.22em] uppercase text-white/45 font-medium", children: "portfolio" })
            ]
          }
        )
      ]
    }
  );
}
function HeroFolder() {
  const [open, setOpen] = reactExports.useState(false);
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const [activeService, setActiveService] = reactExports.useState(null);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const [mobileModalOpen, setMobileModalOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const m = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  reactExports.useEffect(() => {
    const locked = mobileModalOpen || !!activeService;
    const prev = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileModalOpen, activeService]);
  const [expandedIndex, setExpandedIndex] = reactExports.useState(null);
  const [modalExpandedIndex, setModalExpandedIndex] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    activeService && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceModal, { service: activeService, onClose: () => setActiveService(null) }),
    mobileModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center p-2", style: { zIndex: 99999, background: "rgba(0,0,0,0.6)" }, onClick: () => setMobileModalOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full rounded-[12px] border border-border bg-card p-3", style: { width: "100%", maxWidth: 360, margin: "0 8px" }, onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "Choose a service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMobileModalOpen(false), className: "text-sm text-foreground/60", children: "Close" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxHeight: "78vh", overflow: "auto" }, className: "space-y-2", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[10px] border border-border bg-secondary/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px]", style: { color: "var(--folder)" }, children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-foreground/60", children: s.tagline })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setModalExpandedIndex(modalExpandedIndex === i ? null : i), className: "text-sm text-foreground/50", children: modalExpandedIndex === i ? "Hide" : "Show" })
          ] }),
          modalExpandedIndex === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[13px] text-foreground/75", children: s.story.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px]", children: p }, idx)) })
        ] }, s.label)) })
      ] }) }),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: DESKTOP_ELEMENTS.map((el) => /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopItem, { el }, el.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute left-1/2 -translate-x-1/2 bottom-0",
          style: { width: "90vw", maxWidth: 700 },
          onMouseEnter: () => !isMobile && setOpen(true),
          onMouseLeave: () => {
            if (!isMobile) {
              setOpen(false);
              setHoveredIndex(null);
            }
          },
          onClick: () => {
            if (isMobile) {
              setMobileModalOpen(true);
            } else {
              setOpen((o) => !o);
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ServicePaper,
              {
                service: s,
                index: i,
                open,
                hoveredIndex,
                onHover: setHoveredIndex,
                onLeave: () => setHoveredIndex(null),
                onClick: setActiveService
              },
              s.label
            )) }),
            isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "md:hidden absolute left-1/2 -translate-x-1/2",
                style: { bottom: "calc(100% + 12px)", width: "100%", zIndex: 20 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid grid-cols-2 gap-2", style: { width: "min(360px, calc(100% - 24px))", maxHeight: "56vh", overflow: "auto" }, children: SERVICES.slice(0, 6).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[10px] p-2 bg-paper border border-border/60 text-left shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px]", style: { color: "var(--folder)" }, children: s.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tracking-tight text-foreground", children: s.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                        setExpandedIndex(expandedIndex === i ? null : i);
                      }, className: "text-[11px] text-foreground/50", children: expandedIndex === i ? "close" : "open" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-foreground/60", children: s.tagline }),
                    expandedIndex === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[12.5px] text-foreground/75", children: s.story.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12.5px]", children: p }, idx)) })
                  ] })
                ] }) }, s.label)) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pb-6", style: { paddingTop: 260 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BigFolder$1, { open }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none",
          style: { bottom: 8, opacity: open ? 0 : 1, transition: "opacity 0.3s" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-[0.2em] uppercase text-foreground/25", children: "hover the folder" })
        }
      )
    ] })
  ] });
}
function AboutScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full h-full rounded-[16px] overflow-hidden",
      style: { minHeight: 500 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/src/image_reference/profile.png",
            alt: "Shanzster",
            className: "absolute inset-0 w-full h-full object-cover object-top",
            style: { mixBlendMode: "multiply" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 bottom-0",
            style: {
              height: "45%",
              background: "linear-gradient(to top, oklch(0.97 0.005 240) 0%, oklch(0.97 0.005 240 / 0.85) 40%, transparent 100%)",
              zIndex: 2
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute bottom-0 inset-x-0 px-7 pb-7",
            style: { zIndex: 3 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.28em] text-foreground/40 mb-1", children: "about me" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest text-foreground leading-tight", children: "Shanzster" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[13px] tracking-tight text-foreground/55", children: "Creative Developer · Social Media Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: [
                { v: "4+", l: "pages managed" },
                { v: "3", l: "brands built" },
                { v: "2+", l: "yrs freelance" }
              ].map(({ v, l }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1",
                  style: { backdropFilter: "blur(8px)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-bold tracking-tightest text-foreground", children: v }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/45", children: l })
                  ]
                },
                l
              )) })
            ]
          }
        )
      ]
    }
  );
}
const POSITIONS = [
  // Left column — top to bottom
  { x: -380, y: -200, rot: -5, side: "left" },
  { x: -380, y: 0, rot: -3, side: "left" },
  { x: -380, y: 200, rot: -7, side: "left" },
  // Right column — top to bottom
  { x: 380, y: -200, rot: 5, side: "right" },
  { x: 380, y: 0, rot: 3, side: "right" },
  { x: 380, y: 200, rot: 7, side: "right" }
];
function WorkPaper({
  item,
  index,
  open,
  hoveredIndex,
  onHover,
  onLeave
}) {
  const navigate = useNavigate();
  const isHovered = hoveredIndex === index;
  const pos = POSITIONS[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute cursor-pointer select-none",
      style: {
        top: "50%",
        left: "50%",
        width: 200,
        height: 260,
        marginTop: -130,
        marginLeft: -100,
        transform: open ? `translate(${pos.x}px, ${pos.y + (isHovered ? -14 : 0)}px) rotate(${isHovered ? 0 : pos.rot}deg) scale(${isHovered ? 1.05 : 1})` : `translate(0px, 30px) rotate(0deg) scale(0.8)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.65s cubic-bezier(.2,.8,.2,1) ${index * 60}ms, opacity 0.4s ease ${index * 60}ms`,
        zIndex: isHovered ? 40 : 20 + index
      },
      onMouseEnter: () => open && onHover(index),
      onMouseLeave: () => open && onLeave(),
      onClick: () => open && navigate({ to: "/work/$id", params: { id: item.id } }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full rounded-[14px] border overflow-hidden transition-all duration-300",
          style: {
            borderColor: isHovered ? "oklch(0.74 0.13 240 / 0.55)" : "oklch(0.88 0.005 240)",
            boxShadow: isHovered ? "0 28px 60px -10px oklch(0.2 0.02 240 / 0.35), 0 0 0 1.5px oklch(0.74 0.13 240 / 0.2)" : "0 8px 28px -6px oklch(0.2 0.02 240 / 0.22)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "w-full relative flex items-center justify-center",
                style: { height: 165, background: item.color },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[40px]", children: "✦" }),
                  isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2.5 right-2.5 rounded-full bg-black/25 px-2 py-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-white/80 font-medium", children: "open →" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-paper px-4 py-3 border-t border-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.14em] text-foreground/35", children: item.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] font-semibold tracking-tight text-foreground/85 leading-snug", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-[10.5px] tracking-tight text-foreground/45 leading-snug line-clamp-2", children: [
                item.overview.slice(0, 72),
                "…"
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function BigFolder({ open }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative select-none shrink-0",
      style: { width: 480, height: 390, perspective: 1400 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full",
            style: {
              width: 380,
              height: 32,
              background: "oklch(0.55 0.12 240 / 0.22)",
              filter: "blur(20px)",
              opacity: open ? 0.3 : 0.65,
              transition: "opacity 0.4s"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[28px]",
            style: { background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-7 left-6 h-10 w-[38%] rounded-t-[16px]",
            style: { background: "linear-gradient(90deg, oklch(0.68 0.14 238), oklch(0.64 0.15 242))" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 rounded-[28px] origin-bottom",
            style: {
              background: "linear-gradient(160deg, oklch(0.82 0.10 230) 0%, oklch(0.72 0.13 242) 100%)",
              boxShadow: "inset 0 2.5px 0 oklch(1 0 0 / 0.30), inset 0 -1px 0 oklch(0.5 0.1 240 / 0.12), 0 20px 60px -14px oklch(0.3 0.1 240 / 0.5)",
              transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
              transition: "transform 0.55s cubic-bezier(.2,.8,.2,1)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-10 top-6 h-px rounded-full", style: { background: "oklch(1 0 0 / 0.24)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-16 top-9 h-px rounded-full", style: { background: "oklch(1 0 0 / 0.12)" } }),
              !open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-6 right-8 text-[13px] tracking-[0.24em] uppercase text-white/35 font-medium", children: "selected work" })
            ]
          }
        )
      ]
    }
  );
}
function WorkFolderScene({ items }) {
  const [open, setOpen] = reactExports.useState(false);
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const visible = items.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex items-center justify-center w-full",
        style: { height: 720 },
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => {
          setOpen(false);
          setHoveredIndex(null);
        },
        children: [
          visible.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            WorkPaper,
            {
              item,
              index: i,
              open,
              hoveredIndex,
              onHover: setHoveredIndex,
              onLeave: () => setHoveredIndex(null)
            },
            item.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BigFolder, { open }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/25", children: "hover to open · click a card to view" })
  ] });
}
function useScrollReveal(threshold = 0.12) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(.2,.8,.2,1) ${delay}ms`
      },
      children
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1400px] px-6 pb-28 pt-6 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toolkit, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialFeed, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: {
    height: "calc(100dvh - 6rem)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none", style: {
      background: "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.74 0.13 240 / 0.13) 0%, transparent 70%), radial-gradient(ellipse 45% 35% at 88% 12%, oklch(0.78 0.10 260 / 0.07) 0%, transparent 60%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center px-8 pt-6 pb-2 text-center sm:px-14", style: {
        flexShrink: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 mb-3 hero-drop hero-drop-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/Shanzster_Logo.png", alt: "Shanzster Logo", className: "h-8 w-auto object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: {
              background: "var(--traffic-green)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.26em] text-foreground/40", children: "Social Media Manager · Content Creator · Available 2026" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.9] hero-drop hero-drop-2", style: {
          fontSize: "clamp(38px, 6vw, 88px)"
        }, children: "Your One Man" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest leading-[0.9] hero-drop hero-drop-3", style: {
          fontSize: "clamp(38px, 6vw, 88px)",
          color: "oklch(0.18 0.01 240 / 0.25)"
        }, children: "Creative." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[clamp(13px,1.3vw,16px)] tracking-tight text-foreground/45 max-w-sm hero-drop hero-drop-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectingRoles, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink text-foreground/40", children: "|" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 min-h-0 hero-drop hero-drop-5", style: {
        minHeight: 0
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroFolder, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 py-4 hero-drop hero-drop-6", style: {
        flexShrink: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "rounded-full bg-foreground px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-background transition hover:opacity-85", children: "See the work →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-full border border-border bg-card px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-foreground transition hover:bg-secondary", children: "Hire me" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 divide-x sm:divide-x divide-border border-t border-border/40 hero-drop hero-drop-7", style: {
        flexShrink: 0
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "6+", label: "brands managed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "3+", label: "brands built" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "2+", label: "yrs freelancing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "↑", label: "organic growth always" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border-t border-border/30 bg-secondary/30", style: {
        flexShrink: 0
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker flex gap-10 whitespace-nowrap py-2.5 text-[11px] tracking-tight text-foreground/35", children: ["Social Media Management", "Brand Identity", "Content Strategy", "Meta Ads", "Video Editing", "Canva Templates", "Reels & Short-form", "Community Management", "Campaign Planning", "Visual Storytelling"].flatMap((t, i, a) => [...a, ...a]).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/20", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
      ] }, i)) }) })
    ] })
  ] });
}
function Stat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 sm:px-5 sm:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[22px] sm:text-[28px] leading-none tracking-tightest font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-foreground/45", children: label })
  ] });
}
const TOOLS = [
  // ── Creative ──
  {
    name: "Photoshop",
    category: "Photo editing",
    group: "Creative",
    how: "I use Photoshop for retouching campaign photos, building social media templates, and creating high-quality thumbnails and promotional visuals that stop the scroll.",
    usedFor: ["Campaign visuals", "Photo retouching", "Thumbnail design", "Ad creatives"],
    lineX: -70,
    lineY: 38,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/PS.png", alt: "Photoshop", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "Illustrator",
    category: "Vector design",
    group: "Creative",
    how: "Illustrator is my go-to for building brand identities from scratch — logos, icon sets, brand guidelines, and print-ready assets that scale perfectly at any size.",
    usedFor: ["Logo design", "Brand identity", "Icon sets", "Print assets"],
    lineX: 70,
    lineY: -38,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/AI.png", alt: "Illustrator", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "Canva",
    category: "Brand visuals",
    group: "Creative",
    how: "Canva is where I build fast, on-brand content at scale — social posts, stories, decks, and client-ready presentations. I use it to maintain visual consistency across all platforms.",
    usedFor: ["Social posts", "Stories", "Pitch decks", "Brand templates"],
    lineX: 70,
    lineY: 44,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/canva.png", alt: "Canva", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "CapCut",
    category: "Video editing",
    group: "Creative",
    how: "CapCut is my primary video editor for Reels and short-form content. I use it for freeze-frame edits, motion captions, sound design, and cinematic cuts that drive replays.",
    usedFor: ["Reels editing", "Motion captions", "Vlogs", "Promo videos"],
    lineX: -70,
    lineY: 44,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/capcut.png", alt: "CapCut", className: "w-full h-full object-cover rounded-[16px]" })
  },
  // ── Marketing ──
  {
    name: "Meta Ads",
    category: "Paid social",
    group: "Marketing",
    how: "I use Meta Ads Manager to plan, launch, and optimize paid campaigns on Facebook and Instagram — from audience targeting and creative testing to budget management and performance reporting.",
    usedFor: ["Campaign setup", "Audience targeting", "A/B testing", "Performance reports"],
    lineX: -70,
    lineY: -38,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/meta.png", alt: "Meta Ads", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "SocialBlade",
    category: "Analytics & trends",
    group: "Marketing",
    how: "SocialBlade helps me track competitor growth, benchmark page performance, and spot trends before they peak. I use it to inform content strategy and identify what's working in a niche.",
    usedFor: ["Competitor tracking", "Growth benchmarking", "Trend spotting", "Niche research"],
    lineX: 70,
    lineY: -38,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#1a1a2e" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "58", textAnchor: "middle", fontSize: "13", fontWeight: "800", fill: "#e94560", fontFamily: "Arial, sans-serif", children: "SB" })
    ] })
  },
  // ── Productivity ──
  {
    name: "Notion",
    category: "Planning & docs",
    group: "Productivity",
    how: "Notion is my content command center. I use it to build editorial calendars, track campaign briefs, manage client deliverables, and document brand guidelines — everything in one place.",
    usedFor: ["Content calendars", "Campaign briefs", "Client docs", "Brand guidelines"],
    lineX: -70,
    lineY: 44,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#fff", stroke: "#e5e5e5", strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "66", textAnchor: "middle", fontSize: "48", fontWeight: "900", fill: "#000", fontFamily: "Arial, sans-serif", children: "N" })
    ] })
  },
  // ── AI ──
  {
    name: "ChatGPT",
    category: "AI writing",
    group: "AI",
    how: "I use ChatGPT to accelerate content creation — drafting captions, brainstorming campaign angles, writing ad copy variations, and refining brand voice. It's a creative partner, not a replacement.",
    usedFor: ["Caption writing", "Ad copy", "Campaign ideation", "Brand voice"],
    lineX: 70,
    lineY: 44,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#10a37f" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "62", textAnchor: "middle", fontSize: "13", fontWeight: "700", fill: "#fff", fontFamily: "Arial, sans-serif", children: "ChatGPT" })
    ] })
  },
  {
    name: "Adobe Firefly",
    category: "AI image gen",
    group: "AI",
    how: "Adobe Firefly lets me generate and edit visuals directly inside Photoshop and Illustrator — filling backgrounds, generating concept art, and creating on-brand imagery faster than traditional methods.",
    usedFor: ["Generative fill", "Concept visuals", "Background gen", "Creative exploration"],
    lineX: -70,
    lineY: -38,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#1c0a3a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "62", textAnchor: "middle", fontSize: "13", fontWeight: "700", fill: "#e040fb", fontFamily: "Arial, sans-serif", children: "Firefly" })
    ] })
  }
];
function ToolsShowcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-10 pt-12 pb-10 border-b border-border", children: [
      [{
        top: "14%",
        left: "3%"
      }, {
        top: "10%",
        left: "20%"
      }, {
        top: "12%",
        right: "22%"
      }, {
        top: "14%",
        right: "4%"
      }].map((pos, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute select-none pointer-events-none text-[11px]", style: {
        ...pos,
        color: "oklch(0.18 0.01 240 / 0.15)"
      }, children: "★" }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-bold tracking-tightest leading-none", style: {
        fontSize: "clamp(34px, 5.5vw, 72px)",
        color: "oklch(0.38 0.22 255)"
      }, children: "[ my toolkit ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center justify-center gap-5 flex-wrap", children: TOOLS.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[16px] overflow-hidden shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)] transition-transform duration-200 group-hover:-translate-y-1", style: {
          width: 52,
          height: 52
        }, children: tool.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-tight text-foreground/40", children: tool.name })
      ] }, tool.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-border", children: TOOLS.map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 px-7 py-6 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[12px] overflow-hidden shrink-0 shadow-[0_3px_10px_-3px_oklch(0.2_0.02_240/0.18)]", style: {
        width: 44,
        height: 44
      }, children: tool.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: tool.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2 py-0.5 text-[9px] tracking-tight text-foreground/40", children: tool.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[12px] leading-relaxed tracking-tight text-foreground/55", children: tool.how })
      ] })
    ] }, tool.name)) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "mt-20", style: {
    height: "calc(100dvh - 5rem)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "01", title: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2", style: {
      height: "calc(100% - 3rem)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col rounded-[16px] border border-border bg-card overflow-hidden h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 pt-8 pb-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "01 — who i am" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold tracking-tightest text-foreground leading-[0.92]", style: {
            fontSize: "clamp(26px, 2.6vw, 40px)"
          }, children: [
            "I grow pages.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "oklch(0.18 0.01 240 / 0.28)"
            }, children: "Build brands." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "oklch(0.18 0.01 240 / 0.28)"
            }, children: "Make content stick." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-sm", children: "Social media manager & creative developer from Subic Bay, Philippines. I've grown pages from zero, launched brand identities, and run campaigns without a budget — just strategy and consistency." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border border-b border-border", children: [{
          v: "6+",
          l: "brands managed"
        }, {
          v: "2+",
          l: "yrs freelancing"
        }, {
          v: "3+",
          l: "brands built"
        }].map(({
          v,
          l
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[26px] font-bold tracking-tightest leading-none text-foreground", children: v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40", children: l })
        ] }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-4", children: "02 — clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [{
            name: "Steal & Style",
            sub: "Fashion brand · Instagram"
          }, {
            name: "Masinloc Tourism Office",
            sub: "Gov't page · Facebook"
          }, {
            name: "Junz Restaurant",
            sub: "Local business · Facebook"
          }, {
            name: "CSA Print and Design",
            sub: "Print shop · Facebook"
          }].map(({
            name,
            sub
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[8px] border border-border bg-secondary/40 px-3 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium tracking-tight text-foreground/80", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-tight text-foreground/40 mt-0.5", children: sub })
          ] }, name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-4", children: "03 — tools & skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
            cat: "Design",
            items: ["Adobe Illustrator", "Photoshop", "Canva"]
          }, {
            cat: "Social & Ads",
            items: ["Meta Ads Manager", "Instagram", "Facebook", "Content Strategy"]
          }, {
            cat: "Video",
            items: ["CapCut", "Reels", "Motion captions"]
          }].map(({
            cat,
            items
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-20 shrink-0 text-[10px] uppercase tracking-[0.12em] text-foreground/35 pt-0.5", children: cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] tracking-tight text-foreground/65", children: item }, item)) })
          ] }, cat)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutScene, {}) })
    ] })
  ] });
}
function Toolkit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToolsShowcase, {}) });
}
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "02", title: "Selected work" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between px-1 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
          background: "var(--traffic-green)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "Available for new projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-[0.18em] uppercase text-foreground/30", children: "Shanzster · 2024–2025" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-3", children: "currently" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
            dot: "var(--traffic-green)",
            label: "Social media strategy"
          }, {
            dot: "var(--traffic-yellow)",
            label: "Brand identity work"
          }, {
            dot: "oklch(0.74 0.13 240)",
            label: "Video content"
          }].map(({
            dot,
            label
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full shrink-0", style: {
              background: dot
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-tight text-foreground/65", children: label })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "by the numbers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
            v: "6+",
            l: "brands managed"
          }, {
            v: "3+",
            l: "brands built"
          }, {
            v: "2+",
            l: "yrs freelancing"
          }, {
            v: "3",
            l: "platforms"
          }].map(({
            v,
            l
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[24px] font-bold tracking-tightest leading-none text-foreground", children: v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[10px] uppercase tracking-[0.12em] text-foreground/35", children: l })
          ] }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-3", children: "services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", children: ["Social Media Mgmt", "Brand Identity", "Content Strategy", "Video Editing", "Meta Ads", "Copywriting"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] tracking-tight text-foreground/55 w-fit", children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", style: {
        overflow: "visible"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-6", children: "hover to open · click to view" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          overflow: "visible",
          width: "100%"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkFolderScene, { items: WORK_ITEMS }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
            name: "Steal & Style",
            tag: "Fashion · IG"
          }, {
            name: "Masinloc Tourism",
            tag: "Gov't · FB"
          }, {
            name: "Junz Restaurant",
            tag: "F&B · FB"
          }, {
            name: "CSA Print",
            tag: "Print · FB"
          }].map(({
            name,
            tag
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-[6px] shrink-0 border border-border bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-foreground/40", children: name[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium tracking-tight text-foreground/75 leading-tight", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-foreground/35", children: tag })
            ] })
          ] }, name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "recent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
            label: "Steal & Style rebrand",
            time: "2024"
          }, {
            label: "Masinloc tourism campaign",
            time: "2024"
          }, {
            label: "Junz promo content",
            time: "2024"
          }, {
            label: "CSA print materials",
            time: "2023"
          }].map(({
            label,
            time
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/60 leading-snug", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-tight text-foreground/30 shrink-0", children: time })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/45 leading-relaxed mb-4", children: "Want something like this for your brand?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background text-center block transition hover:opacity-85", children: "Let's work together →" })
        ] })
      ] })
    ] })
  ] });
}
function Services() {
  const services = [{
    k: "01",
    title: "Social Media Management",
    file: "social_media.app",
    tagline: "Your pages, handled end-to-end.",
    description: "I take full ownership of your social media presence — strategy, content, posting, and community management. You run your business, I keep your pages alive and growing.",
    includes: ["Monthly content calendar", "Caption writing & copywriting", "Post & story design", "Scheduling & publishing", "Community management", "Monthly performance review"],
    tools: ["Instagram", "Facebook", "Canva", "Notion"],
    bestFor: "Businesses that need a consistent presence without hiring in-house."
  }, {
    k: "02",
    title: "Brand Identity Design",
    file: "brand_identity.ai",
    tagline: "A visual identity that looks like you.",
    description: "I design brand identities from scratch — logos, color systems, typography, and usage guidelines. Visual systems that hold up everywhere.",
    includes: ["Logo design (primary + variations)", "Color palette & typography", "Brand guidelines document", "Social media template kit", "Print-ready file delivery", "2 rounds of revisions"],
    tools: ["Illustrator", "Photoshop", "Canva"],
    bestFor: "New businesses, rebrands, or anyone who needs to look professional fast."
  }, {
    k: "03",
    title: "Content Strategy",
    file: "content_strategy.md",
    tagline: "A plan that makes every post intentional.",
    description: "I audit your presence, define content pillars, map your audience, and build a system that makes content creation repeatable and consistent.",
    includes: ["Social media audit", "Audience & competitor research", "Content pillar definition", "Brand voice & tone guide", "3-month editorial calendar", "Hashtag & posting strategy"],
    tools: ["Notion", "SocialBlade", "Meta Insights"],
    bestFor: "Brands that post randomly and want a clear, structured direction."
  }, {
    k: "04",
    title: "Video Editing & Reels",
    file: "reels_edit.mp4",
    tagline: "Edits that earn replays.",
    description: "I edit short-form video for Instagram Reels and Facebook. Freeze frames, motion captions, sound design, and pacing that keeps people watching.",
    includes: ["Reels editing (up to 60 sec)", "Motion caption overlays", "Sound design & music sync", "Color grading", "Thumbnail design", "Platform-optimized export"],
    tools: ["CapCut", "Photoshop"],
    bestFor: "Businesses with footage that needs turning into scroll-stopping content."
  }, {
    k: "05",
    title: "Meta Ads Management",
    file: "meta_ads.json",
    tagline: "Paid campaigns that reach the right people.",
    description: "I set up, run, and optimize Facebook and Instagram ad campaigns. Audience targeting, creative design, and performance reporting — full cycle.",
    includes: ["Campaign setup & structure", "Audience targeting & segmentation", "Ad creative design", "A/B testing", "Budget management", "Weekly performance reports"],
    tools: ["Meta Ads Manager", "Canva", "Photoshop"],
    bestFor: "Businesses ready to invest in paid reach and want measurable results."
  }, {
    k: "06",
    title: "Content Creation Package",
    file: "content_package.zip",
    tagline: "Graphics, captions, and a plan — all in one.",
    description: "A full content creation package — I design the posts, write the captions, and build the calendar so you always have ready-to-post content.",
    includes: ["12–20 designed posts per month", "Caption writing for each post", "Story templates", "Highlight cover design", "Content calendar", "One revision round per batch"],
    tools: ["Canva", "Photoshop", "Notion"],
    bestFor: "Small businesses that need a full month of content without the hassle."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "03", title: "Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-red)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-yellow)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-green)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: s.file }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.14em] uppercase text-foreground/25", children: s.k })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-bold tracking-tightest text-foreground leading-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11px] tracking-tight text-foreground/40 italic", children: s.tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] leading-relaxed tracking-tight text-foreground/55", children: s.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.18em] text-foreground/30 mb-2", children: "Includes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: s.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-[11px] tracking-tight text-foreground/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 h-3.5 w-3.5 rounded-full shrink-0 flex items-center justify-center text-[7px] font-bold text-white", style: {
              background: "oklch(0.62 0.18 255)"
            }, children: "✓" }),
            item
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 border-t border-border space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: s.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-2 py-0.5 text-[9.5px] tracking-tight text-foreground/45", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-tight text-foreground/35 leading-snug", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/50", children: "Best for: " }),
            s.bestFor
          ] })
        ] })
      ] })
    ] }, s.k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-[14px] border border-border bg-card px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Not sure which fits?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12px] tracking-tight text-foreground/50", children: "Send me a message and we'll figure it out." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85 shrink-0", children: "Get in touch →" })
    ] })
  ] });
}
function Process() {
  const steps = [{
    n: "01",
    file: "discovery.md",
    title: "Discovery",
    desc: "We talk about your business, your audience, and what you actually need. I ask a lot of questions — the more I understand, the better the work.",
    details: ["Brand audit", "Audience research", "Goal setting", "Competitor review"]
  }, {
    n: "02",
    file: "strategy.md",
    title: "Strategy",
    desc: "I build the plan — content pillars, brand voice, posting schedule, and the system that makes everything repeatable.",
    details: ["Content pillars", "Brand voice guide", "Editorial calendar", "Platform strategy"]
  }, {
    n: "03",
    file: "creation.app",
    title: "Creation",
    desc: "I design, write, and produce the content. Posts, stories, reels, graphics — everything built to the strategy.",
    details: ["Graphic design", "Caption writing", "Video editing", "Template systems"]
  }, {
    n: "04",
    file: "delivery.zip",
    title: "Delivery",
    desc: "Content is scheduled, published, and managed. I handle the posting so you don't have to think about it.",
    details: ["Scheduling & publishing", "Community management", "DM responses", "Story posting"]
  }, {
    n: "05",
    file: "review.csv",
    title: "Review",
    desc: "Every month I review what's working, what isn't, and adjust the strategy. Data-informed, not guesswork.",
    details: ["Performance analysis", "Strategy adjustment", "Monthly report", "Next month planning"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "04", title: "How I Work", subtitle: "The process, start to finish." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center justify-between border-b border-border bg-secondary/60 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
            background: "var(--traffic-red)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
            background: "var(--traffic-yellow)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
            background: "var(--traffic-green)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-tight text-foreground/40", children: s.file })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0", style: {
            background: "oklch(0.62 0.18 255)"
          }, children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold tracking-tightest text-foreground", children: s.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] leading-relaxed tracking-tight text-foreground/55 mb-3", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-auto space-y-1", children: s.details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5 text-[10.5px] tracking-tight text-foreground/45", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/20", children: "›" }),
          d
        ] }, d)) })
      ] })
    ] }, s.n)) })
  ] });
}
function Testimonials() {
  const testimonials = [{
    quote: "Add a real quote from a client here — even a DM or message works.",
    name: "Client Name",
    brand: "Brand Name",
    platform: "Instagram",
    initials: "CN",
    color: "oklch(0.72 0.14 240)"
  }, {
    quote: "Add another real quote here. Something specific about the results or the experience.",
    name: "Client Name",
    brand: "Brand Name",
    platform: "Facebook",
    initials: "CN",
    color: "oklch(0.60 0.16 170)"
  }, {
    quote: "A third testimonial. Even 'the page finally looks professional' is a real result worth sharing.",
    name: "Client Name",
    brand: "Brand Name",
    platform: "Facebook",
    initials: "CN",
    color: "oklch(0.68 0.14 55)"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "05", title: "What Clients Say" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-6 flex flex-col gap-4 mac-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[14px] rounded-tl-[4px] px-4 py-3", style: {
        background: "oklch(0.62 0.18 255 / 0.1)",
        border: "1px solid oklch(0.62 0.18 255 / 0.2)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] leading-relaxed tracking-tight text-foreground/70 italic", children: [
        '"',
        t.quote,
        '"'
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold text-white", style: {
          background: t.color
        }, children: t.initials }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold tracking-tight text-foreground/80", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-tight text-foreground/40", children: [
            t.brand,
            " · ",
            t.platform
          ] })
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-[11px] tracking-tight text-foreground/30", children: "↑ Replace with real client quotes — DMs, messages, or emails count" })
  ] });
}
function SocialFeed() {
  const posts = Array.from({
    length: 6
  }, (_, i) => ({
    id: i
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "06", title: "Latest Work", subtitle: "From the pages I manage." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-red)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-yellow)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-green)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "latest_posts.grid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/30", children: "6 items" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-px bg-border", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-secondary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-[0.16em] text-foreground/20", children: [
          "Post ",
          p.id + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-foreground/15 mt-1", children: "screenshot here" })
      ] }) }, p.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 flex items-center justify-between border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40", children: "Add real screenshots from your managed pages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/stealandstyle.co", target: "_blank", rel: "noopener noreferrer", className: "text-[11px] tracking-tight text-foreground/50 hover:text-foreground transition", children: "View live ↗" })
      ] })
    ] })
  ] });
}
function FAQ() {
  const faqs = [{
    q: "How long does it take to see results?",
    a: "For social media management, you'll see a more consistent and professional presence immediately. Organic growth typically takes 2–3 months of consistent posting. Paid ads can show results within the first week."
  }, {
    q: "Do you work with businesses outside the Philippines?",
    a: "Yes. I work remotely and have no location restrictions. As long as we can communicate clearly and you're targeting a market I can research, we can work together."
  }, {
    q: "What do you need from me to get started?",
    a: "Access to your social media pages, a brief about your business and goals, and any existing brand assets (logo, colors, photos). I'll handle the rest."
  }, {
    q: "Do you offer one-time projects or only retainers?",
    a: "Both. Brand identity and content strategy are typically one-time projects. Social media management and Meta Ads work best as ongoing retainers since consistency is what drives results."
  }, {
    q: "How do revisions work?",
    a: "Every project includes at least one round of revisions. For ongoing work, feedback is built into the monthly review cycle. I'd rather get it right than deliver something you're not happy with."
  }, {
    q: "Can I see examples of your work before hiring you?",
    a: "Yes — the Selected Work section has case studies for each client. You can also visit the live pages I manage directly."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "07", title: "FAQ", subtitle: "Questions I get asked a lot." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-red)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-yellow)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-green)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "faq.txt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 px-7 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed tracking-tight text-foreground/60", children: f.a })
      ] }, i)) })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "08", title: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { label: "Mail —", title: "New message", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-tightest font-bold", children: [
          "Let's work",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selected-text", children: "together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-md", children: "Whether you need a social media manager, a brand identity, or just want to talk strategy — I'm open. Send me a message and I'll get back to you within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4 text-[13px] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "To", value: "your@email.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "From", value: "you@yourbusiness.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", value: "I'd like to work with you" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:your@email.com", className: "mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-[13px] tracking-tight text-background transition hover:opacity-90", children: "Send message →" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 grid gap-4 content-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { title: "availability.md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-[13px] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
              background: "var(--traffic-green)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: "Available for new projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-[12px]", children: "Currently taking on social media management, brand identity, and content strategy projects." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { title: "socials.url", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "p-5 text-[13px] tracking-tight space-y-2.5", children: [{
          label: "Instagram",
          href: "https://instagram.com",
          handle: "@yourhandle"
        }, {
          label: "Facebook",
          href: "https://facebook.com",
          handle: "Your Page"
        }, {
          label: "Email",
          href: "mailto:your@email.com",
          handle: "your@email.com"
        }].map(({
          label,
          href,
          handle
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: "text-foreground/40 hover:text-foreground transition text-[11px]", children: [
            handle,
            " ↗"
          ] })
        ] }, label)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { title: "location.txt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-[13px] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-[10px] uppercase tracking-[0.18em] mb-1", children: "Based in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70", children: "Subic Bay, Philippines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-[11px] mt-1", children: "Available remotely worldwide" })
        ] }) })
      ] })
    ] })
  ] });
}
function Field({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 border-b border-border pb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-foreground/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: value })
  ] });
}
function SectionHeader({
  index,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-[0.2em] uppercase text-foreground/40", children: index }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(28px,3.4vw,44px)] tracking-tightest font-semibold", children: title })
    ] }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-tight text-foreground/50", children: subtitle })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-20 border-t border-border pt-6 pb-4 text-[12px] tracking-tight text-foreground/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Shanzster · Subic Bay, Philippines" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Built like a Mac. Designed to convert." })
  ] }) });
}
export {
  Index as component
};
