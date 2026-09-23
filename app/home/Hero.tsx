"use client";

import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/assets/img1.jpeg",
  "/assets/img2.jpeg",
  "/assets/img3.jpeg",
  "/assets/img4.jpeg",
  "/assets/img5.jpeg",
  "/assets/img6.jpeg",
  "/assets/img7.jpeg",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider with 5-second interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HERO_IMAGES.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="group relative flex flex-col w-full bg-white overflow-hidden"
      aria-label="Travel destinations slideshow"
    >
      {/* Slideshow Container */}
      <div className="relative min-h-[75vh] w-full overflow-hidden bg-slate-900">
        {/* Background Images */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Travel destination ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Backward Arrow Button (No Padding, Hover Visible) */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 z-30 -translate-y-1/2 p-0 text-white opacity-0 transition-opacity duration-300 hover:text-blue-200 group-hover:opacity-100 focus:opacity-100"
        >
          <svg
            className="h-10 w-10 stroke-2 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Forward Arrow Button (No Padding, Hover Visible) */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 z-30 -translate-y-1/2 p-0 text-white opacity-0 transition-opacity duration-300 hover:text-blue-200 group-hover:opacity-100 focus:opacity-100"
        >
          <svg
            className="h-10 w-10 stroke-2 drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hero Tail / Tagline Banner */}
      <div className="w-full bg-white border-b border-gray-200 py-6 text-center shadow-inner">
        <p className="text-2xl sm:text-3xl lg:text-4xl text-[#1e4bb8] tracking-wide">
          <span className="font-extrabold italic font-serif mr-2">
            Inspiring
          </span>
          <span className="font-serif italic font-extralight">
            destinations within your reach......
          </span>
        </p>
      </div>
    </section>
  );
}