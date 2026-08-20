/* Declarative form schema — a small field vocabulary the generic AdminForm
   renders. Adding a new editable content type later = describe its fields here. */
export type Field =
  | { kind: "text"; key: string; label: string; textarea?: boolean; placeholder?: string; help?: string }
  | { kind: "select"; key: string; label: string; options: string[] }
  | { kind: "bool"; key: string; label: string; help?: string }
  | { kind: "image"; key: string; label: string; help?: string }
  | { kind: "imageList"; key: string; label: string; help?: string }
  | { kind: "video"; key: string; label: string; help?: string }
  | { kind: "stringList"; key: string; label: string; help?: string }
  | { kind: "object"; key: string; label: string; fields: Field[]; help?: string }
  | { kind: "objectList"; key: string; label: string; fields: Field[]; help?: string };

const IMG_HELP = "Click Upload to add an image from your device (Cloudinary), or paste an image path / URL.";
const VID_HELP = "Click Upload to add a video (Cloudinary), or paste a YouTube / Vimeo / .mp4 link.";

export const SOCIAL_FIELDS: Field[] = [
  { kind: "text", key: "name", label: "Name" },
  { kind: "text", key: "handle", label: "Handle", placeholder: "@handle or page name" },
  { kind: "select", key: "platform", label: "Platform", options: ["Instagram", "Facebook"] },
  { kind: "text", key: "category", label: "Category", placeholder: "Fashion Brand · USA" },
  { kind: "text", key: "bio", label: "Bio", textarea: true },
  { kind: "text", key: "link", label: "Link (Follow/View button)", placeholder: "https://instagram.com/…" },
  {
    kind: "text",
    key: "color",
    label: "Brand color",
    placeholder: "oklch(0.55 0.14 25)",
    help: "OKLCH color used for the card accent & badge.",
  },
  { kind: "select", key: "status", label: "Status", options: ["Active", "Coming Soon"] },
  { kind: "bool", key: "owned", label: "My own business (shows the ★ My Business badge)" },
  { kind: "image", key: "logo", label: "Logo (optional)", help: IMG_HELP },
  {
    kind: "stringList",
    key: "posts",
    label: "Instagram post links",
    help: "Paste post/reel links (⋯ → Copy link). Each fills a grid tile and opens live.",
  },
];

export const WORK_FIELDS: Field[] = [
  { kind: "text", key: "title", label: "Title" },
  { kind: "text", key: "client", label: "Client" },
  { kind: "text", key: "tag", label: "Tag", placeholder: "Instagram · TikTok · Fashion" },
  { kind: "text", key: "category", label: "Category", placeholder: "Full-Stack Growth" },
  { kind: "text", key: "color", label: "Brand color", placeholder: "oklch(0.20 0.02 240)" },
  { kind: "text", key: "platform", label: "Platform (optional)" },
  { kind: "text", key: "duration", label: "Duration (optional)", placeholder: "Ongoing" },
  { kind: "image", key: "logo", label: "Logo (optional)", help: IMG_HELP },

  { kind: "text", key: "overview", label: "Overview", textarea: true },
  { kind: "text", key: "challenge", label: "Challenge", textarea: true },
  { kind: "text", key: "approach", label: "Approach", textarea: true },
  { kind: "text", key: "result", label: "Result", textarea: true },

  { kind: "stringList", key: "workflow", label: "Workflow steps" },
  { kind: "stringList", key: "what", label: "What I did" },
  { kind: "stringList", key: "tools", label: "Tools" },

  { kind: "image", key: "beforeImg", label: "Before image (optional)", help: IMG_HELP },
  { kind: "image", key: "afterImg", label: "After image (optional)", help: IMG_HELP },
  { kind: "image", key: "calendarImg", label: "Calendar image (optional)", help: IMG_HELP },
  { kind: "image", key: "analyticsImg", label: "Analytics image (optional)", help: IMG_HELP },
  { kind: "text", key: "websiteUrl", label: "Website URL (optional)" },
  { kind: "text", key: "flipbookUrl", label: "Flipbook URL (optional)" },

  { kind: "stringList", key: "reels", label: "Reels — video URLs (optional)" },
  { kind: "imageList", key: "gallery", label: "Gallery images (optional)" },
  { kind: "imageList", key: "carouselSlides", label: "Carousel slides (optional)" },

  {
    kind: "objectList",
    key: "beforePoints",
    label: "Before points (optional)",
    fields: [
      { kind: "text", key: "icon", label: "Icon (emoji)" },
      { kind: "text", key: "text", label: "Text", textarea: true },
    ],
  },
  {
    kind: "objectList",
    key: "afterPoints",
    label: "After points (optional)",
    fields: [
      { kind: "text", key: "icon", label: "Icon (emoji)" },
      { kind: "text", key: "text", label: "Text", textarea: true },
    ],
  },
  {
    kind: "objectList",
    key: "analytics",
    label: "Analytics stats (optional)",
    fields: [
      { kind: "text", key: "label", label: "Label" },
      { kind: "text", key: "value", label: "Value" },
    ],
  },
  {
    kind: "objectList",
    key: "pdfDocs",
    label: "PDF documents (optional)",
    fields: [
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "url", label: "URL" },
    ],
  },
  {
    kind: "objectList",
    key: "graphics",
    label: "Graphics (optional)",
    fields: [
      { kind: "image", key: "src", label: "Image", help: IMG_HELP },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "description", label: "Description", textarea: true },
      { kind: "stringList", key: "process", label: "Process notes" },
      { kind: "stringList", key: "tools", label: "Tools" },
      { kind: "bool", key: "portrait", label: "Portrait (tall image)" },
    ],
  },
];

