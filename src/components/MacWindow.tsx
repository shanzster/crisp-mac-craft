type Props = {
  label?: string;
  title: string;
  children: React.ReactNode;
  rightChip?: string;
  className?: string;
};

/**
 * A macOS app window: traffic lights, title bar, scrollable body.
 */
export function MacWindow({ label, title, children, rightChip, className = "" }: Props) {
  return (
    <div className={`mac-shadow overflow-hidden rounded-[12px] border border-border bg-card ${className}`}>
      {/* Title bar */}
      <div className="flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="block h-[11px] w-[11px] rounded-full bg-[var(--traffic-red)]" />
          <span className="block h-[11px] w-[11px] rounded-full bg-[var(--traffic-yellow)]" />
          <span className="block h-[11px] w-[11px] rounded-full bg-[var(--traffic-green)]" />
        </div>
        <div className="text-[11px] tracking-tight text-foreground/70">
          {label ? <span className="mr-2 text-foreground/40">{label}</span> : null}
          <span>{title}</span>
        </div>
        <div className="min-w-[44px] text-right">
          {rightChip && (
            <span className="rounded-full bg-background px-2 py-0.5 text-[10px] tracking-tight text-foreground/70 border border-border">
              {rightChip}
            </span>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
