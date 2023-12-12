const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "RM 50",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc: "/img/selling/50.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "RM 200",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "/img/selling/200.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    price: "RM 500",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "/img/selling/500.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    price: "RM 1,000",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "/img/selling/1000.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    price: "RM 2,000",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "/img/selling/2000.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    price: "RM 5,000",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "/img/selling/5000.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "#",
    price: "RM 10,000",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc: "/img/selling/10000.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

export default function Home() {
  return (
    <div>
      <div className="relative py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Unlock Endless Gaming Adventures"
              />
              <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Unlock Endless</span>
                <span className="block text-indigo-200">Gaming Adventures</span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                Your one-stop shop for quick, secure, and hassle-free game
                credit purchases.
              </p>
              {/*<HeroSectionButton />*/}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
              >
                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      {product.options}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSectionButton() {
  return (
    <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
      <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
        >
          Get started
        </a>
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
        >
          Live demo
        </a>
      </div>
    </div>
  );
}