/* Ads, Graphics, Calendars share this shape (see media-data.ts). */
export const MEDIA_FIELDS: Field[] = [
  { kind: "text", key: "title", label: "Title" },
  { kind: "text", key: "client", label: "Client" },
  { kind: "text", key: "category", label: "Category" },
  { kind: "image", key: "src", label: "Image (optional)", help: IMG_HELP },
  {
    kind: "text",
    key: "bg",
    label: "Placeholder gradient",
    placeholder: "linear-gradient(135deg, oklch(…), oklch(…))",
    help: "Shown as the card background until an image is added.",
  },
];

export const VIDEO_FIELDS: Field[] = [
  { kind: "text", key: "title", label: "Title" },
  { kind: "text", key: "client", label: "Client" },
  { kind: "text", key: "category", label: "Category", placeholder: "Reel, Promo, Ad…" },
  { kind: "video", key: "src", label: "Video (optional)", help: VID_HELP },
  {
    kind: "text",
    key: "bg",
    label: "Placeholder gradient",
    placeholder: "linear-gradient(135deg, oklch(…), oklch(…))",
    help: "Shown until a video is added.",
  },
];

const SCREENSHOT_FIELDS: Field[] = [
  { kind: "image", key: "src", label: "Image", help: IMG_HELP },
  { kind: "text", key: "caption", label: "Caption" },
];

export const CLIENT_FIELDS: Field[] = [
  { kind: "text", key: "name", label: "Name" },
  { kind: "text", key: "handle", label: "Handle" },
  { kind: "text", key: "platform", label: "Platform", placeholder: "Instagram · TikTok" },
  { kind: "text", key: "category", label: "Category", placeholder: "Fashion Brand · USA" },
  { kind: "text", key: "group", label: "Group", placeholder: "Fashion / Strategy / Local Service / Personal" },
  { kind: "text", key: "description", label: "Description", textarea: true },
  { kind: "stringList", key: "services", label: "Services" },
  { kind: "text", key: "link", label: "Link" },
  { kind: "text", key: "color", label: "Brand color", placeholder: "oklch(0.20 0.02 240)" },
  { kind: "text", key: "status", label: "Status", placeholder: "Active / Coming Soon" },
  { kind: "image", key: "logo", label: "Logo (optional)", help: IMG_HELP },
  { kind: "image", key: "coverImg", label: "Cover image (optional)", help: IMG_HELP },
  { kind: "objectList", key: "screenshots", label: "Screenshots (optional)", fields: SCREENSHOT_FIELDS },
  { kind: "objectList", key: "interviews", label: "Interviews (optional)", fields: SCREENSHOT_FIELDS },
  { kind: "objectList", key: "meetings", label: "Meetings (optional)", fields: SCREENSHOT_FIELDS },
  { kind: "objectList", key: "replies", label: "Replies (optional)", fields: SCREENSHOT_FIELDS },
];

