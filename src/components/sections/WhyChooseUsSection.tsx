import Image from "next/image";
import { CheckCircle, HeartHandshake, MapPin, Sparkles } from "lucide-react";

export function WhyChooseUsSection() {
  const points = [
    {
      title: "Patient, Stress-Free Instruction",
      description:
        "Learning to drive can trigger anxiety. Our instructors maintain a calm, encouraging demeanour with zero shouting, allowing you to build muscle memory at your natural pace.",
    },
    {
      title: "1-on-1 Dedicated Behind-the-Wheel Time",
      description:
        "You do not share the driver's seat with three other learners. Your scheduled hour is 100% focused on your practice and immediate feedback.",
    },
    {
      title: "Dual-Control Safety Fleet",
      description:
        "All instruction vehicles are fitted with approved dual safety pedals (instructor clutch and brake) so mistakes can be safely intercepted on public streets.",
    },
    {
      title: "Real Bangalore Road Navigation",
      description:
        "We move beyond empty grounds into realistic traffic scenarios—junctions, flyovers, roundabouts, and narrow residential lanes.",
    },
    {
      title: "Flexible Batch Schedules",
      description:
        "Morning batches start early from 6:00 AM before city rush hour; evening slots run up to 7:30 PM for office-goers and students.",
    },
    {
      title: "Central Austin Town Location",
      description:
        "Centrally located in Austin Town, Neelasandra, easily reachable from Victoria Layout, Richmond Town, Shanthi Nagar, and Ulsoor.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-[#E4E4E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAFAF7]">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
                alt="Driving instructor providing patient one-on-one guidance to student"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FACC15] text-[#18181B] text-xs font-bold mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Student-Centered Coaching</span>
                </div>
                <h4 className="text-lg font-bold">
                  Focusing on defensive habits, not just passing the test.
                </h4>
                <p className="text-xs text-[#E4E4E7] mt-1 leading-relaxed">
                  We prepare you to handle unexpected pedestrian movements, sudden braking, and lane discipline.
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#FEF9C3] p-4 rounded-2xl shadow-lg border border-[#FEF08A] max-w-56 text-[#713F12]">
              <div className="flex items-center gap-2 font-bold text-xs">
                <HeartHandshake className="h-4 w-4 text-[#854D0E]" />
                <span>Beginner Friendly</span>
              </div>
              <p className="text-[11px] mt-1 text-[#854D0E] leading-tight">
                Designed specifically for nervous and first-time drivers.
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-3">
              Why Choose Sridhar Driving School
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight leading-tight">
              We Don&apos;t Just Teach You How to Steer. We Teach You How to Drive Safely.
            </h2>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed">
              Driving is a lifelong practical skill. Our training methodology emphasizes situational awareness, smooth clutch engagement, gentle braking, and understanding traffic flow.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-[#FAFAF7] transition-colors">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] text-[#854D0E] mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#18181B]">{pt.title}</h3>
                    <p className="text-xs text-[#52525B] leading-relaxed mt-1">{pt.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#F4F4F5] flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#18181B] font-bold text-sm shadow-xs transition-colors"
              >
                <span>Book Your Admission Enquiry</span>
              </a>
              <span className="text-xs text-[#71717A] flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#CA8A04]" />
                Located in Austin Town, Bengaluru
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
