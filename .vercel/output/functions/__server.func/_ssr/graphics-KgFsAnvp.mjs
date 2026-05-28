import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as NavBar } from "./NavBar-BW_mhBgI.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/cookie-es.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const GRAPHICS = [{
  id: "g1",
  title: "Steal & Style — Brand Post",
  client: "Steal & Style",
  category: "Social Post",
  bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))"
}, {
  id: "g2",
  title: "Story Template",
  client: "Steal & Style",
  category: "Story",
  bg: "linear-gradient(135deg, oklch(0.32 0.12 300), oklch(0.55 0.20 285))"
}, {
  id: "g3",
  title: "Highlight Cover Set",
  client: "Steal & Style",
  category: "Profile",
  bg: "linear-gradient(135deg, oklch(0.45 0.18 270), oklch(0.65 0.14 300))"
}, {
  id: "g4",
  title: "Promo Graphic",
  client: "Steal & Style",
  category: "Promotion",
  bg: "linear-gradient(135deg, oklch(0.60 0.22 285), oklch(0.40 0.20 270))"
}, {
  id: "g5",
  title: "Caption Card",
  client: "Steal & Style",
  category: "Engagement",
  bg: "linear-gradient(135deg, oklch(0.50 0.20 275), oklch(0.35 0.16 290))"
}, {
  id: "g6",
  title: "Collection Launch Graphic",
  client: "Steal & Style",
  category: "Launch",
  bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))"
}, {
  id: "g7",
  title: "Destination Post",
  client: "Masinloc Tourism",
  category: "Social Post",
  bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))"
}, {
  id: "g8",
  title: "Food Feature Post",
  client: "Junz Restaurant",
  category: "Social Post",
  bg: "linear-gradient(135deg, oklch(0.65 0.16 55),  oklch(0.78 0.12 70))"
}, {
  id: "g9",
  title: "Product Showcase",
  client: "CSA Print",
  category: "Showcase",
  bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))"
}, {
  id: "g10",
  title: "Event Announcement",
  client: "Masinloc Tourism",
  category: "Event",
  bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))"
}, {
  id: "g11",
  title: "Brand Voice Post",
  client: "Steal & Style",
  category: "Engagement",
  bg: "linear-gradient(135deg, oklch(0.45 0.16 240), oklch(0.62 0.12 250))"
}, {
  id: "g12",
  title: "Weekend Special Promo",
  client: "Junz Restaurant",
  category: "Promotion",
  bg: "linear-gradient(135deg, oklch(0.70 0.14 60),  oklch(0.82 0.10 75))"
}];
function GraphicCard({
  graphic,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: "group relative w-full text-left cursor-pointer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]", style: {
      aspectRatio: "1 / 1",
      background: graphic.bg
    }, children: [
      graphic.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: graphic.src, alt: graphic.title, className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Graphic" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: graphic.category }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[11px] tracking-tight text-foreground", children: "View Full Size" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: graphic.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: graphic.client })
    ] })
  ] });
}
function FullViewModal({
  graphic,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200", onClick: onClose, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2L14 14M14 2L2 14" }) }) }),
    currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
      e.stopPropagation();
      onPrev();
    }, className: "absolute left-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10", "aria-label": "Previous", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4L6 10L12 16" }) }) }),
    currentIndex < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
      e.stopPropagation();
      onNext();
    }, className: "absolute right-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10", "aria-label": "Next", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 4L14 10L8 16" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl max-h-[85vh] w-full mx-6", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full rounded-xl overflow-hidden border border-border shadow-2xl", style: {
        aspectRatio: "1 / 1",
        background: graphic.bg
      }, children: graphic.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: graphic.src, alt: graphic.title, className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "✦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Graphic" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: graphic.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
            currentIndex + 1,
            " / ",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: graphic.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: graphic.client })
      ] }) })
    ] })
  ] });
}
function GraphicsPage() {
  const [selectedGraphic, setSelectedGraphic] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openGraphic = (graphic, index) => {
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
  const handleKeyDown = (e) => {
    if (!selectedGraphic) return;
    if (e.key === "Escape") closeGraphic();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back to Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Graphics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: {
          fontSize: "clamp(36px, 5vw, 64px)"
        }, children: "Graphics & Visuals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Brand posts, story templates, promo graphics and more — ",
          GRAPHICS.length,
          " pieces showcasing social media design work."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10", children: GRAPHICS.map((graphic, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(GraphicCard, { graphic, onClick: () => openGraphic(graphic, index) }, graphic.id)) })
    ] }),
    selectedGraphic && /* @__PURE__ */ jsxRuntimeExports.jsx(FullViewModal, { graphic: selectedGraphic, onClose: closeGraphic, onNext: goToNext, onPrev: goToPrev, currentIndex: selectedIndex, total: GRAPHICS.length })
  ] });
}
export {
  GraphicsPage as component
};
