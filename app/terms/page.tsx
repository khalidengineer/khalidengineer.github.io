import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service — MD Khalid",
  description: "Terms of service for MD Khalid portfolio.",
};

export default function TermsPage() {
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

        <h1 className="text-3xl font-extrabold text-text-main mb-6">Terms of Service</h1>
        <div className="space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
          <p>
            Last updated: September 2024. By accessing and browsing this portfolio website, you agree to comply with and be bound by the following terms.
          </p>
          <h2 className="text-base font-bold text-text-main pt-4">1. Intellectual Property</h2>
          <p>
            All code samples, visual designs, interactive demonstrations, and brand assets presented on this site are the intellectual property of MD Khalid unless stated otherwise.
          </p>
          <h2 className="text-base font-bold text-text-main pt-4">2. Client Work &amp; Case Studies</h2>
          <p>
            Client logos, trademarks, and associated trade secrets featured in case studies belong to their respective corporate copyright holders and are displayed strictly for educational and portfolio demonstration purposes.
          </p>
          <h2 className="text-base font-bold text-text-main pt-4">3. Governing Law</h2>
          <p>
            These terms are governed by the laws of California, United States without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
}
