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
const VIDEOS = [{
  id: "v1",
  title: "Collection Launch Reel",
  client: "Steal & Style",
  category: "Reel",
  bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))"
}, {
  id: "v2",
  title: "Promotional Video",
  client: "Masinloc Tourism",
  category: "Promo",
  bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))"
}, {
  id: "v3",
  title: "Vlog Edit",
  client: "Steal & Style",
  category: "Vlog",
  bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))"
}, {
  id: "v4",
  title: "Motion Caption Overlay",
  client: "Steal & Style",
  category: "Motion",
  bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))"
}, {
  id: "v5",
  title: "Freeze Frame Reel",
  client: "Steal & Style",
  category: "Reel",
  bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))"
}, {
  id: "v6",
  title: "Restaurant Promo",
  client: "Junz Restaurant",
  category: "Promo",
  bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))"
}, {
  id: "v7",
  title: "Behind the Scenes",
  client: "Steal & Style",
  category: "BTS",
  bg: "linear-gradient(135deg, oklch(0.15 0.02 240), oklch(0.26 0.06 246))"
}, {
  id: "v8",
  title: "Product Showcase Video",
  client: "CSA Print",
  category: "Showcase",
  bg: "linear-gradient(135deg, oklch(0.19 0.03 240), oklch(0.33 0.08 250))"
}];
function VideoCard({
  video,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: "group relative w-full text-left cursor-pointer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]", style: {
      aspectRatio: "9 / 16",
      background: video.bg
    }, children: [
      video.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: video.src, className: "w-full h-full object-cover", muted: true, loop: true, playsInline: true }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "▶" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Video" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", className: "text-foreground ml-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 3L17 10L5 17V3Z" }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: video.category }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: video.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: video.client })
    ] })
  ] });
}
function FullViewModal({
  video,
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl max-h-[85vh] w-full mx-6", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full rounded-xl overflow-hidden border border-border shadow-2xl", style: {
        aspectRatio: "9 / 16",
        background: video.bg
      }, children: video.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: video.src, className: "w-full h-full object-cover", controls: true, autoPlay: true, loop: true }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "▶" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Video" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: video.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
            currentIndex + 1,
            " / ",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: video.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: video.client })
      ] }) })
    ] })
  ] });
}
function VideosPage() {
  const [selectedVideo, setSelectedVideo] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openVideo = (video, index) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back to Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Videos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: {
          fontSize: "clamp(36px, 5vw, 64px)"
        }, children: "Videos & Reels" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Reels, vlogs, promo videos, motion captions, and collection launches — ",
          VIDEOS.length,
          " video pieces."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8", children: VIDEOS.map((video, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(VideoCard, { video, onClick: () => openVideo(video, index) }, video.id)) })
    ] }),
    selectedVideo && /* @__PURE__ */ jsxRuntimeExports.jsx(FullViewModal, { video: selectedVideo, onClose: closeVideo, onNext: goToNext, onPrev: goToPrev, currentIndex: selectedIndex, total: VIDEOS.length })
  ] });
}
export {
  VideosPage as component
};
