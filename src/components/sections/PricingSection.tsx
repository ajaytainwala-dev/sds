"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { getCourseWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, ShieldCheck, Check } from "lucide-react";

export function PricingSection() {
  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fees" className="py-16 sm:py-24 bg-white border-y border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            Transparent Enrolment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Course Fees & Package Structure
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#52525B]">
            Compare our course structures, training sessions, and inclusions below. Exact batch fees depend on vehicle selection and training schedule.
          </p>
        </div>

        {/* Packages Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Package 1: 4-Wheeler Car Full Course */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-[#FAFAF7] border-2 border-[#EAB308] p-5 sm:p-7 shadow-md">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#18181B] text-[#FACC15] text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
              Most Selected
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#CA8A04] mb-2">
                Beginner Car Training
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#18181B] mb-2">
                Complete 4-Wheeler Program
              </h3>
              <p className="text-sm text-[#52525B] mb-6">
                Full foundational driving syllabus taking you from zero experience to a self-reliant city motorist.
              </p>

              {/* Price Display */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E4E4E7] mb-6">
                <div className="text-xs text-[#71717A] font-semibold uppercase">Fee Structure</div>
                <div className="text-lg sm:text-xl font-extrabold text-[#18181B] mt-1">
                  Enquire for Current Batch Fee
                </div>
                <div className="text-xs text-[#854D0E] font-medium mt-1">
                  Includes dual-control vehicle fuel & practical coaching
                </div>
              </div>

              {/* Features breakdown */}
              <ul className="space-y-3 text-sm text-[#3F3F46] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span><strong>15 to 20 Days</strong> continuous practical sessions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span><strong>1-on-1 instruction</strong> in dual-control training car</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Clutch-biting point & slope stop-and-go practice</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Reverse, parallel & angular parking drills</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>RTO driving test route mock simulation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[#E4E4E7]">
              <a
                href={getCourseWhatsAppUrl("Complete 4-Wheeler Car Driving Program")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[#18181B] bg-[#FACC15] hover:bg-[#EAB308] transition-colors shadow-xs"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>Enquire Fee via WhatsApp</span>
              </a>
              <button
                onClick={scrollToEnquiry}
                type="button"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#52525B] hover:text-[#18181B] transition-colors"
              >
                Or fill the online enquiry form
              </button>
            </div>
          </div>

          {/* Package 2: Refresher / Confidence Course */}
          <div className="flex flex-col justify-between rounded-3xl bg-white border border-[#E4E4E7] p-5 sm:p-7 shadow-xs hover:border-[#D4D4D8] transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-2">
                Existing Licence Holders
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#18181B] mb-2">
                Confidence & Refresher
              </h3>
              <p className="text-sm text-[#52525B] mb-6">
                Overcome traffic anxiety, master tight Bengaluru streets, and gain confidence behind the wheel.
              </p>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAFAF7] border border-[#E4E4E7] mb-6">
                <div className="text-xs text-[#71717A] font-semibold uppercase">Fee Structure</div>
                <div className="text-lg sm:text-xl font-extrabold text-[#18181B] mt-1">
                  Enquire for Refresher Fee
                </div>
                <div className="text-xs text-[#71717A] font-medium mt-1">
                  Flexible 7 to 10 day custom schedules
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#3F3F46] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span><strong>7 to 10 Days</strong> intensive refresher drills</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Targeted traffic drills in Indiranagar / MG Road areas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Steep slope & flyover stopping and restarting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Night driving & headlamp glare adjustments</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Option to transition into your personal car</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[#E4E4E7]">
              <a
                href={getCourseWhatsAppUrl("Confidence & Refresher Driving Course")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[#18181B] bg-[#FAFAF7] hover:bg-[#F4F4F5] border border-[#E4E4E7] transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-[#CA8A04]" />
                <span>Enquire via WhatsApp</span>
              </a>
              <button
                onClick={scrollToEnquiry}
                type="button"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#52525B] hover:text-[#18181B] transition-colors"
              >
                Or fill the online enquiry form
              </button>
            </div>
          </div>

          {/* Package 3: Two-Wheeler / Scooter */}
          <div className="flex flex-col justify-between rounded-3xl bg-white border border-[#E4E4E7] p-5 sm:p-7 shadow-xs hover:border-[#D4D4D8] transition-all">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-2">
                2-Wheeler Training
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#18181B] mb-2">
                Scooter & Motorcycle
              </h3>
              <p className="text-sm text-[#52525B] mb-6">
                Master low-speed balance, progressive braking, and city road craft on geared bikes or gearless scooters.
              </p>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FAFAF7] border border-[#E4E4E7] mb-6">
                <div className="text-xs text-[#71717A] font-semibold uppercase">Fee Structure</div>
                <div className="text-lg sm:text-xl font-extrabold text-[#18181B] mt-1">
                  Enquire for 2-Wheeler Fee
                </div>
                <div className="text-xs text-[#71717A] font-medium mt-1">
                  10 to 12 days dedicated balance training
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#3F3F46] mb-8">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span><strong>10 to 12 Days</strong> structured training</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Figure-8 balance and tight turn maneuvers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Dual brake modulation (avoid skidding)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>Incline starting without rollback</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#F4F4F5] text-[#52525B] mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>RTO 2-wheeler test track orientation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[#E4E4E7]">
              <a
                href={getCourseWhatsAppUrl("Two-Wheeler Scooter & Motorcycle Training")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[#18181B] bg-[#FAFAF7] hover:bg-[#F4F4F5] border border-[#E4E4E7] transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-[#CA8A04]" />
                <span>Enquire via WhatsApp</span>
              </a>
              <button
                onClick={scrollToEnquiry}
                type="button"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#52525B] hover:text-[#18181B] transition-colors"
              >
                Or fill the online enquiry form
              </button>
            </div>
          </div>
        </div>

        {/* Honest Pricing Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FEFCE8] border border-[#FEF08A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[#854D0E] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#713F12]">
              <strong>Transparent Fee Policy:</strong> Sridhar Motor Driving School provides upfront batch quotes without hidden fuel surcharges. Contact us directly to confirm current batch availability and fees for your chosen vehicle model.
            </div>
          </div>
          <a
            href={SITE_CONFIG.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-[#854D0E] hover:underline"
          >
            Visit Our Austin Town Office →
          </a>
        </div>
      </div>
    </section>
  );
}
