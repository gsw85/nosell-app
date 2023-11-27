import metaheader from "@/components/meta-header";

export const metadata = metaheader("Policy");

export default function Page() {
  return (
    <div className="flex flex-col space-y-5 text-gray-500">
      <div className="overflow-hidden rounded-3xl mb-10">
        <img
          className="h-full w-full object-cover"
          alt={"Support"}
          src={
            "https://images.pexels.com/photos/7821937/pexels-photo-7821937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
      <div className="font-semibold text-2xl text-black">Refund / Return</div>
      <div>
        We do not offer any returns or refunds for digital products. All sales
        of digital products are final. Once you have completed your purchase and
        received the digital product, you cannot return or exchange it for any
        reason. We do not provide refunds for any digital products.
      </div>
      <div>
        We reserve the right to refuse any returns or refunds at our discretion.
        Please note that this policy applies to all digital product purchases
        made on our website, via email, or any other means of purchase.
      </div>
      <div>Thank you for your understanding and continued patronage.</div>

      <div className="font-semibold text-2xl text-black pt-5">
        Seller Policy
      </div>
      <div>
        As a seller on nosell.xyz, you agree to pay us a commission of 30% on
        the total amount of each sale you make on our platform. This commission
        covers the costs associated with operating and maintaining our platform.
      </div>
      <div>
        You are responsible for setting the price of your products/services on
        our platform. However, you must ensure that your prices are competitive
        and in line with industry standards. You must also take into account our
        commission when setting your prices.
      </div>
      <div>
        You are responsible for creating and managing your product/service
        listings on our platform. You must ensure that your listings are
        accurate, complete, and comply with our terms of service. You must also
        ensure that your listings do not infringe on the intellectual property
        rights of others.
      </div>
      <div>
        You are responsible for handling refunds and returns for your
        products/services. You must ensure that your refund and return policies
        are clear and comply with our terms of service.
      </div>
    </div>
  );
}
