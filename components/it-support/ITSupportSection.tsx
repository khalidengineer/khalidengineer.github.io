"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Headset, Cpu, Check, Award, Activity, ArrowRight } from "lucide-react";
import { itSupportServices, itCertifications, itMetrics } from "@/lib/data";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";
import MagneticButton from "../ui/MagneticButton";

export default function ITSupportSection() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "server":
        return Server;
      case "shield":
        return ShieldCheck;
      case "headset":
        return Headset;
      case "cpu":
        return Cpu;
      default:
        return Server;
    }
  };

  return (
    <section id="it-support" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader
          number="08"
          title="IT INFRASTRUCTURE & SUPPORT"
          rightElement={
            <Link
              href="/it-support"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-gold-bright transition-colors group"
            >
              <span>Explore full IT stack</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          }
        />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="Enterprise Infrastructure &"
              line2="Senior IT Support."
              goldPart="Senior IT Support."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Delivering mission-critical system administration, zero-trust network hardening, multi-tier technical service desk operations, and automated endpoint fleet compliance under strict enterprise SLAs."
              delay={0.15}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Live Reliability Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {itMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-3 sm:p-4 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-lg sm:text-2xl font-black text-gold-bright font-mono">
                  {metric.value}
                </span>
                <Activity className="w-3.5 h-3.5 text-success animate-pulse" />
              </div>
              <div className="text-xs font-bold text-text-main mb-0.5">{metric.label}</div>
              <div className="text-[10px] text-text-muted leading-tight">{metric.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* 4 Enterprise IT Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
          {itSupportServices.map((service, idx) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <TiltCard maxTilt={4} className="group p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div style={{ transform: "translateZ(15px)" }}>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] group-hover:border-gold-primary/50 text-gold-primary flex items-center justify-center shadow-sm"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-[11px] font-mono text-gold-primary/80 px-2.5 py-0.5 rounded-full bg-[#181813] border border-white/[0.05]">
                        MODULE {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-base sm:text-[17px] font-bold text-text-main group-hover:text-gold-bright transition-colors duration-200 mb-2.5"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs text-text-secondary leading-relaxed mb-5"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {service.description}
                    </p>

                    {/* Core Capabilities */}
                    <div className="space-y-2 mb-6" style={{ transform: "translateZ(18px)" }}>
                      {service.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                          <Check className="w-3.5 h-3.5 text-gold-primary shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div
                    className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/[0.04]"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium text-text-muted bg-[#181813] px-2 py-0.5 rounded border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Industry Certifications Strip */}
        <div className="pt-6 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-bold text-text-main tracking-wider uppercase">
              Professional IT &amp; Cloud Certifications
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {itCertifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-2.5 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors text-center flex flex-col justify-center"
              >
                <div className="text-[11px] font-bold text-text-main leading-tight mb-1">
                  {cert.name}
                </div>
                <div className="text-[10px] font-mono text-gold-primary">{cert.code}</div>
                <div className="text-[9px] text-text-muted mt-0.5">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/[0.06]">
          <div className="text-xs text-text-secondary text-center sm:text-left">
            Need emergency IT infrastructure troubleshooting or enterprise systems hardening?
          </div>

          <Link href="/contact">
            <MagneticButton className="px-5 py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs tracking-wide shadow-[0_0_15px_rgba(244,184,63,0.3)] transition-all flex items-center gap-2">
              <span>Request IT Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
