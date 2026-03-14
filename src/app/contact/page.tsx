import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900">Contact Us</h1>
      <div className="article-body">
        <p>Have a question, suggestion, or feedback about {siteConfig.name}? We&apos;d love to hear from you.</p>
        <h2>Get in Touch</h2>
        <p>Email us at: <strong>contact@fincalchub.com</strong></p>
        <h2>Suggest a Calculator</h2>
        <p>Is there a financial calculator you&apos;d like to see? Let us know and we&apos;ll add it to our roadmap.</p>
        <h2>Report an Issue</h2>
        <p>Found a bug or calculation error? Please report it so we can fix it right away. Accuracy is our top priority.</p>
      </div>
    </article>
  );
}
