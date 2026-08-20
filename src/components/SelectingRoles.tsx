const ROLES = [
  "content strategist",
  "growth marketer",
  "social media manager",
  "paid ads manager",
  "brand storyteller",
  "video editor",
];

export function SelectingRoles() {
  return (
    <span
      className="auto-select role-rotator"
      style={{
        display: "inline-block",
        minWidth: "18ch",
      }}
    >
      <span className="role-rotator-track" aria-live="polite">
        {ROLES.map((role) => (
          <span key={role} className="role-rotator-word">
            {role}
          </span>
        ))}
      </span>
    </span>
  );
}
