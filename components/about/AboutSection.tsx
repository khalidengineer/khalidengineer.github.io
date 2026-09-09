"use client";

import React from "react";
import Image from "next/image";
import { Download, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../ui/MagneticButton";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function AboutSection() {
  const highlights = [
    "Problem solver by nature",
    "Clean, scalable and maintainable code",
    "Passionate about performance & UX",
  ];

  return (
    <div className="h-full rounded-[22px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-7 flex flex-col justify-between shadow-[0_15px_45px_rgba(0,0,0,0.5)] backdrop-blur-sm relative overflow-hidden group">
      {/* Subtle warm corner glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold-primary/[0.03] rounded-full blur-2xl pointer-events-none" />

      <div>
        {/* Numbered Section Pill */}
        <SectionHeader number="01" title="ABOUT ME" />

        {/* 2-Subcolumn Layout inside About Card */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start mt-2">
          {/* Sub-column 1: MD Khalid Working at Laptop Photo with Gold Signature */}
          <div className="sm:col-span-5 relative w-full max-w-[240px] sm:max-w-none mx-auto aspect-[3/3.8] rounded-xl overflow-hidden border border-white/[0.08] bg-[#141410] shadow-md group/img">
            <Image
              src="/images/profile/about-laptop.webp"
              alt="MD Khalid working at desk with laptop"
              fill
              className="object-cover group-hover/img:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 240px, 240px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Handwritten Gold Signature with Shimmer */}
            <div className="absolute bottom-2.5 left-3 font-signature text-gold-bright text-xl sm:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none animate-pulse-slow">
              MD Khalid
            </div>
          </div>

          {/* Sub-column 2: Content */}
          <div className="sm:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="mb-3">
                <KineticHeading
                  line1="Building solutions"
                  line2="with code & creativity."
                  goldPart="creativity."
                  className="text-xl sm:text-2xl leading-snug"
                />
              </div>

              <div className="text-xs sm:text-[13px] text-text-secondary leading-relaxed mb-4">
                <TextReveal
                  text="I'm a passionate Full-Stack Developer with 5+ years of experience building web applications and digital products. I love turning ideas into reality through clean code and user-centered design."
                  delay={0.2}
                  stagger={0.02}
                />
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mb-5">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download CV CTA */}
            <div>
              <a href="/resume.pdf" download="MD_Khalid_Resume.pdf">
                <MagneticButton className="px-4 py-2 rounded-xl bg-[#181813] hover:bg-gold-primary hover:text-black text-text-main border border-white/[0.1] hover:border-gold-primary text-xs font-semibold tracking-wide transition-all duration-300 gap-2 flex items-center shadow-sm">
                  <span>Download CV</span>
                  <Download className="w-3.5 h-3.5" />
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
