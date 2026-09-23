"use client";

export function VisaHandling() {
  return (
    <section className="w-full bg-slate-50 py-12" id="visa">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        {/* White Card Container */}
        <div className="flex flex-col items-center justify-center bg-white p-8 sm:p-12 rounded-sm shadow-md border border-gray-100 text-center">
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2f5ebb] mb-4 uppercase">
            Visa Handling
          </h2>

          {/* Description Text */}
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
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