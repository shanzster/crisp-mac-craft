import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Shanzster" },
      { name: "description", content: "All creative work — graphics, videos, content calendars, and campaign ads." },
    ],
  }),
});

/* ─── TYPES ─── */

type MediaItem = {
  id: string;
  title: string;
  client: string;
  bg: string;
  src?: string;
  type: "image" | "video";
  aspect: "square" | "portrait" | "landscape";
};

type Folder = {
  id: string;
  label: string;
  icon: string;
  color: string;
  tabColor: string;
  description: string;
  items: MediaItem[];
};

/* ─── DATA ─── */

const FOLDERS: Folder[] = [
  {
    id: "graphics",
    label: "Graphics",
    icon: "✦",
    color: "oklch(0.70 0.18 290)",
    tabColor: "oklch(0.63 0.19 290)",
    description: "Brand posts, story templates, promo graphics, highlight covers.",
    items: [
      { id: "g1", title: "Steal & Style — Brand Post",    client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))", type: "image", aspect: "portrait"  },
      { id: "g2", title: "Story Template",                client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.32 0.12 300), oklch(0.55 0.20 285))", type: "image", aspect: "portrait"  },
      { id: "g3", title: "Highlight Cover Set",           client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.45 0.18 270), oklch(0.65 0.14 300))", type: "image", aspect: "square"    },
      { id: "g4", title: "Promo Graphic",                 client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.60 0.22 285), oklch(0.40 0.20 270))", type: "image", aspect: "landscape" },
      { id: "g5", title: "Caption Card",                  client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.50 0.20 275), oklch(0.35 0.16 290))", type: "image", aspect: "square"    },
      { id: "g6", title: "Collection Launch Graphic",     client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))", type: "image", aspect: "portrait"  },
      { id: "g7", title: "Destination Post",              client: "Masinloc Tourism",bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))", type: "image", aspect: "square"    },
      { id: "g8", title: "Food Feature Post",             client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.65 0.16 55),  oklch(0.78 0.12 70))",  type: "image", aspect: "portrait"  },
      { id: "g9", title: "Product Showcase",              client: "CSA Print",       bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))", type: "image", aspect: "landscape" },
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
      { id: "v1", title: "Collection Launch Reel",   client: "Steal & Style",    bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))", type: "video", aspect: "portrait"  },
      { id: "v2", title: "Promotional Video",        client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))", type: "video", aspect: "landscape" },
      { id: "v3", title: "Vlog Edit",                client: "Steal & Style",    bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))", type: "video", aspect: "portrait"  },
      { id: "v4", title: "Motion Caption Overlay",   client: "Steal & Style",    bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))", type: "video", aspect: "square"    },
      { id: "v5", title: "Freeze Frame Reel",        client: "Steal & Style",    bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))", type: "video", aspect: "portrait"  },
      { id: "v6", title: "Restaurant Promo",         client: "Junz Restaurant",  bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))", type: "video", aspect: "landscape" },
    ],
  },
  {
    id: "calendars",
    label: "Content Calendars",
    icon: "◈",
    color: "oklch(0.72 0.14 240)",
    tabColor: "oklch(0.66 0.15 240)",
    description: "Monthly editorial calendars, posting schedules, campaign timelines.",
    items: [
      { id: "cal1", title: "Steal & Style — October 2024",    client: "Steal & Style",    bg: "linear-gradient(135deg, oklch(0.55 0.14 240), oklch(0.72 0.10 250))", type: "image", aspect: "landscape" },
      { id: "cal2", title: "Masinloc Tourism — Q4 2024",      client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))", type: "image", aspect: "landscape" },
      { id: "cal3", title: "Junz Restaurant — November 2024", client: "Junz Restaurant",  bg: "linear-gradient(135deg, oklch(0.65 0.14 55),  oklch(0.78 0.10 65))",  type: "image", aspect: "landscape" },
      { id: "cal4", title: "CSA Print — Campaign Brief",      client: "CSA Print",        bg: "linear-gradient(135deg, oklch(0.55 0.12 270), oklch(0.68 0.10 280))", type: "image", aspect: "landscape" },
      { id: "cal5", title: "Holiday Campaign Timeline",       client: "Steal & Style",    bg: "linear-gradient(135deg, oklch(0.50 0.16 240), oklch(0.65 0.12 255))", type: "image", aspect: "landscape" },
    ],
  },
  {
    id: "ads",
    label: "Campaign Ads",
    icon: "⬡",
    color: "oklch(0.62 0.20 255)",
    tabColor: "oklch(0.55 0.21 255)",
    description: "Meta ad creatives, story ads, carousel frames, A/B test variants.",
    items: [
      { id: "a1", title: "Meta Ad Creative",      client: "CSA Print",       bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))", type: "image", aspect: "square"    },
      { id: "a2", title: "Story Ad",              client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.45 0.22 250), oklch(0.62 0.16 265))", type: "image", aspect: "portrait"  },
      { id: "a3", title: "Carousel Ad Frame",     client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))", type: "image", aspect: "landscape" },
      { id: "a4", title: "A/B Test Variant",      client: "CSA Print",       bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))", type: "image", aspect: "square"    },
      { id: "a5", title: "Lookalike Audience Ad", client: "Steal & Style",   bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))", type: "image", aspect: "portrait"  },
      { id: "a6", title: "Retargeting Creative",  client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.42 0.18 255), oklch(0.58 0.14 262))", type: "image", aspect: "square"    },
    ],
  },
];

