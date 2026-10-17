"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Sparkles, X, ArrowRight } from "lucide-react";

export function AnnouncementStrip() {
  const [dismissed, setDismissed] = useState(false);

  if (!SITE_CONFIG.announcement.enabled || dismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Announcement"
      className="relative z-50 bg-[#FEF9C3] border-b border-[#FEF08A] px-4 py-2 text-[#713F12] text-xs sm:text-sm font-medium transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FACC15] text-[#18181B]">
            <Sparkles className="h-3 w-3" />
          </span>
          <span className="truncate">{SITE_CONFIG.announcement.message}</span>
          <a
            href={SITE_CONFIG.announcement.ctaLink}
            className="hidden sm:inline-flex items-center gap-1 font-semibold text-[#854D0E] hover:text-[#18181B] underline underline-offset-4 decoration-[#EAB308] transition-colors"
          >
            {SITE_CONFIG.announcement.ctaText}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setDismissed(true)}
          type="button"
          aria-label="Dismiss announcement banner"
          className="shrink-0 p-1 rounded-md text-[#854D0E] hover:bg-[#FEF08A] hover:text-[#18181B] transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
