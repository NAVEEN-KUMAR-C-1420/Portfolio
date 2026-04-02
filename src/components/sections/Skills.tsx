"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "LANGUAGES",
      color: "border-purple-500/30 text-purple-400 bg-purple-500/5",
      glow: "hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-purple-500/80",
      skills: [
        { name: "Python", icon: "devicon-python-plain text-[#3776AB]" },
        { name: "Java", icon: "devicon-java-plain text-[#007396]" },
        { name: "TypeScript", icon: "devicon-typescript-plain text-[#3178C6]" },
        { name: "JavaScript", icon: "devicon-javascript-plain text-[#F7DF1E]" },
        { name: "C", icon: "devicon-c-plain text-[#A8B9CC]" },
      ]
    },
    {
      title: "AI / ML & AGENTS",
      color: "border-pink-500/30 text-pink-400 bg-pink-500/5",
      glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-pink-500/80",
      skills: [
        { name: "n8n", icon: "⚙️" },
        { name: "Claude API", icon: "🤖" },
        { name: "GPT / Gemini", icon: "✨" },
        { name: "watsonx.ai", icon: "🟦" },
        { name: "LangChain", icon: "🔗" },
        { name: "Scikit-learn", icon: "🧠" },
      ]
    },
    {
      title: "FRONTEND",
      color: "border-orange-500/30 text-orange-400 bg-orange-500/5",
      glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:border-orange-500/80",
      skills: [
        { name: "React", icon: "devicon-react-original text-[#61DAFB]" },
        { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original text-[#06B6D4]" },
        { name: "HTML5", icon: "devicon-html5-plain text-[#E34F26]" },
        { name: "CSS3", icon: "devicon-css3-plain text-[#1572B6]" },
      ]
    },
    {
      title: "BACKEND & DB",
      color: "border-teal-500/30 text-teal-400 bg-teal-500/5",
      glow: "hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:border-teal-500/80",
      skills: [
        { name: "FastAPI", icon: "devicon-fastapi-plain text-[#009688]" },
        { name: "Node.js", icon: "devicon-nodejs-plain text-[#339933]" },
        { name: "Express.js", icon: "devicon-express-original text-white" },
        { name: "MySQL", icon: "devicon-mysql-plain text-[#4479A1]" },
        { name: "MongoDB", icon: "devicon-mongodb-plain text-[#47A248]" },
        { name: "Supabase", icon: "⚡" },
        { name: "Firebase", icon: "devicon-firebase-plain text-[#FFCA28]" },
      ]
    },
    {
      title: "TOOLS",
      color: "border-green-500/30 text-green-400 bg-green-500/5",
      glow: "hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:border-green-500/80",
      skills: [
        { name: "Git", icon: "devicon-git-plain text-[#F05032]" },
        { name: "GitHub", icon: "devicon-github-original text-white" },
        { name: "Docker", icon: "devicon-docker-plain text-[#2496ED]" },
        { name: "Vercel", icon: "▲" },
        { name: "Netlify", icon: "💎" },
        { name: "Postman", icon: "🚀" },
      ]
    },
    {
      title: "CS CONCEPTS",
      color: "border-amber-500/30 text-amber-400 bg-amber-500/5",
      glow: "hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:border-amber-500/80",
      skills: [
        { name: "DSA", icon: "🧩" },
        { name: "OOP", icon: "🧱" },
        { name: "DBMS", icon: "🗄️" },
        { name: "OS", icon: "💻" },
        { name: "SDLC", icon: "🔄" },
        { name: "MVC Architecture", icon: "🏛️" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center gap-4 mb-20 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            02
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 02. TECH STACK
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT - ORBIT */}
          <div className="relative w-full aspect-square max-w-[400px] mx-auto hidden lg:flex items-center justify-center">
            {/* Center Sphere */}
            <div className="absolute w-24 h-24 rounded-full bg-[var(--grad)] z-10 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.5)] animate-pulse">
              <span className="font-mono text-xs font-bold text-white text-center leading-tight tracking-wider">FULL STACK<br/>AI DEV</span>
            </div>

            {/* Orbit 1 */}
            <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-purple-500/30 animate-[spin_12s_linear_infinite]" />
            <div className="absolute w-[240px] h-[240px] animate-[spin_12s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -ml-4 -mt-4 w-8 h-8 rounded-full bg-[#111827] border border-blue-500 flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
                <span className="devicon-python-plain text-[#3776AB] text-lg"/>
              </div>
              <div className="absolute bottom-0 left-1/2 -ml-4 -mb-4 w-8 h-8 rounded-full bg-[#111827] border border-cyan-500 flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
                <span className="devicon-react-original text-[#61DAFB] text-lg"/>
              </div>
              <div className="absolute left-0 top-1/2 -ml-4 -mt-4 w-8 h-8 rounded-full bg-[#111827] border border-green-500 flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
                <span className="devicon-nodejs-plain text-[#339933] text-lg"/>
              </div>
              <div className="absolute right-0 top-1/2 -mr-4 -mt-4 w-8 h-8 rounded-full bg-[#111827] border border-white flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
                <span className="devicon-nextjs-plain text-white text-lg"/>
              </div>
            </div>

            {/* Orbit 2 */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-pink-500/30 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute w-[360px] h-[360px] animate-[spin_18s_linear_infinite_reverse]">
              <div className="absolute top-0 left-1/2 -ml-4 -mt-4 w-8 h-8 rounded-full bg-[#111827] border border-orange-500 flex items-center justify-center animate-[spin_18s_linear_infinite]">
                <span className="devicon-java-plain text-[#007396] text-lg"/>
              </div>
              <div className="absolute bottom-0 left-1/2 -ml-4 -mb-4 w-8 h-8 rounded-full bg-[#111827] border border-green-500 flex items-center justify-center animate-[spin_18s_linear_infinite]">
                <span className="devicon-mongodb-plain text-[#47A248] text-lg"/>
              </div>
              <div className="absolute left-0 top-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full bg-[#111827] border border-blue-400 flex items-center justify-center animate-[spin_18s_linear_infinite]">
                <span className="devicon-docker-plain text-[#2496ED] text-lg"/>
              </div>
              <div className="absolute right-0 top-1/2 -mt-4 -mr-4 w-8 h-8 rounded-full bg-[#111827] border border-purple-400 flex items-center justify-center animate-[spin_18s_linear_infinite]">
                <span className="text-sm">🤖</span>
              </div>
            </div>

            <div className="absolute -bottom-8 font-mono text-xs tracking-widest text-[var(--color-gold)] opacity-80 decoration-dashed border-b border-[var(--color-gold)] interactive hover:opacity-100">
              <a href="https://leetcode.com/u/ObJQzoDJbs/" target="_blank" rel="noopener noreferrer">
                250+ LEETCODE PROBLEMS ↗
              </a>
            </div>
          </div>

          {/* RIGHT - GRIDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full relative z-10">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className={`bg-[#0a0a14]/80 backdrop-blur-sm border ${cat.color} rounded-lg p-5 transition-all duration-300 ${cat.glow} group hover:-translate-y-1 interactive`}
              >
                <h3 className={`font-mono text-[11px] uppercase tracking-widest mb-4 font-bold border-b pb-2 ${cat.color.split(' ')[0]}`}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <div key={j} className="flex gap-1.5 items-center bg-white/5 px-2 py-1 rounded text-xs text-gray-300 font-mono transition-transform hover:scale-105 hover:text-white cursor-default">
                      {skill.icon.startsWith("devicon") ? (
                        <i className={`${skill.icon} text-sm`}></i>
                      ) : (
                        <span>{skill.icon}</span>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
