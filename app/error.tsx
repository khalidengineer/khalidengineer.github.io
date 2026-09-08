"use client";

import React, { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      <div className="w-16 h-16 rounded-2xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 mb-6">
        <span className="text-2xl font-mono font-bold">!</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main mb-3">Something went wrong</h2>
      <p className="text-sm text-text-secondary max-w-md mb-8">
        An unexpected error occurred. Please try reloading the experience.
      </p>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#181813] hover:bg-gold-primary hover:text-black border border-white/[0.1] hover:border-gold-primary text-text-main text-xs sm:text-sm font-semibold transition-all duration-300"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Try Again</span>
      </button>
    </div>
  );
}
