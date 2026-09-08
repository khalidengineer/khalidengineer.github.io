"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import MagneticButton from "../ui/MagneticButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate reliable API submission
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#F4B83F", "#FFC95A", "#FFFFFF"],
      });
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#141410] border border-gold-primary/30 text-center h-full min-h-[300px]">
        <div className="w-12 h-12 rounded-full bg-gold-primary/20 text-gold-primary flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-lg font-bold text-text-main mb-2">Message Sent Successfully!</h4>
        <p className="text-xs text-text-secondary mb-6 max-w-xs">
          Thank you for reaching out, {formData.name}. Arjun will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", subject: "", message: "" });
          }}
          className="px-4 py-2 rounded-xl bg-[#181813] border border-white/[0.1] text-xs font-semibold text-text-main hover:text-gold-bright transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 w-full">
      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-[#151511] border border-white/[0.08] focus:border-gold-primary/50 text-base sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-xl bg-[#151511] border border-white/[0.08] focus:border-gold-primary/50 text-base sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Subject */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl bg-[#151511] border border-white/[0.08] focus:border-gold-primary/50 text-base sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none transition-colors"
        />
      </div>

      {/* Row 3: Message */}
      <div>
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 rounded-xl bg-[#151511] border border-white/[0.08] focus:border-gold-primary/50 text-base sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/30 p-2.5 rounded-lg border border-red-800/40">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <div>
        <MagneticButton
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2.5 rounded-xl bg-gold-primary hover:bg-gold-bright text-black font-bold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(244,184,63,0.3)] transition-all duration-300 gap-2 flex items-center disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </MagneticButton>
      </div>
    </form>
  );
}
