"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2, ClipboardCopy } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { useToast } from "@/components/global/ToastProvider";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("naveensiddhu52@gmail.com");
    toast("// EMAIL COPIED TO CLIPBOARD ✓");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      setSubmitted(true);
      toast("// MESSAGE_SENT ✓");
    } catch {
      toast("// ERROR SENDING MESSAGE");
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 w-full overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-pink-600/10 via-orange-500/5 to-transparent blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-20 relative">
          <div className="absolute -top-16 -left-4 text-[120px] font-sans font-black text-transparent bg-clip-text bg-[var(--grad)] opacity-5 select-none pointer-events-none">
            09
          </div>
          <h2 className="font-mono text-sm tracking-[4px] text-gray-400">
            <span className="text-purple-500">{"//"}</span> 09. CONTACT
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent" />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-sans font-black leading-tight mb-4">
            <span className="text-white">LET&apos;S BUILD</span><br />
            <span className="text-transparent bg-clip-text bg-[var(--grad)]">SOMETHING.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Open to AI/ML internships, collaborations, and interesting problems.
            Actively looking for a role where I can work in real world projects and gain experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT: Contact Info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: "EMAIL", value: "naveensiddhu52@gmail.com", onClick: handleCopyEmail, color: "#ec4899" },
              { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/naveen-kumar-1420c/", href: "https://www.linkedin.com/in/naveen-kumar-1420c/", color: "#0ea5e9" },
              { icon: Github, label: "GITHUB", value: "github.com/NAVEEN-KUMAR-C-1420", href: "https://github.com/NAVEEN-KUMAR-C-1420", color: "#8b5cf6" },
              { icon: Code2, label: "LEETCODE", value: "leetcode.com/u/ObJQzoDJbs/", href: "https://leetcode.com/u/ObJQzoDJbs/", color: "#f5a623" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={item.onClick}
                className="group w-full block interactive"
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#0a0a14] border border-gray-800 p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 w-full text-left" style={{ '--h-color': item.color } as React.CSSProperties} onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.boxShadow = `0 0 15px ${item.color}30` }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1f2937'; e.currentTarget.style.boxShadow = 'none' }}>
                    <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-900 group-hover:bg-opacity-50 transition-colors">
                      <item.icon strokeWidth={1.5} className="w-6 h-6 text-gray-400 group-hover:text-[var(--h-color)] group-hover:animate-bounce transition-colors" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-500 tracking-widest">{item.label}</div>
                      <div className="font-sans text-lg text-gray-200 group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <button onClick={item.onClick} className="flex items-center gap-4 bg-[#0a0a14] border border-gray-800 p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 w-full text-left" style={{ '--h-color': item.color } as React.CSSProperties} onMouseEnter={e => { e.currentTarget.style.borderColor = item.color; e.currentTarget.style.boxShadow = `0 0 15px ${item.color}30` }} onMouseLeave={e => { e.currentTarget.style.borderColor = '#1f2937'; e.currentTarget.style.boxShadow = 'none' }}>
                    <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-900 group-hover:bg-opacity-50 transition-colors">
                      <item.icon strokeWidth={1.5} className="w-6 h-6 text-gray-400 group-hover:text-[var(--h-color)] group-hover:animate-bounce transition-colors" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="font-mono text-xs text-gray-500 tracking-widest">{item.label}</div>
                      <div className="font-sans text-lg text-gray-200 group-hover:text-white transition-colors truncate">{item.value}</div>
                    </div>
                    <ClipboardCopy className="w-4 h-4 text-gray-600 group-hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a14] rounded-lg border border-purple-500/20 shadow-[0_0_30px_rgba(124,58,237,0.05)] overflow-hidden flex flex-col h-full"
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#0d0f1a]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="font-mono text-[11px] text-gray-400 ml-2">mail.sh</span>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col font-mono text-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
                  <input type="hidden" name="access_key" value="ee100454-74bb-4978-b926-3f1a272672c9" />
                  <input type="hidden" name="subject" value="New Portfolio Contact Message" />

                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-400 flex"><span className="text-purple-500 mr-2">{'>'}</span> Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="_________________"
                      className="bg-transparent border-0 border-b border-gray-700 text-green-400 focus:ring-0 focus:border-[var(--grad)] focus:outline-none py-2 caret-purple-500 interactive"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-gray-400 flex"><span className="text-purple-500 mr-2">{'>'}</span> Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="_________________"
                      className="bg-transparent border-0 border-b border-gray-700 text-green-400 focus:ring-0 focus:border-[var(--grad)] focus:outline-none py-2 caret-purple-500 interactive"
                    />
                  </div>

                  <div className="flex flex-col gap-1 flex-1">
                    <label htmlFor="message" className="text-gray-400 flex"><span className="text-purple-500 mr-2">{'>'}</span> Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="bg-transparent border-0 border-b border-gray-700 text-green-400 focus:ring-0 focus:border-[var(--grad)] focus:outline-none py-2 caret-purple-500 resize-none interactive flex-1"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="interactive mt-4 w-full bg-[var(--grad)] text-white py-3 font-sans font-bold tracking-widest text-sm rounded hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    SEND MESSAGE →
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 animate-in fade-in zoom-in duration-500 delay-150">
                  <span className="text-5xl text-green-500">✓</span>
                  <div className="text-green-400 text-lg">{"// MESSAGE_SENT"}</div>
                  <div className="text-gray-300">Thanks! I&apos;ll respond within 24 hours. 🚀</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
