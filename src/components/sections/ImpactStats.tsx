"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ from, to, duration, prefix = "", suffix = "" }: { from: number, to: number, duration: number, prefix?: string, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (nodeRef.current) {
            const isFloatParam = nodeRef.current.dataset.isfloat === "true";
            const val = isFloatParam ? (value / 100).toFixed(2) : Math.round(value);
            nodeRef.current.textContent = `${prefix}${val}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, prefix, suffix]);

  return <span ref={nodeRef} data-isfloat={to.toString().includes('.') || from > 800} className="font-sans font-bold text-4xl lg:text-5xl text-gradient">{prefix}{from}{suffix}</span>;
}

export default function ImpactStats() {
  const stats = [
    { num: 8, suffix: "+", label: "Projects Built" },
    { num: 2, suffix: "", label: "Patents Filed & Published" },
    { num: 2, suffix: "", label: "Hackathons Competed" },
    { num: 250, suffix: "+", label: "LeetCode Problems" },
    { num: 8.73, suffix: "", label: "CGPA", isFloat: true },
  ];

  return (
    <section className="w-full border-y border-purple-500/20 bg-[#0a0a14]/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-purple-500/10 lg:divide-y-0 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="py-8 px-4 flex flex-col items-center justify-center interactive group relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--grad)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="mb-2">
                {stat.isFloat ? (
                  <Counter from={0} to={stat.num * 100} duration={1.5} suffix="" />
                ) : (
                  <Counter from={0} to={stat.num} duration={1.5} suffix={stat.suffix} />
                )}
              </div>
              <p className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
