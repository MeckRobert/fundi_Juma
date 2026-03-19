"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpecialEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/30.jpg"
            alt="Special event dress"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <span className="inline-block px-8 py-4 bg-black rounded-full text-sm font-semibold mb-6">
              SPECIAL EVENTS 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              Dress to<br />Celebrate
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
              From wedding guests to mothers of the couple - elegant styles for every special moment
            </p>
            <div className="flex gap-4">
              <Link
                href="/consultation"
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-purple-600 transition-all duration-300"
              >
                Book Styling Session
              </Link>
              <Link
                href="/lookbook/special-events"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Browse Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            Special Occasions
          </h2>
          <p className="text-xl text-gray-600">
            Perfect attire for every role at the celebration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Wedding Guests */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/images/22.jpeg"
                alt="Wedding guest dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Wedding Guests</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Cape Dresses - Old Hollywood glamour
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Drop Waists - 1920s-inspired
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Pastel Hues - Gelato shades
                </li>
              </ul>
            </div>
          </div>

          {/* Mother of Birthdays */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/images/29.jpg"
                alt="Mother of bride dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Birthdays</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Comfort-First Silhouettes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Sophisticated Colors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Matching Jackets & Sleeves
                </li>
              </ul>
            </div>
          </div>

          {/* Formal Events */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64">
              <Image
                src="/images/18.jpeg"
                alt="Formal event dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Formal Events</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Luxury Fabrics - Silk, Satin
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Illusion Necklines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Hand-sewn Embellishments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="bg-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center font-serif">
            2026 Special Event Colors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#A7C7E8] rounded-full mx-auto mb-2"></div>
              <span className="text-sm">Baby Blue</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FDFD96] rounded-full mx-auto mb-2"></div>
              <span className="text-sm">Soft Yellow</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#E6E6FA] rounded-full mx-auto mb-2"></div>
              <span className="text-sm">Lavender</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#98FB98] rounded-full mx-auto mb-2"></div>
              <span className="text-sm">Mint</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFB6C1] rounded-full mx-auto mb-2"></div>
              <span className="text-sm">Blush</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mother's Collection */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-96 md:h-auto">
              <Image
                src="/images/19.jpeg"
                alt="Mother's elegant dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">For the Mothers</h3>
              <p className="text-lg text-gray-600 mb-6">
                Thoughtful designs with comfort and elegance in mind
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-purple-500">✓</span>
                  A-line and empire waist silhouettes
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-500">✓</span>
                  Sage green, navy, champagne
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-500">✓</span>
                  Soft florals and matching jackets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}