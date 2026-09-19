/**
 * Full-bleed architectural light treatment used when a real hero photo
 * is not yet available at the configured path.
 */
export function MosqueVisual({
  className = "",
  label = "Architectural light across arched windows",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d34] via-[#0d4f42] to-[#062820]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 70% 35%, rgba(212, 175, 85, 0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255,255,255,0.08), transparent)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5edd8" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#b8923a" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#08352c" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="shaft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#fff8e7" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Floor plane */}
        <path
          d="M0 620 L1200 560 L1200 800 L0 800 Z"
          fill="#062820"
          opacity="0.85"
        />

        {/* Arch colonnade */}
        {[180, 360, 540, 720, 900].map((x) => (
          <g key={x}>
            <path
              d={`M${x} 620 V280 A90 90 0 0 1 ${x + 180} 280 V620`}
              fill="none"
              stroke="#e6f0ec"
              strokeOpacity="0.18"
              strokeWidth="2"
            />
            <path
              d={`M${x + 16} 620 V292 A74 74 0 0 1 ${x + 164} 292 V620`}
              fill="url(#glass)"
            />
            <rect
              x={x + 82}
              y={300}
              width="16"
              height="320"
              fill="#08352c"
              opacity="0.45"
            />
          </g>
        ))}

        {/* Light shafts */}
        <polygon points="420,40 520,40 380,800 180,800" fill="url(#shaft)" />
        <polygon
          points="700,20 780,20 700,800 560,800"
          fill="url(#shaft)"
          opacity="0.7"
        />

        {/* Soft mist */}
        <ellipse
          cx="900"
          cy="200"
          rx="280"
          ry="120"
          fill="#f5edd8"
          opacity="0.12"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}
