import metaheader from "@/components/meta-header";

import { faqs } from "@/app/faq/(constant)/qna";
import FaqEl from "@/app/faq/(components)/faq-el";

export const metadata = metaheader("FAQ");

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl mb-5 font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <div className="overflow-hidden rounded-3xl mb-10">
        <img
          className="h-full w-full object-cover"
          alt={"Support"}
          src={
            "https://images.pexels.com/photos/4389743/pexels-photo-4389743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <FaqEl key={faq.question} faq={faq} />
        ))}
      </dl>
    </div>
  );
}
