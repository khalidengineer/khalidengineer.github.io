"use client";

import React, { useState } from "react";
import { skillsList } from "@/lib/data";
import SkillCard from "@/components/skills/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import { Sparkles, Shield, Server, Terminal, Wrench, CheckCircle2 } from "lucide-react";

export default function SkillsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredSkills = skillsList.filter((s) => {
    if (filter === "all") return true;
    if (filter === "frontend") return s.category === "frontend";
    if (filter === "backend") return s.category === "backend";
    if (filter === "it-infra") return s.category === "it-infra" || s.category === "cloud";
    if (filter === "tools") return s.category === "tools";
    return true;
  });

  const methodologies = [
    { title: "ITIL v4 Framework", desc: "Service lifecycle, incident management, change governance (CAB), problem triage, and SLA enforcement." },
    { title: "Zero-Trust Security Model", desc: "Never trust, always verify. Conditional access, micro-segmentation, and continuous device health checks." },
    { title: "3-2-1 Immutable Backup Strategy", desc: "WORM object locking, air-gapped offsite storage, automated restore drill verifications." },
    { title: "Infrastructure-as-Code (IaC)", desc: "Repeatable automated provisioning via Terraform, PowerShell, Bash, and Ansible configurations." },
    { title: "Agile & DevSecOps", desc: "Continuous security scanning (SAST/DAST), CI/CD pipelines, automated dependency patching." },
    { title: "FinOps Cloud Cost Governance", desc: "Reserved instance planning, compute right-sizing, and automated idle resource decommissioning." },
  ];

  const enterpriseTools = [
    { name: "Microsoft Entra ID (Azure AD)", category: "Identity & Access", badge: "Expert" },
    { name: "Windows Server 2022 / GPO", category: "Directory Services", badge: "Expert" },
    { name: "Microsoft Intune & Autopilot", category: "Endpoint MDM", badge: "Lead" },
    { name: "Cisco Meraki & Catalyst", category: "Network Core", badge: "Advanced" },
    { name: "Fortinet FortiGate", category: "NGFW Firewalls", badge: "Advanced" },
    { name: "Veeam Backup & Replication", category: "Disaster Recovery", badge: "Expert" },
    { name: "CrowdStrike Falcon / Defender", category: "XDR Security", badge: "Advanced" },
    { name: "ServiceNow & Jira Service Desk", category: "ITSM Ticketing", badge: "Expert" },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
        {/* Main Header Container */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="02" title="SKILLS & STACK" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-4">
            <div>
              <div className="mb-3">
                <KineticHeading
                  line1="Technical Arsenal &"
                  line2="Enterprise Frameworks."
                  goldPart="Enterprise Frameworks."
                  className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
                />
              </div>
              <div className="text-xs sm:text-sm text-text-secondary max-w-xl leading-relaxed">
                <TextReveal
                  text="A comprehensive overview of programming languages, enterprise directory systems, cloud platforms, network hardware, and DevOps tooling I specialize in."
                  delay={0.15}
                  stagger={0.02}
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-[#141410] border border-white/[0.06] shrink-0">
              {[
                { id: "all", label: "All Tech" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "it-infra", label: "IT & Cloud" },
                { id: "tools", label: "Tools" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    filter === cat.id
                      ? "bg-gold-primary text-black shadow-[0_0_12px_rgba(244,184,63,0.3)]"
                      : "text-text-secondary hover:text-text-main hover:bg-white/[0.04]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
            {filteredSkills.map((skill, idx) => (
              <SkillCard key={skill.name} skill={skill} index={idx} />
            ))}
          </div>

          {/* Detailed Proficiency Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/[0.06]">
            {filteredSkills.slice(0, 8).map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#141410] border border-white/[0.05] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-text-main">{skill.name}</span>
                  <span className="text-xs font-mono text-gold-primary">{skill.proficiency}%</span>
                </div>
                <p className="text-[11px] text-text-secondary mb-3 leading-relaxed">
                  {skill.description}
                </p>
                <div className="w-full h-1.5 bg-[#1a1a14] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold-primary to-gold-bright rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Learning Badge */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#161612] border border-white/[0.08] text-xs text-text-secondary">
              <Sparkles className="w-4 h-4 text-gold-primary animate-pulse" />
              <span>Continuously upskilling in enterprise cyber defense and cloud-native systems</span>
            </div>
          </div>
        </div>

        {/* Enterprise Methodologies Section */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-mono text-gold-primary uppercase tracking-wider font-bold">
              STANDARDS &amp; GOVERNANCE
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">Operational Methodologies &amp; Best Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {methodologies.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors"
              >
                <h3 className="text-sm font-bold text-text-main mb-1.5">{m.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Infrastructure & Security Tools Matrix */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Wrench className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-mono text-gold-primary uppercase tracking-wider font-bold">
              PRODUCTION TOOLKIT
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">Enterprise Infrastructure Tools</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {enterpriseTools.map((t, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#141410] border border-white/[0.06] flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-text-main leading-tight">{t.name}</div>
                  <div className="text-[10px] text-text-muted mt-0.5">{t.category}</div>
                </div>
                <span className="text-[10px] font-mono text-gold-primary bg-[#181813] px-2 py-0.5 rounded border border-gold-primary/20">
                  {t.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
