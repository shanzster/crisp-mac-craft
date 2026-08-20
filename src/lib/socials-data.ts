export type Social = {
  id: string;
  name: string;
  handle: string;
  platform: "Instagram" | "Facebook";
  category: string;
  bio: string;
  link: string;
  color: string;
  status: "Active" | "Coming Soon";
  /* When true, this account is the user's own business (not a client). */
  owned?: boolean;
  logo?: string;
  /* Paste post / reel links here (copy-link from Instagram). Each fills a tile
     in the 3×3 grid and opens as a live official embed on click. e.g.
     "https://www.instagram.com/p/XXXXXXXXXXX/" */
  posts?: string[];
};

/* Seed defaults — the CMS pushes these into Firestore on first "Seed" and the
   public page falls back to them until the database has content. */
export const SOCIALS: Social[] = [
  {
    id: "oaklynwear",
    name: "Oaklynwear",
    handle: "@oaklynwear",
    platform: "Instagram",
    category: "Fashion Brand · USA",
    bio: "US fashion brand. Full-stack managed — Google Ads, Meta Ads, content & branding.",
    link: "https://instagram.com/oaklynwear",
    color: "oklch(0.30 0.04 250)",
    status: "Active",
    posts: [],
  },
  {
    id: "roselyn-atelier",
    name: "Roselyn Atelier",
    handle: "@roselynamatelier",
    platform: "Instagram",
    category: "Fashion Atelier · UK",
    bio: "UK atelier with an editorial look. Paid + organic run as one premium system.",
    link: "https://instagram.com/roselynamatelier",
    color: "oklch(0.55 0.10 12)",
    status: "Active",
    posts: [],
  },
  {
    id: "lirenne-wear",
    name: "Lirenne Wear",
    handle: "@lirennewear",
    platform: "Instagram",
    category: "Fashion Label · USA",
    bio: "US label built from the ground up — identity, content system, and ad campaigns.",
    link: "https://instagram.com/lirennewear",
    color: "oklch(0.42 0.12 262)",
    status: "Active",
    posts: [],
  },
  {
    id: "bella-monza",
    name: "Bella Monza",
    handle: "@bellamonza",
    platform: "Instagram",
    category: "Fashion Store",
    bio: "Fast creative cycles held together by one consistent identity across every drop.",
    link: "https://instagram.com/bellamonza",
    color: "oklch(0.48 0.16 350)",
    status: "Active",
    posts: [],
  },
  {
    id: "novanoir",
    name: "Nova Noir",
    handle: "@novanoir.us",
    platform: "Instagram",
    category: "Fashion Brand · USA",
    bio: "Dark, modern US fashion brand. Full stack + Shopify store (novanoir.com).",
    link: "https://instagram.com/novanoir.us",
    color: "oklch(0.28 0.03 285)",
    status: "Active",
    posts: [],
  },
  {
    id: "stealandstyle",
    name: "StealandStyle",
    handle: "@stealandstyle",
    platform: "Instagram",
    category: "Fashion Brand",
    bio: "Style-inspiration feed — content design, short-form video, and community.",
    link: "https://instagram.com/stealandstyle",
    color: "oklch(0.50 0.16 320)",
    status: "Active",
    posts: [],
  },
  {
    id: "snappy-nomad",
    name: "The Snappy Nomad",
    handle: "@thesnappynomad",
    platform: "Instagram",
    category: "Travel Camera · Personal",
    bio: "My own travel camera brand — branding, positioning, and launch. In pre-launch.",
    link: "https://instagram.com/thesnappynomad",
    color: "oklch(0.62 0.16 255)",
    status: "Coming Soon",
    owned: true,
    posts: [],
  },
  {
    id: "masinloc-tourism",
    name: "Masinloc Tourism Office",
    handle: "Masinloc Tourism Office",
    platform: "Facebook",
    category: "Government · Tourism",
    bio: "Official tourism page — creative strategy, campaigns, and destination content.",
    link: "https://facebook.com/masinloctourismoffice",
    color: "oklch(0.58 0.14 200)",
    status: "Active",
    logo: "/MasinlocTourism/logo.jpg",
  },
  {
    id: "fast-snaking",
    name: "Fast Snaking Services",
    handle: "Fast Snaking Services",
    platform: "Facebook",
    category: "Local Service · USA",
    bio: "Philadelphia plumbing brand built from zero — identity, page, and management.",
    link: "https://fastsnakingservices.vercel.app",
    color: "oklch(0.55 0.14 25)",
    status: "Active",
    logo: "/FastToiletSnaking/logo.png",
  },
];
