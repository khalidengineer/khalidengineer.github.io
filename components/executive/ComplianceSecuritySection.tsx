"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, UserCheck, Key, Eye, AlertTriangle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";

export default function ComplianceSecuritySection() {
  const frameworks = [
    { name: "SOC 2 Type II", status: "Audit Ready", desc: "Security, Availability & Confidentiality Trust Principles" },
    { name: "ISO 27001", status: "ISMS Compliant", desc: "Information Security Management System standards" },
    { name: "HIPAA Security Rule", status: "ePHI Protected", desc: "Encrypted data handling & BAA vendor compliance" },
    { name: "GDPR / CCPA", status: "Privacy Aligned", desc: "Data residency, consent logs & right-to-be-forgotten" },
    { name: "PCI-DSS v4.0", status: "Level 1 Verified", desc: "Payment cardholder data tokenization & encryption" },
    { name: "NIST CSF 2.0", status: "Core Implemented", desc: "Identify, Protect, Detect, Respond & Recover" },
  ];

  const pillars = [
    {
      title: "Zero-Trust Identity & Conditional Access",
      desc: "Enforced biometric FIDO2 hardware keys, risk-based login challenges, and continuous token validation via Microsoft Entra ID P2.",
      icon: UserCheck,
      badge: "Zero-Trust",
    },
    {
      title: "Privileged Access Management (PAM & JIT)",
      desc: "Eliminated standing domain admin accounts. Implemented Just-In-Time (JIT) role elevation with automated time-based access expiration and session recording.",
      icon: Key,
      badge: "Least Privilege",
    },
    {
      title: "Extended Detection & Response (XDR / SIEM)",
      desc: "Integrated centralized audit log ingestion and endpoint telemetry via Microsoft Sentinel and CrowdStrike Falcon with automated heuristic containment.",
      icon: Eye,
      badge: "24/7 Telemetry",
    },
    {
      title: "Phishing Simulation & Security Culture",
      desc: "Quarterly simulated social engineering campaigns maintaining a 96.4% employee detection rate and zero credential harvest incidents across the organization.",
      icon: AlertTriangle,
      badge: "Human Firewall",
    },
  ];

  return (
    <section id="compliance-security" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="10" title="GOVERNANCE, COMPLIANCE & GRC" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="Enterprise Audit Readiness &"
              line2="Zero-Trust Cybersecurity."
              goldPart="Zero-Trust Cybersecurity."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Institutionalizing rigorous SOC 2 Type II audit standards, ISO 27001 security controls, least-privilege PAM architectures, and real-time threat telemetry to safeguard enterprise assets."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Audit Frameworks Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {frameworks.map((fw, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-2.5 sm:p-3 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors flex flex-col justify-between text-center"
            >
              <div>
                <div className="text-xs font-bold text-text-main mb-1">{fw.name}</div>
                <div className="text-[10px] text-text-muted leading-tight mb-2">{fw.desc}</div>
              </div>
              <div className="inline-flex items-center justify-center gap-1 text-[10px] font-mono text-gold-primary bg-[#181813] px-2 py-0.5 rounded-full border border-gold-primary/20">
                <FileCheck2 className="w-2.5 h-2.5" />
                <span>{fw.status}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Architecture Pillars 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                      <span className="text-[10px] font-semibold text-gold-primary bg-gold-primary/[0.08] border border-gold-primary/20 px-2.5 py-1 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>

                    <h4
                      className="text-base font-bold text-text-main mb-2"
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {pillar.title}
                    </h4>

                    <p
                      className="text-xs text-text-secondary leading-relaxed"
                      style={{ transform: "translateZ(15px)" }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
