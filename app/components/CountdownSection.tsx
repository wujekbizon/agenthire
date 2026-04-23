'use client'

import React, { useState, useEffect } from 'react'

const START_DATE = new Date('2026-04-23T00:00:00Z').getTime()
const TARGET_DATE = new Date('2026-10-15T00:00:00Z').getTime()

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  fillPercent: number
}

function calculateTime(): TimeLeft {
  const now = Date.now()
  const remaining = Math.max(0, TARGET_DATE - now)
  const totalDuration = TARGET_DATE - START_DATE
  const elapsed = now - START_DATE

  return {
    days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((remaining % (1000 * 60)) / 1000),
    fillPercent: Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))
  }
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(calculateTime())

    const intervalId = setInterval(() => {
      setTimeLeft(calculateTime())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const padDays = (n: number) => String(n).padStart(3, '0')
  const pad = (n: number) => String(n).padStart(2, '0')

  const displayString = timeLeft
    ? `${padDays(timeLeft.days)} : ${pad(timeLeft.hours)} : ${pad(timeLeft.minutes)} : ${pad(timeLeft.seconds)}`
    : '000 : 00 : 00 : 00'

  const fillPercent = timeLeft?.fillPercent ?? 0

  return (
    <section
      id='countdown'
      className='min-h-screen bg-[#030508] flex flex-col items-center justify-center relative overflow-hidden py-12'
    >
      <span className='font-[family-name:var(--font-space-mono)] text-xs text-[#9DFFB0] tracking-[0.3em] mb-16 opacity-60 uppercase'>
        Network Activation In
      </span>
      <div className='relative w-fit mx-auto flex flex-col items-center px-8'>
        <div className='relative w-full min-h-[1.2em] flex items-center justify-center overflow-hidden'>
          <div
            className='font-[family-name:var(--font-syne)] font-black text-[#9DFFB0] opacity-[0.07] leading-none whitespace-nowrap select-none'
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 7rem)',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            {displayString}
          </div>
          <div
            className='absolute inset-0 flex items-center justify-center font-[family-name:var(--font-syne)] font-black text-[#9DFFB0] leading-none whitespace-nowrap select-none transition-[clip-path] duration-[150ms] linear'
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 7rem)',
              fontVariantNumeric: 'tabular-nums',
              textShadow:
                '0 0 20px rgba(157,255,176,0.5), 0 0 40px rgba(157,255,176,0.2)',
              clipPath: `inset(0 ${100 - fillPercent}% 0 0)`
            }}
          >
            {displayString}
          </div>
          <div
            className='absolute top-0 bottom-0 w-[2px] bg-[#9DFFB0] z-20 transition-[left] duration-[150ms] linear'
            style={{ left: `${fillPercent}%` }}
          >
            <div className='absolute inset-0 shadow-[0_0_8px_#9DFFB0]' />
            {/* Flare */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-full bg-[#9DFFB0]/10 blur-xl' />
          </div>
        </div>
        <div className='w-full flex justify-between mt-6 px-2 opacity-30'>
          <div className='flex-1 text-center font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] text-[#E6F4F1]'>
            Days
          </div>
          <div className='flex-1 text-center font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] text-[#E6F4F1]'>
            Hours
          </div>
          <div className='flex-1 text-center font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] text-[#E6F4F1]'>
            Minutes
          </div>
          <div className='flex-1 text-center font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.4em] text-[#E6F4F1]'>
            Seconds
          </div>
        </div>
      </div>
      <p className='font-[family-name:var(--font-manrope)] text-sm text-[#E6F4F1]/40 tracking-wider uppercase mt-12 text-center px-6'>
        The network is building. Every agent hired is a node activated.
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9DFFB0]/20 to-transparent' />
    </section>
  )
}