import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "@/lib/wagmi";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useCurrentUser } from "@/store/user";

export default function Nav() {
  const { isConnected, address } = useAccount();
  const userData = useCurrentUser();

  useEffect(() => {
    isConnected ? userData.setUser(address) : userData.setUserClear();
  }, [isConnected]);

  return (
    <nav
      className="flex justify-between px-4 py-8 mb-24 xl:px-0 max-w-5xl mx-auto"
      aria-label="Global"
    >
      <div className="flex flex-1">
        <Link href="/" className="mt-1">
          <Image
            priority
            className="h-12 w-auto hidden sm:block"
            src="/logo.png"
            width={714}
            height={200}
            alt="nosell"
          />
          <Image
            priority
            className="h-12 w-auto sm:hidden"
            src="/icon.png"
            width={200}
            height={200}
            alt="nosell"
          />
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="ml-auto">
          <LoginButton />
        </div>
        {userData.walletAddress ? (
          <Link
            href="/dashboard"
            className="text-sm text-indigo-500 mt-3 ml-auto mr-1 hover:text-indigo-600 font-semibold mr-2"
          >
            Dashboard
          </Link>
        ) : (
          <div className="text-xs text-gray-500 mt-2 italic">
            Connect to track your listings
          </div>
        )}
      </div>
    </nav>
  );
}
