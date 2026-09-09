import React from "react";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ServicesSection from "@/components/services/ServicesSection";
import ITSupportSection from "@/components/it-support/ITSupportSection";
import ZeroTouchLifecycleSection from "@/components/executive/ZeroTouchLifecycleSection";
import SLAMatrixSection from "@/components/executive/SLAMatrixSection";
import FinOpsVendorSection from "@/components/executive/FinOpsVendorSection";
import ITLeadershipSection from "@/components/executive/ITLeadershipSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Side-by-side Row: 01 ABOUT ME & 02 SKILLS & STACK */}
      <section className="w-full px-4 sm:px-6 py-1">
        <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          <AboutSection />
          <SkillsSection />
        </div>
      </section>

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Senior IT Support & Enterprise Operations Section */}
      <ITSupportSection />




      {/* 8. Zero-Touch Onboarding & Lifecycle Automation */}
      <ZeroTouchLifecycleSection />

      {/* 9. Service Desk SLA & Incident Escalation Matrix */}
      <SLAMatrixSection />

      {/* 10. FinOps, Vendor Management & Cloud Cost Optimization */}
      <FinOpsVendorSection />

      {/* 11. IT Leadership & Change Advisory Board (CAB) Governance */}
      <ITLeadershipSection />

      {/* 12. Featured Projects Section */}
      <ProjectsSection />

      {/* 13. Experience Timeline Section */}
      <ExperienceSection />

      {/* 14. Testimonials Section */}
      <TestimonialsSection />

      {/* 15. Contact Section */}
      <ContactSection />
    </div>
  );
}