export const SERVICE_FIELDS: Field[] = [
  { kind: "text", key: "title", label: "Title" },
  { kind: "text", key: "file", label: "File label", placeholder: "social_media.app", help: "The little filename on the card title bar." },
  { kind: "text", key: "tagline", label: "Tagline" },
  { kind: "text", key: "description", label: "Description", textarea: true },
  { kind: "stringList", key: "includes", label: "What's included" },
  { kind: "stringList", key: "tools", label: "Tools" },
  { kind: "text", key: "bestFor", label: "Best for", textarea: true },
  { kind: "text", key: "color", label: "Accent color", placeholder: "oklch(0.62 0.16 255)" },
  {
    kind: "object",
    key: "sample",
    label: "Sample link (optional)",
    fields: [
      { kind: "text", key: "label", label: "Label", placeholder: "Sample work — novanoir.com" },
      { kind: "text", key: "url", label: "URL" },
    ],
  },
];

export const GALLERY_FIELDS: Field[] = [
  { kind: "text", key: "label", label: "Folder name" },
  { kind: "text", key: "icon", label: "Icon (symbol)", placeholder: "◎ ✦ ▶ ⬡" },
  { kind: "text", key: "description", label: "Description", textarea: true },
  { kind: "text", key: "color", label: "Folder color", placeholder: "oklch(…)" },
  { kind: "text", key: "tabColor", label: "Tab color", placeholder: "oklch(…)" },
  {
    kind: "objectList",
    key: "items",
    label: "Media items",
    fields: [
      { kind: "text", key: "id", label: "ID" },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "client", label: "Client" },
      { kind: "image", key: "src", label: "Image (optional)", help: IMG_HELP },
      { kind: "text", key: "bg", label: "Placeholder color/gradient", placeholder: "oklch(…) or linear-gradient(…)" },
      { kind: "select", key: "type", label: "Type", options: ["image", "video"] },
      { kind: "select", key: "aspect", label: "Aspect", options: ["square", "portrait", "landscape"] },
    ],
  },
];

/* ─── Page singletons ─── */

export const ABOUT_FIELDS: Field[] = [
  {
    kind: "object",
    key: "videoIntro",
    label: "Video introduction",
    fields: [
      { kind: "bool", key: "enabled", label: "Show the video-intro toggle on the About page" },
      { kind: "text", key: "buttonLabel", label: "Toggle button label" },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "caption", label: "Caption" },
      { kind: "video", key: "url", label: "Video", help: VID_HELP },
    ],
  },
  { kind: "stringList", key: "story", label: "Story paragraphs", help: "Shown in the terminal ‘cat my-story.txt’ block." },
  {
    kind: "objectList",
    key: "credentials",
    label: "Credentials",
    fields: [
      { kind: "text", key: "type", label: "Section title", placeholder: "Experience / Skills" },
      { kind: "text", key: "icon", label: "Icon (symbol)" },
      {
        kind: "objectList",
        key: "items",
        label: "Items",
        fields: [
          { kind: "text", key: "title", label: "Title" },
          { kind: "text", key: "sub", label: "Subtitle" },
          { kind: "text", key: "detail", label: "Detail", textarea: true },
        ],
      },
    ],
  },
  {
    kind: "objectList",
    key: "journey",
    label: "Journey timeline",
    fields: [
      { kind: "text", key: "year", label: "Year" },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "detail", label: "Detail", textarea: true },
      { kind: "text", key: "color", label: "Color", placeholder: "oklch(…)" },
      { kind: "bool", key: "cta", label: "Show ‘Let's talk’ link" },
    ],
  },
  {
    kind: "objectList",
    key: "beliefs",
    label: "Beliefs",
    fields: [
      { kind: "text", key: "icon", label: "Icon (symbol)" },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "detail", label: "Detail", textarea: true },
    ],
  },
  {
    kind: "objectList",
    key: "tools",
    label: "Tools stack",
    fields: [
      { kind: "text", key: "name", label: "Name" },
      { kind: "text", key: "category", label: "Category" },
      { kind: "text", key: "color", label: "Color", placeholder: "oklch(…)" },
    ],
  },
  {
    kind: "objectList",
    key: "devices",
    label: "Devices / setup",
    fields: [
      { kind: "text", key: "name", label: "Name" },
      { kind: "text", key: "role", label: "Role" },
      { kind: "image", key: "image", label: "Image", help: IMG_HELP },
      { kind: "stringList", key: "specs", label: "Specs" },
      { kind: "text", key: "color", label: "Background color", placeholder: "oklch(…)" },
    ],
  },
];

