import Link from "next/link";

const copyRight = `© ${new Date().getFullYear()} NOSELL.XYZ. All rights reserved.`;

export function FooterWhiteTransparent() {
  return (
    <footer className="bg-transparent py-20 text-center text-sm">
      <div className="flex space-x-2 py-2 justify-center">
        <Link
          className="text-indigo-500 hover:text-indigo-600"
          href={"/policy"}
        >
          Terms
        </Link>
        <span>|</span>
        <Link
          className="text-indigo-500 hover:text-indigo-600"
          href={"/privacy"}
        >
          Privacy
        </Link>
        <span>|</span>
        <Link
          className="text-indigo-500 hover:text-indigo-600"
          href={"/support"}
        >
          Support
        </Link>
      </div>
      <div>{copyRight}</div>
    </footer>
  );
}
