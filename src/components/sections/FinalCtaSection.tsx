import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, Phone, MapPin, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FEF9C3] via-[#FEF08A] to-[#FACC15] text-[#18181B] relative overflow-hidden border-t border-[#EAB308]">
      {/* Decorative road-stripe motif */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-15 pointer-events-none flex flex-col justify-around"
      >
        <div className="w-full border-b-4 border-dashed border-[#854D0E]" />
        <div className="w-full border-b-4 border-dashed border-[#854D0E]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-xs text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="h-3.5 w-3.5" />
          Join Upcoming Batches
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#18181B] tracking-tight leading-tight">
          Ready to Start Learning to Drive?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#713F12] max-w-2xl mx-auto font-medium leading-relaxed">
          Take the first step towards independent driving in Bengaluru. Contact Sridhar Driving School today for batch availability, personalized timings, and course consultation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#18181B] hover:bg-[#27272A] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-98"
          >
            <MessageSquare className="h-5 w-5 fill-current text-[#FACC15]" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.contact.phoneClean}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-[#FAFAF7] text-[#18181B] border border-[#E4E4E7] font-bold text-base shadow-sm transition-all"
          >
            <Phone className="h-5 w-5 text-[#CA8A04]" />
            <span>Call {SITE_CONFIG.contact.phone}</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-[#854D0E] flex items-center justify-center gap-1.5 font-medium">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>Austin Town, Neelasandra, Bengaluru — Morning & Evening Batches</span>
        </p>
      </div>
    </section>
  );
}
