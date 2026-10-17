import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";
import { ShieldCheck, UserCheck, Compass, FileCheck2, ArrowRight } from "lucide-react";

export function TrustSection() {
  const iconMap = {
    UserCheck,
    ShieldCheck,
    Compass,
    FileCheck2,
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            About Sridhar Motor Driving School
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Your Journey Starts Here: Safe, Calm, and Patient Driving Instruction.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#52525B] leading-relaxed">
            Learning to drive in Bengaluru can feel intimidating with dense traffic, narrow roads, and steep flyovers. At Sridhar Motor Driving School in Austin Town, we focus on helping learners build instinctive vehicle control and road awareness in a calm, supportive environment.
          </p>
        </div>

        {/* 2-Column Content: Photo & Pillars */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#E4E4E7]">
              <Image
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80"
                alt="Instructor explaining vehicle steering and dashboard controls"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-[#FACC15] uppercase tracking-wide">
                  Practical Fundamentals
                </span>
                <p className="text-sm font-medium mt-0.5">
                  Mastering vehicle mechanics, clutch sensitivity, and mirror habits
                </p>
              </div>
            </div>

            {/* Note badge */}
            <div className="mt-4 p-4 rounded-xl bg-[#FAFAF7] border border-[#E4E4E7] text-xs text-[#52525B]">
              <strong className="text-[#18181B] font-semibold">Austin Town Training Base: </strong>
              Conveniently positioned for learners across Austin Town, Neelasandra, Richmond Town, and Victoria Layout.
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SITE_CONFIG.trustPillars.map((pillar, idx) => {
              const IconComponent =
                iconMap[pillar.icon as keyof typeof iconMap] || ShieldCheck;

              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E4E4E7] hover:border-[#FACC15] hover:bg-[#FEFCE8]/40 transition-all duration-200"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#FEF9C3] flex items-center justify-center text-[#854D0E] mb-4">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#18181B] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section bottom CTA link */}
        <div className="mt-12 pt-6 border-t border-[#F4F4F5] flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-[#52525B]">
            Ready to find the right training course for your experience level?
          </span>
          <a
            href="#courses"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#18181B] hover:text-[#854D0E] group"
          >
            <span>Explore our full course offerings</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
