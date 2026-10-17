"use client";

import Image from "next/image";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, ArrowDown, MapPin, ShieldCheck, UserCheck, Clock, Check } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#FAFAF7]"
    >
      {/* Decorative road-curve accent contained safely */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#FEF9C3]/70 to-[#FACC15]/20 blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full bg-[#FEF9C3] border border-[#FEF08A] text-[#854D0E] text-xs font-bold mb-4 sm:mb-6 shadow-2xs max-w-full"
            >
              <MapPin className="h-3.5 w-3.5 text-[#EAB308] shrink-0" />
              <span className="truncate">Austin Town, Bengaluru</span>
              <span className="h-1 w-1 rounded-full bg-[#EAB308] shrink-0" />
              <span className="truncate">Learner to Pro Driver</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#18181B] tracking-tight leading-[1.18] sm:leading-[1.12]"
            >
              Learn to Drive. <br />
              <span className="relative inline-block text-[#18181B]">
                Build Confidence
                <span
                  aria-hidden="true"
                  className="absolute left-0 bottom-1 w-full h-2.5 sm:h-3.5 bg-[#FACC15]/60 -z-10 rounded-sm"
                />
              </span>{" "}
              for Every Journey.
            </motion.h1>

            {/* Honest supporting copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#52525B] leading-relaxed max-w-2xl font-normal"
            >
              Explore driving lessons and patient 1-on-1 instruction at{" "}
              <strong className="font-semibold text-[#18181B]">
                Sridhar Motor Driving School
              </strong>
              , Austin Town, Bengaluru. Master clutch control, slope starts, reverse parking, and bumper-to-bumper city traffic safely.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-[#18181B] font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-[#E4E4E7] hover:border-[#D4D4D8] hover:bg-[#F4F4F5] text-[#18181B] font-semibold text-sm sm:text-base transition-all shadow-2xs"
              >
                <span>Explore Courses</span>
                <ArrowDown className="h-4 w-4 text-[#71717A]" />
              </a>
            </motion.div>

            {/* Highlight pillars - Responsive Grid (1 col on mobile, 3 cols on sm+) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 pt-6 sm:pt-8 border-t border-[#E4E4E7] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-white sm:bg-transparent border border-[#E4E4E7] sm:border-0">
                <div className="h-9 w-9 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#18181B]">1-on-1 Guidance</div>
                  <div className="text-[11px] text-[#71717A]">No shared driver seat</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-white sm:bg-transparent border border-[#E4E4E7] sm:border-0">
                <div className="h-9 w-9 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#18181B]">Dual Controls</div>
                  <div className="text-[11px] text-[#71717A]">Instructor brake safety</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-white sm:bg-transparent border border-[#E4E4E7] sm:border-0">
                <div className="h-9 w-9 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#18181B]">Flexible Hours</div>
                  <div className="text-[11px] text-[#71717A]">6:00 AM – 7:30 PM</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Backing accent */}
              <div
                aria-hidden="true"
                className="absolute -inset-1.5 sm:-inset-3 bg-gradient-to-tr from-[#FACC15] via-[#FEF08A] to-[#FAFAF7] rounded-3xl transform rotate-1 -z-10 shadow-md"
              />

              {/* Main photograph */}
              <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden bg-white border-2 border-white shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80"
                  alt="Student learning car driving with instructor guidance on city roads"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FACC15]">
                    Behind The Wheel
                  </span>
                  <p className="text-xs sm:text-sm font-semibold drop-shadow-sm mt-0.5">
                    Practical road instruction tailored for Bengaluru conditions
                  </p>
                </div>
              </div>

              {/* Inset feature card that does NOT overflow on mobile */}
              <div className="mt-3 sm:absolute sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-[#E4E4E7] sm:max-w-64">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#18181B] shrink-0 font-bold">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#18181B]">
                      Daily Batches Open
                    </div>
                    <div className="text-[11px] text-[#52525B]">
                      Austin Town & Neelasandra
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
