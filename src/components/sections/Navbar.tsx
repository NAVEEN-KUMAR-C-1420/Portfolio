"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "PATENTS", href: "#patents" },
  { name: "ACHIEVEMENTS", href: "#achievements" },
  { name: "RESUME", href: "#resume" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center py-4 px-4`}
      >
        <div 
          className={`flex items-center justify-between w-full transition-all duration-500 max-w-5xl mx-auto bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full px-6 py-3`}
        >
          {/* Logo */}
          <div className="font-sans text-xl font-black flex items-center tracking-tight">
            <span className="text-white mr-2 text-gradient">NAVEEN KUMAR C.</span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="font-mono text-[10px] tracking-[2px] text-gray-400 hover:text-white transition-colors relative group"
              >
                <span className="opacity-0 group-hover:opacity-100 text-purple-500 transition-opacity absolute -left-4">{"//"}</span>
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[var(--grad)] transition-all">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--grad)] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:block">
            <a href="#resume" onClick={(e) => handleScrollTo(e, "#resume")} className="inline-block border-gradient px-4 py-2 font-mono text-xs tracking-wider font-bold hover:scale-105 transition-transform interactive">
              [VIEW RESUME ↗]
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 interactive"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`h-0.5 w-full bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2 text-gradient" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2 text-gradient" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[95] bg-[#07080f]/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-mono text-3xl tracking-widest text-transparent bg-clip-text bg-[var(--grad)]"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: links.length * 0.1 }}
                 href="#resume" onClick={(e) => handleScrollTo(e, "#resume")}
                 className="mt-8 border-gradient px-8 py-4 font-mono text-xl tracking-wider font-bold"
              >
                [VIEW RESUME ↗]
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
