"use client";

import { motion } from "framer-motion";

export default function Internships() {
  return (
    <section className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center gap-4 mb-16 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            04
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 04. INTERNSHIPS
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* UI/UX Intern (Pink) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a14] border border-pink-500/30 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 interactive overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-bl-full blur-2xl group-hover:bg-pink-500/20 transition-colors" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-pink-500/10 text-pink-500 text-2xl border border-pink-500/20">
                  🎨
                </div>
                <div>
                  <h3 className="font-sans font-bold text-2xl text-white">UI/UX Design Intern</h3>
                  <div className="font-mono text-xs text-pink-400 mt-1">Aug 2025 – Sep 2025</div>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 relative z-10">
              {["Designed user interfaces and improved UX flows for real-time apps", "Created wireframes and prototypes for scalable systems", "Collaborated with dev teams for implementation"].map((task, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-pink-500 shrink-0">▹</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ML Intern (Purple) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-[#0a0a14] border border-purple-500/30 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 interactive overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
            
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 text-2xl border border-purple-500/20">
                  🤖
                </div>
                <div>
                  <h3 className="font-sans font-bold text-2xl text-white">Python & ML Intern</h3>
                  <div className="font-mono text-xs text-purple-400 mt-1">Aug 2024</div>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 relative z-10">
              {["Learned ML and Deep Learning fundamentals under expert guidance", "Built mini-projects involving data preprocessing and model training", "Gained exposure to real-world AI workflows"].map((task, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm">
                  <span className="text-purple-500 shrink-0">▹</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
