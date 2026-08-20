import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { MacWindow } from "@/components/MacWindow";
import { SelectingRoles } from "@/components/SelectingRoles";
import { HeroFolder } from "@/components/HeroFolder";
import { NavBar } from "@/components/NavBar";
import { SkimPrompt } from "@/components/SkimPrompt";
import { AboutScene } from "@/components/AboutScene";
import { WorkFolderScene } from "@/components/WorkFolder";
import { useWork, useHome } from "@/lib/content";
import { EditableText, EditableImage } from "@/lib/edit-mode";
import { Reveal } from "@/hooks/useScrollReveal";
import logoImage from "@/image_reference/logos/Shanzster_Logo.png";
import photoshopLogo from "@/image_reference/logos/PS.png";
import illustratorLogo from "@/image_reference/logos/AI.png";
import canvaLogo from "@/image_reference/logos/canva.png";
import capcutLogo from "@/image_reference/logos/capcut.png";
import metaLogo from "@/image_reference/logos/meta.png";
import { TrafficLights } from "@/components/TrafficLights";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shanzster — Social Media Manager & Creative Developer" },
      {
        name: "description",
        content:
          "Shanzster — Social media manager and creative developer from Subic Bay, Philippines. I run the full marketing stack for business owners who don't want to deal with marketing — or don't have time for it: Google Ads, Meta Ads, content, and branding.",
      },
      { property: "og:title", content: "Shanzster — Social Media Manager & Creative Developer" },
      { property: "og:description", content: "Full-stack marketing for fashion e-commerce brands — Google Ads, Meta Ads, social media management, and branding." },
      { property: "og:type", content: "website" },
    ],
  }),
});



