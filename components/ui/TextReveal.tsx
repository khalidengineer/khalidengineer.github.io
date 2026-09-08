"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  highlightWord?: string;
  highlightClassName?: string;
  once?: boolean;
}

export default function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.015,
  highlightWord,
  highlightClassName = "text-gold-shimmer font-extrabold",
  once = false,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      initial={false}
      whileInView={{ opacity: [0.85, 1], y: [4, 0] }}
      viewport={{ once, amount: "some" }}
      transition={{ duration: 0.45, delay }}
      className={cn("inline-flex flex-wrap items-center gap-x-[0.28em] gap-y-1", className)}
    >
      {words.map((word, index) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z]/g, "");

        return (
          <span
            key={index}
            className={cn(
              "inline-block",
              wordClassName,
              isHighlight && highlightClassName
            )}
          >
            {word}
          </span>
        );
      })}
    </motion.span>
  );
}
