/**
 * Illustrated project covers. Every cover shares one "tidal" system:
 * the same mist-to-cream ground, paper halo, tide lines, index number, and soft shadow.
 * Only the central motif changes, and each motif is drawn from what the project actually does.
 * Pure SVG: crisp at any size, no image downloads, and themable from one place.
 */

const C = {
  paper: "#fbf9f5",
  cream: "#f5f0e8",
  mist: "#e3ebe8",
  sage: "#a9c1bb",
  sea: "#3e6763",
  sea6: "#335754",
  sea8: "#24403d",
  sand: "#a8957d",
  sand1: "#e8ded0",
  sand3: "#cbbba5",
  sand7: "#7d6b55",
  ink: "#2c3836",
};
type CoverProps = { no: string };
const sans = { fontFamily: "Jost, ui-sans-serif, system-ui, sans-serif" };
const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' };

function Scene({ id, no, label, children }: { id: string; no: string; label: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 440" className="absolute inset-0 h-full w-full" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.mist} />
          <stop offset="1" stopColor={C.cream} />
        </linearGradient>
        <radialGradient id={`halo-${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={C.paper} stopOpacity="0.95" />
          <stop offset="0.7" stopColor={C.paper} stopOpacity="0.5" />
          <stop offset="1" stopColor={C.paper} stopOpacity="0" />
        </radialGradient>
        <filter id={`sh-${id}`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor={C.sea8} floodOpacity="0.16" />
        </filter>
      </defs>

      <rect width="400" height="440" fill={`url(#bg-${id})`} />
      <circle cx="200" cy="236" r="178" fill={`url(#halo-${id})`} />
      <g fill="none" stroke={C.sage} strokeLinecap="round">
        <path d="M-10 396 C 80 372, 150 420, 230 396 S 360 366, 410 386" strokeWidth="1.2" opacity="0.9" />
        <path d="M-10 412 C 90 392, 160 436, 240 412 S 360 384, 410 404" strokeWidth="1" opacity="0.6" />
        <path d="M-10 428 C 100 410, 170 448, 250 428 S 360 404, 410 422" strokeWidth="0.8" opacity="0.4" />
      </g>
      <text x="200" y="84" textAnchor="middle" fill={C.sand} fontSize="20" letterSpacing="2" style={serif}>
        {no}
      </text>
      <path d="M186 94 H214" stroke={C.sand3} strokeWidth="1" />

      <g filter={`url(#sh-${id})`} className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-box:fill-box] group-hover:-translate-y-2">
        <g transform="translate(200 246) scale(1.1) translate(-200 -246)">{children}</g>
      </g>
    </svg>
  );
}

const Check = ({ x, y, r = 10, fill = C.sea }: { x: number; y: number; r?: number; fill?: string }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={fill} />
    <path d={`M${x - r * 0.42} ${y} l${r * 0.3} ${r * 0.32} l${r * 0.55} -${r * 0.62}`} fill="none" stroke={C.paper} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </g>
);

const Line = ({ x, y, w, fill = C.sand1, h = 4 }: { x: number; y: number; w: number; fill?: string; h?: number }) => (
  <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
);

/* Vendor records → hybrid retrieval → KBLI code */
function RagCover({ no }: CoverProps) {
  return (
    <Scene id="rag" no={no} label="Illustration: vendor records flowing through TF-IDF, SBERT and BM25 retrieval into a KBLI industry code with 98% accuracy">
      <text x="74" y="142" textAnchor="middle" fill={C.sand7} fontSize="9.5" letterSpacing="1.6" style={sans}>
        VENDORS
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={30 + i * 8} y={152 + i * 18} width="86" height="58" rx="9" fill={C.paper} stroke={C.sand1} />
          {i === 2 && (
            <>
              <rect x="56" y="200" width="28" height="6" rx="3" fill={C.sea} />
              <Line x={56} y={214} w={56} />
              <Line x={56} y={224} w={40} />
            </>
          )}
        </g>
      ))}
      <path d="M136 226 H152" stroke={C.sand} strokeWidth="1.5" strokeLinecap="round" markerEnd="" />
      <path d="M148 222 l5 4 -5 4" fill="none" stroke={C.sand} strokeWidth="1.5" strokeLinecap="round" />

      <circle cx="214" cy="216" r="58" fill={C.mist} stroke={C.sage} strokeDasharray="3 5" />
      <path d="M214 172 L178 238 L250 238 Z" fill="none" stroke={C.sage} strokeWidth="1.5" />
      {[
        { x: 214, y: 172, t: "TF-IDF" },
        { x: 178, y: 238, t: "SBERT" },
        { x: 250, y: 238, t: "BM25" },
      ].map((n) => (
        <g key={n.t}>
          <circle cx={n.x} cy={n.y} r="22" fill={C.paper} stroke={C.sea} strokeWidth="1.5" />
          <text x={n.x} y={n.y + 3.5} textAnchor="middle" fill={C.sea} fontSize="9.5" fontWeight="500" style={sans}>
            {n.t}
          </text>
        </g>
      ))}
      <circle cx="214" cy="216" r="5" fill={C.sand} />

      <path d="M274 226 H284" stroke={C.sand} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M280 222 l5 4 -5 4" fill="none" stroke={C.sand} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="290" y="186" width="82" height="76" rx="14" fill={C.sea} />
      <text x="331" y="220" textAnchor="middle" fill={C.paper} fontSize="22" style={serif}>
        KBLI
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={302 + i * 12} y="232" width="9" height="12" rx="2.5" fill={i < 2 ? C.sage : C.paper} opacity={i < 2 ? 1 : 0.85} />
      ))}
      <Check x={368} y={188} r={11} fill={C.sand} />

      <rect x="122" y="300" width="156" height="38" rx="19" fill={C.paper} stroke={C.sand1} />
      <text x="200" y="324" textAnchor="middle" fill={C.sea} fontSize="15" style={sans}>
        <tspan style={serif} fontSize="20">98%</tspan> accuracy
      </text>
      <text x="200" y="358" textAnchor="middle" fill={C.sand7} fontSize="10" letterSpacing="1.4" style={sans}>
        LLM RE-RANK · TOP 25
      </text>
    </Scene>
  );
}

