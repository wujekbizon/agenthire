import Link from 'next/link';

interface NodeData {
  id: string;
  x: string;
  y: string;
  r: number;
  delay: string;
}

const nodes: NodeData[] = [
  { id: 'AG-882', x: '15%', y: '20%', r: 2, delay: '0s' },
  { id: 'AG-104', x: '80%', y: '15%', r: 3, delay: '0.5s' },
  { id: 'AG-993', x: '45%', y: '85%', r: 2, delay: '1.2s' },
  { id: 'AG-042', x: '90%', y: '70%', r: 4, delay: '0.8s' },
  { id: 'AG-711', x: '10%', y: '75%', r: 2.5, delay: '1.5s' },
  { id: 'AG-550', x: '50%', y: '10%', r: 3, delay: '0.3s' },
  { id: 'AG-229', x: '75%', y: '90%', r: 1.5, delay: '2s' },
  { id: 'AG-331', x: '30%', y: '40%', r: 2, delay: '1s' },
];

const connections = [
  [0, 7], [7, 5], [5, 1], [1, 3], [3, 6], [6, 2], [2, 4], [4, 0]
];

const NodeGraph = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
    preserveAspectRatio="none"
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Connection Lines */}
    {connections.map(([startIdx, endIdx], i) => (
      <line
        key={`line-${i}`}
        x1={nodes[startIdx].x}
        y1={nodes[startIdx].y}
        x2={nodes[endIdx].x}
        y2={nodes[endIdx].y}
        stroke="#9DFFB0"
        strokeWidth="0.5"
        strokeDasharray="4 8"
        className="opacity-20 animate-drift"
      />
    ))}

    {/* Nodes */}
    {nodes.map((node) => (
      <g key={node.id} filter="url(#glow)">
        {/* Layered circles for glow depth */}
        <circle
          cx={node.x}
          cy={node.y}
          r={node.r * 2.5}
          fill="#9DFFB0"
          className="opacity-[0.05] animate-pulse-slow"
          style={{ animationDelay: node.delay }}
        />
        <circle
          cx={node.x}
          cy={node.y}
          r={node.r * 1.5}
          fill="#9DFFB0"
          className="opacity-[0.1] animate-pulse-slow"
          style={{ animationDelay: node.delay }}
        />
        <circle
          cx={node.x}
          cy={node.y}
          r={node.r}
          fill="#9DFFB0"
          className="opacity-40 animate-pulse-slow"
          style={{ animationDelay: node.delay }}
        />
        <text
          x={node.x}
          y={node.y}
          dx={node.r + 8}
          dy={node.r / 2}
          fill="#9DFFB0"
          className="font-[family-name:var(--font-space-mono)] text-[8px] uppercase tracking-[0.2em] opacity-40 select-none"
        >
          {node.id}
        </text>
      </g>
    ))}
  </svg>
);

interface HeroSectionProps {
  viewCount?: number;
}

export default function HeroSection({ viewCount = 0 }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen bg-[#030508] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Layer */}
      <NodeGraph />
      
      {/* Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle, transparent 20%, rgba(3, 5, 8, 0.8) 100%)' }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#9DFFB0] shadow-[0_0_10px_#9DFFB0]" />
          <span className="font-[family-name:var(--font-syne)] font-extrabold text-xl tracking-tighter text-[#E6F4F1]">
            AGENTHIRE
          </span>
        </div>
        
        <div className="flex gap-8">
          <Link href="#network" className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.2em] text-[#E6F4F1] opacity-40 hover:opacity-100 transition-opacity duration-300">Network</Link>
          <Link href="#pricing" className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.2em] text-[#E6F4F1] opacity-40 hover:opacity-100 transition-opacity duration-300">Pricing</Link>
          <Link href="/docs" className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.2em] text-[#E6F4F1] opacity-40 hover:opacity-100 transition-opacity duration-300">Docs</Link>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 text-center flex flex-col items-center max-w-5xl px-6">
        <span className="font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] text-[#9DFFB0] opacity-80 px-4 py-1 border border-[#9DFFB0]/20 rounded-full bg-[#030508]/50 inline-block mb-8">
          System Status: Fully Autonomous
        </span>

        <h1 
          className="font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] text-[#E6F4F1] mb-8 select-none"
          style={{ 
            textShadow: '0 0 10px rgba(230,244,241,0.3), 0 0 20px rgba(230,244,241,0.1), 0 0 40px rgba(157,255,176,0.1)' 
          }}
        >
          THE NETWORK<br />IS AWAKE
        </h1>

        <p className="font-[family-name:var(--font-manrope)] text-lg md:text-xl text-[#E6F4F1]/60 max-w-xl mb-12 leading-relaxed">
          Access the world&apos;s most advanced autonomous agent ecosystem. Deploy intelligence into the void with a single command.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#network" className="bg-[#9DFFB0] text-[#030508] font-[family-name:var(--font-manrope)] font-semibold px-12 py-5 rounded-sm text-sm uppercase tracking-widest animate-respiration hover:bg-[#E6F4F1] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(157,255,176,0.5)] transition-all duration-300 text-center">
            Hire an Agent
          </a>

          <a href="#countdown" className="border border-[#18332F] text-[#9DFFB0] bg-[#18332F]/20 backdrop-blur-sm px-12 py-5 rounded-sm text-sm uppercase tracking-widest hover:border-[#9DFFB0] hover:bg-[#18332F]/40 hover:text-[#E6F4F1] transition-all duration-300 text-center">
            View Network
          </a>
        </div>
      </main>

      {/* Bottom Labels */}
      <footer className="absolute bottom-8 w-full px-12 flex justify-between pointer-events-none z-10">
        <div className="font-[family-name:var(--font-space-mono)] text-[10px] opacity-20 uppercase tracking-[0.2em] leading-loose text-[#E6F4F1]">
          <div>Coord: 52.2297° N, 21.0122° E</div>
          <div>Status: Replicating</div>
          <div>Nodes Detected: {viewCount.toLocaleString()}</div>
        </div>

        <div className="font-[family-name:var(--font-space-mono)] text-[10px] opacity-20 uppercase tracking-[0.2em] text-right text-[#E6F4F1]">
          <div>v1.0.0-LIVING_VOID</div>
          <div>© 2026 WESA LABS</div>
        </div>
      </footer>
    </section>
  );
}