/**
 * Legal copy for the privacy, terms, and cookie routes.
 *
 * ---------------------------------------------------------------------------
 * COPY STATUS
 * ---------------------------------------------------------------------------
 * Agency-drafted template language. It has NOT been reviewed by a Hawaiʻi
 * attorney, and every page renders `LEGAL_DISCLAIMER` until it has been.
 *
 * Written against the site as built: the quote form composes a `mailto:`
 * message, and no analytics or cookies are set by the site itself. The form
 * processor (Web3Forms) and analytics sections are phrased to stay accurate
 * if either is switched on later — review them again when that happens.
 * ---------------------------------------------------------------------------
 */

import { SITE } from "@/lib/constants";

/* ========================================================================== */
/*  Types                                                                      */
/* ========================================================================== */

export interface LegalSection {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  /** Optional bulleted list rendered after the paragraphs. */
  readonly bullets?: readonly string[];
  /** Optional paragraph rendered after the bullets. */
  readonly closing?: string;
}

export interface LegalDocument {
  /** Route path, e.g. `/privacy`. */
  readonly path: string;
  /** H1 and nav label. */
  readonly title: string;
  /** Meta description. */
  readonly description: string;
  /** Lead paragraph under the H1. */
  readonly lead: string;
  readonly sections: readonly LegalSection[];
}

/* ========================================================================== */
/*  Shared                                                                     */
/* ========================================================================== */

/** Human-readable effective date shown on every legal page. */
export const LEGAL_UPDATED = "October 13, 2026";

export const LEGAL_DISCLAIMER =
  "This page is a standard website template provided for general informational purposes. It is not legal advice and should be reviewed by qualified local legal counsel licensed in the State of Hawaiʻi before being relied upon.";

const BUSINESS = SITE.legalName;
const OFFICE = `${SITE.address.street} ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`;
const CONTACT_LINE = `${BUSINESS}, ${OFFICE}. Phone: ${SITE.contact.phone}. Email: ${SITE.contact.email}.`;

/* ========================================================================== */
/*  Privacy Policy                                                             */
/* ========================================================================== */

