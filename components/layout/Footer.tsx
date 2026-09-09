"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#070706]/80 backdrop-blur-sm py-8 px-4 sm:px-8 mt-16 sm:mt-24">
      <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="flex items-center gap-2.5">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold-primary" fill="none" stroke="currentColor" strokeWidth="1.8">
            <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" stroke="currentColor" fill="rgba(244,184,63,0.08)" />
            <circle cx="12" cy="12" r="2.5" fill="#F4B83F" />
          </svg>
          <span className="font-bold tracking-wider text-xs text-text-main font-mono">
            MD<span className="text-gold-primary">.</span>KHALID
          </span>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-text-muted">
          © {new Date().getFullYear()} MD Khalid. All rights reserved.
        </div>

        {/* Right: Legal & Scroll-to-Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 text-xs text-text-secondary">
            <Link href="/privacy" className="py-1 hover:text-gold-bright transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="py-1 hover:text-gold-bright transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Circular Scroll-to-Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-full bg-[#161612] border border-white/[0.1] hover:border-gold-primary/50 text-text-secondary hover:text-gold-bright flex items-center justify-center transition-all duration-300 shadow-sm group shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
