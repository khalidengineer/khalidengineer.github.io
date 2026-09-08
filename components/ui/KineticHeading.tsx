"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticHeadingProps {
  line1: string;
  line2: string;
  goldPart?: string;
  className?: string;
  delay?: number;
}

export default function KineticHeading({
  line1,
  line2,
  goldPart,
  className,
  delay = 0.02,
}: KineticHeadingProps) {
  return (
    <h2 className={cn("flex flex-col font-extrabold tracking-tight text-text-main", className)}>
      {/* Line 1 */}
      <span className="block pb-0.5">
        <motion.span
          initial={false}
          whileInView={{
            opacity: [0.75, 1],
            y: [8, 0],
            filter: ["brightness(0.9)", "brightness(1)"],
          }}
          transition={{ duration: 0.5, delay: delay, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: "some" }}
          className="inline-block will-change-transform text-text-main font-extrabold"
        >
          {line1}
        </motion.span>
      </span>

      {/* Line 2 with Shimmering Gold Accent */}
      <span className="block pb-0.5">
        <motion.span
          initial={false}
          whileInView={{
            opacity: [0.75, 1],
            y: [8, 0],
            filter: ["brightness(0.9)", "brightness(1)"],
          }}
          transition={{ duration: 0.5, delay: delay + 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: "some" }}
          className="inline-block will-change-transform text-text-main font-extrabold"
        >
          {goldPart && line2.includes(goldPart) ? (
            <>
              <span>{line2.substring(0, line2.indexOf(goldPart))}</span>
              <span className="text-gold-shimmer text-glow-pulse font-extrabold">
                {goldPart}
              </span>
              <span>{line2.substring(line2.indexOf(goldPart) + goldPart.length)}</span>
            </>
          ) : (
            <span className="text-gold-shimmer font-extrabold">{line2}</span>
          )}
        </motion.span>
      </span>
    </h2>
  );
}
