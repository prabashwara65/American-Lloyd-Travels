"use client";

import Image from "next/image";

export function Footer() {
  return (
    /* Changed bg-slate-50 -> bg-white */
    <footer className="w-full bg-white text-slate-800">
      {/* Upper Footer Container */}
      <div className="mx-auto max-w-4xl px-6 sm:px-8 pt-6 pb-0">
        <div className="w-full h-[4px] bg-[#4F71AB] mb-0" />

        <div className="bg-[#FFFFFF] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left">
            {/* Hotline */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg font-black text-[#2f5ebb] tracking-wide uppercase">
                HOTLINE
              </span>
              <a
                href="tel:+94112345790"
                className="text-xl sm:text-2xl font-extrabold text-[#d32f2f] hover:underline mt-1 whitespace-nowrap"
              >
                +94 112 345790
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-2.5">
              <a
                href="mailto:info@americanlloyd.com"
                aria-label="Email Us"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-600 text-white transition-transform hover:scale-110"
              >
                ✉
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4267B2] text-white font-bold transition-transform hover:scale-110"
              >
                f
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white transition-transform hover:scale-110"
              >
                ▶
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white font-bold text-xs transition-transform hover:scale-110"
              >
                in
              </a>
            </div>

            {/* Sri Lanka Tourism Board Logo */}
            <div className="flex justify-center items-center">
              <Image
                src="/assets/Amlloyd+-+Tourism+board-1920w.jpg"
                alt="Sri Lanka Tourism Board"
                width={200}
                height={85}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            {/* IATA Logo */}
            <div className="flex justify-center md:justify-end items-center">
              <Image
                src="/assets/Amlloyd-+IATA-1920w.png"
                alt="IATA Accredited Agent"
                width={220}
                height={85}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Red Bottom Footer Bar */}
      <div className="w-full bg-[#ee3538] text-white py-4 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center md:text-left text-xs sm:text-sm font-medium">
          <p className="text-white/90 leading-tight">
            Your use of our Website, Blog or Services does not constitute any right or license for you to use our content or trademarks, without the prior written permission of American Lloyd Travels Ltd.
          </p>
          <p className="text-center font-semibold">
            Copyright ©2025 All Rights Reserved <br className="hidden md:inline" />
            American Lloyd Travels Ltd.
          </p>
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