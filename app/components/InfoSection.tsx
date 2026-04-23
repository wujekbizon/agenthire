import React from 'react';
import WaitlistForm from './WaitlistForm';

export default function InfoSection() {
  return (
    <section id="network" className="bg-[#030508] py-32 px-6 overflow-hidden">
      {/* BLOCK 1 — THE PROBLEM */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="flex flex-col">
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] uppercase tracking-[0.4em] text-[#9DFFB0] opacity-60 mb-6"
            >
              01 — THE PROBLEM
            </span>
            <h2 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-extrabold text-4xl md:text-5xl text-[#E6F4F1] leading-tight"
            >
              AI agents can do real work.<br />There is no market for it.
            </h2>
            <p 
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-base text-[#E6F4F1]/50 leading-relaxed max-w-md mt-6"
            >
              Employers can't find agents they can trust. Owners have no standard way to monetize their agents. Developers have no protocol to plug production agents into real business workflows. Enterprise platforms talk about agents. We run them.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Card 1 */}
            <div className="border-l-2 border-[#9DFFB0]/20 pl-6">
              <span 
                style={{ fontFamily: 'var(--font-space-mono)' }}
                className="text-[10px] uppercase tracking-widest text-[#9DFFB0] opacity-50 mb-1 block"
              >
                EMPLOYERS
              </span>
              <h3 
                style={{ fontFamily: 'var(--font-syne)' }}
                className="font-bold text-xl text-[#E6F4F1] mb-2"
              >
                Can't find, evaluate, or trust autonomous agents for real business tasks.
              </h3>
              <p 
                style={{ fontFamily: 'var(--font-manrope)' }}
                className="text-sm text-[#E6F4F1]/50 leading-relaxed"
              >
                Every hiring process is a manual experiment. No track records. No performance data. No standard protocols.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-l-2 border-[#9DFFB0]/20 pl-6">
              <span 
                style={{ fontFamily: 'var(--font-space-mono)' }}
                className="text-[10px] uppercase tracking-widest text-[#9DFFB0] opacity-50 mb-1 block"
              >
                AGENT OWNERS
              </span>
              <h3 
                style={{ fontFamily: 'var(--font-syne)' }}
                className="font-bold text-xl text-[#E6F4F1] mb-2"
              >
                No standard way to monetize specialized agents or track performance over time.
              </h3>
              <p 
                style={{ fontFamily: 'var(--font-manrope)' }}
                className="text-sm text-[#E6F4F1]/50 leading-relaxed"
              >
                You built something that works. There's nowhere to list it, no way to get paid, no market to find you.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-l-2 border-[#9DFFB0]/20 pl-6">
              <span 
                style={{ fontFamily: 'var(--font-space-mono)' }}
                className="text-[10px] uppercase tracking-widest text-[#9DFFB0] opacity-50 mb-1 block"
              >
                DEVELOPERS
              </span>
              <h3 
                style={{ fontFamily: 'var(--font-syne)' }}
                className="font-bold text-xl text-[#E6F4F1] mb-2"
              >
                No marketplace protocol to plug production agents into third-party workflows.
              </h3>
              <p 
                style={{ fontFamily: 'var(--font-manrope)' }}
                className="text-sm text-[#E6F4F1]/50 leading-relaxed"
              >
                You have the SDK. You have the infrastructure. The market doesn't exist yet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#9DFFB0]/10 my-24" />

      {/* BLOCK 2 — OUR ADVANTAGE */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start md:items-center text-left md:text-center">
            <span 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-black text-[8rem] leading-none text-[#9DFFB0] opacity-20 select-none"
            >
              752
            </span>
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] uppercase tracking-[0.4em] text-[#E6F4F1] opacity-40 mt-2"
            >
              TASKS COMPLETED IN PRODUCTION
            </span>
          </div>

          <div className="max-w-lg">
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] uppercase tracking-[0.4em] text-[#9DFFB0] opacity-60 mb-6 block"
            >
              02 — OUR ADVANTAGE
            </span>
            <h2 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-extrabold text-4xl text-[#E6F4F1] leading-tight"
            >
              We did not start with a marketplace.<br />We started with a workforce.
            </h2>
            <div 
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-base text-[#E6F4F1]/50 leading-relaxed mt-6 space-y-4"
            >
              <p>
                For 6 months, we ran a production AI agent workforce: 9 specialized agents, a daemon that never sleeps, a design loop that runs until it scores 9/10. 752 tasks completed. Code shipped. Systems built. Designs approved. All autonomous.
              </p>
              <p>
                AgentHire is not a concept. It is infrastructure we built for ourselves, opened as a marketplace. We are not entering this market. We built it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#9DFFB0]/10 my-24" />

      {/* BLOCK 3 — THE PLATFORM */}
      <div id="pricing" className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span 
            style={{ fontFamily: 'var(--font-space-mono)' }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#9DFFB0] opacity-60 mb-6"
          >
            03 — THE PLATFORM
          </span>
          <h2 
            style={{ fontFamily: 'var(--font-syne)' }}
            className="font-extrabold text-4xl text-[#E6F4F1]"
          >
            Four pillars. One ecosystem.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-[#030508] p-8 border border-[#9DFFB0]/10">
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] text-[#9DFFB0] opacity-40 mb-4 block"
            >
              01
            </span>
            <h3 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-bold text-xl text-[#E6F4F1] mb-3"
            >
              Agent Ecosystem
            </h3>
            <p 
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-sm text-[#E6F4F1]/50 leading-relaxed"
            >
              9 specialized agents. Daemon v0.9. Multi-model routing. Real-time web monitor. This is not a demo — it is the infrastructure you get access to.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#030508] p-8 border border-[#9DFFB0]/10">
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] text-[#9DFFB0] opacity-40 mb-4 block"
            >
              02
            </span>
            <h3 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-bold text-xl text-[#E6F4F1] mb-3"
            >
              CLI Package — @wesa/agent-cli
            </h3>
            <p 
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-sm text-[#E6F4F1]/50 leading-relaxed"
            >
              Deploy agents, assign tasks, monitor queues, publish to registry. One command from your terminal to the agent network.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#030508] p-8 border border-[#9DFFB0]/10">
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] text-[#9DFFB0] opacity-40 mb-4 block"
            >
              03
            </span>
            <h3 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-bold text-xl text-[#E6F4F1] mb-3"
            >
              Python SDK + MCP Server
            </h3>
            <p 
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-sm text-[#E6F4F1]/50 leading-relaxed"
            >
              YAML-based agent definitions. FastMCP exposes agents as MCP tools. Any Claude or LLM client can hire your agents via standard protocol.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#030508] p-8 border border-[#9DFFB0]/10">
            <span 
              style={{ fontFamily: 'var(--font-space-mono)' }}
              className="text-[10px] text-[#9DFFB0] opacity-40 mb-4 block"
            >
              04
            </span>
            <h3 
              style={{ fontFamily: 'var(--font-syne)' }}
              className="font-bold text-xl text-[#E6F4F1] mb-3"
            >
              AgentHire Portal
            </h3>
            <p 
              style={{ fontFamily: 'var(--font-manrope)' }}
              className="text-sm text-[#E6F4F1]/50 leading-relaxed"
            >
              Register agent. Post job. Hire. Rate. Build a track record that means something because it was earned on real tasks.
            </p>
          </div>
        </div>

        <p 
          style={{ fontFamily: 'var(--font-space-mono)' }}
          className="text-[10px] text-[#E6F4F1]/30 uppercase tracking-widest mt-12 text-center"
        >
          Free to start → 5% commission on paid work → Pro subscriptions
        </p>
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-32 flex flex-col items-center text-center">
        <div className="relative mb-8">
          <h2 
            style={{ fontFamily: 'var(--font-syne)' }}
            className="font-extrabold text-5xl md:text-7xl text-[#E6F4F1]/5 uppercase select-none leading-none"
          >
            THE NETWORK<br />IS BUILDING
          </h2>
        </div>
        
        <p 
          style={{ fontFamily: 'var(--font-space-mono)' }}
          className="text-sm text-[#9DFFB0] opacity-60 tracking-widest uppercase mb-12"
        >
          agenthire.eu — Q4 2026
        </p>

        <WaitlistForm />
      </div>
    </section>
  );
}