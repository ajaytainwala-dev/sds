# Sridhar Driving School — Website & Admissions Portal

Production-quality web application built for **Sridhar Driving School**, located in Austin Town, Bengaluru, Karnataka, India.

---

## 1. Project Overview & Architecture

This application is built with:
- **Next.js 16 (App Router)** with Server Components by default for optimal performance and SEO.
- **TypeScript** with strict type checking.
- **Tailwind CSS v4** implementing a bespoke **Premium Light + Sunshine Yellow** visual identity.
- **Framer Motion** for subtle, accessible, and performant entrance animations (respecting `prefers-reduced-motion`).
- **React Hook Form + Zod** for robust client and server validation of admission enquiries.
- **Resend** transactional email integration for immediate dispatch of student leads to the owner's inbox.
- **WhatsApp Click-to-Chat** using official `wa.me` links with context-aware prefilled messages.
- **Local SEO & Schema.org JSON-LD**: Comprehensive `LocalBusiness` structured data for Austin Town and Bengaluru search rankings, dynamic `robots.txt`, and XML `sitemap.xml`.

---

## 2. Getting Started (Local Development)

### Prerequisites
- Node.js (v18.18+ or v20+)
- npm or pnpm

### Quick Setup

1. **Clone or navigate into the project directory:**
   ```bash
   cd d:\Projects\SDS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` to configure:
   - `OWNER_EMAIL`: Where enquiry emails will be sent.
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: 10-digit WhatsApp number (with 91 prefix, e.g. `919845012345`).
   - `NEXT_PUBLIC_PHONE_NUMBER`: Display phone number (e.g. `+91 98450 12345`).
   - `RESEND_API_KEY`: API key from [Resend](https://resend.com) (in development, leaving it empty triggers simulated safe logging).

4. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Run Tests:**
   ```bash
   npm test
   ```

6. **Run Linter:**
   ```bash
   npm run lint
   ```

7. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 3. Environment Variables Reference

| Variable | Description | Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Canonical domain for SEO & OpenGraph | `https://sridhardrivingschool.in` |
| `NEXT_PUBLIC_PHONE_NUMBER` | Formatted phone number for `tel:` links | `+91 98450 12345` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Number for WhatsApp `wa.me` links | `919845012345` |
| `OWNER_EMAIL` | School owner's email for incoming leads | `admissions@sridhardrivingschool.in` |
| `RESEND_API_KEY` | Resend API key for transactional emails | `re_...` |
| `RESEND_FROM_EMAIL` | Verified sender domain in Resend | `enquiries@sridhardrivingschool.in` |

---

## 4. Centralised School Content (`src/lib/site-config.ts`)

All business content is managed in a single, strictly-typed file:
[`src/lib/site-config.ts`](file:///d:/Projects/SDS/src/lib/site-config.ts)

To modify any of the following, edit `SITE_CONFIG`:
- **Official Address & Landmark** (`SITE_CONFIG.location`)
- **Google Maps Coordinates & Embed URL** (`SITE_CONFIG.location.googleMapsUrl`)
- **Operating Hours** (`SITE_CONFIG.contact.workingHours`)
- **Courses & Training Programs** (`SITE_CONFIG.courses`): Inclusions, duration, vehicle type, and exact prices.
- **Additional Specialised Modules** (`SITE_CONFIG.additionalServices`)
- **Photo Gallery Assets** (`SITE_CONFIG.gallery`)
- **Frequently Asked Questions** (`SITE_CONFIG.faqs`)

---

## 5. Deployment Guide (Vercel)

This project is optimized for deployment on **Vercel**:

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select this repository. The Next.js framework preset will be auto-detected.
4. Under **Environment Variables**, add the variables documented above (`OWNER_EMAIL`, `RESEND_API_KEY`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, etc.).
5. Click **Deploy**.
6. In **Project Settings > Domains**, connect the school's custom domain (e.g. `sridhardrivingschool.in`).

---

## 6. Client Handover Checklist

Items for the business owner to finalize before public advertising:
- [ ] Provide confirmed street number / building name in Austin Town (currently set to *Austin Town, Neelasandra Main Road*).
- [ ] Supply genuine high-resolution photographs of the school's dual-control training vehicles, instructors, and office signboards to replace temporary stock images in `SITE_CONFIG.gallery`.
- [ ] Confirm exact rupee prices if they wish to display fixed pricing rather than the default *"Enquire for Fee Details"* state.
- [ ] Set up free account at [Resend.com](https://resend.com) to generate the production `RESEND_API_KEY`.
- [ ] Add the verified DNS records (`CNAME` / `A`) for the school domain in their domain registrar.
