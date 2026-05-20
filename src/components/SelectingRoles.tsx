import { useEffect, useState } from "react";

const ROLES = [
  "content strategist",
  "growth marketer",
  "SEO operator",
  "paid media lead",
  "brand storyteller",
];

/**
 * Cycles through roles. The current one looks like it was just selected
 * by the cursor (animated highlight sweep, macOS selection blue).
 */
export function SelectingRoles() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span key={i} className="auto-select">
      {ROLES[i]}
    </span>
  );
}
