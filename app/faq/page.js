import metaheader from "@/components/meta-header";

import { faqs } from "@/app/faq/(constant)/qna";
import FaqEl from "@/app/faq/(components)/faq-el";

export const metadata = metaheader("FAQ");

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <FaqEl key={faq.question} faq={faq} />
        ))}
      </dl>
    </div>
  );
}
