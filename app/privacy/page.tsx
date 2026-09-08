import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Dev Arjun",
  description: "Privacy policy for Dev Arjun portfolio.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 w-full">
      <div className="max-w-[800px] mx-auto rounded-[24px] bg-[#11110E]/80 border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-gold-bright transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <h1 className="text-3xl font-extrabold text-text-main mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <p>
            Last updated: September 2024. Your privacy is paramount. This website is a personal portfolio showcasing development work, technical projects, and creative demonstrations.
          </p>
          <h2 className="text-base font-bold text-text-main pt-4">1. Information We Collect</h2>
          <p>
            When you submit a message through the contact form, we collect the name, email address, and message content you provide voluntarily solely to respond to your inquiry.
          </p>
          <h2 className="text-base font-bold text-text-main pt-4">2. Cookies and Analytics</h2>
          <p>
            This website does not deploy invasive tracking cookies or third-party behavioral profiling scripts. WebGL and 3D graphics execute entirely client-side on your local GPU.
          </p>
          <h2 className="text-base font-bold text-text-main pt-4">3. Contact</h2>
          <p>
            For any questions regarding your data, please contact hello@devarjun.app.
          </p>
        </div>
      </div>
    </div>
  );
}
