"use client";

import Image from "next/image"; // Replace with standard <img> if not using Next.js

export function Vacation() {
  return (
    <section className="w-full bg-slate-50 py-16" id="vacation">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Main Card Container */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 sm:p-12 lg:p-16 rounded-sm shadow-md border border-gray-100 gap-10">
          
          {/* Left Column: Image Collage Grid */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/imgcollection.png"
                alt="Exotic vacation destinations collection"
                width={500}
                height={400}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column: Promotional Text & CTA */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            
            {/* Sub-header / Eyebrow */}
            <p className="text-sm font-semibold tracking-[0.35em] text-gray-700 uppercase mb-1">
              MAKE YOUR
            </p>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1e4bb8] mb-1">
              VACATION
            </h2>

            {/* Sub-headline */}
            <p className="text-sm font-bold tracking-[0.3em] text-gray-700 uppercase mb-6">
              MEMORABLE
            </p>

            {/* Divider Line */}
            <div className="w-32 h-[1px] bg-gray-300 mb-6" />

            {/* Centered Black Text with line break after "your" */}
            <p className="text-base sm:text-lg text-black mb-8 max-w-md font-normal leading-relaxed text-center">
              Find the exotic vacation of your <br />
              dream today
            </p>

            {/* CTA Button */}
            <a
              href="#packages"
              className="inline-block bg-[#2f5ebb] hover:bg-[#1e4bb8] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
            >
              Click here to learn more
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}