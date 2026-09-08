"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glowEffect?: boolean;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className,
  maxTilt = 5,
  glowEffect = true,
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    // Invert X/Y for realistic physical tilt
    const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -maxTilt;
    const rotY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);
    setMousePos({ x: percentX, y: percentY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div style={{ perspective: "1200px" }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
          z: isHovered ? 8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 24,
          mass: 0.15,
        }}
        className={cn(
          "relative rounded-[20px] bg-[#12120F]/90 border border-white/[0.08] overflow-hidden transition-[border-color,box-shadow] duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.5)]",
          isHovered && "border-gold-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(244,184,63,0.15)]",
          className
        )}
      >
        {/* Dynamic Specular Gold Sheen Reflection Layer */}
        {glowEffect && (
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[20px] z-30"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(550px circle at ${mousePos.x}% ${mousePos.y}%, rgba(244, 184, 63, 0.12), rgba(255, 201, 90, 0.04) 40%, transparent 70%)`,
            }}
          />
        )}

        {/* Dynamic Edge Light Ray following angle */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] z-20 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.6 : 0,
            background: `linear-gradient(${mousePos.x * 3.6}deg, rgba(244,184,63,0.2) 0%, transparent 60%)`,
          }}
        />

        {/* Card Content with 3D Space */}
        <div className="relative z-10 w-full h-full" style={{ transform: "translateZ(1px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
