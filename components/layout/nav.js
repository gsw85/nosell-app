import Image from "next/image";
import Link from "next/link";
import { LoginButton } from "@/lib/wagmi";
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/store/user";

export default function Nav() {
  const { isConnected, address } = useAccount();
  const userData = useCurrentUser();

  useEffect(() => {
    isConnected ? userData.setUser(address) : userData.setUserClear();
  }, [isConnected]);

  return (
    <nav
      className="flex items-center justify-between px-10 py-8 mb-24"
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

      <div className="flex flex-col">
        <div className="ml-auto">
          <LoginButton />
        </div>
        {userData.walletAddress ? (
          <Link
            href="/dashboard"
            className="text-sm text-gray-500 mt-3 ml-auto mr-1 hover:text-indigo-500"
          >
            Check my listings
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
