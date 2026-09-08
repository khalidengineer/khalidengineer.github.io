"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/lib/data";
import ContactForm from "./ContactForm";
import SectionHeader from "../ui/SectionHeader";
import KineticHeading from "../ui/KineticHeading";
import TextReveal from "../ui/TextReveal";

export default function ContactSection() {
  const details = [
    { label: "Email", value: contactInfo.email, icon: Mail, href: `mailto:${contactInfo.email}` },
    { label: "Phone", value: contactInfo.phone, icon: Phone, href: `tel:${contactInfo.phone}` },
    { label: "Location", value: contactInfo.location, icon: MapPin },
    { label: "Availability", value: contactInfo.availability, icon: Clock },
  ];

  return (
    <section id="contact" className="w-full px-4 sm:px-6 py-3">
      <div className="max-w-[1220px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-4 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden">
        {/* Section Header */}
        <SectionHeader number="07" title="GET IN TOUCH" />

        {/* 3 Columns Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
          {/* Column 1: Headline & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <KineticHeading
                  line1="Let's build something"
                  line2="amazing together."
                  goldPart="amazing"
                  className="text-2xl sm:text-3xl leading-tight font-extrabold"
                />
              </div>

              <div className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
                <TextReveal
                  text="Have a project in mind or want to say hello? I'd love to hear from you."
                  delay={0.25}
                  stagger={0.03}
                />
              </div>
            </div>
          </div>

          {/* Column 2: Working Form (5 cols) */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>

          {/* Column 3: Contact Details List (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {details.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#141410] border border-white/[0.06] hover:border-gold-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#181813] border border-white/[0.08] text-gold-primary flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-text-muted">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-xs font-medium text-text-main hover:text-gold-bright transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-xs font-medium text-text-main">{item.value}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
