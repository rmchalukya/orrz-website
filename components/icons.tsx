import { ReactNode } from "react";

// Stroke-based line icons keyed to each service slug.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden {...base}>
      {children}
    </svg>
  );
}

export const SERVICE_ICONS: Record<string, ReactNode> = {
  "software-development": (
    <Svg>
      <polyline points="8 9 5 12 8 15" />
      <polyline points="16 9 19 12 16 15" />
      <line x1="13.5" y1="7" x2="10.5" y2="17" />
    </Svg>
  ),
  "ai-ed-tech": (
    <Svg>
      <rect x="4" y="6" width="16" height="11" rx="2" />
      <circle cx="12" cy="11.5" r="2.2" />
      <line x1="12" y1="6" x2="12" y2="4" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="17" x2="12" y2="20" />
    </Svg>
  ),
  sap: (
    <Svg>
      <rect x="3.5" y="4.5" width="17" height="13" rx="1.5" />
      <line x1="3.5" y1="9" x2="20.5" y2="9" />
      <line x1="9" y1="20.5" x2="15" y2="20.5" />
      <line x1="12" y1="17.5" x2="12" y2="20.5" />
    </Svg>
  ),
  "iot-energy": (
    <Svg>
      <path d="M13 3 5 13h6l-1 8 8-10h-6z" />
    </Svg>
  ),
  "data-analytics": (
    <Svg>
      <line x1="5" y1="20" x2="5" y2="13" />
      <line x1="10" y1="20" x2="10" y2="8" />
      <line x1="15" y1="20" x2="15" y2="11" />
      <line x1="20" y1="20" x2="20" y2="5" />
      <line x1="3" y1="20" x2="21" y2="20" />
    </Svg>
  ),
  "staff-augmentation": (
    <Svg>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6" />
      <path d="M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
    </Svg>
  ),
};
