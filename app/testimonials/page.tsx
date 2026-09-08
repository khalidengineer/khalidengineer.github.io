"use client";

import React, { useState } from "react";
import { testimonialsList } from "@/lib/data";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  HeartHandshake,
  Zap,
  Award,
  CheckCircle2,
  FileCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function TestimonialsPage() {
  const highlights = [
    { label: "Client Satisfaction", value: "100%", icon: HeartHandshake },
    { label: "Average Star Rating", value: "5.0 / 5.0", icon: Star },
    { label: "On-Time Project Delivery", value: "98.5%", icon: Zap },
    { label: "Verified Enterprise References", value: "20+", icon: ShieldCheck },
  ];

  const complianceBadges = [
    { title: "SOC 2 Type II Sign-Off", desc: "Security, availability, and confidential data safeguards validated by external auditors." },
    { title: "ISO/IEC 27001 ISMS", desc: "Rigorous alignment with international information security management protocols." },
    { title: "Microsoft Certified Solutions Expert", desc: "Deep enterprise identity, Azure hybrid cloud, and Intune MDM operational mastery." },
    { title: "AWS Solutions Architect Certified", desc: "Cloud-native distributed systems, VPC peering, and high-availability architecture." },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-10">
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="06" title="TESTIMONIALS & ENDORSEMENTS" />

          <div className="max-w-3xl mt-4 mb-8">
            <div className="mb-3">
              <KineticHeading
                line1="Client Trust &"
                line2="Engineering Endorsements."
                goldPart="Engineering Endorsements."
                className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
              />
            </div>
            <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              <TextReveal
                text="Verified feedback and professional recommendations from startup founders, engineering vice presidents, chief information security officers, and enterprise clients."
                delay={0.15}
                stagger={0.02}
              />
            </div>
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-10">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="p-3 sm:p-4 rounded-xl bg-[#141410] border border-white/[0.06] flex items-center gap-2.5 sm:gap-3.5"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-bold text-text-main font-mono truncate">{h.value}</div>
                    <div className="text-[10px] sm:text-[11px] text-text-muted truncate">{h.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {testimonialsList.map((item, idx) => (
              <TestimonialCard key={item.id} testimonial={item} index={idx} />
            ))}
          </div>

          {/* Executive Verification & Trust Credentials */}
          <div className="pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-primary">
                VERIFIED CREDENTIALS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">
              Industry Standards & Verification Pillars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
              {complianceBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all duration-300 flex items-start gap-3.5 sm:gap-4"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-main mb-1">{badge.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confidential Reference Request CTA */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#181813] via-[#141410] to-[#0D0D0B] border border-gold-primary/30 p-5 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-mono mb-4">
                <FileCheck className="w-3.5 h-3.5 text-gold-primary" />
                <span>CONFIDENTIAL BACKGROUND CHECKS & REFERENCES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-3">
                Need Direct Reference Calls with Engineering Leaders?
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Direct reference calls with past Chief Technology Officers, Vice Presidents of Engineering, and IT Directors are available upon mutual NDA execution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/#contact">
                <MagneticButton className="px-6 py-3.5 rounded-xl bg-gold-primary text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-bright transition-all shadow-[0_0_20px_rgba(244,184,63,0.3)] flex items-center justify-center gap-2">
                  <span>Request Reference Call</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
