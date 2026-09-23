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
    <section className="w-full bg-slate-50 py-16" id="services">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Company Intro */}
          <div className="flex flex-col justify-between bg-white p-8 sm:p-10 rounded-sm shadow-md border border-gray-100">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              American Lloyd Travels Ltd, is a forerunner in fully-fledged BSP
              ticketing, specializing in business & leisure travel with IATA
              accreditation. Established in 1987, we advocate a world-class
              technology to create a place where people are inspired to plan &
              book direct from millions of travel options at the best price…
            </p>

            <div className="flex justify-center pt-2">
              <a
                href="#about"
                className="inline-block bg-[#2f5ebb] hover:bg-[#1e4bb8] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
              >
                Click here to learn more
              </a>
            </div>
          </div>

          {/* Right Card: Services Bulleted List */}
          <div className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-gray-400">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2f5ebb] mb-6">
              Our services
            </h2>

            <ul className="space-y-2.5 text-gray-600 text-base sm:text-[17px] leading-snug">
              {SERVICES_LIST.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-gray-500 font-bold">•</span>
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