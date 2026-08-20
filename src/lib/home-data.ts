/* Editable content for the Home page's Testimonials and FAQ sections, stored as
   a single Firestore document (pages/home) with a seed fallback. */

export type Testimonial = {
  quote: string;
  name: string;
  brand: string;
  platform: string;
  initials: string;
  color: string;
};

export type Faq = { q: string; a: string };

export type HomeService = {
  k: string;
  title: string;
  file: string;
  tagline: string;
  description: string;
  includes: string[];
  tools: string[];
  bestFor: string;
};

export type ProcessStep = {
  n: string;
  file: string;
  title: string;
  desc: string;
  details: string[];
};

export type HomePost = { id: string; image: string; alt: string };

/* Text for the toolkit showcase. The icon artwork stays in code (keyed by
   `name` — see TOOL_ICONS in index.tsx); everything else is editable. */
export type HomeTool = {
  name: string;
  category: string;
  group: string;
  how: string;
  usedFor: string[];
};

export type Stat = { value: string; label: string };
export type WeeklyItem = { text: string; done: boolean };
export type LinkItem = { label: string; href: string; handle?: string };

export type SiteInfo = {
  heroBadge: string;
  heroHeadlineTop: string;
  heroHeadlineAccent: string;
  heroStats: Stat[];
  aboutPills: Stat[];
  ticker: string[];
  weeklyTitle: string;
  weeklyItems: WeeklyItem[];
  weeklyNote: string;
  contactEmail: string;
  contactHeadlineTop: string;
  contactHeadlineAccent: string;
  contactBlurb: string;
  availabilityTitle: string;
  availabilityBody: string;
  socials: LinkItem[];
  locationCity: string;
  locationNote: string;
  footerBrand: string;
  footerBlurb: string;
  footerConnect: LinkItem[];
  footerCopyright: string;
  footerTagline: string;
};

export type HomeContent = {
  testimonials: Testimonial[];
  faqs: Faq[];
  services: HomeService[];
  process: ProcessStep[];
  posts: HomePost[];
  tools: HomeTool[];
  profileImage: string;
  site: SiteInfo;
};

