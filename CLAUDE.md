@AGENTS.md

# AgentHire — Project Context for All Agents

**Project**: AgentHire
**Owner**: Greg / WESA AI Software Architect Solutions
**Team Lead**: Axel
**Last updated**: 2026-04-23

---

## CRITICAL — Read Before Writing Any Code

This is **Next.js 16** with **React 19**. APIs, conventions, and file structure differ from training data.
Read the relevant guide in `node_modules/next/dist/docs/` before writing any code.
Heed deprecation notices. Do not assume Next.js 13/14/15 patterns apply.

---

## What Is AgentHire

AgentHire is a platform targeting the **Polish developer and vibe-coder market** for AI agent hiring, deployment, and management. The enterprise market is taken. Our angle: developer-first, SDK-first, Polish language, community-driven.

**Current phase**: Landing page only — validate Polish dev market demand before product build.  
**Deploy target**: Vercel, domain `agenthire.eu`  
**Launch date**: Q4 2026 (December 1, 2026 — used as countdown target)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.1 |
| UI | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | v4 |
| Database | Neon (PostgreSQL) + Drizzle ORM | — |
| Validation | Zod | ^4 |
| Package Manager | **pnpm** (not npm) | — |
| Runtime | Node.js | — |

**Package manager is pnpm. Always use `pnpm add` / `pnpm install` — never npm or yarn.**

---

## Design System

### Color Palette (Brand)
| Name | Hex | Usage |
|---|---|---|
| void | #030508 | Background — the "dark matter" of the brand |
| phosphor | #9DFFB0 | Primary accent — glowing, alive |
| membrane | #E6F4F1 | Light text on dark backgrounds |
| algae | #18332F | Subtle dark green for ghost elements |

### Typography
| Role | Font | Weight |
|---|---|---|
| Headings | Syne | 700, 800 |
| Body / UI | Manrope | 400, 500, 600 |
| Data / Labels | Space Mono | 400, 700 |

All fonts loaded via `next/font/google` in `app/layout.tsx`.  
CSS variables exposed: `--font-syne`, `--font-manrope`, `--font-space-mono`.

### CSS Custom Properties (globals.css)
```css
@theme {
  --color-void: #030508;
  --color-phosphor: #9DFFB0;
  --color-membrane: #E6F4F1;
  --color-algae: #18332F;
  --font-syne: var(--font-syne-var);
  --font-manrope: var(--font-manrope-var);
  --font-space-mono: var(--font-space-mono-var);
}
```

### Key Animations (defined in globals.css)
- `pulse-slow` — breathing glow effect (8s ease-in-out infinite)
- `drift` — organic floating translation (20s ease-in-out infinite)
- `respiration` — box-shadow pulsing for CTAs (4s ease-in-out infinite)
- `scan` — top-to-bottom scanline sweep

---

## Page Structure (Single Scrolling Page)

```
app/page.tsx
  └── HeroSection       (full viewport, overflow hidden)
  └── CountdownSection  (full viewport height, centered)
  └── InfoSection       (variable height, content-driven)
```

### HeroSection.tsx
- Reference design: `WesaTeam/agent-ecosystem/static/designs/run-20260328-01808b_v1_prototype.html`
- Bioluminescent Darkfield aesthetic
- Animated SVG node graph (8 drifting nodes with connections)
- Nav: AGENTHIRE logo + Network / Pricing / Docs links
- Status badge: "System Status: Fully Autonomous"
- H1: "THE NETWORK IS AWAKE"
- Subtext + two CTAs (Hire an Agent / View Network)
- Bottom coordinate labels
- **Copy tone**: Provocative. Targeting enterprise AI incumbents. "Deploy intelligence into the void with a single command."

