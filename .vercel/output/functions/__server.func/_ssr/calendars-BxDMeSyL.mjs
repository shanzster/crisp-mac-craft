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
const CALENDARS = [{
  id: "cal1",
  title: "Steal & Style — October 2024",
  client: "Steal & Style",
  category: "Monthly",
  bg: "linear-gradient(135deg, oklch(0.55 0.14 240), oklch(0.72 0.10 250))"
}, {
  id: "cal2",
  title: "Masinloc Tourism — Q4 2024",
  client: "Masinloc Tourism",
  category: "Quarterly",
  bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))"
}, {
  id: "cal3",
  title: "Junz Restaurant — November 2024",
  client: "Junz Restaurant",
  category: "Monthly",
  bg: "linear-gradient(135deg, oklch(0.65 0.14 55),  oklch(0.78 0.10 65))"
}, {
  id: "cal4",
  title: "CSA Print — Campaign Brief",
  client: "CSA Print",
  category: "Campaign",
  bg: "linear-gradient(135deg, oklch(0.55 0.12 270), oklch(0.68 0.10 280))"
}, {
  id: "cal5",
  title: "Holiday Campaign Timeline",
  client: "Steal & Style",
  category: "Campaign",
  bg: "linear-gradient(135deg, oklch(0.50 0.16 240), oklch(0.65 0.12 255))"
}, {
  id: "cal6",
  title: "Summer Content Strategy",
  client: "Masinloc Tourism",
  category: "Seasonal",
  bg: "linear-gradient(135deg, oklch(0.58 0.14 210), oklch(0.72 0.10 220))"
}];
function CalendarCard({
  calendar,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick, className: "group relative w-full text-left cursor-pointer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]", style: {
      aspectRatio: "16 / 9",
      background: calendar.bg
    }, children: [
      calendar.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: calendar.src, alt: calendar.title, className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "◈" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Calendar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: calendar.category }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[11px] tracking-tight text-foreground", children: "View Full Size" }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: calendar.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: calendar.client })
    ] })
  ] });
}
function FullViewModal({
  calendar,
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
        aspectRatio: "16 / 9",
        background: calendar.bg
      }, children: calendar.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: calendar.src, alt: calendar.title, className: "w-full h-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "◈" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Calendar" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: calendar.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
            currentIndex + 1,
            " / ",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: calendar.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: calendar.client })
      ] }) })
    ] })
  ] });
}
function CalendarsPage() {
  const [selectedCalendar, setSelectedCalendar] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openCalendar = (calendar, index) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back to Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Calendars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: {
          fontSize: "clamp(36px, 5vw, 64px)"
        }, children: "Content Calendars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Monthly editorial calendars, posting schedules, and campaign timelines — ",
          CALENDARS.length,
          " planning documents."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10", children: CALENDARS.map((calendar, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCard, { calendar, onClick: () => openCalendar(calendar, index) }, calendar.id)) })
    ] }),
    selectedCalendar && /* @__PURE__ */ jsxRuntimeExports.jsx(FullViewModal, { calendar: selectedCalendar, onClose: closeCalendar, onNext: goToNext, onPrev: goToPrev, currentIndex: selectedIndex, total: CALENDARS.length })
  ] });
}
export {
  CalendarsPage as component
};
