"use client";

import React, { useState, useEffect } from "react";

const GLYPHS = "01_#<>*[]/~+!$";

export default function DecoderText({
  text,
  className = "",
  delay = 200,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (char === " ") return " ";
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 35);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}
