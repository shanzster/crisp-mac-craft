import { useState } from "react";

export type CaseStudy = {
  id: string;
  client: string;
  tag: string;
  headline: string;
  metric: string;
  metricLabel: string;
  bullets: string[];
};

type Props = {
  data: CaseStudy;
};

/**
 * A macOS-style folder. On hover, the folder opens (front flap tilts back)
 * and a piece of paper slides up out of it with the case study preview.
 */
export function CaseFolder({ data }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="group relative h-[340px] w-full cursor-default select-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* label under folder */}
      <div className="absolute inset-x-0 -bottom-7 text-center text-[12px] tracking-tight text-foreground/70">
        <span className={hover ? "selected-text" : ""}>{data.client}.case</span>
      </div>

      {/* PAPER — slides up out of the folder on hover */}
      <div
        className={[
          "absolute left-1/2 -translate-x-1/2 z-10",
          "w-[88%] h-[260px] rounded-[6px] bg-paper border border-border",
          "shadow-[0_8px_24px_-12px_oklch(0.2_0.02_240/0.35)]",
          "transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
          hover
            ? "bottom-[140px] opacity-100 rotate-[-1.2deg]"
            : "bottom-[40px] opacity-0 rotate-0",
        ].join(" ")}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-foreground/50">
            <span>{data.tag}</span>
            <span>Case · {data.id}</span>
          </div>
          <h4 className="mt-3 text-[20px] leading-[1.05] tracking-compressed font-medium text-foreground">
            {data.headline}
          </h4>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-[44px] leading-none tracking-tightest font-bold">
              {data.metric}
            </span>
            <span className="text-[11px] text-foreground/60">{data.metricLabel}</span>
          </div>
          <ul className="mt-auto space-y-1.5 text-[12px] text-foreground/70 tracking-tight">
            {data.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-foreground/30">›</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Tiny binder hole detail */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <div className="h-1 w-1 rounded-full bg-foreground/15" />
          <div className="h-1 w-1 rounded-full bg-foreground/15" />
          <div className="h-1 w-1 rounded-full bg-foreground/15" />
        </div>
      </div>

      {/* FOLDER */}
      <div className="absolute inset-x-4 bottom-0 h-[180px]" style={{ perspective: "900px" }}>
        {/* Back of folder */}
        <div className="absolute inset-0 rounded-[10px] bg-folder-tab" />
        {/* Folder tab */}
        <div className="absolute -top-3 left-2 h-5 w-[42%] rounded-t-[8px] bg-folder-tab" />
        {/* Front flap — opens on hover */}
        <div
          className={[
            "absolute inset-0 rounded-[10px] bg-folder origin-bottom",
            "transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]",
            "shadow-[inset_0_1px_0_oklch(1_0_0/0.25),0_4px_12px_-6px_oklch(0.2_0.02_240/0.3)]",
            hover
              ? "[transform:rotateX(38deg)]"
              : "[transform:rotateX(0deg)]",
          ].join(" ")}
        >
          {/* a faint label on the front */}
          <div className="absolute bottom-2 right-3 text-[10px] tracking-[0.2em] uppercase text-white/60">
            {data.tag}
          </div>
        </div>
      </div>
    </div>
  );
}
