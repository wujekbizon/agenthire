'use client';

import { useEffect, useRef } from 'react';

const PHOSPHOR_RGB = '157,255,176';
const NUM_NODES = 18;
const CONNECTION_DISTANCE = 260;
const MAX_PACKETS = 14;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulsePhase: number;
  pulseSpeed: number;
  label: string;
  activationTimer: number;
  activationDuration: number;
  isActive: boolean;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function AgentNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
      nodes = Array.from({ length: NUM_NODES }, () => ({
        x: 60 + Math.random() * (canvas.width - 120),
        y: 60 + Math.random() * (canvas.height - 120),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.5 + Math.random() * 2.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.25 + Math.random() * 0.4,
        label: `AG-${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`,
        activationTimer: Math.floor(Math.random() * 300),
        activationDuration: 0,
        isActive: false,
      }));
    };

    const spawnPacket = (fromIdx: number) => {
      if (packets.length >= MAX_PACKETS) return;
      const candidates: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        if (i === fromIdx) continue;
        const dx = nodes[i].x - nodes[fromIdx].x;
        const dy = nodes[i].y - nodes[fromIdx].y;
        if (Math.sqrt(dx * dx + dy * dy) < CONNECTION_DISTANCE) {
          candidates.push(i);
        }
      }
      if (candidates.length === 0) return;
      const toIdx = candidates[Math.floor(Math.random() * candidates.length)];
      packets.push({ fromNode: fromIdx, toNode: toIdx, progress: 0, speed: 0.004 + Math.random() * 0.005 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${PHOSPHOR_RGB},${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update packets
      packets = packets.filter((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) return false;

        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;

        // Trail
        const trailProgress = Math.max(0, p.progress - 0.06);
        const tx = from.x + (to.x - from.x) * trailProgress;
        const ty = from.y + (to.y - from.y) * trailProgress;
        const trail = ctx.createLinearGradient(tx, ty, x, y);
        trail.addColorStop(0, `rgba(${PHOSPHOR_RGB},0)`);
        trail.addColorStop(1, `rgba(${PHOSPHOR_RGB},0.4)`);
        ctx.beginPath();
        ctx.strokeStyle = trail;
        ctx.lineWidth = 1.5;
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();

        // Packet glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8);
        glow.addColorStop(0, `rgba(${PHOSPHOR_RGB},0.8)`);
        glow.addColorStop(1, `rgba(${PHOSPHOR_RGB},0)`);
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Packet core
        ctx.beginPath();
        ctx.fillStyle = `rgba(${PHOSPHOR_RGB},1)`;
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Drift
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 50 || node.x > canvas.width - 50) node.vx *= -1;
        if (node.y < 50 || node.y > canvas.height - 50) node.vy *= -1;

        // Mouse attraction
        const mdx = mouseRef.current.x - node.x;
        const mdy = mouseRef.current.y - node.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180 && mdist > 0) {
          node.x += (mdx / mdist) * 0.4;
          node.y += (mdy / mdist) * 0.4;
        }

        // Pulse
        node.pulsePhase += node.pulseSpeed * 0.012;
        const pulse = (Math.sin(node.pulsePhase) + 1) / 2;

        // Activation cycle
        node.activationTimer--;
        if (node.activationTimer <= 0) {
          node.isActive = true;
          node.activationDuration = 45;
          node.activationTimer = 180 + Math.floor(Math.random() * 380);
          spawnPacket(i);
        }
        if (node.activationDuration > 0) {
          node.activationDuration--;
          if (node.activationDuration === 0) node.isActive = false;
        }

        const boost = node.isActive ? 2.2 : 1;
        const baseOpacity = node.isActive ? 0.9 : 0.35 + pulse * 0.3;

        // Outer halo
        const haloR = node.r * (5 + pulse * 3) * (node.isActive ? 1.8 : 1);
        const halo = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, haloR);
        halo.addColorStop(0, `rgba(${PHOSPHOR_RGB},${(0.04 + pulse * 0.04) * boost})`);
        halo.addColorStop(1, `rgba(${PHOSPHOR_RGB},0)`);
        ctx.beginPath();
        ctx.fillStyle = halo;
        ctx.arc(node.x, node.y, haloR, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow
        const innerR = node.r * (2 + pulse * 0.8);
        const inner = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, innerR * 2.5);
        inner.addColorStop(0, `rgba(${PHOSPHOR_RGB},${(0.18 + pulse * 0.15) * boost})`);
        inner.addColorStop(1, `rgba(${PHOSPHOR_RGB},0)`);
        ctx.beginPath();
        ctx.fillStyle = inner;
        ctx.arc(node.x, node.y, innerR * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${PHOSPHOR_RGB},${baseOpacity})`;
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.font = '7px monospace';
        ctx.fillStyle = `rgba(${PHOSPHOR_RGB},${0.18 + pulse * 0.1})`;
        ctx.fillText(node.label, node.x + node.r + 6, node.y + 3);
      }

      animFrameId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    animFrameId = requestAnimationFrame(draw);

    const handleResize = () => { resize(); initNodes(); };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
}
