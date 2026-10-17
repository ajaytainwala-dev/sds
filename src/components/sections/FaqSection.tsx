"use client";

import { useState } from "react";
import { SITE_CONFIG, FaqItem } from "@/lib/site-config";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#52525B]">
            Clear, honest answers about our driving courses, timings, vehicles, and RTO guidance.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E4E4E7] bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#18181B] hover:text-[#CA8A04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`h-7 w-7 rounded-full bg-[#FAFAF7] border border-[#E4E4E7] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#FEF9C3] border-[#FEF08A] text-[#854D0E]" : "text-[#71717A]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#52525B] leading-relaxed border-t border-[#F4F4F5]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FEFCE8] border border-[#FEF08A] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-[#854D0E]">
              Have a specific question not listed here?
            </div>
            <div className="text-xs text-[#A16207] mt-0.5">
              We are happy to answer any doubts regarding training, batches, or licence rules.
            </div>
          </div>
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#18181B] font-bold text-xs sm:text-sm shadow-2xs transition-colors shrink-0"
          >
            <MessageSquare className="h-4 w-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
