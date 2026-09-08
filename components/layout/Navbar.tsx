"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { Send, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6">
      <div
        className={`max-w-[1220px] mx-auto rounded-full transition-all duration-300 px-5 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "bg-[#11110E]/90 backdrop-blur-md border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-[#11110E]/60 backdrop-blur-sm border border-white/[0.05]"
        }`}
      >
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 relative flex items-center justify-center">
            {/* Hexagon SVG Icon */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold-primary transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" stroke="currentColor" fill="rgba(244,184,63,0.08)" />
              <circle cx="12" cy="12" r="3" fill="#F4B83F" />
            </svg>
          </div>
          <span className="font-bold tracking-wider text-sm text-text-main font-mono">
            DEV<span className="text-gold-primary">.</span>ARJUN
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-gold-bright"
                    : "text-text-secondary hover:text-text-main"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gold-primary rounded-full shadow-[0_0_8px_#F4B83F]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-text-main bg-[#181813] border border-white/[0.1] hover:border-gold-primary/50 hover:text-gold-bright transition-all duration-300 shadow-sm group"
          >
            <span>Let&apos;s Talk</span>
            <Send className="w-3 h-3 text-gold-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-text-secondary hover:text-text-main lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-primary" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-16 z-50 p-5 sm:p-6 rounded-2xl bg-[#11110E]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl lg:hidden flex flex-col gap-4 max-h-[82vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gold-primary/10 text-gold-bright font-semibold"
                        : "text-text-secondary hover:bg-white/[0.03] hover:text-text-main"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-gold-primary shadow-[0_0_6px_#F4B83F]" />}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gold-primary text-black font-semibold text-sm hover:bg-gold-bright transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <Send className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
