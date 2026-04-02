"use client";

import { useEffect, useRef } from "react";

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resizeCanvas);

    interface Particle {
      update: () => void;
      draw: () => void;
      x: number;
      y: number;
    }

    const createParticle = (): Particle => {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let baseX = x;
      let baseY = y;
      const size = Math.random() * 2 + 0.5;
      const density = (Math.random() * 30) + 5;
      const colors = ["#7c3aed", "#ec4899", "#f97316", "#2dd4bf"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;

      return {
        update() {
          // Cosmic drifting
          x += speedX;
          y += speedY;
          baseX += speedX;
          baseY += speedY;

          // Wrap edges
          if (x < 0) { x = canvas.width; baseX = x; }
          if (x > canvas.width) { x = 0; baseX = x; }
          if (y < 0) { y = canvas.height; baseY = y; }
          if (y > canvas.height) { y = 0; baseY = y; }

          // Cursor interaction dodge
          let dx = mouse.x - x;
          let dy = mouse.y - y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirX = dx / distance;
            let forceDirY = dy / distance;
            let force = (mouse.radius - distance) / mouse.radius;
            let dirX = forceDirX * force * density;
            let dirY = forceDirY * force * density;
            
            x -= dirX;
            y -= dirY;
          } else {
            if (x !== baseX) {
              x -= (x - baseX) / 20;
            }
            if (y !== baseY) {
              y -= (y - baseY) / 20;
            }
          }
        },
        draw() {
          if (!ctx) return;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
        },
        get x() { return x; },
        get y() { return y; }
      };
    };

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 30000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 12000) {
            const opacityValue = 1 - (distance / 12000);
            ctx!.strokeStyle = `rgba(124, 58, 237, ${opacityValue * 0.3})`;
            ctx!.lineWidth = 1.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    };

    // First init before loop
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 mix-blend-screen"
    />
  );
}