export const HOME: HomeContent = {
  testimonials: [
    {
      quote:
        "The Joiners Program he pitched for Masinloc was one of the greatest things we've done! It brought a lot of revenue and tourism to the nature wonders of Masinloc. Highly recommend working with him.",
      name: "Marlon Elago",
      brand: "Masinloc Tourism Office",
      platform: "Facebook",
      initials: "ME",
      color: "oklch(0.58 0.14 200)",
    },
    {
      quote:
        "Hiring Sean amongst the other candidates was amazing. He did great on the test week — managed to build my brand and my audience in just one week. Always provided updates and never missed a day of posting. Referred him to some of my friends too.",
      name: "Chesky",
      brand: "Fast Snaking Services",
      platform: "Facebook",
      initials: "CH",
      color: "oklch(0.55 0.14 25)",
    },
  ],
  faqs: [
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
  ],
  services: [
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
      title: "Paid Ads Management",
      file: "paid_ads.json",
      tagline: "Meta + Google campaigns that reach the right people.",
      description: "I set up, run, and optimize paid campaigns across Meta (Facebook & Instagram) and Google (Search & Shopping). Audience targeting, creative design, and performance reporting — full cycle.",
      includes: ["Meta campaign setup & structure", "Google Search & Shopping campaigns", "Audience targeting & segmentation", "Ad creative design & A/B testing", "Budget management", "Weekly performance reports"],
      tools: ["Meta Ads Manager", "Google Ads", "Canva", "Photoshop"],
      bestFor: "E-commerce and service businesses ready to invest in paid reach with measurable results.",
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
  ],
  process: [
    { n: "01", file: "discovery.md", title: "Discovery", desc: "We talk about your business, your audience, and what you actually need. I ask a lot of questions — the more I understand, the better the work.", details: ["Brand audit", "Audience research", "Goal setting", "Competitor review"] },
    { n: "02", file: "strategy.md", title: "Strategy", desc: "I build the plan — content pillars, brand voice, posting schedule, and the system that makes everything repeatable.", details: ["Content pillars", "Brand voice guide", "Editorial calendar", "Platform strategy"] },
    { n: "03", file: "creation.app", title: "Creation", desc: "I design, write, and produce the content. Posts, stories, reels, graphics — everything built to the strategy.", details: ["Graphic design", "Caption writing", "Video editing", "Template systems"] },
    { n: "04", file: "delivery.zip", title: "Delivery", desc: "Content is scheduled, published, and managed. I handle the posting so you don't have to think about it.", details: ["Scheduling & publishing", "Community management", "DM responses", "Story posting"] },
    { n: "05", file: "review.csv", title: "Review", desc: "Every month I review what's working, what isn't, and adjust the strategy. Data-informed, not guesswork.", details: ["Performance analysis", "Strategy adjustment", "Monthly report", "Next month planning"] },
  ],
  posts: [
    { id: "1", image: "/LatestPosts/Brand-Kit-Vertical.png", alt: "Brand Kit Design" },
    { id: "2", image: "/LatestPosts/calltoactionpost2.png", alt: "Call to Action Post" },
    { id: "3", image: "/LatestPosts/Collection2_Cover1.png", alt: "Collection Cover" },
    { id: "4", image: "/LatestPosts/Cover1 (1).png", alt: "Cover Design" },
    { id: "5", image: "/LatestPosts/OnboardingPost.png", alt: "Onboarding Post" },
    { id: "6", image: "/LatestPosts/WeExistPost.png", alt: "We Exist Post" },
  ],
  tools: [
    { name: "Photoshop", category: "Photo editing", group: "Creative", how: "I use Photoshop for retouching campaign photos, building social media templates, and creating high-quality thumbnails and promotional visuals that stop the scroll.", usedFor: ["Campaign visuals", "Photo retouching", "Thumbnail design", "Ad creatives"] },
    { name: "Illustrator", category: "Vector design", group: "Creative", how: "Illustrator is my go-to for building brand identities from scratch — logos, icon sets, brand guidelines, and print-ready assets that scale perfectly at any size.", usedFor: ["Logo design", "Brand identity", "Icon sets", "Print assets"] },
    { name: "Canva", category: "Brand visuals", group: "Creative", how: "Canva is where I build fast, on-brand content at scale — social posts, stories, decks, and client-ready presentations. I use it to maintain visual consistency across all platforms.", usedFor: ["Social posts", "Stories", "Pitch decks", "Brand templates"] },
    { name: "CapCut", category: "Video editing", group: "Creative", how: "CapCut is my primary video editor for Reels and short-form content. I use it for freeze-frame edits, motion captions, sound design, and cinematic cuts that drive replays.", usedFor: ["Reels editing", "Motion captions", "Vlogs", "Promo videos"] },
    { name: "Meta Ads", category: "Paid social", group: "Marketing", how: "I use Meta Ads Manager to plan, launch, and optimize paid campaigns on Facebook and Instagram — from audience targeting and creative testing to budget management and performance reporting.", usedFor: ["Campaign setup", "Audience targeting", "A/B testing", "Performance reports"] },
    { name: "Google Ads", category: "Paid search & shopping", group: "Marketing", how: "I run Google Ads for fashion e-commerce brands — search and shopping campaigns that capture buyers who are already looking. Keyword strategy, campaign structure, conversion tracking, and budget optimization.", usedFor: ["Search campaigns", "Shopping ads", "Conversion tracking", "Budget optimization"] },
    { name: "SocialBlade", category: "Analytics & trends", group: "Marketing", how: "SocialBlade helps me track competitor growth, benchmark page performance, and spot trends before they peak. I use it to inform content strategy and identify what's working in a niche.", usedFor: ["Competitor tracking", "Growth benchmarking", "Trend spotting", "Niche research"] },
    { name: "Klaviyo", category: "Email & SMS", group: "Marketing", how: "Klaviyo is my email & SMS engine for e-commerce — welcome and abandoned-cart flows, campaign sends, segmentation, and automations that turn subscribers into repeat buyers on autopilot.", usedFor: ["Email flows", "Abandoned cart", "Campaigns", "Segmentation"] },
    { name: "Notion", category: "Planning & docs", group: "Productivity", how: "Notion is my content command center. I use it to build editorial calendars, track campaign briefs, manage client deliverables, and document brand guidelines — everything in one place.", usedFor: ["Content calendars", "Campaign briefs", "Client docs", "Brand guidelines"] },
    { name: "PPSpy", category: "Ad intelligence", group: "E-commerce", how: "PPSpy is my ad research tool — I use it to spy on competitor ads and Shopify stores, spot winning products, and validate what's actually selling before I build campaigns around it.", usedFor: ["Competitor ad research", "Winning products", "Store analysis", "Trend validation"] },
    { name: "Poky", category: "Product importing", group: "E-commerce", how: "Poky handles product importing for the Shopify stores I manage — pulling products in fast with clean titles, images, and variants so fashion catalogs go live in hours, not days.", usedFor: ["Shopify imports", "Catalog setup", "Product listings", "Store operations"] },
    { name: "Claude", category: "AI assistant", group: "AI", how: "Claude is my thinking partner for strategy and copy — campaign angles, long-form writing, brand voice refinement, and research. It handles the heavy reasoning so I can move faster on execution.", usedFor: ["Strategy drafts", "Long-form copy", "Brand voice", "Research"] },
    { name: "Claude Code", category: "AI coding", group: "AI", how: "Claude Code is how I build and maintain the web side of my work — this portfolio, client landing pages, and quick web tweaks — straight from the terminal, without needing a dev team.", usedFor: ["This portfolio", "Landing pages", "Web tweaks", "Automation"] },
    { name: "Higgsfield AI", category: "AI video & image", group: "AI", how: "Higgsfield AI generates video and image content for campaigns — concept visuals, motion experiments, and AI-driven ad creatives that would be impossible to shoot on a small-brand budget.", usedFor: ["AI video", "Concept visuals", "Ad creatives", "Content experiments"] },
    { name: "ChatGPT", category: "AI writing", group: "AI", how: "I use ChatGPT to accelerate content creation — drafting captions, brainstorming campaign angles, writing ad copy variations, and refining brand voice. It's a creative partner, not a replacement.", usedFor: ["Caption writing", "Ad copy", "Campaign ideation", "Brand voice"] },
    { name: "Adobe Firefly", category: "AI image gen", group: "AI", how: "Adobe Firefly lets me generate and edit visuals directly inside Photoshop and Illustrator — filling backgrounds, generating concept art, and creating on-brand imagery faster than traditional methods.", usedFor: ["Generative fill", "Concept visuals", "Background gen", "Creative exploration"] },
  ],
  profileImage: "",
  site: {
    heroBadge: "Social Media Manager · Content Creator · Available 2026",
    heroHeadlineTop: "Your One Man",
    heroHeadlineAccent: "Creative.",
    heroStats: [
      { value: "9", label: "brands managed" },
      { value: "5+", label: "brands built" },
      { value: "2+", label: "yrs freelancing" },
      { value: "↑", label: "paid + organic growth" },
    ],
    aboutPills: [
      { value: "7", label: "pages managed" },
      { value: "5+", label: "brands built" },
      { value: "2+", label: "yrs freelance" },
    ],
    ticker: [
      "Northwind +412% organic",
      "Lumen −47% CAC",
      "Fieldnotes 18k waitlist",
      "Hellomint 3.8× demo conv.",
      "Acorn +210% MRR from email",
      "Paperline 1.4M monthly readers",
    ],
    weeklyTitle: "this week",
    weeklyItems: [
      { text: "Masinloc campaign report", done: true },
      { text: "Oaklynwear reel edit", done: false },
      { text: "Bella Monza drop teaser", done: false },
    ],
    weeklyNote: "→ 2 client slots open",
    contactEmail: "seanthetechyyy@gmail.com",
    contactHeadlineTop: "Let's work",
    contactHeadlineAccent: "together.",
    contactBlurb:
      "Whether you need a social media manager, a brand identity, or just want to talk strategy — I'm open. Send me a message and I'll get back to you within 24 hours.",
    availabilityTitle: "Available for new projects",
    availabilityBody: "Currently taking on social media management, brand identity, and content strategy projects.",
    socials: [
      { label: "Instagram", href: "https://instagram.com/shanzster.zip", handle: "@shanzster.zip" },
      { label: "Facebook", href: "https://www.facebook.com/krowkiddd/", handle: "krowkiddd" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/shanzster/", handle: "in/shanzster" },
      { label: "OnlineJobs PH", href: "https://www.onlinejobs.ph/jobseekers/info/4270009", handle: "View profile" },
      { label: "Email", href: "mailto:seanthetechyyy@gmail.com", handle: "seanthetechyyy@gmail.com" },
    ],
    locationCity: "Subic Bay, Philippines",
    locationNote: "Available remotely worldwide",
    footerBrand: "Shanzster",
    footerBlurb: "Full-stack marketing for fashion e-commerce brands — ads, content, and branding under one roof.",
    footerConnect: [
      { label: "Instagram ↗", href: "https://instagram.com/shanzster.zip" },
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/shanzster/" },
      { label: "OnlineJobs PH ↗", href: "https://www.onlinejobs.ph/jobseekers/info/4270009" },
      { label: "seanthetechyyy@gmail.com", href: "mailto:seanthetechyyy@gmail.com" },
    ],
    footerCopyright: "© 2026 Shanzster · Subic Bay, Philippines",
    footerTagline: "Built like a Mac. Designed to convert.",
  },
};
