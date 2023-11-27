import Link from "next/link";

const copyRight = `© ${new Date().getFullYear()} nosell.xyz. All rights reserved.`;

const footerNav = [
  { name: "About", href: "/about" },
  { name: "Terms", href: "/policy" },
  { name: "Privacy", href: "/privacy" },
  { name: "Support", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-12 lg:px-8">
        <div className="border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between text-sm">
          <div className="flex space-x-6 md:order-2">
            {footerNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <div>{item.name}</div>
              </Link>
            ))}
          </div>
          <p className="mt-8 leading-5 text-gray-500 md:order-1 md:mt-0">
            {copyRight}
          </p>
        </div>
      </div>
    </footer>
  );
}
