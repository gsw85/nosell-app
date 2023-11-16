import MetaHeader from "@/components/meta-header";
import { FooterWhiteTransparent } from "@/components/layout/footer";

export default function Page() {
  return (
    <>
      <MetaHeader title={"About"} />
      <div className="flex flex-col space-y-2 text-gray-500">
        <div className="font-semibold text-lg text-black">About</div>
        <div className="text-sm">
          Welcome to nosell.xyz! Our platform is designed to make selling
          anything online easy and accessible to anyone. We believe that
          everyone has something valuable to offer, and we want to help you sell
          it.
        </div>

        <div className="text-sm">
          Our platform is free to use, which means that anyone can sign up and
          start selling right away. No hidden fees, no complicated pricing
          models, and no limit to what you can sell. Whether you're selling a
          product, a service, or even an idea, nosell.xyz is the perfect place
          to get started.
        </div>
        <div className="text-sm">
          But if you want to take your selling to the next level, we also offer
          a range of premium features to help you grow your business. Our
          premium plans include advanced analytics, more file storage space,
          team collaboration, and other benefits that can help you sell more and
          scale faster.
        </div>

        <div className="text-sm">
          At nosell.xyz, we're committed to making selling easy, affordable, and
          accessible to everyone. We believe that the world is full of amazing
          creators and entrepreneurs, and we want to empower them to share their
          products and ideas with the world.{" "}
        </div>
        <div className="text-sm">
          So what are you waiting for? Start selling on nosell.xyz today!
        </div>
      </div>
      <FooterWhiteTransparent />
    </>
  );
}
