export type WorkItem = {
  id: string;
  title: string;
  client: string;
  tag: string;
  category: string;
  color: string;

  // Case study fields
  overview: string;
  challenge: string;
  approach: string;
  workflow: string[];
  what: string[];
  result: string;
  tools: string[];
  duration?: string;
  platform?: string;

  // Visual assets — all optional, swap placeholders for real files
  logo?: string;
  beforeImg?: string;
  afterImg?: string;
  graphics?: {
    src?: string;
    title: string;
    description: string;
    process?: string[];   // step-by-step how it was made
    tools?: string[];     // tools used for this specific graphic
  }[];
  reels?: string[];
  calendarImg?: string;
  analytics?: { label: string; value: string }[];
  gallery?: string[];
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "steal-and-style",
    title: "Steal & Style",
    client: "Steal & Style",
    tag: "Instagram · Fashion",
    category: "Social Media Management",
    color: "oklch(0.16 0.02 240)",
    platform: "Instagram",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop", "CapCut", "Notion"],

    overview:
      "Steal & Style is a Filipino fashion brand built around affordable, trendy pieces with a strong local identity. They needed a social media presence that felt alive — not just product posts, but a personality that people actually wanted to follow.",

    challenge:
      "The brand had no established voice, no content system, and no visual consistency. Posts were sporadic and didn't reflect the brand's playful, internet-native personality. Engagement was low and the page felt like a catalog rather than a community.",

    approach:
      "I started by defining who the brand was talking to — young Filipino fashion consumers who live on the internet. From there I built a voice that mixed local humor, trending formats, and genuine fashion commentary. The goal was to make the page feel like a person, not a store.",

    workflow: [
      "Brand audit — reviewed existing content and identified what wasn't working",
      "Audience research — mapped the target demographic and what content they engage with",
      "Voice & tone guide — documented the brand personality, language style, and content rules",
      "Content pillars — defined 4 recurring content types to keep the feed varied and strategic",
      "Monthly calendar — planned posts around product drops, trends, and key dates",
      "Template system — built reusable Canva templates for posts and stories",
      "Execution — wrote captions, designed graphics, scheduled and published",
      "Review — monthly performance check and strategy adjustment",
    ],

    what: [
      "Brand voice and tone guidelines",
      "Monthly content calendar",
      "Caption writing with Filipino internet humor",
      "Post and story template design in Canva",
      "Community management and DM responses",
      "Reels editing for product showcases",
    ],

    result:
      "Consistent brand identity from day one. The page started feeling like a real brand — posts had personality, the feed had visual consistency, and engagement grew organically through content people actually wanted to share.",
    graphics: [
      {
        title: "Brand Post Template",
        description: "Reusable Canva template for product showcase posts. Designed to keep the feed visually consistent while being fast to update each week.",
        tools: ["Canva"],
        process: [
          "Studied the brand colors and existing content to understand the visual direction",
          "Sketched a layout that puts the product front and center with minimal distraction",
          "Built the template in Canva with locked brand elements and editable zones",
          "Tested with 3 different product photos to make sure it worked across styles",
          "Delivered as a shared Canva template the client can update themselves",
        ],
      },
      {
        title: "Story Template",
        description: "Instagram story template for new arrivals and promotions. Bold typography, minimal layout — designed to stop the scroll.",
        tools: ["Canva"],
        process: [
          "Analyzed top-performing fashion stories to understand what formats get taps",
          "Chose a bold, full-bleed layout that works with both product photos and flat lays",
          "Built 3 variations: new arrival, sale, and poll — all matching the brand palette",
          "Added animated text elements for the versions that needed more energy",
        ],
      },
      {
        title: "Promo Graphic",
        description: "Sale announcement graphic. Used for flash sales and collection drops — high contrast, urgency-driven design.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Briefed on the sale details — discount amount, duration, and key products",
          "Designed with high contrast and large type to communicate the offer instantly",
          "Used Photoshop to cut out product images for a cleaner, more premium look",
          "Created feed post and story versions for consistent cross-format promotion",
        ],
      },
      {
        title: "Highlight Cover Set",
        description: "Custom highlight cover icons matching the brand palette. Small detail that makes the profile look polished and intentional.",
        tools: ["Canva", "Adobe Illustrator"],
        process: [
          "Audited the profile and identified which highlight categories were needed",
          "Designed minimal icon set in Illustrator — clean lines, consistent stroke weight",
          "Applied brand colors as backgrounds to tie the covers to the overall aesthetic",
          "Exported at correct Instagram dimensions and uploaded to the profile",
        ],
      },
      {
        title: "Caption Card",
        description: "Quote-style caption card for engagement posts. Encourages saves and shares by making the caption the visual.",
        tools: ["Canva"],
        process: [
          "Identified high-engagement caption formats from competitor research",
          "Wrote the copy first, then designed around it — text is the hero here",
          "Kept the layout clean so the words are readable even at thumbnail size",
          "A/B tested two versions to see which drove more saves",
        ],
      },
      {
        title: "Collection Launch",
        description: "Launch graphic for a new collection drop. Built hype before the release with a teaser-style layout.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Planned a 3-post teaser sequence leading up to the launch date",
          "Used Photoshop to create a blurred/cropped product reveal for the teaser",
          "Designed the full reveal graphic with the collection name and key pieces",
          "Coordinated the posting schedule to maximize anticipation",
        ],
      },
    ],
  },

  {
    id: "masinloc-tourism",
    title: "Masinloc Tourism Office",
    client: "Masinloc Tourism Office",
    tag: "Facebook · Government",
    category: "Social Media Management",
    color: "oklch(0.58 0.14 200)",
    platform: "Facebook",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop", "CapCut"],

    overview:
      "The Masinloc Tourism Office is the official government body promoting tourism in Masinloc, Zambales. The municipality has beautiful beaches, heritage sites, and local events — but the social media presence wasn't doing them justice.",

    challenge:
      "The page was inconsistent and underutilized. Posts were infrequent, visuals were low quality, and the content didn't inspire people to actually visit. A government tourism page needs to feel both official and inviting — a hard balance to strike.",

    approach:
      "I focused on making the content feel aspirational — the kind of posts that make someone say 'I want to go there.' That meant better visuals, storytelling-driven captions, and a consistent posting rhythm that kept Masinloc top of mind.",

    workflow: [
      "Content audit — reviewed existing posts and identified gaps",
      "Destination mapping — catalogued key spots, events, and stories worth featuring",
      "Visual direction — established a clean, bright aesthetic that matched the destination",
      "Content calendar — planned posts around local events, seasons, and tourism peaks",
      "Coordination — worked with the tourism office on event coverage and announcements",
      "Execution — wrote copy, designed graphics, published and managed the page",
    ],

    what: [
      "Regular tourism content (destinations, events, culture)",
      "Visual direction for photography",
      "Caption writing that highlights Masinloc's appeal",
      "Event coverage coordination",
      "Consistent posting schedule",
      "Promotional graphics for local events",
    ],

    result:
      "Increased reach on tourism posts and a stronger, more professional local presence. The page started functioning as an actual tourism resource rather than an afterthought.",
  },

  {
    id: "junz-restaurant",
    title: "Junz Restaurant",
    client: "Junz Restaurant",
    tag: "Facebook · Food & Beverage",
    category: "Social Media Management",
    color: "oklch(0.70 0.14 55)",
    platform: "Facebook",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop"],

    overview:
      "Junz Restaurant is a local food business that needed a social media presence to drive foot traffic and build a loyal customer base. Food businesses live and die by their online presence — a good-looking page can fill tables.",

    challenge:
      "The restaurant had no consistent social media strategy. Posts were random, visuals were inconsistent, and there was no system for promoting specials or new menu items. The page wasn't working as a marketing tool.",

    approach:
      "Food content is about making people hungry. I focused on high-quality visuals, appetite-driven copy, and a posting rhythm that kept the restaurant top of mind — especially around meal times and weekends.",

    workflow: [
      "Menu review — understood the offerings and identified hero items worth featuring",
      "Visual direction — established a warm, appetizing aesthetic for food photography",
      "Content calendar — planned posts around meal times, specials, and local events",
      "Template design — built Canva templates for menu features and promotions",
      "Caption writing — wrote copy that made the food sound as good as it looks",
      "Community management — responded to comments and messages",
    ],

    what: [
      "Food photography direction",
      "Promotional content for menu items and specials",
      "Facebook page management",
      "Consistent weekly posting schedule",
      "Promotional graphics design",
      "Community engagement",
    ],

    result:
      "Regular weekly content and increased customer engagement. The page became a functional marketing tool that drove awareness and kept existing customers coming back.",
  },

  {
    id: "csa-print",
    title: "CSA Print and Design",
    client: "CSA Print and Design",
    tag: "Facebook · Print & Design",
    category: "Brand Identity + Social",
    color: "oklch(0.65 0.12 290)",
    platform: "Facebook",
    duration: "Project-based",
    tools: ["Photoshop", "Illustrator", "Canva"],

    overview:
      "CSA Print and Design is a local print shop offering flyers, tarpaulins, business cards, and custom design work. They needed both a stronger brand presence and better social media content to attract more clients.",

    challenge:
      "The shop's social media didn't reflect the quality of their work. Product posts were plain, there was no visual identity, and the page wasn't generating inquiries. A print shop should look like it knows design — theirs didn't.",

    approach:
      "I treated this as both a branding and social media project. First, establish a clean visual identity that signals quality. Then build content that showcases their work in a way that makes potential clients think 'I want that for my business.'",

    workflow: [
      "Brand assessment — reviewed existing materials and identified inconsistencies",
      "Visual identity — established consistent colors, fonts, and layout style",
      "Template creation — built post templates that showcased products professionally",
      "Content planning — mapped out product features, promotions, and client showcases",
      "Print material design — created flyers and promotional materials for the shop itself",
      "Page management — published content and managed inquiries",
    ],

    what: [
      "Flyers, posters, and promotional material design",
      "Facebook page content and promotions",
      "Product showcase posts",
      "Print-ready file preparation in Photoshop",
      "Consistent brand visuals across all materials",
    ],

    result:
      "Regular client inquiries and a professional online presence that matched the quality of their actual work.",
  },

  {
    id: "brand-identity",
    title: "Brand Identity Work",
    client: "Various clients",
    tag: "Illustrator · Branding",
    category: "Brand Identity",
    color: "oklch(0.45 0.18 270)",
    platform: "Print + Digital",
    duration: "Project-based",
    tools: ["Adobe Illustrator", "Photoshop", "Canva"],

    overview:
      "Brand identity projects for local businesses that needed to look professional — logos, color systems, typography, and the guidelines to keep everything consistent.",

    challenge:
      "Most small local businesses operate without any real brand identity. They use inconsistent fonts, random colors, and logos that don't scale. This makes them look amateur even when their product or service is genuinely good.",

    approach:
      "Every brand identity starts with understanding the business — who they serve, what they stand for, and how they want to be perceived. From there I build a visual system that communicates that clearly and consistently.",

    workflow: [
      "Discovery — understand the business, audience, and positioning",
      "Mood board — establish visual direction and references",
      "Logo concepts — sketch and develop primary logo options",
      "Refinement — iterate based on feedback",
      "System build — extend the logo into a full color, type, and usage system",
      "Guidelines — document everything so the client can stay consistent",
      "Delivery — export all files in required formats",
    ],

    what: [
      "Logo design (primary + variations)",
      "Color palette and typography selection",
      "Brand guidelines document",
      "Social media template kits in Canva",
      "Print-ready file preparation",
    ],

    result:
      "Full brand systems delivered to multiple local clients — businesses that went from looking amateur to looking like they mean business.",
  },

  {
    id: "video-content",
    title: "Video & Reels Editing",
    client: "Various clients",
    tag: "CapCut · Short-form Video",
    category: "Video Editing",
    color: "oklch(0.20 0.02 240)",
    platform: "Instagram · Facebook",
    duration: "Ongoing",
    tools: ["CapCut", "Photoshop"],

    overview:
      "Short-form video editing for clients across fashion, food, and tourism. Reels, promotional videos, and vlog content edited to perform on Instagram and Facebook.",

    challenge:
      "Raw footage is just footage. The difference between a video that gets 200 views and one that gets 20,000 is almost entirely in the edit — the pacing, the music, the captions, the hook in the first 3 seconds.",

    approach:
      "I edit with the same instinct I use for design — every cut is intentional. I study what's performing in the niche, identify the format that fits the content, and build the edit around keeping people watching.",

    workflow: [
      "Brief — understand the goal of the video (awareness, promotion, storytelling)",
      "Footage review — assess what's available and identify the best moments",
      "Structure — plan the narrative arc and pacing",
      "Rough cut — assemble the core edit",
      "Polish — add captions, music, effects, and color grade",
      "Export — deliver in platform-optimized format",
    ],

    what: [
      "Reels editing with freeze-frame and motion effects",
      "Animated caption overlays",
      "Sound design and music sync",
      "Collection launch videos for Steal & Style",
      "Vlog-style content with color grading",
      "Promotional videos for events and products",
    ],

    result:
      "Higher reach and watch time compared to static posts. Video content consistently outperformed photo posts for every client it was used for.",
  },

  {
    id: "meta-ads",
    title: "Meta Ads Campaigns",
    client: "Various clients",
    tag: "Meta Ads · Paid Social",
    category: "Paid Advertising",
    color: "oklch(0.42 0.20 255)",
    platform: "Facebook · Instagram",
    duration: "Campaign-based",
    tools: ["Meta Ads Manager", "Canva", "Photoshop"],

    overview:
      "Facebook and Instagram ad campaigns for local businesses — from initial setup to creative design to performance reporting.",

    challenge:
      "Most small businesses either don't run ads at all, or they boost posts randomly without a strategy. Neither works. Effective paid social requires the right audience, the right creative, and the right objective — all aligned.",

    approach:
      "I treat every campaign as a system. Define the goal first, then work backwards — who needs to see this, what do they need to feel, what action do we want them to take. The creative and targeting follow from that.",

    workflow: [
      "Goal setting — define what success looks like (reach, clicks, conversions)",
      "Audience research — identify targeting parameters and build custom audiences",
      "Creative brief — plan the ad formats and messaging",
      "Creative production — design ad visuals in Canva and Photoshop",
      "Campaign setup — configure in Meta Ads Manager",
      "Launch and monitor — watch performance in the first 48 hours",
      "Optimize — adjust targeting, budget, or creative based on data",
      "Report — deliver clear performance summary with recommendations",
    ],

    what: [
      "Campaign setup and audience targeting",
      "Custom and lookalike audience building",
      "Ad creative design",
      "Budget allocation and bid strategy",
      "Performance reporting with Meta Insights",
      "A/B testing on creatives and audiences",
    ],

    result:
      "Measurable reach growth and lower cost per result across campaigns. Paid spend that actually worked.",
  },

  {
    id: "content-strategy",
    title: "Content Strategy",
    client: "All clients",
    tag: "Strategy · Planning",
    category: "Content Strategy",
    color: "oklch(0.55 0.18 245)",
    platform: "All platforms",
    duration: "Ongoing",
    tools: ["Notion", "SocialBlade", "Meta Insights"],

    overview:
      "The content strategy work that underpins everything else — editorial calendars, brand voice documentation, content pillars, and the planning systems that make consistent content possible.",

    challenge:
      "Most businesses post reactively — when they remember, when something happens, when they feel like it. This creates an inconsistent presence that audiences don't trust and algorithms don't reward.",

    approach:
      "Strategy before content, always. I start by understanding the business goal, then map the audience, then define what content serves both. The calendar and templates come last — they're just the execution layer on top of a clear strategy.",

    workflow: [
      "Audit — review existing content and identify what's working and what isn't",
      "Goal alignment — understand what the business actually needs from social media",
      "Audience mapping — define who we're talking to and what they care about",
      "Content pillars — establish 3–5 recurring content types that serve the strategy",
      "Voice guide — document tone, language style, and content rules",
      "Calendar build — plan 30–90 days of content in Notion",
      "Handoff — deliver the system so the client can maintain it",
    ],

    what: [
      "Monthly editorial calendar planning",
      "Brand voice and tone documentation",
      "Trend research using SocialBlade",
      "Content pillar definition per client",
      "Performance review and strategy adjustment",
      "Content brief templates",
    ],

    result:
      "Every client I've built a strategy for posts more consistently, with more intention, and sees better results than when they were posting randomly.",
  },
];
