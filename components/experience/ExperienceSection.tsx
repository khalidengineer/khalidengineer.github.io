"use client";

import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="05" title="EXPERIENCE" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-2 mb-6">
          <div className="mb-2">
            <KineticHeading
              line1="Work Experience &"
              line2="Career Milestones."
              goldPart="Career Milestones."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Proven track record of engineering leadership, scalable product delivery, and mission-critical enterprise systems management."
              delay={0.08}
            />
          </div>
        </div>

        {/* Experience Timeline */}
        <ExperienceTimeline />
      </div>
    </section>
  );
}
