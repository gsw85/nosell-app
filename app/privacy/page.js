import metaheader from "@/components/meta-header";

export const metadata = metaheader("Privacy");

export default function Page() {
  return (
    <div className="flex flex-col space-y-5 text-gray-500">
      <div className="font-semibold text-2xl text-black">Privacy Policy</div>
      <div>
        We take your privacy very seriously. This Privacy Policy explains how we
        collect, use, and protect any non-personal information we may collect
        when you use our website or services.
      </div>
      <div className="font-semibold text-lg text-black pt-5">
        Information We Collect
      </div>
      <div>
        We may collect non-personal information, such as your IP address and
        browser type, for the purposes of analytics and improving our website
        and services.
      </div>
      <div className="font-semibold text-lg text-black pt-5">
        Use of Your Information
      </div>
      <div>
        We use the non-personal information we collect to provide our services
        and to improve our website and services.
      </div>
      <div className="font-semibold text-lg text-black pt-5">
        Protection of Your Information
      </div>
      <div>
        We take the protection of your information very seriously. We use
        industry-standard security measures to protect your information from
        unauthorized access, disclosure, alteration, or destruction.
      </div>
      <div>
        However, no method of transmission over the internet or electronic
        storage is completely secure, so we cannot guarantee the absolute
        security of your information.
      </div>
      <div className="font-semibold text-lg text-black pt-5">
        Changes to Our Privacy Policy
      </div>
      <div>
        We reserve the right to modify this Privacy Policy at any time, so
        please review it frequently. If we make any material changes to this
        Privacy Policy, we will notify you by posting a notice on our website.
      </div>
    </div>
  );
}
