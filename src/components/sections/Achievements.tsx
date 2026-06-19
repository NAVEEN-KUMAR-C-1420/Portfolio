/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const colorMap: Record<string, { border: string; hoverBg: string }> = {
  blue: { border: "border-blue-500/20", hoverBg: "hover:bg-blue-500/5" },
  purple: { border: "border-purple-500/20", hoverBg: "hover:bg-purple-500/5" },
  pink: { border: "border-pink-500/20", hoverBg: "hover:bg-pink-500/5" },
  orange: { border: "border-orange-500/20", hoverBg: "hover:bg-orange-500/5" },
  yellow: { border: "border-yellow-500/20", hoverBg: "hover:bg-yellow-500/5" },
  green: { border: "border-green-500/20", hoverBg: "hover:bg-green-500/5" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10 w-full overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0 bg-transparent opacity-40 pointer-events-none starfield" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-16 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-(--grad) opacity-5 select-none pointer-events-none">
            06
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 06. ACHIEVEMENTS
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Hackathons & Certs */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Events & Hackathons */}
            <div>
              <h3 className="font-mono tracking-widest text-gold mb-6 flex items-center gap-2">
                <span className="text-xl">🏆</span> EVENTS & HACKATHONS
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                {/* Connecting Line (hidden on very small mobile) */}
                <div className="hidden md:block absolute top-4.5 left-5 right-5 h-0.5 bg-gray-800 z-0" />
                
                {/* Hackathon 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-gold/30 rounded-lg p-6 group interactive hover:border-gold"
                >
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-gold rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                  </div>
                    <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-gold transition-colors">AIM Infynd — 36-Hour AI Agent Hackathon 2026</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Built TeleCorp AI Call Center Copilot — full-stack AI in 36h</p>
                </motion.div>

                {/* Hackathon 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-amber-500/30 rounded-lg p-6 group interactive hover:border-amber-500"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-amber-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                     <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-amber-500 transition-colors flex items-center gap-2">
                    <span className="text-xl">🎮</span> 24-Hour Game Development Hackathon
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Built a functional game prototype under 24h pressure</p>
                </motion.div>

                {/* Event 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-blue-500/30 rounded-lg p-6 group interactive hover:border-blue-500"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                     <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                    <span className="text-xl">🎙️</span> Cluster Event Host
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Hosted 2 major events with live commentary. Great in communication!</p>
                </motion.div>
              </div>
            </div>

            {/* Leadership & Soft Skills */}
            <div>
              <h3 className="font-mono tracking-widest text-[#ec4899] mb-6 flex items-center gap-2">
                <span className="text-xl">🎙️</span> LEADERSHIP & MENTORSHIP
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-[#ec4899]/30 rounded-lg p-6 group interactive hover:border-[#ec4899]"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-[#ec4899] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-2 h-2 bg-[#ec4899] rounded-full" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-[#ec4899] transition-colors">Cluster Event Host</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Hosted 2 major college cluster events as Host Lead at college club— experienced in live communication, stage presence across 500+ attendee gatherings.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-[#8b5cf6]/30 rounded-lg p-6 group interactive hover:border-[#8b5cf6]"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-[#8b5cf6] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                     <div className="w-2 h-2 bg-[#8b5cf6] rounded-full" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-[#8b5cf6] transition-colors">Continuous Learner</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Consistent reader of self-improvement, developed strong habits of empathy, perspective-taking, and articulate expression.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-[#10b981]/30 rounded-lg p-6 group interactive hover:border-[#10b981]"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-[#10b981] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                     <div className="w-2 h-2 bg-[#10b981] rounded-full" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-[#10b981] transition-colors">Tech Mentor</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Proactively guide and mentor junior students — conducting informal sessions on tech, confidence-building, and communication.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 relative z-10 bg-[#0a0a14] border border-[#0ea5e9]/30 rounded-lg p-6 group interactive hover:border-[#0ea5e9]"
                >
                  <div className="absolute -top-3 left-6 w-6 h-6 bg-[#0a0a14] border-2 border-[#0ea5e9] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">
                     <div className="w-2 h-2 bg-[#0ea5e9] rounded-full" />
                  </div>
                  <h4 className="font-sans font-bold text-white text-lg mt-3 mb-2 group-hover:text-[#0ea5e9] transition-colors">Forward-Deployed Mindset</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-mono">Combining full-stack engineering curiosity with strong oratorical skills. Equipped to act as the bridge between deep technical codebases and client success by translating user feedback into scalable features and providing clear, empathetic technical guidance.</p>
                </motion.div>
              </div>
            </div>

            {/* Certifications (2x2) */}
            <div>
              <h3 className="font-mono tracking-widest text-teal mb-6 flex items-center gap-2 mt-12">
                <span className="text-xl">📜</span> CERTIFICATIONS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "IBM Build AI Agent", subtitle: "IBM Certification", color: "blue", icon: "🤖" },
                  { title: "Student Essentials", subtitle: "Anthropic Claude", color: "purple", icon: "🧠" },
                  { title: "UI/UX Design Internship", subtitle: "Industry Project (2025)", color: "pink", icon: "🎨" },
                  { title: "Full Stack Web Development", subtitle: "Training Program (2024–2025)", color: "orange", icon: "🌐" },
                  { title: "Lean Six Sigma Yellow Belt", subtitle: "Process Optimization & Quality Management", color: "yellow", icon: "📊" },
                  { title: "Prompt Engineering", subtitle: "Generative AI & LLM Optimization", color: "green", icon: "✍️" }
                ].map((cert, i) => {
                  const style = colorMap[cert.color] || colorMap.blue;
                  return (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`bg-[#0a0a14]/60 border ${style.border} ${style.hoverBg} p-4 rounded transition-colors interactive flex items-start gap-4`}
                    >
                      <div className="text-2xl mt-1">{cert.icon}</div>
                      <div>
                        <h4 className="font-sans font-bold text-white text-[15px]">{cert.title}</h4>
                        <p className="font-mono text-[10px] text-gray-500 mt-1 uppercase">{cert.subtitle}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Growth & Soft Skills Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-[#0f111a] border border-gray-800 rounded-xl p-6 h-full flex flex-col interactive group relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors" />
               
               <h3 className="font-mono text-xs tracking-widest text-gray-400 mb-6 font-bold py-2 border-b border-gray-800 inline-block w-full">
                 <span className="text-purple-500">{"//"}</span> GROWTH & SOFT SKILLS
               </h3>

               <div className="flex-1 flex flex-col gap-6">
                 {/* Soft Skills Section */}
                 <div>
                   <h4 className="font-mono text-[11px] uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5 font-bold">
                     <span>💡</span> Core Strengths
                   </h4>
                   <div className="space-y-2.5">
                     {[
                       "Technical Oratory / Public Speaking",
                       "Active Listening & Empathy",
                       "Technical Mentorship / Peer Coaching",
                       "Team Alignment"
                     ].map((skill, index) => (
                       <motion.div
                         key={skill}
                         initial={{ opacity: 0, x: -10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.05 }}
                         className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg px-3 py-2 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group/skill"
                       >
                         <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover/skill:scale-125 transition-transform" />
                         <span className="font-sans text-xs font-medium text-gray-300 group-hover/skill:text-white transition-colors">{skill}</span>
                       </motion.div>
                     ))}
                   </div>
                 </div>

                 {/* Bookshelf Section */}
                 <div>
                   <h4 className="font-mono text-[11px] uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5 font-bold">
                     <span>📚</span> Bookshelf
                   </h4>
                   
                   <div className="space-y-4">
                     {/* Non-Fiction / Self-Improvement */}
                     <div>
                       <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Self-Improvement</span>
                       <div className="flex flex-wrap gap-1.5">
                         {[
                           "Ikigai",
                           "Atomic Habits",
                           "The Subtle Art",
                           "Rich Dad Poor Dad",
                           "You Live Only Once",
                           "Alchemist",
                           "Stop Overthinking"
                         ].map((book) => (
                           <span 
                             key={book} 
                             className="font-sans text-[11px] bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded px-2.5 py-1 hover:border-amber-400 hover:bg-amber-500/20 transition-all cursor-default"
                           >
                             {book}
                           </span>
                         ))}
                       </div>
                     </div>

                     {/* Fiction */}
                     <div>
                       <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Fiction</span>
                       <div className="flex flex-wrap gap-1.5">
                         {[
                           "It Ends with Us",
                           "It Starts with Us",
                           "Ugly Love",
                           "2 States"
                         ].map((book) => (
                           <span 
                             key={book} 
                             className="font-sans text-[11px] bg-pink-500/10 border border-pink-500/20 text-pink-300 rounded px-2.5 py-1 hover:border-pink-400 hover:bg-pink-500/20 transition-all cursor-default"
                           >
                             {book}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
