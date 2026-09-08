"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
  rightElement?: ReactNode;
}

export default function SectionHeader({
  number,
  title,
  className,
  rightElement,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-between gap-2.5 w-full mb-5 sm:mb-6", className)}>
      <div className="inline-flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#161612] border border-white/[0.08] shadow-sm max-w-full">
        <span className="text-[10px] sm:text-[11px] font-semibold text-gold-primary tracking-wider font-mono shrink-0">
          {number}
        </span>
        <span className="w-1 h-1 rounded-full bg-gold-primary/40 shrink-0" />
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-text-secondary uppercase truncate">
          {title}
        </span>
      </div>

      {rightElement && <div className="shrink-0">{rightElement}</div>}
    </div>
  );
}
