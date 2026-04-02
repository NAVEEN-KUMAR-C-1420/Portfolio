"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const nodes = [
    {
      id: 1,
      title: "B.Tech Information Technology",
      institution: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
      date: "2023 – 2027",
      details: [
        { label: "CGPA:", value: "8.69" },
        { label: "Highlights:", value: "AI/ML Projects, 2 Patents, Hackathons" },
        { label: "Club:", value: "Host Lead — Media Guild" }
      ],
      current: true,
      color: "border-green-500/30 text-green-500",
      accent: "from-green-500/10 to-transparent",
    },
    {
      id: 2,
      title: "Higher Secondary (12th)",
      institution: "K G International School, Coimbatore",
      date: "2022 – 2023",
      details: [
        { label: "Percentage:", value: "84%" },
        { label: "Stream:", value: "Science with Computer Science" }
      ],
      current: false,
      color: "border-purple-500/30 text-purple-500",
      accent: "from-purple-500/10 to-transparent",
    },
    {
      id: 3,
      title: "Secondary School (10th)",
      institution: "K G International CBSE School,Coimbatore",
      date: "2020 – 2021",
      details: [
        { label: "Percentage:", value: "91.4%" }
      ],
      current: false,
      color: "border-pink-500/30 text-pink-500",
      accent: "from-pink-500/10 to-transparent",
    }
  ];

  return (
    <section className="py-24 relative w-full mb-10" id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-4 mb-20 relative justify-center">
          <div className="absolute -top-16 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none text-center">
            07
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 07. EDUCATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative bg-[#07070c] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 overflow-hidden group interactive flex flex-col justify-between`}
            >
              {/* Background Accent Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${node.accent} opacity-50 transition-opacity group-hover:opacity-100 z-0`} />

              {/* Typographic Watermark */}
              <div className="absolute -bottom-4 -right-2 text-[100px] font-sans font-black text-white/5 select-none group-hover:text-white/10 transition-colors z-0">
                0{node.id}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-[#0a0a14] border ${node.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                    <GraduationCap className={node.color.split(' ')[1]} size={24} />
                  </div>
                  {node.current && (
                    <span className="bg-green-500/10 text-green-400 border border-green-500/30 font-mono text-[9px] px-2.5 py-1 rounded-full tracking-widest font-bold shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                      PRESENT
                    </span>
                  )}
                </div>

                <div className="font-mono text-xs text-[#a78bfa] mb-2 font-bold tracking-widest">{node.date}</div>
                <h3 className="font-sans font-extrabold text-2xl text-white mb-2 leading-tight">
                  {node.title}
                </h3>
                <div className="font-sans text-[15px] text-gray-400 mb-6 font-medium">
                  {node.institution}
                </div>
              </div>

              <div className="space-y-2.5 border-t border-white/10 pt-5 relative z-10 mt-6">
                {node.details.map((d, j) => (
                  <div key={j} className="flex flex-col font-mono text-[11px] leading-relaxed">
                    <span className="text-gray-500 font-semibold">{d.label}</span>
                    <span className="text-gray-200 mt-1">{d.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
