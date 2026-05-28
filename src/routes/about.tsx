import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import profileImage from "@/image_reference/profile.png";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Shanzster" },
      { name: "description", content: "Social media manager, brand identity designer, and creative developer from Subic Bay, Philippines." },
    ],
  }),
});

/* ─────────────────────────────────────────────
   PHILIPPINE CLOCK
───────────────────────────────────────────── */

function PHClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => {
      setTime(new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Manila" })));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;

  // Clock hand angles
  const secDeg  = s * 6;
  const minDeg  = m * 6 + s * 0.1;
  const hourDeg = (h12 % 12) * 30 + m * 0.5;

  const pad = (n: number) => String(n).padStart(2, "0");

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = dayNames[time.getDay()];
  const dateStr = `${dayName}, ${monthNames[time.getMonth()]} ${time.getDate()}`;

  return (
    <div className="rounded-[16px] border border-border bg-card overflow-hidden">
      {/* Mac title bar */}
      <div className="flex h-9 items-center gap-1.5 border-b border-border bg-secondary/60 px-4">
        <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
        <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
        <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
        <span className="ml-auto text-[11px] tracking-tight text-foreground/40">Philippine Standard Time · UTC+8</span>
      </div>

      <div className="p-6 flex items-center gap-8">
        {/* Analog clock */}
        <div className="shrink-0 relative" style={{ width: 100, height: 100 }}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            {/* Face */}
            <circle cx="50" cy="50" r="46" fill="var(--card)" stroke="var(--border)" strokeWidth="1.5" />
            {/* Hour ticks */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const x1 = 50 + 38 * Math.cos(angle);
              const y1 = 50 + 38 * Math.sin(angle);
              const x2 = 50 + 43 * Math.cos(angle);
              const y2 = 50 + 43 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="oklch(0.18 0.01 240 / 0.2)" strokeWidth="1.5" strokeLinecap="round" />;
            })}
            {/* Hour hand */}
            <line
              x1="50" y1="50"
              x2={50 + 24 * Math.cos((hourDeg - 90) * Math.PI / 180)}
              y2={50 + 24 * Math.sin((hourDeg - 90) * Math.PI / 180)}
              stroke="oklch(0.18 0.01 240)" strokeWidth="3" strokeLinecap="round"
            />
            {/* Minute hand */}
            <line
              x1="50" y1="50"
              x2={50 + 32 * Math.cos((minDeg - 90) * Math.PI / 180)}
              y2={50 + 32 * Math.sin((minDeg - 90) * Math.PI / 180)}
              stroke="oklch(0.18 0.01 240)" strokeWidth="2" strokeLinecap="round"
            />
            {/* Second hand */}
            <line
              x1="50" y1="50"
              x2={50 + 34 * Math.cos((secDeg - 90) * Math.PI / 180)}
              y2={50 + 34 * Math.sin((secDeg - 90) * Math.PI / 180)}
              stroke="oklch(0.62 0.20 27)" strokeWidth="1.2" strokeLinecap="round"
            />
            {/* Center dot */}
            <circle cx="50" cy="50" r="3" fill="oklch(0.18 0.01 240)" />
            <circle cx="50" cy="50" r="1.5" fill="oklch(0.62 0.20 27)" />
          </svg>
        </div>

        {/* Digital readout */}
        <div>
          <p
            className="font-bold tracking-tightest leading-none text-foreground"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", fontVariantNumeric: "tabular-nums" }}
          >
            {pad(h12)}:{pad(m)}:{pad(s)}
            <span className="text-foreground/30 ml-2" style={{ fontSize: "0.45em" }}>{ampm}</span>
          </p>
          <p className="mt-2 text-[12px] tracking-tight text-foreground/40">{dateStr}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--traffic-green)" }} />
            <p className="text-[11px] tracking-tight text-foreground/40">Online · Philippines 🇵🇭</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const CREDENTIALS = [
  {
    type: "Experience",
    icon: "◈",
    items: [
      { title: "Freelance Social Media Manager", sub: "Self-employed · 2022 – Present", detail: "Managing social media for local businesses across fashion, food, tourism, and print." },
      { title: "Brand Identity Designer", sub: "Self-employed · 2022 – Present", detail: "Logo design, visual systems, and brand guidelines for local clients." },
      { title: "Video Editor", sub: "Self-employed · 2023 – Present", detail: "Short-form video editing for Instagram Reels and Facebook — CapCut, motion captions, sound design." },
    ],
  },
  {
    type: "Skills",
    icon: "✦",
    items: [
      { title: "Social Media Management", sub: "Instagram · Facebook · Content Strategy", detail: "Brand voice, content calendars, community management, and organic growth." },
      { title: "Graphic Design", sub: "Canva · Adobe Illustrator · Photoshop", detail: "Post templates, brand identity, print materials, and ad creatives." },
      { title: "Paid Advertising", sub: "Meta Ads Manager", detail: "Campaign setup, audience targeting, A/B testing, and performance reporting." },
      { title: "Video Editing", sub: "CapCut · Short-form", detail: "Reels, vlogs, promotional videos, motion captions, and color grading." },
    ],
  },
];

