"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PreWeddingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/21.jpeg"
            alt="Pre-wedding couple"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <span className="inline-block px-8 py-4  bg-black rounded-full text-sm font-semibold mb-6">
              DRESSING STYLE COLLECTION OF 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              Love in Every<br />Detail
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
              Capture your engagement moments with breathable linen dresses, soft pastels, 
              and perfectly coordinated couple looks
            </p>
            <div className="flex gap-4">
              <Link
                href="/consultation"
                className="px-8 py-4   text-white font-semibold rounded-full bg-amber-500 transition-all duration-300"
              >
                Book Consultation
              </Link>
              <Link
                href="/lookbook/pre-wedding"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            2026 Pre-Wedding Trends
          </h2>
          <p className="text-xl text-gray-600">
            Designed for your engagement shoot and pre-wedding ceremonies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Linen Collection */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/5.jpeg"
                alt="Linen dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Breathable Linen</h3>
              <p className="text-gray-600 mb-4">
                Lightweight and photogenic - perfect for all-day outdoor shoots
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Natural</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Comfort</span>
              </div>
            </div>
          </div>

          {/* Pastel Colors */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="/images/8.jpeg"
                alt="Pastel dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Soft Pastels</h3>
              <p className="text-gray-600 mb-4">
                Peach, lilac, and mint - romantic hues for dreamy photographs
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Peach</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Lilac</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Mint</span>
              </div>
            </div>
          </div>

          {/* Couple Coordination */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coordinated couple"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Coordinated Looks</h3>
              <p className="text-gray-600 mb-4">
                Perfectly matched outfits for you and your partner
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">His & Hers</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Coordinated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="bg-pink-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif">2026 Color Palette</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-24 h-24 bg-[#FFD1DC] rounded-full shadow-lg"></div>
            <div className="w-24 h-24 bg-[#E6E6FA] rounded-full shadow-lg"></div>
            <div className="w-24 h-24 bg-[#98FB98] rounded-full shadow-lg"></div>
            <div className="w-24 h-24 bg-[#FFE5B4] rounded-full shadow-lg"></div>
            <div className="w-24 h-24 bg-[#FADADD] rounded-full shadow-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
}