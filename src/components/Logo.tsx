import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", showText = true, light = false }: LogoProps) {
  const primaryColor = light ? "#FFFFFF" : "#06162D";
  const accentColor = light ? "#D9B15F" : "#C89235";
  const textColor = light ? "#FFFFFF" : "#0B1220";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Globe & Star SVG Logo */}
      <svg
        width="46"
        height="46"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Globe Base outline */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={primaryColor}
          strokeWidth="3"
          strokeDasharray="4 2"
          className="opacity-40"
        />

        {/* Globe Grid Lines (Latitudes & Longitudes) */}
        <path
          d="M50 8 A42 42 0 0 1 50 92 A42 42 0 0 1 50 8"
          stroke={primaryColor}
          strokeWidth="2"
          className="opacity-30"
        />
        <path
          d="M50 8 A25 42 0 0 1 50 92 A25 42 0 0 1 50 8"
          stroke={primaryColor}
          strokeWidth="2"
          className="opacity-30"
        />
        <path
          d="M8 50 C 8 30, 92 30, 92 50 C 92 70, 8 70, 8 50 Z"
          stroke={primaryColor}
          strokeWidth="2"
          className="opacity-30"
        />
        <path
          d="M18 30 C 18 20, 82 20, 82 30"
          stroke={primaryColor}
          strokeWidth="1.5"
          className="opacity-20"
        />
        <path
          d="M18 70 C 18 80, 82 80, 82 70"
          stroke={primaryColor}
          strokeWidth="1.5"
          className="opacity-20"
        />

        {/* Golden Orbit Ring wrapping the star */}
        <path
          d="M16 66 C 10 40, 40 12, 72 16 C 88 18, 92 30, 86 44"
          stroke={accentColor}
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Compass Star / Orion Star */}
        {/* Vertical Points */}
        <path
          d="M50 20 L53.5 45 L50 49 L46.5 45 Z"
          fill={accentColor}
        />
        <path
          d="M50 80 L53.5 55 L50 51 L46.5 55 Z"
          fill={accentColor}
        />
        {/* Horizontal Points */}
        <path
          d="M80 50 L55 53.5 L51 50 L55 46.5 Z"
          fill={accentColor}
        />
        <path
          d="M20 50 L45 53.5 L49 50 L45 46.5 Z"
          fill={accentColor}
        />

        {/* Diagonal small pointers */}
        <path d="M50 50 L58 42 M50 50 L58 58 M50 50 L42 42 M50 50 L42 58" stroke={accentColor} strokeWidth="2" />

        {/* Core Center Dot */}
        <circle cx="50" cy="50" r="3" fill={primaryColor} />
      </svg>

      {/* Corporate text logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="text-lg font-bold tracking-[0.2em] font-serif"
            style={{ color: textColor }}
          >
            ORION
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3" style={{ backgroundColor: accentColor }}></span>
            <span
              className="text-[9px] font-semibold tracking-[0.3em] font-sans opacity-90"
              style={{ color: accentColor }}
            >
              GLOBAL
            </span>
            <span className="h-[1px] w-3" style={{ backgroundColor: accentColor }}></span>
          </div>
        </div>
      )}
    </div>
  );
}
