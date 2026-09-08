"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesList } from "@/lib/data";
import { Briefcase, Terminal, Layout, Code } from "lucide-react";

export default function ExperienceTimeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case "technova":
        return Briefcase;
      case "codecraft":
        return Terminal;
      case "webly":
        return Layout;
      case "pixel":
        return Code;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="relative mt-6">
      {/* ================= DESKTOP HORIZONTAL TIMELINE ================= */}
      <div className="hidden lg:block relative pt-6 pb-2">
        {/* Continuous Horizontal Golden Line */}
        <div className="absolute top-[35px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-gold-primary/20 via-gold-primary to-gold-primary/20" />

        <div className="grid grid-cols-4 gap-6 relative z-10">
          {experiencesList.map((exp, idx) => {
            const Icon = getIcon(exp.iconType);
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Timeline Golden Glowing Node */}
                <div className="relative mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#141410] border-2 border-gold-primary flex items-center justify-center text-gold-primary shadow-[0_0_15px_rgba(244,184,63,0.3)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(244,184,63,0.6)] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Subtle pulsing outer ring on the current position */}
                  {idx === 0 && (
                    <div className="absolute -inset-1 rounded-full border border-gold-primary/50 animate-ping opacity-40 pointer-events-none" />
                  )}
                </div>

                {/* Role Title */}
                <h4 className="text-sm font-bold text-text-main group-hover:text-gold-bright transition-colors mb-1">
                  {exp.role}
                </h4>

                {/* Company Name */}
                <div className="text-xs font-semibold text-gold-primary/90 mb-1">
                  {exp.company}
                </div>

                {/* Period Badge */}
                <div className="text-[11px] font-mono text-text-muted mb-2 px-2 py-0.5 rounded-full bg-[#161612] border border-white/[0.05]">
                  {exp.period}
                </div>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed px-2">
                  {exp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= MOBILE / TABLET VERTICAL TIMELINE ================= */}
      <div className="lg:hidden relative pl-8 space-y-7">
        {/* Vertical Line */}
        <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-gold-primary via-gold-primary/60 to-gold-primary/20" />

        {experiencesList.map((exp, idx) => {
          const Icon = getIcon(exp.iconType);
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-4"
            >
              {/* Vertical Node centered on line (16px center) */}
              <div className="absolute -left-[33px] top-0 w-8 h-8 rounded-full bg-[#141410] border-2 border-gold-primary flex items-center justify-center text-gold-primary shadow-[0_0_10px_rgba(244,184,63,0.3)]">
                <Icon className="w-3.5 h-3.5" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-text-main">
                  {exp.role}
                </h4>
                <div className="text-xs font-semibold text-gold-primary">
                  {exp.company}
                </div>
                <div className="text-[11px] font-mono text-text-muted mt-0.5 mb-1.5">
                  {exp.period}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
