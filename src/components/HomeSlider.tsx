"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Modern Street Style",
    description: "Explore bold and expressive street fashion that makes a statement wherever you go.",
    image: "/images/1.jpeg",
    buttonText: "Shop Street Wear",
    buttonLink: "/category/street"
  },
  {
    title: "Classic Formal Wear",
    description: "Elegant outfits perfect for official occasions, meetings, and special events.",
    image: "/images/13.jpeg",
    buttonText: "Explore Formal",
    buttonLink: "/category/formal"
  },
  {
    title: "Minimal Fashion",
    description: "Clean and simple styles for everyday comfort with a touch of sophistication.",
    image: "/images/14.jpeg",
    buttonText: "View Collection",
    buttonLink: "/category/minimal"
  },
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-md h-[700px] mt-2 overflow-hidden">
      {/* Full Screen Background Images */}

     

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute  inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
            quality={100}
          />
          
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
        </div>
      ))}

      {/* Content Overlay - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`text-center text-white max-w-4xl px-2 transition-all duration-1000 ${
              index === current 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10 hidden"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 text-sm font-semibold rounded-full mb-6">
              New Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              {slide.description}
            </p>
            <Link
              href={slide.buttonLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span>{slide.buttonText}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current 
                ? 'w-8 bg-yellow-500' 
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}