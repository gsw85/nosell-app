"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function FaqEl({ faq }) {
  return (
    <Disclosure as="div" className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                {faq.question}
              </span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
