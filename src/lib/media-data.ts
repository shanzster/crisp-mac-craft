/* Shared shape for the image-gallery pages: Ads, Graphics, Calendars.
   `bg` is a CSS gradient shown until `src` (an image) is provided. */
export type Media = {
  id: string;
  title: string;
  client: string;
  category: string;
  bg: string;
  src?: string;
};

export const ADS: Media[] = [
  { id: "a1", title: "Fast Snaking Analytics", client: "Fast Snaking Services", category: "Analytics", bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))", src: "/Campaigns/fastsanking_analytics.png" },
  { id: "a2", title: "Fast Snaking Calendar", client: "Fast Snaking Services", category: "Calendar", bg: "linear-gradient(135deg, oklch(0.45 0.22 250), oklch(0.62 0.16 265))", src: "/Campaigns/fastsanking_contentcalendar.png" },
  { id: "a3", title: "Oaklynwear Meta Campaign", client: "Oaklynwear", category: "Meta Ads", bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))" },
  { id: "a4", title: "Oaklynwear Google Ads", client: "Oaklynwear", category: "Google Ads", bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))" },
  { id: "a5", title: "Roselyn Atelier Campaigns", client: "Roselyn Atelier", category: "Meta Ads", bg: "linear-gradient(135deg, oklch(0.55 0.08 10),  oklch(0.70 0.10 20))" },
  { id: "a6", title: "Lirenne Wear Google Ads", client: "Lirenne Wear", category: "Google Ads", bg: "linear-gradient(135deg, oklch(0.38 0.10 260), oklch(0.55 0.14 270))" },
  { id: "a7", title: "Bella Monza Ad Performance", client: "Bella Monza", category: "Analytics", bg: "linear-gradient(135deg, oklch(0.45 0.16 350), oklch(0.62 0.14 340))" },
];

export const GRAPHICS: Media[] = [
  { id: "g1", title: "Dingalan Event Invitation", client: "Masinloc Tourism", category: "Event", bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))", src: "/Graphics/Dingalan - Poster Invitation (1).png" },
  { id: "g2", title: "Event Poster 1", client: "Masinloc Tourism", category: "Event", bg: "linear-gradient(135deg, oklch(0.45 0.16 240), oklch(0.62 0.12 250))", src: "/Graphics/Poster-1.png" },
  { id: "g3", title: "Event Poster 2", client: "Masinloc Tourism", category: "Event", bg: "linear-gradient(135deg, oklch(0.70 0.14 60),  oklch(0.82 0.10 75))", src: "/Graphics/Poster-2.png" },
  { id: "g4", title: "Event Invitation Post", client: "Fast Snaking Services", category: "Event", bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))", src: "/Graphics/InvitationPost.png" },
  { id: "g5", title: "Onboarding Post", client: "Fast Snaking Services", category: "Social Post", bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))", src: "/Graphics/OnboardingPost.png" },
  { id: "g6", title: "Slide Design 3", client: "Fast Snaking Services", category: "Presentation", bg: "linear-gradient(135deg, oklch(0.42 0.18 255), oklch(0.58 0.14 262))", src: "/Graphics/slide-3.png" },
  { id: "g7", title: "Slide Design 5", client: "Fast Snaking Services", category: "Presentation", bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))", src: "/Graphics/slide-5.png" },
  { id: "g8", title: "Oaklynwear Ad Creative", client: "Oaklynwear", category: "Ad Creative", bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))" },
  { id: "g9", title: "Roselyn Atelier Editorial Post", client: "Roselyn Atelier", category: "Social Post", bg: "linear-gradient(135deg, oklch(0.55 0.08 10),  oklch(0.70 0.10 20))" },
  { id: "g10", title: "Lirenne Wear Collection Cover", client: "Lirenne Wear", category: "Cover Design", bg: "linear-gradient(135deg, oklch(0.38 0.10 260), oklch(0.55 0.14 270))" },
  { id: "g11", title: "Bella Monza Drop Announcement", client: "Bella Monza", category: "Social Post", bg: "linear-gradient(135deg, oklch(0.45 0.16 350), oklch(0.62 0.14 340))" },
];

export const CALENDARS: Media[] = [
  { id: "cal1", title: "Oaklynwear — Monthly Content", client: "Oaklynwear", category: "Monthly", bg: "linear-gradient(135deg, oklch(0.55 0.14 240), oklch(0.72 0.10 250))" },
  { id: "cal2", title: "Masinloc Tourism — Quarterly", client: "Masinloc Tourism", category: "Quarterly", bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))" },
  { id: "cal3", title: "Roselyn Atelier — Editorial", client: "Roselyn Atelier", category: "Monthly", bg: "linear-gradient(135deg, oklch(0.55 0.08 10),  oklch(0.70 0.10 20))" },
  { id: "cal4", title: "Lirenne Wear — Campaign Brief", client: "Lirenne Wear", category: "Campaign", bg: "linear-gradient(135deg, oklch(0.55 0.12 270), oklch(0.68 0.10 280))" },
  { id: "cal5", title: "Bella Monza — Drop Timeline", client: "Bella Monza", category: "Campaign", bg: "linear-gradient(135deg, oklch(0.50 0.16 240), oklch(0.65 0.12 255))" },
  { id: "cal6", title: "Summer Content Strategy", client: "Masinloc Tourism", category: "Seasonal", bg: "linear-gradient(135deg, oklch(0.58 0.14 210), oklch(0.72 0.10 220))" },
];
