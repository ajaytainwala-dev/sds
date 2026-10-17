import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { sendEnquiryEmail } from "@/lib/email";
import { getEnquiryFollowupWhatsAppUrl } from "@/lib/whatsapp";
import { EnquiryApiResponse } from "@/types/enquiry";

// Simple in-memory rate limiting map for basic spam protection
const ipRequestTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 5; // maximum 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestTimestamps.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  validTimestamps.push(now);
  ipRequestTimestamps.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest): Promise<NextResponse<EnquiryApiResponse>> {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many enquiries submitted from this network. Please wait a moment or call the school directly.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check: bots fill in invisible fields
    if (body.website_url && body.website_url.trim().length > 0) {
      // Quietly reject bot submissions
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
      });
    }

    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      const flattenedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the errors in the form.",
          errors: flattenedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Send email to driving school owner
    const emailResult = await sendEnquiryEmail(data);

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            emailResult.error ||
            "Unable to submit enquiry at this moment. Please reach out to us directly on WhatsApp or phone.",
        },
        { status: 500 }
      );
    }

    // Generate pre-filled WhatsApp follow-up link for the student
    const followupWhatsAppUrl = getEnquiryFollowupWhatsAppUrl(
      data.fullName,
      data.phone,
      data.service,
      data.preferredTime
    );

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
      enquiryId: emailResult.messageId,
      whatsappUrl: followupWhatsAppUrl,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("[API /api/enquiries] Error:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your enquiry. Please call us directly.",
      },
      { status: 500 }
    );
  }
}
