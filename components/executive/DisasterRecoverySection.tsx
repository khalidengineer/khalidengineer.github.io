"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Database, HardDrive, Cloud, RefreshCw, CheckCircle2, Lock, Zap } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";

export default function DisasterRecoverySection() {
  const drMetrics = [
    { value: "< 1 Hour", label: "Recovery Time Objective (RTO)", desc: "Full mission-critical service restoration guarantee" },
    { value: "< 15 Mins", label: "Recovery Point Objective (RPO)", desc: "Max permissible transaction data exposure" },
    { value: "99.999%", label: "Backup Immutability", desc: "WORM object lock preventing ransomware deletion" },
    { value: "100%", label: "Quarterly DR Drill Success", desc: "Automated failover rehearsals without downtime" },
  ];

  const backupSteps = [
    {
      num: "3",
      title: "Copies of Data",
      desc: "Live production cluster + local high-speed snapshot repository + encrypted offsite replica.",
      icon: Database,
    },
    {
      num: "2",
      title: "Different Media",
      desc: "Enterprise NVMe SAN / Synology NAS paired with multi-region AWS S3 / Azure Blob cloud storage.",
      icon: HardDrive,
    },
    {
      num: "1",
      title: "Air-Gapped Off-Site",
      desc: "Physically isolated and logically immutable offsite replica with strict MFA delete protection.",
      icon: Cloud,
    },
  ];

  const protocols = [
    {
      title: "Automated Ransomware Air-Gap Isolation",
      desc: "Real-time anomaly detection triggers automated network port quarantines and read-only immutable storage locks.",
      icon: Lock,
    },
    {
      title: "Cross-Region Cloud Failover",
      desc: "Automated Route 53 DNS failover and warm standby server spins in secondary cloud availability zones.",
      icon: RefreshCw,
    },
    {
      title: "Disaster Simulation & Testing Drills",
      desc: "Quarterly live simulation drills with simulated power grid loss, storage pool corruption, and cyber breaches.",
      icon: Zap,
    },
  ];

  return (
    <section id="disaster-recovery" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="09" title="DISASTER RECOVERY & BCP" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="Business Continuity &"
              line2="Disaster Recovery Runbook."
              goldPart="Disaster Recovery Runbook."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Engineering zero-data-loss architecture, immutable 3-2-1 backup pipelines, and rapid cross-region cloud failovers to guarantee resilient uptime during catastrophic infrastructure failures."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Core RTO & RPO Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {drMetrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-3 sm:p-4 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors shadow-sm"
            >
              <div className="text-lg sm:text-2xl font-black text-gold-bright font-mono mb-1">
                {m.value}
              </div>
              <div className="text-xs font-bold text-text-main mb-0.5">{m.label}</div>
              <div className="text-[10px] text-text-muted leading-tight">{m.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* 3-2-1 Backup Strategy Pipeline */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-bold text-text-main tracking-wider uppercase">
              3-2-1 Enterprise Immutable Backup Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {backupSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={4} className="p-4 sm:p-5 flex flex-col justify-between h-full bg-[#141410]">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-2xl font-black font-mono text-gold-primary/30">
                          {step.num}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-text-main mb-1.5">{step.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* DR Containment Protocols Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
          {protocols.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 rounded-xl bg-[#141410] border border-white/[0.05] hover:border-gold-primary/30 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="w-4 h-4 text-gold-primary" />
                  <h5 className="text-xs font-bold text-text-main">{p.title}</h5>
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
