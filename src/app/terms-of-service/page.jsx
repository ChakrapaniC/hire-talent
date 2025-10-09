"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/componets/Navbar/Navbar';
import Footer from '@/componets/Footer/Footer';

const TermsOfService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-25">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => router.push('/')}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6 cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service govern access to and use of the Hire Top Experts platform (the "Platform"), operated by ProLegion or its affiliates ("Company," "we," or "us"). The Platform connects businesses with pre‑vetted independent professionals and partner firms ("Experts" or "Flexperts") for hourly, monthly, or project‑based engagements ("Projects"). By creating an account, submitting a talent inquiry, or using the Platform, each client ("Client") and Expert agrees to these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Client:</strong> An organization or individual seeking to engage Experts through the Platform.</li>
              <li><strong>Expert/Flexpert:</strong> A pre‑vetted independent professional or partner firm offering services via the Platform.</li>
              <li><strong>Project:</strong> A scoped engagement between Client and Expert, including hourly, monthly, or fixed‑scope work.</li>
              <li><strong>Match:</strong> The introduction of one or more Experts to a Client based on requirements submitted via the Platform.</li>
              <li><strong>Services:</strong> The Platform's features, including discovery, matching, communication, time tracking, invoicing facilitation, and support.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Account Registration and Eligibility</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Users must be at least 18 and have the legal authority to enter contracts.</li>
              <li>Information provided must be accurate and kept up‑to‑date.</li>
              <li>We may decline, suspend, or terminate accounts at our discretion for policy or risk reasons.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Platform Role and Relationship of Parties</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>The Platform is a marketplace and facilitation service; it does not employ Experts and is not a party to service statements between Client and Expert.</li>
              <li>Experts act as independent contractors and are solely responsible for their work, compliance, and taxes.</li>
              <li>The Company is not responsible for work quality, outcomes, or delivery timelines unless expressly guaranteed in a separate written agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Matching and Engagement Process</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Clients submit project requirements; the Platform presents hand‑selected Experts, typically within a short timeframe.</li>
              <li>Clients may review profiles, interview Experts, and select a candidate.</li>
              <li>Engagement terms (scope, rate, schedule, milestones) are finalized in a work order, SOW, or in‑app agreement between Client and Expert.</li>
              <li><strong>Replacement Assurance:</strong> If a selected Expert is not a fit within an agreed evaluation period, the Platform will make reasonable efforts to propose a replacement Expert at no additional matching fee; fees for work already performed remain payable. Specific windows, criteria, and limits are defined at engagement start.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Fees, Billing, and Payments</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Rates may be hourly, monthly, or fixed‑price, as agreed by Client and Expert.</li>
              <li>The Platform may charge a service fee and/or payment processing fee.</li>
              <li>Time and deliverables should be recorded using approved tools to enable accurate invoicing.</li>
              <li>Invoices are typically generated from approved time entries or milestone acceptances; Clients must pay within the stated terms.</li>
              <li>Late payments may incur interest and collection costs.</li>
              <li><strong>Taxes:</strong> Client is responsible for applicable taxes, withholding, or reverse‑charge obligations; Experts are responsible for their own tax filings.</li>
              <li>Currency and conversion fees may apply for cross‑border payments.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Cancellations, Disputes, and Refunds</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Clients should promptly review work and raise concerns in writing.</li>
              <li>The Platform may offer dispute mediation; resolution could include additional revisions, replacement Expert proposals, credits, or partial refunds where appropriate.</li>
              <li>Refunds are not guaranteed and are limited to fees under direct control of the Platform; payments already disbursed to Experts follow the dispute outcome and Platform policies.</li>
              <li>Fixed‑price Projects may include milestone‑based funding and release; cancellations before milestone approval may result in partial payment for work performed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Expert Obligations</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Maintain accurate profiles, represent skills truthfully, and perform services with professional care.</li>
              <li>Comply with Client policies reasonably communicated prior to work start (security, confidentiality, tools).</li>
              <li>Avoid conflicts of interest and disclose any that arise.</li>
              <li>Use only properly licensed software and respect third‑party IP.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">9. Client Obligations</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide clear scope, timely feedback, and necessary access to systems, data, and stakeholders.</li>
              <li>Pay agreed fees on time and avoid circumventing the Platform for engagements originating from the Platform for a defined non‑circumvention period (e.g., 12 months) unless a buyout fee is agreed.</li>
              <li>Ensure lawful use of Expert deliverables and access.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">10. Confidentiality and Data Security</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Parties may receive confidential information; use is limited to the Project and must be protected with reasonable safeguards.</li>
              <li>If sensitive or regulated data is involved (e.g., personal data, financial or health records), Client must notify the Platform and Expert in advance and ensure compliant handling, including DPAs or addenda as needed.</li>
              <li>Each party must promptly notify the other of any suspected unauthorized access affecting shared information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">11. Intellectual Property</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Unless otherwise agreed in writing, IP in deliverables transfers to Client upon full payment, excluding pre‑existing IP, frameworks, or tools retained by the Expert or Company.</li>
              <li>Experts grant Client a license to any incorporated pre‑existing IP necessary to use the deliverables.</li>
              <li>Each party retains its trademarks and brand assets; no license is granted except as expressly stated.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">12. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">Users agree not to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Misrepresent identity, skills, or authority.</li>
              <li>Upload illegal, harmful, or infringing content.</li>
              <li>Attempt to bypass Platform fees, security, or rate limits.</li>
              <li>Engage in harassment, discrimination, or violations of law.</li>
              <li>Scrape or reverse‑engineer the Platform beyond rights granted by law.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">13. Non‑Circumvention</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>For introductions made through the Platform, Client and Expert agree not to engage directly or via affiliates outside the Platform without written consent for a period (e.g., 12 months) after the last interaction related to that introduction.</li>
              <li>A buyout option may be offered at a fee determined by the Platform.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">14. Ratings, Feedback, and Communications</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Feedback must be fair and lawful; the Platform may moderate or remove content violating policies.</li>
              <li>The Platform may send service, transactional, and promotional communications; users can manage preferences as allowed by law.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">15. Third‑Party Tools and Integrations</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>The Platform may integrate calendars, conferencing, billing, analytics, or verification services; use of such tools is subject to their terms and privacy practices.</li>
              <li>The Company is not responsible for third‑party outages or data handling beyond its reasonable control.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">16. Warranties and Disclaimers</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>The Platform is provided "as is" and "as available."</li>
              <li>The Company disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non‑infringement.</li>
              <li>Matching timelines and success rates are targets, not guarantees, unless expressly stated in a separate signed agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">17. Limitation of Liability</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>To the maximum extent permitted by law, the Company is not liable for indirect, incidental, special, consequential, punitive, or lost‑profit damages.</li>
              <li>The aggregate liability for claims arising from or relating to the Services shall not exceed the total Platform fees paid by the claimant in the six months preceding the event giving rise to the claim.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">18. Indemnification</h2>
            <p className="text-gray-700 mb-4">Users agree to indemnify and hold harmless the Company, its directors, employees, and affiliates from claims arising out of:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Breach of these Terms,</li>
              <li>Infringement or misappropriation of IP,</li>
              <li>Violation of law,</li>
              <li>Content or data provided by the user, or</li>
              <li>Services performed in a Project.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">19. Termination and Suspension</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Either party may terminate accounts for convenience with notice; ongoing Projects must be honored or concluded per the applicable engagement terms.</li>
              <li>The Company may suspend or terminate access for suspected violations, fraud, or risk.</li>
              <li>Upon termination, sections intended to survive (e.g., confidentiality, IP, fees due, non‑circumvention, limitations) remain in effect.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">20. Privacy</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Collection and use of personal data are governed by the Platform's Privacy Policy.</li>
              <li>Users must comply with applicable privacy and data protection laws when sharing or processing personal data through the Platform.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">21. Compliance and Export</h2>
            <p className="text-gray-700 mb-4">
              Users represent they are not subject to sanctions prohibiting Platform use and will comply with export, anti‑bribery, and anti‑money‑laundering laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">22. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Governing law and venue will be specified by the Company's place of incorporation or principal operations unless otherwise stated in a Master Services Agreement.</li>
              <li>Before formal proceedings, parties agree to attempt good‑faith negotiation, then mediation; if unresolved, exclusive courts or arbitration forum as designated will apply.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">23. Changes to the Terms</h2>
            <p className="text-gray-700 mb-4">
              The Company may update these Terms by posting a revised version with an updated effective date. Continued use after changes constitutes acceptance. Material changes may be communicated via email or in‑product notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">24. Contact</h2>
            <p className="text-gray-700 mb-4">
              For questions, disputes, or notices, contact: <a href="mailto:support@prolegion.com" className="text-blue-600 hover:text-blue-800">support@prolegion.com</a> or via the Platform's support channel.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">25. Optional Exhibits (add as needed)</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Exhibit A:</strong> Non‑Circumvention Period and Buyout Fee Schedule</li>
              <li><strong>Exhibit B:</strong> Service Fee and Payment Terms</li>
              <li><strong>Exhibit C:</strong> Data Processing Addendum (if processing personal data)</li>
              <li><strong>Exhibit D:</strong> Replacement Assurance Policy (coverage, window, exclusions)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;

