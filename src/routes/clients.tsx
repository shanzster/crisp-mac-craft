﻿import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      { title: "Clients – Shanzster" },
      { name: "description", content: "Brands and businesses I've worked with." },
    ],
  }),
});

type ClientScreenshot = {
  src?: string;
  caption: string;
};

type Client = {
  id: string;
  name: string;
  handle: string;
  platform: string;
  category: string;
  description: string;
  services: string[];
  link: string;
  color: string;
  status: string;
  // Visual
  logo?: string;
  coverImg?: string;
  // Modal content
  screenshots?: ClientScreenshot[];
  interviews?: ClientScreenshot[];
  meetings?: ClientScreenshot[];
  replies?: ClientScreenshot[];
};

const CLIENTS: Client[] = [
  {
    id: "steal-and-style",
    name: "Steal & Style",
    handle: "@stealandstyle.co",
    platform: "Instagram",
    category: "Fashion Brand",
    description: "A Filipino fashion brand built around affordable, trendy pieces. I managed their full Instagram presence — brand voice, content calendar, templates, and community management. Also secured a B2B collab.",
    services: ["Social Media Management", "Content Strategy", "Video Editing", "Brand Identity"],
    link: "https://instagram.com/stealandstyle.co",
    color: "oklch(0.16 0.02 240)",
    status: "Active",
    logo: "/StealandStyle/logo.jpg",
  },
  {
    id: "psg-hits",
    name: "PSG Hits",
    handle: "@psghits",
    platform: "Facebook · Instagram",
    category: "Clothing Apparel",
    description: "A clothing apparel brand. I built their full brand identity and managed their social media — content creation, graphic design, mockups, and print materials.",
    services: ["Social Media Management", "Graphic Design", "Brand Identity", "Print Design"],
    link: "https://facebook.com/psghits",
    logo: "/PSGHits/Logo.png?v=2",
    color: "oklch(0.45 0.20 27)",
    status: "Active",
  },
  {
    id: "fast-snaking",
    name: "Fast Snaking Services",
    handle: "Fast Snaking Services",
    platform: "Facebook",
    category: "Local Service · Philadelphia",
    description: "A Philadelphia-based plumbing business built from a single DM — zero budget, zero brand. I created everything from scratch. Now receiving 3–5 calls a week.",
    services: ["Social Media Management", "Brand Identity", "Graphic Design", "Print Design"],
    link: "https://fastsnakingservices.vercel.app",
    logo: "/FastToiletSnaking/logo.png",
    color: "oklch(0.55 0.14 25)",
    status: "Active",
  },
  {
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
    logo: "/MasinlocTourism/logo.jpg",
  },
  {
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
    logo: "/JunzRestaurant/logo.jpg",
  },
  {
    id: "snappy-nomad",
    name: "The Snappy Nomad",
    handle: "@thesnappynomad",
    platform: "Instagram · Facebook",
    category: "Travel & Lifestyle",
    description: "A travel and lifestyle brand — currently in pre-launch strategy and content planning phase.",
    services: ["Social Media Management", "Content Strategy", "Brand Identity"],
    link: "https://instagram.com",
    color: "oklch(0.62 0.16 255)",
    status: "Coming Soon",
  },
];

const STATS = [
  { v: "6",    l: "clients"           },
  { v: "100s", l: "posts published"   },
  { v: "2+",   l: "years freelancing" },
  { v: "3",    l: "platforms"         },
];

/* ─── Image placeholder ─── */
function ImgSlot({ src, caption, color }: { src?: string; caption: string; color: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full rounded-[12px] border border-border/40 overflow-hidden flex items-center justify-center"
        style={{ height: 200, background: color }}
      >
        {src
          ? <img src={src} alt={caption} className="w-full h-full object-cover" />
          : (
            <div className="text-center p-4">
              <p className="text-white/10 text-[24px]">✦</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/20">add screenshot</p>
            </div>
          )
        }
      </div>
      <p className="text-[11px] tracking-tight text-foreground/45 leading-snug">{caption}</p>
    </div>
  );
}

