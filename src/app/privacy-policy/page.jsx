"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/componets/Navbar/Navbar';
import Footer from '@/componets/Footer/Footer';

const PrivacyPolicy = () => {
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
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              This Privacy Policy explains how hireflexperts.com ("Hire Flexperts," "we," "our," or "us") collects, uses, maintains, and discloses information from business clients and visitors (each, a "Client") of the hireflexperts.com website (the "Site"). By accessing or using the Site or submitting information, Clients agree to this Privacy Policy and our Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Non-personal data</h3>
            <p className="text-gray-700 mb-4">
              IP address, device identifiers, browser type, operating system, referring pages, pages viewed, timestamps, and download events, collected to analyze usage and improve Site performance, including through embedded analytics (e.g., Google Analytics or similar).
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Client-provided data</h3>
            <p className="text-gray-700 mb-4">
              Business contact name, work email, phone, company name, role/function, staffing needs, project briefs, preferences, meeting notes, and any information entered into forms, chat, or scheduling flows on the Site.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Account and integrations (optional)</h3>
            <p className="text-gray-700 mb-4">
              If using federated sign-in or calendar integrations (e.g., Google/Microsoft) for authentication or scheduling, only the authorized data is accessed via OAuth; passwords are not received, and usage complies with respective API policies (including Google's Limited Use).
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Cookies and similar technologies</h3>
            <p className="text-gray-700 mb-4">
              Cookies, pixels, and local storage support authentication, session management, preferences, analytics, and permitted marketing; browser controls can limit cookies, though some features may not function.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How We Use Information</h2>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide services to Clients: understand requirements, recommend contract resources, facilitate discovery, messaging, interviews, contracting, onboarding, project tracking, and payments through integrated providers.</li>
              <li>Manage Client accounts; verify identity; protect Site integrity and safety; prevent fraud and abuse.</li>
              <li>Improve Site performance, features, and user experience through analytics and diagnostics.</li>
              <li>Communicate service updates and operational messages; send marketing communications where permitted with opt-out controls.</li>
              <li>Comply with legal obligations and enforce Terms and policies.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Client Content and Visibility</h2>
            <p className="text-gray-700 mb-4">
              Information a Client chooses to submit in briefs, requirements, reviews, or other areas intended to be shared with account teams or within workflow features may be visible to relevant service personnel and systems necessary to fulfill the engagement; avoid including sensitive personal information not required for service delivery. Public posting is not required for Client use of the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Third-Party Services and Sharing</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Service providers</h3>
            <p className="text-gray-700 mb-4">
              Information may be shared with providers supporting hosting, analytics, communications, scheduling, payments, identity verification, security, and operations under contracts requiring confidentiality and appropriate safeguards; personal information is not sold.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Integrations</h3>
            <p className="text-gray-700 mb-4">
              Limited, purpose-bound use of Google/Microsoft data for authentication and scheduling; such data is not used to develop or train generalized AI/ML models and is not transferred to third-party AI tools.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Legal and safety</h3>
            <p className="text-gray-700 mb-4">
              Information may be disclosed to comply with laws, lawful requests, or to protect rights, safety, and platform integrity.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Business transfers</h3>
            <p className="text-gray-700 mb-4">
              In the event of a merger, acquisition, or asset transfer, Client information may be transferred subject to this Privacy Policy or a successor policy with notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              Information is retained only as long as necessary to deliver services, for legitimate business purposes, or to meet legal, regulatory, or contractual requirements; after applicable periods, data is deleted or archived consistent with law.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              Administrative, technical, and physical safeguards are used to protect information, including HTTPS, access controls, and least-privilege practices; however, no method of transmission or storage is completely secure, and caution is advised when sharing information.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              This Site and services are intended for business use and are not directed to children; personal information from individuals under 16 is not knowingly collected and will be deleted if discovered.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">International Transfers</h2>
            <p className="text-gray-700 mb-4">
              Information may be processed and stored in jurisdictions where service providers operate; appropriate measures consistent with applicable law are applied for international data transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Your Choices and Rights</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Access, correction, deletion</h3>
            <p className="text-gray-700 mb-4">
              Subject to law, Clients may request access to, correction of, or deletion of personal information associated with their account.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Consent management</h3>
            <p className="text-gray-700 mb-4">
              Where processing relies on consent (e.g., marketing, integrations), consent can be withdrawn at any time without affecting prior processing.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Communications</h3>
            <p className="text-gray-700 mb-4">
              Marketing emails include unsubscribe options; transactional or service messages will continue where necessary.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Cookie controls</h3>
            <p className="text-gray-700 mb-4">
              Browser settings can limit cookies, though some Site features may not function properly without them.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              The Site may contain links to third-party websites or services governed by their own policies; review those policies as their practices are not controlled by us.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy may be updated periodically; changes will be posted on this page with an updated effective date, and continued use of the Site after changes indicates acceptance.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions or requests related to this Privacy Policy or personal information, contact the ProLegion support desk noted on the ProLegion Contact page: contactus@prolegion.com, +91 8699261223, Biggbang, 3rd Floor, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055. If publishing separate Hire Flexperts contacts, replace with the official Hire Flexperts contact details prior to go-live.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