const DEVICES = [
  {
    name: "MacBook Air M2",
    role: "Primary workstation",
    icon: "💻",
    specs: ["Apple M2 chip", "8GB RAM", "256GB SSD", "macOS Sonoma"],
    color: "oklch(0.94 0.005 240)",
  },
  {
    name: "iPhone",
    role: "Content capture",
    icon: "📱",
    specs: ["Primary camera", "Content shooting", "Social monitoring", "On-the-go editing"],
    color: "oklch(0.94 0.005 240)",
  },
  {
    name: "iPad",
    role: "Design & sketching",
    icon: "🖥",
    specs: ["Canva design", "Mood boarding", "Client presentations", "Reference screen"],
    color: "oklch(0.94 0.005 240)",
  },
  {
    name: "External Monitor",
    role: "Extended workspace",
    icon: "🖥",
    specs: ["Dual-screen setup", "Color-accurate display", "Design review", "Video editing"],
    color: "oklch(0.94 0.005 240)",
  },
];

const TOOLS_STACK = [
  { name: "Canva",            category: "Design",      color: "oklch(0.55 0.22 290)" },
  { name: "Adobe Illustrator",category: "Design",      color: "oklch(0.55 0.20 55)"  },
  { name: "Photoshop",        category: "Design",      color: "oklch(0.50 0.18 240)" },
  { name: "CapCut",           category: "Video",       color: "oklch(0.20 0.02 240)" },
  { name: "Meta Ads Manager", category: "Marketing",   color: "oklch(0.50 0.20 255)" },
  { name: "Notion",           category: "Planning",    color: "oklch(0.30 0.01 240)" },
  { name: "SocialBlade",      category: "Analytics",   color: "oklch(0.45 0.20 27)"  },
  { name: "ChatGPT",          category: "AI",          color: "oklch(0.50 0.16 165)" },
  { name: "Adobe Firefly",    category: "AI",          color: "oklch(0.40 0.22 290)" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />

      <main className="mx-auto max-w-[1100px] px-6 pt-10 sm:px-10">

        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10">
          ← Back
        </Link>

        {/* ── HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Left — identity */}
          <div className="rounded-[16px] border border-border bg-card overflow-hidden">
            {/* Profile photo placeholder */}
            <div
              className="relative w-full flex items-end"
              style={{
                height: 280,
                background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))",
              }}
            >
              {/* Swap this src for your real profile photo */}
              <img
                src={profileImage}
                alt="Shanzster"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" }} />
              <div className="relative z-10 px-7 pb-6">
                <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-1">Based in</p>
                <p className="text-[14px] font-semibold tracking-tight text-foreground">Subic Bay, Philippines 🇵🇭</p>
              </div>
            </div>

            <div className="px-7 py-6">
              <h1 className="font-bold tracking-tightest text-foreground leading-[0.9]" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Shanzster
              </h1>
              <p className="mt-1 text-[13px] tracking-tight text-foreground/50">
                Social Media Manager · Brand Designer · Video Editor
              </p>
              <p className="mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/60 max-w-sm">
                I grow pages, build brands, and make content stick. 2+ years freelancing for local businesses across fashion, food, tourism, and print — from zero to consistent.
              </p>

              {/* Quick stats */}
              <div className="mt-5 grid grid-cols-3 divide-x divide-border border border-border rounded-[10px] overflow-hidden">
                {[
                  { v: "6+",   l: "clients"   },
                  { v: "2+",   l: "yrs exp"   },
                  { v: "3+",   l: "brands"    },
                ].map(({ v, l }) => (
                  <div key={l} className="px-4 py-3 text-center">
                    <p className="text-[22px] font-bold tracking-tightest leading-none text-foreground">{v}</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-foreground/35">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — clock + availability */}
          <div className="flex flex-col gap-4">
            <PHClock />

            {/* Availability card */}
            <div className="rounded-[16px] border border-border bg-card px-6 py-5 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--traffic-green)" }} />
                  <p className="text-[12px] font-semibold tracking-tight text-foreground">Available for work</p>
                </div>
                <p className="text-[12px] tracking-tight text-foreground/45">Open to new clients · 2026</p>
              </div>
              <Link
                to="/"
                hash="contact"
                className="rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background hover:opacity-85 transition shrink-0"
              >
                Hire me →
              </Link>
            </div>

            {/* Platforms */}
            <div className="rounded-[16px] border border-border bg-card px-6 py-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Platforms I manage</p>
              <div className="flex flex-wrap gap-2">
                {["Instagram", "Facebook", "TikTok", "Meta Ads"].map((p) => (
                  <span key={p} className="rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/60">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── VIDEO INTRO ── */}
        <div className="mb-8 rounded-[16px] border border-border bg-card overflow-hidden">
          <div className="flex h-9 items-center gap-1.5 border-b border-border bg-secondary/60 px-4">
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
            <span className="ml-auto text-[11px] tracking-tight text-foreground/40">intro.mp4</span>
          </div>
          <div
            className="relative w-full flex items-center justify-center"
            style={{ aspectRatio: "16/9", background: "oklch(0.10 0.01 240)" }}
          >
            {/* ↓ Replace src with your real video path e.g. "/videos/intro.mp4" */}
            {/* <video src="/videos/intro.mp4" controls poster="/videos/intro-thumb.jpg" className="w-full h-full object-cover" /> */}
            <div className="flex flex-col items-center gap-3 text-center px-6">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10"
                style={{ background: "oklch(0.18 0.02 240)" }}
              >
                <span className="text-white/40 text-[22px] ml-1">▶</span>
              </div>
              <p className="text-white/25 text-[12px] tracking-tight">Video intro coming soon</p>
              <p className="text-white/15 text-[11px] tracking-tight max-w-xs">
                Drop your video file at <code className="bg-white/5 px-1.5 py-0.5 rounded">public/videos/intro.mp4</code> and uncomment the video tag above.
              </p>
            </div>
          </div>
        </div>

        {/* ── CREDENTIALS ── */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5">Credentials</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {CREDENTIALS.map((section) => (
              <div key={section.type} className="rounded-[16px] border border-border bg-card overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-secondary/40 flex items-center gap-2">
                  <span className="text-foreground/40">{section.icon}</span>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium">{section.type}</p>
                </div>
                <div className="divide-y divide-border">
                  {section.items.map((item, i) => (
                    <div key={i} className="px-6 py-4">
                      <p className="text-[13px] font-semibold tracking-tight text-foreground">{item.title}</p>
                      <p className="text-[11px] tracking-tight text-foreground/40 mt-0.5">{item.sub}</p>
                      <p className="text-[12px] tracking-tight text-foreground/55 mt-2 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TOOLS STACK ── */}
        <div className="mb-8 rounded-[16px] border border-border bg-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border bg-secondary/40">
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium">Tools I use daily</p>
          </div>
          <div className="p-6 flex flex-wrap gap-2">
            {TOOLS_STACK.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5"
              >
                <span
                  className="h-2 w-2 rounded-full shrink-0"
                  style={{ background: tool.color }}
                />
                <span className="text-[12px] tracking-tight text-foreground/70">{tool.name}</span>
                <span className="text-[10px] tracking-tight text-foreground/30">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── DEVICES ── */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5">Setup & devices</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEVICES.map((device) => (
              <div key={device.name} className="rounded-[16px] border border-border bg-card px-5 py-5">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[12px] text-[24px] mb-4"
                  style={{ background: "var(--secondary)" }}
                >
                  {device.icon}
                </div>
                <p className="text-[13px] font-semibold tracking-tight text-foreground">{device.name}</p>
                <p className="text-[11px] tracking-tight text-foreground/40 mt-0.5 mb-3">{device.role}</p>
                <div className="space-y-1">
                  {device.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-foreground/20 shrink-0" />
                      <span className="text-[11px] tracking-tight text-foreground/50">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="rounded-[14px] border border-border bg-card px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-foreground">Let's work together.</p>
            <p className="mt-1 text-[12px] tracking-tight text-foreground/50">I'm open to new clients and projects.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/clients" className="rounded-full border border-border bg-secondary px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-card transition shrink-0">
              See clients →
            </Link>
            <Link to="/" hash="contact" className="rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background hover:opacity-85 transition shrink-0">
              Hire me →
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
