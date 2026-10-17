import { SITE_CONFIG } from "./site-config";

/**
 * Generates JSON-LD schema for LocalBusiness / EducationalOrganization
 * targeting local search in Austin Town, Bengaluru.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    priceRange: "₹₹",
    image: `${SITE_CONFIG.url}/images/hero/sridhar-driving-school-bengaluru.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.location.streetAddress,
      addressLocality: SITE_CONFIG.location.neighborhood,
      addressRegion: SITE_CONFIG.location.state,
      postalCode: SITE_CONFIG.location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.location.geo.latitude,
      longitude: SITE_CONFIG.location.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "06:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Austin Town",
      },
      {
        "@type": "AdministrativeArea",
        name: "Neelasandra",
      },
      {
        "@type": "AdministrativeArea",
        name: "Victoria Layout",
      },
      {
        "@type": "AdministrativeArea",
        name: "Richmond Town",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bengaluru",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Driving Courses and Training Programs",
      itemListElement: SITE_CONFIG.courses.map((course) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: course.title,
          description: course.shortDescription,
        },
      })),
    },
  };
}
