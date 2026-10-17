import { SITE_CONFIG } from "@/lib/site-config";
import { getCourseWhatsAppUrl } from "@/lib/whatsapp";
import { CheckCircle2, MessageSquare, ShieldAlert } from "lucide-react";

export function AdditionalServicesSection() {
  return (
    <section id="additional-services" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            Specialised Training & Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Additional Driving Services & Consultation
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#52525B]">
            Targeted practical drills and procedural guidance to support your ongoing driving needs beyond beginner training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SITE_CONFIG.additionalServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E4E4E7] shadow-xs hover:border-[#FACC15] hover:shadow-md transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-[#18181B] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-[#3F3F46] mb-6">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#CA8A04] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F4F4F5]">
                <a
                  href={getCourseWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#854D0E] hover:text-[#18181B] transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-[#CA8A04]" />
                  <span>{service.ctaLabel} →</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Advisory Notice */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-[#E4E4E7] flex items-start gap-3 text-xs text-[#71717A]">
          <ShieldAlert className="h-4 w-4 text-[#CA8A04] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#18181B]">Official Disclaimer:</strong> Sridhar Motor Driving School provides training, test orientation, and procedural consultation. Driving tests, licence approvals, and physical smart-card licence issuance are conducted solely by the Karnataka Motor Vehicles Department (RTO) in accordance with the Motor Vehicles Act.
          </div>
        </div>
      </div>
    </section>
  );
}
