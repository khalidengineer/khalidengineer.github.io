"use client";

import React, { useState } from "react";
import { projectsList } from "@/lib/data";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import {
  Sparkles,
  Server,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  Code2,
  Database,
  Lock,
} from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === "all") return true;
    const cat = (project.category || "").toLowerCase();
    if (activeFilter === "web") {
      return cat.includes("web") || cat.includes("creative");
    }
    if (activeFilter === "infra") {
      return cat.includes("cloud") || cat.includes("enterprise") || cat.includes("secops");
    }
    return true;
  });

  const reliabilityMetrics = [
    { label: "Guaranteed SLA", value: "99.99%", sub: "Zero-Downtime Releases", icon: Zap },
    { label: "Global P95 Edge Latency", value: "< 45ms", sub: "Cloudflare & Vercel Edge", icon: Server },
    { label: "Active Enterprise Users", value: "10,000+", sub: "Across Production Deployments", icon: Layers },
    { label: "Security & GRC Verification", value: "SOC 2 / ISO", sub: "Type II Audited Architectures", icon: ShieldCheck },
  ];

  const architecturalPillars = [
    {
      title: "Zero-Trust Identity Boundary",
      desc: "Every API call, database query, and admin interface is authenticated using modern FIDO2, OAuth2/OIDC, and context-aware conditional access policies.",
      icon: Lock,
    },
    {
      title: "Cloud-Native Scalability",
      desc: "Built with Next.js Server Components, edge runtime compute, and globally replicated distributed databases capable of handling sudden 10x traffic surges.",
      icon: Database,
    },
    {
      title: "Strict Type Safety & DevSecOps",
      desc: "End-to-end TypeScript types across full-stack boundaries, automated CI/CD security scanning (SAST/DAST), and reproducible Terraform infrastructure.",
      icon: Code2,
    },
    {
      title: "Distributed Observability",
      desc: "Real-time OpenTelemetry tracing, Datadog metric dashboards, and automated P1/P2 alerting ensuring sub-15 minute mean-time-to-resolution (MTTR).",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-10">
        {/* Main Showcase Banner */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="04" title="FEATURED PROJECTS & SYSTEMS" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 mt-4">
            <div>
              <div className="mb-3">
                <KineticHeading
                  line1="Featured Work &"
                  line2="Mission-Critical Systems."
                  goldPart="Mission-Critical Systems."
                  className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
                />
              </div>
              <div className="text-xs sm:text-sm text-text-secondary max-w-xl leading-relaxed">
                <TextReveal
                  text="Explore a curated portfolio of full-stack web applications, distributed cloud platforms, zero-trust cybersecurity architectures, and enterprise fleet rollouts."
                  delay={0.15}
                  stagger={0.02}
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-[#141410] border border-white/[0.06] shrink-0">
              {[
                { id: "all", label: `All Systems (${projectsList.length})` },
                { id: "web", label: "Web & SaaS (3)" },
                { id: "infra", label: "Cloud & SecOps (3)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeFilter === tab.id
                      ? "bg-gold-primary text-black shadow-[0_0_12px_rgba(244,184,63,0.3)]"
                      : "text-text-secondary hover:text-text-main hover:bg-white/[0.04]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reliability Metric Scorecard */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-10">
            {reliabilityMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3 sm:p-5 rounded-2xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-text-muted uppercase tracking-wider truncate">
                      {item.label}
                    </span>
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#181813] border border-white/[0.06] text-gold-primary flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="text-xl sm:text-3xl font-extrabold text-text-main font-mono">
                    {item.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gold-primary/80 font-mono mt-1">
                    {item.sub}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Architectural Standards & Engineering Methodology */}
          <div className="pt-10 border-t border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-gold-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-primary">
                ENGINEERING RIGOR
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">
              Architectural Standards Applied to Every Build
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {architecturalPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-main mb-1.5">{pillar.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Custom Engineering & Enterprise RFP Request Callout */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#181813] via-[#141410] to-[#0D0D0B] border border-gold-primary/30 p-5 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-mono mb-4">
                <Code2 className="w-3.5 h-3.5 text-gold-primary" />
                <span>ENTERPRISE SPECIFICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-3">
                Have a Complex System Architecture in Mind?
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Whether you are designing a high-velocity consumer web app or an enterprise cloud environment with strict SOC 2 compliance, I bring end-to-end technical execution from day one.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/#contact">
                <MagneticButton className="px-6 py-3.5 rounded-xl bg-gold-primary text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-bright transition-all shadow-[0_0_20px_rgba(244,184,63,0.3)] flex items-center justify-center gap-2">
                  <span>Discuss Your Project</span>
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
