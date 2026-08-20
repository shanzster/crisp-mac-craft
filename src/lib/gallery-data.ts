/* Gallery folders — each folder holds media items. Stored as a CMS collection
   (one document per folder). */

export type MediaItem = {
  id: string;
  title: string;
  client: string;
  bg: string;
  src?: string;
  type: "image" | "video";
  aspect: "square" | "portrait" | "landscape";
};

export type Folder = {
  id: string;
  label: string;
  icon: string;
  color: string;
  tabColor: string;
  description: string;
  items: MediaItem[];
};

export const FOLDERS: Folder[] = [
  {
    id: "socials",
    label: "Socials",
    icon: "◎",
    color: "oklch(0.62 0.20 350)",
    tabColor: "oklch(0.55 0.21 350)",
    description: "Live-style previews of every store & page I manage on Instagram and Facebook.",
    items: [
      { id: "so1", title: "Oaklynwear", client: "@oaklynwear", bg: "oklch(0.30 0.04 250)", type: "image", aspect: "square" },
      { id: "so2", title: "Roselyn Atelier", client: "@roselynamatelier", bg: "oklch(0.55 0.10 12)", type: "image", aspect: "square" },
      { id: "so3", title: "Lirenne Wear", client: "@lirennewear", bg: "oklch(0.42 0.12 262)", type: "image", aspect: "square" },
      { id: "so4", title: "Bella Monza", client: "@bellamonza", bg: "oklch(0.48 0.16 350)", type: "image", aspect: "square" },
      { id: "so5", title: "Nova Noir", client: "@novanoir.us", bg: "oklch(0.28 0.03 285)", type: "image", aspect: "square" },
      { id: "so6", title: "StealandStyle", client: "@stealandstyle", bg: "oklch(0.50 0.16 320)", type: "image", aspect: "square" },
      { id: "so7", title: "The Snappy Nomad", client: "@thesnappynomad", bg: "oklch(0.62 0.16 255)", type: "image", aspect: "square" },
      { id: "so8", title: "Masinloc Tourism", client: "Facebook", bg: "oklch(0.58 0.14 200)", type: "image", aspect: "square" },
      { id: "so9", title: "Fast Snaking", client: "Facebook", bg: "oklch(0.55 0.14 25)", type: "image", aspect: "square" },
    ],
  },
  {
    id: "graphics",
    label: "Graphics",
    icon: "✦",
    color: "oklch(0.70 0.18 290)",
    tabColor: "oklch(0.63 0.19 290)",
    description: "Brand posts, story templates, promo graphics, highlight covers.",
    items: [
      { id: "g1", title: "Dingalan Event Invitation", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))", src: "/Graphics/Dingalan - Poster Invitation (1).png", type: "image", aspect: "portrait" },
      { id: "g2", title: "Event Poster 1", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))", src: "/Graphics/Poster-1.png", type: "image", aspect: "portrait" },
      { id: "g3", title: "Event Poster 2", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))", src: "/Graphics/Poster-2.png", type: "image", aspect: "portrait" },
      { id: "g4", title: "Event Invitation Post", client: "Fast Snaking Services", bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))", src: "/Graphics/InvitationPost.png", type: "image", aspect: "square" },
      { id: "g5", title: "Onboarding Post", client: "Fast Snaking Services", bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))", src: "/Graphics/OnboardingPost.png", type: "image", aspect: "portrait" },
      { id: "g6", title: "Slide Design 3", client: "Fast Snaking Services", bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))", src: "/Graphics/slide-3.png", type: "image", aspect: "landscape" },
      { id: "g7", title: "Slide Design 5", client: "Fast Snaking Services", bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))", src: "/Graphics/slide-5.png", type: "image", aspect: "landscape" },
      { id: "g8", title: "Oaklynwear Ad Creative", client: "Oaklynwear", bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))", type: "image", aspect: "square" },
      { id: "g9", title: "Roselyn Atelier Editorial Post", client: "Roselyn Atelier", bg: "linear-gradient(135deg, oklch(0.55 0.08 10),  oklch(0.70 0.10 20))", type: "image", aspect: "portrait" },
      { id: "g10", title: "Lirenne Wear Collection Cover", client: "Lirenne Wear", bg: "linear-gradient(135deg, oklch(0.38 0.10 260), oklch(0.55 0.14 270))", type: "image", aspect: "square" },
      { id: "g11", title: "Bella Monza Drop Announcement", client: "Bella Monza", bg: "linear-gradient(135deg, oklch(0.45 0.16 350), oklch(0.62 0.14 340))", type: "image", aspect: "portrait" },
    ],
  },
  {
    id: "videos",
    label: "Videos & Reels",
    icon: "▶",
    color: "oklch(0.28 0.04 240)",
    tabColor: "oklch(0.22 0.04 240)",
    description: "Reels, vlogs, promo videos, motion captions, collection launches.",
    items: [
      { id: "v1", title: "Collection Launch Reel", client: "Oaklynwear", bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))", type: "video", aspect: "portrait" },
      { id: "v2", title: "Promotional Video", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))", type: "video", aspect: "landscape" },
      { id: "v3", title: "Editorial Reel", client: "Roselyn Atelier", bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))", type: "video", aspect: "portrait" },
      { id: "v4", title: "Motion Caption Overlay", client: "Lirenne Wear", bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))", type: "video", aspect: "square" },
      { id: "v5", title: "Freeze Frame Reel", client: "Bella Monza", bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))", type: "video", aspect: "portrait" },
      { id: "v6", title: "Ad Creative Video", client: "Oaklynwear", bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))", type: "video", aspect: "landscape" },
    ],
  },
  {
    id: "ads",
    label: "Campaign Analytics",
    icon: "⬡",
    color: "oklch(0.62 0.20 255)",
    tabColor: "oklch(0.55 0.21 255)",
    description: "Analytics reports, content calendars, campaign performance data.",
    items: [
      { id: "a1", title: "Fast Snaking Analytics", client: "Fast Snaking Services", bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))", src: "/Campaigns/fastsanking_analytics.png", type: "image", aspect: "landscape" },
      { id: "a2", title: "Fast Snaking Calendar", client: "Fast Snaking Services", bg: "linear-gradient(135deg, oklch(0.45 0.22 250), oklch(0.62 0.16 265))", src: "/Campaigns/fastsanking_contentcalendar.png", type: "image", aspect: "landscape" },
      { id: "a3", title: "Oaklynwear Meta Campaign", client: "Oaklynwear", bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))", type: "image", aspect: "landscape" },
      { id: "a4", title: "Oaklynwear Google Ads", client: "Oaklynwear", bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))", type: "image", aspect: "landscape" },
      { id: "a5", title: "Roselyn Atelier Campaigns", client: "Roselyn Atelier", bg: "linear-gradient(135deg, oklch(0.55 0.08 10),  oklch(0.70 0.10 20))", type: "image", aspect: "landscape" },
      { id: "a6", title: "Lirenne Wear Google Ads", client: "Lirenne Wear", bg: "linear-gradient(135deg, oklch(0.38 0.10 260), oklch(0.55 0.14 270))", type: "image", aspect: "landscape" },
      { id: "a7", title: "Bella Monza Ad Performance", client: "Bella Monza", bg: "linear-gradient(135deg, oklch(0.45 0.16 350), oklch(0.62 0.14 340))", type: "image", aspect: "landscape" },
    ],
  },
];
