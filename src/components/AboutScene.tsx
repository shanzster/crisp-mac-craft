export function AboutScene() {
  return (
    <div
      className="relative w-full h-full rounded-[16px] overflow-hidden"
      style={{ minHeight: 500 }}
    >
      {/* Full-bleed profile photo */}
      <img
        src="/src/image_reference/profile.png"
        alt="Shanzster"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Bottom gradient scrim so text is readable */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "45%",
          background:
            "linear-gradient(to top, oklch(0.97 0.005 240) 0%, oklch(0.97 0.005 240 / 0.85) 40%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Name tag */}
      <div
        className="absolute bottom-0 inset-x-0 px-7 pb-7"
        style={{ zIndex: 3 }}
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-foreground/40 mb-1">
          about me
        </p>
        <p className="text-[28px] font-bold tracking-tightest text-foreground leading-tight">
          Shanzster
        </p>
        <p className="mt-0.5 text-[13px] tracking-tight text-foreground/55">
          Creative Developer · Social Media Manager
        </p>

        {/* Quick stat pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            { v: "4+",   l: "pages managed" },
            { v: "3",    l: "brands built"  },
            { v: "2+",   l: "yrs freelance" },
          ].map(({ v, l }) => (
            <div
              key={l}
              className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <span className="text-[13px] font-bold tracking-tightest text-foreground">{v}</span>
              <span className="text-[10px] tracking-tight text-foreground/45">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
