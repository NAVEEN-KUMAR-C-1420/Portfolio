"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ResumeViewer() {
  const [activeTab, setActiveTab] = useState<"one-page" | "full">("one-page");

  return (
    <section id="resume" className="py-24 relative z-10 w-full bg-[#05050a]/80 border-y border-purple-500/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center gap-4 mb-16 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            08
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 08. RESUME
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="flex flex-col items-center">
          
          <div className="flex flex-wrap justify-center p-1 bg-[#111827] rounded mb-8 border border-gray-800">
            <button
              onClick={() => setActiveTab("one-page")}
              className={`px-6 py-3 font-mono text-xs tracking-wider transition-colors rounded ${activeTab === "one-page" ? "bg-[var(--grad)] text-white font-bold" : "text-gray-400 hover:text-white"}`}
            >
              [ONE PAGE RESUME]
            </button>
            <button
              onClick={() => setActiveTab("full")}
              className={`px-6 py-3 font-mono text-xs tracking-wider transition-colors rounded ${activeTab === "full" ? "bg-[var(--grad)] text-white font-bold" : "text-gray-400 hover:text-white"}`}
            >
              [FULL RESUME (4 PAGES)]
            </button>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-[70vh] min-h-[500px] max-h-[800px] bg-[#0a0a14] rounded-xl border border-gray-800 overflow-hidden relative"
          >
            {/* Provide dummy text or skeleton for missing PDF as placeholder in UI */}
            <iframe 
              src={activeTab === "one-page" ? "/resume-1page.pdf" : "/resume-full.pdf"}
              className="w-full h-full border-none"
              title="Resume Viewer"
            />
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8 w-full justify-center">
            <a 
              href="/resume-1page.pdf" 
              download 
              className="interactive border-gradient px-6 py-3 font-mono text-sm tracking-widest font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              DOWNLOAD ONE PAGE ↓
            </a>
            <a 
              href="/resume-full.pdf" 
              download 
              className="interactive border-gradient px-6 py-3 font-mono text-sm tracking-widest font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              DOWNLOAD FULL RESUME ↓
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
