import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name} Austin Town`,
  description: `Privacy policy and enquiry data collection practices for ${SITE_CONFIG.name}, Austin Town, Bengaluru.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#18181B] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#854D0E] hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            Compliance & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#18181B] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#71717A]">
            Last updated: October 2026 • Sridhar Motor Driving School, Austin Town, Bengaluru
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E4E7] shadow-sm space-y-8 text-sm sm:text-base text-[#3F3F46] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#18181B] mb-3">1. Overview</h2>
            <p>
              At <strong>{SITE_CONFIG.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to safeguarding personal information collected through our website. This privacy statement explains how we collect, use, and protect your information when you visit our website or submit an admission enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#18181B] mb-3">2. Information We Collect</h2>
            <p>
              When you submit our online enquiry form, we may collect:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
              <li><strong>Personal Identifiers:</strong> Your full name.</li>
              <li><strong>Contact Information:</strong> Your mobile phone number (and email address if provided).</li>
              <li><strong>Training Preferences:</strong> Your preferred course (e.g. 4-wheeler, 2-wheeler, refresher), timing slot, and any message notes you include.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#18181B] mb-3">3. How We Use Your Information</h2>
            <p>
              We process your details exclusively for legitimate business communication:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-sm">
              <li>To contact you regarding course availability, batch timings, and current training fees.</li>
              <li>To answer questions submitted through the enquiry form.</li>
              <li>To provide consultation regarding Karnataka RTO licensing test requirements and schedules.</li>
            </ul>
            <p className="mt-3">
              We <strong>do not sell, rent, or trade</strong> your personal phone numbers or names to third-party telemarketers or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#18181B] mb-3">4. WhatsApp Communication</h2>
            <p>
              Our website provides convenience links to WhatsApp using official <code>wa.me</code> click-to-chat links. Please note that clicking a WhatsApp link launches the WhatsApp client on your device. Any messages sent through WhatsApp are governed by WhatsApp&apos;s own privacy policy and end-to-end encryption standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#18181B] mb-3">5. Data Retention & Deletion</h2>
            <p>
              We retain admission enquiry details only as long as necessary to fulfill your enquiry and complete course enrollment. You may request the removal of your contact details from our records at any time by calling or emailing us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#18181B] mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact:
            </p>
            <div className="mt-4 p-4 rounded-xl bg-[#FAFAF7] border border-[#E4E4E7] space-y-2 text-xs sm:text-sm">
              <div className="font-bold text-[#18181B]">{SITE_CONFIG.name}</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#CA8A04]" />
                <span>{SITE_CONFIG.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#CA8A04]" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#CA8A04]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
