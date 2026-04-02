"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Github } from "@/components/icons";

type Category = "ALL" | "AI/ML" | "FULL STACK" | "OPEN SOURCE" | "JAVA/PYTHON";

const projects = [
  {
    id: "P_01",
    title: "TeleCorp AI Call Center Copilot",
    type: "AI/ML",
    emoji: "🤖",
    colorLabel: "purple",
    badge: "Hackathon Winner",
    desc: "Full-stack AI system for UK telecom call centers. Built in 36 hours.",
    bullets: [
      "Live call transcription with real-time AI assistance overlay",
      "RAG-powered customer data lookup using embeddings",
      "Tamil/Tanglish multilingual NLP support",
      "Multi-tenant architecture (TeleCorp + FinBank clients)",
      "AI Silent Mode for automatic escalation"
    ],
    stack: ["Python", "FastAPI", "React 18", "TypeScript", "Ollama", "SQLite", "Tailwind CSS"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(124,58,237,0.2)",
    borderColor: "border-purple-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-purple-500",
  },
  {
    id: "P_02",
    title: "AI Form Filling Assistant",
    type: "AI/ML",
    emoji: "📝",
    colorLabel: "violet",
    desc: "AI system to extract data from Aadhaar/PAN cards using OCR and auto-fill forms. Improved text extraction accuracy by 18%.",
    bullets: [
      "OCR pipeline with image preprocessing for document reading",
      "18% accuracy improvement via advanced preprocessing",
      "Flask APIs for auto-filling and form verification",
      "Scalable backend automation workflow"
    ],
    stack: ["Python", "OpenCV", "OCR", "Flask", "React", "Tailwind CSS"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(124,58,237,0.2)",
    borderColor: "border-violet-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-violet-500",
  },
  {
    id: "P_03",
    title: "AI Customer Support Agent",
    type: "AI/ML",
    emoji: "🧠",
    colorLabel: "indigo",
    badge: "Persistent Memory",
    desc: "Conversational AI with semantic long-term memory via pgvector. Real-time sentiment analysis and multilingual support.",
    bullets: [
      "Persistent memory via cosine similarity retrieval",
      "Real-time sentiment and intent analysis",
      "Multilingual conversation support"
    ],
    stack: ["FastAPI", "Supabase pgvector", "Claude API", "React", "Tailwind"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(124,58,237,0.2)",
    borderColor: "border-indigo-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:border-indigo-500",
  },
  {
    id: "P_04",
    title: "EduGPT",
    type: "OPEN SOURCE",
    emoji: "🎓",
    colorLabel: "pink",
    desc: "Multi-agent AI instructor using CAMEL architecture. Agents debate, teach, and quiz — replicating a real classroom experience.",
    bullets: [
      "CAMEL multi-agent framework implementation",
      "Curriculum-based structured learning system",
      "Interactive quiz and assessment module"
    ],
    stack: ["Python", "LangChain", "CAMEL Framework", "Gradio"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(236,72,153,0.2)",
    borderColor: "border-pink-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-pink-500",
  },
  {
    id: "P_05",
    title: "SkillConnect",
    type: "FULL STACK",
    emoji: "💡",
    colorLabel: "orange",
    desc: "End-to-end platform for students to share micro-lessons, quick tips, and Q&A posts. Designed and built full UI/UX to backend.",
    bullets: [
      "Complete wireframe and prototype design",
      "Authentication and resource upload system",
      "Scalable content distribution database schema"
    ],
    stack: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(249,115,22,0.2)",
    borderColor: "border-orange-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:border-orange-500",
  },
  {
    id: "P_06",
    title: "Filimin",
    type: "FULL STACK",
    emoji: "💰",
    colorLabel: "amber",
    desc: "Frontend web app that gamifies financial literacy for students with interactive modules, quizzes, and visual explainers.",
    bullets: [
      "Interactive budgeting, investing, savings modules",
      "Quiz system with progress tracking"
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(249,115,22,0.2)",
    borderColor: "border-amber-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:border-amber-500",
  },
  {
    id: "P_07",
    title: "Hospital Management",
    type: "JAVA/PYTHON",
    emoji: "🏥",
    colorLabel: "teal",
    desc: "Console-based hospital record management with complete OOP design. Patient, doctor, and appointment data management.",
    bullets: [
      "Java OOP with full patient/doctor/appointment data",
      "Input validation and file persistence",
      "Clean console UI for healthcare workflow"
    ],
    stack: ["Java", "OOP", "Collections Framework", "File I/O"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(45,212,191,0.2)",
    borderColor: "border-teal-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:border-teal-500",
  },
  {
    id: "P_08",
    title: "Library Management",
    type: "JAVA/PYTHON",
    emoji: "📚",
    colorLabel: "green",
    desc: "Console-based system for book catalog, student records, and borrowing workflows with 40% error reduction via validation.",
    bullets: [
      "40% error reduction via structured input validation",
      "Indexing system for efficient search",
      "File persistence for long-term storage"
    ],
    stack: ["Java", "Core Java", "OOP", "File Handling"],
    github: "https://github.com/NAVEEN-KUMAR-C-1420",
    color: "rgba(45,212,191,0.2)",
    borderColor: "border-green-500/30",
    glow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:border-green-500",
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("ALL");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const tabs: Category[] = ["ALL", "AI/ML", "FULL STACK", "OPEN SOURCE", "JAVA/PYTHON"];

  const filteredProjects = activeTab === "ALL" ? projects : projects.filter(p => p.type === activeTab);

  return (
    <section id="projects" className="py-24 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center gap-4 mb-16 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            03
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 03. PROJECTS
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`interactive px-4 py-2 font-mono text-xs md:text-sm tracking-wider font-bold rounded transition-all ${
                activeTab === tab
                  ? "bg-[var(--grad)] text-white shadow-lg"
                  : "bg-transparent border border-gray-800 text-gray-400 hover:border-gray-600 focus:border-[var(--grad)]"
              }`}
            >
              [{tab}]
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`flex flex-col h-full bg-[#0a0a14] border ${p.borderColor} rounded-xl p-6 transition-all duration-300 ${p.glow} group interactive -translate-y-0 hover:-translate-y-1.5`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl group-hover:animate-bounce">{p.emoji}</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-gray-500 tracking-widest">{p.id}</span>
                    <span className={`w-2 h-2 rounded-full animate-pulse bg-${p.colorLabel}-500`} style={{ backgroundColor: p.color.replace('0.2', '1') }} />
                  </div>
                </div>

                <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[var(--grad)] transition-all">
                  {p.title}
                </h3>
                
                {p.badge && (
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono mb-3 bg-purple-500/10 text-purple-400 border ${p.borderColor}`}>
                    {p.badge}
                  </span>
                )}

                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-gray-300 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="text-[10px] font-mono text-gray-500 px-1.5 py-0.5">+{p.stack.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <button 
                    onClick={() => setSelectedProject(p)}
                    className="interactive flex-1 bg-white/5 hover:bg-white/10 text-white font-sans font-bold text-xs py-2 rounded transition-colors text-center"
                  >
                    DETAILS
                  </button>
                  <a 
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive p-2 border border-white/10 rounded hover:border-[var(--grad)] hover:text-white text-gray-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/88 backdrop-blur-sm interactive"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#05050a] border border-pruple-500/50 w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-xl shadow-[0_0_50px_rgba(124,58,237,0.15)] relative border-gradient p-[1px]"
            >
              {/* Inner content wrap to keep gradient border outside */}
              <div className="bg-[#0a0a14] rounded-xl p-6 md:p-8 relative h-full"> 
                <button
                  onClick={() => setSelectedProject(null)}
                  className="interactive absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-4xl mb-4">{selectedProject.emoji}</div>
                <div className="font-mono text-[10px] tracking-widest text-[#a78bfa] mb-2">{selectedProject.type}</div>
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.desc}</p>
                
                <div className="mb-8">
                  <h4 className="font-mono text-sm tracking-widest text-gray-500 mb-3 border-b border-gray-800 pb-1">KEY FEATURES</h4>
                  <ul className="flex flex-col gap-2">
                    {selectedProject.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-gray-300 text-sm">
                        <span className="text-purple-500">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-[#0d0f1a] rounded text-sm font-mono border border-gray-800">
                   <div className="text-gray-500 mb-2">{`// TECH STACK`}</div>
                   <div className="flex flex-wrap gap-2">
                     {selectedProject.stack.map(tech => (
                       <span key={tech} className="text-purple-300 bg-purple-900/40 px-2 py-0.5 rounded border border-purple-500/20">{tech}</span>
                     ))}
                   </div>
                </div>

                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive w-full flex items-center justify-center gap-2 py-3 bg-[var(--grad)] text-white font-sans font-bold tracking-widest rounded hover:opacity-90 transition-opacity"
                >
                  VIEW ON GITHUB <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
