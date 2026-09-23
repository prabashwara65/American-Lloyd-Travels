"use client";

import { useState } from "react";
import Image from "next/image"; // Replace with standard <img> if not using Next.js
import { navigationLinks } from "../data/home";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      {/* Reduced max-width (max-w-4xl / max-w-5xl) and added deep side padding to pull logo and links inward toward center */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-12 sm:px-16 lg:px-24 py-4">
        
        {/* Logo - Indented from Left toward center */}
        <div className="flex items-center">
          <a href="#top" className="flex items-center" aria-label="American Lloyd Travels home">
            <Image
              src="/assets/logo.webp"
              alt="American Lloyd Travels Limited"
              width={280}
              height={80}
              priority
              className="h-16 w-auto object-contain transition-all"
            />
          </a>
        </div>

        {/* Navigation Links - Indented from Right toward center */}
        <div className="flex items-center justify-end">
          <nav
            aria-label="Main navigation"
            className={`flex-col md:flex-row items-center gap-6 lg:gap-8 ${
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
            className="p-2 text-2xl font-bold text-[#1e4bb8] md:hidden ml-4"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
}