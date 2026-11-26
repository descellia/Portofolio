/* Original line-art ornaments inspired by a coastal, nature-led mood. All decorative SVGs are aria-hidden. */

type P = { className?: string; strokeWidth?: number };

export function ShellIcon({ className, strokeWidth = 1.2 }: P) {
  const ribs = [-62, -44, -26, -9, 9, 26, 44, 62];
  return (
    <svg viewBox="0 0 64 56" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <path d="M32 50 C14 48 4 34 6 22 C8 10 20 4 32 4 C44 4 56 10 58 22 C60 34 50 48 32 50 Z" />
      {ribs.map((a) => {
        const r = (a * Math.PI) / 180;
        return <path key={a} d={`M32 50 L${(32 + Math.sin(r) * 27).toFixed(1)} ${(50 - Math.cos(r) * 44).toFixed(1)}`} opacity="0.85" />;
      })}
      <path d="M26 50 Q32 55 38 50" />
    </svg>
  );
}

export function WaveIcon({ className, strokeWidth = 1.2 }: P) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <path d="M4 30 C14 30 16 10 30 10 C40 10 42 22 34 24 C28 25 27 18 32 17" />
      <path d="M4 36 C18 36 24 28 34 30 C44 32 50 30 60 24" />
      <path d="M38 14 C46 10 54 14 60 20" opacity="0.7" />
    </svg>
  );
}

export function CoralIcon({ className, strokeWidth = 1.2 }: P) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <path d="M28 52 V30 M28 38 C20 34 18 26 18 18 M18 26 C12 24 10 18 10 12 M18 22 C22 18 22 12 22 8 M28 30 C36 28 38 20 38 12 M38 20 C44 18 46 12 46 8 M38 16 C34 12 34 8 34 4 M28 30 C28 22 28 16 28 10" />
      <path d="M20 52 H36" />
    </svg>
  );
}

export function SunIcon({ className, strokeWidth = 1.2 }: P) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <circle cx="28" cy="28" r="9" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        const r1 = i % 2 ? 14 : 13;
        const r2 = i % 2 ? 19 : 23;
        return <path key={i} d={`M${(28 + Math.cos(a) * r1).toFixed(1)} ${(28 + Math.sin(a) * r1).toFixed(1)} L${(28 + Math.cos(a) * r2).toFixed(1)} ${(28 + Math.sin(a) * r2).toFixed(1)}`} />;
      })}
    </svg>
  );
}

export const approachIcons = { wave: WaveIcon, shell: ShellIcon, coral: CoralIcon, sun: SunIcon };

/** Flowing contour lines, used over the hero photo and in section backgrounds. */
export function TideLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true" preserveAspectRatio="none">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M-10 ${300 + i * 16} C 120 ${250 + i * 12}, 200 ${360 + i * 8}, 320 ${300 + i * 10} S 520 ${230 + i * 14}, 620 ${260 + i * 12}`}
          strokeWidth={1}
          opacity={0.75 - i * 0.12}
        />
      ))}
    </svg>
  );
}

/** Soft wave edge between sections. `flip` turns it upside down. */
export function WaveEdge({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" className={className} preserveAspectRatio="none" aria-hidden="true" style={flip ? { transform: "scaleY(-1)" } : undefined}>
      <path d="M0 40 C 240 90, 480 0, 720 30 S 1200 80, 1440 30 V80 H0 Z" fill="currentColor" />
    </svg>
  );
}

/** Circular text badge, echoing the stamp in the visual reference. */
export function RingBadge({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <path id="ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <text fill="currentColor" fontSize="8.6" letterSpacing="2.6" style={{ fontFamily: "var(--font-sans)", textTransform: "uppercase" }}>
        <textPath href="#ring">{text}</textPath>
      </text>
      <g transform="translate(40 44) scale(0.62)">
        <ShellIcon className="" strokeWidth={1.6} />
      </g>
    </svg>
  );
}

/* Small UI icons */
export const Icon = {
  Arrow: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowUpRight: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  ),
  Download: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  ),
  Mail: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  Pin: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  GitHub: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  LinkedIn: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.81c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54v4.89h-4v-11Z" />
    </svg>
  ),
  Copy: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h8" />
    </svg>
  ),
};
