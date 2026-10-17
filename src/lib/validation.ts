import { z } from "zod";

/**
 * Validates and normalises Indian mobile numbers.
 * Accepts formats: 9845012345, +919845012345, 919845012345, 09845012345, etc.
 */
export function isValidIndianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return /^[6-9]\d{9}$/.test(digits.slice(1));
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  return false;
}

export function cleanIndianPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return digits;
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return digits;
}

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(80, "Name must not exceed 80 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid 10-digit mobile number")
    .max(16, "Phone number is too long")
    .refine((val) => isValidIndianPhone(val), {
      message: "Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9)",
    }),
  service: z
    .string()
    .trim()
    .min(2, "Please select a course or training service"),
  preferredContact: z.enum(["whatsapp", "phone", "email"], {
    message: "Please select how you would like us to contact you",
  }),
  preferredTime: z.enum(["morning", "afternoon", "evening", "flexible"]).optional(),
  message: z
    .string()
    .trim()
    .max(500, "Message must not exceed 500 characters")
    .optional(),
  // Honeypot field: must remain empty for human users
  website_url: z.string().max(0, "Invalid submission").optional().or(z.literal("")),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
