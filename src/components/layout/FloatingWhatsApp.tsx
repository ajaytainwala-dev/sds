"use client";

import { useState } from "react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Optional gentle conversation prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-[#E4E4E7] text-xs font-medium text-[#18181B] animate-fade-in">
          <span>Need driving course details? Chat with us!</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss WhatsApp hint"
            className="text-[#71717A] hover:text-[#18181B] p-0.5"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sridhar Driving School on WhatsApp"
        className="group flex items-center justify-center h-13 w-13 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 fill-current stroke-none" />
      </a>
    </div>
  );
}
