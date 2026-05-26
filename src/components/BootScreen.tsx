import { useState, useEffect } from "react";

export function BootScreen({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState<"icon" | "name" | "tagline" | "out">("icon");

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      onDone();
      return;
    }

    // icon fades in → name → tagline → fade out
    const t1 = setTimeout(() => setStage("name"),    700);
    const t2 = setTimeout(() => setStage("tagline"), 1400);
    const t3 = setTimeout(() => setStage("out"),     2400);
    const t4 = setTimeout(() => {
      sessionStorage.setItem("booted", "1");
      onDone();
    }, 3100);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  const visible = stage !== "out";

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5"
      style={{
        background: "oklch(0.97 0.005 240)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
        pointerEvents: visible ? "all" : "none",
      }}
    >
      {/* Folder icon */}
      <div
        style={{
          opacity: stage === "icon" || stage === "name" || stage === "tagline" ? 1 : 0,
          transform: stage === "icon" ? "scale(0.85)" : "scale(1)",
          transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div
          className="flex h-20 w-20 items-center justify-center rounded-[22px] text-[32px] font-bold text-white shadow-[0_12px_40px_-8px_oklch(0.55_0.12_240/0.35)]"
          style={{ background: "linear-gradient(160deg, oklch(0.78 0.12 232), oklch(0.68 0.15 242))" }}
        >
          S
        </div>
      </div>

      {/* Name */}
      <div
        style={{
          opacity: stage === "name" || stage === "tagline" ? 1 : 0,
          transform: stage === "name" || stage === "tagline" ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease 0.05s, transform 0.5s cubic-bezier(.2,.8,.2,1) 0.05s",
        }}
      >
        <p
          className="font-bold tracking-tightest text-foreground text-center"
          style={{ fontSize: 32 }}
        >
          Shanzster
        </p>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: stage === "tagline" ? 1 : 0,
          transform: stage === "tagline" ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.5s ease 0.05s, transform 0.5s cubic-bezier(.2,.8,.2,1) 0.05s",
        }}
      >
        <p className="text-[13px] tracking-[0.18em] uppercase text-foreground/35 text-center">
          Social Media · Brand · Creative
        </p>
      </div>
    </div>
  );
}
