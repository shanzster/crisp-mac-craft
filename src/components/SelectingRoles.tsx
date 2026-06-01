import { useEffect, useRef, useState } from "react";

const ROLES = [
  "content strategist",
  "growth marketer",
  "social media manager",
  "brand storyteller",
  "video editor",
];

export function SelectingRoles() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "hiding" | "hidden">("visible");
  const [mounted, setMounted] = useState(false);

  // Only start the interval after client mount — prevents SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const id = setInterval(() => {
      // 1. Start fade out
      setPhase("hiding");

      // 2. After fade out completes, swap word
      const swap = setTimeout(() => {
        setIndex((v) => (v + 1) % ROLES.length);
        setPhase("hidden"); // briefly hidden while word swaps
      }, 160);

      // 3. Fade back in
      const show = setTimeout(() => {
        setPhase("visible");
      }, 220);

      return () => {
        clearTimeout(swap);
        clearTimeout(show);
      };
    }, 2800);

    return () => clearInterval(id);
  }, [mounted]);

  return (
    <span
      className="auto-select"
      style={{
        opacity: phase === "visible" ? 1 : 0,
        transition: phase === "hiding" ? "opacity 0.16s ease" : "opacity 0.2s ease",
        display: "inline-block",
        minWidth: "12ch", // prevent layout shift as words change
      }}
    >
      {ROLES[index]}
    </span>
  );
}
