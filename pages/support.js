import MetaHeader from "@/components/meta-header";
import { FooterWhiteTransparent } from "@/components/layout/footer";
export default function Support() {
  return (
    <>
      <MetaHeader title={"Support"} />
      <div className="flex flex-col space-y-5 text-gray-500">
        <div className="font-semibold text-lg text-black">Support Policy</div>
        <div className="text-sm">
          We appreciate your interest in our products/services. Please note that
          we do not provide any support for our products/services.
        </div>
        <div className="text-sm">
          Our products/services are sold as is, and we do not guarantee that
          they will meet your specific requirements. We do not offer any refunds
          or returns for our products/services.
        </div>
        <div className="text-sm">
          We do our best to ensure that our products/services are of high
          quality and are free from defects. However, we do not provide any
          support for installation, customization, or any other technical
          issues.
        </div>
        <div className="text-sm">
          We also do not offer any training or tutorials on how to use our
          products/services. Any documentation or user manuals that may be
          provided are for informational purposes only and do not constitute
          support.
        </div>
        <div className="text-sm">
          We encourage you to carefully review our products/services and make
          sure they meet your needs before purchasing. If you have any questions
          about our products/services, please contact us before making a
          purchase.
        </div>
        <div className="text-sm">
          Thank you for your understanding and continued patronage.
        </div>
      </div>
      <FooterWhiteTransparent />
    </>
  );
}