const STAT_VL_FIELDS: Field[] = [
  { kind: "text", key: "v", label: "Value" },
  { kind: "text", key: "l", label: "Label" },
];

const IMG_LABEL_FIELDS: Field[] = [
  { kind: "image", key: "src", label: "Image", help: IMG_HELP },
  { kind: "text", key: "label", label: "Label" },
];

export const CLIENTS_META_FIELDS: Field[] = [
  { kind: "objectList", key: "stats", label: "Stat tiles", fields: STAT_VL_FIELDS },
  {
    kind: "objectList",
    key: "filters",
    label: "Filter chips",
    fields: [
      { kind: "text", key: "label", label: "Label" },
      { kind: "text", key: "dot", label: "Dot color", placeholder: "oklch(…)" },
    ],
  },
];

export const SKIM_FIELDS: Field[] = [
  { kind: "objectList", key: "stats", label: "Stats", fields: STAT_VL_FIELDS },
  {
    kind: "objectList",
    key: "clients",
    label: "Clients",
    fields: [
      { kind: "text", key: "name", label: "Name" },
      { kind: "text", key: "tag", label: "Tag" },
      { kind: "text", key: "result", label: "Result" },
      { kind: "text", key: "to", label: "Link (case study path)", placeholder: "/work/oaklynwear" },
      { kind: "text", key: "color", label: "Color", placeholder: "oklch(…)" },
      { kind: "image", key: "logo", label: "Logo (optional)", help: IMG_HELP },
      { kind: "text", key: "overview", label: "Overview", textarea: true },
      { kind: "objectList", key: "graphics", label: "Graphics (optional)", fields: IMG_LABEL_FIELDS },
    ],
  },
  { kind: "objectList", key: "visuals", label: "Visuals", fields: IMG_LABEL_FIELDS },
  { kind: "objectList", key: "analytics", label: "Analytics", fields: IMG_LABEL_FIELDS },
  { kind: "objectList", key: "resultTiles", label: "Result tiles", fields: STAT_VL_FIELDS },
  {
    kind: "objectList",
    key: "services",
    label: "Services",
    fields: [
      { kind: "text", key: "t", label: "Title" },
      { kind: "text", key: "d", label: "Description" },
    ],
  },
  {
    kind: "objectList",
    key: "socials",
    label: "Socials",
    fields: [
      { kind: "text", key: "h", label: "Handle" },
      { kind: "text", key: "link", label: "Link" },
      { kind: "text", key: "color", label: "Color", placeholder: "oklch(…)" },
    ],
  },
  {
    kind: "objectList",
    key: "contactActions",
    label: "Contact actions",
    fields: [
      { kind: "text", key: "label", label: "Label" },
      { kind: "text", key: "sub", label: "Subtitle" },
      { kind: "text", key: "href", label: "URL" },
    ],
  },
];

