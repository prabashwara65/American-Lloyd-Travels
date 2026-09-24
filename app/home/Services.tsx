"use client";

const SERVICES_LIST = [
  "International Airline reservations and ticketing",
  "All-inclusive and customized tour packages",
  "Worldwide hotel reservation",
  "World-wide car rental",
  "Worldwide rail passes",
  "Visa assistance and other ground handling services",
  "Cruises world wide",
  "Travel Insurance",
  "Foreign currency issuing and exchange assistance",
];

export function Services() {
  return (
    <section className="w-full bg-white py-8" id="services">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* Left Card: Company Intro (3px taller with tight inner padding) */}
          <div className="flex flex-col justify-between bg-white p-4 sm:p-5 rounded-none border-none shadow-[0_8px_20px_rgba(0,0,0,0.15)] min-h-[293px] w-full">
            <p className="text-[#2f5ebb] text-sm sm:text-base leading-snug mb-3">
              American Lloyd Travels Ltd, is a forerunner in fully-fledged BSP
              ticketing, specializing in business & leisure travel with IATA
              accreditation. Established in 1987, we advocate a world-class
              technology to create a place where people are inspired to plan &
              book direct from millions of travel options at the best price…
            </p>

            <div className="flex justify-center pt-2">
              <a
                href="#about"
                className="inline-block bg-[#2f5ebb] hover:bg-[#1e4bb8] text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors duration-200 shadow-sm"
              >
                Click here to learn more
              </a>
            </div>
          </div>

          {/* Right Card: Services Bulleted List (Tight inner padding, black border) */}
          <div className="bg-white p-4 sm:p-5 rounded-none border border-black shadow-sm max-w-[410px] w-full justify-self-start min-h-[290px]">
            <h2 className="text-xs sm:text-sm font-black text-[#2f5ebb] uppercase tracking-wider mb-2">
              Our services
            </h2>

            <ul className="space-y-1 text-[#2f5ebb] text-sm leading-tight">
              {SERVICES_LIST.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-1.5 font-bold">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}