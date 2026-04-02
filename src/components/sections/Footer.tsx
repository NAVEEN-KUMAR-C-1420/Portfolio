"use client";

import { Code2, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05050a] border-t border-purple-500/30 py-8 relative z-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--grad)] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="font-sans text-lg font-black text-white tracking-tight text-center md:text-left hover:text-gray-300 transition-colors cursor-default">
          <span className="text-gradient">NAVEEN KUMAR C.</span> © 2026
        </div>

        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/NAVEEN-KUMAR-C-1420" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/naveen-kumar-1420c/" },
            { icon: Code2, href: "https://leetcode.com/u/ObJQzoDJbs/" },
            { icon: Mail, href: "mailto:naveensiddhu52@gmail.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive text-gray-500 hover:text-white transition-colors hover:scale-110"
            >
              <social.icon strokeWidth={1.5} className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="font-mono text-xs text-gray-600 tracking-widest text-center md:text-right cursor-default hover:text-gray-400 transition-colors">
          Built with Next.js, Framer Motion & ☕
        </div>
        
      </div>
    </footer>
  );
}
