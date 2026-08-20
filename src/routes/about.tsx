import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import profileImage from "@/image_reference/profile.png";
import { TrafficLights } from "@/components/TrafficLights";
import { Reveal } from "@/hooks/useScrollReveal";
import { useAbout, useHome } from "@/lib/content";
import { type JourneyStep, type VideoIntro } from "@/lib/about-data";
import { EditableText, EditableImage } from "@/lib/edit-mode";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Shanzster" },
      { name: "description", content: "The story behind Shanzster — full-stack marketing for fashion e-commerce brands, built from cold DMs and consistency. Subic Bay, Philippines." },
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
        <TrafficLights size={11} />
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




/* ─────────────────────────────────────────────
   STORY — macOS Terminal window
───────────────────────────────────────────── */


function StoryTerminal({ story }: { story: string[] }) {
  return (
    <div
      className="rounded-[16px] overflow-hidden mac-shadow border"
      style={{ background: "oklch(0.17 0.015 250)", borderColor: "oklch(0.30 0.015 250)" }}
    >
      {/* Title bar */}
      <div
        className="flex h-9 items-center justify-between px-4 border-b"
        style={{ background: "oklch(0.23 0.015 250)", borderColor: "oklch(0.30 0.015 250)" }}
      >
        <TrafficLights size={11} />
        <span className="text-[11px] tracking-tight text-white/40">shanzster — zsh — 80×24</span>
        <div className="w-10" />
      </div>

      {/* Body */}
      <div className="px-6 sm:px-8 py-6 sm:py-7" style={{ fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace" }}>
        <p className="text-[12px] tracking-tight">
          <span style={{ color: "oklch(0.75 0.15 145)" }}>shanzster@subic-bay</span>
          <span className="text-white/40"> ~ % </span>
          <span className="text-white/85">cat my-story.txt</span>
        </p>
        <div className="mt-4 space-y-4 max-w-2xl">
          {story.map((p, i) => (
            <EditableText key={i} page="about" path={["story", i]} value={p} as="p" className="text-[13px] leading-relaxed tracking-tight text-white/70" />
          ))}
        </div>
        <p className="mt-5 text-[12px] tracking-tight">
          <span style={{ color: "oklch(0.75 0.15 145)" }}>shanzster@subic-bay</span>
          <span className="text-white/40"> ~ % </span>
          <span className="blink text-white/70">▊</span>
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   JOURNEY — timeline
───────────────────────────────────────────── */


function Journey({ journey }: { journey: JourneyStep[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-[7px] top-2 bottom-2 w-px"
        style={{ background: "var(--border)" }}
      />
      <div className="space-y-6">
        {journey.map((step, i) => (
          <div key={step.year} className="relative pl-9">
            {/* Node */}
            <span
              className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2"
              style={{ background: step.color, borderColor: "var(--background)", boxShadow: `0 0 0 3px ${step.color.replace(")", " / 0.18)")}` }}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: step.color }}>{step.year}</span>
              <EditableText page="about" path={["journey", i, "title"]} value={step.title} as="p" className="text-[15px] font-bold tracking-tightest text-foreground" />
            </div>
            <p className="mt-1 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-xl">
              <EditableText page="about" path={["journey", i, "detail"]} value={step.detail} />
              {step.cta && (
                <>
                  {" "}
                  <Link to="/" hash="contact" className="font-semibold text-foreground underline underline-offset-2 hover:opacity-70 transition">
                    Let's talk →
                  </Link>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BELIEFS — how I work
───────────────────────────────────────────── */


/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

/* Turn a YouTube/Vimeo link into an embeddable URL; null if it's a direct file. */
function embedUrl(url: string): string | null {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{6,})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;
  return null;
}

function VideoIntroSection({ intro }: { intro: VideoIntro }) {
  const [open, setOpen] = useState(false);
  if (!intro?.enabled || !intro.url) return null;

  const embed = embedUrl(intro.url);

  return (
    <Reveal>
      <div className="mb-8">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center gap-3 rounded-[14px] border border-border bg-card px-5 py-4 text-left transition hover:border-foreground/25"
        >
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white"
            style={{ background: "oklch(0.62 0.18 255)" }}
          >
            {open ? "▾" : "▶"}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-semibold tracking-tight text-foreground">{intro.buttonLabel || "Video introduction"}</span>
            {intro.caption && <span className="block text-[12px] tracking-tight text-foreground/45">{intro.caption}</span>}
          </span>
          <span className="text-[11px] tracking-tight text-foreground/40">{open ? "Hide" : "Watch"}</span>
        </button>

        {open && (
          <div className="mt-4 overflow-hidden rounded-[16px] border border-border bg-black">
            {intro.title && (
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
                <TrafficLights size={11} />
                <span className="ml-1 text-[11px] tracking-tight text-white/50">{intro.title}</span>
              </div>
            )}
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              {embed ? (
                <iframe
                  src={embed}
                  title={intro.title || "Video introduction"}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={intro.url} controls className="absolute inset-0 h-full w-full bg-black" />
              )}
            </div>
          </div>
        )}
      </div>
    </Reveal>
  );
}

function AboutPage() {
  const { data: about } = useAbout();
  const { data: home } = useHome();
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
              <EditableImage
                page="home"
                path={["profileImage"]}
                src={home.profileImage || profileImage}
                alt="Shanzster"
                wrapperClassName="absolute inset-0"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" }} />
              <div className="relative z-10 px-7 pb-6">
                <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-1">Based in</p>
                <p className="text-[14px] font-semibold tracking-tight text-foreground">Subic Bay, Philippines 🇵🇭</p>
              </div>
            </div>

            <div className="px-7 py-6">
              <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-2">Hello, I'm</p>
              <h1 className="font-bold tracking-tightest text-foreground leading-[0.9]" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                Shanzster
              </h1>
              <p className="mt-1 text-[13px] tracking-tight text-foreground/50">
                Social Media Manager · Brand Designer · Video Editor
              </p>
              <p className="mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/60 max-w-sm">
                I run the full marketing stack for business owners who don&apos;t want to deal with marketing (or don&apos;t have time for it) — Google Ads, Meta Ads, content, and branding — plus creative strategy for tourism and local businesses. From zero to consistent.
              </p>

              {/* Socials */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { label: "@shanzster.zip", href: "https://instagram.com/shanzster.zip" },
                  { label: "in/shanzster",   href: "https://www.linkedin.com/in/shanzster/" },
                  { label: "Email me",       href: "mailto:seanthetechyyy@gmail.com" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] tracking-tight text-foreground/55 hover:text-foreground hover:bg-secondary transition"
                  >
                    {label} ↗
                  </a>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-5 grid grid-cols-3 divide-x divide-border border border-border rounded-[10px] overflow-hidden">
                {[
                  { v: "7",    l: "clients"   },
                  { v: "2+",   l: "yrs exp"   },
                  { v: "5+",   l: "brands"    },
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
                  <span className="pulse-dot h-2 w-2 rounded-full" style={{ background: "var(--traffic-green)" }} />
                  <p className="text-[12px] font-semibold tracking-tight text-foreground">Available for work</p>
                </div>
                <p className="text-[12px] tracking-tight text-foreground/45">Open to new clients · 2026</p>
              </div>
              <Link
                to="/"
                hash="contact"
                className="cta-primary rounded-full px-5 py-2 text-[12px] font-medium tracking-tight shrink-0"
              >
                Hire me →
              </Link>
            </div>

            {/* Platforms */}
            <div className="rounded-[16px] border border-border bg-card px-6 py-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Platforms I manage</p>
              <div className="flex flex-wrap gap-2">
                {["Instagram", "Facebook", "TikTok", "Meta Ads", "Google Ads"].map((p) => (
                  <span key={p} className="rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/60">{p}</span>
                ))}
              </div>
            </div>

            {/* Currently */}
            <div className="rounded-[16px] border border-border bg-card px-6 py-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4">Currently</p>
              <div className="space-y-2.5">
                {[
                  { dot: "var(--traffic-green)",  label: "Running growth for 4 fashion e-commerce brands" },
                  { dot: "var(--traffic-yellow)", label: "Building The Snappy Nomad — my own travel camera brand" },
                  { dot: "oklch(0.62 0.18 255)",  label: "Sketching daily — Procreate & a Canson sketchbook" },
                ].map(({ dot, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: dot }} />
                    <span className="text-[12px] tracking-tight text-foreground/65">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── VIDEO INTRO ── */}
        <VideoIntroSection intro={about.videoIntro} />

        {/* ── STORY ── */}
        <Reveal>
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5">01 — my story</p>
            <StoryTerminal story={about.story} />
          </div>
        </Reveal>

        {/* ── JOURNEY ── */}
        <Reveal delay={50}>
          <div className="mb-8 rounded-[16px] border border-border bg-card px-7 sm:px-9 py-7">
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-6">02 — the journey</p>
            <Journey journey={about.journey} />
          </div>
        </Reveal>

        {/* ── BELIEFS ── */}
        <Reveal delay={50}>
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5">03 — how I work</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {about.beliefs.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-[16px] border border-border bg-card px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-10px_oklch(0.2_0.02_240/0.2)]"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-[10px] text-[16px] text-white mb-3"
                    style={{ background: "oklch(0.62 0.18 255)" }}
                  >
                    {b.icon}
                  </span>
                  <EditableText page="about" path={["beliefs", i, "title"]} value={b.title} as="p" className="text-[13px] font-bold tracking-tight text-foreground leading-snug" />
                  <EditableText page="about" path={["beliefs", i, "detail"]} value={b.detail} as="p" className="mt-1.5 text-[12px] leading-relaxed tracking-tight text-foreground/55" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>



        {/* ── CREDENTIALS ── */}
        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5">04 — credentials</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {about.credentials.map((section, si) => (
              <div key={section.type} className="rounded-[16px] border border-border bg-card overflow-hidden">
                <div className="px-6 py-4 border-b border-border bg-secondary/40 flex items-center gap-2">
                  <span className="text-foreground/40">{section.icon}</span>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium">{section.type}</p>
                </div>
                <div className="divide-y divide-border">
                  {section.items.map((item, i) => (
                    <div key={i} className="px-6 py-4">
                      <EditableText page="about" path={["credentials", si, "items", i, "title"]} value={item.title} as="p" className="text-[13px] font-semibold tracking-tight text-foreground" />
                      <EditableText page="about" path={["credentials", si, "items", i, "sub"]} value={item.sub} as="p" className="text-[11px] tracking-tight text-foreground/40 mt-0.5" />
                      <EditableText page="about" path={["credentials", si, "items", i, "detail"]} value={item.detail} as="p" className="text-[12px] tracking-tight text-foreground/55 mt-2 leading-relaxed" />
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
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium">05 — tools I use daily</p>
          </div>
          <div className="p-6 flex flex-wrap gap-2">
            {about.tools.map((tool) => (
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
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5">06 — setup & devices</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.devices.map((device) => (
              <div key={device.name} className="rounded-[16px] border border-border bg-card px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-10px_oklch(0.2_0.02_240/0.2)]">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-[12px] mb-4 overflow-hidden"
                  style={{ background: "var(--secondary)" }}
                >
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to a generic icon if image fails to load
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.innerHTML = "🖥";
                    }}
                  />
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
            <p className="text-[15px] font-semibold tracking-tight text-foreground">Now you know me — let's talk about your brand.</p>
            <p className="mt-1 text-[12px] tracking-tight text-foreground/50">I reply within 24 hours. Usually faster.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/clients" className="rounded-full border border-border bg-secondary px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-card transition shrink-0">
              See clients →
            </Link>
            <Link to="/" hash="contact" className="cta-primary rounded-full px-5 py-2 text-[12px] font-medium tracking-tight shrink-0">
              Hire me →
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
