"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const typewriterLines = [
  "Software Engineer",
  "AI Engineer",
  "Full Stack Developer"
];

export default function Hero() {
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 60;
    const currentLine = typewriterLines[currentLineIdx];

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentLine) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentLineIdx((prev) => (prev + 1) % typewriterLines.length);
      } else {
        setTypedText(
          currentLine.substring(0, typedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentLineIdx]);

  return (
    <section className="relative flex flex-col justify-center pt-28 lg:pt-36 pb-4 overflow-hidden" id="about-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-4 md:gap-6 w-full"
          >
            <div className="flex flex-col gap-3 max-w-2xl w-full">
              <h1 className="font-sans text-[clamp(2rem,4vw,3.8rem)] text-white font-black leading-[1.1] tracking-tight">
                Hey !! Welcome 👋 I am <br />
                <span className="text-gradient inline-block mt-1">Naveen Kumar C</span>
              </h1>
              <p className="font-sans text-base sm:text-lg lg:text-xl text-gray-300 font-medium leading-relaxed mt-1">
                I turn ideas into real products, Building impactful digital products with code and creativity.
              </p>
            </div>

            <div className="font-mono text-(--color-pink) text-base md:text-lg h-6 font-semibold">
              {`> `}{typedText}
              <span className="w-2 inline-block h-4 bg-(--color-pink) ml-1 animate-[blink_1s_infinite] align-middle" />
            </div>

            <div className="flex gap-4 mt-4">
              {[
                { icon: Github, href: "https://github.com/NAVEEN-KUMAR-C-1420", color: "#6b7280" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/naveen-kumar-1420c/", color: "#0ea5e9" },
                { icon: Code2, href: "https://leetcode.com/u/ObJQzoDJbs/", color: "#f5a623" },
                { icon: Mail, href: "mailto:naveensiddhu52@gmail.com", color: "#ec4899" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive w-10 h-10 rounded lg flex items-center justify-center bg-[#111827] border border-gray-800 transition-all hover:-translate-y-1 group"
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.boxShadow = `0 0 15px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1f2937";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <social.icon strokeWidth={1.5} className="w-5 h-5 text-gray-400 group-hover:text-(--hover-color) transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="interactive px-6 py-3 bg-(--grad) text-white font-sans font-bold tracking-widest text-sm rounded transition-transform hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
              >
                VIEW MY WORK →
              </a>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="interactive border-gradient px-6 py-3 text-white font-sans font-bold tracking-widest text-sm transition-transform hover:scale-105 bg-transparent"
              >
                DOWNLOAD RESUME
              </a>
            </div>

            <div className="flex gap-4 md:gap-8 mt-6">
              {[
                { n: "8+", l: "Projects Built" },
                { n: "2", l: "Patents" },
                { n: "36h", l: "Hackathon" },
                { n: "8.73", l: "CGPA" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-sans font-bold text-xl lg:text-2xl text-gradient">{stat.n}</span>
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider uppercase mt-1">{stat.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - CARTOON SCENE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full min-h-75 flex items-center justify-center relative pointer-events-none"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 max-w-120 max-h-120 m-auto bg-teal-400/5 rounded-full blur-[80px]" />

            <svg viewBox="0 0 480 480" className="w-full max-w-120 h-auto drop-shadow-2xl -translate-y-12 lg:-translate-y-20">
              {/* Lamp Container (Swinging) */}
              <g className="origin-top animate-[sway_4s_ease-in-out_infinite]">
                <line x1="240" y1="0" x2="240" y2="80" stroke="#374151" strokeWidth="3" />
                <path d="M 220 80 L 260 80 L 270 110 L 210 110 Z" fill="#4b5563" />
                <path d="M 230 110 Q 240 120 250 110 Z" fill="#fef08a" />
                {/* Light Cone */}
                <path d="M 225 110 L 255 110 L 400 480 L 80 480 Z" fill="url(#lightGradient)" opacity="0.3" pointerEvents="none" />
              </g>

              {/* Character Floating Wrap */}
              <g className="origin-center animate-[float_3.5s_ease-in-out_infinite]">
                {/* Body */}
                <path d="M 210 320 C 210 270, 270 270, 270 320 L 280 380 L 200 380 Z" fill="#8b5cf6" />
                <path d="M 205 320 L 275 320 L 265 380 L 215 380 Z" fill="#4c1d95" opacity="0.4" />

                {/* Head dynamically turning towards cursor */}
                <g className="origin-[240px_245px]" style={{ transform: `rotate(${mousePos.x * 6}deg)` }}>
                  {/* Hair back */}
                  <path d="M 195 245 C 190 200, 220 180, 240 180 C 260 180, 290 200, 285 245 L 295 220 L 275 190 L 260 170 L 240 160 L 220 170 L 205 190 L 185 220 Z" fill="#1f2937" />
                  
                  {/* Face base */}
                  <circle cx="240" cy="245" r="45" fill="#fcd34d" style={{ transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)` }} />
                  
                  {/* Facial Features Group */}
                  <g style={{ transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)` }}>
                    {/* Glasses */}
                    <g>
                      <circle cx="220" cy="240" r="14" fill="white" stroke="#374151" strokeWidth="3" />
                      <circle cx="260" cy="240" r="14" fill="white" stroke="#374151" strokeWidth="3" />
                      <line x1="234" y1="240" x2="246" y2="240" stroke="#374151" strokeWidth="3" />
                      {/* Thunder Pupils */}
                      <g style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)` }}>
                        {/* Glow */}
                        <polygon points="222,234 216,241 220,241 218,247 225,239 221,239" fill="#fef08a" opacity="0.5" transform="scale(1.2)" style={{ transformOrigin: "220px 240px" }} />
                        <polygon points="262,234 256,241 260,241 258,247 265,239 261,239" fill="#fef08a" opacity="0.5" transform="scale(1.2)" style={{ transformOrigin: "260px 240px" }} />
                        {/* Bolt */}
                        <polygon points="222,234 216,241 220,241 218,247 225,239 221,239" fill="#facc15" />
                        <polygon points="262,234 256,241 260,241 258,247 265,239 261,239" fill="#facc15" />
                      </g>
                      {/* Sheen/Lightning reflection */}
                      <path d="M 214 234 L 222 234 L 220 240 L 226 240 L 218 248 L 220 242 L 214 242 Z" fill="#60a5fa" opacity="0.8" />
                      <path d="M 254 234 L 262 234 L 260 240 L 266 240 L 258 248 L 260 242 L 254 242 Z" fill="#60a5fa" opacity="0.8" />
                    </g>
                    {/* Smile */}
                    <path d="M 233 265 C 238 270, 242 270, 247 265" stroke="#92400e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </g>
                </g>

                {/* Left Arm Fixed */}
                <g className="origin-[220px_320px]">
                  <path d="M 215 320 Q 180 340 190 360" fill="none" stroke="#fcd34d" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 215 320 Q 180 340 190 360" fill="none" stroke="#8b5cf6" strokeWidth="16" strokeLinecap="round" opacity="0.8" />
                </g>

                {/* Right Arm Fixed */}
                <g className="origin-[260px_320px]">
                  <path d="M 265 320 Q 300 340 290 360" fill="none" stroke="#fcd34d" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 265 320 Q 300 340 290 360" fill="none" stroke="#8b5cf6" strokeWidth="16" strokeLinecap="round" opacity="0.8" />
                </g>
              </g>

              {/* Desk */}
              <g transform="translate(-15, 380)">
                <rect x="70" y="0" width="370" height="15" rx="5" fill="#92400e" />
                <rect x="70" y="15" width="370" height="5" fill="#78350f" />
                <rect x="110" y="20" width="12" height="80" rx="3" fill="#3f1a04" />
                <rect x="358" y="20" width="12" height="80" rx="3" fill="#3f1a04" />
              </g>

              {/* Laptop */}
              <g transform="translate(160, 312) rotate(-3)">
                <path d="M 20 75 L 100 75 L 110 80 L 10 80 Z" fill="#6b7280" />
                <rect x="25" y="30" width="70" height="45" rx="2" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
                {/* Screen Glow */}
                <rect x="27" y="32" width="66" height="41" fill="url(#screenGradient)" opacity="0.2" className="animate-pulse" />
                {/* Code Lines */}
                <line x1="32" y1="40" x2="60" y2="40" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" className="animate-[codePulse_1s_infinite]" />
                <line x1="32" y1="46" x2="80" y2="46" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" className="animate-[codePulse_1.2s_infinite]" />
                <line x1="32" y1="52" x2="50" y2="52" stroke="#f97316" strokeWidth="2" strokeLinecap="round" className="animate-[codePulse_1.5s_infinite]" />
                <line x1="32" y1="58" x2="70" y2="58" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" className="animate-[codePulse_0.8s_infinite]" />
              </g>

              {/* Coffee Cup */}
              <g transform="translate(90, 345)">
                <path d="M 10 35 L 30 35 L 35 15 L 5 15 Z" fill="#f3f4f6" />
                <path d="M 30 20 Q 40 20, 35 28" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                {/* Steam */}
                <path d="M 15 10 Q 10 0, 20 -10 T 15 -20" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" className="animate-[steam_2s_infinite_ease-out]" />
                <path d="M 25 8 Q 20 -5, 30 -15 T 25 -25" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" className="animate-[steam_2.5s_infinite_ease-out_0.5s]" opacity="0" />
              </g>

              {/* Books */}
              <g transform="translate(320, 315)">
                <rect x="0" y="25" width="14" height="40" rx="1" fill="#7c3aed" />
                <rect x="15" y="20" width="12" height="45" rx="1" fill="#ec4899" />
                <rect x="28" y="15" width="16" height="50" rx="1" fill="#f97316" />
                {/* Spines lines */}
                <line x1="4" y1="30" x2="10" y2="30" stroke="#fff" opacity="0.5" />
                <line x1="18" y1="25" x2="24" y2="25" stroke="#fff" opacity="0.5" />
                <line x1="32" y1="20" x2="40" y2="20" stroke="#fff" opacity="0.5" />
              </g>

              {/* Plant */}
              <g transform="translate(380, 335)">
                <path d="M 10 45 L 30 45 L 35 25 L 5 25 Z" fill="#b45309" />
                <path d="M 20 25 Q 10 10, 5 15 Q 15 25, 20 25" fill="#10b981" />
                <path d="M 20 25 Q 30 5, 35 10 Q 25 25, 20 25" fill="#059669" />
                <path d="M 20 25 Q 20 -5, 25 -5 Q 25 15, 20 25" fill="#34d399" />
              </g>

              {/* Defs */}
              <defs>
                <linearGradient id="lightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="screenGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
                <style>
                  {`
                    @keyframes sway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
                    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
                    @keyframes typeLeft { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(15deg); } }
                    @keyframes typeRight { 0%, 100% { transform: rotate(15deg); } 50% { transform: rotate(-10deg); } }
                    @keyframes codePulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
                    @keyframes steam { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(-15px); opacity: 0; } }
                  `}
                </style>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
