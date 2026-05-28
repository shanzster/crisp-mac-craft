import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { N as NavBar } from "./_ssr/NavBar-BW_mhBgI.mjs";
import { R as Route } from "./_ssr/router-CO1TR2Dx.mjs";
import "./_libs/react-dom.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "./_libs/cookie-es.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function ImgBox({
  src,
  alt,
  color,
  label,
  className = "",
  style = {}
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative overflow-hidden rounded-[12px] border border-border/40 flex items-center justify-center ${className}`, style: {
    background: color,
    ...style
  }, children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: alt ?? "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/15 text-[28px]", children: "✦" }),
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] uppercase tracking-[0.16em] text-white/20", children: label })
  ] }) });
}
function GraphicModal({
  graphic,
  color,
  onClose
}) {
  reactExports.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex flex-col justify-end", style: {
    background: "oklch(0.1 0.01 240 / 0.5)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)"
  }, onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full bg-card overflow-hidden", style: {
    borderRadius: "20px 20px 0 0",
    maxHeight: "92vh",
    animation: "sheet-up 0.45s cubic-bezier(.2,.8,.2,1) both",
    boxShadow: "0 -8px 48px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12)"
  }, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-5 shrink-0 sticky top-0 z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "h-[11px] w-[11px] rounded-full transition hover:opacity-80", style: {
          background: "var(--traffic-red)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
          background: "var(--traffic-yellow)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
          background: "var(--traffic-green)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] tracking-tight text-foreground/50", children: [
        graphic.title,
        ".jpeg"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition", children: "✕ close" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto", style: {
      maxHeight: "calc(92vh - 40px)"
    }, onWheel: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex items-center justify-center relative", style: {
        height: 480,
        background: color
      }, children: [
        graphic.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: graphic.src, alt: graphic.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/10 text-[64px]", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-white/20", children: "add screenshot" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0", style: {
          height: "40%",
          background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 px-10 pb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/40 mb-1", children: "Graphic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(28px,4vw,48px)] font-bold tracking-tightest text-foreground leading-tight", children: graphic.title })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-4", children: "About this graphic" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed tracking-tight text-foreground/65 mb-6", children: graphic.description }),
          graphic.tools && graphic.tools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-3", children: "Made with" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: graphic.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/55", children: t }, t)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 px-8 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-6", children: "How I made it" }),
          graphic.process && graphic.process.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: graphic.process.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white mt-0.5", style: {
              background: "oklch(0.62 0.18 255)"
            }, children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] tracking-tight text-foreground/65 leading-relaxed", children: step })
          ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[12px] border border-dashed border-border p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] tracking-tight text-foreground/30", children: [
            "Add ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-secondary px-1.5 py-0.5 rounded text-[11px]", children: "process: [...]" }),
            " in work-data.ts"
          ] }) })
        ] })
      ] })
    ] })
  ] }) });
}
function GraphicsFolder({
  item
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [tooltip, setTooltip] = reactExports.useState(null);
  const [modal, setModal] = reactExports.useState(null);
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setOpen(true), 400);
        observer.disconnect();
      }
    }, {
      threshold: 0.4
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const graphics = item.graphics ?? [];
  const slots = Array.from({
    length: 6
  }, (_, i) => graphics[i] ?? null);
  const activeGraphic = modal !== null ? slots[modal] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    activeGraphic && /* @__PURE__ */ jsxRuntimeExports.jsx(GraphicModal, { graphic: activeGraphic ?? {
      title: `Graphic ${modal + 1}`,
      description: "Add a description in work-data.ts.",
      process: [],
      tools: []
    }, color: item.color, onClose: () => setModal(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "relative w-full overflow-hidden rounded-[16px] border border-border bg-card", style: {
      height: 380
    }, onMouseEnter: () => setOpen(true), onMouseLeave: () => {
      setOpen(false);
      setTooltip(null);
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute top-4 left-5 text-[10px] uppercase tracking-[0.18em] text-foreground/25 transition-opacity duration-300 z-20", style: {
        opacity: open ? 0 : 1
      }, children: "hover to open" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-start pl-8 gap-4 z-10", children: slots.map((graphic, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: {
        width: 130,
        height: 160,
        flexShrink: 0,
        transform: open ? `translateX(0px) rotate(${[-3, 1, -2, 2, -1, 3][i]}deg)` : `translateX(${120 + i * 40}px) rotate(0deg)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.55s cubic-bezier(.2,.8,.2,1) ${i * 60}ms, opacity 0.4s ease ${i * 60}ms`,
        zIndex: tooltip === i ? 40 : 10 + i,
        cursor: open ? "pointer" : "default"
      }, onMouseEnter: () => open && setTooltip(i), onMouseLeave: () => setTooltip(null), onClick: () => open && setModal(i), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: graphic?.src, color: item.color, label: graphic?.title ?? `graphic ${i + 1}`, className: "w-full h-full shadow-[0_8px_28px_-6px_oklch(0.2_0.02_240/0.25)]", style: {
          borderRadius: 12,
          outline: tooltip === i ? "2px solid oklch(0.62 0.18 255)" : "none",
          outlineOffset: 2
        } }),
        tooltip === i && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute pointer-events-none z-50", style: {
          bottom: "calc(100% + 10px)",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "modal-in 0.18s ease both"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[8px] px-3 py-2 text-center whitespace-nowrap", style: {
            background: "oklch(0.18 0.01 240 / 0.92)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 16px -4px oklch(0.2 0.02 240 / 0.3)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold tracking-tight text-white", children: graphic?.title ?? `Graphic ${i + 1}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-white/50 mt-0.5", children: "click to learn more" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rotate-45", style: {
            background: "oklch(0.18 0.01 240 / 0.92)",
            marginTop: -4
          } }) })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute select-none", style: {
        width: 340,
        height: 280,
        right: -120,
        top: "50%",
        marginTop: -140,
        transform: "rotate(22deg)",
        transformOrigin: "center center",
        perspective: 1e3,
        zIndex: 15
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full", style: {
          width: 280,
          height: 24,
          background: "oklch(0.55 0.12 240 / 0.25)",
          filter: "blur(16px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[22px]", style: {
          background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 left-5 h-8 w-[40%] rounded-t-[14px]", style: {
          background: "oklch(0.66 0.14 240)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 rounded-[22px] origin-bottom", style: {
          background: "linear-gradient(160deg, oklch(0.80 0.11 232), oklch(0.70 0.14 242))",
          boxShadow: "inset 0 2px 0 oklch(1 0 0 / 0.28), 0 16px 48px -12px oklch(0.3 0.1 240 / 0.45)",
          transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
          transition: "transform 0.52s cubic-bezier(.2,.8,.2,1)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-8 top-5 h-px rounded-full", style: {
            background: "oklch(1 0 0 / 0.22)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-12 top-8 h-px rounded-full", style: {
            background: "oklch(1 0 0 / 0.10)"
          } }),
          !open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-5 right-6 text-[11px] tracking-[0.2em] uppercase text-white/35", children: "graphics" })
        ] })
      ] })
    ] })
  ] });
}
function WorkDetail() {
  const item = Route.useLoaderData();
  const galleryItems = [...item.gallery ?? [], ...(item.graphics ?? []).map((g) => g.src), ...item.reels ?? []];
  const galleryPlaceholders = Array.from({
    length: Math.max(8, galleryItems.length)
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "work", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-8", children: "← Back to work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-2", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: {
            fontSize: "clamp(44px, 6vw, 88px)"
          }, children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50", children: item.tag }),
            item.platform && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50", children: item.platform }),
            item.duration && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50", children: item.duration })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[16px] border border-border overflow-hidden shrink-0 flex items-center justify-center", style: {
          width: 80,
          height: 80,
          background: item.color
        }, children: item.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.logo, alt: `${item.client} logo`, className: "w-full h-full object-contain p-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/30 text-[11px] tracking-tight", children: "logo" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Before & After" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border overflow-hidden mac-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
                background: "var(--traffic-red)"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
                background: "var(--traffic-yellow)"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
                background: "var(--traffic-green)"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] tracking-tight text-foreground/40", children: "before.jpeg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: item.beforeImg, color: `${item.color}88`, label: "before", style: {
              height: 280
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border overflow-hidden mac-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
                background: "var(--traffic-red)"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
                background: "var(--traffic-yellow)"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
                background: "var(--traffic-green)"
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] tracking-tight text-foreground/40", children: "after.jpeg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: item.afterImg, color: item.color, label: "after", style: {
              height: 280
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-6", children: "Graphics I Designed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraphicsFolder, { item })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Content Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "content_calendar.notion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-bold tracking-tightest text-foreground mb-3", children: "The system behind the content." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] leading-relaxed tracking-tight text-foreground/55", children: [
                  "Every post on ",
                  item.client,
                  " was planned. This is the content calendar I built — mapping out posts by content pillar, format, and date so nothing was ever random."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: ["Content pillars defined", "Posts planned 2–4 weeks ahead", "Format variety (posts, stories, reels)", "Aligned with key dates & trends"].map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-[12px] tracking-tight text-foreground/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full shrink-0", style: {
                  background: "oklch(0.62 0.18 255)"
                } }),
                point
              ] }, point)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: item.calendarImg, color: `${item.color}22`, label: "content calendar screenshot", style: {
                height: 280,
                borderRadius: 10
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] tracking-tight text-foreground/30 text-center", children: item.calendarImg ? "Content calendar" : "Add your Notion/calendar screenshot here" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Analytics & Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "analytics.csv" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            item.analytics && item.analytics.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: item.analytics.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[10px] border border-border bg-secondary/40 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest leading-none text-foreground", children: a.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40", children: a.label })
            ] }, a.label)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: ["Reach", "Engagement", "Followers", "Posts"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[10px] border border-border bg-secondary/40 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest leading-none text-foreground/20", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/30", children: l })
            ] }, l)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { color: `${item.color}22`, label: "analytics screenshot", style: {
              height: 180,
              borderRadius: 10
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-[10px] p-4", style: {
              background: `${item.color}18`
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.18em] text-foreground/35 mb-1", children: "Result" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tightest text-foreground", children: item.result })
            ] })
          ] })
        ] })
      ] }),
      item.reels && item.reels.length > 0 || true ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Reels & Video" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: (item.reels ?? [null, null, null]).map((reel, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border overflow-hidden mac-shadow", style: {
          aspectRatio: "9/16"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
              background: "var(--traffic-red)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
              background: "var(--traffic-yellow)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: {
              background: "var(--traffic-green)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-[9px] tracking-tight text-foreground/40", children: [
              "reel_",
              i + 1,
              ".mp4"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: reel ?? void 0, color: item.color, label: `reel ${i + 1}`, style: {
            height: "calc(100% - 32px)"
          } })
        ] }, i)) })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Everything I Made" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "gallery.finder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-tight text-foreground/30", children: [
              galleryPlaceholders.length,
              " items"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 space-y-3 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex gap-3 animate-marquee-left", children: [...galleryPlaceholders.slice(0, Math.ceil(galleryPlaceholders.length / 2)), ...galleryPlaceholders.slice(0, Math.ceil(galleryPlaceholders.length / 2))].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", style: {
              width: 180
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: galleryItems[i % Math.max(galleryItems.length, 1)], color: item.color, label: `item ${i + 1}`, style: {
              height: 160,
              borderRadius: 10
            } }) }, `row1-${i}`)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex gap-3 animate-marquee-right", children: [...galleryPlaceholders.slice(Math.ceil(galleryPlaceholders.length / 2)), ...galleryPlaceholders.slice(Math.ceil(galleryPlaceholders.length / 2))].map((_, i) => {
              const actualIndex = Math.ceil(galleryPlaceholders.length / 2) + i;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", style: {
                width: 180
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImgBox, { src: galleryItems[actualIndex % Math.max(galleryItems.length, 1)], color: item.color, label: `item ${actualIndex + 1}`, style: {
                height: 160,
                borderRadius: 10
              } }) }, `row2-${i}`);
            }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: item.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-2.5 py-0.5 text-[10px] tracking-tight text-foreground/45", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#contact", className: "rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background transition hover:opacity-85", children: "Work with me →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "work", className: "rounded-full border border-border bg-card px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-secondary transition", children: "← All work" })
        ] })
      ] })
    ] })
  ] });
}
export {
  WorkDetail as component
};
