"use client";

import Image from "next/image"; // Replace with standard <img> if not using Next.js

export function Footer() {
  return (
    <footer className="w-full bg-white text-slate-800">
      {/* Top Divider Line */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-[2px] w-full bg-[#2f5ebb]" />
      </div>

      {/* Middle Section: Hotline, Social Icons, Accreditation Logos */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">
          
          {/* Column 1: Hotline */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-black text-[#2f5ebb] tracking-wide uppercase">
              HOTLINE
            </span>
            <a
              href="tel:+94112345790"
              className="text-2xl sm:text-3xl font-extrabold text-[#d32f2f] hover:underline mt-1"
            >
              +94 112 345790
            </a>
          </div>

          {/* Column 2: Social Media Icons */}
          <div className="flex items-center justify-center gap-3">
            {/* Email / Mail */}
            <a
              href="mailto:info@americanlloyd.com"
              aria-label="Email Us"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-110"
            >
              ✉
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4267B2] text-white font-bold transition-transform hover:scale-110"
            >
              f
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-white transition-transform hover:scale-110"
            >
              ▶
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white font-bold text-sm transition-transform hover:scale-110"
            >
              in
            </a>
          </div>

          {/* Column 3: Sri Lanka Tourism Board Logo */}
          <div className="flex justify-center items-center">
            <Image
              src="/assets/Amlloyd+-+Tourism+board-1920w.jpg"
              alt="Sri Lanka Tourism Board - A land like no other"
              width={160}
              height={70}
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Column 4: IATA Accredited Agent Logo */}
          <div className="flex justify-center md:justify-end items-center">
            <Image
              src="/assets/Amlloyd-+IATA-1920w.png"
              alt="IATA Accredited Agent"
              width={180}
              height={70}
              className="h-14 w-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* Red Bottom Footer Bar */}
      <div className="w-full bg-[#ee3538] text-white py-4 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center md:text-left text-xs sm:text-sm font-medium">
          
          {/* Left Disclaimer */}
          <p className="text-white/90 leading-tight">
            Your use of our Website, Blog or Services does not constitute any right or license for you to use our content or trademarks, without the prior written permission of American Lloyd Travels Ltd.
          </p>

          {/* Center Copyright */}
          <p className="text-center font-semibold">
            Copyright ©2025 All Rights Reserved <br className="hidden md:inline" />
            American Lloyd Travels Ltd.
          </p>

          {/* Right Accreditation & License Codes */}
          <div className="text-center md:text-right">
            <p className="font-semibold">
              IATA: 07313541 | Civil Aviation: A636
            </p>
            <a
              href="#verify"
              className="text-white hover:underline text-xs opacity-90 inline-block mt-0.5"
            >
              Click here to verify the code.
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}