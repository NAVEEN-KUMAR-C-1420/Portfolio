"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Action = "flying" | "walking" | "sitting" | "jumping" | "teleporting";

const actionMessages = {
  flying: ["Wheeee! 🚀", "Cosmic drifting ✨", "Scanning the orbit..."],
  walking: ["Just taking a stroll 🚶‍♂️", "Patrolling the layout 🔍", "Left right left right 🤖"],
  sitting: ["Taking a short break ☕", "Coding requires rest too!", "Charging batteries 🔋"],
  jumping: ["Boing! Boing! 🐰", "I can fly... almost!", "Reaching for the stars ⭐"],
  teleporting: []
};

const sectionMessages: Record<string, string[]> = {
  "about-hero": ["Hi! I'm Naveen's AI assistant.", "What a cool design, right?", "I love floating around here."],
  "about": ["He builds production-grade stuff! 🔨", "2 Patents? That's my creator! 🏆"],
  "skills": ["Look at all these tech tools! ⚙️", "Python is my native tongue 🐍", "I process data for breakfast 🧠"],
  "resume": ["Impressive credentials! 📜", "Wait, I don't have a degree...", "Hire him! I need server upgrades 🔋"],
  "projects": ["My favorite section! 🛠️", "I helped build some of these... maybe.", "Real AI agents at work! 🤖"],
  "achievements": ["Wow, 250+ LeetCode problems! 🏆", "Hackathons are my jam!", "I prefer coding in 36-hour blocks too."],
  "education": ["School is cool! 🎓", "I learned everything in 2 milliseconds.", "CGPA 8.73? Nice!"],
  "contact": ["Send a message! 📧", "I'll make sure he reads it.", "Don't be shy, say hi! 👋"]
};

