"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { Menu, X, Phone, MessageSquare, Car, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Fees", href: "#fees" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-[#E4E4E7]"
          : "bg-[#FAFAF7]/90 backdrop-blur-sm border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 sm:h-20 items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308] rounded-lg p-1"
          >
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#18181B] shadow-sm group-hover:scale-105 transition-transform">
              <Car className="h-6 w-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-[#18181B] tracking-tight leading-none group-hover:text-[#854D0E] transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-[#71717A] flex items-center gap-1 mt-0.5">
                <MapPin className="h-3 w-3 text-[#CA8A04] shrink-0" />
                Austin Town, Bengaluru
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#52525B]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg hover:text-[#18181B] hover:bg-black/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.contact.phoneClean}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold text-[#18181B] bg-white border border-[#E4E4E7] hover:border-[#D4D4D8] hover:bg-[#F4F4F5] transition-all shadow-2xs"
            >
              <Phone className="h-4 w-4 text-[#CA8A04]" />
              <span className="hidden xl:inline">{SITE_CONFIG.contact.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#18181B] bg-[#FACC15] hover:bg-[#EAB308] transition-all shadow-xs hover:shadow-sm transform active:scale-98"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp enquiry"
              className="p-2.5 rounded-xl bg-[#FACC15] text-[#18181B] hover:bg-[#EAB308] transition-colors"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl text-[#18181B] hover:bg-black/[0.05] border border-[#E4E4E7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-18 z-50 bg-[#18181B]/40 backdrop-blur-xs lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-full max-w-xs bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E4E7]">
                <span className="font-bold text-[#18181B] text-sm">Navigation Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  aria-label="Close menu"
                  className="p-1 rounded-md text-[#71717A] hover:text-[#18181B]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-4 flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-[#3F3F46] hover:text-[#18181B] hover:bg-[#FEF9C3] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E4E4E7] space-y-3">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-[#18181B] bg-[#FACC15] hover:bg-[#EAB308] transition-colors"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                Chat on WhatsApp
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-[#18181B] bg-[#F4F4F5] hover:bg-[#E4E4E7] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#CA8A04]" />
                Call {SITE_CONFIG.contact.phone}
              </a>

              <p className="text-center text-xs text-[#71717A] pt-2">
                Austin Town, Bengaluru — 560047
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