/* ───────── macOS NOTIFICATION — slides in once per session ───────── */
function MacNotification() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("shz-notif-shown")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => {
      setShow(true);
      sessionStorage.setItem("shz-notif-shown", "1");
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show || leaving) return;
    const t = setTimeout(() => setLeaving(true), 9000);
    return () => clearTimeout(t);
  }, [show, leaving]);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setShow(false), 400);
    return () => clearTimeout(t);
  }, [leaving]);

  if (!show) return null;

  return (
    <div
      className="fixed right-4 z-[90]"
      style={{
        top: 44,
        animation: leaving
          ? "notif-out 0.4s ease both"
          : "notif-in 0.5s cubic-bezier(.2,.8,.2,1) both",
      }}
    >
      <div
        className="w-[320px] max-w-[calc(100vw-32px)] rounded-[14px] border border-border bg-card/95 p-3.5 flex gap-3"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px -10px oklch(0.2 0.02 240 / 0.3), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.1)",
        }}
      >
        {/* App icon */}
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] text-[15px] text-white"
          style={{ background: "oklch(0.62 0.18 255)" }}
        >
          ✦
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[12px] font-semibold tracking-tight text-foreground">Shanzster</p>
            <span className="text-[10px] tracking-tight text-foreground/35 shrink-0">now</span>
          </div>
          <p className="text-[12px] leading-snug tracking-tight text-foreground/60">
            Taking on new clients for 2026 — want your brand next?
          </p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href="#contact"
              onClick={() => setLeaving(true)}
              className="text-[11px] font-medium tracking-tight text-foreground hover:opacity-70 transition"
            >
              Reply →
            </a>
            <button
              onClick={() => setLeaving(true)}
              className="text-[11px] tracking-tight text-foreground/40 hover:text-foreground/70 transition"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <MacNotification />
      <SkimPrompt />
      <main className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pb-28 pt-6">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal delay={50}><Toolkit /></Reveal>
        <Reveal delay={50}><Work /></Reveal>
        <Reveal delay={50}><Services /></Reveal>
        <Reveal delay={50}><Process /></Reveal>
        <Reveal delay={50}><Testimonials /></Reveal>
        <Reveal delay={50}><SocialFeed /></Reveal>
        <Reveal delay={50}><FAQ /></Reveal>
        <Reveal delay={50}><Contact /></Reveal>
        <Footer />
      </main>
    </div>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  const { data: home } = useHome();
  const site = home.site;
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100dvh - 6rem - 28px)" }}
    >
      {/* Gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.74 0.13 240 / 0.13) 0%, transparent 70%), radial-gradient(ellipse 45% 35% at 88% 12%, oklch(0.78 0.10 260 / 0.07) 0%, transparent 60%)",
        }}
      />

      {/* Layout: flex column, text on top, folder fills rest */}
      <div className="relative z-10 flex h-full flex-col">

        {/* ── Text block — centered, fixed height (z-20 keeps title/subtitle above the folder canvas) ── */}
        <div className="relative z-20 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-14 pt-6 pb-2 text-center" style={{ flexShrink: 0 }}>

          {/* Eyebrow */}
          <div className="flex flex-col items-center gap-2 mb-3 hero-drop hero-drop-1">
            <img
              src={logoImage}
              alt="Shanzster Logo"
              className="h-6 sm:h-8 w-auto object-contain"
            />
            <div className="flex items-center gap-2">
              <span
                className="pulse-dot h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--traffic-green)" }}
              />
              <EditableText
                page="home"
                path={["site", "heroBadge"]}
                value={site.heroBadge}
                as="p"
                className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.26em] text-foreground/40 text-center"
              />
            </div>
          </div>

          {/* Headline — single h1, muted accent on the second line */}
          <h1
            className="font-bold tracking-tightest text-foreground leading-[0.9]"
            style={{ fontSize: "clamp(32px, 7vw, 88px)" }}
          >
            <EditableText page="home" path={["site", "heroHeadlineTop"]} value={site.heroHeadlineTop} as="span" className="block hero-drop hero-drop-2" />
            <span className="block hero-drop hero-drop-3" style={{ color: "oklch(0.18 0.01 240 / 0.25)" }}>
              <EditableText page="home" path={["site", "heroHeadlineAccent"]} value={site.heroHeadlineAccent} />
            </span>
          </h1>

          {/* Sub-line */}
          <p className="mt-3 text-[clamp(12px,1.8vw,16px)] tracking-tight text-foreground/45 max-w-sm hero-drop hero-drop-4">
            <SelectingRoles />
            <span className="blink text-foreground/40">|</span>
          </p>

          {/* CTAs — removed from here, moved below folder */}
        </div>

        {/* ── Folder canvas. Full-size folder in its own box: min-height floors
             it so it's never crushed (the hero grows instead), and the top
             margin guarantees a gap so the fan never touches the title. z-10
             sits below the text block (z-20). ── */}
        <div className="relative z-10 flex-1 hero-drop hero-drop-5 mt-0 sm:mt-1" style={{ minHeight: 480 }}>
          <HeroFolder />
        </div>

        {/* ── CTAs — below the folder ── */}
        <div className="flex items-center justify-center gap-3 py-4 hero-drop hero-drop-6" style={{ flexShrink: 0 }}>
          <a
            href="#contact"
            className="cta-primary rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-[11px] sm:text-[12px] font-medium tracking-tight"
          >
            Hire me →
          </a>
          <a
            href="#work"
            className="rounded-full bg-foreground px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-background transition hover:opacity-85"
          >
            See the work
          </a>
          <a
            href="/ALARCON_SA_CV_MVA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-foreground/70 transition hover:bg-secondary hover:text-foreground"
          >
            Download CV ↓
          </a>
        </div>

        {/* ── Stats strip — pinned to bottom ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 divide-x sm:divide-x divide-border border-t border-border/40 hero-drop hero-drop-7"
          style={{ flexShrink: 0 }}
        >
          {site.heroStats.map((s, i) => (
            <Stat key={i} value={s.value} label={s.label} />
          ))}
        </div>

        {/* ── Marquee ── */}
        <div
          className="overflow-hidden border-t border-border/30 bg-secondary/30 ticker-mask"
          style={{ flexShrink: 0 }}
        >
          <div className="ticker flex gap-10 whitespace-nowrap py-2.5 text-[11px] tracking-tight text-foreground/35">
            {[
              "Social Media Management",
              "Brand Identity",
              "Content Strategy",
              "Meta Ads",
              "Google Ads",
              "Fashion E-commerce",
              "Video Editing",
              "Canva Templates",
              "Reels & Short-form",
              "Community Management",
              "Campaign Planning",
              "Visual Storytelling",
            ].flatMap((t, i, a) => [...a, ...a]).map((t, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="text-foreground/20">✦</span>
                <span>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 py-2 sm:px-5 sm:py-4">
      <div className="text-[22px] sm:text-[28px] leading-none tracking-tightest font-bold">
        <CountUp value={value} />
      </div>
      <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-foreground/45">
        {label}
      </div>
    </div>
  );
}

/* Counts numeric values up from 0 when scrolled into view; non-numeric values render as-is */
function CountUp({ value, duration = 900 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    if (target === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          setDisplay(`${Math.round(eased * target)}${t === 1 ? suffix : ""}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix, duration]);

  return <span ref={ref}>{display}</span>;
}

/* ───────── TICKER ───────── */
function Ticker() {
  const { data: home } = useHome();
  const items = home.site.ticker;
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/40 py-3">
      <div className="ticker flex gap-12 whitespace-nowrap text-[13px] tracking-tight text-foreground/70">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>● {t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── TOOLS SHOWCASE ───────── */

const TOOLS = [
  // ── Creative ──
  {
    name: "Photoshop",
    category: "Photo editing",
    group: "Creative",
    how: "I use Photoshop for retouching campaign photos, building social media templates, and creating high-quality thumbnails and promotional visuals that stop the scroll.",
    usedFor: ["Campaign visuals", "Photo retouching", "Thumbnail design", "Ad creatives"],
    lineX: -70, lineY: 38, labelAlign: "right" as const,
    icon: <img src={photoshopLogo} alt="Photoshop" className="w-full h-full object-cover rounded-[16px]" />,
  },
  {
    name: "Illustrator",
    category: "Vector design",
    group: "Creative",
    how: "Illustrator is my go-to for building brand identities from scratch — logos, icon sets, brand guidelines, and print-ready assets that scale perfectly at any size.",
    usedFor: ["Logo design", "Brand identity", "Icon sets", "Print assets"],
    lineX: 70, lineY: -38, labelAlign: "left" as const,
    icon: <img src={illustratorLogo} alt="Illustrator" className="w-full h-full object-cover rounded-[16px]" />,
  },
  {
    name: "Canva",
    category: "Brand visuals",
    group: "Creative",
    how: "Canva is where I build fast, on-brand content at scale — social posts, stories, decks, and client-ready presentations. I use it to maintain visual consistency across all platforms.",
    usedFor: ["Social posts", "Stories", "Pitch decks", "Brand templates"],
    lineX: 70, lineY: 44, labelAlign: "left" as const,
    icon: <img src={canvaLogo} alt="Canva" className="w-full h-full object-cover rounded-[16px]" />,
  },
  {
    name: "CapCut",
    category: "Video editing",
    group: "Creative",
    how: "CapCut is my primary video editor for Reels and short-form content. I use it for freeze-frame edits, motion captions, sound design, and cinematic cuts that drive replays.",
    usedFor: ["Reels editing", "Motion captions", "Vlogs", "Promo videos"],
    lineX: -70, lineY: 44, labelAlign: "right" as const,
    icon: <img src={capcutLogo} alt="CapCut" className="w-full h-full object-cover rounded-[16px]" />,
  },
  // ── Marketing ──
  {
    name: "Meta Ads",
    category: "Paid social",
    group: "Marketing",
    how: "I use Meta Ads Manager to plan, launch, and optimize paid campaigns on Facebook and Instagram — from audience targeting and creative testing to budget management and performance reporting.",
    usedFor: ["Campaign setup", "Audience targeting", "A/B testing", "Performance reports"],
    lineX: -70, lineY: -38, labelAlign: "right" as const,
    icon: <img src={metaLogo} alt="Meta Ads" className="w-full h-full object-cover rounded-[16px]" />,
  },
  {
    name: "Google Ads",
    category: "Paid search & shopping",
    group: "Marketing",
    how: "I run Google Ads for fashion e-commerce brands — search and shopping campaigns that capture buyers who are already looking. Keyword strategy, campaign structure, conversion tracking, and budget optimization.",
    usedFor: ["Search campaigns", "Shopping ads", "Conversion tracking", "Budget optimization"],
    lineX: 70, lineY: 38, labelAlign: "left" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#fff" stroke="#e5e5e5" strokeWidth="2"/><g transform="translate(22,26)"><rect x="0" y="14" width="16" height="34" rx="8" transform="rotate(-30 8 31)" fill="#fbbc04"/><rect x="20" y="0" width="16" height="48" rx="8" transform="rotate(30 28 24)" fill="#4285f4"/><circle cx="10" cy="41" r="8" fill="#34a853"/></g></svg>,
  },
  {
    name: "SocialBlade",
    category: "Analytics & trends",
    group: "Marketing",
    how: "SocialBlade helps me track competitor growth, benchmark page performance, and spot trends before they peak. I use it to inform content strategy and identify what's working in a niche.",
    usedFor: ["Competitor tracking", "Growth benchmarking", "Trend spotting", "Niche research"],
    lineX: 70, lineY: -38, labelAlign: "left" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#1a1a2e"/><text x="50" y="58" textAnchor="middle" fontSize="13" fontWeight="800" fill="#e94560" fontFamily="Arial, sans-serif">SB</text></svg>,
  },
  {
    name: "Klaviyo",
    category: "Email & SMS",
    group: "Marketing",
    how: "Klaviyo is my email & SMS engine for e-commerce — welcome and abandoned-cart flows, campaign sends, segmentation, and automations that turn subscribers into repeat buyers on autopilot.",
    usedFor: ["Email flows", "Abandoned cart", "Campaigns", "Segmentation"],
    lineX: -70, lineY: -38, labelAlign: "right" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#232426"/><text x="50" y="60" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">Klaviyo</text></svg>,
  },
  // ── Productivity ──
  {
    name: "Notion",
    category: "Planning & docs",
    group: "Productivity",
    how: "Notion is my content command center. I use it to build editorial calendars, track campaign briefs, manage client deliverables, and document brand guidelines — everything in one place.",
    usedFor: ["Content calendars", "Campaign briefs", "Client docs", "Brand guidelines"],
    lineX: -70, lineY: 44, labelAlign: "right" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#fff" stroke="#e5e5e5" strokeWidth="2"/><text x="50" y="66" textAnchor="middle" fontSize="48" fontWeight="900" fill="#000" fontFamily="Arial, sans-serif">N</text></svg>,
  },
  // ── E-commerce ──
  {
    name: "PPSpy",
    category: "Ad intelligence",
    group: "E-commerce",
    how: "PPSpy is my ad research tool — I use it to spy on competitor ads and Shopify stores, spot winning products, and validate what's actually selling before I build campaigns around it.",
    usedFor: ["Competitor ad research", "Winning products", "Store analysis", "Trend validation"],
    lineX: -70, lineY: 38, labelAlign: "right" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#1e3a8a"/><text x="50" y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">PPSpy</text></svg>,
  },
  {
    name: "Poky",
    category: "Product importing",
    group: "E-commerce",
    how: "Poky handles product importing for the Shopify stores I manage — pulling products in fast with clean titles, images, and variants so fashion catalogs go live in hours, not days.",
    usedFor: ["Shopify imports", "Catalog setup", "Product listings", "Store operations"],
    lineX: 70, lineY: -38, labelAlign: "left" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#15803d"/><text x="50" y="62" textAnchor="middle" fontSize="18" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">Poky</text></svg>,
  },
  // ── AI ──
  {
    name: "Claude",
    category: "AI assistant",
    group: "AI",
    how: "Claude is my thinking partner for strategy and copy — campaign angles, long-form writing, brand voice refinement, and research. It handles the heavy reasoning so I can move faster on execution.",
    usedFor: ["Strategy drafts", "Long-form copy", "Brand voice", "Research"],
    lineX: -70, lineY: 44, labelAlign: "right" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#d97757"/><text x="50" y="62" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">Claude</text></svg>,
  },
  {
    name: "Claude Code",
    category: "AI coding",
    group: "AI",
    how: "Claude Code is how I build and maintain the web side of my work — this portfolio, client landing pages, and quick web tweaks — straight from the terminal, without needing a dev team.",
    usedFor: ["This portfolio", "Landing pages", "Web tweaks", "Automation"],
    lineX: 70, lineY: 38, labelAlign: "left" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#1f1e1d"/><text x="30" y="60" textAnchor="middle" fontSize="22" fontWeight="800" fill="#d97757" fontFamily="Menlo, monospace">&gt;</text><rect x="42" y="52" width="26" height="7" rx="2" fill="#d97757"/></svg>,
  },
  {
    name: "Higgsfield AI",
    category: "AI video & image",
    group: "AI",
    how: "Higgsfield AI generates video and image content for campaigns — concept visuals, motion experiments, and AI-driven ad creatives that would be impossible to shoot on a small-brand budget.",
    usedFor: ["AI video", "Concept visuals", "Ad creatives", "Content experiments"],
    lineX: -70, lineY: -44, labelAlign: "right" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#0f0f10"/><text x="50" y="66" textAnchor="middle" fontSize="40" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">H</text></svg>,
  },
  {
    name: "ChatGPT",
    category: "AI writing",
    group: "AI",
    how: "I use ChatGPT to accelerate content creation — drafting captions, brainstorming campaign angles, writing ad copy variations, and refining brand voice. It's a creative partner, not a replacement.",
    usedFor: ["Caption writing", "Ad copy", "Campaign ideation", "Brand voice"],
    lineX: 70, lineY: 44, labelAlign: "left" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#10a37f"/><text x="50" y="62" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">ChatGPT</text></svg>,
  },
  {
    name: "Adobe Firefly",
    category: "AI image gen",
    group: "AI",
    how: "Adobe Firefly lets me generate and edit visuals directly inside Photoshop and Illustrator — filling backgrounds, generating concept art, and creating on-brand imagery faster than traditional methods.",
    usedFor: ["Generative fill", "Concept visuals", "Background gen", "Creative exploration"],
    lineX: -70, lineY: -38, labelAlign: "right" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#1c0a3a"/><text x="50" y="62" textAnchor="middle" fontSize="13" fontWeight="700" fill="#e040fb" fontFamily="Arial, sans-serif">Firefly</text></svg>,
  },
];


/* The TOOLS array above stays in code purely as the icon source (bespoke SVGs /
   logos can't live in the database). Text is CMS-managed and merged by name. */
const TOOL_ICON_BY_NAME: Record<string, React.ReactNode> = Object.fromEntries(
  TOOLS.map((t) => [t.name, t.icon]),
);

function toolIcon(name: string): React.ReactNode {
  return (
    TOOL_ICON_BY_NAME[name] ?? (
      <div className="flex h-full w-full items-center justify-center bg-secondary text-[13px] font-bold text-foreground/50">
        {name.charAt(0)}
      </div>
    )
  );
}

function ToolsShowcase() {
  const { data: home } = useHome();
  const tools = home.tools;
  return (
    <div className="rounded-[16px] border border-border bg-card overflow-hidden">

      {/* ── Top: headline + single icon row ── */}
      <div className="relative px-4 sm:px-10 pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-border">
        {[
          { top: "14%", left: "3%" }, { top: "10%", left: "20%" },
          { top: "12%", right: "22%" }, { top: "14%", right: "4%" },
        ].map((pos, i) => (
          <span key={i} className="hidden sm:block absolute select-none pointer-events-none text-[11px]" style={{ ...pos as React.CSSProperties, color: "oklch(0.18 0.01 240 / 0.15)" }}>★</span>
        ))}

        <h2 className="text-center font-bold tracking-tightest leading-none" style={{ fontSize: "clamp(28px, 5.5vw, 72px)", color: "oklch(0.38 0.22 255)" }}>
          [ my toolkit ]
        </h2>

        {/* Single row of all icons */}
        <div className="mt-6 sm:mt-10 flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center gap-1.5 group">
              <div
                className="rounded-[12px] sm:rounded-[16px] overflow-hidden shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)] transition-transform duration-200 group-hover:-translate-y-1"
                style={{ width: 40, height: 40 }}
              >
                {toolIcon(tool.name)}
              </div>
              <span className="text-[8px] sm:text-[9px] tracking-tight text-foreground/40">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom: description cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-border">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-start gap-3 sm:gap-4 px-4 sm:px-7 py-4 sm:py-6 border-b border-border"
          >
            {/* Icon */}
            <div
              className="rounded-[10px] sm:rounded-[12px] overflow-hidden shrink-0 shadow-[0_3px_10px_-3px_oklch(0.2_0.02_240/0.18)]"
              style={{ width: 36, height: 36 }}
            >
              {toolIcon(tool.name)}
            </div>

            {/* Text */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <p className="text-[12px] sm:text-[13px] font-semibold tracking-tight text-foreground">{tool.name}</p>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[8px] sm:text-[9px] tracking-tight text-foreground/40">{tool.category}</span>
              </div>
              <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-[12px] leading-relaxed tracking-tight text-foreground/55">
                {tool.how}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ───────── ABOUT ───────── */

function About() {
  return (
    <section id="about" className="mt-16 sm:mt-20">
      <SectionHeader index="01" title="About" />

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">

        {/* ── LEFT: editorial layout ── */}
        <div className="flex flex-col rounded-[16px] border border-border bg-card overflow-hidden">

          {/* Punchy statement */}
          <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-6 border-b border-border">
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3">01 — who i am</p>
            <p
              className="font-bold tracking-tightest text-foreground leading-[0.92]"
              style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
            >
              I grow pages.<br />
              <span style={{ color: "oklch(0.18 0.01 240 / 0.28)" }}>Build brands.</span><br />
              <span style={{ color: "oklch(0.18 0.01 240 / 0.28)" }}>Make content stick.</span>
            </p>
            <p className="mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-sm">
              Social media manager &amp; creative developer from Subic Bay, Philippines.
              I run the full marketing stack for business owners who don&apos;t want to deal with marketing
              (or don&apos;t have time for it) — Google Ads, Meta Ads, content, and branding — and I&apos;ve built
              pages and identities from zero.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
            {[
              { v: "9",    l: "brands managed"  },
              { v: "2+",   l: "yrs freelancing"  },
              { v: "5+",   l: "brands built"     },
            ].map(({ v, l }) => (
              <div key={l} className="px-5 py-4">
                <p className="text-[26px] font-bold tracking-tightest leading-none text-foreground">{v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40">{l}</p>
              </div>
            ))}
          </div>

          {/* Clients */}
          <div className="px-5 sm:px-8 py-5 border-b border-border">
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-4">02 — clients</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Oaklynwear",              sub: "Fashion · Full-stack · USA"       },
                { name: "Roselyn Atelier",         sub: "Fashion · Full-stack · UK"        },
                { name: "Lirenne Wear",            sub: "Fashion · Full-stack · USA"       },
                { name: "Bella Monza",             sub: "Fashion · Full-stack"             },
                { name: "Nova Noir",               sub: "Fashion · Full-stack · USA"       },
                { name: "StealandStyle",           sub: "Fashion · Social media"           },
                { name: "Masinloc Tourism Office", sub: "Creative Strategist · Facebook"   },
                { name: "Fast Snaking Services",   sub: "Local service · Facebook"         },
                { name: "The Snappy Nomad",        sub: "Branding strategy · Coming soon"  },
              ].map(({ name, sub }) => (
                <div key={name} className="rounded-[8px] border border-border bg-secondary/40 px-3 py-2.5">
                  <p className="text-[12px] font-medium tracking-tight text-foreground/80">{name}</p>
                  <p className="text-[10px] tracking-tight text-foreground/40 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="px-5 sm:px-8 py-5 flex-1">
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-4">03 — tools &amp; skills</p>
            <div className="space-y-3">
              {[
                { cat: "Design",       items: ["Adobe Illustrator", "Photoshop", "Canva"] },
                { cat: "Social & Ads", items: ["Google Ads", "Meta Ads Manager", "Instagram", "Facebook", "TikTok", "Content Strategy"] },
                { cat: "Email",        items: ["Klaviyo", "Email Marketing", "Flows & Automation"] },
                { cat: "Video",        items: ["CapCut", "Reels", "Motion captions"] },
                { cat: "AI",           items: ["Claude", "Claude Code", "Higgsfield AI", "ChatGPT"] },
                { cat: "E-comm",       items: ["Full-Funnel Strategy", "Product Research", "Shopify", "Dropshipping", "Poky", "PPSpy"] },
              ].map(({ cat, items }) => (
                <div key={cat} className="flex items-start gap-4">
                  <span className="w-20 shrink-0 text-[10px] uppercase tracking-[0.12em] text-foreground/35 pt-0.5">{cat}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] tracking-tight text-foreground/65">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT: photo ── */}
        <div className="min-h-[400px] lg:min-h-0 lg:h-full">
          <AboutScene />
        </div>

      </div>
    </section>
  );
}

/* ───────── TOOLKIT ───────── */
function Toolkit() {
  return (
    <section id="toolkit" className="mt-20">
      <ToolsShowcase />
    </section>
  );
}

/* ───────── WORK ───────── */
function Work() {
  const { items: workItems } = useWork();
  const { data: home } = useHome();
  const site = home.site;
  return (
    <section id="work" className="mt-20">
      <SectionHeader index="02" title="Selected work" />

      {/* Top bar */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between px-1 mb-6 gap-2">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--traffic-green)" }} />
          <span className="text-[11px] tracking-tight text-foreground/50">
            Available for new projects
          </span>
        </div>
        <span className="text-[11px] tracking-[0.18em] uppercase text-foreground/30">
          Shanzster · 2026
        </span>
      </div>

      {/* 3-column layout — stacks on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-6 lg:gap-8 items-start">

        {/* ── Left sidebar — hidden on mobile, shown on lg ── */}
        <div className="hidden lg:flex flex-col gap-6">

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-3">currently</p>
            <div className="space-y-3">
              {[
                { dot: "var(--traffic-green)",  label: "Social media strategy" },
                { dot: "var(--traffic-yellow)", label: "Brand identity work"   },
                { dot: "oklch(0.74 0.13 240)",  label: "Video content"         },
              ].map(({ dot, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: dot }} />
                  <span className="text-[12px] tracking-tight text-foreground/65">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4">by the numbers</p>
            <div className="space-y-4">
              {[
                { v: "9",    l: "brands managed"   },
                { v: "5+",   l: "brands built"      },
                { v: "2+",   l: "yrs freelancing"   },
                { v: "5",    l: "platforms"          },
              ].map(({ v, l }) => (
                <div key={l}>
                  <p className="text-[24px] font-bold tracking-tightest leading-none text-foreground">{v}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-foreground/35">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-3">services</p>
            <div className="flex flex-col gap-1.5">
              {["Social Media Mgmt", "Brand Identity", "Content Strategy", "Video Editing", "Meta Ads", "Google Ads", "Copywriting"].map((s) => (
                <span key={s} className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] tracking-tight text-foreground/55 w-fit">{s}</span>
              ))}
            </div>
          </div>

          {/* Sticky note */}
          <div
            className="rounded-[4px] p-5 -rotate-1 transition-transform duration-300 hover:rotate-0"
            style={{
              background: "oklch(0.93 0.09 100)",
              boxShadow: "0 8px 20px -8px oklch(0.2 0.02 240 / 0.25)",
            }}
          >
            <p className="text-[9px] uppercase tracking-[0.22em] mb-2.5" style={{ color: "oklch(0.52 0.09 100)" }}>{site.weeklyTitle}</p>
            <div className="space-y-1.5 text-[12px] leading-relaxed tracking-tight" style={{ color: "oklch(0.34 0.06 100)" }}>
              {site.weeklyItems.map((it, i) => (
                <p key={i}>{it.done ? "☑" : "☐"} <EditableText page="home" path={["site", "weeklyItems", i, "text"]} value={it.text} /></p>
              ))}
              <EditableText page="home" path={["site", "weeklyNote"]} value={site.weeklyNote} as="p" className="pt-1.5 font-semibold" />
            </div>
          </div>
        </div>

        {/* ── Center: folder ── */}
        <div className="flex flex-col items-center overflow-hidden md:overflow-visible">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-4 hidden sm:block">
            hover to open · click to view
          </p>
          <div className="w-full overflow-hidden md:overflow-visible">
            <WorkFolderScene items={workItems} />
          </div>
        </div>

        {/* ── Right sidebar — hidden on mobile, shown on lg ── */}
        <div className="hidden lg:flex flex-col gap-6">

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4">clients</p>
            <div className="space-y-3">
              {[
                { name: "Oaklynwear",        tag: "Fashion · US"  },
                { name: "Roselyn Atelier",   tag: "Fashion · UK"  },
                { name: "Lirenne Wear",      tag: "Fashion · US"  },
                { name: "Bella Monza",       tag: "Fashion"       },
                { name: "Nova Noir",         tag: "Fashion · US"  },
                { name: "StealandStyle",     tag: "Fashion · IG"  },
                { name: "Masinloc Tourism",  tag: "Strategy · FB" },
                { name: "Fast Snaking",      tag: "Service · FB"  },
                { name: "The Snappy Nomad",  tag: "Brand · Soon"  },
              ].map(({ name, tag }) => (
                <div key={name} className="flex items-start gap-2.5">
                  <div className="h-7 w-7 rounded-[6px] shrink-0 border border-border bg-secondary flex items-center justify-center">
                    <span className="text-[9px] font-bold text-foreground/40">{name[0]}</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium tracking-tight text-foreground/75 leading-tight">{name}</p>
                    <p className="text-[9px] tracking-tight text-foreground/35">{tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4">recent</p>
            <div className="space-y-3">
              {[
                { label: "Oaklynwear — full-stack takeover",  time: "2026" },
                { label: "Nova Noir — full-stack launch",     time: "2026" },
                { label: "Roselyn Atelier — paid + organic",  time: "2026" },
                { label: "Lirenne Wear — brand & ads",        time: "2026" },
                { label: "Bella Monza — full-stack setup",    time: "2026" },
                { label: "StealandStyle — social management", time: "2026" },
                { label: "Masinloc — Joiners Program",        time: "2026" },
                { label: "The Snappy Nomad — pre-launch",     time: "2026" },
              ].map(({ label, time }) => (
                <div key={label} className="flex items-start justify-between gap-2">
                  <p className="text-[11px] tracking-tight text-foreground/60 leading-snug">{label}</p>
                  <span className="text-[9px] tracking-tight text-foreground/30 shrink-0">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[11px] tracking-tight text-foreground/45 leading-relaxed mb-4">
              Want something like this for your brand?
            </p>
            <a
              href="#contact"
              className="rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background text-center block transition hover:opacity-85"
            >
              Let's work together →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ───────── SERVICES ───────── */
function Services() {
  const { data: home } = useHome();
  const services = home.services;

  return (
    <section id="services" className="mt-20">
      <SectionHeader index="03" title="Services" />

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s, si) => (
          <div
            key={s.k}
            className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col"
          >
            {/* Title bar */}
            <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <TrafficLights size={11} />
              </div>
              <span className="text-[11px] tracking-tight text-foreground/50">{s.file}</span>
              <span className="text-[10px] tracking-[0.14em] uppercase text-foreground/25">{s.k}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <EditableText page="home" path={["services", si, "title"]} value={s.title} as="h3" className="text-[16px] font-bold tracking-tightest text-foreground leading-tight" />
                <EditableText page="home" path={["services", si, "tagline"]} value={s.tagline} as="p" className="mt-0.5 text-[11px] tracking-tight text-foreground/40 italic" />
              </div>

              <EditableText page="home" path={["services", si, "description"]} value={s.description} as="p" className="text-[12px] leading-relaxed tracking-tight text-foreground/55" />

              {/* Includes */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-foreground/30 mb-2">Includes</p>
                <ul className="space-y-1.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] tracking-tight text-foreground/60">
                      <span className="mt-0.5 h-3.5 w-3.5 rounded-full shrink-0 flex items-center justify-center text-[7px] font-bold text-white" style={{ background: "oklch(0.62 0.18 255)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-3 border-t border-border space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span key={t} className="rounded-full bg-secondary border border-border px-2 py-0.5 text-[9.5px] tracking-tight text-foreground/45">{t}</span>
                  ))}
                </div>
                <p className="text-[10px] tracking-tight text-foreground/35 leading-snug">
                  <span className="font-medium text-foreground/50">Best for: </span>{s.bestFor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-5 rounded-[14px] border border-border bg-card px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[15px] font-semibold tracking-tight text-foreground">Not sure which fits?</p>
          <p className="mt-0.5 text-[12px] tracking-tight text-foreground/50">Send me a message and we'll figure it out.</p>
        </div>
        <a href="#contact" className="rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85 shrink-0">
          Get in touch →
        </a>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
/* ───────── PROCESS ───────── */
function Process() {
  const { data: home } = useHome();
  const steps = home.process;

  return (
    <section id="process" className="mt-20">
      <SectionHeader index="04" title="How I Work" subtitle="The process, start to finish." />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col">
            <div className="flex h-8 items-center justify-between border-b border-border bg-secondary/60 px-3">
              <div className="flex items-center gap-1">
                <TrafficLights size={9} />
              </div>
              <span className="text-[9px] tracking-tight text-foreground/40">{s.file}</span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                  style={{ background: "oklch(0.62 0.18 255)" }}
                >
                  {s.n}
                </span>
                <EditableText page="home" path={["process", i, "title"]} value={s.title} as="h3" className="text-[14px] font-bold tracking-tightest text-foreground" />
              </div>
              <EditableText page="home" path={["process", i, "desc"]} value={s.desc} as="p" className="text-[11.5px] leading-relaxed tracking-tight text-foreground/55 mb-3" />
              <ul className="mt-auto space-y-1">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-1.5 text-[10.5px] tracking-tight text-foreground/45">
                    <span className="text-foreground/20">›</span>{d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────── TESTIMONIALS ───────── */
function Testimonials() {
  const { data: home } = useHome();
  const testimonials = home.testimonials;

  return (
    <section id="testimonials" className="mt-20">
      <SectionHeader index="05" title="What Clients Say" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}

/* iMessage bubble that "arrives": typing dots → message → Delivered */
function TestimonialCard({
  t,
  index,
}: {
  t: { quote: string; name: string; brand: string; platform: string; initials: string; color: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<"idle" | "typing" | "shown">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("shown");
      return;
    }
    const el = ref.current;
    if (!el) return;
    let t1 = 0, t2 = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        t1 = window.setTimeout(() => setStage("typing"), index * 400);
        t2 = window.setTimeout(() => setStage("shown"), index * 400 + 1100);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [index]);

  return (
    <div ref={ref} className="rounded-[14px] border border-border bg-card p-6 flex flex-col gap-4 mac-shadow">
      {/* iMessage-style bubble */}
      <div
        className="rounded-[14px] rounded-tl-[4px] px-4 py-3"
        style={{ background: "oklch(0.62 0.18 255 / 0.1)", border: "1px solid oklch(0.62 0.18 255 / 0.2)" }}
      >
        {stage === "shown" ? (
          <p
            className="text-[13px] leading-relaxed tracking-tight text-foreground/70 italic"
            style={{ animation: "fade-up-in 0.35s cubic-bezier(.2,.8,.2,1) both" }}
          >
            "<EditableText page="home" path={["testimonials", index, "quote"]} value={t.quote} />"
          </p>
        ) : (
          <div className="flex items-center gap-1.5 py-1.5" aria-label="typing">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </div>
        )}
      </div>
      {stage === "shown" && (
        <p
          className="text-right text-[10px] tracking-tight text-foreground/30 -mt-2"
          style={{ animation: "fade-up-in 0.3s ease 0.15s both" }}
        >
          Delivered
        </p>
      )}
      {/* Sender */}
      <div className="flex items-center gap-3 mt-auto">
        <div
          className="h-9 w-9 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
          style={{ background: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <EditableText page="home" path={["testimonials", index, "name"]} value={t.name} as="p" className="text-[12px] font-semibold tracking-tight text-foreground/80" />
          <p className="text-[10px] tracking-tight text-foreground/40">
            <EditableText page="home" path={["testimonials", index, "brand"]} value={t.brand} /> · {t.platform}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────── SOCIAL FEED ───────── */
function SocialFeed() {
  const { data: home } = useHome();
  const posts = home.posts;

  return (
    <section id="latest" className="mt-20">
      <SectionHeader index="06" title="Latest Work" subtitle="From the pages I manage." />
      <div className="mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow">
        {/* Title bar */}
        <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
          <div className="flex items-center gap-1.5">
            <TrafficLights size={11} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/50">latest_posts.grid</span>
          <span className="text-[10px] tracking-tight text-foreground/30">{posts.length} items</span>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-px bg-border">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="aspect-square bg-secondary/40 relative group overflow-hidden"
            >
              <EditableImage
                page="home"
                path={["posts", i, "image"]}
                src={post.image}
                alt={post.alt}
                wrapperClassName="absolute inset-0"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-border">
          <p className="text-[11px] tracking-tight text-foreground/40">
            Recent posts from managed social media accounts
          </p>
          <a
            href="https://instagram.com/shanzster.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-tight text-foreground/50 hover:text-foreground transition"
          >
            View live ↗
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const { data: home } = useHome();
  const faqs = home.faqs;

  return (
    <section id="faq" className="mt-20">
      <SectionHeader index="07" title="FAQ" subtitle="Questions I get asked a lot." />
      <div className="mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow">
        <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
          <div className="flex items-center gap-1.5">
            <TrafficLights size={11} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/50">faq.txt</span>
          <div className="w-10" />
        </div>
        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 px-4 sm:px-7 py-4 sm:py-5">
              <EditableText page="home" path={["faqs", i, "q"]} value={f.q} as="p" className="text-[12px] sm:text-[13px] font-semibold tracking-tight text-foreground" />
              <EditableText page="home" path={["faqs", i, "a"]} value={f.a} as="p" className="text-[12px] sm:text-[13px] leading-relaxed tracking-tight text-foreground/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  const { data: home } = useHome();
  const site = home.site;
  return (
    <section id="contact" className="mt-20">
      <SectionHeader index="08" title="Contact" />
      <div className="mt-6 grid gap-4 sm:gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MacWindow label="Mail —" title="New message">
            <div className="p-5 sm:p-8 lg:p-10">
              <h2 className="text-[clamp(26px,4.5vw,60px)] leading-[0.95] tracking-tightest font-bold">
                <EditableText page="home" path={["site", "contactHeadlineTop"]} value={site.contactHeadlineTop} /><br />
                <span className="selected-text">
                  <EditableText page="home" path={["site", "contactHeadlineAccent"]} value={site.contactHeadlineAccent} />
                </span>
              </h2>
              <EditableText
                page="home"
                path={["site", "contactBlurb"]}
                value={site.contactBlurb}
                as="p"
                className="mt-4 text-[12px] sm:text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-md"
              />
              <div className="mt-6 sm:mt-8 space-y-4 text-[12px] sm:text-[13px] tracking-tight">
                <Field label="To" value={site.contactEmail} />
                <Field label="From" value="you@yourbusiness.com" />
                <Field label="Subject" value="I'd like to work with you" />
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="inline-flex rounded-full bg-foreground px-4 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] tracking-tight text-background transition hover:opacity-90"
                >
                  Send message →
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(site.contactEmail).then(
                      () => toast("Email copied to clipboard", { description: site.contactEmail }),
                      () => toast(`Couldn't copy — email is ${site.contactEmail}`)
                    );
                  }}
                  className="inline-flex rounded-full border border-border bg-card px-4 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] tracking-tight text-foreground/70 transition hover:bg-secondary hover:text-foreground"
                >
                  Copy email
                </button>
              </div>
            </div>
          </MacWindow>
        </div>
        <div className="lg:col-span-4 grid gap-4 content-start">
          <MacWindow title="availability.md">
            <div className="p-5 text-[13px] tracking-tight">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--traffic-green)" }} />
                <EditableText page="home" path={["site", "availabilityTitle"]} value={site.availabilityTitle} className="font-medium text-foreground/80" />
              </div>
              <EditableText page="home" path={["site", "availabilityBody"]} value={site.availabilityBody} as="p" className="text-foreground/50 text-[12px]" />
            </div>
          </MacWindow>
          <MacWindow title="socials.url">
            <ul className="p-5 text-[13px] tracking-tight space-y-2.5">
              {site.socials.map(({ label, href, handle }) => (
                <li key={label} className="flex items-center justify-between">
                  <span className="text-foreground/60">{label}</span>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition text-[11px]">
                    {handle} ↗
                  </a>
                </li>
              ))}
            </ul>
          </MacWindow>
          <MacWindow title="location.txt">
            <div className="p-5 text-[13px] tracking-tight">
              <p className="text-foreground/40 text-[10px] uppercase tracking-[0.18em] mb-1">Based in</p>
              <EditableText page="home" path={["site", "locationCity"]} value={site.locationCity} as="p" className="text-foreground/70" />
              <EditableText page="home" path={["site", "locationNote"]} value={site.locationNote} as="p" className="text-foreground/40 text-[11px] mt-1" />
            </div>
          </MacWindow>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-border pb-3">
      <span className="w-16 text-foreground/40">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-baseline gap-4">
        <span className="text-[12px] tracking-[0.2em] uppercase text-foreground/40">{index}</span>
        <h2 className="text-[clamp(28px,3.4vw,44px)] tracking-tightest font-semibold">
          {title}
        </h2>
      </div>
      {subtitle && (
        <span className="text-[12px] tracking-tight text-foreground/50">{subtitle}</span>
      )}
    </div>
  );
}

