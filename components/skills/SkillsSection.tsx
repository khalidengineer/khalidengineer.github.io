"use client";

import React from "react";
import { skillsList } from "@/lib/data";
import SkillCard from "./SkillCard";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import { Sparkles } from "lucide-react";

export default function SkillsSection() {
  return (
    <div className="h-full rounded-[22px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-7 flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.5)] backdrop-blur-sm relative overflow-hidden">
      {/* Top Section Header */}
      <div>
        <SectionHeader number="02" title="SKILLS & STACK" />

        <div className="mb-3">
          <KineticHeading
            line1="Modern Tools &"
            line2="Core Technical Stack."
            goldPart="Technical Stack."
            className="text-xl sm:text-2xl leading-snug"
          />
        </div>

        {/* 5 x 3 Grid of 15 Skill Cards */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 sm:gap-2.5 mt-2">
          {skillsList.map((skill, idx) => (
            <SkillCard key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>

      {/* Bottom Indicator Pill */}
      <div className="flex justify-center mt-4 pt-3 border-t border-white/[0.05]">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161612] border border-white/[0.08] text-[11px] text-text-muted">
          <Sparkles className="w-3 h-3 text-gold-primary animate-pulse" />
          <span>Always learning new technologies</span>
        </div>
      </div>
    </div>
  );
}
