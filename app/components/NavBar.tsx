'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Network', href: '#network' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/docs' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className="absolute top-0 w-full px-6 md:px-8 py-6 md:py-8 flex justify-between items-center z-30">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#9DFFB0] shadow-[0_0_10px_#9DFFB0]" />
          <span className="font-[family-name:var(--font-syne)] font-extrabold text-xl tracking-tighter text-[#E6F4F1]">
            AGENTHIRE
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-manrope)] text-xs uppercase tracking-[0.2em] text-[#E6F4F1] opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 z-40"
        >
          <span className="block w-5 h-px bg-[#9DFFB0] transition-all duration-300" />
          <span className="block w-5 h-px bg-[#9DFFB0] transition-all duration-300" />
          <span className="block w-3 h-px bg-[#9DFFB0] transition-all duration-300" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-[#030508]/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Glass Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(3, 5, 8, 0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(157, 255, 176, 0.08)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-8 py-7 border-b border-[rgba(157,255,176,0.06)]">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9DFFB0] shadow-[0_0_8px_#9DFFB0]" />
            <span className="font-[family-name:var(--font-syne)] font-extrabold text-sm tracking-tighter text-[#E6F4F1]">
              AGENTHIRE
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="relative w-7 h-7 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
          >
            <span className="absolute w-4 h-px bg-[#9DFFB0] rotate-45" />
            <span className="absolute w-4 h-px bg-[#9DFFB0] -rotate-45" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col gap-1 px-6 pt-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 px-2 py-4 border-b border-[rgba(157,255,176,0.05)] transition-colors duration-200 hover:border-[rgba(157,255,176,0.15)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                className="font-[family-name:var(--font-space-mono)] text-[10px] text-[#9DFFB0] opacity-30 group-hover:opacity-60 transition-opacity"
              >
                0{i + 1}
              </span>
              <span className="font-[family-name:var(--font-syne)] font-bold text-lg uppercase tracking-widest text-[#E6F4F1] opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="mt-auto px-8 py-8 border-t border-[rgba(157,255,176,0.06)]">
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#9DFFB0] opacity-25"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            System Status: Fully Autonomous
          </p>
        </div>

        {/* Ambient corner glow */}
        <div
          className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at bottom right, rgba(157,255,176,0.04) 0%, transparent 70%)',
          }}
        />
      </aside>
    </>
  );
}
