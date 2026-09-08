"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, GitPullRequest, BookOpen, Compass, Award, CheckCircle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";

export default function ITLeadershipSection() {
  const leadershipPillars = [
    {
      title: "Distributed Team Leadership & Mentorship",
      desc: "Hired, scaled, and directly managed a team of 14+ L1/L2/L3 systems administrators and service desk specialists across North America and remote regions. Spearheaded career growth roadmaps and technical certification sponsorships.",
      icon: Users,
      metric: "14+ Engineers Led",
    },
    {
      title: "Change Advisory Board (CAB) Governance",
      desc: "Chaired weekly cross-functional CAB meetings evaluating enterprise server maintenance, core network updates, and zero-day patch deployments. Mandated rollback validation procedures, maintaining 0 unscheduled outages across 24 consecutive months.",
      icon: GitPullRequest,
      metric: "0 Outages in 24 Mos",
    },
    {
      title: "Standard Operating Procedures (SOPs) & Runbooks",
      desc: "Authored over 150+ comprehensive ITIL standard operating procedures, disaster recovery scripts, and security response playbooks. Standardized ticket resolution knowledge, reducing average engineer onboarding time by 60%.",
      icon: BookOpen,
      metric: "150+ Runbooks Authored",
    },
  ];

  const leadershipStats = [
    { value: "14+", label: "Engineers Mentored", sub: "L1, L2, and L3 systems engineers" },
    { value: "0", label: "Unscheduled Outages", sub: "Zero downtime caused by CAB-reviewed changes" },
    { value: "94%", label: "Team Retention Rate", sub: "Industry-leading technical staff loyalty" },
    { value: "150+", label: "Documented SOPs", sub: "Complete ITIL service runbook library" },
  ];

  return (
    <section id="leadership" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="15" title="IT LEADERSHIP & CHANGE GOVERNANCE" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="Cross-Functional Leadership &"
              line2="Change Advisory Board (CAB)."
              goldPart="Change Advisory Board (CAB)."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Leading high-performing systems engineering teams, chairing weekly Change Advisory Boards (CAB), institutionalizing ITIL SOPs, and aligning technical roadmaps with executive business goals."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Leadership 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {leadershipPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard maxTilt={4} className="p-4 sm:p-6 flex flex-col justify-between h-full bg-[#141410]">
                  <div style={{ transform: "translateZ(15px)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center shadow-sm"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-gold-primary bg-gold-primary/[0.08] border border-gold-primary/20 px-2.5 py-1 rounded-full">
                        {p.metric}
                      </span>
                    </div>

                    <h4
                      className="text-base font-bold text-text-main mb-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {p.title}
                    </h4>

                    <p
                      className="text-xs text-text-secondary leading-relaxed"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Leadership Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-6 border-t border-white/[0.06]">
          {leadershipStats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-3 sm:p-3.5 rounded-xl bg-[#141410] border border-white/[0.06] text-center"
            >
              <div className="text-xl font-bold text-gold-bright font-mono mb-0.5">{st.value}</div>
              <div className="text-xs font-bold text-text-main mb-0.5">{st.label}</div>
              <div className="text-[10px] text-text-muted">{st.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
