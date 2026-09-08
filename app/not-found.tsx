import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      <div className="w-16 h-16 rounded-2xl bg-[#141410] border border-white/[0.08] flex items-center justify-center text-gold-primary mb-6 shadow-[0_0_30px_rgba(244,184,63,0.15)]">
        <span className="text-2xl font-mono font-bold">404</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main mb-3">Page Not Found</h1>
      <p className="text-sm text-text-secondary max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been moved to a new digital coordinate.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs sm:text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(244,184,63,0.3)]"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
