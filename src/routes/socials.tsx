import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Reveal } from "@/hooks/useScrollReveal";
import { type Social } from "@/lib/socials-data";
import { useSocials } from "@/lib/content";
import { EditableText, EditableImage, useEdit } from "@/lib/edit-mode";

export const Route = createFileRoute("/socials")({
  component: SocialsPage,
  head: () => ({
    meta: [
      { title: "Socials — Shanzster" },
      { name: "description", content: "The stores and social accounts I manage — live Instagram post embeds." },
    ],
  }),
});

/* Parse an Instagram post/reel/tv URL (or bare shortcode) → { type, code }. */
function parsePost(input: string): { type: string; code: string } | null {
  const m = input.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
  if (m) return { type: m[1], code: m[2] };
  const code = input.trim().replace(/\/+$/, "");
  if (/^[A-Za-z0-9_-]+$/.test(code)) return { type: "p", code };
  return null;
}

const embedUrl = (p: { type: string; code: string }) => `https://www.instagram.com/${p.type}/${p.code}/embed`;
const thumbUrl = (p: { type: string; code: string }) => `https://www.instagram.com/${p.type}/${p.code}/media/?size=m`;

const TILE_OVERLAYS = [0, 0.05, 0.1, 0.05, 0.1, 0.15, 0.1, 0.15, 0.2];

function PlatformBadge({ platform }: { platform: Social["platform"] }) {
  const isIG = platform === "Instagram";
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-medium tracking-tight"
      style={{
        background: isIG ? "oklch(0.55 0.20 350 / 0.12)" : "oklch(0.55 0.18 255 / 0.12)",
        color: isIG ? "oklch(0.50 0.20 350)" : "oklch(0.50 0.18 255)",
      }}
    >
      {isIG ? "◎ Instagram" : "❖ Facebook"}
    </span>
  );
}

/* 3×3 grid of post tiles. Tiles with a real post show a thumbnail and open a
   live embed on click; empty slots are flat brand-tinted placeholders. */
