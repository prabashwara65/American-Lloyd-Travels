"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/assets/packages/gallery/img1.webp",
    alt: "Skiing down snowy slope",
    title: "Alpine Skiing",
    span: "md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-[480px]",
  },
  {
    src: "/assets/packages/gallery/img2.webp",
    alt: "Mountain trekking",
    title: "Highland Trekking",
    span: "md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-[480px]",
  },
  {
    src: "/assets/packages/gallery/img3.webp",
    alt: "European city night view",
    title: "Historic Cities",
    span: "md:col-span-1 md:row-span-1 min-h-[230px]",
  },
  {
    src: "/assets/packages/gallery/img4.webp",
    alt: "Luxury boat cruise at sunset",
    title: "Sunset Cruises",
    span: "md:col-span-1 md:row-span-1 min-h-[230px]",
  },
  {
    src: "/assets/packages/gallery/img5.webp",
    alt: "Family rafting adventure",
    title: "River Rafting",
    span: "md:col-span-1 md:row-span-1 min-h-[230px]",
  },
  {
    src: "/assets/packages/gallery/img6.webp",
    alt: "Wellness spa treatment",
    title: "Spa & Retreats",
    span: "md:col-span-1 md:row-span-1 min-h-[230px]",
  },
  {
    src: "/assets/packages/gallery/img7.webp",
    alt: "Skydiving over clouds",
    title: "Skydiving Expeditions",
    span: "md:col-span-1 md:row-span-1 min-h-[230px]",
  },
  {
    src: "/assets/packages/gallery/img8.webp",
    alt: "Wildlife safari photography",
    title: "Safari & Wildlife",
    span: "md:col-span-1 md:row-span-1 min-h-[230px]",
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation listener
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext, handleClose]);

  return (
    <main className="w-full flex-grow bg-white text-slate-700">
      {/* Gallery Header Banner */}
      <section className="bg-[#4865b2] py-6 px-6 sm:px-10 lg:px-16 shadow-inner">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold tracking-wide text-white">
            Gallery
          </h1>
        </div>
      </section>

      {/* Main Gallery Area */}
      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
        <p className="mb-8 text-sm font-semibold tracking-wide text-slate-600">
          Some inspiring destinations.....
        </p>

        {/* Asymmetric Bento-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[230px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-md bg-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                <span className="text-white text-sm font-semibold tracking-wide translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-screen Lightbox Modal View Mode */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm">
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Active Image and Title */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold tracking-wide">
                {galleryImages[selectedIndex].title}
              </h3>
              <p className="text-xs text-white/60 mt-1">
                {selectedIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
}