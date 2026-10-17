"use client";

import { SITE_CONFIG, CoursePackage } from "@/lib/site-config";
import { getCourseWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, Check, Clock, Car, Calendar, ArrowRight } from "lucide-react";

interface CoursesSectionProps {
  onSelectCourse?: (courseTitle: string) => void;
}

export function CoursesSection({ onSelectCourse }: CoursesSectionProps) {
  const handleSelectCourse = (course: CoursePackage) => {
    if (onSelectCourse) {
      onSelectCourse(course.title);
    }
    const enquiryElem = document.getElementById("enquiry");
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
            Comprehensive Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#18181B] tracking-tight">
            Courses & Driving Programs
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#52525B]">
            Structured practical instruction focused on real traffic safety, clutch balance, and RTO test readiness.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONFIG.courses.map((course) => (
            <div
              key={course.id}
              className={`relative flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-8 ${
                course.popular
                  ? "border-[#EAB308] shadow-md ring-2 ring-[#FACC15]/30"
                  : "border-[#E4E4E7] shadow-xs hover:border-[#D4D4D8] hover:shadow-md"
              }`}
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CA8A04] bg-[#FEF9C3] px-3 py-1 rounded-lg">
                    {course.category === "car"
                      ? "4-Wheeler Car"
                      : course.category === "bike"
                      ? "2-Wheeler"
                      : course.category === "refresher"
                      ? "Confidence Refresher"
                      : "Licence Advisory"}
                  </span>
                  {course.badge && (
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        course.popular
                          ? "bg-[#18181B] text-[#FACC15]"
                          : "bg-[#F4F4F5] text-[#52525B]"
                      }`}
                    >
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Course Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#18181B] tracking-tight mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed mb-6">
                  {course.shortDescription}
                </p>

                {/* Course Key Parameters */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FAFAF7] border border-[#E4E4E7] mb-6 text-xs text-[#3F3F46]">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#CA8A04] shrink-0" />
                    <div>
                      <div className="font-medium text-[#71717A]">Duration</div>
                      <div className="font-bold text-[#18181B]">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#CA8A04] shrink-0" />
                    <div>
                      <div className="font-medium text-[#71717A]">Sessions</div>
                      <div className="font-bold text-[#18181B]">{course.sessions}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 pt-2 border-t border-[#E4E4E7]/60">
                    <Car className="h-4 w-4 text-[#CA8A04] shrink-0" />
                    <div>
                      <div className="font-medium text-[#71717A]">Training Vehicle</div>
                      <div className="font-bold text-[#18181B]">{course.vehicle}</div>
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#71717A] mb-3">
                    Course Inclusions
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#3F3F46]">
                    {course.inclusions.map((inclusion, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span className="leading-snug">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions & Price Status */}
              <div className="pt-6 border-t border-[#E4E4E7] mt-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#71717A] font-medium">Batch Pricing:</span>
                  <span className="text-sm font-bold text-[#854D0E] bg-[#FEF9C3] px-3 py-1 rounded-md">
                    {course.priceConfirmed && course.price
                      ? `₹${course.price.toLocaleString("en-IN")}`
                      : course.priceDisplay || "Enquire for Fee Details"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => handleSelectCourse(course)}
                    type="button"
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-sm font-bold text-[#18181B] bg-[#FAFAF7] hover:bg-[#F4F4F5] border border-[#E4E4E7] transition-colors"
                  >
                    <span>Enquire Online</span>
                    <ArrowRight className="h-4 w-4 text-[#71717A]" />
                  </button>

                  <a
                    href={getCourseWhatsAppUrl(course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-[#18181B] bg-[#FACC15] hover:bg-[#EAB308] transition-colors shadow-2xs"
                  >
                    <MessageSquare className="h-4 w-4 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
