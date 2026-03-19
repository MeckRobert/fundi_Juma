"use client";
import Link from "next/link";
import Testimonials from "@/components/Testimonars";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Fundi Juma Atelier",
    description: "Designer who make your event to be like heaven",
    image: "/images/1.jpeg",
    buttonText: "Explore Gallery",
    buttonLink: "/gallery"
  },
  {
    title: "To Make You Shine Is Our Resposibility",
    description: "Shining like no else in your satisfaction.",
    image: "/images/13.jpeg",
    buttonText: "Explore Formal",
    buttonLink: "/special_events"
  },
  {
    title: "Get Consultation At Any Time",
    description: "Get free consultation on how to make your event to be like a miracle",
    image: "/images/14.jpeg",
    buttonText: "Consultation",
    buttonLink: "/consultatin"
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      // Here you would typically send this to your API
      console.log("Subscribed email:", email);
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full">
      {/* Full-screen Hero Slider */}
      <div className="relative w-full h-[830px] mt-1 overflow-hidden">
        {/* Full Screen Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
              className={`text-center text-white max-w-4xl px-4 transition-all duration-1000 ${
                index === current 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10 hidden"
              }`}
            >
              <span className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 text-sm font-semibold rounded-full mb-6">
                New Collection
              </span>
              <h1 className="text-6xl md:text-7 font-bold mb-4">
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

      {/* Rest of the content with container */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Welcome Section - Commented out as in original */}
        {/* <section className="text-center mb-16">
          <h1 className="text-4xl text-black font-bold mb-4">
            Welcome to Fundi Juma Atelier
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover curated clothing styles for modern fashion lovers. 
            Each piece tells a story of craftsmanship and elegance.
          </p>
        </section> */}

        {/* Featured Categories */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold text-center text-black mb-10">Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Special Event Wear", icon: "", link: "/special_events" },
              { name: "Pre Wedding Wear", icon: "", link: "/pre-marriage" },
              { name: "Wedding Wear", icon: "s", link: "/wedding_dress" }
            ].map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="group bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-5xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl text-black font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">Explore collection →</p>
              </Link>
            ))}
          </div>
        </section>

       {/* Testimonials */}
       <Testimonials />

        {/* NEW: Get In Touch - Email Subscription Section */}
        <section className="mb-20 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-700 mb-8">
              Stay updated with our latest collections, exclusive offers, and fashion inspiration
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-gray-700 text-lg"
                  required
                />
                <svg 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-md whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-xl animate-pulse">
                ✅ Thank you for subscribing! We'll keep you updated.
              </div>
            )}

            <p className="text-sm text-gray-500 mt-6">
              Join our community of fashion lovers. No spam, only style! ✨
            </p>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> Weekly updates
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> Exclusive offers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">✓</span> Unsubscribe anytime
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </main>
  );
}