export default function PixelRobot() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [facingRight, setFacingRight] = useState(true);
  const [bubbleMessage, setBubbleMessage] = useState<string | null>(null);
  const [action, setAction] = useState<Action>("flying");
  const [speed, setSpeed] = useState(0.003);
  
  const tRef = useRef(0);
  const speedRef = useRef(0.003);
  const reqRef = useRef<number>(0);
  const isDesktopRef = useRef(true);

  useEffect(() => {
    const checkSize = () => {
      isDesktopRef.current = window.innerWidth >= 640;
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const checkActiveSection = (): string => {
    if (typeof window === "undefined") return "about-hero";
    const els = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    for (const el of els) {
      const closestSection = el.closest('section');
      if (closestSection && closestSection.id) return closestSection.id;
    }
    return "about-hero";
  };

  // Action cycler
  useEffect(() => {
    const cycleActions = () => {
      const actions: Action[] = ["flying", "walking", "sitting", "jumping"];
      let nextAction = actions[Math.floor(Math.random() * actions.length)];
      
      // Avoid walking if speed is fast
      if (speedRef.current > 0.01) nextAction = "flying";
      
      setAction(nextAction);
      
      const actSec = checkActiveSection();
      // 50% chance to say a section specific message, 50% generic action message
      const messages = (Math.random() > 0.5 && sectionMessages[actSec]) 
                       ? sectionMessages[actSec] 
                       : actionMessages[nextAction];
      
      setBubbleMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      setTimeout(() => {
        setBubbleMessage(null);
      }, 3000);
    };

    const actionInterval = setInterval(cycleActions, 8000);
    return () => clearInterval(actionInterval);
  }, []);

  // Movement Engine
  useEffect(() => {
    let lastX = 0;
    
    const animatePath = () => {
      if (action !== "sitting" && action !== "teleporting") {
        tRef.current += speedRef.current + (action === "walking" ? 0.002 : 0);
        const w = window.innerWidth;
        const h = window.innerHeight;
        
        let targetX, targetY;
        
        if (action === "walking") {
          // Walk along the bottom
          targetX = w / 2 + Math.sin(tRef.current * 1.5) * (w / 2.5);
          targetY = h - 60; // 60px above bottom
        } else {
          if (isDesktopRef.current) {
            targetX = w / 2 + Math.sin(tRef.current) * (w / 2.5);
            targetY = h / 2 + Math.sin(tRef.current * 2) * (h / 3);
          } else {
            targetX = w / 2 + Math.sin(tRef.current * 1.5) * (w / 2.5);
            targetY = h - 150 + Math.sin(tRef.current * 3) * 20;
          }
        }

        setPosition(() => {
           return {
             x: targetX,
             y: targetY
           };
        });

        if (targetX > lastX) {
          setFacingRight(true);
        } else if (targetX < lastX) {
          setFacingRight(false);
        }
        lastX = targetX;
      }
      reqRef.current = requestAnimationFrame(animatePath);
    };

    reqRef.current = requestAnimationFrame(animatePath);
    return () => cancelAnimationFrame(reqRef.current);
  }, [action]);

  const handleClick = () => {
    const rand = Math.random();
    
    if (rand < 0.33) {
      // Teleport (Dissolve and appear somewhere else)
      setAction("teleporting");
      setBubbleMessage("You missed me! 😜");
      
      setTimeout(() => {
         // Update internal timer to physically teleport on the math curve
         tRef.current += Math.random() * 10;
      }, 400);

      setTimeout(() => {
        setAction("flying");
        setBubbleMessage(null);
      }, 2000);

    } else if (rand < 0.66) {
      // Catch me / Jetpack smoke
      setAction("flying");
      setBubbleMessage("Catch me if you can! 💨");
      speedRef.current = 0.15; // super fast
      setSpeed(0.15);
      
      setTimeout(() => {
        speedRef.current = 0.003;
        setSpeed(0.003);
        setBubbleMessage(null);
      }, 2500);
    } else {
      // Just hyperdrive
      setAction("flying");
      setBubbleMessage("JETPACK OVERDRIVE! 🚀");
      speedRef.current = 0.08;
      setSpeed(0.08);
      setTimeout(() => {
        speedRef.current = 0.003;
        setSpeed(0.003);
        setBubbleMessage(null);
      }, 2000);
    }
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);
  if (!mounted) return null;

  return (
    <motion.div
      className="fixed z-9999 pointer-events-none flex flex-col items-center"
      style={{
        left: 0,
        top: 0,
        x: position.x,
        y: position.y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <AnimatePresence>
        {bubbleMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full mb-2 whitespace-nowrap bg-[#0a0a14] border border-purple-500/50 rounded-lg px-3 py-1.5 text-[11px] font-mono text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]"
          >
            {bubbleMessage}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-purple-500/50" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0a0a14] -mt-px" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{ 
          scaleX: facingRight ? 1 : -1,
          scaleY: action === "teleporting" ? 0 : 1,     // dissolving!
          opacity: action === "teleporting" ? 0 : 1,    // fading!
          y: action === "jumping" ? [0, -60, 0] : 0,
          rotate: action === "jumping" ? [0, 180, 360] : 0
        }}
        transition={{ 
          scaleX: { duration: 0.3 },
          scaleY: { duration: 0.4 },
          opacity: { duration: 0.4 },
          y: action === "jumping" ? { duration: 0.7, repeat: Infinity, ease: "easeOut" } : { duration: 0.3 },
          rotate: action === "jumping" ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0.3 }
        }}
        className="relative pointer-events-auto cursor-pointer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" className="sm:w-10 sm:h-10 w-8 h-8">
          {/* Antenna */}
          <line x1="20" y1="10" x2="20" y2="2" stroke="#6b7280" strokeWidth="2" />
          <circle cx="20" cy="2" r="2" className="animate-pulse fill-pink-500" />
          
          {/* Head */}
          <rect x="12" y="10" width="16" height="12" rx="3" fill="#1f2937" stroke="#7c3aed" strokeWidth="1.5" />
          
          {/* Eyes - blinking */}
          <g className={action === "sitting" ? "" : "animate-[blink_2s_infinite]"}>
            {action === "sitting" ? (
              <>
                <line x1="14" y1="15" x2="18" y2="15" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="15" x2="26" y2="15" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <circle cx="16" cy="15" r="2" fill="#4ade80" className="animate-pulse" />
                <circle cx="24" cy="15" r="2" fill="#4ade80" className="animate-pulse" />
              </>
            )}
          </g>

          {/* Body */}
          <rect x="15" y="22" width="10" height="10" rx="2" fill="#374151" stroke="#ec4899" strokeWidth="1" />
          
          {/* Arms */}
          <path d={action === "jumping" ? "M15 24 Q10 20 12 16" : "M15 24 Q10 26 12 30"} fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
          <path d={action === "jumping" ? "M25 24 Q30 20 28 16" : "M25 24 Q30 26 28 30"} fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />

          {/* Lower Body Actions */}
          {action === "flying" || action === "jumping" || action === "teleporting" ? (
            <g>
              <rect x="15" y="32" width="3" height="4" fill="#4b5563" />
              <rect x="22" y="32" width="3" height="4" fill="#4b5563" />
              <g className="animate-[flicker_0.2s_infinite_alternate]">
                <path d="M15 36 Q16.5 42 18 36 Z" fill={speed > 0.05 ? "#3b82f6" : "#f97316"} />
                <path d="M22 36 Q23.5 42 25 36 Z" fill={speed > 0.05 ? "#3b82f6" : "#f97316"} />
              </g>
              {/* Jetpack Smoke Trail when running really fast */}
              {speed > 0.05 && (
                <g className="opacity-50 animate-pulse">
                  <circle cx="16.5" cy="45" r="3" fill="#cbd5e1" />
                  <circle cx="23.5" cy="45" r="3" fill="#cbd5e1" />
                  <circle cx="20" cy="49" r="4" fill="#9ca3af" />
                  <circle cx="20" cy="53" r="5" fill="#64748b" opacity="0.5" />
                </g>
              )}
            </g>
          ) : action === "walking" ? (
            <g className="animate-[walk_0.3s_infinite_alternate]">
              <path d="M16 32 L16 38" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
              <path d="M24 32 L24 38" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
              <style>
                {`@keyframes walk { 0% { transform: skewX(-15deg) translateY(-2px); } 100% { transform: skewX(15deg) translateY(0); } }`}
              </style>
            </g>
          ) : ( // sitting
            <g>
              {/* Box/chair */}
              <rect x="12" y="32" width="16" height="6" rx="1" fill="#4b5563" />
              <line x1="14" y1="38" x2="14" y2="42" stroke="#4b5563" strokeWidth="2" />
              <line x1="26" y1="38" x2="26" y2="42" stroke="#4b5563" strokeWidth="2" />
              {/* Folded legs resting */}
              <path d="M16 32 Q16 36 20 36" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
}
