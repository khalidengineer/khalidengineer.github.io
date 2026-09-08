"use client";

import React from "react";
import DecoderText from "../ui/DecoderText";

export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151511] border border-white/[0.08] text-xs text-text-secondary w-fit shadow-inner group hover:border-gold-primary/40 transition-colors">
      {/* Pulsing Green Dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-success shadow-[0_0_8px_#73D7A1]" />
      </span>
      <span className="text-[12px] font-medium tracking-wide">
        <DecoderText text="Available for new opportunities" delay={150} />
      </span>
    </div>
  );
}
