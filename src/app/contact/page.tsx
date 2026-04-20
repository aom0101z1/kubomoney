import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${siteConfig.name} team. Send us feedback, suggest a calculator, or report an issue. We reply within 48 hours.`,
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h1>
      <p className="mb-8 text-lg text-gray-600">
        Have a question, suggestion, or feedback about {siteConfig.name}? We&apos;d love to hear from you.
        We typically reply within 48 hours on weekdays.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
          <h2 className="!mt-0 mb-2 text-lg font-bold text-gray-900">General Enquiries</h2>
          <p className="mb-2 text-sm text-gray-700">For feedback, partnerships, press, and everything else.</p>
          <p className="font-mono text-sm font-semibold text-teal-800">contact@kubomoney.com</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="!mt-0 mb-2 text-lg font-bold text-gray-900">Report an Issue</h2>
          <p className="mb-2 text-sm text-gray-700">Found a calculation bug or outdated data? Please let us know.</p>
          <p className="font-mono text-sm font-semibold text-teal-800">support@kubomoney.com</p>
        </div>
      </div>

      <div className="article-body">
        <h2>Who You&apos;re Writing To</h2>
        <p>
          Emails are read by <strong>Alexander O.M.</strong> and <strong>Vanessa O.G.</strong>, the two
          founders and editors of {siteConfig.name}. Every message gets a personal reply &mdash; no
          autoresponders, no ticketing queue.
        </p>

        <h2>Suggest a Calculator or Guide</h2>
        <p>
          Is there a financial calculator, tax topic, or business-formation guide you&apos;d like to see
          on the site? We keep a public roadmap and prioritise requests that come directly from readers.
          Send the topic to <strong>contact@kubomoney.com</strong> with &quot;Suggestion:&quot; in the subject line.
        </p>

        <h2>Report a Calculation Error</h2>
        <p>
          Accuracy is our top priority. If a formula or data point looks wrong, email{" "}
          <strong>support@kubomoney.com</strong> with the page URL, the inputs you used, and what you
          expected to see. We verify against the underlying formula and push a correction usually the
          same week.
        </p>

        <h2>Editorial Corrections &amp; Data Updates</h2>
        <p>
          Tax rates, minimum wages, and LLC filing fees change every year. If you spot an outdated
          figure &mdash; particularly on a state- or city-specific page &mdash; please send the URL and
          the correct value with a source link. We update data files directly and redeploy within 24
          hours.
        </p>

        <h2>Business Address</h2>
        <p>
          {siteConfig.name} is operated by Alexander O.M. and Vanessa O.G., based in Pereira, Colombia.
          For postal correspondence, please email first so we can share the appropriate mailing address.
        </p>

        <h2>Response Time</h2>
        <p>
          We aim to respond to every email within 48 hours Monday through Friday. Urgent issues (broken
          pages, security reports) are usually acknowledged the same day.
        </p>
      </div>
    </article>
  );
}