export const HOME_FIELDS: Field[] = [
  {
    kind: "image",
    key: "profileImage",
    label: "Profile photo — shows on the home About card & the About page",
    help: IMG_HELP,
  },
  {
    kind: "objectList",
    key: "testimonials",
    label: "Testimonials",
    fields: [
      { kind: "text", key: "quote", label: "Quote", textarea: true },
      { kind: "text", key: "name", label: "Name" },
      { kind: "text", key: "brand", label: "Brand" },
      { kind: "text", key: "platform", label: "Platform", placeholder: "Facebook / Instagram" },
      { kind: "text", key: "initials", label: "Initials", placeholder: "ME" },
      { kind: "text", key: "color", label: "Color", placeholder: "oklch(…)" },
    ],
  },
  {
    kind: "objectList",
    key: "faqs",
    label: "FAQ",
    fields: [
      { kind: "text", key: "q", label: "Question" },
      { kind: "text", key: "a", label: "Answer", textarea: true },
    ],
  },
  {
    kind: "objectList",
    key: "services",
    label: "Services (home preview cards)",
    fields: [
      { kind: "text", key: "k", label: "Number", placeholder: "01" },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "file", label: "File label", placeholder: "social_media.app" },
      { kind: "text", key: "tagline", label: "Tagline" },
      { kind: "text", key: "description", label: "Description", textarea: true },
      { kind: "stringList", key: "includes", label: "Includes" },
      { kind: "stringList", key: "tools", label: "Tools" },
      { kind: "text", key: "bestFor", label: "Best for", textarea: true },
    ],
  },
  {
    kind: "objectList",
    key: "process",
    label: "Process steps (How I Work)",
    fields: [
      { kind: "text", key: "n", label: "Number", placeholder: "01" },
      { kind: "text", key: "file", label: "File label", placeholder: "discovery.md" },
      { kind: "text", key: "title", label: "Title" },
      { kind: "text", key: "desc", label: "Description", textarea: true },
      { kind: "stringList", key: "details", label: "Details" },
    ],
  },
  {
    kind: "objectList",
    key: "posts",
    label: "Latest Work grid",
    fields: [
      { kind: "text", key: "id", label: "ID" },
      { kind: "image", key: "image", label: "Image", help: IMG_HELP },
      { kind: "text", key: "alt", label: "Alt text" },
    ],
  },
  {
    kind: "objectList",
    key: "tools",
    label: "Toolkit",
    help: "Icons are matched to the tool name in code; keep the name spelled the same to keep its icon.",
    fields: [
      { kind: "text", key: "name", label: "Name" },
      { kind: "text", key: "category", label: "Category" },
      { kind: "text", key: "group", label: "Group", placeholder: "Creative / Marketing / AI / …" },
      { kind: "text", key: "how", label: "How I use it", textarea: true },
      { kind: "stringList", key: "usedFor", label: "Used for" },
    ],
  },
  {
    kind: "object",
    key: "site",
    label: "Hero, contact & footer text",
    fields: [
      { kind: "text", key: "heroBadge", label: "Hero badge line" },
      { kind: "text", key: "heroHeadlineTop", label: "Hero headline (line 1)" },
      { kind: "text", key: "heroHeadlineAccent", label: "Hero headline (line 2, muted)" },
      {
        kind: "objectList",
        key: "heroStats",
        label: "Hero stats strip",
        fields: [
          { kind: "text", key: "value", label: "Value" },
          { kind: "text", key: "label", label: "Label" },
        ],
      },
      {
        kind: "objectList",
        key: "aboutPills",
        label: "About-card stat pills",
        fields: [
          { kind: "text", key: "value", label: "Value" },
          { kind: "text", key: "label", label: "Label" },
        ],
      },
      { kind: "stringList", key: "ticker", label: "Hero ticker items" },
      { kind: "text", key: "weeklyTitle", label: "Weekly note title" },
      {
        kind: "objectList",
        key: "weeklyItems",
        label: "Weekly note items",
        fields: [
          { kind: "text", key: "text", label: "Text" },
          { kind: "bool", key: "done", label: "Done (checked)" },
        ],
      },
      { kind: "text", key: "weeklyNote", label: "Weekly note footer line" },
      { kind: "text", key: "contactEmail", label: "Contact email" },
      { kind: "text", key: "contactHeadlineTop", label: "Contact headline (line 1)" },
      { kind: "text", key: "contactHeadlineAccent", label: "Contact headline (line 2)" },
      { kind: "text", key: "contactBlurb", label: "Contact blurb", textarea: true },
      { kind: "text", key: "availabilityTitle", label: "Availability title" },
      { kind: "text", key: "availabilityBody", label: "Availability body", textarea: true },
      {
        kind: "objectList",
        key: "socials",
        label: "Socials list",
        fields: [
          { kind: "text", key: "label", label: "Label" },
          { kind: "text", key: "href", label: "URL" },
          { kind: "text", key: "handle", label: "Handle / display" },
        ],
      },
      { kind: "text", key: "locationCity", label: "Location city" },
      { kind: "text", key: "locationNote", label: "Location note" },
      { kind: "text", key: "footerBrand", label: "Footer brand" },
      { kind: "text", key: "footerBlurb", label: "Footer blurb", textarea: true },
      {
        kind: "objectList",
        key: "footerConnect",
        label: "Footer connect links",
        fields: [
          { kind: "text", key: "label", label: "Label" },
          { kind: "text", key: "href", label: "URL" },
        ],
      },
      { kind: "text", key: "footerCopyright", label: "Footer copyright" },
      { kind: "text", key: "footerTagline", label: "Footer tagline" },
    ],
  },
];
