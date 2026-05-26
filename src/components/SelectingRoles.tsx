import { useEffect, useState } from "react";

const ROLES = [
  "content strategist",
  "growth marketer",
  "social media manager",
  "brand storyteller",
  "video editor",
];

/**
 * Cycles through roles with a persistent macOS-style text selection —
 * solid blue highlight, left handle (dot on top) and right handle (dot on bottom).
 */
export function SelectingRoles() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      // Brief fade out, swap word, fade back in
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % ROLES.length);
        setVisible(true);
      }, 180);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      key={i}
      className="auto-select"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.18s ease",
      }}
    >
      {ROLES[i]}
    </span>
  );
}
