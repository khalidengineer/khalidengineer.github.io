"use client";

import React from "react";
import { Briefcase, FolderGit2, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsCard() {
  const stats = [
    { value: "5+", label: "Years Experience", icon: Briefcase },
    { value: "30+", label: "Projects Completed", icon: FolderGit2 },
    { value: "20+", label: "Happy Clients", icon: Users },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl bg-[#141410]/90 backdrop-blur-md border border-white/[0.1] px-2.5 sm:px-5 py-2 sm:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between divide-x divide-white/[0.08] max-w-full"
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className={`flex items-center gap-1.5 sm:gap-3 ${
              idx === 0 ? "pr-2 sm:pr-6" : idx === 1 ? "px-2 sm:px-6" : "pl-2 sm:pl-6"
            }`}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gold-primary/10 flex items-center justify-center text-gold-primary shrink-0">
              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-bold text-text-main leading-tight font-mono">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-[11px] text-text-muted leading-tight whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
