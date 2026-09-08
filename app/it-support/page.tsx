import React from "react";
import ITSupportSection from "@/components/it-support/ITSupportSection";
import NetworkTopologySection from "@/components/executive/NetworkTopologySection";
import DisasterRecoverySection from "@/components/executive/DisasterRecoverySection";
import ComplianceSecuritySection from "@/components/executive/ComplianceSecuritySection";
import ZeroTouchLifecycleSection from "@/components/executive/ZeroTouchLifecycleSection";
import SLAMatrixSection from "@/components/executive/SLAMatrixSection";
import FinOpsVendorSection from "@/components/executive/FinOpsVendorSection";
import ITLeadershipSection from "@/components/executive/ITLeadershipSection";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import {
  ShieldAlert,
  Server,
  Activity,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileText,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Senior IT Support & Enterprise Infrastructure — Dev Arjun",
  description:
    "Tier-3 enterprise IT support, hybrid cloud systems administration, network architecture, zero-trust cybersecurity, and IT leadership by Dev Arjun.",
};

export default function ITSupportPage() {
  const telemetry = [
    { label: "Infrastructure Uptime", value: "99.995%", sub: "SLA Guaranteed", icon: Activity },
    { label: "Endpoints Managed", value: "12,500+", sub: "Intune & JAMF Fleet", icon: Cpu },
    { label: "Mean Time to Resolve", value: "< 12 min", sub: "P1 Incident MTTR", icon: Server },
    { label: "Zero-Trust Compliance", value: "100%", sub: "SOC 2 & ISO 27001", icon: Lock },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-10">
        {/* Executive Command Center Banner */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="08" title="IT INFRASTRUCTURE COMMAND CENTER" />

          <div className="max-w-3xl mt-4 mb-8">
            <div className="mb-3">
              <KineticHeading
                line1="Enterprise Infrastructure &"
                line2="Mission-Critical Operations."
                goldPart="Mission-Critical Operations."
                className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
              />
            </div>
            <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              <TextReveal
                text="Senior IT Executive & Systems Architect providing Tier-3 escalation, multi-site network engineering, Zero-Trust cybersecurity, and automated fleet lifecycle operations for enterprise organizations."
                delay={0.15}
                stagger={0.02}
              />
            </div>
          </div>

          {/* Telemetry Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
            {telemetry.map((item, idx) => {
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

          {/* Quick Jump Anchor Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/[0.06]">
            <span className="text-[11px] sm:text-xs font-semibold text-text-muted self-center mr-1 sm:mr-2">Jump to:</span>
            {[
              { label: "Core Services", href: "#it-support" },
              { label: "Network Topology", href: "#network-topology" },
              { label: "Disaster Recovery", href: "#disaster-recovery" },
              { label: "Security & GRC", href: "#security-compliance" },
              { label: "Zero-Touch", href: "#zero-touch" },
              { label: "SLA Matrix", href: "#sla-matrix" },
              { label: "FinOps", href: "#finops-vendor" },
              { label: "IT Leadership", href: "#it-leadership" },
            ].map((anchor) => (
              <a
                key={anchor.label}
                href={anchor.href}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-[#181813] border border-white/[0.06] text-[10px] sm:text-[11px] font-medium text-text-secondary hover:text-gold-primary hover:border-gold-primary/40 transition-colors"
              >
                {anchor.label}
              </a>
            ))}
          </div>
        </div>

        {/* 1. Core IT Support & Systems */}
        <div id="it-support">
          <ITSupportSection />
        </div>

        {/* 2. Network Topology & SD-WAN */}
        <div id="network-topology">
          <NetworkTopologySection />
        </div>

        {/* 3. Disaster Recovery & BCP */}
        <div id="disaster-recovery">
          <DisasterRecoverySection />
        </div>

        {/* 4. Security, Governance & GRC */}
        <div id="security-compliance">
          <ComplianceSecuritySection />
        </div>

        {/* 5. Zero-Touch Lifecycle Automation */}
        <div id="zero-touch">
          <ZeroTouchLifecycleSection />
        </div>

        {/* 6. SLA Matrix & Escalation */}
        <div id="sla-matrix">
          <SLAMatrixSection />
        </div>

        {/* 7. FinOps & Vendor Management */}
        <div id="finops-vendor">
          <FinOpsVendorSection />
        </div>

        {/* 8. IT Leadership & Change Advisory Board */}
        <div id="it-leadership">
          <ITLeadershipSection />
        </div>

        {/* Executive Emergency Response & Infrastructure Audit Call to Action */}
        <div className="rounded-[24px] bg-gradient-to-br from-[#181813] via-[#141410] to-[#0D0D0B] border border-gold-primary/30 p-5 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-gold-bright text-xs font-mono mb-4">
                <ShieldAlert className="w-3.5 h-3.5 text-gold-primary" />
                <span>ENTERPRISE READINESS GUARANTEED</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main leading-tight mb-3">
                Need an Infrastructure Audit or Tier-3 Incident Response?
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Whether you need an exhaustive security compliance review, zero-touch fleet rollout, cloud cost reduction, or fractional IT leadership, let&apos;s schedule a confidential discovery session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/#contact">
                <MagneticButton className="px-6 py-3.5 rounded-xl bg-gold-primary text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-bright transition-all shadow-[0_0_20px_rgba(244,184,63,0.3)] flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Request IT Audit</span>
                </MagneticButton>
              </Link>
              <a
                href="mailto:contact@devarjun.com?subject=Enterprise%20IT%20Inquiry"
                className="px-6 py-3.5 rounded-xl bg-[#181813] border border-white/[0.1] text-text-main font-semibold text-xs uppercase tracking-wider hover:border-gold-primary/40 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold-primary" />
                <span>Contact Lead Architect</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
