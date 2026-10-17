import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { Car, MapPin, Phone, MessageSquare, Mail, Clock, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#18181B] text-[#A1A1AA] pt-16 pb-12 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#18181B] font-bold">
                <Car className="h-5 w-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#D4D4D8]">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#EAB308] font-medium pt-1">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Austin Town, Bengaluru, Karnataka 560047</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-[#FACC15] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FACC15] transition-colors">
                  About Our School
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FACC15] transition-colors">
                  Courses & Training
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-[#FACC15] transition-colors">
                  Course Fees & Inclusions
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FACC15] transition-colors">
                  Why Learn With Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FACC15] transition-colors">
                  Training Gallery
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FACC15] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FACC15] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Our Courses
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SITE_CONFIG.courses.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    className="hover:text-[#FACC15] transition-colors flex items-center justify-between group"
                  >
                    <span>{course.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#additional-services"
                  className="hover:text-[#FACC15] transition-colors flex items-center justify-between group"
                >
                  <span>Highway & Specialised Practice</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3.5 text-sm">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4">
              Contact & Hours
            </h3>
            
            <p className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-[#FACC15] shrink-0 mt-0.5" />
              <a href={`tel:${SITE_CONFIG.contact.phoneClean}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.contact.phone}
              </a>
            </p>

            <p className="flex items-start gap-2.5">
              <MessageSquare className="h-4 w-4 text-[#FACC15] shrink-0 mt-0.5" />
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-[#FACC15] font-semibold"
              >
                Chat on WhatsApp (+91 {SITE_CONFIG.contact.whatsapp.slice(-10)})
              </a>
            </p>

            <p className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-[#FACC15] shrink-0 mt-0.5" />
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.contact.email}
              </a>
            </p>

            <div className="flex items-start gap-2.5 pt-2 border-t border-[#27272A]">
              <Clock className="h-4 w-4 text-[#FACC15] shrink-0 mt-0.5" />
              <div className="text-xs text-[#D4D4D8] space-y-1">
                <div>Mon – Sat: 6:00 AM – 7:30 PM</div>
                <div>Sunday: 7:00 AM – 1:00 PM</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FACC15] hover:underline"
              >
                <span>View on Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved. Austin Town, Bengaluru, Karnataka.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#D4D4D8] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="text-[#52525B]">
              Approved Motor Driving Instruction & RTO Guidance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
