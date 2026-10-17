export type PreferredContactMethod = "whatsapp" | "phone" | "email";
export type PreferredTimeSlot = "morning" | "afternoon" | "evening" | "flexible";

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredContact: PreferredContactMethod;
  preferredTime?: PreferredTimeSlot;
  message?: string;
  // Honeypot field for bot mitigation
  website_url?: string;
}

export interface EnquiryApiResponse {
  success: boolean;
  message: string;
  enquiryId?: string;
  whatsappUrl?: string;
  errors?: Record<string, string[]>;
}
