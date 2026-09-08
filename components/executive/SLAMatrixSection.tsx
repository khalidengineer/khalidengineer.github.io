"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, AlertOctagon, AlertTriangle, Info, Smile, CheckCircle, Flame } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function SLAMatrixSection() {
  const slaLevels = [
    {
      priority: "P1 — Critical",
      badgeColor: "bg-red-950/60 text-red-400 border-red-800/60",
      icon: Flame,
      definition: "Total enterprise outage or security breach affecting business operations.",
      response: "< 15 Mins",
      resolution: "< 2 Hours",
      escalation: "Instant Executive War Room (CTO + Lead Engineer), 30-min stakeholder updates.",
    },
    {
      priority: "P2 — High",
      badgeColor: "bg-orange-950/60 text-orange-400 border-orange-800/60",
      icon: AlertOctagon,
      definition: "Core departmental system degraded with no viable operational workaround.",
      response: "< 30 Mins",
      resolution: "< 4 Hours",
      escalation: "Senior Tier-3 Systems Engineer immediately assigned, hourly progress updates.",
    },
    {
      priority: "P3 — Medium",
      badgeColor: "bg-yellow-950/60 text-gold-bright border-yellow-800/60",
      icon: AlertTriangle,
      definition: "Individual employee workstation or application issue with workable workaround.",
      response: "< 2 Hours",
      resolution: "< 24 Hours",
      escalation: "Tier-2 Technical Support Specialist with standard queue triage.",
    },
    {
      priority: "P4 — Low",
      badgeColor: "bg-[#181813] text-text-secondary border-white/[0.08]",
      icon: Info,
      definition: "General how-to questions, minor software requests, or scheduled deployments.",
      response: "< 4 Hours",
      resolution: "< 48 Hours",
      escalation: "Tier-1 Help Desk Analyst or self-service automated knowledge base workflow.",
    },
  ];

  const operationalStats = [
    { value: "98.8%", label: "CSAT Satisfaction Rating", sub: "Based on 5,200+ verified post-resolution surveys" },
    { value: "78.4%", label: "First Contact Resolution", sub: "Resolved on initial ticket creation without escalation" },
    { value: "99.2%", label: "SLA Target Compliance", sub: "Consistent on-time resolution performance rate" },
    { value: "4.9 / 5", label: "Executive VIP Rating", sub: "Dedicated high-touch C-suite support satisfaction" },
  ];

  return (
    <section id="sla-matrix" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="12" title="SERVICE DESK SLA & ESCALATION" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="ITIL Service Management &"
              line2="Incident Escalation Matrix."
              goldPart="Incident Escalation Matrix."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Operating enterprise ITIL v4 incident response hierarchies, automated severity triage, and transparent SLA accountability to preserve operational velocity across the business."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* SLA Matrix Table / Cards Grid */}
        <div className="space-y-3 mb-8">
          {slaLevels.map((lvl, idx) => {
            const Icon = lvl.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-3.5 sm:p-5 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center"
              >
                {/* Priority Badge & Definition */}
                <div className="lg:col-span-4 flex items-start gap-3">
                  <div className={`p-2 rounded-lg border shrink-0 ${lvl.badgeColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-main mb-1">{lvl.priority}</div>
                    <div className="text-[11px] text-text-secondary leading-tight">{lvl.definition}</div>
                  </div>
                </div>

                {/* Response & Resolution Targets */}
                <div className="lg:col-span-3 flex items-center gap-3 sm:gap-4">
                  <div className="flex-1 p-2 rounded-lg bg-[#181813] border border-white/[0.04] text-center">
                    <div className="text-[10px] text-text-muted">Target Response</div>
                    <div className="text-xs font-mono font-bold text-gold-primary">{lvl.response}</div>
                  </div>
                  <div className="flex-1 p-2 rounded-lg bg-[#181813] border border-white/[0.04] text-center">
                    <div className="text-[10px] text-text-muted">Target Resolution</div>
                    <div className="text-xs font-mono font-bold text-gold-bright">{lvl.resolution}</div>
                  </div>
                </div>

                {/* Escalation Path */}
                <div className="lg:col-span-5 text-xs text-text-muted border-t lg:border-t-0 pt-2 lg:pt-0 border-white/[0.05]">
                  <span className="font-semibold text-text-secondary">Escalation Protocol:</span>{" "}
                  <span className="text-[11px] text-text-secondary">{lvl.escalation}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Operational Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-6 border-t border-white/[0.06]">
          {operationalStats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-3 sm:p-3.5 rounded-xl bg-[#141410] border border-white/[0.06] text-center"
            >
              <div className="text-xl font-black text-gold-bright font-mono mb-0.5">{st.value}</div>
              <div className="text-xs font-bold text-text-main mb-0.5">{st.label}</div>
              <div className="text-[10px] text-text-muted">{st.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
