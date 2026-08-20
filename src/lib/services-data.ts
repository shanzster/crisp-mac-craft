/* Services offered. Note the id key is `k` (the "01"–"09" number shown on the
   card), not `id` — the CMS is configured with idKey: "k" for this collection. */
export type Service = {
  k: string;
  title: string;
  file: string;
  tagline: string;
  description: string;
  includes: string[];
  tools: string[];
  bestFor: string;
  color: string;
  sample?: { label: string; url: string };
};

export const SERVICES: Service[] = [
  {
    k: "01",
    title: "Social Media Management",
    file: "social_media.app",
    tagline: "Your pages, handled end-to-end.",
    description:
      "I take full ownership of your social presence — strategy, content, posting, and community management. You run your business, I keep your pages alive and growing.",
    includes: [
      "Monthly content calendar",
      "Caption writing & copywriting",
      "Post & story design",
      "Scheduling & publishing",
      "Community management",
      "Monthly performance review",
    ],
    tools: ["Instagram", "Facebook", "Canva", "Notion"],
    bestFor: "Businesses that need a consistent presence without hiring in-house.",
    color: "oklch(0.62 0.16 255)",
  },
  {
    k: "02",
    title: "Brand Identity Design",
    file: "brand_identity.ai",
    tagline: "A visual identity that looks like you.",
    description:
      "I design brand identities from scratch — logos, color systems, typography, and usage guidelines. Visual systems that hold up everywhere.",
    includes: [
      "Logo design (primary + variations)",
      "Color palette & typography",
      "Brand guidelines document",
      "Social media template kit",
      "Print-ready file delivery",
      "2 rounds of revisions",
    ],
    tools: ["Illustrator", "Photoshop", "Canva"],
    bestFor: "New businesses, rebrands, or anyone who needs to look professional fast.",
    color: "oklch(0.55 0.16 300)",
  },
  {
    k: "03",
    title: "Content Strategy",
    file: "content_strategy.md",
    tagline: "A plan that makes every post intentional.",
    description:
      "I audit your presence, define content pillars, map your audience, and build a system that makes content creation repeatable and consistent.",
    includes: [
      "Social media audit",
      "Audience & competitor research",
      "Content pillar definition",
      "Brand voice & tone guide",
      "3-month editorial calendar",
      "Hashtag & posting strategy",
    ],
    tools: ["Notion", "SocialBlade", "Meta Insights"],
    bestFor: "Brands that post randomly and want a clear, structured direction.",
    color: "oklch(0.60 0.13 200)",
  },
  {
    k: "04",
    title: "Video Editing & Reels",
    file: "reels_edit.mp4",
    tagline: "Edits that earn replays.",
    description:
      "I edit short-form video for Instagram Reels and Facebook. Freeze frames, motion captions, sound design, and pacing that keeps people watching.",
    includes: [
      "Reels editing (up to 60 sec)",
      "Motion caption overlays",
      "Sound design & music sync",
      "Color grading",
      "Thumbnail design",
      "Platform-optimized export",
    ],
    tools: ["CapCut", "Photoshop"],
    bestFor: "Businesses with footage that needs turning into scroll-stopping content.",
    color: "oklch(0.55 0.12 20)",
  },
  {
    k: "05",
    title: "Paid Ads Management",
    file: "paid_ads.json",
    tagline: "Meta + Google campaigns that reach the right people.",
    description:
      "I set up, run, and optimize paid campaigns across Meta (Facebook & Instagram) and Google (Search & Shopping). Targeting, creative, and reporting — full cycle.",
    includes: [
      "Meta campaign setup & structure",
      "Google Search & Shopping campaigns",
      "Audience targeting & segmentation",
      "Ad creative design & A/B testing",
      "Budget management",
      "Weekly performance reports",
    ],
    tools: ["Meta Ads Manager", "Google Ads", "Canva", "Photoshop"],
    bestFor: "E-commerce and service businesses ready to invest in paid reach with measurable results.",
    color: "oklch(0.58 0.15 145)",
  },
  {
    k: "06",
    title: "Content Creation Package",
    file: "content_package.zip",
    tagline: "Graphics, captions, and a plan — all in one.",
    description:
      "A full content creation package — I design the posts, write the captions, and build the calendar so you always have ready-to-post content.",
    includes: [
      "12–20 designed posts per month",
      "Caption writing for each post",
      "Story templates",
      "Highlight cover design",
      "Content calendar",
      "One revision round per batch",
    ],
    tools: ["Canva", "Photoshop", "Notion"],
    bestFor: "Small businesses that need a full month of content without the hassle.",
    color: "oklch(0.60 0.14 85)",
  },
  {
    k: "07",
    title: "Shopify Store Editing",
    file: "shopify_store.liquid",
    tagline: "A storefront built to convert.",
    description:
      "I set up and customize Shopify stores end-to-end — theme, layout, product pages, and sections — so the store looks premium and turns visitors into buyers. Clean, on-brand, mobile-first.",
    includes: [
      "Theme setup & customization",
      "Homepage & section design",
      "Product & collection page layout",
      "Mobile-responsive polish",
      "App integration & configuration",
      "Speed & conversion tweaks",
    ],
    tools: ["Shopify", "Liquid", "Photoshop", "Canva"],
    bestFor: "Fashion & e-commerce brands that need a clean, conversion-ready storefront.",
    color: "oklch(0.58 0.16 150)",
    sample: { label: "Sample work — novanoir.com", url: "https://novanoir.com" },
  },
  {
    k: "08",
    title: "Email Marketing",
    file: "email_flows.klaviyo",
    tagline: "Revenue on autopilot, straight to the inbox.",
    description:
      "I set up and run Klaviyo email & SMS for e-commerce brands — the flows and campaigns that turn one-time visitors into repeat buyers. Welcome series, abandoned cart, post-purchase, and promo sends, all segmented and on-brand.",
    includes: [
      "Klaviyo setup & integration",
      "Welcome & abandoned-cart flows",
      "Post-purchase & win-back automations",
      "Campaign design & scheduling",
      "List segmentation & clean-up",
      "Performance tracking & A/B testing",
    ],
    tools: ["Klaviyo", "Shopify", "Canva", "Photoshop"],
    bestFor: "E-commerce brands with traffic and a list they aren't monetizing yet.",
    color: "oklch(0.40 0.10 265)",
  },
  {
    k: "09",
    title: "AI Content & Image Generation",
    file: "ai_content.gen",
    tagline: "On-brand visuals for Shopify — without a photoshoot.",
    description:
      "I generate product and lifestyle imagery for Shopify stores using AI — on-model shots, flat-lays, scene backgrounds, and ad creatives — kept consistent to your brand so catalogs and campaigns ship in hours, not weeks.",
    includes: [
      "AI product & lifestyle imagery",
      "On-model / flat-lay generation",
      "Background & scene generation",
      "Ad & banner creatives",
      "Batch content for full catalogs",
      "On-brand style consistency",
    ],
    tools: ["Higgsfield AI", "Adobe Firefly", "Photoshop", "Canva"],
    bestFor: "Stores that need high-volume, on-brand visuals without a full photoshoot budget.",
    color: "oklch(0.55 0.16 290)",
  },
];
