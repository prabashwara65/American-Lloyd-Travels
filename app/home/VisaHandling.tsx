"use client";

export function VisaHandling() {
  return (
    /* Changed bg-slate-50 -> bg-white */
    <section className="w-full bg-white py-12" id="visa">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* White Card Container */}
        <div className="flex flex-col items-center justify-center bg-white p-8 sm:p-12 rounded-sm shadow-md border border-gray-100 text-center">
          {/* Main Title */}
          <h2 className="text-[#41577D] text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4 uppercase">
            Visa Handling
          </h2>

          {/* Description Text */}
          <p className="text-[#41577D] text-base sm:text-lg font-light max-w-2xl mb-8 leading-relaxed">
            Getting the visas done can be the most troublesome task when it comes to traveling, that is why our professional and friendly staff are just here for you.
          </p>

          {/* CTA Button */}
          <a
            href="#visa-info"
            className="inline-block bg-[#2f5ebb] hover:bg-[#1e4bb8] text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
          >
            Click here to learn more
          </a>
        </div>
      </div>
    </section>
  );
}