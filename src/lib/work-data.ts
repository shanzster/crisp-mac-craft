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

  // Visual assets â€” all optional, swap placeholders for real files
  logo?: string;
  beforeImg?: string;
  afterImg?: string;
  graphics?: {
    src?: string;
    title: string;
    description: string;
    process?: string[];
    tools?: string[];
    portrait?: boolean;  // tall/vertical images — show full height in modal
  }[];
  reels?: string[];
  calendarImg?: string;
  analytics?: { label: string; value: string }[];
  analyticsImg?: string;
  gallery?: string[];
  flipbookUrl?: string;  // embedded flipbook/document viewer URL
  carouselSlides?: string[];  // carousel post slides shown as swipeable/clickable sequence
  websiteUrl?: string;        // live website to embed/link
  pdfDocs?: { title: string; url: string }[];  // PDFs shown in-browser 2x2 grid
  afterPoints?: { icon: string; text: string }[];  // custom before/after bullet points
  beforePoints?: { icon: string; text: string }[];  // custom before bullet points
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "steal-and-style",
    title: "Steal & Style",
    client: "Steal & Style",
    tag: "Instagram Â· Fashion",
    category: "Social Media Management",
    color: "oklch(0.16 0.02 240)",
    platform: "Instagram",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop", "CapCut", "Notion"],
    logo: "/StealandStyle/logo.jpg",
    beforeImg: "/StealandStyle/LowBrandVisibility.png",
    graphics: [
      {
        src: "/StealandStyle/BrandKit.png",
        title: "Brand Kit",
        description: "Full brand kit â€” colors, typography, and visual guidelines built for Steal & Style.",
        tools: ["Canva", "Adobe Illustrator"],
        process: [
          "Studied the brand colors and existing content to understand the visual direction",
          "Sketched a layout that puts the product front and center with minimal distraction",
          "Built the template in Canva with locked brand elements and editable zones",
          "Tested with 3 different product photos to make sure it worked across styles",
          "Delivered as a shared Canva template the client can update themselves",
        ],
      },
      {
        src: "/StealandStyle/BrandPersonality.png",
        title: "Brand Personality",
        description: "Brand personality board defining tone, voice, and aesthetic direction.",
        tools: ["Canva"],
        process: [
          "Analyzed top-performing fashion stories to understand what formats get taps",
          "Chose a bold, full-bleed layout that works with both product photos and flat lays",
          "Built 3 variations: new arrival, sale, and poll â€” all matching the brand palette",
          "Added animated text elements for the versions that needed more energy",
        ],
      },
      {
        src: "/StealandStyle/Cover1 (1).png",
        title: "Collection Cover",
        description: "Collection launch cover graphic. Used for feed posts and story headers.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Briefed on the sale details â€” discount amount, duration, and key products",
          "Designed with high contrast and large type to communicate the offer instantly",
          "Used Photoshop to cut out product images for a cleaner, more premium look",
          "Created feed post and story versions for consistent cross-format promotion",
        ],
      },
      {
        src: "/StealandStyle/01_Collection3_Cover1.png",
        title: "Collection 3 Cover",
        description: "Hero cover for Collection 3 launch.",
        tools: ["Canva", "Adobe Illustrator"],
        process: [
          "Audited the profile and identified which highlight categories were needed",
          "Designed minimal icon set in Illustrator â€” clean lines, consistent stroke weight",
          "Applied brand colors as backgrounds to tie the covers to the overall aesthetic",
          "Exported at correct Instagram dimensions and uploaded to the profile",
        ],
      },
      {
        src: "/StealandStyle/Steal&Style_IGStory.png",
        title: "Instagram Story",
        description: "Story template for new arrivals. Bold typography designed to stop the scroll.",
        tools: ["Canva"],
        process: [
          "Identified high-engagement caption formats from competitor research",
          "Wrote the copy first, then designed around it â€” text is the hero here",
          "Kept the layout clean so the words are readable even at thumbnail size",
          "A/B tested two versions to see which drove more saves",
        ],
      },
      {
        src: "/StealandStyle/01_Collection3_Teaser.png",
        title: "Collection Launch Teaser",
        description: "Launch teaser graphic for Collection 3 drop. Built hype before the full reveal.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Planned a 3-post teaser sequence leading up to the launch date",
          "Used Photoshop to create a blurred/cropped product reveal for the teaser",
          "Designed the full reveal graphic with the collection name and key pieces",
          "Coordinated the posting schedule to maximize anticipation",
        ],
      },
    ],
    gallery: [
      "/StealandStyle/00_STEAL&STYLE_COLLECTION-1_SK01-05.png",
      "/StealandStyle/00_STEAL&STYLE_COLLECTION-1_SK01.png",
      "/StealandStyle/00_STEAL&STYLE_COLLECTION-1_SK02.png",
      "/StealandStyle/00_STEAL&STYLE_COLLECTION-1_SK06-10.png",
      "/StealandStyle/00_STEAL&STYLE_COLLECTION-1_SK06.png",
      "/StealandStyle/02_Collection3_SH01.png",
      "/StealandStyle/08_Collection3_SH06.png",
      "/StealandStyle/COLLECTION2_CH-01.png",
      "/StealandStyle/COLLECTION2_CH-02.png",
      "/StealandStyle/Collection2_Cover1.png",
      "/StealandStyle/Collection2_Cover2.png",
      "/StealandStyle/Collection4_PA-01.png",
      "/StealandStyle/Collection4_PA-02.png",
      "/StealandStyle/Cover2.png",
      "/StealandStyle/StealandStyleXThe19thStreetCafe.png",
      "/StealandStyle/SW-01 (1).png",
      "/StealandStyle/SW-02.png",
      "/StealandStyle/B2B-1.png",
    ],

    overview:
      "Steal & Style is a Filipino fashion brand built around affordable, trendy pieces with a strong local identity. They needed a social media presence that felt alive â€” not just product posts, but a personality that people actually wanted to follow.",

    challenge:
      "The brand had no established voice, no content system, and no visual consistency. Posts were sporadic and didn't reflect the brand's playful, internet-native personality. Engagement was low and the page felt like a catalog rather than a community.",

    approach:
      "I started by defining who the brand was talking to â€” young Filipino fashion consumers who live on the internet. From there I built a voice that mixed local humor, trending formats, and genuine fashion commentary. The goal was to make the page feel like a person, not a store.",

    workflow: [
      "Brand audit â€” reviewed existing content and identified what wasn't working",
      "Audience research â€” mapped the target demographic and what content they engage with",
      "Voice & tone guide â€” documented the brand personality, language style, and content rules",
      "Content pillars â€” defined 4 recurring content types to keep the feed varied and strategic",
      "Monthly calendar â€” planned posts around product drops, trends, and key dates",
      "Template system â€” built reusable Canva templates for posts and stories",
      "Execution â€” wrote captions, designed graphics, scheduled and published",
      "Review â€” monthly performance check and strategy adjustment",
    ],

    what: [
      "Brand voice and tone guidelines",
      "Monthly content calendar",
      "Caption writing with Filipino internet humor",
      "Post and story template design in Canva",
      "Community management and DM responses",
      "Reels editing for product showcases",
    ],

    afterImg: "/StealandStyle/B2B-1.png",
    result:
      "Built a comprehensive brand personality from the ground up, generated consistent revenue growth, and secured a B2B collaboration â€” I sourced the client, pitched the idea, and handled all the paperwork.",
    calendarImg: "/StealandStyle/ContentCalendar.png",
    analytics: [
      { label: "Profile Views",     value: "3.5K" },
      { label: "Profile Activity",  value: "200"  },
      { label: "Accounts Reached",  value: "1.2K" },
      { label: "Engagement Rate",   value: "8.4%" },
      { label: "Posts Published",   value: "48"   },
      { label: "Follower Growth",   value: "+320" },
    ],
    analyticsImg: "/StealandStyle/Analytics_Screenshot.png",
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
    logo: "/MasinlocTourism/logo.jpg",
    overview: "The Masinloc Tourism Office is the official government body promoting tourism in Masinloc, Zambales. The municipality has beautiful beaches, heritage sites, and local events — but the social media presence wasn't doing them justice.",
    challenge: "The page was inconsistent and underutilized. Posts were infrequent, visuals were low quality, and the content didn't inspire people to actually visit. A government tourism page needs to feel both official and inviting — a hard balance to strike.",
    approach: "I focused on making the content feel aspirational — the kind of posts that make someone say 'I want to go there.' Better visuals, storytelling captions, and a consistent rhythm that kept Masinloc top of mind.",
    beforePoints: [
      { icon: "💬", text: "I was the one who reached out first — DM'd the tourism office because I saw the potential they weren't tapping into." },
      { icon: "📋", text: "No content strategy. No visual system. Posts were scattered and the page wasn't inspiring anyone to visit." },
      { icon: "🔧", text: "My pitch: let me organize, plan, and build a presence that actually reflects how beautiful Masinloc is." },
    ],
    afterPoints: [
      { icon: "◈", text: "Organized and planned a full content system — destination features, event coverage, and a consistent visual identity." },
      { icon: "↑", text: "Generated significant revenue and tourism growth, bringing real visitors to Masinloc's nature rivers and heritage sites." },
      { icon: "✦", text: "The page became an actual tourism resource — aspirational, official, and worth sharing." },
    ],
    workflow: [
      "Content audit — reviewed existing posts and identified gaps",
      "Destination mapping — catalogued key spots, events, and stories worth featuring",
      "Visual direction — established a clean, bright aesthetic that matched the destination",
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
    result: "Increased reach on tourism posts and a stronger, more professional local presence. The page started functioning as an actual tourism resource rather than an afterthought.",
    graphics: [
      {
        src: "/MasinlocTourism/BrandKit.jpg",
        title: "Brand Kit",
        description: "Visual brand kit for Masinloc Tourism — colors, typography, and design language for all official content.",
        tools: ["Canva"],
        process: [
          "Defined a clean, coastal aesthetic that reflects Masinloc's natural beauty",
          "Set color palette and font system for consistent official use",
        ],
      },
      {
        src: "/MasinlocTourism/Poster-1.png",
        title: "Event Poster 1",
        description: "Promotional event poster for a local Masinloc tourism event.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Designed for both print and digital use",
          "Used destination photography and bold typography to build excitement",
        ],
      },
      {
        src: "/MasinlocTourism/Poster-2.png",
        title: "Event Poster 2",
        description: "Second event poster — alternate design for a different event or announcement.",
        tools: ["Canva", "Photoshop"],
        process: ["Maintained brand consistency while adapting layout for the specific event"],
      },
      {
        src: "/MasinlocTourism/Poster-3.png",
        title: "Event Poster 3",
        description: "Third event poster — part of the series for Masinloc tourism campaigns.",
        tools: ["Canva", "Photoshop"],
        process: ["Created as part of a campaign series with consistent visual language"],
      },
      {
        src: "/MasinlocTourism/Dingalan - Poster Invitation (1).png",
        title: "Dingalan Invitation Poster",
        description: "Official invitation poster for a Dingalan-related event — designed for reach and attendance.",
        tools: ["Canva"],
        process: [
          "Designed to communicate event details clearly and invitingly",
          "Used warm tones and destination imagery to drive interest",
        ],
      },
    ],
  },

  {
    id: "junz-restaurant",
    title: "Junz Restaurant",
    client: "Junz Restaurant",
    tag: "Facebook Â· Food & Beverage",
    category: "Social Media Management",
    color: "oklch(0.70 0.14 55)",
    platform: "Facebook",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop"],
    logo: "/JunzRestaurant/logo.jpg",

    overview:
      "Junz Restaurant is a local food business that needed a social media presence to drive foot traffic and build a loyal customer base. Food businesses live and die by their online presence â€” a good-looking page can fill tables.",

    challenge:
      "The restaurant had no consistent social media strategy. Posts were random, visuals were inconsistent, and there was no system for promoting specials or new menu items. The page wasn't working as a marketing tool.",

    approach:
      "Food content is about making people hungry. I focused on high-quality visuals, appetite-driven copy, and a posting rhythm that kept the restaurant top of mind â€” especially around meal times and weekends.",

    workflow: [
      "Menu review â€” understood the offerings and identified hero items worth featuring",
      "Visual direction â€” established a warm, appetizing aesthetic for food photography",
      "Content calendar â€” planned posts around meal times, specials, and local events",
      "Template design â€” built Canva templates for menu features and promotions",
      "Caption writing â€” wrote copy that made the food sound as good as it looks",
      "Community management â€” responded to comments and messages",
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
    id: "psg-hits",
    title: "PSG Hits",
    client: "PSG Hits",
    tag: "Facebook · Music",
    category: "Social Media Management",
    color: "oklch(0.45 0.20 27)",
    platform: "Facebook · Instagram",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop", "CapCut"],
    logo: "/PSGHits/Logo.png?v=2",
    beforeImg: "/PSGHits/Before.jpg?v=2",
    overview: "PSG Hits is a clothing apparel brand. I managed their social media presence, built their brand identity from scratch, and created all visual assets — from social posts to physical merch mockups and print materials.",
    challenge: "The page had no visual consistency and no content system. Posts were random and didn't reflect the brand's energy or identity.",
    approach: "Built a content system around the brand's music identity — consistent visuals, engaging captions, and a posting rhythm that matched the audience.",
    workflow: [
      "Brand audit — reviewed existing content and identified gaps",
      "Visual direction — established a consistent aesthetic for music content",
      "Content calendar — planned posts around releases and events",
      "Template system — built reusable Canva templates",
      "Execution — designed graphics, wrote captions, published",
    ],
    what: [
      "Social media management",
      "Graphic design for posts and stories",
      "Content calendar and strategy",
      "Caption writing",
    ],
    result: "Consistent brand presence and growing engagement. The page started looking and feeling like a real music brand.",
    calendarImg: "/PSGHits/ContentCalendar.png?v=2",
    analyticsImg: "/PSGHits/Analytics.png?v=2",
    graphics: [
      {
        src: "/PSGHits/OverallBrandBoard.png?v=2",
        title: "Overall Brand Board",
        description: "Full brand overview — colors, typography, logo usage, and visual direction for PSG Hits.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Audited the existing brand assets to identify inconsistencies",
          "Defined a cohesive color palette and typography system",
          "Assembled a brand board to serve as the visual reference for all content",
        ],
      },
      {
        src: "/PSGHits/Brand-Kit-Vertical.png?v=2",
        title: "Brand Kit",
        description: "Detailed vertical brand kit documenting all brand elements — logo variations, color codes, fonts, and usage guidelines.",
        tools: ["Canva"],
        portrait: true,
        process: [
          "Documented all approved logo variations and clear space rules",
          "Defined primary and secondary color palettes with hex codes",
          "Set typography hierarchy for headings, body, and captions",
          "Compiled into a shareable brand kit for consistent content creation",
        ],
      },
      {
        src: "/PSGHits/Main-Banner.png?v=2",
        title: "Main Banner",
        description: "Hero banner for the PSG Hits Facebook page — sets the tone and brand identity at first glance.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Designed to immediately communicate the brand's music and entertainment identity",
          "Used brand colors and typography to create a strong first impression",
        ],
      },
      {
        src: "/PSGHits/Poster-Banner.png?v=2",
        title: "Poster Banner",
        description: "Promotional poster banner for events and announcements.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Designed for high visibility — bold type, strong contrast",
          "Built as a reusable template for future events",
        ],
      },
      {
        src: "/PSGHits/Poster-Banner2.png?v=2",
        title: "Poster Banner 2",
        description: "Second variation of the promotional poster banner — alternate layout for different content types.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Created as a variation to keep the feed visually dynamic",
          "Maintains brand consistency while offering layout variety",
        ],
      },
      {
        src: "/PSGHits/PSGHITS_SALE_BANNER.png?v=2",
        title: "Sale Banner",
        description: "Sale announcement banner — direct, high-contrast design built to stop the scroll.",
        tools: ["Canva"],
        process: [
          "Prioritized clarity — offer and brand name visible at thumbnail size",
          "Used urgency-driven layout to drive engagement",
        ],
      },
      {
        src: "/PSGHits/OnboardingPost.png?v=2",
        title: "Onboarding Post",
        description: "Welcome/onboarding post introducing the brand to new followers.",
        tools: ["Canva"],
        process: [
          "Designed to communicate brand identity and what followers can expect",
          "Kept copy concise and visual-forward",
        ],
      },
      {
        src: "/PSGHits/ClothingTag_Mockup.png?v=2",
        title: "Clothing Tag Mockup",
        description: "Branded clothing tag mockup for merch and product photography.",
        tools: ["Photoshop"],
        process: [
          "Applied brand logo and colors to a clothing tag template",
          "Used for social content showcasing merch",
        ],
      },
      {
        src: "/PSGHits/ClothTag_Mockup.png?v=2",
        title: "Cloth Tag Mockup",
        description: "Alternative cloth tag mockup — woven label style.",
        tools: ["Photoshop"],
        process: [
          "Created a woven-label style mockup for a premium merch feel",
        ],
      },
      {
        src: "/PSGHits/HangerMockup.png?v=2",
        title: "Hanger Mockup",
        description: "Clothing hanger mockup for merchandise presentation on social media.",
        tools: ["Photoshop"],
        process: [
          "Placed branded garment on hanger for a clean, retail-style presentation",
          "Used for product announcement posts",
        ],
      },
      {
        src: "/PSGHits/SaleTag_MockUp.png?v=2",
        title: "Sale Tag Mockup",
        description: "Physical sale tag mockup for merch promotions.",
        tools: ["Photoshop"],
        process: [
          "Designed a branded sale tag and applied it to a product mockup",
          "Used to make promotions feel tangible and premium",
        ],
      },
      {
        src: "/PSGHits/MirrorSticker.png?v=2",
        title: "Mirror Sticker",
        description: "Branded mirror sticker design — used for physical branding and social content.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Designed a circular sticker with the brand logo",
          "Applied to mirror mockup for lifestyle content",
        ],
      },
      {
        src: "/PSGHits/PosterMockup.png?v=2",
        title: "Poster Mockup",
        description: "Real-world poster mockup showing the brand's print presence.",
        tools: ["Photoshop"],
        process: [
          "Placed PSG Hits poster design into a real-world wall mockup",
          "Used to show the brand's physical print potential",
        ],
      },
      {
        src: "/PSGHits/3D-model.jpg?v=2",
        title: "3D Brand Model",
        description: "3D rendered brand visualization — adds depth and premium feel to brand presentation.",
        tools: ["Photoshop"],
        process: [
          "Created a 3D mockup of brand assets for a premium visual presentation",
          "Used for brand reveal and announcement content",
        ],
      },
    ],
    flipbookUrl: "https://online.visual-paradigm.com/share/book/untitled-2l2sihx7jr?p=1",
  },

  {
    id: "fast-snaking",
    title: "Fast Snaking Services",
    client: "Fast Snaking Services",
    tag: "Facebook · Local Service",
    category: "Social Media Management",
    color: "oklch(0.55 0.14 25)",
    platform: "Facebook",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop"],
    logo: "/FastToiletSnaking/logo.png",
    calendarImg: "/FastToiletSnaking/contentcalendar.png",
    analyticsImg: "/FastToiletSnaking/analytics.png",
    websiteUrl: "https://fastsnakingservices.vercel.app",
    overview: "A Philadelphia-based plumbing and drainage business that started from a single DM. The client reached out with nothing — no brand, no page, no online presence. I built everything from scratch: identity, website direction, content system, and ongoing social media management.",
    challenge: "Zero starting point. The client had a service but no way for customers to find him online. No logo, no page, no content — just a business idea that needed a digital presence.",
    approach: "Treated it like a full brand launch. Started with identity, built the Facebook page, created a content system around trust and local credibility, and pushed it live. Philadelphia locals needed to find him and trust him — every post served that goal.",
    workflow: [
      "Initial consult — understood the business, service area, and target customer",
      "Brand identity — created the logo, color system, and visual direction",
      "Page setup — built and optimized the Facebook business page from zero",
      "Content planning — mapped out service features, education, and trust content",
      "Template design — built reusable Canva templates for all post types",
      "Execution — published consistently and managed inquiries",
      "Reporting — weekly progress reports and performance tracking",
    ],
    what: [
      "Full brand identity from scratch",
      "Facebook page setup and management",
      "Graphic design for all post types",
      "Content strategy and calendar",
      "Community management",
      "Weekly reporting",
      "Vehicle magnet design for physical marketing",
    ],
    result: "A complete brand and online presence built from nothing. Philadelphia locals can now find, verify, and contact Fast Snaking Services directly through Facebook — and the vehicle magnet turns every job into a moving ad.",
    afterPoints: [
      { icon: "📞", text: "3–5 calls a week coming in from Philadelphia locals finding the page organically." },
      { icon: "📲", text: "Reach and impressions growing week over week — all organic, zero ad spend." },
      { icon: "📍", text: "Localized brand presence established in Philadelphia — community recognizes the name." },
      { icon: "✦", text: "Vehicle magnet printed and running — the service van is now a rolling ad across the city." },
    ],
    beforePoints: [
      { icon: "💬", text: "A client DM'd me wanting to start a plumbing business. No plan, no money, just drive." },
      { icon: "📭", text: "Zero brand. Zero logo. Zero social media. Zero budget. Literally nothing to work with." },
      { icon: "📍", text: "Based in Philadelphia — needed to reach local customers fast without paid ads." },
      { icon: "🔧", text: "My job: build everything from the ground up and make it look established from day one." },
    ],
    carouselSlides: [
      "/FastToiletSnaking/slide-1.png",
      "/FastToiletSnaking/slide-2.png",
      "/FastToiletSnaking/slide-3.png",
      "/FastToiletSnaking/slide-4.png",
      "/FastToiletSnaking/slide-5.png",
    ],
    pdfDocs: [
      { title: "Vehicle Magnet Spec", url: "/FastToiletSnaking/FastSnakingServices_9_Inch_Vehicle_Magnet.pdf" },
      { title: "Day 1 Work Progress", url: "/FastToiletSnaking/FastSnakingServices_Day1_WorkProgress_TestWeek%20(1).pdf" },
      { title: "Day 2 Work Progress", url: "/FastToiletSnaking/FastSnakingServices_Day2_WorkProgress_TestWeek.pdf" },
      { title: "Week 1 Report", url: "/FastToiletSnaking/FastSnakingServices_Week1_Report_0521-0528_2026.pdf" },
    ],
    graphics: [
      {
        src: "/FastToiletSnaking/OnboardingPost.png",
        title: "Onboarding Post",
        description: "Welcome post introducing Fast Snaking Services to new followers — establishes trust from day one.",
        tools: ["Canva"],
        process: [
          "Designed to communicate who they are and what service they offer at a glance",
          "Clean layout, professional tone — builds immediate credibility",
        ],
      },
      {
        src: "/FastToiletSnaking/WeExistPost.png",
        title: "We Exist Post",
        description: "Brand awareness post announcing the page's launch to the Philadelphia community.",
        tools: ["Canva"],
        process: [
          "Announced the business on social media for the first time",
          "Focused on reach — simple, clear, memorable",
        ],
      },
      {
        src: "/FastToiletSnaking/InformationPost.png",
        title: "Information Post",
        description: "Service information post — tells potential customers exactly what Fast Snaking offers.",
        tools: ["Canva"],
        process: [
          "Listed core services clearly to reduce friction for potential customers",
          "Designed for quick readability on mobile",
        ],
      },
      {
        src: "/FastToiletSnaking/educationPost.png",
        title: "Education Post",
        description: "Educational content building trust by teaching followers about plumbing issues.",
        tools: ["Canva"],
        process: [
          "Used educational content to position Fast Snaking as the local Philadelphia expert",
          "Value-first approach — give info, earn trust, get leads",
        ],
      },
      {
        src: "/FastToiletSnaking/educationPost2.png",
        title: "Education Post 2",
        description: "Second educational post — another helpful tip to keep the audience engaged.",
        tools: ["Canva"],
        process: ["Continued the education series to maintain consistent posting"],
      },
      {
        src: "/FastToiletSnaking/educationpost3.png",
        title: "Education Post 3",
        description: "Third in the education series — deepens credibility through consistent helpful content.",
        tools: ["Canva"],
        process: ["Maintained the series format for brand consistency and algorithmic favor"],
      },
      {
        src: "/FastToiletSnaking/diy_awarenesspost.png",
        title: "DIY Awareness Post",
        description: "Post warning followers about the risks of DIY plumbing — driving them toward professional help.",
        tools: ["Canva"],
        process: [
          "Addressed a common behavior (DIY fixes) to redirect leads toward the business",
          "Soft sell — helpful first, service pitch second",
        ],
      },
      {
        src: "/FastToiletSnaking/availabilityPost.png",
        title: "Availability Post",
        description: "Lets followers know when and how to reach Fast Snaking Services.",
        tools: ["Canva"],
        process: [
          "Reduced friction for inquiries by clearly stating availability",
          "Included contact info prominently",
        ],
      },
      {
        src: "/FastToiletSnaking/CalltoActionPost.png",
        title: "Call to Action Post",
        description: "Direct CTA post driving followers to contact the business.",
        tools: ["Canva"],
        process: [
          "Strong headline, clear CTA, brand colors",
          "Designed to convert scrollers into inquiries",
        ],
      },
      {
        src: "/FastToiletSnaking/calltoactionpost2.png",
        title: "Call to Action Post 2",
        description: "Second CTA variation — alternate layout for A/B testing engagement.",
        tools: ["Canva"],
        process: ["Created a variation to test which CTA format drives more responses"],
      },
      {
        src: "/FastToiletSnaking/calltoaction.png",
        title: "Call to Action Graphic",
        description: "Standalone CTA graphic used across multiple post formats.",
        tools: ["Canva"],
        process: ["Built as a reusable CTA element for consistency across the feed"],
      },
      {
        src: "/FastToiletSnaking/InvitationPost.png",
        title: "Invitation Post",
        description: "Invites the Philadelphia community to follow and engage with the page.",
        tools: ["Canva"],
        process: ["Designed to grow the follower base through a friendly community invite"],
      },
      {
        src: "/FastToiletSnaking/FastSnakingServices_VehicleMagnet.png",
        title: "Vehicle Magnet Design",
        description: "Branded vehicle magnet for physical marketing — turns the service vehicle into a rolling ad across Philadelphia.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Designed for print — high contrast, large text, easy to read at speed",
          "Included logo, service name, and contact number",
          "Exported print-ready at 9-inch spec for the magnet vendor",
        ],
      },
    ],
  },

  {
    id: "snappy-nomad",
    title: "The Snappy Nomad",
    client: "The Snappy Nomad",
    tag: "Instagram · Travel",
    category: "Social Media Management",
    color: "oklch(0.62 0.16 255)",
    platform: "Instagram · Facebook",
    duration: "Coming Soon",
    tools: ["Canva", "Photoshop", "CapCut"],
    overview: "A travel and lifestyle brand currently in pre-launch — building the content strategy, brand identity, and social media presence ahead of launch.",
    challenge: "Coming soon.",
    approach: "Coming soon.",
    workflow: ["Coming soon — details will be revealed at launch."],
    what: ["Social Media Management", "Content Strategy", "Brand Identity"],
    result: "Coming soon — follow the journey.",
  },
];
