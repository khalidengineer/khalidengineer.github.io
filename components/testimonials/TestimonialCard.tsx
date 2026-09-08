"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "@/lib/data";
import TiltCard from "../ui/TiltCard";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard maxTilt={4} className="group p-4 sm:p-6 flex flex-col justify-between h-full">
        <div style={{ transform: "translateZ(15px)" }}>
          {/* Large Gold Quote Icon with 3D Pop */}
          <div className="text-gold-primary/80 mb-3" style={{ transform: "translateZ(25px)" }}>
            <Quote className="w-6 h-6 stroke-[1.5] fill-gold-primary/20" />
          </div>

          {/* Quote Text */}
          <p
            className="text-xs sm:text-[13px] text-text-secondary leading-relaxed mb-6 italic"
            style={{ transform: "translateZ(15px)" }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        {/* Author Info & 5 Gold Stars with 3D Depth */}
        <div
          className="flex items-center justify-between gap-2 pt-4 border-t border-white/[0.04]"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/[0.1] bg-[#1a1a14] shrink-0 shadow-sm">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-text-main group-hover:text-gold-bright transition-colors truncate">
                {testimonial.name}
              </div>
              <div className="text-[10px] sm:text-[11px] text-text-muted truncate">
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>

          {/* 5 Gold Stars */}
          <div className="flex items-center gap-0.5 text-gold-primary shrink-0">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-gold-primary text-gold-primary" />
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
