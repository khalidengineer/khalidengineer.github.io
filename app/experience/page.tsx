import React from "react";
import { experiencesList } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import Link from "next/link";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  TrendingDown,
  Clock,
  ShieldCheck,
  Users,
  Download,
  AlertTriangle,
  Award,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Experience — MD Khalid | Career Milestones & Executive Impact",
  description:
    "Work experience, career timeline, quantified executive leadership impact, and incident war room track record of MD Khalid.",
};

export default function ExperiencePage() {
  const impactStats = [
    {
      metric: "$420,000+",
      label: "Cloud & SaaS Cost Savings",
      sub: "FinOps compute right-sizing & license audit",
      icon: TrendingDown,
    },
    {
      metric: "65% Drop",
      label: "Incident Resolution MTTR",
      sub: "Automated runbooks & Tier-3 triage",
      icon: Clock,
    },
    {
      metric: "2,500+",
      label: "Zero-Touch Endpoints",
      sub: "Windows Autopilot & Intune rollout",
      icon: ShieldCheck,
    },
    {
      metric: "40+ Staff",
      label: "Engineers & Analysts Mentored",
      sub: "Career growth, CAB leadership & coaching",
      icon: Users,
    },
  ];

  const careerEras = [
    {
      era: "2023 — PRESENT",
      title: "Senior IT Systems Architect & SecOps Lead",
      focus: "Zero-Trust Security, Multi-Region Cloud, and Fleet Automation",
      skills: ["Microsoft Entra ID", "Intune Autopilot", "Terraform", "SOC 2 Type II", "Cisco SD-WAN", "Veeam DR"],
      desc: "Directing enterprise IT systems, disaster recovery posture, infrastructure compliance audits, and Change Advisory Board (CAB) protocols across multi-site global offices.",
    },
    {
      era: "2021 — 2023",
      title: "Lead Full-Stack & SaaS Platform Engineer",
      focus: "Distributed Architectures, High-Concurrency Web, & Microservices",
      skills: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis", "GraphQL APIs"],
      desc: "Spearheaded frontend and API architecture for high-growth SaaS platforms, optimizing P95 response times under 50ms and implementing distributed caching layers.",
    },
    {
      era: "2019 — 2021",
      title: "Senior Frontend Systems Engineer",
      focus: "Interactive User Interfaces, WebGL Canvas, & Performance",
      skills: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Jest / Cypress", "Web Vitals"],
      desc: "Engineered responsive, accessible component design systems and 3D data visualization widgets for enterprise dashboards, achieving 100/100 Lighthouse performance benchmarks.",
    },
  ];

  const warRoomCases = [
    {
      title: "Global Active Directory to Entra ID Hybrid Cutover",
      outcome: "0 Minutes Unplanned Downtime",
      detail:
        "Seamlessly migrated 1,800 active directory users and 2,400 Kerberos machine accounts to hybrid Microsoft Entra ID with FIDO2 MFA enforcement over a single weekend window.",
    },
    {
      title: "Multi-Region Disaster Recovery Air-Gap Drill",
      outcome: "11 Min RTO vs 15 Min SLA",
      detail:
        "Executed live failover simulation of core database clusters from US-East to US-West with AWS S3 immutable Object Lock, proving 100% data fidelity with zero transactional loss.",
    },
    {
      title: "Real-Time Ransomware Isolation & XDR Containment",
      outcome: "Host Contained in Under 90 Seconds",
      detail:
        "Automated CrowdStrike Falcon webhook trigger instantly quarantined a compromised endpoint attempting lateral network movement, preventing file encryption with zero enterprise impact.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-10">
        {/* Main Header Container */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="05" title="CAREER EXPERIENCE & LEADERSHIP" />

          <div className="max-w-3xl mt-4 mb-8">
            <div className="mb-3">
              <KineticHeading
                line1="Career Milestones &"
                line2="Executive Impact."
                goldPart="Executive Impact."
                className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
              />
            </div>
            <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              <TextReveal
                text="Over 5 years of dual-track engineering experience: combining full-stack software development with mission-critical enterprise systems administration and team leadership."
                delay={0.15}
                stagger={0.02}
              />
            </div>
          </div>

          {/* Executive Impact Scorecard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-12">
            {impactStats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 sm:p-5 rounded-2xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all duration-300"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#181813] border border-white/[0.06] text-gold-primary flex items-center justify-center mb-2.5 sm:mb-3">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xl sm:text-3xl font-extrabold text-text-main font-mono mb-1">
                    {item.metric}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-gold-primary/90 mb-0.5 sm:mb-1">
                    {item.label}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-text-muted">
                    {item.sub}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Master Visual Timeline Component */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-primary">
                CAREER TIMELINE
              </span>
            </div>
            <ExperienceTimeline />
          </div>

          {/* Detailed In-Depth Role Breakdown */}
          <div className="space-y-6 pt-10 border-t border-white/[0.06] mb-14">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-primary">
                DETAILED RESPONSIBILITIES
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">
              Verified Corporate Roles & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {experiencesList.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl bg-[#141410] border border-white/[0.08] p-4 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-gold-primary/30 transition-all duration-300 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-text-main">{exp.role}</h3>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-gold-primary bg-[#181813] px-2.5 py-0.5 rounded-full border border-white/[0.05]">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-gold-primary/90 mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    {exp.achievements && (
                      <div className="space-y-2 mb-4">
                        <div className="text-[11px] font-bold text-text-main uppercase tracking-wider">
                          Key Achievements
                        </div>
                        {exp.achievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium text-text-muted bg-[#181813] px-2 py-0.5 rounded border border-white/[0.05]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Career Evolution by Technology Era */}
          <div className="pt-10 border-t border-white/[0.06] mb-14">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-primary">
                TECHNICAL TRAJECTORY
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">
              Evolution of Technical Focus by Era
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {careerEras.map((era, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 rounded-2xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-gold-primary mb-2">
                      {era.era}
                    </div>
                    <h3 className="text-base font-bold text-text-main mb-1.5">{era.title}</h3>
                    <div className="text-xs font-medium text-text-muted mb-3">{era.focus}</div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">{era.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-3 border-t border-white/[0.04]">
                    {era.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] text-text-muted bg-[#181813] px-2 py-0.5 rounded border border-white/[0.05]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Crisis & Incident War Room Track Record */}
          <div className="pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-primary">
                PROVEN RESILIENCE
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">
              Incident Response &amp; War Room Case Studies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {warRoomCases.map((c, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 rounded-2xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all duration-300"
                >
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-gold-bright text-[11px] font-mono mb-3">
                    <CheckCircle2 className="w-3 h-3 text-gold-primary" />
                    <span>{c.outcome}</span>
                  </div>
                  <h3 className="text-sm font-bold text-text-main mb-2">{c.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Executive Resume & Advisory Call CTA */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#181813] via-[#141410] to-[#0D0D0B] border border-gold-primary/30 p-5 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-mono mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-primary" />
                <span>CONFIDENTIAL EXECUTIVE INQUIRIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-3">
                Seeking a Lead Full-Stack Architect or Senior IT Executive?
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Available for high-impact leadership positions, fractional CTO/VP of IT advisories, and mission-critical enterprise infrastructure transformations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/resume.pdf"
                download="MD_Khalid_Senior_IT_Software_Engineer_CV.pdf"
                className="px-6 py-3.5 rounded-xl bg-gold-primary text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-bright transition-all shadow-[0_0_20px_rgba(244,184,63,0.3)] flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Executive CV</span>
              </a>
              <Link href="/#contact">
                <MagneticButton className="px-6 py-3.5 rounded-xl bg-[#181813] border border-white/[0.1] text-text-main font-semibold text-xs uppercase tracking-wider hover:border-gold-primary/40 transition-colors flex items-center justify-center gap-2">
                  <span>Schedule Leadership Call</span>
                  <ArrowRight className="w-4 h-4 text-gold-primary" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
