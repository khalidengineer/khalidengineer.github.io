"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Truck, Laptop, UserMinus, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";
import TiltCard from "../ui/TiltCard";

export default function ZeroTouchLifecycleSection() {
  const steps = [
    {
      step: "01",
      title: "HR Event Trigger",
      timeline: "Day -7 Prior to Start",
      icon: UserPlus,
      desc: "New hire creation in Workday / BambooHR triggers webhook automating Azure AD user creation, dynamic group assignments, and Microsoft 365 licensing.",
      details: ["Automated Okta / Azure AD sync", "Birthright access profile binding", "Secure temporary access pass SMS"],
    },
    {
      step: "02",
      title: "Direct-to-Door Dispatch",
      timeline: "Day -3 Hardware Shipment",
      icon: Truck,
      desc: "Factory-sealed laptop ships directly from OEM vendor to employee home. Serial number pre-assigned into Windows Autopilot / Apple Business Manager.",
      details: ["Zero IT handling required", "Automated asset tag inventory log", "FedEx / UPS tracking webhook integration"],
    },
    {
      step: "03",
      title: "Day-One Self-Enrollment",
      timeline: "Day 1 (12 Minutes)",
      icon: Laptop,
      desc: "Employee powers on device and inputs corporate credentials. Device automatically enforces BitLocker encryption, installs corporate apps, and deploys certificates.",
      details: ["Zero-touch Intune / JAMF profile push", "Silent installation of Slack, Office & Zoom", "Hardware TPM 2.0 key escrowed in cloud"],
    },
    {
      step: "04",
      title: "1-Click Instant Offboarding",
      timeline: "Immediate Exit Trigger",
      icon: UserMinus,
      desc: "Instantaneous revocation of all OAuth refresh tokens, session kill across all devices, email forwarding, and remote cryptographic device wipe.",
      details: ["1-click automated account freeze", "Remote cryptographic storage sanitization", "Automated prepaid return shipping label"],
    },
  ];

  const stats = [
    { value: "12 Mins", label: "Unbox to Fully Configured", sub: "Down from 3 days manual imaging" },
    { value: "92%", label: "Reduction in IT Hours", sub: "Engineers focus on high-value projects" },
    { value: "100%", label: "Hardware Encryption Rate", sub: "Mandatory BitLocker & FileVault" },
    { value: "< 60s", label: "Offboarding Revocation", sub: "Complete access termination speed" },
  ];

  return (
    <section id="zero-touch" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="11" title="ZERO-TOUCH LIFECYCLE AUTOMATION" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-4 mb-8">
          <div className="mb-3">
            <KineticHeading
              line1="Automated Employee Lifecycle &"
              line2="Zero-Touch Hardware Deployment."
              goldPart="Zero-Touch Hardware Deployment."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="Bridging HR information systems with cloud directory automation and OEM drop-shipping, reducing employee machine setup from 3 days of manual imaging to under 15 minutes of user self-service."
              delay={0.12}
              stagger={0.02}
            />
          </div>
        </div>

        {/* Lifecycle Flow 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
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
                  <div style={{ transform: "translateZ(15px)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-gold-primary/80 font-bold">
                        STEP {s.step}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-text-muted mb-1">{s.timeline}</div>
                    <h4 className="text-sm font-bold text-text-main mb-2">{s.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">{s.desc}</p>

                    <div className="space-y-1.5 pt-3 border-t border-white/[0.04]">
                      {s.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-text-muted">
                          <CheckCircle2 className="w-3 h-3 text-gold-primary shrink-0" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Lifecycle Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-6 border-t border-white/[0.06]">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-3 sm:p-3.5 rounded-xl bg-[#141410] border border-white/[0.06] text-center"
            >
              <div className="text-xl font-bold text-gold-bright font-mono mb-0.5">{st.value}</div>
              <div className="text-xs font-bold text-text-main mb-0.5">{st.label}</div>
              <div className="text-[10px] text-text-muted">{st.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
