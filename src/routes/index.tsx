import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MacWindow } from "@/components/MacWindow";
import { SelectingRoles } from "@/components/SelectingRoles";
import { HeroFolder } from "@/components/HeroFolder";
import { NavBar } from "@/components/NavBar";
import { AboutScene } from "@/components/AboutScene";
import { WorkFolderScene } from "@/components/WorkFolder";
import { WORK_ITEMS } from "@/lib/work-data";
import { Reveal } from "@/hooks/useScrollReveal";
import logoImage from "@/image_reference/logos/Shanzster_Logo.png";
import photoshopLogo from "@/image_reference/logos/PS.png";
import illustratorLogo from "@/image_reference/logos/AI.png";
import canvaLogo from "@/image_reference/logos/canva.png";
import capcutLogo from "@/image_reference/logos/capcut.png";
import metaLogo from "@/image_reference/logos/meta.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shanzster — Social Media Manager & Creative Developer" },
      {
        name: "description",
        content:
          "Shanzster — Social media manager, brand identity designer, and creative developer from Subic Bay, Philippines. I grow pages, build brands, and make content stick.",
      },
      { property: "og:title", content: "Shanzster — Social Media Manager & Creative Developer" },
      { property: "og:description", content: "Social media manager, brand identity designer, and creative developer from Subic Bay, Philippines." },
      { property: "og:type", content: "website" },
    ],
  }),
});

type WorkFolderData = {
  id: string;
  label: string;
  subtitle: string;
  folderColor: string;
  tabColor: string;
  items: {
    id: string;
    title: string;
    tag: string;
    description: string;
    result: string;
    color: string;
  }[];
};

