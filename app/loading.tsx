"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070706]">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 mb-6">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-gold-primary animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" stroke="currentColor" fill="rgba(244,184,63,0.1)" />
          <circle cx="12" cy="12" r="3" fill="#F4B83F" />
        </svg>
        <span className="font-bold tracking-widest text-lg text-text-main font-mono">
          DEV<span className="text-gold-primary">.</span>ARJUN
        </span>
      </div>

      {/* Gold Progress Bar */}
      <div className="w-48 h-[2px] bg-[#1a1a14] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-gold-primary to-gold-bright rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
