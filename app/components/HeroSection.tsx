import AgentNetworkCanvas from './AgentNetworkCanvas'
import NavBar from './NavBar'

interface HeroSectionProps {
  viewCount?: number
}

export default function HeroSection({ viewCount = 0 }: HeroSectionProps) {
  return (
    <section className='relative w-full h-screen bg-[#030508] overflow-hidden flex flex-col items-center justify-center'>
      <AgentNetworkCanvas />
      <div
        className='absolute inset-0 pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(circle, transparent 20%, rgba(3, 5, 8, 0.8) 100%)'
        }}
      />
      <NavBar />
      <main className='relative z-10 text-center flex flex-col items-center max-w-5xl px-6'>
        <h1
          className='font-[family-name:var(--font-syne)] font-extrabold text-[clamp(2.5rem,10vw,7rem)] leading-[0.9] text-[#E6F4F1] mb-8 select-none'
          style={{
            textShadow:
              '0 0 10px rgba(230,244,241,0.3), 0 0 20px rgba(230,244,241,0.1), 0 0 40px rgba(157,255,176,0.1)'
          }}
        >
          THE NETWORK
          <br />
          IS AWAKE
        </h1>

        <p className='font-[family-name:var(--font-manrope)] text-lg md:text-xl text-[#E6F4F1]/60 max-w-xl mb-12 leading-relaxed'>
          We ran nine specialized agents in production for six months.
          753 real tasks completed — zero demos. Now the network is open.
        </p>

        <div className='flex flex-col sm:flex-row gap-6'>
          <a
            href='#network'
            className='bg-[#9DFFB0] text-[#030508] font-[family-name:var(--font-manrope)] font-semibold px-12 py-5 rounded-sm text-sm uppercase tracking-widest animate-respiration hover:bg-[#E6F4F1] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(157,255,176,0.5)] transition-all duration-300 text-center'
          >
            Hire an Agent
          </a>

          <a
            href='#countdown'
            className='border border-[#18332F] text-[#9DFFB0] bg-[#18332F]/20 backdrop-blur-sm px-12 py-5 rounded-sm text-sm uppercase tracking-widest hover:border-[#9DFFB0] hover:bg-[#18332F]/40 hover:text-[#E6F4F1] transition-all duration-300 text-center'
          >
            View Network
          </a>
        </div>
      </main>
    </section>
  )
}