/* ─── FOLDER SVG — exact hero folder style ─── */

function FolderIcon({ color, tabColor, size = 72 }: { color: string; tabColor: string; size?: number }) {
  const h = Math.round(size * 0.8125);
  const tabH = Math.round(size * 0.09);
  const tabW = Math.round(size * 0.42);
  return (
    <div className="relative" style={{ width: size, height: h + tabH, paddingTop: tabH }}>
      {/* Tab */}
      <div className="absolute rounded-t-[6px]" style={{ top: 0, left: Math.round(size * 0.013), width: tabW, height: tabH, background: `linear-gradient(90deg, ${tabColor}, ${color})` }} />
      {/* Back */}
      <div className="absolute rounded-[10px]" style={{ top: tabH, left: 0, right: 0, bottom: 0, background: `linear-gradient(160deg, ${color}, ${tabColor})` }} />
      {/* Flap */}
      <div className="absolute rounded-[10px]" style={{
        top: tabH, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(160deg, oklch(0.78 0.12 232) 0%, oklch(0.68 0.15 242) 100%)",
        boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.25)",
      }} />
      {/* Shine */}
      <div className="absolute rounded-full" style={{ top: tabH + Math.round(h * 0.18), left: "10%", right: "10%", height: 1, background: "oklch(1 0 0 / 0.20)" }} />
    </div>
  );
}

/* ─── FOLDER CARD (2×2 grid) ─── */

