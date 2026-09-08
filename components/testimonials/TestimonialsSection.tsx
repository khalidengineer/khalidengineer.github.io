"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsList } from "@/lib/data";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonialsList.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonialsList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header with Carousel Navigation Arrows */}
        <SectionHeader
          number="06"
          title="TESTIMONIALS"
          rightElement={
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-7 h-7 rounded-full bg-[#161612] border border-white/[0.08] hover:border-gold-primary/50 text-text-secondary hover:text-gold-bright flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-7 h-7 rounded-full bg-[#161612] border border-white/[0.08] hover:border-gold-primary/50 text-text-secondary hover:text-gold-bright flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          }
        />

        {/* Section Headline */}
        <div className="max-w-3xl mt-2 mb-6">
          <div className="mb-2">
            <KineticHeading
              line1="Client Trust &"
              line2="What Leaders Say."
              goldPart="What Leaders Say."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Real feedback and endorsements from founders, engineering directors, and product leaders I've collaborated with."
              delay={0.08}
            />
          </div>
        </div>

        {/* Testimonials Grid (Desktop 3 columns, Mobile carousel responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-4">
          {testimonialsList.map((item, idx) => (
            <TestimonialCard key={item.id} testimonial={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