export const PRIVACY_POLICY: LegalDocument = {
  path: "/privacy",
  title: "Privacy Policy",
  description: `How ${BUSINESS} collects, uses, and protects the personal information you share through ${SITE.domain}. We never sell your data.`,
  lead: `This Privacy Policy explains what information ${BUSINESS} (“Nexjen,” “we,” “us,” or “our”) collects when you visit ${SITE.domain} (the “Site”) or contact us, how we use it, and the choices you have.`,
  sections: [
    {
      heading: "1. Who we are",
      paragraphs: [
        `${BUSINESS} is a licensed plumbing contractor (${SITE.licenseLabel}) based in ${SITE.address.city}, Maui, Hawaiʻi. We are the party responsible for the personal information described in this policy.`,
      ],
    },
    {
      heading: "2. Information you provide to us",
      paragraphs: [
        "When you request a quote, schedule service, or otherwise contact us through the Site, by phone, or by email, you may give us:",
      ],
      bullets: [
        "Your name",
        "Your phone number",
        "Your email address",
        "The type of service you are interested in",
        "Project details, property information, photos, and any other information you choose to include in your message",
      ],
      closing:
        "Please do not send payment card numbers, Social Security numbers, or other sensitive personal information through the Site or by email.",
    },
    {
      heading: "3. How our contact forms work",
      paragraphs: [
        "Our quote request form may deliver your submission in one of two ways. It may open a pre-filled message in your own email application, in which case nothing is transmitted until you choose to send that email and it is handled by your email provider and ours. Or it may submit your information through Web3Forms, a third-party form-processing service, which receives the form fields you enter and forwards them to our business inbox.",
        "Where a form processor such as Web3Forms is used, it acts on our behalf to deliver your message and processes your information under its own privacy policy and security practices. We do not authorize it to use your information for any other purpose.",
      ],
    },
    {
      heading: "4. Information collected automatically",
      paragraphs: [
        "Like most websites, the Site and its hosting provider may automatically record limited technical information when you visit, such as your IP address, browser type, device type, operating system, referring page, pages viewed, and the date and time of your visit. This information is used to deliver the Site, keep it secure, and diagnose problems.",
        "We may also use third-party analytics services to understand, in aggregate, how visitors find and use the Site — for example, which pages are most viewed and how long visits last. These services may use cookies or similar technologies as described in our Cookie Policy. Analytics data is used to improve the Site and is not used to identify you personally.",
      ],
    },
    {
      heading: "5. How we use your information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Respond to your inquiries and provide quotes and estimates",
        "Schedule, perform, invoice, and follow up on plumbing work",
        "Prepare and administer written contracts, permits, and inspections",
        "Communicate with you about your project or service call",
        "Operate, maintain, secure, and improve the Site",
        "Comply with legal, licensing, tax, and recordkeeping obligations",
        "Protect our rights, property, and safety, and those of our customers and others",
      ],
    },
    {
      heading: "6. We never sell your data",
      paragraphs: [
        "We do not sell, rent, or trade your personal information to anyone, for any purpose. We do not share your personal information with third parties for their own marketing purposes.",
      ],
    },
    {
      heading: "7. When we share information",
      paragraphs: [
        "We share personal information only as needed to run our business and serve you, including with:",
      ],
      bullets: [
        "Service providers acting on our behalf, such as our website host, email provider, form processor, and analytics provider",
        "Suppliers, subcontractors, and inspectors where necessary to complete your project",
        "Government agencies, utilities, and water purveyors where required for permits, inspections, or certifications such as backflow test filings",
        "Professional advisers such as accountants, insurers, and attorneys",
        "Law enforcement, courts, or regulators when required by law or to protect our legal rights",
        "A successor entity in connection with a merger, acquisition, or sale of all or part of our business",
      ],
    },
    {
      heading: "8. Data retention",
      paragraphs: [
        "We keep personal information for as long as reasonably necessary to fulfill the purposes described in this policy, including to maintain job, warranty, licensing, and tax records required by law, and then securely delete or de-identify it.",
      ],
    },
    {
      heading: "9. Data security",
      paragraphs: [
        "We use reasonable administrative, technical, and physical safeguards to protect personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. In the event of a security breach involving your personal information, we will provide notice as required by applicable law, including Hawaiʻi Revised Statutes Chapter 487N.",
      ],
    },
    {
      heading: "10. Your choices",
      paragraphs: [
        "You may ask us to access, correct, or delete the personal information we hold about you, subject to our legal recordkeeping obligations. You may also ask us to stop contacting you at any time. To make a request, contact us using the details below. We may need to verify your identity before acting on a request.",
        "You can control cookies through your browser settings, as described in our Cookie Policy.",
      ],
    },
    {
      heading: "11. Third-party links",
      paragraphs: [
        "The Site may link to websites or services operated by others. We are not responsible for the content or privacy practices of those third parties, and we encourage you to review their policies.",
      ],
    },
    {
      heading: "12. Children’s privacy",
      paragraphs: [
        "The Site is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.",
      ],
    },
    {
      heading: "13. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page shows when it was last revised. Changes take effect when posted.",
      ],
    },
    {
      heading: "14. Contact us",
      paragraphs: [
        `Questions or requests about this Privacy Policy can be directed to: ${CONTACT_LINE}`,
      ],
    },
  ],
};

/* ========================================================================== */
/*  Terms of Service                                                           */
/* ========================================================================== */

