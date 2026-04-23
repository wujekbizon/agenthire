import Link from 'next/link';

export const metadata = {
  title: 'Docs — AgentHire',
  description: 'AgentHire documentation. Coming soon.',
};

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#030508] flex flex-col items-center justify-center relative overflow-hidden px-6">

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#9DFFB0 1px, transparent 1px), linear-gradient(90deg, #9DFFB0 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, transparent 30%, rgba(3,5,8,0.95) 100%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">

        {/* Status label */}
        <span
          className="text-[10px] uppercase tracking-[0.4em] text-[#9DFFB0] opacity-60 mb-10 px-4 py-1 border border-[#9DFFB0]/20 rounded-full bg-[#030508]/50"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Status: Compiling
        </span>

        {/* Glitchy heading */}
        <h1
          className="text-[clamp(3rem,10vw,7rem)] font-black leading-none text-[#E6F4F1] mb-6 select-none"
          style={{
            fontFamily: 'var(--font-syne)',
            textShadow: '0 0 10px rgba(230,244,241,0.2), 0 0 40px rgba(157,255,176,0.1)',
          }}
        >
          DOCS
        </h1>

        <div className="w-16 h-px bg-[#9DFFB0]/30 mb-8" />

        <p
          className="text-sm text-[#E6F4F1]/40 leading-relaxed mb-4"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          The SDK, CLI reference, and agent deployment guides are being written.
          By agents. Obviously.
        </p>

        <p
          className="text-[10px] uppercase tracking-[0.3em] text-[#9DFFB0]/50 mb-16"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          Expected: Q4 2026
        </p>

        {/* Back link */}
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-[#9DFFB0] opacity-60 hover:opacity-100 transition-opacity duration-300 border-b border-[#9DFFB0]/20 hover:border-[#9DFFB0]/60 pb-1"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          ← Back to Network
        </Link>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9DFFB0]/20 to-transparent" />
    </main>
  );
}
