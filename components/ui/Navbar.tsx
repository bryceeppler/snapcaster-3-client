"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  const currentPath = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = "/logo.png";
  const pages = [
    { name: "Home", href: "/", current: currentPath === "/" },
    {
      name: "Multi-search",
      href: "/multisearch",
      current: currentPath === "/multisearch",
    },
    { name: "About", href: "/about", current: currentPath === "/about" },
  ];
  return (
    <div>
      <nav className="shadow">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="block lg:hidden"
                  src="/favicon.ico"
                  alt="snapcaster"
                  width={32}
                    height={32}
                />
                {}
                <Image
                  className="hidden mb-2 lg:block w-auto"
                  src={logoSrc}
                  alt="snapcaster"
                    width={80}
                    height={32}
                />
              </div>
              <div className="hidden sm:ml-6 sm:block sm:w-full">
                <div className="flex space-x-4 w-full">
                  {pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className={`
 rounded-md py-2 px-3 text-sm font-medium hover:bg-zinc-600 
${page.current && "bg-zinc-800 text-white hover:bg-zinc-600"} 
`}
                    >
                      {page.name}
                    </a>
                  ))}

                  {/* User ? */}
                  <div className="flex-1" />
                  {/* <div
                    className={`
 rounded-md py-2 px-3 text-sm font-medium hover:bg-zinc-600
`}
                  >
                    {user ? (
                      <span
                        onClick={async () => {
                          await supabaseClient.auth.signOut();
                          router.push('/');
                        }}
                      >
                        Sign out
                      </span>
                    ) : (
                      <Link href="/signin">Sign in</Link>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*  mobile menu opens when mobileMenuOpen = true */}
          <div
            className={`${mobileMenuOpen ? "block h-fit" : "hidden"} sm:hidden`}
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {pages.map((page) => (
                <Link
                  href={page.href}
                  as={page.href}
                  key={page.name}
                  className={`
                    block rounded-md py-2 px-3 text-sm font-medium
                    ${page.current && "bg-zinc-600 text-white"} 
                    `}
                >
                  {page.name}
                </Link>
              ))}
              {/* USER STUFF */}
              {/* <div
                    className={`
 rounded-md py-2 px-3 text-sm font-medium hover:bg-zinc-400
`}
                  >
                    {user ? (
                      <span
                        onClick={async () => {
                          await supabaseClient.auth.signOut();
                          router.push('/signin');
                        }}
                      >
                        Sign out
                      </span>
                    ) : (
                      <Link href="/signin">Sign in</Link>
                    )}
                  </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
