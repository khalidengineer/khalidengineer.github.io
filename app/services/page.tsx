"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesList } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import KineticHeading from "@/components/ui/KineticHeading";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import TiltCard from "@/components/ui/TiltCard";
import { Code2, Palette, Database, Gauge, Check, ArrowRight, ShieldCheck, Clock, ChevronDown } from "lucide-react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getIcon = (type: string) => {
    switch (type) {
      case "code":
        return Code2;
      case "palette":
        return Palette;
      case "database":
        return Database;
      case "zap":
        return Gauge;
      default:
        return Code2;
    }
  };

  const processSteps = [
    { num: "01", title: "Discovery & Infrastructure Audit", desc: "Comprehensive review of existing codebases, cloud infrastructure, network topology, security gaps, and operational bottlenecks." },
    { num: "02", title: "Architecture & Threat Modeling", desc: "Formulating technical blueprints, zero-downtime cutover plans, high-fidelity prototypes, and data privacy impact assessments." },
    { num: "03", title: "Execution & Zero-Downtime Rollout", desc: "Iterative sprint execution with automated CI/CD testing, strict code reviews, staging verification, and seamless phased deployments." },
    { num: "04", title: "24/7 SLA Handover & Optimization", desc: "Full runbook documentation, ITIL service desk integration, automated telemetry alerting, and continuous performance tuning." },
  ];

  const faqs = [
    {
      q: "What is your typical project engagement structure?",
      a: "I offer both end-to-end fixed-scope project delivery (from initial system architecture to production launch) and dedicated fractional Lead Systems Architect / Tech Lead retainers for ongoing enterprise modernization."
    },
    {
      q: "How do you guarantee zero downtime during migrations?",
      a: "By leveraging multi-region blue/green deployments, DNS canary routing, automated database replication synchronization, and pre-validated automated rollback triggers."
    },
    {
      q: "Do you sign Mutual Non-Disclosure Agreements (NDAs)?",
      a: "Yes. All enterprise consultations, proprietary business logics, and security infrastructure blueprints are strictly protected under robust legal confidentiality agreements."
    },
    {
      q: "Who owns the code and infrastructure once delivered?",
      a: "You retain 100% complete intellectual property ownership over all codebases, Terraform scripts, configuration policies, and design files upon milestone completion."
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
        {/* Main Section Banner */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
          <SectionHeader number="03" title="SERVICES" />

          <div className="max-w-3xl mt-4 mb-8">
            <div className="mb-3">
              <KineticHeading
                line1="High-Impact Engineering &"
                line2="Design Solutions."
                goldPart="Design Solutions."
                className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold"
              />
            </div>
            <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              <TextReveal
                text="From high-conversion SaaS web applications to enterprise cloud infrastructure hardening, I provide comprehensive full-lifecycle engineering services designed to exceed technical benchmarks."
                delay={0.15}
                stagger={0.02}
              />
            </div>
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
            {servicesList.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-2xl bg-[#141410] border border-white/[0.08] p-4 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-gold-primary/30 transition-all duration-300 shadow-sm scroll-mt-28"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-gold-primary/80 px-2.5 py-1 rounded-full bg-[#181813] border border-white/[0.05]">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-text-main mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <div className="text-xs font-bold text-text-main uppercase tracking-wider mb-3">
                        Capabilities
                      </div>
                      <ul className="space-y-2">
                        {service.features?.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                            <Check className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-6 pt-4 border-t border-white/[0.05]">
                      <div className="text-xs font-bold text-text-main uppercase tracking-wider mb-3">
                        Deliverables
                      </div>
                      <ul className="space-y-2">
                        {service.deliverables?.map((d, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary/60 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact">
                    <MagneticButton className="w-full py-2.5 rounded-xl bg-[#181813] hover:bg-gold-primary hover:text-black text-text-main border border-white/[0.1] hover:border-gold-primary text-xs font-semibold tracking-wide transition-all duration-300 gap-2 flex items-center justify-center">
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </MagneticButton>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Engineering Delivery Process */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-gold-primary" />
            <span className="text-xs font-mono text-gold-primary uppercase tracking-wider font-bold">
              METHODOLOGY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-6 sm:mb-8">4-Step Delivery Process</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {processSteps.map((p, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl bg-[#141410] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-black text-gold-primary/40 block mb-2">
                    {p.num}
                  </span>
                  <h3 className="text-sm font-bold text-text-main mb-2">{p.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Service FAQs */}
        <div className="rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="mb-6">
            <span className="text-xs font-mono text-gold-primary uppercase tracking-wider font-bold">
              COMMON QUESTIONS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-text-main mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#141410] border border-white/[0.06] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between text-left font-semibold text-xs sm:text-sm text-text-main hover:text-gold-bright transition-colors gap-3"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-primary transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-4 text-xs text-text-secondary leading-relaxed border-t border-white/[0.04] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
