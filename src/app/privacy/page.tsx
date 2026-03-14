import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p><em>Last updated: March 2026</em></p>
        <h2>Information We Collect</h2>
        <p>{siteConfig.name} does not require user registration. We do not collect personal information through our calculators. All calculations are performed in your browser and no financial data is stored on our servers.</p>
        <h2>Analytics</h2>
        <p>We use Google Analytics to understand how visitors use our site. This collects anonymous data such as pages visited, time on site, and general geographic location. No personally identifiable information is collected.</p>
        <h2>Advertising</h2>
        <p>We display advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
        <h2>Cookies</h2>
        <p>This site uses cookies for analytics and advertising purposes. By using this site, you consent to the use of cookies.</p>
        <h2>Third-Party Links</h2>
        <p>Our site may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
        <h2>Contact</h2>
        <p>If you have questions about this privacy policy, please <a href="/contact">contact us</a>.</p>
      </div>
    </article>
  );
}
