"use client";

import { motion } from "framer-motion";

export default function Patents() {
  return (
    <section id="patents" className="py-24 relative z-10 w-full bg-[#0a0a14]/30 overflow-hidden border-y border-purple-500/10">
      {/* Hexagonal Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264L60 86.60254037844388L60 51.96152422706632L30 34.64101615137755L0 51.96152422706632L0 86.60254037844388L30 103.92304845413264ZM30 69.28203230275508L0 51.96152422706632V17.32050807568877L30 0L60 17.32050807568877V51.96152422706632L30 69.28203230275508Z' fill='%237c3aed' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 103.9px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-16 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            05
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 05. PATENTS & PUBLICATIONS
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="flex flex-col gap-8">
          {/* Patent 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#07080f]/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-8 lg:p-10 overflow-hidden interactive group"
          >
            {/* Watermark */}
            <div className="absolute -right-20 -bottom-20 text-[180px] font-sans font-black text-amber-500/5 rotate-[-15deg] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
              PATENT
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl text-amber-500 drop-shadow-[0_0_10px_rgba(245,166,35,0.5)]">📜</div>
                  <div>
                    <h3 className="text-white font-sans font-bold text-2xl md:text-3xl">Smart Classroom Management System</h3>
                    <div className="text-amber-500 font-mono text-xs tracking-wider mt-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" /> PUBLISHED ✓
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-6 font-mono text-xs text-gray-400">
                  <div className="bg-white/5 px-4 py-3 rounded border border-white/5"><span className="text-gray-500">Patent No:</span> 202441091671</div>
                  <div className="bg-white/5 px-4 py-3 rounded border border-white/5"><span className="text-gray-500">Filed:</span> Sep 17, 2025</div>
                  <div className="bg-white/5 px-4 py-3 rounded border border-white/5"><span className="text-gray-500">Issued:</span> Oct 07, 2025</div>
                  <div className="bg-white/5 px-4 py-3 rounded border border-amber-500/10 text-amber-400/80"><span className="text-gray-500">Journal:</span> IJPREMS — 2024</div>
                </div>

                <p className="text-gray-300 leading-relaxed font-sans text-lg max-w-3xl">
                  Patent granted for an AI-powered classroom management system. Published in the International Journal of Progressive Research in Engineering Management and Science.
                </p>
              </div>

              <div className="shrink-0 lg:mt-4">
                <div className="border border-amber-500 text-amber-500 bg-amber-500/10 px-4 py-2 font-mono text-sm tracking-widest font-bold rounded flex items-center gap-2 shadow-[0_0_15px_rgba(245,166,35,0.2)]">
                  <span>PATENT HOLDER</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Patent 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#07080f]/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 lg:p-10 overflow-hidden interactive group"
          >
            {/* Watermark */}
            <div className="absolute -right-20 -bottom-20 text-[180px] font-sans font-black text-purple-500/5 rotate-[-15deg] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
              PATENT
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl text-purple-500 drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">📜</div>
                  <div>
                    <h3 className="text-white font-sans font-bold text-2xl md:text-3xl">Knowledge Sharing Platform</h3>
                    <div className="text-[#a78bfa] font-mono text-xs tracking-wider mt-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#a78bfa] rounded-full animate-pulse" /> PUBLISHED ✓
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-6 font-mono text-xs text-gray-400">
                  <div className="bg-white/5 px-4 py-3 rounded border border-white/5"><span className="text-gray-500">Tech:</span> MERN and Java</div>
                  <div className="bg-white/5 px-4 py-3 rounded border border-white/5"><span className="text-gray-500">Filed:</span> Nov 01, 2025</div>
                  <div className="bg-white/5 px-4 py-3 rounded border border-white/5 md:col-span-2"><span className="text-gray-500">Issued:</span> Nov 27, 2025</div>
                </div>

                <p className="text-gray-300 leading-relaxed font-sans text-lg max-w-3xl">
                  Patent for a MERN + Java-based knowledge sharing and collaboration platform for educational institutions.
                </p>
              </div>

              <div className="shrink-0 lg:mt-4">
                <div className="border border-purple-500 text-purple-400 bg-purple-500/10 px-4 py-2 font-mono text-sm tracking-widest font-bold rounded flex items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                  <span>PATENT HOLDER</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
