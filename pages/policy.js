import MetaHeader from "@/components/meta-header";

export default function Policy() {
  return (
    <>
      <MetaHeader title={"Policy"} />
      <div className="flex flex-col space-y-5 text-gray-500">
        <div className="font-semibold text-lg text-black">Refund / Return</div>
        <div className="text-sm">
          Thank you for purchasing our digital product. We hope you are
          satisfied with your purchase, but please be aware that we do not offer
          any returns or refunds for digital products.
        </div>
        <div className="text-sm">
          All sales of digital products are final. Once you have completed your
          purchase and received the digital product, you cannot return or
          exchange it for any reason. We do not provide refunds for any digital
          products.
        </div>
        <div className="text-sm">
          We take pride in offering high-quality digital products. If, however,
          you experience any technical difficulties with the product, please
          contact us within 7 days of purchase, and we will do our best to
          assist you.
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
      </div>
    </>
  );
}
