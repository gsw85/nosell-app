"use client";

import { PlusIcon, UserIcon } from "@heroicons/react/20/solid";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { user, userNavigation } from "@/components/layout/nav/constant/menu";
import { Fragment } from "react";
import Link from "next/link";
import { useCurrentUser } from "@/store/user";

export function DesktopLoginButton() {
  const userData = useCurrentUser();

  const LoginButton = () => (
    <div className="flex items-center">
      <Link
        href={"/auth"}
        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        <UserIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Login
      </Link>
    </div>
  );

  return userData.userID ? <DesktopAfterLogin /> : <LoginButton />;
}

function DesktopAfterLogin() {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <button
          type="button"
          className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
          Create Listing
        </button>
      </div>
      <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      href={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export function MobileLoginButton() {
  const userData = useCurrentUser();

  return userData.userID ? <MobileAfterLogin /> : <></>;
}

function MobileAfterLogin() {
  return (
    <div className="border-t border-gray-700 pb-3 pt-4">
      <div className="flex items-center px-5 sm:px-6">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">{user.name}</div>
          <div className="text-sm font-medium text-gray-400">{user.email}</div>
        </div>
      </div>
      <div className="mt-3 space-y-1 px-2 sm:px-3">
        {userNavigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </div>
  );
}
