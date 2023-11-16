import { FooterWhiteTransparent } from "@/components/layout/footer";
import metaheader from "@/components/meta-header";

export const metadata = metaheader("Policy");

export default function Page() {
  return (
    <>
      <div className="flex flex-col space-y-3 text-gray-500">
        <div className="font-semibold text-lg text-black">Refund / Return</div>
        <div className="text-sm">
          Thank you for purchasing digital product listed in nosell. We hope you
          are satisfied with your purchase, but please be aware that as
          nosell.xyz, we do not offer any returns or refunds for digital
          products.
        </div>
        <div className="text-sm">
          All sales of digital products are final. Once you have completed your
          purchase and received the digital product, you cannot return or
          exchange it for any reason. We do not provide refunds for any digital
          products.
        </div>
        <div className="text-sm">
          We reserve the right to refuse any returns or refunds at our
          discretion. Please note that this policy applies to all digital
          product purchases made on our website, via email, or any other means
          of purchase.
        </div>
        <div className="text-sm">
          Thank you for your understanding and continued patronage.
        </div>

        <div className="font-semibold text-lg text-black pt-5">
          Seller Policy
        </div>
        <div className="text-sm">
          Thank you for choosing to sell your products/services on nosell.xyz.
          This policy outlines the terms and conditions for selling on our
          platform.
        </div>
        <div className="text-sm">
          As a seller on nosell.xyz, you agree to pay us a commission of 10% on
          the total amount of each sale you make on our platform. This
          commission covers the costs associated with operating and maintaining
          our platform.
        </div>
        <div className="text-sm">
          You are responsible for setting the price of your products/services on
          our platform. However, you must ensure that your prices are
          competitive and in line with industry standards. You must also take
          into account our commission when setting your prices.
        </div>
        <div className="text-sm">
          You are responsible for creating and managing your product/service
          listings on our platform. You must ensure that your listings are
          accurate, complete, and comply with our terms of service. You must
          also ensure that your listings do not infringe on the intellectual
          property rights of others.
        </div>
        <div className="text-sm">
          You are responsible for handling refunds and returns for your
          products/services. You must ensure that your refund and return
          policies are clear and comply with our terms of service.
        </div>
      </div>
      <FooterWhiteTransparent />
    </>
  );
}
