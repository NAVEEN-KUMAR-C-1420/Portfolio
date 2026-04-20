"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ResumeViewer() {
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
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full h-[70vh] min-h-[500px] max-h-[800px] bg-[#0a0a14] rounded-xl border border-gray-800 overflow-hidden relative"
          >
            <iframe 
              src="/NaveenKumarC.pdf"
              className="w-full h-full border-none"
              title="Resume Viewer"
            />
          </motion.div>

          <div className="flex flex-wrap gap-4 mt-8 w-full justify-center">
            <a 
              href="/NaveenKumarC.pdf" 
              download 
              className="interactive border-gradient px-6 py-3 font-mono text-sm tracking-widest font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              DOWNLOAD RESUME ↓
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
