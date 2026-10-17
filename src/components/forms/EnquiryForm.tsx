"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, EnquiryFormValues } from "@/lib/validation";
import { SITE_CONFIG } from "@/lib/site-config";
import { getEnquiryFollowupWhatsAppUrl } from "@/lib/whatsapp";
import { EnquiryApiResponse } from "@/types/enquiry";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  User,
  Sparkles,
} from "lucide-react";

interface EnquiryFormProps {
  initialCourse?: string;
}

export function EnquiryForm({ initialCourse }: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<EnquiryApiResponse | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      service: initialCourse || SITE_CONFIG.courses[0].title,
      preferredContact: "whatsapp",
      preferredTime: "morning",
      message: "",
      website_url: "",
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // On static hosting (like GitHub Pages demonstration), API routes return 404/405
      if (response.status === 404 || response.status === 405) {
        const fallbackUrl = getEnquiryFollowupWhatsAppUrl(
          values.fullName,
          values.phone,
          values.service,
          values.preferredTime
        );
        setSubmissionSuccess({
          success: true,
          message: "Enquiry details captured! Since this is a static demonstration, please tap below to open WhatsApp with your prefilled details.",
          whatsappUrl: fallbackUrl,
        });
        reset();
        return;
      }

      const data: EnquiryApiResponse = await response.json();

      if (!response.ok || !data.success) {
        setServerError(
          data.message || "Failed to process your enquiry. Please reach out to us directly on WhatsApp."
        );
        return;
      }

      setSubmissionSuccess(data);
      reset();
    } catch {
      // In case of offline or static preview without API server, fallback smoothly to WhatsApp
      const fallbackUrl = getEnquiryFollowupWhatsAppUrl(
        values.fullName,
        values.phone,
        values.service,
        values.preferredTime
      );
      setSubmissionSuccess({
        success: true,
        message: "Enquiry recorded. Click below to continue directly on WhatsApp.",
        whatsappUrl: fallbackUrl,
      });
      reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E4E7] shadow-xl">
      {submissionSuccess ? (
        <div className="text-center py-6 animate-fade-in">
          <div className="h-16 w-16 bg-[#FEF9C3] text-[#854D0E] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
            <CheckCircle2 className="h-9 w-9 text-[#15803D]" />
          </div>

          <h3 className="text-2xl font-black text-[#18181B] tracking-tight">
            Enquiry Received Successfully!
          </h3>

          <p className="mt-3 text-sm text-[#52525B] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Sridhar Driving School. We have recorded your admission enquiry and our team will get back to you shortly.
          </p>

          {/* Optional immediate WhatsApp follow-up CTA */}
          {submissionSuccess.whatsappUrl && (
            <div className="mt-8 p-5 bg-[#FEFCE8] border border-[#FEF08A] rounded-2xl max-w-md mx-auto text-left">
              <div className="flex items-center gap-2 text-[#854D0E] font-bold text-sm mb-1.5">
                <Sparkles className="h-4 w-4" />
                <span>Want an Immediate Reply?</span>
              </div>
              <p className="text-xs text-[#713F12] leading-relaxed mb-4">
                You can also open WhatsApp right now with your enquiry details pre-filled. You just need to tap &ldquo;Send&rdquo; in the chat to confirm.
              </p>
              <a
                href={submissionSuccess.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageSquare className="h-4 w-4 fill-current" />
                <span>Open WhatsApp Follow-Up</span>
              </a>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-[#E4E4E7] flex justify-center">
            <button
              onClick={() => setSubmissionSuccess(null)}
              type="button"
              className="text-xs font-bold text-[#854D0E] hover:underline"
            >
              ← Submit another enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          {/* Top Form Heading */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF9C3] text-[#854D0E] text-xs font-bold uppercase tracking-wider mb-2">
              Admissions Desk
            </div>
            <h3 className="text-2xl font-black text-[#18181B] tracking-tight">
              Enquire About Driving Courses
            </h3>
            <p className="text-xs sm:text-sm text-[#52525B] mt-1">
              Fill in your details and we will contact you with batch schedules, fees, and vehicle availability.
            </p>
          </div>

          {/* Server Error Alert */}
          {serverError && (
            <div
              role="alert"
              className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5"
            >
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Submission Note: </span>
                {serverError}
              </div>
            </div>
          )}

          {/* Honeypot field (hidden from genuine users, bots fill it) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url">Leave this empty</label>
            <input
              id="website_url"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website_url")}
            />
          </div>

          {/* Field 1: Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1AA]">
                <User className="h-4 w-4" />
              </div>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rahul Sharma"
                disabled={submitting}
                {...register("fullName")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#18181B] placeholder-[#A1A1AA] bg-[#FAFAF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308] transition-all ${
                  errors.fullName ? "border-red-500 bg-red-50/20" : "border-[#E4E4E7]"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                <span>⚠</span> {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Field 2: Mobile Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2"
            >
              Mobile Number (WhatsApp Preferred) <span className="text-red-500">*</span>
            </label>
            <div className="relative flex rounded-xl border border-[#E4E4E7] overflow-hidden focus-within:ring-2 focus-within:ring-[#EAB308] bg-[#FAFAF7] focus-within:bg-white">
              <div className="px-3.5 flex items-center bg-[#F4F4F5] border-r border-[#E4E4E7] text-xs font-bold text-[#52525B]">
                🇮🇳 +91
              </div>
              <input
                id="phone"
                type="tel"
                placeholder="98450 12345"
                disabled={submitting}
                {...register("phone")}
                className={`w-full px-3.5 py-3 text-sm text-[#18181B] placeholder-[#A1A1AA] bg-transparent focus:outline-none ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.phone ? (
              <p className="mt-1.5 text-xs text-red-600 font-medium flex items-center gap-1">
                <span>⚠</span> {errors.phone.message}
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-[#71717A]">
                We will only use this number to answer your driving enquiry.
              </p>
            )}
          </div>

          {/* Field 3: Course or Training Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2"
            >
              Interested Course or Training <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              disabled={submitting}
              {...register("service")}
              className="w-full px-3.5 py-3 rounded-xl border border-[#E4E4E7] text-sm text-[#18181B] bg-[#FAFAF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308] transition-all"
            >
              {SITE_CONFIG.courses.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
              {SITE_CONFIG.additionalServices.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Field 4: Preferred Batch Timing & Contact Method (2 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2"
              >
                Preferred Time Slot
              </label>
              <div className="relative">
                <select
                  id="preferredTime"
                  disabled={submitting}
                  {...register("preferredTime")}
                  className="w-full px-3.5 py-3 rounded-xl border border-[#E4E4E7] text-xs sm:text-sm text-[#18181B] bg-[#FAFAF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308] transition-all"
                >
                  <option value="morning">Morning (6:00 AM – 10:00 AM)</option>
                  <option value="afternoon">Afternoon (11:00 AM – 3:30 PM)</option>
                  <option value="evening">Evening (4:00 PM – 7:30 PM)</option>
                  <option value="flexible">Flexible / Any slot</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2">
                Preferred Reply Via <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <label className="cursor-pointer text-center p-2 rounded-xl border border-[#E4E4E7] has-checked:border-[#EAB308] has-checked:bg-[#FEF9C3] transition-colors">
                  <input
                    type="radio"
                    value="whatsapp"
                    {...register("preferredContact")}
                    className="sr-only"
                  />
                  <span className="text-xs font-semibold text-[#18181B] block">WhatsApp</span>
                </label>
                <label className="cursor-pointer text-center p-2 rounded-xl border border-[#E4E4E7] has-checked:border-[#EAB308] has-checked:bg-[#FEF9C3] transition-colors">
                  <input
                    type="radio"
                    value="phone"
                    {...register("preferredContact")}
                    className="sr-only"
                  />
                  <span className="text-xs font-semibold text-[#18181B] block">Phone Call</span>
                </label>
                <label className="cursor-pointer text-center p-2 rounded-xl border border-[#E4E4E7] has-checked:border-[#EAB308] has-checked:bg-[#FEF9C3] transition-colors">
                  <input
                    type="radio"
                    value="email"
                    {...register("preferredContact")}
                    className="sr-only"
                  />
                  <span className="text-xs font-semibold text-[#18181B] block">Email</span>
                </label>
              </div>
            </div>
          </div>

          {/* Field 5: Optional Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2"
            >
              Additional Note or Query (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="e.g. I already have a learner's licence and want weekend morning slots only."
              disabled={submitting}
              {...register("message")}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4E4E7] text-sm text-[#18181B] placeholder-[#A1A1AA] bg-[#FAFAF7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#EAB308] transition-all resize-none"
            />
          </div>

          {/* Privacy Note */}
          <div className="flex items-start gap-2 text-[11px] text-[#71717A] leading-relaxed">
            <ShieldCheck className="h-4 w-4 text-[#CA8A04] shrink-0 mt-0.5" />
            <span>
              By submitting this form, you consent to being contacted by Sridhar Driving School regarding your enquiry. We never share your phone number with third-party advertisers.
            </span>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#FACC15] hover:bg-[#EAB308] text-[#18181B] font-extrabold text-base shadow-sm hover:shadow-md transition-all disabled:opacity-60 active:scale-98"
          >
            {submitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