function Footer() {
  const { data: home } = useHome();
  const site = home.site;
  return (
    <footer className="mt-20 border-t border-border pt-8 pb-4 text-[12px] tracking-tight text-foreground/50">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8">
        <div>
          <EditableText page="home" path={["site", "footerBrand"]} value={site.footerBrand} as="p" className="font-semibold text-foreground/80 mb-1" />
          <EditableText page="home" path={["site", "footerBlurb"]} value={site.footerBlurb} as="p" className="text-foreground/45 leading-relaxed max-w-[240px]" />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-1">Explore</p>
          {[
            { label: "Selected Work", href: "/#work" },
            { label: "Services", href: "/#services" },
            { label: "Clients", href: "/clients" },
            { label: "About Me", href: "/about" },
            { label: "Gallery", href: "/gallery" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="w-fit text-foreground/50 hover:text-foreground transition">{label}</a>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-1">Connect</p>
          {site.footerConnect.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-fit text-foreground/50 hover:text-foreground transition">{label}</a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/60 pt-4">
        <EditableText page="home" path={["site", "footerCopyright"]} value={site.footerCopyright} />
        <span className="flex items-center gap-4">
          <span className="hidden sm:inline text-foreground/35">Press ⌘K to search</span>
          <EditableText page="home" path={["site", "footerTagline"]} value={site.footerTagline} />
        </span>
      </div>
    </footer>
  );
}
