import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} — what data we collect, how we use cookies, and your rights under GDPR and CCPA.`,
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">
        <em>Last updated: April 18, 2026</em>
      </p>

      <div className="article-body">
        <h2>Overview</h2>
        <p>
          This privacy policy describes how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;), operated from Pereira, Colombia, collects, uses, and protects information
          when you visit <strong>kubomoney.com</strong>. We designed the site so you can use every
          calculator and guide without registering, logging in, or submitting personal information.
        </p>

        <h2>Information We Collect</h2>
        <h3>Information You Provide</h3>
        <p>
          The only time you actively send us information is when you email us (for example, at{" "}
          <strong>contact@kubomoney.com</strong>). In that case we retain your email address and the
          contents of the message for as long as we need to respond and keep a record of the exchange.
        </p>

        <h3>Calculator Inputs</h3>
        <p>
          All calculations run in your browser. Numbers you enter into a calculator (income, loan
          amount, interest rate, etc.) are <strong>never transmitted to our servers</strong> and are
          discarded as soon as you close the page.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>When you visit the site, our analytics and advertising partners automatically collect:</p>
        <ul>
          <li>IP address (truncated / anonymised where possible)</li>
          <li>Browser type, operating system, and device category</li>
          <li>Pages viewed, time on page, and referring URL</li>
          <li>Approximate geographic location (country and region, not street address)</li>
          <li>Cookie identifiers used for measurement and ad personalisation</li>
        </ul>

        <h2>Cookies We Use</h2>
        <p>We use cookies and similar technologies in three categories:</p>

        <h3>1. Strictly Necessary</h3>
        <p>
          Required for the site to function (e.g., remembering your cookie preferences). These are set
          regardless of consent and cannot be turned off.
        </p>

        <h3>2. Analytics</h3>
        <p>
          Set by <strong>Google Analytics 4</strong> (measurement ID G-XRK84DD6VF). These help us
          understand which pages are used most and how visitors navigate the site. Data is aggregated
          and pseudonymised; we do not combine it with information that identifies you personally.
        </p>

        <h3>3. Advertising</h3>
        <p>
          Set by <strong>Google AdSense</strong> and its advertising partners. Google may use cookies
          to serve ads based on your prior visits to this and other websites. You can opt out of
          personalised advertising at any time by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          or{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info/choices
          </a>
          . Visitors in the EU/UK can manage consent through the Google consent dialog when it appears.
        </p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To operate and improve the site (page speed, bug fixes, content priorities)</li>
          <li>To measure which calculators and guides are most useful to readers</li>
          <li>To display relevant advertising that helps keep the site free</li>
          <li>To reply to emails you send us</li>
          <li>To comply with legal obligations and enforce our terms</li>
        </ul>

        <h2>Legal Basis (GDPR)</h2>
        <p>
          If you are in the European Economic Area or the United Kingdom, we rely on the following
          legal bases under the GDPR:
        </p>
        <ul>
          <li><strong>Legitimate interest</strong> &mdash; for basic analytics and site security</li>
          <li><strong>Consent</strong> &mdash; for advertising cookies and personalised ads, collected through the Google consent dialog</li>
          <li><strong>Contract / legitimate interest</strong> &mdash; to respond when you contact us by email</li>
        </ul>

        <h2>Your Rights</h2>
        <h3>If You Are in the EU/UK (GDPR)</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
          <li>Object to or restrict processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time for cookie-based processing</li>
          <li>Lodge a complaint with your national data-protection authority</li>
        </ul>

        <h3>If You Are in California (CCPA/CPRA)</h3>
        <p>California residents have the right to:</p>
        <ul>
          <li>Know what personal information is collected and how it is used</li>
          <li>Request deletion of personal information</li>
          <li>Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information (we do not sell personal information, but advertising cookies may constitute &ldquo;sharing&rdquo; under the CPRA)</li>
          <li>Non-discrimination for exercising any of the above rights</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <strong>contact@kubomoney.com</strong> with the subject line &ldquo;Privacy Request&rdquo;.
          We respond within 30 days.
        </p>

        <h2>Data Retention</h2>
        <ul>
          <li><strong>Analytics data:</strong> retained by Google Analytics for up to 14 months, then automatically deleted</li>
          <li><strong>Advertising identifiers:</strong> retained according to Google&apos;s AdSense policies</li>
          <li><strong>Email correspondence:</strong> retained for up to 24 months unless a longer period is required (e.g., legal dispute)</li>
          <li><strong>Calculator inputs:</strong> never retained &mdash; they exist only in your browser</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell or rent personal information. We share limited data with the service providers
          that run the site: <strong>Vercel</strong> (hosting), <strong>Google Analytics</strong>{" "}
          (measurement), and <strong>Google AdSense</strong> (advertising). Each processes data under
          its own privacy policy. We may also disclose information if required by law or to protect
          the rights, property, or safety of {siteConfig.name} or others.
        </p>

        <h2>International Transfers</h2>
        <p>
          We are based in Colombia. Your data may be processed in the United States and other
          countries where our service providers operate. Where required, transfers are covered by
          Standard Contractual Clauses or equivalent safeguards.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          {siteConfig.name} is not directed at children under 13 (or under 16 in the EU/UK). We do not
          knowingly collect personal information from children. If you believe a child has provided us
          information, please contact us and we will delete it.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our site links to third parties (affiliate partners, government sites, references). We are
          not responsible for their privacy practices &mdash; please review their policies separately.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes are signposted by updating the
          &ldquo;Last updated&rdquo; date at the top of the page. Continued use of the site after an
          update constitutes acceptance of the revised policy.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy question or request, email{" "}
          <strong>contact@kubomoney.com</strong> with &ldquo;Privacy&rdquo; in the subject line. You
          can also reach us through our <a href="/contact">contact page</a>.
        </p>
      </div>
    </article>
  );
}
