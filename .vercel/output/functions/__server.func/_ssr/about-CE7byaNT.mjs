import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
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
function PHClock() {
  const [time, setTime] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const tick = () => {
      setTime(new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", {
        timeZone: "Asia/Manila"
      })));
    };
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, []);
  if (!time) return null;
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  const secDeg = s * 6;
  const minDeg = m * 6 + s * 0.1;
  const hourDeg = h12 % 12 * 30 + m * 0.5;
  const pad = (n) => String(n).padStart(2, "0");
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = dayNames[time.getDay()];
  const dateStr = `${dayName}, ${monthNames[time.getMonth()]} ${time.getDate()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center gap-1.5 border-b border-border bg-secondary/60 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
        background: "var(--traffic-red)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
        background: "var(--traffic-yellow)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
        background: "var(--traffic-green)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[11px] tracking-tight text-foreground/40", children: "Philippine Standard Time · UTC+8" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 relative", style: {
        width: 100,
        height: 100
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100", height: "100", viewBox: "0 0 100 100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "46", fill: "var(--card)", stroke: "var(--border)", strokeWidth: "1.5" }),
        Array.from({
          length: 12
        }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 50 + 38 * Math.cos(angle);
          const y1 = 50 + 38 * Math.sin(angle);
          const x2 = 50 + 43 * Math.cos(angle);
          const y2 = 50 + 43 * Math.sin(angle);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1, y1, x2, y2, stroke: "oklch(0.18 0.01 240 / 0.2)", strokeWidth: "1.5", strokeLinecap: "round" }, i);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "50", x2: 50 + 24 * Math.cos((hourDeg - 90) * Math.PI / 180), y2: 50 + 24 * Math.sin((hourDeg - 90) * Math.PI / 180), stroke: "oklch(0.18 0.01 240)", strokeWidth: "3", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "50", x2: 50 + 32 * Math.cos((minDeg - 90) * Math.PI / 180), y2: 50 + 32 * Math.sin((minDeg - 90) * Math.PI / 180), stroke: "oklch(0.18 0.01 240)", strokeWidth: "2", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "50", y1: "50", x2: 50 + 34 * Math.cos((secDeg - 90) * Math.PI / 180), y2: 50 + 34 * Math.sin((secDeg - 90) * Math.PI / 180), stroke: "oklch(0.62 0.20 27)", strokeWidth: "1.2", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "3", fill: "oklch(0.18 0.01 240)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "1.5", fill: "oklch(0.62 0.20 27)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold tracking-tightest leading-none text-foreground", style: {
          fontSize: "clamp(32px, 4vw, 48px)",
          fontVariantNumeric: "tabular-nums"
        }, children: [
          pad(h12),
          ":",
          pad(m),
          ":",
          pad(s),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/30 ml-2", style: {
            fontSize: "0.45em"
          }, children: ampm })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12px] tracking-tight text-foreground/40", children: dateStr }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: {
            background: "var(--traffic-green)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40", children: "Online · Philippines 🇵🇭" })
        ] })
      ] })
    ] })
  ] });
}
const CREDENTIALS = [{
  type: "Experience",
  icon: "◈",
  items: [{
    title: "Freelance Social Media Manager",
    sub: "Self-employed · 2022 – Present",
    detail: "Managing social media for local businesses across fashion, food, tourism, and print."
  }, {
    title: "Brand Identity Designer",
    sub: "Self-employed · 2022 – Present",
    detail: "Logo design, visual systems, and brand guidelines for local clients."
  }, {
    title: "Video Editor",
    sub: "Self-employed · 2023 – Present",
    detail: "Short-form video editing for Instagram Reels and Facebook — CapCut, motion captions, sound design."
  }]
}, {
  type: "Skills",
  icon: "✦",
  items: [{
    title: "Social Media Management",
    sub: "Instagram · Facebook · Content Strategy",
    detail: "Brand voice, content calendars, community management, and organic growth."
  }, {
    title: "Graphic Design",
    sub: "Canva · Adobe Illustrator · Photoshop",
    detail: "Post templates, brand identity, print materials, and ad creatives."
  }, {
    title: "Paid Advertising",
    sub: "Meta Ads Manager",
    detail: "Campaign setup, audience targeting, A/B testing, and performance reporting."
  }, {
    title: "Video Editing",
    sub: "CapCut · Short-form",
    detail: "Reels, vlogs, promotional videos, motion captions, and color grading."
  }]
}];
const DEVICES = [{
  name: "MacBook Air M2",
  role: "Primary workstation",
  icon: "💻",
  specs: ["Apple M2 chip", "8GB RAM", "256GB SSD", "macOS Sonoma"],
  color: "oklch(0.94 0.005 240)"
}, {
  name: "iPhone",
  role: "Content capture",
  icon: "📱",
  specs: ["Primary camera", "Content shooting", "Social monitoring", "On-the-go editing"],
  color: "oklch(0.94 0.005 240)"
}, {
  name: "iPad",
  role: "Design & sketching",
  icon: "🖥",
  specs: ["Canva design", "Mood boarding", "Client presentations", "Reference screen"],
  color: "oklch(0.94 0.005 240)"
}, {
  name: "External Monitor",
  role: "Extended workspace",
  icon: "🖥",
  specs: ["Dual-screen setup", "Color-accurate display", "Design review", "Video editing"],
  color: "oklch(0.94 0.005 240)"
}];
const TOOLS_STACK = [{
  name: "Canva",
  category: "Design",
  color: "oklch(0.55 0.22 290)"
}, {
  name: "Adobe Illustrator",
  category: "Design",
  color: "oklch(0.55 0.20 55)"
}, {
  name: "Photoshop",
  category: "Design",
  color: "oklch(0.50 0.18 240)"
}, {
  name: "CapCut",
  category: "Video",
  color: "oklch(0.20 0.02 240)"
}, {
  name: "Meta Ads Manager",
  category: "Marketing",
  color: "oklch(0.50 0.20 255)"
}, {
  name: "Notion",
  category: "Planning",
  color: "oklch(0.30 0.01 240)"
}, {
  name: "SocialBlade",
  category: "Analytics",
  color: "oklch(0.45 0.20 27)"
}, {
  name: "ChatGPT",
  category: "AI",
  color: "oklch(0.50 0.16 165)"
}, {
  name: "Adobe Firefly",
  category: "AI",
  color: "oklch(0.40 0.22 290)"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1100px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full flex items-end", style: {
            height: 280,
            background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/profile.png", alt: "Shanzster", className: "absolute inset-0 w-full h-full object-cover object-top", onError: (e) => {
              e.target.style.display = "none";
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2", style: {
              background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-7 pb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-1", children: "Based in" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold tracking-tight text-foreground", children: "Subic Bay, Philippines 🇵🇭" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-7 py-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.9]", style: {
              fontSize: "clamp(32px, 4vw, 52px)"
            }, children: "Shanzster" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] tracking-tight text-foreground/50", children: "Social Media Manager · Brand Designer · Video Editor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/60 max-w-sm", children: "I grow pages, build brands, and make content stick. 2+ years freelancing for local businesses across fashion, food, tourism, and print — from zero to consistent." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 divide-x divide-border border border-border rounded-[10px] overflow-hidden", children: [{
              v: "6+",
              l: "clients"
            }, {
              v: "2+",
              l: "yrs exp"
            }, {
              v: "3+",
              l: "brands"
            }].map(({
              v,
              l
            }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold tracking-tightest leading-none text-foreground", children: v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[9px] uppercase tracking-[0.14em] text-foreground/35", children: l })
            ] }, l)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PHClock, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card px-6 py-5 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
                  background: "var(--traffic-green)"
                } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold tracking-tight text-foreground", children: "Available for work" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] tracking-tight text-foreground/45", children: "Open to new clients · 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background hover:opacity-85 transition shrink-0", children: "Hire me →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Platforms I manage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Instagram", "Facebook", "TikTok", "Meta Ads"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/60", children: p }, p)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-[16px] border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center gap-1.5 border-b border-border bg-secondary/60 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-red)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-yellow)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
            background: "var(--traffic-green)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[11px] tracking-tight text-foreground/40", children: "intro.mp4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full flex items-center justify-center", style: {
          aspectRatio: "16/9",
          background: "oklch(0.10 0.01 240)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full border border-white/10", style: {
            background: "oklch(0.18 0.02 240)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-[22px] ml-1", children: "▶" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/25 text-[12px] tracking-tight", children: "Video intro coming soon" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/15 text-[11px] tracking-tight max-w-xs", children: [
            "Drop your video file at ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-white/5 px-1.5 py-0.5 rounded", children: "public/videos/intro.mp4" }),
            " and uncomment the video tag above."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5", children: "Credentials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: CREDENTIALS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-border bg-secondary/40 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/40", children: section.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium", children: section.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: section.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40 mt-0.5", children: item.sub }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] tracking-tight text-foreground/55 mt-2 leading-relaxed", children: item.detail })
          ] }, i)) })
        ] }, section.type)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-[16px] border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium", children: "Tools I use daily" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 flex flex-wrap gap-2", children: TOOLS_STACK.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full shrink-0", style: {
            background: tool.color
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-tight text-foreground/70", children: tool.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/30", children: tool.category })
        ] }, tool.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5", children: "Setup & devices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: DEVICES.map((device) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card px-5 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-[12px] text-[24px] mb-4", style: {
            background: "var(--secondary)"
          }, children: device.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: device.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40 mt-0.5 mb-3", children: device.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: device.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-foreground/20 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: spec })
          ] }, spec)) })
        ] }, device.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Let's work together." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] tracking-tight text-foreground/50", children: "I'm open to new clients and projects." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/clients", className: "rounded-full border border-border bg-secondary px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-card transition shrink-0", children: "See clients →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background hover:opacity-85 transition shrink-0", children: "Hire me →" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
