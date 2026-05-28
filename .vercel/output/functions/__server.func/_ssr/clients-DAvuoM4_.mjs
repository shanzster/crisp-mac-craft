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
const CLIENTS = [{
  id: "steal-and-style",
  name: "Steal & Style",
  handle: "@stealandstyle.co",
  platform: "Instagram",
  category: "Fashion Brand",
  description: "A Filipino fashion brand built around affordable, trendy pieces. I managed their Instagram presence — brand voice, content calendar, captions, templates, and community management.",
  services: ["Social Media Management", "Content Strategy", "Video Editing"],
  link: "https://instagram.com/stealandstyle.co",
  color: "oklch(0.16 0.02 240)",
  status: "Active",
  screenshots: [{
    caption: "Feed overview — consistent visual identity across posts"
  }, {
    caption: "Story template in use — new arrival announcement"
  }, {
    caption: "Reel thumbnail — collection launch"
  }, {
    caption: "Engagement post — caption card format"
  }],
  interviews: [{
    caption: "Initial discovery call notes — brand goals and target audience"
  }, {
    caption: "Brand voice questionnaire — defining the tone"
  }],
  meetings: [{
    caption: "Monthly content calendar — October 2024"
  }, {
    caption: "Campaign brief — holiday collection drop"
  }],
  replies: [{
    caption: "Client feedback on first batch of posts"
  }, {
    caption: "Approval message — story templates"
  }]
}, {
  id: "masinloc-tourism",
  name: "Masinloc Tourism Office",
  handle: "Masinloc Tourism Office",
  platform: "Facebook",
  category: "Government · Tourism",
  description: "The official tourism office of Masinloc, Zambales. I managed their Facebook page — creating content that showcased local destinations, events, and culture to drive tourism.",
  services: ["Social Media Management", "Content Strategy", "Graphic Design"],
  link: "https://facebook.com/masinloctourismoffice",
  color: "oklch(0.58 0.14 200)",
  status: "Active",
  screenshots: [{
    caption: "Destination feature post — Masinloc beach"
  }, {
    caption: "Event coverage — local festival"
  }, {
    caption: "Tourism promo graphic"
  }],
  interviews: [{
    caption: "Coordination meeting with tourism office"
  }],
  meetings: [{
    caption: "Content calendar — tourism peak season"
  }],
  replies: [{
    caption: "Office coordinator feedback"
  }]
}, {
  id: "junz-restaurant",
  name: "Junz Restaurant",
  handle: "Junz Restaurant",
  platform: "Facebook",
  category: "Food & Beverage",
  description: "A local restaurant. I handled their Facebook social media — food photography direction, promotional posts, and community engagement to drive foot traffic.",
  services: ["Social Media Management", "Graphic Design"],
  link: "https://facebook.com/junzrestaurant",
  color: "oklch(0.70 0.14 55)",
  status: "Active",
  screenshots: [{
    caption: "Food feature post — hero menu item"
  }, {
    caption: "Promo graphic — weekend special"
  }, {
    caption: "Community post — customer engagement"
  }],
  meetings: [{
    caption: "Menu review notes — identifying hero items"
  }],
  replies: [{
    caption: "Owner approval — promo graphics"
  }]
}, {
  id: "csa-print",
  name: "CSA Print and Design",
  handle: "CSA Print and Design",
  platform: "Facebook",
  category: "Print & Design",
  description: "A local print and design shop. I managed their Facebook content and designed print materials — flyers, posters, and promotional assets.",
  services: ["Social Media Management", "Brand Identity", "Print Design"],
  link: "https://facebook.com/CSAPrintandDesign",
  color: "oklch(0.65 0.12 290)",
  status: "Active",
  screenshots: [{
    caption: "Product showcase post — tarpaulin samples"
  }, {
    caption: "Flyer design — shop promotion"
  }, {
    caption: "Brand identity — color and type system"
  }],
  meetings: [{
    caption: "Brand assessment notes"
  }],
  replies: [{
    caption: "Client sign-off on brand identity"
  }]
}];
const STATS = [{
  v: "4",
  l: "clients managed"
}, {
  v: "100s",
  l: "posts published"
}, {
  v: "2+",
  l: "years freelancing"
}, {
  v: "3",
  l: "platforms"
}];
function ImgSlot({
  src,
  caption,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-[12px] border border-border/40 overflow-hidden flex items-center justify-center", style: {
      height: 200,
      background: color
    }, children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: caption, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/10 text-[24px]", children: "✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] uppercase tracking-[0.14em] text-white/20", children: "add screenshot" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/45 leading-snug", children: caption })
  ] });
}
function ClientModal({
  client,
  onClose
}) {
  reactExports.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const sections = [{
    key: "screenshots",
    label: "Work & Content",
    items: client.screenshots
  }, {
    key: "interviews",
    label: "Discovery & Interviews",
    items: client.interviews
  }, {
    key: "meetings",
    label: "Meetings & Briefs",
    items: client.meetings
  }, {
    key: "replies",
    label: "Client Replies & Feedback",
    items: client.replies
  }].filter((s) => s.items && s.items.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex flex-col justify-end", style: {
    background: "oklch(0.1 0.01 240 / 0.5)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)"
  }, onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full bg-card", style: {
    borderRadius: "20px 20px 0 0",
    maxHeight: "92vh",
    animation: "sheet-up 0.45s cubic-bezier(.2,.8,.2,1) both",
    boxShadow: "0 -8px 48px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12)"
  }, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-5 sticky top-0 z-10", style: {
      borderRadius: "20px 20px 0 0"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "h-[11px] w-[11px] rounded-full hover:opacity-80 transition", style: {
          background: "var(--traffic-red)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
          background: "var(--traffic-yellow)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: {
          background: "var(--traffic-green)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: client.handle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition", children: "✕ close" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-y-auto", style: {
      maxHeight: "calc(92vh - 40px)"
    }, onWheel: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full relative flex items-end", style: {
        height: 320,
        background: client.color
      }, children: [
        client.coverImg ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: client.coverImg, alt: client.name, className: "absolute inset-0 w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/10 text-[72px] font-bold tracking-tightest", children: client.name[0] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0", style: {
          height: "55%",
          background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 px-10 pb-8 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.24em] text-foreground/40 mb-1", children: client.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(28px,4vw,52px)] font-bold tracking-tightest text-foreground leading-tight", children: client.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] tracking-tight text-foreground/50", children: [
              client.platform,
              " · ",
              client.handle
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em]", style: {
              background: "oklch(0.78 0.17 145 / 0.15)",
              color: "oklch(0.55 0.17 145)"
            }, children: client.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: client.link, target: "_blank", rel: "noopener noreferrer", className: "rounded-full border border-border bg-card/80 px-4 py-1.5 text-[11px] tracking-tight text-foreground/60 hover:bg-card transition", children: "View page ↗" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-7 lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3", children: "About this client" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed tracking-tight text-foreground/65", children: client.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3", children: "Services provided" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: client.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/55", children: s }, s)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work/$id", params: {
            id: client.id
          }, className: "inline-flex rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background hover:opacity-85 transition", onClick: onClose, children: "Full case study →" }) })
        ] })
      ] }),
      sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-8 border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-6", children: section.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: section.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ImgSlot, { src: item.src, caption: item.caption, color: `${client.color}${i % 2 === 0 ? "cc" : "99"}` }, i)) })
      ] }, section.key)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12" })
    ] })
  ] }) });
}
function ClientsPage() {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    active && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientModal, { client: active, onClose: () => setActive(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1100px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Clients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: {
          fontSize: "clamp(44px, 6vw, 80px)"
        }, children: [
          "Brands I've",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            color: "oklch(0.18 0.01 240 / 0.25)"
          }, children: "worked with." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[14px] leading-relaxed tracking-tight text-foreground/55 max-w-lg", children: "Every client is different — different audience, different voice, different goal. Click a client to see how I worked with them." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 divide-x divide-border border border-border rounded-[14px] overflow-hidden bg-card mb-10", children: STATS.map(({
        v,
        l
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest leading-none text-foreground", children: v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40", children: l })
      ] }, l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden mac-shadow", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "Finder — clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-tight text-foreground/30", children: [
            CLIENTS.length,
            " items"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 grid grid-cols-2 sm:grid-cols-4 gap-8", children: CLIENTS.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group flex flex-col items-center gap-2.5 cursor-default select-none", onClick: () => setActive(client), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[20px] overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_12px_32px_-8px_oklch(0.2_0.02_240/0.25)]", style: {
            width: 120,
            height: 120
          }, children: [
            client.coverImg || client.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: client.coverImg ?? client.logo, alt: client.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", style: {
              background: `linear-gradient(145deg, ${client.color}, ${client.color}88)`
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[48px] font-bold text-white/25 tracking-tightest leading-none", children: client.name[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full border-2 border-white", style: {
              background: "var(--traffic-green)"
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-0.5 rounded-[4px] transition-colors duration-150 text-center", style: {
            background: "transparent"
          }, onMouseEnter: (e) => {
            e.currentTarget.style.background = "oklch(0.62 0.18 255)";
            e.currentTarget.style.color = "white";
          }, onMouseLeave: (e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "";
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium tracking-tight text-foreground leading-tight", children: client.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-tight text-foreground/40 mt-0.5", children: client.platform })
          ] })
        ] }, client.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-2 flex items-center justify-between bg-secondary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-tight text-foreground/35", children: [
            CLIENTS.length,
            " items · click to open"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: {
              background: "var(--traffic-green)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-tight text-foreground/35", children: "All active" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-[14px] border border-border bg-card px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Want to be on this list?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] tracking-tight text-foreground/50", children: "I'm open to new clients. Let's talk." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85 shrink-0", children: "Get in touch →" })
      ] })
    ] })
  ] });
}
export {
  ClientsPage as component
};
