"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  // State for toggling Vision and Mission sections
  const [isVisionOpen, setIsVisionOpen] = useState(true);
  const [isMissionOpen, setIsMissionOpen] = useState(true);

  return (
    <main className="w-full flex-grow bg-white text-slate-700">
      {/* 1. Hero Cover Image Section */}
      <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
        <Image
          src="/assets/img8.jpeg"
          alt="American Lloyd Travels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:px-16">
        {/* Header Bar */}
        <div className="mb-8 bg-slate-100 py-4 px-6 rounded-sm">
          <h1 className="text-3xl font-bold uppercase tracking-wider text-[#35487a]">
            ABOUT US
          </h1>
        </div>

        {/* Intro Body Text */}
        <div className="space-y-4 text-sm leading-relaxed text-slate-500 mb-12">
          <p>
            American Lloyd Travels is a forerunner in fully fledged BSP ticketing, specializing in business and Leisure travel with IATA accreditation. Established in 1987, we advocate world-class technology to create a place where people are inspired to plan and book direct from millions of travel options at the best prices.
          </p>
          <p>
            Supported by a well diversified group of companies namely, Colombo Fort Land and Building PLC which is listed in the Colombo Stock Exchange (CSE), we portray a fortress of experience with a resolute reputation of excellent customer service, bound by utmost professionalism and service efficiency.
          </p>
        </div>

        {/* Vision & Mission Accordion Sections */}
        <div className="space-y-8 mb-20">
          {/* Our Vision */}
          <div>
            <div 
              onClick={() => setIsVisionOpen(!isVisionOpen)}
              className="flex items-center justify-between bg-slate-100 py-4 px-6 rounded-sm cursor-pointer select-none mb-4 transition-colors hover:bg-slate-200"
            >
              <h2 className="text-2xl font-bold text-black">Our Vision</h2>
              <button 
                type="button" 
                aria-label="Toggle Vision"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white focus:outline-none"
              >
                <svg 
                  className={`h-4 w-4 fill-current transition-transform duration-300 ${
                    isVisionOpen ? "rotate-0" : "rotate-180"
                  }`} 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {isVisionOpen && (
              <p className="px-6 text-sm text-slate-500 italic transition-all duration-300">
                &quot;To be the best one stop solution provider for all your travel needs.&quot;
              </p>
            )}
          </div>

          {/* Our Mission */}
          <div>
            <div 
              onClick={() => setIsMissionOpen(!isMissionOpen)}
              className="flex items-center justify-between bg-slate-100 py-4 px-6 rounded-sm cursor-pointer select-none mb-4 transition-colors hover:bg-slate-200"
            >
              <h2 className="text-2xl font-bold text-black">Our Mission</h2>
              <button 
                type="button" 
                aria-label="Toggle Mission"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white focus:outline-none"
              >
                <svg 
                  className={`h-4 w-4 fill-current transition-transform duration-300 ${
                    isMissionOpen ? "rotate-0" : "rotate-180"
                  }`} 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            {isMissionOpen && (
              <p className="px-6 text-sm text-slate-500 italic transition-all duration-300">
                &quot;To provide a differentiated travel experience to exceed expectations of our travellers and clients through our utmost professionalism, cutting edge technology, flexibility and unparalleled knowledge.&quot;
              </p>
            )}
          </div>
        </div>

        {/* 2. Our Secret & Core Values Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-stretch pl-0 mb-20">
          {/* Left Side: Airplane Image */}
          <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-sm pl-0">
            <Image
              src="/assets/about-us/plane.png"
              alt="Airplane landing on runway"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-8 text-xs leading-relaxed text-slate-500 sm:text-sm">
            {/* Our Secret */}
            <div>
              <h2 className="text-2xl font-bold text-[#35487a] mb-3">
                Our Secret
              </h2>
              <div className="space-y-3">
                <p>
                  Our strength lies in direct industry connections that allow us to provide comprehensive travel options directly to our clients. We work to simplify complex travel logistics for thousands of passengers every year with personalized attention and dedicated support.
                </p>
                <p>
                  By pairing competitive pricing with convenient travel schedules, we build tailored shopping platforms to ensure seamless itineraries for both business and leisure journeys from start to finish.
                </p>
              </div>
            </div>

            {/* Our Core Values */}
            <div>
              <h2 className="text-2xl font-bold text-[#35487a] mb-4">
                Our Core Values
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-[#35487a]">Innovation</h3>
                  <p className="mt-0.5">
                    We consistently seek creative methods to enhance modern travel and leisure solutions.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#35487a]">Service Excellence</h3>
                  <p className="mt-0.5">
                    We pair modern digital tools with dedicated personal assistance to deliver high-quality client care.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#35487a]">Integrity</h3>
                  <p className="mt-0.5">
                    We maintain full transparency, honesty, and open communication in every booking and consultation.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#35487a]">Teamwork</h3>
                  <p className="mt-0.5">
                    We collaborate closely with our partners, agents, and clients to achieve effective results.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#35487a]">Quality</h3>
                  <p className="mt-0.5">
                    We follow attentive quality processes to provide accurate, reliable travel guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Our Team Section */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold text-[#35487a] mb-6">
            Our Team
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 mb-16 max-w-4xl">
            With a renowned reputation for personal service, our dedicated team of customer friendly staff at all times works seamlessly to provide professional customer oriented consultation for hassle-free travel. We embody a creative but persistent approach to search for the most appropriate travel arrangements, identifying the best possible value, through a comprehensive database built by being in existence of over two decades in the travel industry. Our travel consultants are friendly, professional and experienced in accommodating both the seasoned travelers and those new to the world of travel. We pride ourselves in customer satisfaction. A large percentage of our bookings are from repeat clientèle while much of our new business is from word of mouth recommendations.
          </p>

          {/* Three Column Feature Cards */}
          <div className="grid gap-10 md:grid-cols-3 text-center px-4">
            {/* Excellence */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-slate-700">
                <svg className="h-12 w-12 stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-2 5l-2-1l1-4m3 0l2 5l2-1l-1-4M8 4h8v4a4 4 0 01-8 0V4zM5 6h3v2H5V6zm11 0h3v2h-3V6z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#35487a] mb-2">Excellence</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                One of the highest rated Travel Advisory Service providers in Sri Lanka.
              </p>
            </div>

            {/* Knowledge */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-slate-700">
                <svg className="h-12 w-12 stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#35487a] mb-2">Knowledge</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Well over three decades of experience in the industry
              </p>
            </div>

            {/* Dedicated */}
            <div className="flex flex-col items-center">
              <div className="mb-4 text-slate-700">
                <svg className="h-12 w-12 stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#35487a] mb-2">Dedicated</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Dedicated staff to provide 24/7 support for all your travel needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}