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
    <section className="w-full bg-white py-10" id="services">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Card: Company Intro */}
          <div className="flex flex-col justify-between bg-white p-[23px] sm:p-[27px] rounded-sm shadow-sm border border-gray-400">
            <p className="text-[#2f5ebb] text-sm sm:text-base leading-relaxed mb-6">
              American Lloyd Travels Ltd, is a forerunner in fully-fledged BSP
              ticketing, specializing in business & leisure travel with IATA
              accreditation. Established in 1987, we advocate a world-class
              technology to create a place where people are inspired to plan &
              book direct from millions of travel options at the best price…
            </p>

            <div className="flex justify-center pt-1">
              <a
                href="#about"
                className="inline-block bg-[#2f5ebb] hover:bg-[#1e4bb8] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                Click here to learn more
              </a>
            </div>
          </div>

          {/* Right Card: Services Bulleted List */}
          <div className="bg-white p-[23px] sm:p-[27px] rounded-sm shadow-sm border border-gray-400">
            <h2 className="text-xs sm:text-sm font-black text-[#2f5ebb] uppercase tracking-wider mb-3">
              Our services
            </h2>

            <ul className="space-y-1.5 text-[#2f5ebb] text-sm leading-snug">
              {SERVICES_LIST.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 font-bold">•</span>
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