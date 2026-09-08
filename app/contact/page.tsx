import React from "react";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  title: "Contact — Dev Arjun",
  description: "Get in touch with Arjun to discuss web development, frontend architecture, and technical design.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-8">
        <ContactSection />
      </div>
    </div>
  );
}
