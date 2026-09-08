"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Gauge, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/lib/data";
import TiltCard from "../ui/TiltCard";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "code":
        return Code2;
      case "palette":
        return Palette;
      case "database":
        return Database;
      case "zap":
        return Gauge;
      default:
        return Code2;
    }
  };

  const Icon = getIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <TiltCard maxTilt={4.5} className="group p-4 sm:p-6 flex flex-col justify-between h-full">
        <div style={{ transform: "translateZ(15px)" }}>
          {/* Gold Icon Box with 3D Pop */}
          <div
            className="w-10 h-10 rounded-xl bg-[#181813] border border-white/[0.08] group-hover:border-gold-primary/50 text-gold-primary flex items-center justify-center mb-4 transition-all duration-300 shadow-sm"
            style={{ transform: "translateZ(24px)" }}
          >
            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Service Title */}
          <h3
            className="text-base sm:text-[17px] font-bold text-text-main group-hover:text-gold-bright transition-colors duration-200 mb-2.5"
            style={{ transform: "translateZ(20px)" }}
          >
            {service.title}
          </h3>

          {/* Service Description */}
          <p
            className="text-xs text-text-secondary leading-relaxed mb-6"
            style={{ transform: "translateZ(15px)" }}
          >
            {service.description}
          </p>
        </div>

        {/* Learn More Link */}
        <div style={{ transform: "translateZ(18px)" }}>
          <Link
            href={`/services#${service.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-primary hover:text-gold-bright group/link transition-colors pt-2 border-t border-white/[0.04]"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  );
}
