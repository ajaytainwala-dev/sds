import { SITE_CONFIG } from "./site-config";
import { cleanPhoneForWhatsApp } from "./utils";

/**
 * Returns a direct wa.me link for general enquiries
 */
export function getGeneralWhatsAppUrl(): string {
  const phone = cleanPhoneForWhatsApp(SITE_CONFIG.contact.whatsapp);
  const text = encodeURIComponent(SITE_CONFIG.whatsappPrefill.general);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Returns a direct wa.me link with prefilled course enquiry
 */
export function getCourseWhatsAppUrl(courseName: string): string {
  const phone = cleanPhoneForWhatsApp(SITE_CONFIG.contact.whatsapp);
  const text = encodeURIComponent(SITE_CONFIG.whatsappPrefill.course(courseName));
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Returns a wa.me link for the optional post-submission follow-up
 * Note: wa.me opens WhatsApp on user's device with the pre-filled text.
 * The user must tap "Send" in WhatsApp.
 */
export function getEnquiryFollowupWhatsAppUrl(
  name: string,
  phone: string,
  course: string,
  preferredTime?: string
): string {
  const schoolPhone = cleanPhoneForWhatsApp(SITE_CONFIG.contact.whatsapp);
  let message = `Hello Sridhar Driving School,\n\nI have submitted an admission enquiry on your website with the following details:\n- Name: ${name}\n- Phone: ${phone}\n- Course: ${course}`;
  if (preferredTime) {
    message += `\n- Preferred Timing: ${preferredTime}`;
  }
  message += `\n\nPlease share the upcoming batch schedule and admission procedure. Thank you!`;

  return `https://wa.me/${schoolPhone}?text=${encodeURIComponent(message)}`;
}