function PostGrid({ s, onOpen }: { s: Social; onOpen: (embed: string) => void }) {
  const parsed = (s.posts ?? []).map(parsePost).filter((p): p is { type: string; code: string } => !!p);

  return (
    <div className="grid grid-cols-3 gap-0.5">
      {Array.from({ length: 9 }).map((_, i) => {
        const p = parsed[i];
        if (!p) {
          return (
            <div key={i} className="relative aspect-square overflow-hidden" style={{ background: s.color }}>
              <div className="absolute inset-0" style={{ background: `oklch(1 0 0 / ${TILE_OVERLAYS[i]})` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-[12px]">{s.platform === "Instagram" ? "◎" : "❖"}</span>
              </div>
            </div>
          );
        }
        return (
          <button
            key={i}
            onClick={() => onOpen(embedUrl(p))}
            className="group relative aspect-square overflow-hidden focus:outline-none"
            style={{ background: s.color }}
            aria-label="Open post"
          >
            {/* Thumbnail sits over the colored tile; if it fails to load the
                tile color remains — graceful fallback. */}
            <img
              src={thumbUrl(p)}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition text-white text-[13px]">＋</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function SocialCard({ s, onOpen }: { s: Social; onOpen: (embed: string) => void }) {
  const { editing } = useEdit();
  return (
    <div className="rounded-[16px] border border-border bg-card overflow-hidden mac-shadow flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-start gap-3">
        <div
          className="h-14 w-14 shrink-0 rounded-full overflow-hidden flex items-center justify-center ring-2 ring-border"
          style={{ background: s.color }}
        >
          <EditableImage collection="socials" id={s.id} item={s} path={["logo"]} src={s.logo ?? ""} alt={s.name} wrapperClassName="h-full w-full" className="h-full w-full object-cover" />
          {!s.logo && !editing && (
            <span className="text-white text-[20px] font-bold">{s.name[0]}</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <EditableText collection="socials" id={s.id} item={s} path={["name"]} value={s.name} as="p" className="text-[14px] font-semibold tracking-tight text-foreground leading-tight" />
            {s.owned && (
              <span
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white"
                style={{ background: s.color }}
              >
                ★ My Business
              </span>
            )}
            {s.status === "Coming Soon" && (
              <span className="rounded-full bg-secondary px-2 py-0.5 text-[8px] uppercase tracking-[0.12em] text-foreground/45">
                Soon
              </span>
            )}
          </div>
          <EditableText collection="socials" id={s.id} item={s} path={["handle"]} value={s.handle} as="p" className="text-[11px] tracking-tight text-foreground/45" />
          <div className="mt-1.5">
            <PlatformBadge platform={s.platform} />
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="px-4 pb-3">
        <EditableText collection="socials" id={s.id} item={s} path={["category"]} value={s.category} as="p" className="text-[10px] uppercase tracking-[0.14em] text-foreground/35" />
        <EditableText collection="socials" id={s.id} item={s} path={["bio"]} value={s.bio} as="p" className="mt-1.5 text-[12px] leading-relaxed tracking-tight text-foreground/60" />
      </div>

      {/* 3×3 grid */}
      <PostGrid s={s} onOpen={onOpen} />

      {/* Footer link */}
      <div className="p-3">
        <a
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[11px] font-medium tracking-tight text-white transition hover:opacity-90"
          style={{ background: s.color }}
        >
          {s.platform === "Instagram" ? "Follow" : "View"} ↗
        </a>
      </div>
    </div>
  );
}

/* Live embed lightbox */
function EmbedLightbox({ url, onClose }: { url: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      style={{ background: "oklch(0.04 0.01 240 / 0.9)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[400px]"
        style={{ animation: "modal-in 0.3s cubic-bezier(.2,.8,.2,1) both" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white/60 hover:bg-white/20 hover:text-white transition text-[13px]"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="overflow-hidden rounded-[14px] bg-white">
          <iframe
            src={url}
            title="Instagram post"
            loading="lazy"
            scrolling="no"
            className="w-full block"
            style={{ height: 560, border: 0 }}
          />
        </div>
      </div>
    </div>
  );
}

function SocialsPage() {
  const [embed, setEmbed] = useState<string | null>(null);
  const { items: socials } = useSocials();
  const igCount = socials.filter((s) => s.platform === "Instagram").length;

  return (
    <div className="min-h-screen bg-background pb-32">
      <NavBar />
      {embed && <EmbedLightbox url={embed} onClose={() => setEmbed(null)} />}

      <main className="mx-auto max-w-[1100px] px-6 pt-10 sm:px-10">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10"
        >
          ← Gallery
        </Link>

        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3">Socials</p>
            <h1
              className="font-bold tracking-tightest text-foreground leading-[0.88]"
              style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
            >
              The accounts<br />
              <span style={{ color: "oklch(0.18 0.01 240 / 0.22)" }}>I run.</span>
            </h1>
            <p className="mt-5 text-[14px] leading-relaxed tracking-tight text-foreground/55 max-w-lg">
              Every store and page I manage, laid out like a feed. Tap a post to open it live; tap Follow to open the
              account.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50">
              {igCount} Instagram
            </span>
            <span className="rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50">
              {socials.length} accounts
            </span>
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {socials.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 40}>
              <SocialCard s={s} onOpen={setEmbed} />
            </Reveal>
          ))}
        </div>

        {/* How-to note */}
        <div className="mt-10 rounded-[12px] border border-border bg-secondary/40 px-5 py-4 flex items-start gap-3">
          <span className="text-foreground/25 text-[16px] mt-0.5">◎</span>
          <p className="text-[11px] tracking-tight text-foreground/40 leading-relaxed">
            Free & no API: on Instagram, open a post → <span className="text-foreground/60">⋯ → Copy link</span>, then
            paste it into that account's <code className="bg-secondary px-1 py-0.5 rounded text-[10px]">posts</code> array
            in <code className="bg-secondary px-1 py-0.5 rounded text-[10px]">src/routes/socials.tsx</code>. It fills a
            grid tile and opens live on click.
          </p>
        </div>
      </main>
    </div>
  );
}
