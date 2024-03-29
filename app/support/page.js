import metaheader from "@/components/meta-header";
import { contactLink } from "@/constant/contact";

export const metadata = metaheader("Support");

export default function Page() {
  return (
    <div className="flex flex-col space-y-5 text-gray-500">
      <div className="overflow-hidden rounded-3xl mb-10">
        <img
          className="h-full w-full object-cover"
          alt={"Support"}
          src={
            "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg"
          }
        />
      </div>
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
      <div>
        Thank you for your understanding and continued patronage. If you have
        any other question, please feel free to{" "}
        <a
          className="text-indigo-500 hover:text-indigo-600"
          target={"_blank"}
          href={contactLink}
        >
          drop us a message
        </a>
      </div>
    </div>
  );
}
