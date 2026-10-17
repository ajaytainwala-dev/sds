"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Phone, MessageSquare, MapPin, Clock, Sparkles } from "lucide-react";

interface EnquirySectionProps {
  selectedCourse?: string;
}

export function EnquirySection({ selectedCourse }: EnquirySectionProps) {
  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Admissions & Enrolment
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight leading-tight">
                Start Your Driving Journey in Austin Town.
              </h2>
              <p className="mt-4 text-base text-[#52525B] leading-relaxed">
                Whether you are holding a steering wheel for the first time or returning after years of hesitation, we are here to support you. Submit the form to enquire about upcoming batch schedules and training slots.
              </p>
            </div>

            {/* Direct Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E4E4E7] hover:border-[#FACC15] hover:shadow-xs transition-all group"
              >
                <div className="h-11 w-11 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-semibold uppercase">Direct Telephone</div>
                  <div className="text-sm sm:text-base font-bold text-[#18181B]">{SITE_CONFIG.contact.phone}</div>
                </div>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FEFCE8] border border-[#FEF08A] hover:border-[#EAB308] hover:shadow-xs transition-all group"
              >
                <div className="h-11 w-11 rounded-xl bg-[#25D366] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <MessageSquare className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-[#854D0E] font-semibold uppercase">Chat on WhatsApp</div>
                  <div className="text-sm sm:text-base font-bold text-[#18181B]">Immediate Text Enquiry</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E4E4E7]">
                <div className="h-11 w-11 rounded-xl bg-[#F4F4F5] flex items-center justify-center text-[#52525B] shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-semibold uppercase">Operating Hours</div>
                  <div className="text-xs sm:text-sm text-[#18181B] font-semibold mt-0.5">
                    Monday – Saturday: 6:00 AM – 7:30 PM
                  </div>
                  <div className="text-xs text-[#71717A] mt-0.5">
                    Sunday: 7:00 AM – 1:00 PM
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#E4E4E7]">
                <div className="h-11 w-11 rounded-xl bg-[#F4F4F5] flex items-center justify-center text-[#52525B] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-semibold uppercase">Physical Location</div>
                  <div className="text-xs sm:text-sm text-[#18181B] font-semibold mt-0.5">
                    {SITE_CONFIG.location.fullAddress}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Component */}
          <div className="lg:col-span-7">
            <EnquiryForm initialCourse={selectedCourse} />
          </div>
        </div>
      </div>
    </section>
  );
}
