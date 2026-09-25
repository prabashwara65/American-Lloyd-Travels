"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "../data/home";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-[#f2efef] pb-[8px]">
      {/* Navbar Content Area */}
      <div className="relative z-10 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-[14.5px] sm:px-6">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center" aria-label="American Lloyd Travels home">
              <Image
                src="/assets/logo.webp"
                alt="American Lloyd Travels Limited"
                width={280}
                height={85}
                priority
                className="h-[69px] w-auto object-contain transition-all"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex grow items-center justify-center">
            <nav
              aria-label="Main navigation"
              className={`flex-col items-center justify-center gap-6 md:flex-row lg:gap-9 ${
                isOpen
                  ? "absolute left-0 top-full flex w-full bg-white p-6 shadow-md md:static md:p-0 md:shadow-none"
                  : "hidden md:flex"
              }`}
            >
              {navigationLinks.map((link) => {
                const isActive = link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <div
                    className="group relative w-full md:w-auto"
                    key={link.label}
                    onMouseEnter={() => link.children && setIsPackagesOpen(true)}
                    onMouseLeave={() => link.children && setIsPackagesOpen(false)}
                  >
                    <div className="flex items-center justify-center">
                      <Link
                        href={link.href}
                        className={`relative flex items-center gap-1 py-1 text-[15px] font-bold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:rounded-full after:bg-[#1e4bb8] after:transition-opacity after:duration-200 ${
                          isActive
                            ? "text-[#1e4bb8] after:opacity-100"
                            : "text-[#1e4bb8] after:opacity-0 hover:text-[#123386] hover:after:opacity-100"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {link.hasChevron && (
                        <button
                          type="button"
                          aria-label="Toggle Packages menu"
                          aria-expanded={isPackagesOpen}
                          className="ml-1 p-1 text-[#1e4bb8]"
                          onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                        >
                          <svg
                            className={`h-3 w-3 stroke-[2.5] transition-transform duration-200 ease-out ${isPackagesOpen ? "rotate-180" : ""}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {link.children && (
                      <div className={`absolute left-1/2 top-full z-50 flex w-full -translate-x-1/2 flex-col border-t-2 border-[#2f5ebb] bg-white text-center shadow-lg transition-all duration-200 ease-out ${isPackagesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-4 py-3 text-sm font-semibold text-[#1e4bb8] transition-colors duration-200 hover:bg-[#2f5ebb] hover:text-white"
                            onClick={() => {
                              setIsOpen(false);
                              setIsPackagesOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
              className="ml-auto p-2 text-2xl font-bold text-[#1e4bb8] md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}