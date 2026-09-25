"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HERO_IMAGES.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative flex flex-col w-full bg-white"
      aria-label="Travel destinations slideshow"
    >
      {/* Slideshow Container */}
      <div className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden bg-slate-900">
        {/* Background Images with Animated Crossfade */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={HERO_IMAGES[currentIndex]}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={HERO_IMAGES[currentIndex]}
              alt={`Travel destination ${currentIndex + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Backward Arrow Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
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
        </motion.button>

        {/* Forward Arrow Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
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
        </motion.button>
      </div>

      {/* Hero Tail / Tagline Banner with Prominent Downward Drop Shadow */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 w-full bg-white border-b border-gray-200 py-6 text-center shadow-[0_12px_24px_-6px_rgba(0,0,0,0.2)]"
      >
        <p className="text-2xl sm:text-3xl lg:text-4xl text-[#1e4bb8] tracking-wide">
          <span className="font-extrabold italic font-serif mr-2">
            Inspiring
          </span>
          <span className="font-serif italic font-extralight">
            destinations within your reach......
          </span>
        </p>
      </motion.div>
    </motion.section>
  );
}