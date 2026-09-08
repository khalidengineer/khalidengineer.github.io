"use client";

import React from "react";
import { servicesList } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="03" title="SERVICES" />

        {/* Section Headline */}
        <div className="max-w-3xl mt-2 mb-6">
          <div className="mb-2">
            <KineticHeading
              line1="High-Impact Engineering &"
              line2="Full-Lifecycle Solutions."
              goldPart="Full-Lifecycle Solutions."
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold"
            />
          </div>
          <div className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            <TextReveal
              text="From high-performance SaaS web applications to enterprise cloud infrastructure hardening, delivering digital solutions that scale reliably."
              delay={0.08}
            />
          </div>
        </div>

        {/* 4 Columns Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-4">
          {servicesList.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
