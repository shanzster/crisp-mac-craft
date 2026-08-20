/* Editable content for the About page, stored as a single Firestore document
   (pages/about) with a seed fallback. */

export type CredentialItem = { title: string; sub: string; detail: string };
export type CredentialSection = { type: string; icon: string; items: CredentialItem[] };
export type Device = { name: string; role: string; image: string; specs: string[]; color: string };
export type Tool = { name: string; category: string; color: string };
export type JourneyStep = { year: string; title: string; detail: string; color: string; cta?: boolean };
export type Belief = { icon: string; title: string; detail: string };

export type VideoIntro = {
  enabled: boolean;
  buttonLabel: string;
  title: string;
  caption: string;
  url: string; // Cloudinary/MP4 URL, or a YouTube/Vimeo link
};

export type AboutContent = {
  videoIntro: VideoIntro;
  credentials: CredentialSection[];
  devices: Device[];
  tools: Tool[];
  story: string[];
  journey: JourneyStep[];
  beliefs: Belief[];
};

export const ABOUT: AboutContent = {
  videoIntro: {
    enabled: true,
    buttonLabel: "Watch my video introduction",
    title: "Video Introduction",
    caption: "A quick hello — who I am and how I work.",
    url: "",
  },
  credentials: [
    {
      type: "Experience",
      icon: "◈",
      items: [
        { title: "Freelance Social Media Manager", sub: "Self-employed · 2022 – Present", detail: "Running the full marketing stack — Google Ads, Meta Ads, content, and management — for business owners who don't want to deal with marketing: fashion e-commerce brands in the US and UK, plus tourism and local service clients." },
        { title: "Brand Identity Designer", sub: "Self-employed · 2022 – Present", detail: "Logo design, visual systems, and brand guidelines for fashion brands and local clients." },
        { title: "Video Editor", sub: "Self-employed · 2023 – Present", detail: "Short-form video editing for Instagram Reels and Facebook — CapCut, motion captions, sound design." },
      ],
    },
    {
      type: "Skills",
      icon: "✦",
      items: [
        { title: "Social Media Management", sub: "Instagram · Facebook · Content Strategy", detail: "Brand voice, content calendars, community management, and organic growth." },
        { title: "Graphic Design", sub: "Canva · Adobe Illustrator · Photoshop", detail: "Post templates, brand identity, print materials, and ad creatives." },
        { title: "Paid Advertising", sub: "Meta Ads Manager · Google Ads", detail: "Campaign setup across Meta and Google — audience targeting, search & shopping, A/B testing, and performance reporting." },
        { title: "Email Marketing", sub: "Klaviyo · Flows · Campaigns", detail: "Klaviyo email & SMS for e-commerce — welcome and abandoned-cart flows, segmentation, and campaign sends that drive repeat sales on autopilot." },
        { title: "Video Editing", sub: "CapCut · Short-form", detail: "Reels, vlogs, promotional videos, motion captions, and color grading." },
        { title: "AI-Powered Workflow", sub: "Claude · Claude Code · Higgsfield AI", detail: "AI as a force multiplier — Claude for strategy and copy, Claude Code for building web pages like this portfolio, and Higgsfield for AI video and visuals." },
        { title: "E-commerce Operations", sub: "Shopify · Poky · PPSpy", detail: "Product importing with Poky, competitor and winning-product research with PPSpy — keeping fashion store catalogs live and campaigns data-backed." },
        { title: "Full-Funnel E-commerce", sub: "Research → Store → Ads → Retention", detail: "I understand the whole online-store funnel end to end — product and market research, store build, traffic and paid ads, conversion, and retention. I've run the complete dropshipping cycle, and apply the same funnel thinking to any e-commerce brand." },
      ],
    },
  ],
  devices: [
    { name: "MSI Laptop", role: "Primary workstation", image: "/Setup/MSI_Laptop.png", specs: ["Windows 11", "Intel processor", "Gaming performance", "Content creation"], color: "oklch(0.94 0.005 240)" },
    { name: "iPad 11th Gen", role: "Design & illustration", image: "/Setup/Ipad_11th_with_Procreate.png", specs: ["Procreate app", "Digital sketching", "Client presentations", "Design mockups"], color: "oklch(0.94 0.005 240)" },
    { name: "Canson Sketchbook", role: "Traditional sketching", image: "/Setup/Canson_Sketchbook.png", specs: ["Paper sketches", "Concept development", "Hand-drawn designs", "Creative brainstorming"], color: "oklch(0.94 0.005 240)" },
    { name: "Jabra Headphones", role: "Audio & focus", image: "/Setup/Jabra_Noise_Cancelling_Headphones.png", specs: ["Noise cancelling", "Video calls", "Music editing", "Focused work sessions"], color: "oklch(0.94 0.005 240)" },
  ],
  tools: [
    { name: "Canva", category: "Design", color: "oklch(0.55 0.22 290)" },
    { name: "Adobe Illustrator", category: "Design", color: "oklch(0.55 0.20 55)" },
    { name: "Photoshop", category: "Design", color: "oklch(0.50 0.18 240)" },
    { name: "CapCut", category: "Video", color: "oklch(0.20 0.02 240)" },
    { name: "Meta Ads Manager", category: "Marketing", color: "oklch(0.50 0.20 255)" },
    { name: "Google Ads", category: "Marketing", color: "oklch(0.55 0.18 145)" },
    { name: "Klaviyo", category: "Email", color: "oklch(0.32 0.02 260)" },
    { name: "PPSpy", category: "Ad research", color: "oklch(0.40 0.16 260)" },
    { name: "Poky", category: "E-commerce", color: "oklch(0.45 0.16 150)" },
    { name: "Notion", category: "Planning", color: "oklch(0.30 0.01 240)" },
    { name: "SocialBlade", category: "Analytics", color: "oklch(0.45 0.20 27)" },
    { name: "Claude", category: "AI", color: "oklch(0.62 0.14 45)" },
    { name: "Claude Code", category: "AI", color: "oklch(0.25 0.01 240)" },
    { name: "Higgsfield AI", category: "AI", color: "oklch(0.20 0.02 300)" },
    { name: "ChatGPT", category: "AI", color: "oklch(0.50 0.16 165)" },
    { name: "Adobe Firefly", category: "AI", color: "oklch(0.40 0.22 290)" },
  ],
  story: [
    "I started freelancing in 2022 with zero connections — just design skills, an unhealthy obsession with the internet, and the nerve to send cold DMs.",
    "My first breaks weren't handed to me. I pitched the Masinloc Tourism Office myself because their page didn't match how beautiful the place actually is. A total stranger DM'd me wanting to start a plumbing business with no brand, no page, and no budget — so I built the whole thing from nothing, and now his van is a rolling billboard in Philadelphia.",
    "Today I run the full marketing stack for business owners who don't want to deal with marketing — or don't have time for it — Google Ads, Meta Ads, content, branding, management — and I'm building my own travel camera brand, The Snappy Nomad, on the side.",
    "One person. Whole department. That's the whole pitch.",
  ],
  journey: [
    { year: "2022", title: "Started from zero", detail: "First freelance clients — logos, posts, and brand identities for local businesses. No connections, just cold DMs and consistency.", color: "oklch(0.62 0.18 255)" },
    { year: "2023", title: "Added motion", detail: "Picked up video editing — Reels, motion captions, and short-form content built to keep people watching past the first second.", color: "oklch(0.62 0.16 200)" },
    { year: "2026", title: "Going international", detail: "Full marketing stack — Google Ads, Meta Ads, content, branding — for fashion e-commerce brands in the US & UK. Creative strategy for Masinloc Tourism. Building The Snappy Nomad.", color: "oklch(0.55 0.20 290)" },
    { year: "Next", title: "Your brand here?", detail: "I'm open for new clients — the next chapter of this timeline could be your page growing.", color: "oklch(0.78 0.17 145)", cta: true },
  ],
  beliefs: [
    { icon: "✦", title: "Strategy over guesswork", detail: "Every post has a job. If I can't say why something exists, it doesn't ship." },
    { icon: "◈", title: "Consistency compounds", detail: "One viral post is luck. Showing up every day with a system — that's growth." },
    { icon: "▶", title: "Earn attention, don't beg for it", detail: "Content should be worth the scroll-stop. Respect the audience and they'll respect the brand." },
    { icon: "⬡", title: "One person, whole department", detail: "Design, ads, copy, strategy — under one roof. Nothing gets lost in the handoff, because there isn't one." },
  ],
};
