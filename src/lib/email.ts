import { Resend } from "resend";
import { SITE_CONFIG } from "./site-config";
import { EnquiryFormData } from "@/types/enquiry";

/**
 * Escapes HTML characters to prevent XSS / HTML injection in email bodies
 */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface SendEnquiryResult {
  success: boolean;
  messageId?: string;
  error?: string;
  simulated?: boolean;
}

export async function sendEnquiryEmail(data: EnquiryFormData): Promise<SendEnquiryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_EMAIL || SITE_CONFIG.contact.email;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "enquiries@sridhardrivingschool.in";

  const safeName = escapeHtml(data.fullName);
  const safePhone = escapeHtml(data.phone);
  const safeService = escapeHtml(data.service);
  const safeContact = escapeHtml(data.preferredContact);
  const safeTiming = escapeHtml(data.preferredTime || "Flexible / Not specified");
  const safeMessage = data.message ? escapeHtml(data.message) : "None provided";
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Admission Enquiry</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #fafaf7; padding: 24px; color: #18181b;">
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background: #ffffff; border-radius: 12px; border: 1px solid #e4e4e7; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <tr>
            <td style="background-color: #facc15; padding: 24px 32px; border-bottom: 2px solid #eab308;">
              <h2 style="margin: 0; color: #18181b; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">
                ${escapeHtml(SITE_CONFIG.name)}
              </h2>
              <p style="margin: 4px 0 0 0; color: #713f12; font-size: 14px; font-weight: 500;">
                Austin Town, Bengaluru — Website Admission Enquiry
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px;">
              <p style="margin-top: 0; font-size: 16px; color: #3f3f46;">
                You have received a new admission enquiry from the website:
              </p>
              
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; margin-top: 16px;">
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="color: #71717a; font-size: 14px; width: 35%; font-weight: 600;">Student Name:</td>
                  <td style="color: #18181b; font-size: 15px; font-weight: 700;">${safeName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="color: #71717a; font-size: 14px; font-weight: 600;">Phone Number:</td>
                  <td style="color: #18181b; font-size: 15px;">
                    <a href="tel:${safePhone}" style="color: #ca8a04; text-decoration: none; font-weight: 600;">+91 ${safePhone}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="color: #71717a; font-size: 14px; font-weight: 600;">Requested Course:</td>
                  <td style="color: #18181b; font-size: 15px; font-weight: 600;">${safeService}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="color: #71717a; font-size: 14px; font-weight: 600;">Preferred Contact:</td>
                  <td style="color: #18181b; font-size: 14px; text-transform: capitalize;">${safeContact}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f4f4f5;">
                  <td style="color: #71717a; font-size: 14px; font-weight: 600;">Preferred Time Slot:</td>
                  <td style="color: #18181b; font-size: 14px; text-transform: capitalize;">${safeTiming}</td>
                </tr>
                <tr>
                  <td style="color: #71717a; font-size: 14px; font-weight: 600; vertical-align: top; padding-top: 12px;">Student Note:</td>
                  <td style="color: #3f3f46; font-size: 14px; padding-top: 12px; line-height: 1.5;">${safeMessage}</td>
                </tr>
              </table>

              <div style="margin-top: 28px; padding: 16px; background-color: #fefce8; border-radius: 8px; border: 1px solid #fef08a;">
                <p style="margin: 0; font-size: 13px; color: #854d0e;">
                  <strong>Quick Action:</strong> Click below to reply directly via WhatsApp or phone call.
                </p>
                <div style="margin-top: 12px;">
                  <a href="https://wa.me/91${safePhone}?text=${encodeURIComponent(`Hello ${data.fullName}, thank you for contacting Sridhar Motor Driving School, Austin Town regarding ${data.service}.`)}" 
                     style="display: inline-block; background-color: #15803d; color: #ffffff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; margin-right: 8px;">
                    Open WhatsApp Chat
                  </a>
                  <a href="tel:${safePhone}" 
                     style="display: inline-block; background-color: #18181b; color: #ffffff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">
                    Call Student
                  </a>
                </div>
              </div>

              <p style="margin-top: 24px; font-size: 12px; color: #a1a1aa; border-top: 1px solid #f4f4f5; padding-top: 16px;">
                Received on: ${timestamp} IST | Origin: Sridhar Motor Driving School Web Form (Austin Town, Bengaluru)
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  // Check if Resend API key is configured
  if (!apiKey || apiKey === "re_placeholder" || apiKey.trim() === "") {
    // In local development or staging without RESEND_API_KEY, simulate successful receipt and log securely
    console.info(
      `[Enquiry Service] RESEND_API_KEY not configured. Simulated dispatch for student "${data.fullName}" (${data.phone}) - Course: "${data.service}". To enable real email delivery, set RESEND_API_KEY and OWNER_EMAIL in .env.local`
    );
    return {
      success: true,
      simulated: true,
      messageId: `sim_${Date.now()}`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: fromEmail,
      to: [ownerEmail],
      replyTo: `${data.fullName} <${SITE_CONFIG.contact.email}>`,
      subject: `New Driving School Enquiry: ${data.fullName} - ${data.service}`,
      html: htmlBody,
    });

    if (resendError) {
      console.error("[Enquiry Service] Resend dispatch error:", resendError.message);
      return {
        success: false,
        error: "Email delivery provider encountered an issue. Please contact the school directly via WhatsApp or phone.",
      };
    }

    return {
      success: true,
      messageId: resendData?.id,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("[Enquiry Service] Unexpected error:", errorMessage);
    return {
      success: false,
      error: "Unable to process email delivery at this moment.",
    };
  }
}
