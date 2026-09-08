"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsList } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function ProjectsSection() {
  const featured = projectsList.filter((p) => p.featured);

  return (
    <section id="projects" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header with "View all projects →" on Right */}
        <SectionHeader
          number="04"
          title="FEATURED PROJECTS"
          rightElement={
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-gold-bright transition-colors group"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          }
        />

        {/* Section Headline */}
        <div className="max-w-3xl mt-2 mb-6">
          <div className="mb-2">
            <KineticHeading
              line1="Crafted Products &"
              line2="Featured Engineering Work."
              goldPart="Engineering Work."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="A curated showcase of production web applications, SaaS platforms, and distributed systems built for speed, conversion, and reliability."
              delay={0.08}
            />
          </div>
        </div>

        {/* 3 Large Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-4">
          {featured.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
