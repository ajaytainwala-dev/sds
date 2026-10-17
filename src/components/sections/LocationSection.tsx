import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Navigation, Phone, MessageSquare, Clock, ExternalLink } from "lucide-react";

export function LocationSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            Physical Location & Directions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Visit Our Austin Town Office
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#52525B]">
            Easily accessible from Neelasandra, Victoria Layout, Richmond Town, Shanthi Nagar, and central Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#FAFAF7] border border-[#E4E4E7]">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                  School Address
                </span>
                <h3 className="text-xl font-bold text-[#18181B] mt-1">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-sm text-[#3F3F46] mt-2 leading-relaxed flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#CA8A04] shrink-0 mt-0.5" />
                  <span>
                    {SITE_CONFIG.location.streetAddress},<br />
                    {SITE_CONFIG.location.neighborhood}, {SITE_CONFIG.location.city},<br />
                    {SITE_CONFIG.location.state} — {SITE_CONFIG.location.postalCode}
                  </span>
                </p>
                <div className="mt-2 text-xs text-[#71717A] bg-white p-2.5 rounded-lg border border-[#E4E4E7]">
                  <strong>Landmark:</strong> {SITE_CONFIG.location.landmark}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E7] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                  Direct Contact
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#71717A]">Telephone</div>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                      className="text-sm font-bold text-[#18181B] hover:text-[#CA8A04] transition-colors"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#15803D] shrink-0">
                    <MessageSquare className="h-4 w-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-[#71717A]">WhatsApp</div>
                    <a
                      href={getGeneralWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#15803D] hover:underline"
                    >
                      +91 {SITE_CONFIG.contact.whatsapp.slice(-10)} (Chat Online)
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E4E7]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#71717A]">
                  Instruction Timings
                </span>
                <div className="flex items-start gap-3 mt-2">
                  <Clock className="h-4 w-4 text-[#CA8A04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#3F3F46] space-y-1">
                    <div>
                      <strong className="text-[#18181B]">Mon – Sat:</strong> {SITE_CONFIG.contact.workingHours.weekdays}
                    </div>
                    <div>
                      <strong className="text-[#18181B]">Sunday:</strong> {SITE_CONFIG.contact.workingHours.sundays}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4E4E7]">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[#18181B] bg-[#FACC15] hover:bg-[#EAB308] transition-colors shadow-xs"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Right Map Embed / Interactive Map Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E4E4E7] shadow-sm bg-[#F4F4F5] relative h-[300px] sm:h-[380px] lg:h-full min-h-[300px] sm:min-h-[380px]">
            <iframe
              title="Sridhar Driving School Austin Town Location Map"
              src={SITE_CONFIG.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
