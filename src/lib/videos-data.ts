/* Videos gallery. `bg` is a gradient placeholder; `src` is a video file URL. */
export type Video = {
  id: string;
  title: string;
  client: string;
  category: string;
  bg: string;
  src?: string;
};

export const VIDEOS: Video[] = [
  { id: "v1", title: "Collection Launch Reel", client: "Oaklynwear", category: "Reel", bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))" },
  { id: "v2", title: "Promotional Video", client: "Masinloc Tourism", category: "Promo", bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))" },
  { id: "v3", title: "Editorial Reel", client: "Roselyn Atelier", category: "Reel", bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))" },
  { id: "v4", title: "Motion Caption Overlay", client: "Lirenne Wear", category: "Motion", bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))" },
  { id: "v5", title: "Freeze Frame Reel", client: "Bella Monza", category: "Reel", bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))" },
  { id: "v6", title: "Ad Creative Video", client: "Oaklynwear", category: "Ad", bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))" },
  { id: "v7", title: "Behind the Scenes", client: "Bella Monza", category: "BTS", bg: "linear-gradient(135deg, oklch(0.15 0.02 240), oklch(0.26 0.06 246))" },
  { id: "v8", title: "Product Showcase Video", client: "Lirenne Wear", category: "Showcase", bg: "linear-gradient(135deg, oklch(0.19 0.03 240), oklch(0.33 0.08 250))" },
];