/* ─── Client modal – full-page sheet from bottom ─── */
function ClientModal({ client, onClose }: { client: Client; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const sections = [
    { key: "screenshots", label: "Work & Content",             items: client.screenshots },
    { key: "interviews",  label: "Discovery & Interviews",     items: client.interviews  },
    { key: "meetings",    label: "Meetings & Briefs",          items: client.meetings    },
    { key: "replies",     label: "Client Replies & Feedback",  items: client.replies     },
  ].filter((s) => s.items && s.items.length > 0);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-end"
      style={{ background: "oklch(0.1 0.01 240 / 0.5)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full bg-card"
        style={{
          borderRadius: "20px 20px 0 0",
          maxHeight: "92vh",
          animation: "sheet-up 0.45s cubic-bezier(.2,.8,.2,1) both",
          boxShadow: "0 -8px 48px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* macOS title bar – sticky */}
        <div
          className="flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-5 sticky top-0 z-10"
          style={{ borderRadius: "20px 20px 0 0" }}
        >
          <div className="flex items-center gap-1.5">
            <button onClick={onClose} className="h-[11px] w-[11px] rounded-full hover:opacity-80 transition" style={{ background: "var(--traffic-red)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/50">{client.handle}</span>
          <button onClick={onClose} className="text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition">✕ close</button>
        </div>

        {/* Scrollable body */}
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(92vh - 40px)" }}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Hero cover */}
          <div className="w-full relative flex items-end" style={{ height: 320, background: client.color }}>
            {client.coverImg
              ? <img src={client.coverImg} alt={client.name} className="absolute inset-0 w-full h-full object-cover" />
              : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/10 text-[72px] font-bold tracking-tightest">{client.name[0]}</p>
                </div>
              )
            }
            {/* Scrim */}
            <div className="absolute inset-x-0 bottom-0" style={{ height: "55%", background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" }} />
            {/* Info overlay */}
            <div className="relative z-10 px-10 pb-8 w-full">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/40 mb-1">{client.category}</p>
                  <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-tightest text-foreground leading-tight">{client.name}</h2>
                  <p className="mt-1 text-[13px] tracking-tight text-foreground/50">{client.platform} · {client.handle}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em]"
                    style={client.status === "Coming Soon"
                      ? { background: "oklch(0.62 0.16 255 / 0.15)", color: "oklch(0.62 0.16 255)" }
                      : { background: "oklch(0.78 0.17 145 / 0.15)", color: "oklch(0.55 0.17 145)" }
                    }
                  >{client.status}</span>
                  <a
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-card/80 px-4 py-1.5 text-[11px] tracking-tight text-foreground/60 hover:bg-card transition"
                  >
                    View page ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Description + services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border">
            <div className="px-8 py-7 lg:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3">About this client</p>
              <p className="text-[14px] leading-relaxed tracking-tight text-foreground/65">{client.description}</p>
            </div>
            <div className="px-8 py-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3">Services provided</p>
              <div className="flex flex-wrap gap-2">
                {client.services.map((s) => (
                  <span key={s} className="rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/55">{s}</span>
                ))}
              </div>
              <div className="mt-5">
                {client.status === "Coming Soon" ? (
                  <span className="inline-flex rounded-full border border-border px-4 py-2 text-[11px] tracking-tight text-foreground/30 cursor-default">
                    Case study coming soon
                  </span>
                ) : (
                  <Link
                    to="/work/$id"
                    params={{ id: client.id }}
                    className="inline-flex rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background hover:opacity-85 transition"
                    onClick={onClose}
                  >
                    Full case study →
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Content sections */}
          {sections.map((section) => (
            <div key={section.key} className="px-8 py-8 border-b border-border">
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-6">{section.label}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.items!.map((item, i) => (
                  <ImgSlot key={i} src={item.src} caption={item.caption} color={`${client.color}${i % 2 === 0 ? "cc" : "99"}`} />
                ))}
              </div>
            </div>
          ))}

          {/* Bottom padding */}
          <div className="h-12" />
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
function ClientsPage() {
  const [active, setActive] = useState<Client | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />

      {active && <ClientModal client={active} onClose={() => setActive(null)} />}

      {/* Coming Soon modal */}
      {showComingSoon && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "oklch(0.1 0.01 240 / 0.65)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="w-full overflow-hidden rounded-[20px] border border-border bg-card shadow-[0_32px_80px_-16px_oklch(0.2_0.02_240/0.5)]"
            style={{ maxWidth: 380 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-4" style={{ borderRadius: "20px 20px 0 0" }}>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setShowComingSoon(false)} className="h-[11px] w-[11px] rounded-full hover:opacity-80 transition" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
              </div>
              <span className="text-[11px] tracking-tight text-foreground/45">The Snappy Nomad</span>
              <button onClick={() => setShowComingSoon(false)} className="text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition">✕ close</button>
            </div>
            <div className="px-8 py-8 text-center">
              <div
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[18px]"
                style={{ background: "oklch(0.62 0.16 255 / 0.12)", border: "1px solid oklch(0.62 0.16 255 / 0.25)" }}
              >
                <span className="text-[30px]">🏗️</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-2">Coming Soon</p>
              <h3 className="text-[20px] font-bold tracking-tightest text-foreground leading-tight mb-3">
                Brand is being built<br />right now.
              </h3>
              <p className="text-[13px] leading-relaxed tracking-tight text-foreground/55 mb-6">
                Come back later to see it — or get updates on{" "}
                <a
                  href="https://instagram.com/shanzster.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground/80 underline underline-offset-2 hover:text-foreground transition"
                >
                  @shanzster.zip
                </a>{" "}
                on Instagram.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://instagram.com/shanzster.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85"
                >
                  Follow @shanzster.zip ↗
                </a>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="rounded-full border border-border px-6 py-2.5 text-[12px] tracking-tight text-foreground/50 transition hover:bg-secondary"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-[1100px] px-6 pt-10 sm:px-10">

        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10">
          ← Back
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3">Clients</p>
          <h1 className="font-bold tracking-tightest text-foreground leading-[0.88]" style={{ fontSize: "clamp(44px, 6vw, 80px)" }}>
            Brands I've<br />
            <span style={{ color: "oklch(0.18 0.01 240 / 0.25)" }}>worked with.</span>
          </h1>
          <p className="mt-5 text-[14px] leading-relaxed tracking-tight text-foreground/55 max-w-lg">
            Every client is different — different audience, different voice, different goal. Click a client to see how I worked with them.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 divide-x divide-border border border-border rounded-[14px] overflow-hidden bg-card mb-10">
          {STATS.map(({ v, l }) => (
            <div key={l} className="px-6 py-5">
              <p className="text-[28px] font-bold tracking-tightest leading-none text-foreground">{v}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40">{l}</p>
            </div>
          ))}
        </div>

        {/* Client grid – macOS desktop icons */}
        <div className="rounded-[16px] border border-border bg-card overflow-hidden mac-shadow">
          {/* Finder title bar */}
          <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
              <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
              <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
            </div>
            <span className="text-[11px] tracking-tight text-foreground/50">Finder — clients</span>
            <span className="text-[10px] tracking-tight text-foreground/30">{CLIENTS.length} items</span>
          </div>

          {/* Desktop icon grid */}
          <div className="p-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {CLIENTS.map((client) => {
              const isLocked = client.id === "junz-restaurant";
              const isComingSoon = client.id === "snappy-nomad";

              if (isLocked) {
                return (
                  <div
                    key={client.id}
                    className="flex flex-col items-center gap-2.5 select-none opacity-50"
                  >
                    {/* Icon with lock overlay */}
                    <div
                      className="relative rounded-[20px] overflow-hidden"
                      style={{ width: 120, height: 120 }}
                    >
                      {client.coverImg || client.logo ? (
                        <img
                          src={client.coverImg ?? client.logo}
                          alt={client.name}
                          className="w-full h-full object-cover grayscale"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ background: `linear-gradient(145deg, ${client.color}, ${client.color}88)` }}
                        >
                          <span className="text-[48px] font-bold text-white/25 tracking-tightest leading-none">
                            {client.name[0]}
                          </span>
                        </div>
                      )}
                      {/* Lock overlay */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-1"
                        style={{ background: "oklch(0.1 0.01 240 / 0.6)", backdropFilter: "blur(3px)" }}
                      >
                        <span className="text-[22px]">🔒</span>
                        <p className="text-[8px] uppercase tracking-[0.16em] text-white/60">ongoing</p>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="px-2 py-0.5 rounded-[4px] text-center">
                      <p className="text-[12px] font-medium tracking-tight text-foreground leading-tight">
                        {client.name}
                      </p>
                      <p className="text-[10px] tracking-tight text-foreground/40 mt-0.5">
                        {client.platform}
                      </p>
                    </div>
                  </div>
                );
              }

              if (isComingSoon) {
                return (
                  <button
                    key={client.id}
                    className="group flex flex-col items-center gap-2.5 cursor-default select-none"
                    onClick={() => setShowComingSoon(true)}
                  >
                    {/* Icon with "Soon" overlay */}
                    <div
                      className="relative rounded-[20px] overflow-hidden transition-all duration-200 group-hover:scale-105"
                      style={{ width: 120, height: 120 }}
                    >
                      {client.coverImg || client.logo ? (
                        <img
                          src={client.coverImg ?? client.logo}
                          alt={client.name}
                          className="w-full h-full object-cover opacity-50"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center opacity-50"
                          style={{ background: `linear-gradient(145deg, ${client.color}, ${client.color}88)` }}
                        >
                          <span className="text-[48px] font-bold text-white/25 tracking-tightest leading-none">
                            {client.name[0]}
                          </span>
                        </div>
                      )}
                      {/* Soon badge */}
                      <div
                        className="absolute top-2 right-2 rounded-full px-1.5 py-0.5 text-[8px] uppercase tracking-[0.12em] font-medium border"
                        style={{ background: "oklch(0.15 0.01 240 / 0.75)", color: "oklch(0.75 0.12 255)", borderColor: "oklch(0.62 0.16 255 / 0.4)", backdropFilter: "blur(4px)" }}
                      >
                        Soon
                      </div>
                    </div>
                    {/* Label */}
                    <div
                      className="px-2 py-0.5 rounded-[4px] transition-colors duration-150 text-center"
                      style={{ background: "transparent" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "oklch(0.62 0.18 255)";
                        (e.currentTarget as HTMLElement).style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "";
                      }}
                    >
                      <p className="text-[12px] font-medium tracking-tight text-foreground leading-tight">
                        {client.name}
                      </p>
                      <p className="text-[10px] tracking-tight text-foreground/40 mt-0.5">
                        {client.platform}
                      </p>
                    </div>
                  </button>
                );
              }

              return (
                <button
                  key={client.id}
                  className="group flex flex-col items-center gap-2.5 cursor-default select-none"
                  onClick={() => setActive(client)}
                >
                  {/* Icon */}
                  <div
                    className="relative rounded-[20px] overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_12px_32px_-8px_oklch(0.2_0.02_240/0.25)]"
                    style={{ width: 120, height: 120 }}
                  >
                    {client.coverImg || client.logo ? (
                      <img
                        src={client.coverImg ?? client.logo}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: `linear-gradient(145deg, ${client.color}, ${client.color}88)` }}
                      >
                        <span className="text-[48px] font-bold text-white/25 tracking-tightest leading-none">
                          {client.name[0]}
                        </span>
                      </div>
                    )}
                    {/* Status dot */}
                    {client.status === "Coming Soon" ? (
                      <div
                        className="absolute top-2 right-2 rounded-full px-1.5 py-0.5 text-[8px] uppercase tracking-[0.12em] font-medium border"
                        style={{ background: "oklch(0.15 0.01 240 / 0.75)", color: "oklch(0.75 0.12 255)", borderColor: "oklch(0.62 0.16 255 / 0.4)", backdropFilter: "blur(4px)" }}
                      >
                        Soon
                      </div>
                    ) : (
                      <div
                        className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full border-2 border-white"
                        style={{ background: "var(--traffic-green)" }}
                      />
                    )}
                  </div>

                  {/* Label – selected style on hover */}
                  <div
                    className="px-2 py-0.5 rounded-[4px] transition-colors duration-150 text-center"
                    style={{ background: "transparent" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "oklch(0.62 0.18 255)";
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "";
                    }}
                  >
                    <p className="text-[12px] font-medium tracking-tight text-foreground leading-tight">
                      {client.name}
                    </p>
                    <p className="text-[10px] tracking-tight text-foreground/40 mt-0.5">
                      {client.platform}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Finder status bar */}
          <div className="border-t border-border px-5 py-2 flex items-center justify-between bg-secondary/30">
            <p className="text-[10px] tracking-tight text-foreground/35">{CLIENTS.length} items · click to open</p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--traffic-green)" }} />
              <p className="text-[10px] tracking-tight text-foreground/35">All active</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-[14px] border border-border bg-card px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-foreground">Want to be on this list?</p>
            <p className="mt-1 text-[12px] tracking-tight text-foreground/50">I'm open to new clients. Let's talk.</p>
          </div>
          <Link to="/" hash="contact" className="rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85 shrink-0">
            Get in touch →
          </Link>
        </div>

      </main>
    </div>
  );
}