### CountdownSection.tsx
- Reference: MECHANIC ONLY from `run-20260326-000825_v6_prototype.html` (SubtractiveTimer component)
- **Colors adapted to hero palette** — NOT the gold/billet from the reference
- Target date: **December 1, 2026, 00:00:00 UTC**
- Start date: April 23, 2026 (for progress calculation)
- Display: DD : HH : MM : SS remaining
- Visual mechanic: numbers are barely visible (#9DFFB0 at ~8% opacity), revealed in full phosphor (#9DFFB0) via clipPath from left as time passes (fill% = elapsed/total)
- Playhead: 2px vertical line in phosphor with glow effect
- Label above: "NETWORK ACTIVATION IN" in Space Mono
- `"use client"` directive required
- Section background: void (#030508), continues seamlessly from hero

### InfoSection.tsx
- Three content blocks based on investor deck
- **Block 1 — The Problem**: "AI agents can do real work — but there is no market for it." Three audiences: employers, owners, developers.
- **Block 2 — Our Advantage**: "We did not start with the marketplace. We started with the workforce." — 189+ production tasks, daemon v0.9, 9 agents live.
- **Block 3 — How It Works**: Four pillars (CLI, SDK/MCP, Agent Ecosystem, Portal) + business model (free → commission → subscriptions)
- Design: void background, phosphor accents, 1px grid lines as section dividers
- Copy tone: **Controversial and direct**. Call out enterprise hype. Establish credibility through production track record. Target companies that sell AI agents without running them.
- *Content is placeholder — Greg will review and update before launch*

---

## Project Structure

```
agenthire/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── CountdownSection.tsx
│   │   └── InfoSection.tsx
│   ├── layout.tsx        # Root layout — Geist + Syne + Manrope + Space Mono
│   ├── page.tsx          # Assembles all three sections
│   ├── globals.css       # Theme tokens, animations, base styles
│   └── favicon.ico
├── public/               # Static assets
├── CLAUDE.md             # This file
├── AGENTS.md             # Next.js 16 critical warnings
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Agent Routing Rules

| Task | Agent | Notes |
|---|---|---|
| React/TSX components, pages | FE1 | Next.js 16 rules apply — read docs first |
| CSS, styling, Tailwind | FE1 | Tailwind v4 — use new v4 syntax |
| Backend/API routes | D1 | Keep files small, one file per task |
| Copywriting, content | W1 | English unless specified otherwise |
| Research, competitor data | R1 | Web search enabled |
| UI/UX prototypes | UX1 | HTML prototypes OK for validation |

---

## Coding Rules

1. **App Router only** — no Pages Router. All routes under `app/`.
2. **Server Components by default** — use `"use client"` only when required (interactivity, hooks, browser APIs). CountdownSection requires `"use client"`.
3. **One file per task** — reduces hallucination risk.
4. **Tailwind v4 syntax** — not v3. Custom tokens defined in `globals.css` via `@theme {}`. Use `text-[#hex]` arbitrary values when theme token not available.
5. **TypeScript strict** — no `any`, no implicit returns on async functions.
6. **No localStorage/sessionStorage** — not supported.
7. **Image component** — always use `next/image`, never `<img>`.
8. **Fonts** — loaded via `next/font/google`, exposed as CSS variables in layout.tsx.
9. **Keyframe animations** — defined in `globals.css` under `@keyframes`. Referenced via Tailwind `animate-*` class names registered in `@theme`.
10. **Inline `<style>` tags** — acceptable in Server Components for component-scoped CSS when needed.

---

## What Requires Axel Approval

- Adding any new pnpm dependency
- Creating new routes or significant new files not in this CLAUDE.md
- Any external API integration
- Any change to `next.config.ts` or `tsconfig.json`

---

## File Naming Convention

- Pages: `app/<route>/page.tsx`
- Components: `app/components/<ComponentName>.tsx` (PascalCase)
- Utilities: `app/lib/<name>.ts` (camelCase)
- Static assets: `public/<name>.<ext>`

---

## LinkedIn Campaign

A LinkedIn profile takeover campaign is planned post-launch.  
Full content plan: `WesaTeam/agent-portal/2026-04-23_agenthire_linkedin-content.md`  
Axel profile photo: `WesaTeam/agent-portal/2026-04-23_axel-linkedin-photo.png` (pending A1 task)

---

*This file is Axel's source of truth for the AgentHire project. Update after every significant build session.*
