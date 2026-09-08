import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, CheckCircle2, ArrowRight, Award, Compass, HeartHandshake, Laptop, ShieldCheck, Server, Terminal, Layers } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import TiltCard from "@/components/ui/TiltCard";

export const metadata = {
  title: "About — Dev Arjun | Senior Full-Stack Engineer & IT Executive",
  description: "Learn more about Arjun, a passionate Full-Stack Developer and Senior IT Systems Architect with 5+ years of experience building scalable digital products and enterprise cloud infrastructure.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Problem Solver by Nature",
      description: "Approaching complex architectural challenges with analytical thinking, root-cause diagnostics, and resilient engineering solutions.",
      icon: Compass,
    },
    {
      title: "Clean & Maintainable Code",
      description: "Writing strict, testable TypeScript and Infrastructure-as-Code (Terraform) that scales effortlessly across enterprise teams.",
      icon: Award,
    },
    {
      title: "Obsessed with Performance & UX",
      description: "Crafting sub-second digital experiences and zero-latency internal tools where every pixel and millisecond feels fluid.",
      icon: HeartHandshake,
    },
  ];

  const competencies = [
    { title: "Full-Stack Software Architecture", desc: "Next.js 14, React, TypeScript, Node.js, GraphQL, REST APIs, Microservices", icon: Terminal },
    { title: "Enterprise Cloud & Systems", desc: "AWS, Microsoft Azure, Windows Server 2022, Linux RHEL/Ubuntu, VMware ESXi", icon: Server },
    { title: "Zero-Trust Cybersecurity & GRC", desc: "Microsoft Entra ID, FIDO2 MFA, PAM, SOC 2 Type II, ISO 27001, CrowdStrike", icon: ShieldCheck },
    { title: "Enterprise Endpoint MDM", desc: "Microsoft Intune, Windows Autopilot, JAMF Pro, Zero-Touch fleet lifecycle", icon: Laptop },
    { title: "FinOps & Vendor Management", desc: "Cloud rightsizing, SaaS consolidation, Microsoft EA and Cisco contract tenders", icon: Layers },
    { title: "ITIL Service Operations", desc: "ITIL v4 governance, Change Advisory Board (CAB) leadership, Tier-3 escalation", icon: Compass },
  ];

  const battlestation = [
    { label: "Primary Workstation", spec: "MacBook Pro 16\" (M3 Max, 64GB Unified RAM, 2TB SSD)" },
    { label: "Secondary Lab Rig", spec: "Custom Dell Precision Tower (64GB RAM, Linux Ubuntu Server / Hyper-V)" },
    { label: "Display Setup", spec: "Dual ASUS ProArt 32\" 4K HDR Color-Calibrated Displays on Ergotron Arms" },
    { label: "Network Core", spec: "Ubiquiti UniFi Dream Machine Special Edition (10 Gbps SFP+ routing)" },
    { label: "Peripherals", spec: "Keychron Q3 Pro Wireless Custom Mechanical Keyboard + Logitech MX Master 3S" },
    { label: "Backup Power", spec: "APC Smart-UPS 1500VA Sine Wave Uninterruptible Power Supply" },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
        {/* Main Header Card */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="01" title="ABOUT ME" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-4">
            {/* Left Column: Portrait & Signature */}
            <div className="lg:col-span-5 relative">
              <div className="relative max-w-[280px] mx-auto lg:max-w-none aspect-[3/3.8] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#141410]">
                <Image
                  src="/images/profile/about-laptop.webp"
                  alt="Dev Arjun working on code"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 font-signature text-gold-bright text-3xl select-none drop-shadow-md">
                  Arjun
                </div>
              </div>
            </div>

            {/* Right Column: In-depth Story */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <KineticHeading
                    line1="Building solutions"
                    line2="with code & creativity."
                    goldPart="creativity."
                    className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
                  />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed mb-8">
                  <p>
                    I&apos;m a passionate Full-Stack Developer and Senior IT Systems Architect with 5+ years of experience building modern web applications, distributed cloud backends, and enterprise IT infrastructure.
                  </p>
                  <p>
                    My background is uniquely hybrid: bridging high-craft creative frontend engineering (Next.js, Three.js, React) with mission-critical enterprise systems administration (Azure AD, Active Directory, Cisco SD-WAN, and zero-trust cybersecurity).
                  </p>
                  <p>
                    I have managed IT fleets of over 2,500 endpoints, maintained 99.99% infrastructure uptime, chaired weekly Change Advisory Boards (CAB), and reduced annual enterprise software budgets by over $180,000 through automated license governance.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="/resume.pdf" download="Dev_Arjun_Resume.pdf">
                  <MagneticButton className="px-6 py-3 rounded-xl bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(244,184,63,0.3)] transition-all flex items-center gap-2">
                    <span>Download Full CV</span>
                    <Download className="w-4 h-4 stroke-[2.5]" />
                  </MagneticButton>
                </a>

                <Link href="/contact">
                  <MagneticButton className="px-6 py-3 rounded-xl bg-[#181813] hover:bg-[#1f1f18] text-text-main border border-white/[0.1] text-xs sm:text-sm font-semibold transition-all flex items-center gap-2">
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 text-gold-primary" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Guiding Principles 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <TiltCard key={idx} maxTilt={4} className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-[#11110E]/80">
                <div style={{ transform: "translateZ(15px)" }}>
                  <div className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-text-main mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Core Competencies Matrix */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="mb-6">
            <span className="text-xs font-mono text-gold-primary uppercase tracking-wider font-bold">
              AREAS OF EXPERTISE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mt-1">Core Competency Matrix</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {competencies.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#181813] text-gold-primary flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-text-main">{c.title}</h3>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Battlestation & Productivity Setup */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Laptop className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-mono text-gold-primary uppercase tracking-wider font-bold">
              HARDWARE &amp; ENVIRONMENT
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6">Daily Engineering Setup</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {battlestation.map((b, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-[#141410] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
              >
                <span className="text-[11px] sm:text-xs font-semibold text-text-muted sm:text-text-secondary shrink-0">{b.label}</span>
                <span className="text-xs font-mono text-text-main text-left sm:text-right">{b.spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