function FolderCard({ folder, onClick }: { folder: Folder; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className="group relative flex flex-col items-center gap-3 focus:outline-none p-6 rounded-[20px] border border-border bg-card transition-all duration-300 hover:shadow-[0_12px_40px_-10px_oklch(0.2_0.02_240/0.18)] hover:-translate-y-1"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Open ${folder.label}`}
    >
      {/* Folder icon */}
      <div className="transition-transform duration-300 group-hover:-translate-y-1">
        <FolderIcon color={folder.color} tabColor={folder.tabColor} size={80} />
      </div>

      {/* Label */}
      <div className="text-center">
        <p className="text-[14px] font-semibold tracking-tight text-foreground">{folder.label}</p>
        <p className="mt-1 text-[11px] tracking-tight text-foreground/40 leading-snug max-w-[160px]">{folder.description}</p>
      </div>

      {/* Count badge */}
      <div
        className="rounded-full px-3 py-1 text-[10px] tracking-tight transition-colors duration-200"
        style={{
          background: hovered ? folder.color : "var(--secondary)",
          color: hovered ? "white" : "oklch(0.18 0.01 240 / 0.45)",
        }}
      >
        {folder.items.length} items
      </div>
    </button>
  );
}

/* ─── MEDIA CARD (inside open folder) ─── */

const ASPECT_CLASSES: Record<MediaItem["aspect"], string> = {
  square:    "aspect-square",
  portrait:  "aspect-[4/5]",
  landscape: "aspect-[16/9]",
};

function MediaCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  return (
    <button className="group relative focus:outline-none text-left" onClick={onClick} aria-label={`View ${item.title}`}>
      <div
        className={`relative w-full rounded-[10px] overflow-hidden border border-border/40 ${ASPECT_CLASSES[item.aspect]} transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_10px_30px_-8px_oklch(0.2_0.02_240/0.22)]`}
        style={{ background: item.bg }}
      >
        {item.src && item.type === "image" && <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />}
        {!item.src && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-[24px]">{item.type === "video" ? "▶" : "✦"}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/18 transition-colors duration-300 flex items-end p-2.5">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 text-white text-[9px] tracking-[0.16em] uppercase font-medium">View →</span>
        </div>
        {item.type === "video" && (
          <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-black/40 px-1.5 py-0.5">
            <span className="text-white text-[8px]">▶</span>
          </div>
        )}
      </div>
      <p className="mt-1.5 text-[10px] font-medium tracking-tight text-foreground/60 leading-snug">{item.title}</p>
      <p className="text-[9px] tracking-tight text-foreground/30 mt-0.5">{item.client}</p>
    </button>
  );
}

/* ─── LIGHTBOX ─── */

function Lightbox({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-6"
      style={{ background: "oklch(0.04 0.01 240 / 0.96)", backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)", animation: "lb-bg-in 0.2s ease both" }}
      onClick={onClose}
    >
      <div className="relative max-w-2xl w-full" style={{ animation: "modal-in 0.35s cubic-bezier(.2,.8,.2,1) both" }} onClick={(e) => e.stopPropagation()}>
        <div
          className={`relative w-full rounded-[16px] overflow-hidden border border-white/10 ${ASPECT_CLASSES[item.aspect]}`}
          style={{ background: item.bg, boxShadow: "0 32px 80px -16px oklch(0.04 0.01 240 / 0.8)" }}
        >
          {item.src && item.type === "image" && <img src={item.src} alt={item.title} className="w-full h-full object-cover" />}
          {item.src && item.type === "video" && <video src={item.src} controls className="w-full h-full" />}
          {!item.src && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="text-white/10 text-[48px]">{item.type === "video" ? "▶" : "✦"}</span>
              <p className="text-white/15 text-[11px] tracking-[0.2em] uppercase">add media</p>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-white font-semibold tracking-tight text-[15px]">{item.title}</p>
            <p className="text-white/40 text-[12px] tracking-tight mt-0.5">{item.client}</p>
          </div>
          <button onClick={onClose} className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white/50 hover:bg-white/20 hover:text-white transition-all text-[13px]" aria-label="Close">✕</button>
        </div>
      </div>
    </div>
  );
}

/* ─── OPEN FOLDER VIEW ─── */

function FolderView({ folder, onClose, onItemClick }: { folder: Folder; onClose: () => void; onItemClick: (i: MediaItem) => void }) {
  return (
    <div style={{ animation: "modal-in 0.3s cubic-bezier(.2,.8,.2,1) both" }}>
      {/* Folder header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FolderIcon color={folder.color} tabColor={folder.tabColor} size={36} />
          <div>
            <h2 className="text-[18px] font-bold tracking-tightest text-foreground">{folder.label}</h2>
            <p className="text-[11px] tracking-tight text-foreground/40">{folder.items.length} items</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-1.5 text-[11px] tracking-tight text-foreground/50 hover:text-foreground transition"
        >
          ← All folders
        </button>
      </div>

      {/* Grid */}
      <div style={{ columns: "3 160px", columnGap: "1rem" }}>
        {folder.items.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <MediaCard item={item} onClick={() => onItemClick(item)} />
          </div>
        ))}
      </div>

      {/* Add media note */}
      <div className="mt-10 rounded-[12px] border border-border bg-secondary/40 px-5 py-4 flex items-start gap-3">
        <span className="text-foreground/25 text-[16px] mt-0.5">📁</span>
        <p className="text-[11px] tracking-tight text-foreground/40 leading-relaxed">
          Add real files to <code className="bg-secondary px-1 py-0.5 rounded text-[10px]">public/gallery/{folder.id}/</code> and set the <code className="bg-secondary px-1 py-0.5 rounded text-[10px]">src</code> field in the <code className="bg-secondary px-1 py-0.5 rounded text-[10px]">FOLDERS</code> array.
        </p>
      </div>
    </div>
  );
}

/* ─── PAGE ─── */

function GalleryPage() {
  const [openFolder, setOpenFolder] = useState<Folder | null>(null);
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const navigate = useNavigate();

  function handleFolderClick(folder: Folder) {
    if (folder.id === "graphics") {
      navigate({ to: "/graphics" });
    } else if (folder.id === "videos") {
      navigate({ to: "/videos" });
    } else if (folder.id === "calendars") {
      navigate({ to: "/calendars" });
    } else if (folder.id === "ads") {
      navigate({ to: "/ads" });
    } else {
      setOpenFolder(folder);
    }
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}

      <main className="mx-auto max-w-[1100px] px-6 pt-10 sm:px-10">

        <Link to="/" className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10">
          ← Back
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3">Gallery</p>
          <h1 className="font-bold tracking-tightest text-foreground leading-[0.88]" style={{ fontSize: "clamp(44px, 6vw, 80px)" }}>
            All the work.<br />
            <span style={{ color: "oklch(0.18 0.01 240 / 0.22)" }}>Every piece.</span>
          </h1>
        </div>

        {/* 2×2 folder grid OR open folder view */}
        {!openFolder ? (
          <div className="grid grid-cols-2 gap-5">
            {FOLDERS.map((folder) => (
              <FolderCard key={folder.id} folder={folder} onClick={() => handleFolderClick(folder)} />
            ))}
          </div>
        ) : (
          <FolderView
            folder={openFolder}
            onClose={() => setOpenFolder(null)}
            onItemClick={(item) => setLightbox(item)}
          />
        )}

      </main>
    </div>
  );
}
