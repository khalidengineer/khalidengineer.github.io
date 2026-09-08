"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/lib/data";
import TiltCard from "../ui/TiltCard";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard maxTilt={4.5} className="group p-4 sm:p-5 flex flex-col justify-between h-full">
        <div style={{ transform: "translateZ(15px)" }}>
          {/* Project Thumbnail Image with 3D Pop */}
          <Link
            href={`/projects/${project.slug}`}
            className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#0A0A08] border border-white/[0.05] shadow-inner"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-106 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          {/* Tech Stack Tags with 3D Depth */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5" style={{ transform: "translateZ(20px)" }}>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-[11px] font-medium text-gold-primary/90 bg-gold-primary/[0.08] px-2.5 py-0.5 rounded-full border border-gold-primary/20 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <Link href={`/projects/${project.slug}`}>
            <h3
              className="text-base sm:text-[17px] font-bold text-text-main group-hover:text-gold-bright transition-colors duration-200 mb-2"
              style={{ transform: "translateZ(25px)" }}
            >
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <p
            className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-2"
            style={{ transform: "translateZ(18px)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Bottom Footer with View Details / Link */}
        <div
          className="flex items-center justify-end pt-3 border-t border-white/[0.04]"
          style={{ transform: "translateZ(20px)" }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="w-8 h-8 rounded-lg bg-[#181813] border border-white/[0.08] group-hover:border-gold-primary/50 group-hover:bg-gold-primary group-hover:text-black text-text-secondary flex items-center justify-center transition-all duration-300 shadow-sm"
            aria-label={`View ${project.title} project`}
          >
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}
