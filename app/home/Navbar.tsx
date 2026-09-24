"use client";

import { useState } from "react";
import Image from "next/image"; // Replace with standard <img> if not using Next.js
import { navigationLinks } from "../data/home";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 z-50 w-full border-b border-gray-100 pb-[8px] bg-[#f2efef]">
      {/* Navbar Content Area */}
      <div className="bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15),0_2px_4px_-2px_rgba(0,0,0,0.1)] relative z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-[14.5px]">
          
          {/* Logo - Height expanded to 69px (+2px) */}
          <div className="flex items-center shrink-0">
            <a href="#top" className="flex items-center" aria-label="American Lloyd Travels home">
              <Image
                src="/assets/logo.webp"
                alt="American Lloyd Travels Limited"
                width={280}
                height={85}
                priority
                className="h-[69px] w-auto object-contain transition-all"
              />
            </a>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex grow items-center justify-center">
            <nav
              aria-label="Main navigation"
              className={`flex-col md:flex-row items-center justify-center gap-5 lg:gap-7 ${
                isOpen
                  ? "flex absolute top-full left-0 w-full bg-white p-6 shadow-md md:static md:p-0 md:shadow-none"
                  : "hidden md:flex"
              }`}
            >
              {navigationLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative flex items-center gap-1 py-1 text-[15px] font-bold transition-colors ${
                    index === 0
                      ? "text-[#1e4bb8] after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:rounded-full after:bg-[#1e4bb8]"
                      : "text-[#1e4bb8] hover:text-[#123386]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {link.hasChevron && (
                    <svg
                      className="h-3 w-3 stroke-[2.5]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
              className="p-2 text-2xl font-bold text-[#1e4bb8] md:hidden ml-auto"
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