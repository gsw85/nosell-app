import metaheader from "@/components/meta-header";

export const metadata = metaheader("Support");

export default function Page() {
  return (
    <div className="flex flex-col space-y-5 text-gray-500">
      <div className="font-semibold text-2xl text-black">Support Policy</div>
      <div>
        We appreciate your interest in our products/services. Please note that
        we do not provide any support for our products/services.
      </div>
      <div>
        Our products/services are sold as is, and we do not guarantee that they
        will meet your specific requirements. We do not offer any refunds or
        returns for our products/services.
      </div>
      <div>
        We do our best to ensure that our products/services are of high quality
        and are free from defects. However, we do not provide any support for
        installation, customization, or any other technical issues.
      </div>
      <div>
        We also do not offer any training or tutorials on how to use our
        products/services. Any documentation or user manuals that may be
        provided are for informational purposes only and do not constitute
        support.
      </div>
      <div>
        We encourage you to carefully review our products/services and make sure
        they meet your needs before purchasing. If you have any questions about
        our products/services, please contact us before making a purchase.
      </div>
      <div>Thank you for your understanding and continued patronage.</div>
    </div>
  );
}
