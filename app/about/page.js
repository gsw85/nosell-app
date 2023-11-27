import metaheader from "@/components/meta-header";

export const metadata = metaheader("Settings", "Profile Setting");

export default function Page() {
  return (
    <div className="flex flex-col space-y-5 text-gray-500">
      <div className="overflow-hidden rounded-3xl mb-10">
        <img
          className="h-full w-full object-cover"
          alt={"Support"}
          src={
            "https://images.pexels.com/photos/4389743/pexels-photo-4389743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
      <div className="font-semibold text-2xl text-black">About</div>
      <div>
        {`Welcome to nosell.xyz! Our platform is designed to make selling
            anything online easy and accessible to anyone. We believe that
            everyone has something valuable to offer, and we want to help you sell
            it.`}
      </div>

      <div>
        {`Our platform is free to use, which means that anyone can sign up and
            start selling right away. No hidden fees, no complicated pricing
            models, and no limit to what you can sell. Whether you're selling a
            product, a service, or even an idea, nosell.xyz is the perfect place
            to get started.`}
      </div>
      <div>
        {`But if you want to take your selling to the next level, we also offer
            a range of premium features to help you grow your business. Our
            premium plans include advanced analytics, more file storage space,
            team collaboration, and other benefits that can help you sell more and
            scale faster.`}
      </div>

      <div>
        {`At nosell.xyz, we're committed to making selling easy, affordable, and
            accessible to everyone. We believe that the world is full of amazing
            creators and entrepreneurs, and we want to empower them to share their
            products and ideas with the world.`}
      </div>
      <div>
        {`So what are you waiting for? Start selling on nosell.xyz today!`}
      </div>
    </div>
  );
}
