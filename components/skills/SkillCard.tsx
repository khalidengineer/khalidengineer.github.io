"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillItem } from "@/lib/data";

interface SkillCardProps {
  skill: SkillItem;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const renderIcon = (type: string) => {
    switch (type) {
      case "js":
        return (
          <div className="w-7 h-7 rounded bg-[#F7DF1E] text-black font-black text-[13px] flex items-center justify-center font-mono">
            JS
          </div>
        );
      case "ts":
        return (
          <div className="w-7 h-7 rounded bg-[#3178C6] text-white font-black text-[13px] flex items-center justify-center font-mono">
            TS
          </div>
        );
      case "react":
        return (
          <svg viewBox="0 0 115 100" className="w-7 h-7 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="6">
            <ellipse cx="57.5" cy="50" rx="55" ry="21" transform="rotate(30 57.5 50)" />
            <ellipse cx="57.5" cy="50" rx="55" ry="21" transform="rotate(90 57.5 50)" />
            <ellipse cx="57.5" cy="50" rx="55" ry="21" transform="rotate(150 57.5 50)" />
            <circle cx="57.5" cy="50" r="10" fill="currentColor" />
          </svg>
        );
      case "next":
        return (
          <div className="w-7 h-7 rounded-full bg-black border border-white/20 text-white font-bold text-xs flex items-center justify-center">
            <span className="font-mono text-[14px]">N</span>
          </div>
        );
      case "node":
        return (
          <div className="w-7 h-7 text-[#539E43] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
              <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 2.2l6.9 4v7.6L12 19.8l-6.9-4V8.2L12 4.2z"/>
              <path d="M12 7a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
          </div>
        );
      case "html5":
        return (
          <div className="w-7 h-7 bg-[#E34F26] rounded text-white font-extrabold text-[12px] flex items-center justify-center">
            5
          </div>
        );
      case "css3":
        return (
          <div className="w-7 h-7 bg-[#1572B6] rounded text-white font-extrabold text-[12px] flex items-center justify-center">
            3
          </div>
        );
      case "tailwind":
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#06B6D4]" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
          </svg>
        );
      case "mongodb":
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#47A248]" fill="currentColor">
            <path d="M12 1.5s-4.5 4.5-4.5 10.5c0 4.5 3.5 8.5 4.5 10 1-1.5 4.5-5.5 4.5-10C16.5 6 12 1.5 12 1.5z"/>
          </svg>
        );
      case "postgresql":
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#4169E1]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>
          </svg>
        );
      case "git":
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F05032]" fill="currentColor">
            <path d="M2.6 10.59L10.59 2.6a2 2 0 0 1 2.82 0l7.99 7.99a2 2 0 0 1 0 2.82l-7.99 7.99a2 2 0 0 1-2.82 0L2.6 13.41a2 2 0 0 1 0-2.82zM12 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3.5-3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
          </svg>
        );
      case "docker":
        return (
          <div className="w-7 h-7 rounded bg-[#2496ED] text-white flex items-center justify-center font-bold text-xs">
            🐳
          </div>
        );
      case "aws":
        return (
          <div className="w-7 h-7 flex items-center justify-center text-[#FF9900] font-black text-xs tracking-tighter">
            aws
          </div>
        );
      case "figma":
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
            <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
            <path d="M9 12a3 3 0 1 0 0-6h3v6H9z" fill="#F24E1E" />
            <path d="M12 6h3a3 3 0 1 1 0 6h-3V6z" fill="#FF7262" />
            <path d="M9 12h3v6H9a3 3 0 1 1 0-6z" fill="#0ACF83" />
            <circle cx="9" cy="21" r="3" fill="#A259FF" />
          </svg>
        );
      case "graphql":
        return (
          <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#E10098]" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="3" y1="7" x2="21" y2="17" />
            <line x1="3" y1="17" x2="21" y2="7" />
          </svg>
        );
      default:
        return <div className="w-7 h-7 rounded bg-gold-primary/20 text-gold-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#141410] border border-white/[0.07] hover:border-gold-primary/40 hover:bg-[#181813] transition-all duration-300 shadow-sm aspect-square text-center"
    >
      <div className="mb-1.5 transition-transform duration-300 group-hover:scale-110">
        {renderIcon(skill.iconType)}
      </div>
      <span className="text-[10px] sm:text-[11px] font-medium text-text-secondary group-hover:text-text-main transition-colors duration-200 line-clamp-1">
        {skill.name}
      </span>
      {/* Subtle bottom hover dot */}
      <div className="absolute bottom-1 w-1 h-1 rounded-full bg-gold-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  );
}
