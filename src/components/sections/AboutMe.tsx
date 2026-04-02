"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-20 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            01
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 01. ABOUT ME
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT - TERMINAL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full bg-[#0a0a14] rounded-lg border border-purple-500/20 shadow-[0_0_30px_rgba(124,58,237,0.05)] overflow-hidden"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#0d0f1a]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-[11px] text-gray-400 ml-2">Code. Build. Repeat.</span>
            </div>

            {/* Terminal Context */}
            <div className="p-6 font-mono text-[13px] leading-relaxed text-gray-300">
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> Name: <span className="text-green-400">&quot;Naveen Kumar C&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> Location: <span className="text-green-400">&quot;Coimbatore, Tamil Nadu, India&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> College: <span className="text-green-400">&quot;Sri Shakthi Institute of Engineering & Tech&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> Degree: <span className="text-green-400">&quot;B.Tech IT — 2023 to 2027 (CGPA: 8.69)&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> Club: <span className="text-green-400">&quot;Host Lead @ Media Guild&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> Internships: <span className="text-green-400">&quot;UI/UX Intern · Python & ML Intern&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> Status: <span className="text-green-400">&quot;Seeking AI/ML Internship — Available Now&quot;</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> <span className="text-gray-400">2 Hackathons Participant</span></div>
              <div className="mb-2"><span className="text-purple-400">{'>'}</span> languages: <span className="text-green-400">&quot;Tamil, English&quot;</span></div>
              <div><span className="text-purple-400">{'>'}</span> fun_fact: <span className="text-green-400">&quot;Loves Solving Quants Sums⚡&quot;</span><span className="inline-block w-2 h-4 ml-1 bg-white animate-[blink_1s_infinite] align-middle" /></div>
            </div>
          </motion.div>

          {/* RIGHT - BIO & PILLS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-gray-300 font-sans text-lg lg:text-xl leading-relaxed">
              I&apos;m a pre final-year IT student who is obsessed with
              building things at the intersection of AI and software engineering.
              From autonomous agents with persistent memory to real-time automation
              AI systems, I love building those. <span className="text-white font-bold">production-grade software</span> — not toy projects.
            </p>
            <p className="text-gray-400 font-sans text-base leading-relaxed">
              I hold 2 published patents, competed in hackathons, interned as a
              UI/UX designer and ML engineer, and solve DSA daily on LeetCode.
              Always eager to learn and ready to ship.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { icon: "📜", text: "2 Published Patents", color: "border-amber-500/30 text-amber-500 bg-amber-500/5" },
                { icon: "🎓", text: "CGPA 8.69", color: "border-green-500/30 text-green-500 bg-green-500/5" },
                { icon: "🏆", text: "36h Hackathon Builder", color: "border-orange-500/30 text-orange-400 bg-orange-500/5" },
                { icon: "🤖", text: "AI Agent Specialist", color: "border-purple-500/30 text-purple-400 bg-purple-500/5" },
                { icon: "🎨", text: "UI/UX + ML Intern", color: "border-pink-500/30 text-pink-400 bg-pink-500/5" },
                { icon: "🎙️", text: "Host Lead — Media Guild", color: "border-blue-500/30 text-blue-400 bg-blue-500/5" },
              ].map((pill, i) => (
                <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${pill.color} text-xs font-mono interactive hover:scale-105 transition-transform cursor-default`}>
                  <span>{pill.icon}</span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