export const TERMS_OF_SERVICE: LegalDocument = {
  path: "/terms",
  title: "Terms of Service",
  description: `The terms that govern your use of ${SITE.domain}, the website of ${BUSINESS}.`,
  lead: `These Terms of Service (the “Terms”) govern your access to and use of ${SITE.domain} (the “Site”), operated by ${BUSINESS} (“Nexjen,” “we,” “us,” or “our”). By using the Site, you agree to these Terms. If you do not agree, do not use the Site.`,
  sections: [
    {
      heading: "1. Informational purposes only",
      paragraphs: [
        "The Site provides general information about our company and the plumbing services we offer. Nothing on the Site is professional, engineering, code-compliance, or legal advice for your specific property or situation. Plumbing conditions vary, and you should not rely on Site content in place of an on-site evaluation by a licensed contractor.",
      ],
    },
    {
      heading: "2. All work is subject to a written contract",
      paragraphs: [
        "No plumbing, construction, repair, maintenance, or other work is agreed to, scheduled, or warranted through the Site. All work performed by Nexjen is subject to a separate formal written contract, proposal, or work order signed by Nexjen and the customer, consistent with Hawaiʻi Revised Statutes Chapter 444 and other applicable law.",
        "That written agreement alone sets the scope of work, price, payment schedule, timeline, warranties, and all other terms of the engagement. If anything on the Site conflicts with a written agreement, the written agreement controls.",
      ],
    },
    {
      heading: "3. Quotes and estimates",
      paragraphs: [
        "Submitting a quote request does not create a contract or any obligation on either party. Any price, estimate, or timeframe discussed through the Site, by phone, or by email is a non-binding estimate until it is incorporated into a signed written agreement, and may change after an on-site inspection or as conditions are uncovered. Descriptions of services, photos, and project examples on the Site are illustrative and do not guarantee any particular result, price, or availability.",
      ],
    },
    {
      heading: "4. Acceptable use",
      paragraphs: ["You agree not to:"],
      bullets: [
        "Use the Site for any unlawful, fraudulent, or harmful purpose",
        "Submit false, misleading, or another person’s information",
        "Send spam, malware, or unsolicited advertising through our forms",
        "Attempt to gain unauthorized access to the Site, its servers, or connected systems",
        "Scrape, copy, or harvest Site content or data by automated means without our written permission",
        "Interfere with or disrupt the operation of the Site",
      ],
    },
    {
      heading: "5. Intellectual property",
      paragraphs: [
        `The Site and its content — including text, photographs, graphics, logos, and the ${SITE.name} name and marks — are owned by or licensed to ${BUSINESS} and are protected by copyright, trademark, and other laws. You may view and print pages for your personal, non-commercial use. Any other use requires our prior written permission.`,
      ],
    },
    {
      heading: "6. No warranties; Site provided “as is”",
      paragraphs: [
        "THE SITE AND ALL CONTENT, INFORMATION, AND MATERIALS ON IT ARE PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. TO THE FULLEST EXTENT PERMITTED BY LAW, NEXJEN DISCLAIMS ALL WARRANTIES, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT.",
        "We do not warrant that the Site will be uninterrupted, timely, secure, or error-free, that content is complete or current, or that the Site is free of viruses or other harmful components. Any warranty covering plumbing work is provided only in the signed written agreement for that work, and not by the Site.",
      ],
    },
    {
      heading: "7. Limitation of liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL NEXJEN OR ITS OWNERS, OFFICERS, EMPLOYEES, AGENTS, SUBCONTRACTORS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR ACCESS TO, USE OF, OR INABILITY TO USE THE SITE OR ANY CONTENT ON IT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
        "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100).",
        "Liability relating to plumbing work is governed exclusively by the signed written agreement for that work. Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above may not apply to you; in that case, our liability is limited to the fullest extent permitted by law.",
      ],
    },
    {
      heading: "8. Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless Nexjen and its owners, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys’ fees, arising out of or related to your misuse of the Site, your violation of these Terms, or your violation of any law or the rights of a third party.",
      ],
    },
    {
      heading: "9. Third-party links and services",
      paragraphs: [
        "The Site may link to or rely on third-party websites and services. We do not control and are not responsible for their content, policies, availability, or practices, and your use of them is at your own risk.",
      ],
    },
    {
      heading: "10. Governing law and venue",
      paragraphs: [
        "These Terms are governed by the laws of the State of Hawaiʻi, without regard to its conflict-of-law principles. Any dispute arising out of or related to these Terms or the Site will be brought exclusively in the state or federal courts with jurisdiction over Maui County, Hawaiʻi, and you consent to the personal jurisdiction of those courts.",
      ],
    },
    {
      heading: "11. Severability and entire agreement",
      paragraphs: [
        "If any provision of these Terms is held invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the remaining provisions will remain in full force. Our failure to enforce any provision is not a waiver. These Terms, together with our Privacy Policy and Cookie Policy, are the entire agreement between you and Nexjen regarding the Site.",
      ],
    },
    {
      heading: "12. Changes to these Terms",
      paragraphs: [
        "We may revise these Terms at any time by posting an updated version on this page. The “Last updated” date shows when they were last changed. Your continued use of the Site after changes are posted means you accept the revised Terms.",
      ],
    },
    {
      heading: "13. Contact us",
      paragraphs: [`Questions about these Terms can be directed to: ${CONTACT_LINE}`],
    },
  ],
};