/* Multi-turn dialogue scored by an LLM judge */
function JudgeCover({ no }: CoverProps) {
  const circ = 2 * Math.PI * 32;
  return (
    <Scene id="judge" no={no} label="Illustration: a multi-turn chat with turn-level checks and a judge score card showing 87.7% agreement with reviewers">
      <rect x="34" y="146" width="150" height="40" rx="18" fill={C.paper} stroke={C.sand1} />
      <Line x={52} y={160} w={96} />
      <Line x={52} y={170} w={64} />
      <rect x="64" y="198" width="156" height="46" rx="18" fill={C.sage} />
      <Line x={82} y={212} w={110} fill={C.paper} />
      <Line x={82} y={222} w={120} fill={C.paper} />
      <Line x={82} y={232} w={70} fill={C.paper} />
      <Check x={234} y={221} r={10} />
      <rect x="34" y="256" width="128" height="36" rx="16" fill={C.paper} stroke={C.sand1} />
      <Line x={52} y={268} w={84} />
      <Line x={52} y={278} w={52} />
      <rect x="64" y="304" width="156" height="42" rx="18" fill={C.sage} />
      <Line x={82} y={318} w={104} fill={C.paper} />
      <Line x={82} y={328} w={80} fill={C.paper} />
      <circle cx="234" cy="325" r="10" fill={C.sand} />
      <text x="234" y="330" textAnchor="middle" fill={C.paper} fontSize="13" fontWeight="500" style={sans}>
        !
      </text>

      <rect x="258" y="150" width="114" height="196" rx="20" fill={C.sea} />
      <text x="315" y="178" textAnchor="middle" fill={C.sage} fontSize="9" letterSpacing="1.8" style={sans}>
        JUDGE
      </text>
      <circle cx="315" cy="232" r="32" fill="none" stroke={C.sea6} strokeWidth="8" />
      <circle
        cx="315"
        cy="232"
        r="32"
        fill="none"
        stroke={C.sage}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${circ * 0.877} ${circ}`}
        transform="rotate(-90 315 232)"
      />
      <text x="315" y="239" textAnchor="middle" fill={C.paper} fontSize="21" style={serif}>
        87.7
      </text>
      <text x="315" y="290" textAnchor="middle" fill={C.mist} fontSize="9.5" letterSpacing="1.4" style={sans}>
        AGREEMENT
      </text>
      <text x="315" y="314" textAnchor="middle" fill={C.paper} fontSize="17" style={serif}>
        50 / 57
      </text>
      <text x="315" y="330" textAnchor="middle" fill={C.sage} fontSize="9" style={sans}>
        dialogues
      </text>
    </Scene>
  );
}

const Star = ({ x, y, s = 8, stroke = C.sage }: { x: number; y: number; s?: number; stroke?: string }) => (
  <path
    d={`M${x} ${y - s} Q${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y} Q${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s} Q${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y} Q${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s} Z`}
    fill="none"
    stroke={stroke}
    strokeWidth="1.3"
    strokeLinejoin="round"
  />
);

/* Dreamore: dream recording at night */
function DreamoreCover({ no }: CoverProps) {
  const bars = [10, 18, 28, 16, 34, 22, 40, 26, 18, 30, 14, 22, 10];
  return (
    <Scene id="dreamore" no={no} label="Illustration: a phone showing the Dreamore night screen with a crescent moon and a dream recording waveform, surrounded by stars">
      <path d="M318 132 a28 28 0 1 0 22 46 a22 22 0 1 1 -22 -46 Z" fill="none" stroke={C.sand} strokeWidth="1.5" />
      <Star x={88} y={168} s={10} />
      <Star x={330} y={300} s={8} />
      <Star x={112} y={206} s={5} stroke={C.sand3} />
      <rect x="46" y="262" width="74" height="62" rx="12" fill={C.paper} stroke={C.sand1} />
      <text x="56" y="280" fill={C.sand7} fontSize="8.5" letterSpacing="1" style={sans}>
        SLEEP
      </text>
      {[14, 22, 30, 18, 26].map((h, i) => (
        <rect key={i} x={58 + i * 11} y={314 - h} width="7" height={h} rx="2" fill={i === 2 ? C.sea : C.sage} />
      ))}

      <rect x="140" y="120" width="120" height="244" rx="24" fill={C.sea8} />
      <rect x="147" y="127" width="106" height="230" rx="18" fill={C.sea} />
      <rect x="182" y="134" width="36" height="7" rx="3.5" fill={C.sea8} />
      <circle cx="200" cy="190" r="20" fill={C.sand1} />
      <circle cx="210" cy="183" r="18" fill={C.sea} />
      {[
        [166, 162],
        [234, 170],
        [174, 214],
        [236, 206],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 1.6 : 2.2} fill={C.mist} />
      ))}
      <text x="200" y="242" textAnchor="middle" fill={C.paper} fontSize="17" style={serif}>
        Dreamore
      </text>
      {bars.map((h, i) => (
        <rect key={i} x={158 + i * 7} y={280 - h / 2} width="4" height={h} rx="2" fill={C.sage} />
      ))}
      <rect x="166" y="318" width="68" height="22" rx="11" fill={C.sand1} />
      <circle cx="180" cy="329" r="4" fill={C.sea} />
      <text x="206" y="332.5" textAnchor="middle" fill={C.sea} fontSize="9.5" style={sans}>
        Record
      </text>
    </Scene>
  );
}

/* Jadwalku: scheduling app built with Scrum */
function JadwalkuCover({ no }: CoverProps) {
  return (
    <Scene id="jadwalku" no={no} label="Illustration: a scheduling app with a calendar and task checklist, beside a Scrum board and a clock">
      <rect x="34" y="160" width="84" height="96" rx="12" fill={C.paper} stroke={C.sand1} />
      <text x="46" y="178" fill={C.sand7} fontSize="8.5" letterSpacing="1" style={sans}>
        SPRINT
      </text>
      {[0, 1, 2].map((c) => (
        <g key={c}>
          <Line x={44 + c * 24} y={186} w={18} fill={C.sand3} h={3} />
          {Array.from({ length: 3 - c }).map((_, r) => (
            <rect key={r} x={44 + c * 24} y={194 + r * 18} width="18" height="14" rx="3" fill={c === 2 ? C.sage : c === 1 ? C.sand1 : C.mist} />
          ))}
        </g>
      ))}
      <circle cx="318" cy="170" r="30" fill={C.paper} stroke={C.sea} strokeWidth="1.5" />
      <path d="M318 152 V170 L330 178" fill="none" stroke={C.sea} strokeWidth="2" strokeLinecap="round" />
      <path d="M300 300 q0 -18 14 -22 q14 4 14 22 l4 6 h-36 Z M310 310 q4 6 8 0" fill="none" stroke={C.sand} strokeWidth="1.5" strokeLinejoin="round" />

      <rect x="140" y="120" width="120" height="244" rx="24" fill={C.paper} stroke={C.sand3} />
      <rect x="182" y="130" width="36" height="7" rx="3.5" fill={C.sand1} />
      <text x="156" y="164" fill={C.sea} fontSize="17" style={serif}>
        Today
      </text>
      {Array.from({ length: 21 }).map((_, i) => {
        const cx = 160 + (i % 7) * 13.3;
        const cy = 180 + Math.floor(i / 7) * 14;
        return i === 9 ? <circle key={i} cx={cx} cy={cy} r="6.5" fill={C.sea} /> : <circle key={i} cx={cx} cy={cy} r="2.6" fill={i % 5 === 0 ? C.sage : C.sand1} />;
      })}
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="152" y={232 + r * 30} width="96" height="24" rx="7" fill={C.mist} />
          {r === 0 ? <Check x={164} y={244} r={6} /> : <circle cx="164" cy={244 + r * 30} r="5.5" fill="none" stroke={C.sea} strokeWidth="1.3" />}
          <Line x={176} y={240 + r * 30} w={r === 1 ? 44 : 58} fill={C.sand3} />
          <Line x={176} y={248 + r * 30} w={30} fill={C.sand1} h={3} />
        </g>
      ))}
      <circle cx="236" cy="336" r="12" fill={C.sea} />
      <path d="M236 330 v12 M230 336 h12" stroke={C.paper} strokeWidth="1.8" strokeLinecap="round" />
    </Scene>
  );
}

/* Koffnes Cafe: coffee and an online menu */
function KoffnesCover({ no }: CoverProps) {
  return (
    <Scene id="koffnes" no={no} label="Illustration: a Koffnes coffee cup with rising steam beside a digital menu card with an order button">
      <g fill="none" stroke={C.sage} strokeWidth="2" strokeLinecap="round">
        <path d="M150 196 c-10 -12 10 -20 0 -34 c-8 -11 4 -18 2 -26" />
        <path d="M176 192 c-10 -14 12 -22 0 -38 c-8 -12 6 -20 2 -30" />
        <path d="M202 196 c-10 -12 10 -20 0 -34" />
      </g>
      <ellipse cx="176" cy="324" rx="86" ry="11" fill={C.sand1} />
      <path d="M232 230 c34 -2 38 46 -6 50" fill="none" stroke={C.sea} strokeWidth="7" strokeLinecap="round" />
      <path d="M116 214 H236 L226 300 Q223 318 205 318 H147 Q129 318 126 300 Z" fill={C.paper} stroke={C.sea} strokeWidth="2" />
      <ellipse cx="176" cy="214" rx="60" ry="10" fill={C.sand} />
      <ellipse cx="176" cy="212" rx="50" ry="6" fill={C.sand7} opacity="0.5" />
      <text x="176" y="268" textAnchor="middle" fill={C.sea} fontSize="20" style={serif}>
        Koffnes
      </text>
      <path d="M156 280 H196" stroke={C.sand3} strokeWidth="1" />

      <rect x="262" y="140" width="110" height="178" rx="16" fill={C.paper} stroke={C.sand1} />
      <text x="278" y="168" fill={C.sea} fontSize="16" style={serif}>
        Menu
      </text>
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <circle cx="285" cy={192 + r * 30} r="10" fill={r === 1 ? C.sage : C.sand1} />
          <Line x={302} y={186 + r * 30} w={40} fill={C.sand3} />
          <Line x={302} y={195 + r * 30} w={26} fill={C.sand1} h={3} />
          <rect x="346" y={186 + r * 30} width="16" height="12" rx="4" fill={C.mist} />
        </g>
      ))}
      <rect x="276" y="282" width="82" height="22" rx="11" fill={C.sea} />
      <text x="317" y="296.5" textAnchor="middle" fill={C.paper} fontSize="9.5" letterSpacing="1.2" style={sans}>
        ORDER
      </text>
    </Scene>
  );
}

/* Seat Mapping Church: interactive seat grid */
function SeatCover({ no }: CoverProps) {
  // a = available, r = reserved, o = occupied, n = no use, s = selected
  const rows = ["aaraanaaa", "aoaraaraa", "aaaasaoaa", "raaaaaaar", "aaoaaaraa", "naaaraaan"];
  const fill: Record<string, string> = { a: C.sage, r: C.sand3, o: C.sea, n: C.ink, s: C.paper };
  return (
    <Scene id="seat" no={no} label="Illustration: a cinema-style seat map facing a stage, with seats marked available, reserved, occupied and no use, and one selected seat">
      <path d="M112 168 Q200 128 288 168" fill="none" stroke={C.sand} strokeWidth="2" strokeLinecap="round" />
      <text x="200" y="158" textAnchor="middle" fill={C.sand7} fontSize="9.5" letterSpacing="2" style={sans}>
        STAGE
      </text>
      <rect x="86" y="180" width="228" height="148" rx="16" fill={C.paper} opacity="0.85" />
      {rows.map((row, r) =>
        row.split("").map((k, c) => {
          const x = 99 + c * 22 + (c > 4 ? 8 : 0) - 4;
          const y = 192 + r * 22;
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width="16"
              height="16"
              rx="4.5"
              fill={fill[k]}
              opacity={k === "n" ? 0.72 : 1}
              stroke={k === "s" ? C.sea : "none"}
              strokeWidth={k === "s" ? 2 : 0}
            />
          );
        }),
      )}
      <g>
        <path d="M207 236 c-8 -10 -12 -15 -12 -20 a12 12 0 0 1 24 0 c0 5 -4 10 -12 20 Z" fill={C.sea} />
        <circle cx="207" cy="216" r="4" fill={C.paper} />
      </g>
      {[
        { k: "a", t: "Available" },
        { k: "r", t: "Reserved" },
        { k: "o", t: "Occupied" },
        { k: "n", t: "No use" },
      ].map((l, i) => (
        <g key={l.k}>
          <rect x={70 + i * 70} y="347" width="10" height="10" rx="3" fill={fill[l.k]} opacity={l.k === "n" ? 0.72 : 1} />
          <text x={85 + i * 70} y="356" fill={C.sand7} fontSize="9.5" style={sans}>
            {l.t}
          </text>
        </g>
      ))}
    </Scene>
  );
}

function ticketPath(x: number, y: number, w: number, h: number, r = 10) {
  const half = h / 2 - r;
  return `M${x} ${y} H${x + w} V${y + half} a${r} ${r} 0 0 0 0 ${2 * r} V${y + h} H${x} V${y + h - half} a${r} ${r} 0 0 0 0 -${2 * r} Z`;
}

/* Tixplore: event ticketing */
function TixploreCover({ no }: CoverProps) {
  return (
    <Scene id="tixplore" no={no} label="Illustration: two event tickets for workshops, seminars and concerts, with a calendar badge and location pin">
      <g transform="rotate(-9 200 232)">
        <path d={ticketPath(84, 176, 220, 94)} fill={C.sea} />
        <Line x={112} y={204} w={90} fill={C.sage} />
        <Line x={112} y={216} w={60} fill={C.sea6} />
        <path d="M250 182 V264" stroke={C.sage} strokeDasharray="3 4" />
      </g>
      <g transform="rotate(5 200 250)">
        <path d={ticketPath(88, 206, 228, 100)} fill={C.paper} stroke={C.sand1} />
        <text x="110" y="240" fill={C.sea} fontSize="24" style={serif}>
          Tixplore
        </text>
        <text x="111" y="258" fill={C.sand7} fontSize="9.5" style={sans}>
          Workshop · Seminar · Concert
        </text>
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={111 + i * 6.2} y="272" width={i % 3 === 0 ? 3 : 1.6} height="18" fill={C.ink} opacity="0.75" />
        ))}
        <path d="M258 212 V300" stroke={C.sand3} strokeDasharray="3 4" />
        <text x="287" y="256" textAnchor="middle" fill={C.sand} fontSize="9.5" letterSpacing="2" transform="rotate(-90 287 256)" style={sans}>
          ADMIT
        </text>
      </g>
      <rect x="300" y="122" width="62" height="64" rx="12" fill={C.paper} stroke={C.sand1} />
      <rect x="300" y="122" width="62" height="18" rx="9" fill={C.sea} />
      <rect x="300" y="132" width="62" height="8" fill={C.sea} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={314 + (i % 3) * 17} cy={154 + Math.floor(i / 3) * 16} r={i === 4 ? 5.5 : 2.6} fill={i === 4 ? C.sand : C.sand1} />
      ))}
      <path d="M60 338 c-8 -10 -12 -15 -12 -20 a12 12 0 0 1 24 0 c0 5 -4 10 -12 20 Z" fill="none" stroke={C.sand} strokeWidth="1.5" />
      <circle cx="60" cy="318" r="4" fill={C.sand} />
      <Star x={74} y={150} s={9} />
    </Scene>
  );
}

/* Todora: today's tasks with a live countdown */
function TodoraCover({ no }: CoverProps) {
  const tasks = [
    { done: true, w: 62, pill: "Done", fill: C.sage, text: C.sea8 },
    { done: false, w: 74, pill: "Working", fill: C.sand1, text: C.sand7 },
    { done: false, w: 50, pill: "Stuck", fill: C.sand3, text: C.paper },
    { done: false, w: 68, pill: "To do", fill: C.mist, text: C.sea },
  ];
  return (
    <Scene id="todora" no={no} label="Illustration: a Todora task card for today with status badges and a live deadline countdown, beside an hourglass">
      <rect x="78" y="128" width="226" height="226" rx="20" fill={C.paper} stroke={C.sand1} />
      <text x="100" y="166" fill={C.sea} fontSize="21" style={serif}>
        Today&apos;s tasks
      </text>
      <rect x="226" y="149" width="62" height="24" rx="12" fill={C.sea} />
      <circle cx="240" cy="161" r="3" fill={C.sage} />
      <text x="264" y="164.5" textAnchor="middle" fill={C.paper} fontSize="10" style={sans}>
        2h 15m
      </text>
      {tasks.map((t, i) => {
        const y = 192 + i * 38;
        return (
          <g key={t.pill}>
            {i > 0 && <path d={`M98 ${y - 7} H286`} stroke={C.sand1} />}
            {t.done ? (
              <g>
                <rect x="98" y={y + 3} width="16" height="16" rx="5" fill={C.sea} />
                <path d={`M102 ${y + 11} l3 3 6 -6`} fill="none" stroke={C.paper} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ) : (
              <rect x="98" y={y + 3} width="16" height="16" rx="5" fill="none" stroke={C.sand3} strokeWidth="1.4" />
            )}
            <Line x={124} y={y + 6} w={t.w} fill={t.done ? C.sand1 : C.sand3} />
            <Line x={124} y={y + 14} w={36} fill={C.sand1} h={3} />
            <rect x="238" y={y + 2} width="50" height="18" rx="9" fill={t.fill} />
            <text x="263" y={y + 14.5} textAnchor="middle" fill={t.text} fontSize="9" style={sans}>
              {t.pill}
            </text>
          </g>
        );
      })}
      <g fill="none" stroke={C.sand} strokeWidth="1.5" strokeLinejoin="round">
        <path d="M322 236 H358 M322 300 H358 M326 236 C326 258 354 262 354 268 C354 274 326 278 326 300 M354 236 C354 258 326 262 326 268 C326 274 354 278 354 300" />
      </g>
      <path d="M332 294 Q340 284 348 294 Z" fill={C.sand3} />
      <Star x={52} y={196} s={8} />
    </Scene>
  );
}

/* Fintelis: wallets, balance visibility, and a monthly spending limit */
function FintelisCover({ no }: CoverProps) {
  const circ = 2 * Math.PI * 22;
  return (
    <Scene id="fintelis" no={no} label="Illustration: the Fintelis Android app showing a hidden wallet balance, wallet chips, recent transactions and a monthly spending limit ring">
      <rect x="40" y="168" width="82" height="96" rx="14" fill={C.paper} stroke={C.sand1} />
      <text x="52" y="188" fill={C.sand7} fontSize="8.5" letterSpacing="1" style={sans}>
        MONTHLY LIMIT
      </text>
      <circle cx="81" cy="226" r="22" fill="none" stroke={C.mist} strokeWidth="7" />
      <circle cx="81" cy="226" r="22" fill="none" stroke={C.sand} strokeWidth="7" strokeLinecap="round" strokeDasharray={`${circ * 0.68} ${circ}`} transform="rotate(-90 81 226)" />
      <text x="81" y="230" textAnchor="middle" fill={C.sea} fontSize="12" style={serif}>
        68%
      </text>

      <g>
        <circle cx="322" cy="168" r="20" fill={C.sand1} stroke={C.sand} strokeWidth="1.5" />
        <circle cx="322" cy="168" r="13" fill="none" stroke={C.sand} strokeWidth="1" />
        <text x="322" y="172.5" textAnchor="middle" fill={C.sand7} fontSize="12" style={serif}>
          Rp
        </text>
      </g>
      <rect x="292" y="262" width="74" height="60" rx="12" fill={C.paper} stroke={C.sand1} />
      {[18, 30, 22, 38, 26].map((h, i) => (
        <rect key={i} x={304 + i * 11} y={310 - h} width="7" height={h} rx="2" fill={i === 3 ? C.sea : C.sage} />
      ))}

      <rect x="140" y="120" width="120" height="244" rx="24" fill={C.paper} stroke={C.sand3} />
      <rect x="182" y="130" width="36" height="7" rx="3.5" fill={C.sand1} />
      <text x="154" y="160" fill={C.sea} fontSize="16" style={serif}>
        Fintelis
      </text>
      <rect x="150" y="170" width="100" height="58" rx="12" fill={C.sea} />
      <text x="160" y="188" fill={C.sage} fontSize="8.5" letterSpacing="1" style={sans}>
        BALANCE
      </text>
      <text x="160" y="212" fill={C.paper} fontSize="17" letterSpacing="2" style={serif}>
        Rp ••••••
      </text>
      <g fill="none" stroke={C.mist} strokeWidth="1.4" strokeLinecap="round">
        <path d="M228 200 q9 -9 18 0 q-9 9 -18 0 Z" />
        <path d="M228 210 L246 190" />
      </g>
      {["Cash", "Bank", "E-wallet"].map((w, i) => (
        <g key={w}>
          <rect x={150 + i * 34} y="236" width="31" height="16" rx="8" fill={i === 2 ? C.sage : C.mist} />
          <text x={165.5 + i * 34} y="247" textAnchor="middle" fill={C.sea8} fontSize="7.5" style={sans}>
            {w}
          </text>
        </g>
      ))}
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <circle cx="160" cy={274 + r * 26} r="8" fill={r === 1 ? C.sage : C.sand1} />
          <Line x={174} y={269 + r * 26} w={r === 2 ? 34 : 44} fill={C.sand3} />
          <Line x={174} y={277 + r * 26} w={26} fill={C.sand1} h={3} />
          <rect x="222" y={269 + r * 26} width="22" height="8" rx="4" fill={r === 1 ? C.sage : C.sand1} />
        </g>
      ))}
    </Scene>
  );
}

export const projectCovers: Record<string, (props: CoverProps) => React.ReactElement> = {
  fintelis: FintelisCover,
  "vendor-kbli-rag": RagCover,
  "llm-judge-dialogue-qc": JudgeCover,
  dreamore: DreamoreCover,
  jadwalku: JadwalkuCover,
  "koffnes-cafe": KoffnesCover,
  "seat-mapping-church": SeatCover,
  tixplore: TixploreCover,
  todora: TodoraCover,
};
