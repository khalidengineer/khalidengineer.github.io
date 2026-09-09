"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid, Github, Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";
import StatsCard from "./StatsCard";
import HeroCanvas from "../3d/HeroCanvas";
import MagneticButton from "../ui/MagneticButton";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function Hero() {
  const socials = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Dribbble", href: "https://dribbble.com", icon: Dribbble },
  ];

  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-6 px-4 sm:px-6">
      <div className="max-w-[1220px] mx-auto rounded-[24px] sm:rounded-[28px] bg-[#11110E]/70 border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-md">
        {/* Subtle Ambient Radial Gold Glow */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-gold-primary/[0.12] via-gold-amber/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-gold-primary/[0.03] rounded-full blur-2xl pointer-events-none" />

        {/* 3D WebGL Gyroscopic Orbit, Beams & Particles Scene */}
        <HeroCanvas />

        {/* Hero Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[520px] sm:min-h-[580px] p-4 sm:p-10 lg:p-14 gap-8">
          {/* Left Column: Bio & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center max-w-xl">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <AvailabilityBadge />
            </motion.div>

            {/* Kinetic Animated Headline with Gold Shimmer */}
            <div className="mb-5">
              <KineticHeading
                line1="I Build Modern"
                line2="Web Experiences"
                goldPart="Web Experiences"
                className="text-[32px] sm:text-4xl lg:text-[56px] leading-[1.1] font-sans"
              />
            </div>

            {/* Subtitle with Masked Word-by-Word Reveal */}
            <div className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
              <TextReveal
                text="Full-stack developer crafting beautiful, fast and scalable digital products that solve real-world problems."
                delay={0.35}
                stagger={0.025}
              />
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <Link href="/contact">
                <MagneticButton className="px-6 py-3 rounded-xl bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(244,184,63,0.35)] transition-all duration-300 gap-2 flex items-center">
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </MagneticButton>
              </Link>

              <Link href="/projects">
                <MagneticButton className="px-6 py-3 rounded-xl bg-[#161612] hover:bg-[#1A1A14] text-text-main hover:text-gold-bright border border-white/[0.1] hover:border-gold-primary/40 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 gap-2 flex items-center shadow-sm">
                  <span>View My Work</span>
                  <LayoutGrid className="w-4 h-4 text-text-secondary" />
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-4 text-xs text-text-muted pt-2 border-t border-white/[0.05]"
            >
              <span className="text-xs text-text-secondary font-medium">Follow me on</span>
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-8 h-8 rounded-full bg-[#161612] border border-white/[0.08] hover:border-gold-primary/50 text-text-secondary hover:text-gold-bright flex items-center justify-center transition-all duration-200"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Developer Portrait with 3D Orbit Backing & Floating Stats Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center h-full min-h-[340px] sm:min-h-[460px]">
            {/* Developer Portrait Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-[270px] sm:w-[380px] lg:w-[420px] aspect-[4/4.5] flex items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile/hero-portrait.webp"
                  alt="MD Khalid - Full-Stack Developer"
                  fill
                  priority
                  className="object-cover object-top scale-105"
                  sizes="(max-width: 768px) 270px, 420px"
                />
                {/* Soft edge masks to blend seamlessly with the dark card environment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110E] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#11110E]/40 via-transparent to-transparent" />
              </div>

              {/* Desktop/Tablet Floating Stats Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 z-20">
                <StatsCard />
              </div>
            </motion.div>

            {/* Mobile Centered Stats Card */}
            <div className="sm:hidden mt-3.5 w-full flex justify-center z-20 px-1">
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