/* ========================================================================== */
/*  Cookie Policy                                                              */
/* ========================================================================== */

export const COOKIE_POLICY: LegalDocument = {
  path: "/cookies",
  title: "Cookie Policy",
  description: `How ${SITE.domain}, the website of ${BUSINESS}, uses essential and performance cookies.`,
  lead: `This Cookie Policy explains how ${BUSINESS} (“Nexjen,” “we,” “us,” or “our”) uses cookies and similar technologies on ${SITE.domain} (the “Site”). It should be read together with our Privacy Policy.`,
  sections: [
    {
      heading: "1. What cookies are",
      paragraphs: [
        "Cookies are small text files that a website stores on your browser or device. Similar technologies include local storage, pixels, and scripts that serve the same purpose. They let a site remember information about your visit, keep it working correctly, and understand how it is used.",
      ],
    },
    {
      heading: "2. Essential cookies",
      paragraphs: [
        "Essential (strictly necessary) cookies are required for the Site to function. They may be set by the Site or its hosting provider to deliver pages, balance traffic, protect against abuse and spam, keep form submissions secure, and remember basic preferences such as reduced-motion settings.",
        "Because the Site cannot work properly without them, essential cookies do not require your consent and cannot be switched off in our systems. You can block them in your browser, but parts of the Site may then not work.",
      ],
    },
    {
      heading: "3. Performance cookies",
      paragraphs: [
        "Performance (analytics) cookies help us understand how visitors use the Site — for example, which pages are visited most, how visitors arrive, and whether pages load correctly. Where used, they are provided by third-party analytics services, and the information they collect is aggregated and used only to measure and improve the Site’s performance.",
        "We do not use performance cookies to identify you personally, and we do not use advertising or cross-site tracking cookies.",
      ],
    },
    {
      heading: "4. Third-party cookies",
      paragraphs: [
        "Some cookies may be set by third-party services we rely on, such as our hosting, form-processing, or analytics providers. Those providers manage their own cookies under their own privacy policies, which we encourage you to review.",
      ],
    },
    {
      heading: "5. Managing cookies",
      paragraphs: [
        "Most browsers let you view, delete, and block cookies through their settings, including blocking third-party cookies or all cookies. Consult your browser’s help documentation for instructions. Blocking essential cookies may affect how the Site works. Choices you make apply only to the browser and device you are using.",
      ],
    },
    {
      heading: "6. Changes to this policy",
      paragraphs: [
        "We may update this Cookie Policy as the Site or applicable law changes. The “Last updated” date at the top of this page shows when it was last revised.",
      ],
    },
    {
      heading: "7. Contact us",
      paragraphs: [`Questions about our use of cookies can be directed to: ${CONTACT_LINE}`],
    },
  ],
};

export const LEGAL_DOCUMENTS: readonly LegalDocument[] = [
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  COOKIE_POLICY,
];
