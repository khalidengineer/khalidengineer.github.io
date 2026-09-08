"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Layers, Handshake, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";

export default function FinOpsVendorSection() {
  const finOpsMetrics = [
    { value: "$184,000+", label: "Annualized Cost Savings", desc: "Realized through cloud right-sizing & license audits" },
    { value: "34%", label: "Cloud Spend Reduction", desc: "Achieved via AWS Compute Savings Plans & auto-shutdown" },
    { value: "42", label: "Redundant Tools Cut", desc: "Consolidated shadow IT & duplicate SaaS applications" },
    { value: "18.5%", label: "Average Vendor Discount", desc: "Negotiated across enterprise master service agreements" },
  ];

  const initiatives = [
    {
      title: "SaaS License Audit & Consolidation",
      desc: "Conducted automated Single Sign-On utilization audits across 80+ company software tools. Revoked dormant user seats and migrated scattered tools into standardized Microsoft 365 enterprise suites.",
      saving: "$68,000/yr Saved",
      icon: Layers,
    },
    {
      title: "Cloud FinOps & Infrastructure Rightsizing",
      desc: "Instituted automated CloudWatch & Azure Cost Management policies. Transitioned steady-state workloads to 3-year Reserved Instances and automated non-production staging server shutdown schedules.",
      saving: "$74,000/yr Saved",
      icon: TrendingDown,
    },
    {
      title: "Hardware Procurement & Vendor Contracts",
      desc: "Consolidated corporate hardware buying tenders under direct OEM partner programs (Dell & Apple). Secured standardized 3-year ProSupport Plus warranty SLAs and volume discount pricing.",
      saving: "$42,000/yr Saved",
      icon: Handshake,
    },
  ];

  const vendorPartners = [
    "Microsoft Enterprise Agreement (EA)",
    "Amazon Web Services (AWS)",
    "Cisco Systems Partner Network",
    "Dell Technologies Premier",
    "Fortinet Platinum Partner",
    "JAMF Pro Enterprise MDM",
  ];

  return (
    <section id="finops-vendor" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="13" title="FINOPS & VENDOR MANAGEMENT" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="IT Capital Efficiency &"
              line2="Cloud Cost Optimization."
              goldPart="Cloud Cost Optimization."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Optimizing multi-million-dollar technology budgets, eliminating SaaS license sprawl, executing high-stakes vendor negotiations, and implementing rigorous FinOps disciplines across cloud environments."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Savings Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {finOpsMetrics.map((m, idx) => (
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

        {/* 3 Strategic Cost Reduction Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
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
                      <div className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-success bg-success/10 border border-success/20 px-2.5 py-0.5 rounded-full">
                        {item.saving}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-text-main mb-2">{item.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Vendor Partners Ribbon */}
        <div className="pt-6 border-t border-white/[0.06]">
          <div className="text-xs font-bold text-text-main uppercase tracking-wider mb-3">
            Enterprise Vendor Relationships Managed
          </div>
          <div className="flex flex-wrap gap-2">
            {vendorPartners.map((v, i) => (
              <span
                key={i}
                className="text-xs font-medium text-text-secondary bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 px-3 py-1.5 rounded-lg transition-colors"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
