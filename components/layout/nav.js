import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "@/lib/wagmi";

export default function Nav() {
  return (
    <nav
      className="flex items-center justify-between px-10 py-8"
      aria-label="Global"
    >
      <div className="flex flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image
            className="h-12 w-auto"
            src="/logo.svg"
            width={100}
            height={100}
            alt="nosell"
          />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12"></div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <LoginButton />
      </div>
    </nav>
  );
}
