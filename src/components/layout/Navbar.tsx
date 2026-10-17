"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { Menu, X, Phone, MessageSquare, Car, MapPin, ChevronRight } from "lucide-react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
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
          ? "bg-white/95 backdrop-blur-md shadow-xs border-[#E4E4E7]"
          : "bg-[#FAFAF7]/95 backdrop-blur-xs border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-2">
          {/* Brand Logo / Wordmark */}
          <Link
            href="#hero"
            className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308] rounded-xl p-1 min-w-0"
          >
            <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#18181B] shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Car className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-sm sm:text-lg text-[#18181B] tracking-tight leading-tight truncate group-hover:text-[#854D0E] transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-[#71717A] flex items-center gap-1 leading-none mt-0.5">
                <MapPin className="h-2.5 w-2.5 text-[#CA8A04] shrink-0" />
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

          {/* Mobile Actions: WhatsApp CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp enquiry"
              className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#25D366] text-white hover:bg-[#20bd5a] active:scale-95 transition-all shadow-2xs"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              className="h-10 w-10 flex items-center justify-center rounded-xl text-[#18181B] bg-white border border-[#E4E4E7] hover:bg-[#F4F4F5] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Portal - rendered directly on body with top z-index */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-[9999] bg-[#18181B]/70 backdrop-blur-xs flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-[85vw] max-w-xs bg-white h-full shadow-2xl p-5 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[#E4E4E7]">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-[#FACC15] flex items-center justify-center text-[#18181B] font-bold">
                      <Car className="h-4 w-4 stroke-[2.2]" />
                    </div>
                    <span className="font-extrabold text-sm text-[#18181B]">Navigation</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    type="button"
                    aria-label="Close menu"
                    className="h-9 w-9 flex items-center justify-center rounded-lg text-[#71717A] hover:bg-[#F4F4F5] hover:text-[#18181B] active:scale-95"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-3 flex flex-col space-y-1">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-[#3F3F46] hover:text-[#18181B] hover:bg-[#FEF9C3] active:bg-[#FEF08A] transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-[#A1A1AA]" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-5 border-t border-[#E4E4E7] space-y-2.5">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-xs"
                >
                  <MessageSquare className="h-4 w-4 fill-current" />
                  Chat on WhatsApp
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-[#18181B] bg-[#FAFAF7] border border-[#E4E4E7] hover:bg-[#F4F4F5] transition-all"
                >
                  <Phone className="h-4 w-4 text-[#CA8A04]" />
                  Call {SITE_CONFIG.contact.phone}
                </a>

                <p className="text-center text-[11px] text-[#71717A] pt-1">
                  Austin Town, Neelasandra, Bengaluru 560047
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
