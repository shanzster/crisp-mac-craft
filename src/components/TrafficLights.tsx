type Props = {
  size?: number;             // dot diameter in px
  onClose?: () => void;      // red — close
  onMinimize?: () => void;   // yellow — minimize
  onZoom?: () => void;       // green — zoom / expand
};

/**
 * macOS traffic lights. Glyphs (✕ − ＋) fade in when the cluster is hovered,
 * exactly like the real thing. Dots with a handler become real buttons.
 */
export function TrafficLights({ size = 11, onClose, onMinimize, onZoom }: Props) {
  const dots = [
    { color: "var(--traffic-red)",    glyph: "✕", action: onClose,    label: "Close"    },
    { color: "var(--traffic-yellow)", glyph: "−", action: onMinimize, label: "Minimize" },
    { color: "var(--traffic-green)",  glyph: "+", action: onZoom,     label: "Zoom"     },
  ];

  return (
    <div className="traffic-lights flex items-center gap-1.5">
      {dots.map((d) =>
        d.action ? (
          <button
            key={d.label}
            onClick={d.action}
            aria-label={d.label}
            className="traffic-dot"
            style={{ width: size, height: size, background: d.color }}
          >
            <span className="traffic-glyph" style={{ fontSize: Math.round(size * 0.72) }}>{d.glyph}</span>
          </button>
        ) : (
          <span
            key={d.label}
            aria-hidden
            className="traffic-dot"
            style={{ width: size, height: size, background: d.color }}
          >
            <span className="traffic-glyph" style={{ fontSize: Math.round(size * 0.72) }}>{d.glyph}</span>
          </span>
        )
      )}
    </div>
  );
}
