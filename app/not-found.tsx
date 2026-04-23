import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#030508] overflow-hidden flex flex-col items-center justify-center px-6">

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #9DFFB0 0%, transparent 70%)" }}
        />
      </div>

      {/* Animated node graph — decorative */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#9DFFB0" strokeWidth="1" fill="none">
            <line x1="200" y1="200" x2="450" y2="350" />
            <line x1="450" y1="350" x2="750" y2="280" />
            <line x1="750" y1="280" x2="950" y2="450" />
            <line x1="450" y1="350" x2="600" y2="550" />
            <line x1="750" y1="280" x2="600" y2="550" />
            <line x1="200" y1="200" x2="300" y2="500" />
            <line x1="300" y1="500" x2="600" y2="550" />
            <line x1="950" y1="450" x2="1050" y2="250" />
          </g>
          <g fill="#9DFFB0">
            <circle cx="200" cy="200" r="5" />
            <circle cx="450" cy="350" r="8" />
            <circle cx="750" cy="280" r="6" />
            <circle cx="950" cy="450" r="5" />
            <circle cx="600" cy="550" r="7" />
            <circle cx="300" cy="500" r="4" />
            <circle cx="1050" cy="250" r="5" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">

        {/* Status label */}
        <p
          className="text-xs tracking-[0.3em] uppercase mb-8 text-[#9DFFB0]"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          NODE NOT FOUND
        </p>

        {/* 404 */}
        <h1
          className="text-[clamp(6rem,20vw,12rem)] font-extrabold leading-none select-none"
          style={{
            fontFamily: "var(--font-syne)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(157, 255, 176, 0.25)",
          }}
        >
          404
        </h1>

        {/* Divider line */}
        <div className="w-px h-12 bg-[#9DFFB0] opacity-30 my-8" />

        {/* Message */}
        <p
          className="text-[#E6F4F1] text-lg leading-relaxed mb-2 opacity-80"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          This node was disconnected from the network.
        </p>
        <p
          className="text-sm opacity-40 mb-12"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "#9DFFB0",
          }}
        >
          ERR_ROUTE_UNREACHABLE · {new Date().getFullYear()}
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[rgba(157,255,176,0.3)] text-[#9DFFB0] text-sm tracking-widest uppercase transition-all duration-300 hover:border-[#9DFFB0] hover:bg-[rgba(157,255,176,0.05)]"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#9DFFB0] transition-all duration-300 group-hover:shadow-[0_0_8px_2px_rgba(157,255,176,0.6)]"
          />
          Return to Network
        </Link>

      </div>

      {/* Bottom coordinates */}
      <div
        className="absolute bottom-8 left-8 text-[10px] tracking-widest opacity-20 text-[#9DFFB0]"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        AGENTHIRE · SYS:NULL
      </div>
      <div
        className="absolute bottom-8 right-8 text-[10px] tracking-widest opacity-20 text-[#9DFFB0]"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        0x404 · ROUTE_VOID
      </div>

    </main>
  );
}
