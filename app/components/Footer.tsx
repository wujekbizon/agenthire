// Barcode bar pattern — widths cycle to mimic a real Code128 look
const BARS = [
  2,1,2,1,1,3,1,2,1,1,2,2,1,1,2,1,3,1,1,2,
  1,1,3,2,1,1,2,1,2,2,1,3,1,1,1,2,2,1,1,2,
  1,2,1,1,3,1,2,1,1,2,1,3,2,1,1,1,2,1,2,1,
  3,1,1,2,1,2,2,1,1,2,1,1,3,1,2,1,2,1,1,2,
  1,2,2,1,3,1,1,1,2,1,2,1,1,2,1,3,1,2,2,1,
  1,2,1,1,2,1,3,2,1,1,2,1,1,2,3,1,1,2,1,2,
];

const BAR_UNIT = 3;
const BAR_HEIGHT = 90;

function Barcode() {
  let x = 0;
  const rects: { x: number; w: number; filled: boolean }[] = [];
  BARS.forEach((w, i) => {
    const px = w * BAR_UNIT;
    rects.push({ x, w: px, filled: i % 2 === 0 });
    x += px;
  });
  const totalW = x;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${BAR_HEIGHT}`}
      width={totalW}
      height={BAR_HEIGHT}
      xmlns="http://www.w3.org/2000/svg"
      className="block"
      style={{ filter: 'drop-shadow(0 0 6px rgba(157,255,176,0.5)) drop-shadow(0 0 14px rgba(157,255,176,0.2))' }}
    >
      {rects.map((r, i) =>
        r.filled ? (
          <rect key={i} x={r.x} y={0} width={r.w} height={BAR_HEIGHT} fill="#9DFFB0" />
        ) : null
      )}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#030508] border-t border-[rgba(157,255,176,0.07)]">
      {/* Top phosphor line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#9DFFB0]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-14 flex flex-col gap-12">

        {/* Main row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Left — Barcode block */}
          <div className="flex flex-col gap-3">
            <Barcode />
            <p
              className="text-[9px] tracking-[0.4em] uppercase text-[#9DFFB0] opacity-30"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              AH-2026-EU · 00000042 · WESA-LABS
            </p>
          </div>

          {/* Center — Brand */}
          <div className="flex flex-col items-start md:items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#9DFFB0] shadow-[0_0_10px_#9DFFB0]" />
              <span
                className="font-extrabold text-2xl tracking-tighter text-[#E6F4F1]"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                AGENTHIRE
              </span>
            </div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-[#9DFFB0] opacity-40"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              The network is building.
            </p>
          </div>

          {/* Right — Links + status */}
          <div className="flex flex-col gap-4 items-start md:items-end">
            <nav className="flex gap-6">
              {['Network', 'Pricing', 'Docs'].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[0.2em] text-[#E6F4F1] opacity-30 hover:opacity-80 transition-opacity duration-200"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {label}
                </a>
              ))}
            </nav>
            <p
              className="text-[9px] tracking-[0.25em] uppercase text-[#9DFFB0] opacity-20"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Status: Fully Autonomous · v1.0.0-LIVING_VOID
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6 border-t border-[rgba(157,255,176,0.05)]">
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#E6F4F1] opacity-15"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            © 2026 WESA Labs · All rights reserved
          </p>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#9DFFB0] opacity-15"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Coord: 52.2297° N, 21.0122° E · agenthire.eu
          </p>
        </div>

      </div>
    </footer>
  );
}