const WORK_FOLDERS: WorkFolderData[] = [
  {
    id: "social",
    label: "Social Media Management",
    subtitle: "Pages grown from zero",
    folderColor: "oklch(0.72 0.14 240)",
    tabColor: "oklch(0.66 0.15 240)",
    items: [
      {
        id: "s1",
        title: "Steal & Style",
        tag: "Instagram · Fashion",
        description: "Built the full brand voice and content system for Steal & Style — a Filipino fashion brand. Playful, witty captions mixed with trendy aesthetics and local internet humor.",
        result: "↑ Engagement from day one",
        color: "oklch(0.18 0.02 240)",
      },
      {
        id: "s2",
        title: "Masinloc Tourism Office",
        tag: "Facebook · Government",
        description: "Managed the official social media for Masinloc Tourism. Created content that showcased local destinations and events, making people genuinely want to visit.",
        result: "↑ Reach on tourism posts",
        color: "oklch(0.62 0.14 200)",
      },
      {
        id: "s3",
        title: "Junz Restaurant",
        tag: "Facebook · Food",
        description: "Handled social media for a local restaurant — food photography direction, promotional posts, and community engagement to drive foot traffic.",
        result: "Consistent weekly content",
        color: "oklch(0.72 0.14 55)",
      },
      {
        id: "s4",
        title: "CSA Print and Design",
        tag: "Facebook · Print",
        description: "Managed content for a print and design shop. Showcased products, ran promotions, and built a consistent brand presence on Facebook.",
        result: "Regular client inquiries",
        color: "oklch(0.68 0.10 290)",
      },
      {
        id: "s5",
        title: "Content Strategy",
        tag: "All clients",
        description: "For every page I manage, I build a content calendar, define the brand voice, and plan posts around key dates, trends, and audience behavior.",
        result: "Strategy-first approach",
        color: "oklch(0.60 0.16 255)",
      },
    ],
  },
  {
    id: "brand",
    label: "Brand Identity",
    subtitle: "Visual systems built from scratch",
    folderColor: "oklch(0.70 0.18 290)",
    tabColor: "oklch(0.63 0.19 290)",
    items: [
      {
        id: "b1",
        title: "Logo Design",
        tag: "Illustrator · Branding",
        description: "Designed logos for local businesses using Adobe Illustrator — clean, scalable vector marks that work across print and digital.",
        result: "Print-ready deliverables",
        color: "oklch(0.30 0.10 290)",
      },
      {
        id: "b2",
        title: "Brand Guidelines",
        tag: "Canva · Documentation",
        description: "Created brand guideline documents covering color palettes, typography, logo usage rules, and tone of voice — so clients stay consistent.",
        result: "Full brand system",
        color: "oklch(0.55 0.16 280)",
      },
      {
        id: "b3",
        title: "Social Media Templates",
        tag: "Canva · Templates",
        description: "Built reusable Canva template kits for clients — post templates, story templates, and highlight covers that match their brand identity.",
        result: "Plug-and-play content",
        color: "oklch(0.65 0.14 300)",
      },
      {
        id: "b4",
        title: "Print Design",
        tag: "Photoshop · Print",
        description: "Designed flyers, posters, and promotional materials for CSA Print and Design — layout, typography, and print-ready file preparation.",
        result: "Client-ready print files",
        color: "oklch(0.45 0.18 270)",
      },
      {
        id: "b5",
        title: "Visual Identity",
        tag: "Illustrator · Identity",
        description: "End-to-end visual identity work — from initial concept sketches to final deliverables including logo, colors, fonts, and usage examples.",
        result: "Cohesive brand presence",
        color: "oklch(0.38 0.20 285)",
      },
    ],
  },
  {
    id: "video",
    label: "Video & Content",
    subtitle: "Edits that earn replays",
    folderColor: "oklch(0.22 0.03 240)",
    tabColor: "oklch(0.18 0.03 240)",
    items: [
      {
        id: "v1",
        title: "Instagram Reels",
        tag: "CapCut · Short-form",
        description: "Edited Reels for clients using CapCut — freeze-frame effects, motion captions, trending audio, and pacing that keeps viewers watching to the end.",
        result: "↑ Reach vs static posts",
        color: "oklch(0.16 0.02 240)",
      },
      {
        id: "v2",
        title: "Promotional Videos",
        tag: "CapCut · Promo",
        description: "Created short promotional videos for product launches and events — clean cuts, on-brand text overlays, and sound design that builds excitement.",
        result: "Used across all platforms",
        color: "oklch(0.20 0.02 240)",
      },
      {
        id: "v3",
        title: "Motion Captions",
        tag: "CapCut · Typography",
        description: "Added animated captions and text overlays to videos — making content accessible and more engaging for viewers watching without sound.",
        result: "Higher watch time",
        color: "oklch(0.24 0.03 240)",
      },
      {
        id: "v4",
        title: "Vlog Edits",
        tag: "CapCut · Storytelling",
        description: "Edited vlog-style content with a cinematic feel — color grading, music sync, and narrative pacing that makes everyday moments feel premium.",
        result: "Cinematic storytelling",
        color: "oklch(0.18 0.02 240)",
      },
      {
        id: "v5",
        title: "Collection Launches",
        tag: "CapCut · Fashion",
        description: "Produced launch videos for Steal & Style collection drops — building hype through teaser cuts, product reveals, and styled visual sequences.",
        result: "↑ Launch day engagement",
        color: "oklch(0.14 0.02 240)",
      },
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns & Ads",
    subtitle: "Strategy-led, results-driven",
    folderColor: "oklch(0.62 0.20 255)",
    tabColor: "oklch(0.55 0.21 255)",
    items: [
      {
        id: "c1",
        title: "Meta Ads Campaigns",
        tag: "Meta Ads · Paid",
        description: "Set up and managed Facebook and Instagram ad campaigns — audience targeting, creative selection, budget allocation, and performance monitoring.",
        result: "Measurable reach growth",
        color: "oklch(0.40 0.18 255)",
      },
      {
        id: "c2",
        title: "Audience Targeting",
        tag: "Meta Ads · Strategy",
        description: "Built custom and lookalike audiences based on page engagement, website traffic, and demographic data to reach the right people at the right time.",
        result: "Lower cost per result",
        color: "oklch(0.50 0.20 250)",
      },
      {
        id: "c3",
        title: "Ad Creative Design",
        tag: "Canva · Photoshop",
        description: "Designed ad creatives — static images, carousel posts, and story ads — optimized for each placement with clear CTAs and on-brand visuals.",
        result: "Higher click-through rates",
        color: "oklch(0.45 0.22 260)",
      },
      {
        id: "c4",
        title: "Campaign Reporting",
        tag: "Analytics · Insights",
        description: "Tracked campaign performance using Meta Insights and SocialBlade — compiling results into clear reports with recommendations for next steps.",
        result: "Data-backed decisions",
        color: "oklch(0.35 0.16 255)",
      },
      {
        id: "c5",
        title: "Organic Growth",
        tag: "Strategy · Content",
        description: "Grew pages organically through consistent posting schedules, trend-aware content, hashtag strategy, and community engagement — no budget needed.",
        result: "Sustainable growth",
        color: "oklch(0.55 0.18 245)",
      },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
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
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100dvh - 6rem)" }}
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

        {/* ── Text block — centered, fixed height ── */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-14 pt-6 pb-2 text-center" style={{ flexShrink: 0 }}>

          {/* Eyebrow */}
          <div className="flex flex-col items-center gap-2 mb-3 hero-drop hero-drop-1">
            <img
              src={logoImage}
              alt="Shanzster Logo"
              className="h-6 sm:h-8 w-auto object-contain"
            />
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--traffic-green)" }}
              />
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.26em] text-foreground/40 text-center">
                Social Media Manager · Content Creator · Available 2026
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-bold tracking-tightest text-foreground leading-[0.9] hero-drop hero-drop-2"
            style={{ fontSize: "clamp(32px, 7vw, 88px)" }}
          >
            Your One Man
          </h1>
          <h1
            className="font-bold tracking-tightest leading-[0.9] hero-drop hero-drop-3"
            style={{
              fontSize: "clamp(32px, 7vw, 88px)",
              color: "oklch(0.18 0.01 240 / 0.25)",
            }}
          >
            Creative.
          </h1>

          {/* Sub-line */}
          <p className="mt-3 text-[clamp(12px,1.8vw,16px)] tracking-tight text-foreground/45 max-w-sm hero-drop hero-drop-4">
            <SelectingRoles />
            <span className="blink text-foreground/40">|</span>
          </p>

          {/* CTAs — removed from here, moved below folder */}
        </div>

        {/* ── Folder canvas — fills remaining height ── */}
        <div className="relative flex-1 min-h-0 hero-drop hero-drop-5" style={{ minHeight: 0 }}>
          <HeroFolder />
        </div>

        {/* ── CTAs — below the folder ── */}
        <div className="flex items-center justify-center gap-3 py-4 hero-drop hero-drop-6" style={{ flexShrink: 0 }}>
          <a
            href="#work"
            className="rounded-full bg-foreground px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-background transition hover:opacity-85"
          >
            See the work →
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-card px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-foreground transition hover:bg-secondary"
          >
            Hire me
          </a>
        </div>

        {/* ── Stats strip — pinned to bottom ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 divide-x sm:divide-x divide-border border-t border-border/40 hero-drop hero-drop-7"
          style={{ flexShrink: 0 }}
        >
          <Stat value="6+" label="brands managed" />
          <Stat value="3+" label="brands built" />
          <Stat value="2+" label="yrs freelancing" />
          <Stat value="↑" label="organic growth always" />
        </div>

        {/* ── Marquee ── */}
        <div
          className="overflow-hidden border-t border-border/30 bg-secondary/30"
          style={{ flexShrink: 0 }}
        >
          <div className="ticker flex gap-10 whitespace-nowrap py-2.5 text-[11px] tracking-tight text-foreground/35">
            {[
              "Social Media Management",
              "Brand Identity",
              "Content Strategy",
              "Meta Ads",
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
      <div className="text-[22px] sm:text-[28px] leading-none tracking-tightest font-bold">{value}</div>
      <div className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-foreground/45">
        {label}
      </div>
    </div>
  );
}

/* ───────── TICKER ───────── */
function Ticker() {
  const items = [
    "Northwind +412% organic",
    "Lumen −47% CAC",
    "Fieldnotes 18k waitlist",
    "Hellomint 3.8× demo conv.",
    "Acorn +210% MRR from email",
    "Paperline 1.4M monthly readers",
  ];
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
    name: "SocialBlade",
    category: "Analytics & trends",
    group: "Marketing",
    how: "SocialBlade helps me track competitor growth, benchmark page performance, and spot trends before they peak. I use it to inform content strategy and identify what's working in a niche.",
    usedFor: ["Competitor tracking", "Growth benchmarking", "Trend spotting", "Niche research"],
    lineX: 70, lineY: -38, labelAlign: "left" as const,
    icon: <svg viewBox="0 0 100 100" className="w-full h-full"><rect width="100" height="100" rx="16" fill="#1a1a2e"/><text x="50" y="58" textAnchor="middle" fontSize="13" fontWeight="800" fill="#e94560" fontFamily="Arial, sans-serif">SB</text></svg>,
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
  // ── AI ──
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


function ToolsShowcase() {
  return (
    <div className="rounded-[16px] border border-border bg-card overflow-hidden">

      {/* ── Top: headline + single icon row ── */}
      <div className="relative px-10 pt-12 pb-10 border-b border-border">
        {[
          { top: "14%", left: "3%" }, { top: "10%", left: "20%" },
          { top: "12%", right: "22%" }, { top: "14%", right: "4%" },
        ].map((pos, i) => (
          <span key={i} className="absolute select-none pointer-events-none text-[11px]" style={{ ...pos as React.CSSProperties, color: "oklch(0.18 0.01 240 / 0.15)" }}>★</span>
        ))}

        <h2 className="text-center font-bold tracking-tightest leading-none" style={{ fontSize: "clamp(34px, 5.5vw, 72px)", color: "oklch(0.38 0.22 255)" }}>
          [ my toolkit ]
        </h2>

        {/* Single row of all icons */}
        <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center gap-1.5 group">
              <div
                className="rounded-[16px] overflow-hidden shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)] transition-transform duration-200 group-hover:-translate-y-1"
                style={{ width: 52, height: 52 }}
              >
                {tool.icon}
              </div>
              <span className="text-[9px] tracking-tight text-foreground/40">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom: 2-column description cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-border">
        {TOOLS.map((tool, i) => (
          <div
            key={tool.name}
            className="flex items-start gap-4 px-7 py-6 border-b border-border"
          >
            {/* Icon */}
            <div
              className="rounded-[12px] overflow-hidden shrink-0 shadow-[0_3px_10px_-3px_oklch(0.2_0.02_240/0.18)]"
              style={{ width: 44, height: 44 }}
            >
              {tool.icon}
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-semibold tracking-tight text-foreground">{tool.name}</p>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[9px] tracking-tight text-foreground/40">{tool.category}</span>
              </div>
              <p className="mt-1.5 text-[12px] leading-relaxed tracking-tight text-foreground/55">
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
              I&apos;ve grown pages from zero, launched brand identities, and run campaigns
              without a budget — just strategy and consistency.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
            {[
              { v: "6+",   l: "brands managed"  },
              { v: "2+",   l: "yrs freelancing"  },
              { v: "3+",   l: "brands built"     },
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
                { name: "Steal & Style",          sub: "Fashion brand · Instagram"       },
                { name: "Masinloc Tourism Office", sub: "Gov't page · Facebook"           },
                { name: "Junz Restaurant",         sub: "Local business · Facebook"       },
                { name: "CSA Print and Design",    sub: "Print shop · Facebook"           },
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
                { cat: "Social & Ads", items: ["Meta Ads Manager", "Instagram", "Facebook", "Content Strategy"] },
                { cat: "Video",        items: ["CapCut", "Reels", "Motion captions"] },
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
    <section className="mt-20">
      <ToolsShowcase />
    </section>
  );
}

/* ───────── WORK ───────── */
function Work() {
  return (
    <section id="work" className="mt-20">
      <SectionHeader index="02" title="Selected work" />

      {/* Top bar */}
      <div className="mt-6 flex items-center justify-between px-1 mb-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--traffic-green)" }} />
          <span className="text-[11px] tracking-tight text-foreground/50">
            Available for new projects
          </span>
        </div>
        <span className="text-[11px] tracking-[0.18em] uppercase text-foreground/30">
          Shanzster · 2024–2025
        </span>
      </div>

      {/* 3-column layout — no card wrapper, open desktop feel */}
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-8 items-start">

        {/* ── Left sidebar ── */}
        <div className="flex flex-col gap-6">

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
                { v: "6+",   l: "brands managed"   },
                { v: "3+",   l: "brands built"      },
                { v: "2+",   l: "yrs freelancing"   },
                { v: "3",    l: "platforms"          },
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
              {["Social Media Mgmt", "Brand Identity", "Content Strategy", "Video Editing", "Meta Ads", "Copywriting"].map((s) => (
                <span key={s} className="rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] tracking-tight text-foreground/55 w-fit">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Center: folder — hide overflow on small screens to prevent horizontal pan ── */}
        <div className="flex flex-col items-center overflow-hidden md:overflow-visible">
          <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-6">
            hover to open · click to view
          </p>
          <div className="w-full overflow-hidden md:overflow-visible">
            <WorkFolderScene items={WORK_ITEMS} />
          </div>
        </div>

        {/* ── Right sidebar ── */}
        <div className="flex flex-col gap-6">

          <div className="rounded-[14px] border border-border bg-card p-5">
            <p className="text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4">clients</p>
            <div className="space-y-3">
              {[
                { name: "Steal & Style",     tag: "Fashion · IG" },
                { name: "Masinloc Tourism",  tag: "Gov't · FB"   },
                { name: "Junz Restaurant",   tag: "F&B · FB"     },
                { name: "CSA Print",         tag: "Print · FB"   },
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
                { label: "Steal & Style rebrand",     time: "2024" },
                { label: "Masinloc tourism campaign",  time: "2024" },
                { label: "Junz promo content",         time: "2024" },
                { label: "CSA print materials",        time: "2023" },
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
  const services = [
    {
      k: "01",
      title: "Social Media Management",
      file: "social_media.app",
      tagline: "Your pages, handled end-to-end.",
      description: "I take full ownership of your social media presence — strategy, content, posting, and community management. You run your business, I keep your pages alive and growing.",
      includes: ["Monthly content calendar", "Caption writing & copywriting", "Post & story design", "Scheduling & publishing", "Community management", "Monthly performance review"],
      tools: ["Instagram", "Facebook", "Canva", "Notion"],
      bestFor: "Businesses that need a consistent presence without hiring in-house.",
    },
    {
      k: "02",
      title: "Brand Identity Design",
      file: "brand_identity.ai",
      tagline: "A visual identity that looks like you.",
      description: "I design brand identities from scratch — logos, color systems, typography, and usage guidelines. Visual systems that hold up everywhere.",
      includes: ["Logo design (primary + variations)", "Color palette & typography", "Brand guidelines document", "Social media template kit", "Print-ready file delivery", "2 rounds of revisions"],
      tools: ["Illustrator", "Photoshop", "Canva"],
      bestFor: "New businesses, rebrands, or anyone who needs to look professional fast.",
    },
    {
      k: "03",
      title: "Content Strategy",
      file: "content_strategy.md",
      tagline: "A plan that makes every post intentional.",
      description: "I audit your presence, define content pillars, map your audience, and build a system that makes content creation repeatable and consistent.",
      includes: ["Social media audit", "Audience & competitor research", "Content pillar definition", "Brand voice & tone guide", "3-month editorial calendar", "Hashtag & posting strategy"],
      tools: ["Notion", "SocialBlade", "Meta Insights"],
      bestFor: "Brands that post randomly and want a clear, structured direction.",
    },
    {
      k: "04",
      title: "Video Editing & Reels",
      file: "reels_edit.mp4",
      tagline: "Edits that earn replays.",
      description: "I edit short-form video for Instagram Reels and Facebook. Freeze frames, motion captions, sound design, and pacing that keeps people watching.",
      includes: ["Reels editing (up to 60 sec)", "Motion caption overlays", "Sound design & music sync", "Color grading", "Thumbnail design", "Platform-optimized export"],
      tools: ["CapCut", "Photoshop"],
      bestFor: "Businesses with footage that needs turning into scroll-stopping content.",
    },
    {
      k: "05",
      title: "Meta Ads Management",
      file: "meta_ads.json",
      tagline: "Paid campaigns that reach the right people.",
      description: "I set up, run, and optimize Facebook and Instagram ad campaigns. Audience targeting, creative design, and performance reporting — full cycle.",
      includes: ["Campaign setup & structure", "Audience targeting & segmentation", "Ad creative design", "A/B testing", "Budget management", "Weekly performance reports"],
      tools: ["Meta Ads Manager", "Canva", "Photoshop"],
      bestFor: "Businesses ready to invest in paid reach and want measurable results.",
    },
    {
      k: "06",
      title: "Content Creation Package",
      file: "content_package.zip",
      tagline: "Graphics, captions, and a plan — all in one.",
      description: "A full content creation package — I design the posts, write the captions, and build the calendar so you always have ready-to-post content.",
      includes: ["12–20 designed posts per month", "Caption writing for each post", "Story templates", "Highlight cover design", "Content calendar", "One revision round per batch"],
      tools: ["Canva", "Photoshop", "Notion"],
      bestFor: "Small businesses that need a full month of content without the hassle.",
    },
  ];

  return (
    <section id="services" className="mt-20">
      <SectionHeader index="03" title="Services" />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.k}
            className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col"
          >
            {/* Title bar */}
            <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="block h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
              </div>
              <span className="text-[11px] tracking-tight text-foreground/50">{s.file}</span>
              <span className="text-[10px] tracking-[0.14em] uppercase text-foreground/25">{s.k}</span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h3 className="text-[16px] font-bold tracking-tightest text-foreground leading-tight">{s.title}</h3>
                <p className="mt-0.5 text-[11px] tracking-tight text-foreground/40 italic">{s.tagline}</p>
              </div>

              <p className="text-[12px] leading-relaxed tracking-tight text-foreground/55">{s.description}</p>

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
  const steps = [
    {
      n: "01",
      file: "discovery.md",
      title: "Discovery",
      desc: "We talk about your business, your audience, and what you actually need. I ask a lot of questions — the more I understand, the better the work.",
      details: ["Brand audit", "Audience research", "Goal setting", "Competitor review"],
    },
    {
      n: "02",
      file: "strategy.md",
      title: "Strategy",
      desc: "I build the plan — content pillars, brand voice, posting schedule, and the system that makes everything repeatable.",
      details: ["Content pillars", "Brand voice guide", "Editorial calendar", "Platform strategy"],
    },
    {
      n: "03",
      file: "creation.app",
      title: "Creation",
      desc: "I design, write, and produce the content. Posts, stories, reels, graphics — everything built to the strategy.",
      details: ["Graphic design", "Caption writing", "Video editing", "Template systems"],
    },
    {
      n: "04",
      file: "delivery.zip",
      title: "Delivery",
      desc: "Content is scheduled, published, and managed. I handle the posting so you don't have to think about it.",
      details: ["Scheduling & publishing", "Community management", "DM responses", "Story posting"],
    },
    {
      n: "05",
      file: "review.csv",
      title: "Review",
      desc: "Every month I review what's working, what isn't, and adjust the strategy. Data-informed, not guesswork.",
      details: ["Performance analysis", "Strategy adjustment", "Monthly report", "Next month planning"],
    },
  ];

  return (
    <section className="mt-20">
      <SectionHeader index="04" title="How I Work" subtitle="The process, start to finish." />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <div key={s.n} className="rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col">
            <div className="flex h-8 items-center justify-between border-b border-border bg-secondary/60 px-3">
              <div className="flex items-center gap-1">
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-red)" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
                <span className="h-[9px] w-[9px] rounded-full" style={{ background: "var(--traffic-green)" }} />
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
                <h3 className="text-[14px] font-bold tracking-tightest text-foreground">{s.title}</h3>
              </div>
              <p className="text-[11.5px] leading-relaxed tracking-tight text-foreground/55 mb-3">{s.desc}</p>
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
  const testimonials = [
    {
      quote: "Add a real quote from a client here — even a DM or message works.",
      name: "Client Name",
      brand: "Brand Name",
      platform: "Instagram",
      initials: "CN",
      color: "oklch(0.72 0.14 240)",
    },
    {
      quote: "Add another real quote here. Something specific about the results or the experience.",
      name: "Client Name",
      brand: "Brand Name",
      platform: "Facebook",
      initials: "CN",
      color: "oklch(0.60 0.16 170)",
    },
    {
      quote: "A third testimonial. Even 'the page finally looks professional' is a real result worth sharing.",
      name: "Client Name",
      brand: "Brand Name",
      platform: "Facebook",
      initials: "CN",
      color: "oklch(0.68 0.14 55)",
    },
  ];

  return (
    <section className="mt-20">
      <SectionHeader index="05" title="What Clients Say" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-[14px] border border-border bg-card p-6 flex flex-col gap-4 mac-shadow">
            {/* iMessage-style bubble */}
            <div
              className="rounded-[14px] rounded-tl-[4px] px-4 py-3"
              style={{ background: "oklch(0.62 0.18 255 / 0.1)", border: "1px solid oklch(0.62 0.18 255 / 0.2)" }}
            >
              <p className="text-[13px] leading-relaxed tracking-tight text-foreground/70 italic">
                "{t.quote}"
              </p>
            </div>
            {/* Sender */}
            <div className="flex items-center gap-3 mt-auto">
              <div
                className="h-9 w-9 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-[12px] font-semibold tracking-tight text-foreground/80">{t.name}</p>
                <p className="text-[10px] tracking-tight text-foreground/40">{t.brand} · {t.platform}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] tracking-tight text-foreground/30">
        ↑ Replace with real client quotes — DMs, messages, or emails count
      </p>
    </section>
  );
}

/* ───────── SOCIAL FEED ───────── */
function SocialFeed() {
  const posts = Array.from({ length: 6 }, (_, i) => ({ id: i }));

  return (
    <section className="mt-20">
      <SectionHeader index="06" title="Latest Work" subtitle="From the pages I manage." />
      <div className="mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow">
        {/* Title bar */}
        <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/50">latest_posts.grid</span>
          <span className="text-[10px] tracking-tight text-foreground/30">6 items</span>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-3 gap-px bg-border">
          {posts.map((p) => (
            <div
              key={p.id}
              className="aspect-square bg-secondary/40 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-[0.16em] text-foreground/20">Post {p.id + 1}</p>
                <p className="text-[9px] tracking-tight text-foreground/15 mt-1">screenshot here</p>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-border">
          <p className="text-[11px] tracking-tight text-foreground/40">
            Add real screenshots from your managed pages
          </p>
          <a
            href="https://instagram.com/stealandstyle.co"
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
  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "For social media management, you'll see a more consistent and professional presence immediately. Organic growth typically takes 2–3 months of consistent posting. Paid ads can show results within the first week.",
    },
    {
      q: "Do you work with businesses outside the Philippines?",
      a: "Yes. I work remotely and have no location restrictions. As long as we can communicate clearly and you're targeting a market I can research, we can work together.",
    },
    {
      q: "What do you need from me to get started?",
      a: "Access to your social media pages, a brief about your business and goals, and any existing brand assets (logo, colors, photos). I'll handle the rest.",
    },
    {
      q: "Do you offer one-time projects or only retainers?",
      a: "Both. Brand identity and content strategy are typically one-time projects. Social media management and Meta Ads work best as ongoing retainers since consistency is what drives results.",
    },
    {
      q: "How do revisions work?",
      a: "Every project includes at least one round of revisions. For ongoing work, feedback is built into the monthly review cycle. I'd rather get it right than deliver something you're not happy with.",
    },
    {
      q: "Can I see examples of your work before hiring you?",
      a: "Yes — the Selected Work section has case studies for each client. You can also visit the live pages I manage directly.",
    },
  ];

  return (
    <section className="mt-20">
      <SectionHeader index="07" title="FAQ" subtitle="Questions I get asked a lot." />
      <div className="mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow">
        <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-red)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-yellow)" }} />
            <span className="h-[11px] w-[11px] rounded-full" style={{ background: "var(--traffic-green)" }} />
          </div>
          <span className="text-[11px] tracking-tight text-foreground/50">faq.txt</span>
          <div className="w-10" />
        </div>
        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-7 py-5">
              <p className="text-[13px] font-semibold tracking-tight text-foreground">{f.q}</p>
              <p className="text-[13px] leading-relaxed tracking-tight text-foreground/60">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── CONTACT ───────── */
function Contact() {
  return (
    <section id="contact" className="mt-20">
      <SectionHeader index="08" title="Contact" />
      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MacWindow label="Mail —" title="New message">
            <div className="p-8 sm:p-10">
              <h2 className="text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-tightest font-bold">
                Let&apos;s work<br />
                <span className="selected-text">together.</span>
              </h2>
              <p className="mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-md">
                Whether you need a social media manager, a brand identity, or just want to talk strategy — I&apos;m open. Send me a message and I&apos;ll get back to you within 24 hours.
              </p>
              <div className="mt-8 space-y-4 text-[13px] tracking-tight">
                <Field label="To" value="your@email.com" />
                <Field label="From" value="you@yourbusiness.com" />
                <Field label="Subject" value="I'd like to work with you" />
              </div>
              <a
                href="mailto:your@email.com"
                className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-[13px] tracking-tight text-background transition hover:opacity-90"
              >
                Send message →
              </a>
            </div>
          </MacWindow>
        </div>
        <div className="lg:col-span-4 grid gap-4 content-start">
          <MacWindow title="availability.md">
            <div className="p-5 text-[13px] tracking-tight">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--traffic-green)" }} />
                <span className="font-medium text-foreground/80">Available for new projects</span>
              </div>
              <p className="text-foreground/50 text-[12px]">Currently taking on social media management, brand identity, and content strategy projects.</p>
            </div>
          </MacWindow>
          <MacWindow title="socials.url">
            <ul className="p-5 text-[13px] tracking-tight space-y-2.5">
              {[
                { label: "Instagram", href: "https://instagram.com", handle: "@yourhandle" },
                { label: "Facebook", href: "https://facebook.com", handle: "Your Page" },
                { label: "Email", href: "mailto:your@email.com", handle: "your@email.com" },
              ].map(({ label, href, handle }) => (
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
              <p className="text-foreground/70">Subic Bay, Philippines</p>
              <p className="text-foreground/40 text-[11px] mt-1">Available remotely worldwide</p>
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
  return (
    <footer className="mt-20 border-t border-border pt-6 pb-4 text-[12px] tracking-tight text-foreground/50">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>© 2026 Shanzster · Subic Bay, Philippines</span>
        <span>Built like a Mac. Designed to convert.</span>
      </div>
    </footer>
  );
}
