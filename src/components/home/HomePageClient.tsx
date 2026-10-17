"use client";

import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { AdditionalServicesSection } from "@/components/sections/AdditionalServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";

export function HomePageClient() {
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined);

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustSection />
      <CoursesSection onSelectCourse={(title) => setSelectedCourse(title)} />
      <PricingSection />
      <AdditionalServicesSection />
      <WhyChooseUsSection />
      <GallerySection />
      <EnquirySection selectedCourse={selectedCourse} />
      <LocationSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
