"use client";

import Image from "next/image";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowDown, MapPin, ShieldCheck, UserCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 bg-[#FAFAF7]"
    >
      {/* Subtle background road-curve accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FEF9C3]/70 to-[#FACC15]/20 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[450px] h-[450px] rounded-full bg-[#FEF9C3]/50 blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FEF9C3] border border-[#FEF08A] text-[#854D0E] text-xs sm:text-sm font-semibold mb-6 shadow-2xs"
            >
              <MapPin className="h-3.5 w-3.5 text-[#EAB308]" />
              <span>Austin Town, Bengaluru</span>
              <span className="h-1 w-1 rounded-full bg-[#EAB308]" />
              <span>Learner to Confident Driver</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#18181B] tracking-tight leading-[1.12]"
            >
              Learn to Drive. <br />
              <span className="relative inline-block text-[#18181B]">
                Build Confidence
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#FACC15] -z-10 overflow-visible"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 190 3 247 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              for Every Journey.
            </motion.h1>

            {/* Honest supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-[#52525B] leading-relaxed max-w-2xl font-normal"
            >
              Explore driving lessons and patient 1-on-1 training options at{" "}
              <strong className="font-semibold text-[#18181B]">
                Sridhar Driving School
              </strong>
              , Austin Town, Bengaluru. Master clutch control, reverse parking, and bumper-to-bumper traffic safely with dual-control vehicles.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-[#18181B] font-bold text-base shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#E4E4E7] hover:border-[#D4D4D8] hover:bg-[#F4F4F5] text-[#18181B] font-semibold text-base transition-all shadow-2xs"
              >
                <span>Explore Courses</span>
                <ArrowDown className="h-4 w-4 text-[#71717A]" />
              </a>
            </motion.div>

            {/* Quick highlight pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-[#E4E4E7] grid grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18181B]">1-on-1 Guidance</div>
                  <div className="text-[11px] text-[#71717A]">No shared driving</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18181B]">Dual Controls</div>
                  <div className="text-[11px] text-[#71717A]">Safety brake & clutch</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18181B]">Flexible Hours</div>
                  <div className="text-[11px] text-[#71717A]">6 AM to 7:30 PM</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Decorative yellow framing backing */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#FACC15] via-[#FEF08A] to-[#FAFAF7] rounded-3xl transform rotate-1 -z-10 shadow-lg"
              />

              {/* Main photograph */}
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden bg-white border-2 border-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"
                  alt="Student learning car driving with instructor guidance on city roads"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-medium uppercase tracking-wider text-[#FACC15]">
                    Behind The Wheel
                  </span>
                  <p className="text-sm font-semibold drop-shadow-sm">
                    Practical road instruction tailored for Bengaluru conditions
                  </p>
                </div>
              </div>

              {/* Floating feature card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#E4E4E7] max-w-64"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#18181B] shrink-0 font-bold">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#18181B]">
                      Daily Batches Open
                    </div>
                    <div className="text-[11px] text-[#52525B]">
                      Austin Town, Victoria Layout & Neelasandra
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
