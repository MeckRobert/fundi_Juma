"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Wedding dress"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <span className="inline-block px-8 py-4 bg-black rounded-full text-sm font-semibold mb-6">
              BRIDAL COLLECTION 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
              Your Dream Dress<br />Awaits
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
              Romantic sophistication with fluid silhouettes, 3D florals, and warm champagne tones
            </p>
            <div className="flex gap-4">
              <Link
                href="/consultation"
                className="px-3 py-3 bg-amber-500  text-white font-semibold rounded-full hover:bg-amber-600 transition-all duration-300"
              >
                Book Bridal Consultation
              </Link>
              <Link
                href="/lookbook/wedding"
                className="px-3 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Trends */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            2026 Bridal Trends
          </h2>
          <p className="text-xl text-gray-600">
            The latest in wedding dress fashion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Romance */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-80">
              <Image
                src="/images/15.jpeg"
                alt="Romantic wedding dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Soft Romance</h3>
              <p className="text-gray-600 mb-4">
                Fluid silhouettes, lightweight chiffons, airy tulles, and layered transparencies
              </p>
            </div>
          </div>

          {/* Historical Details */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-80">
              <Image
                src="/images/16.jpeg"
                alt="Victorian style wedding dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Historical Details</h3>
              <p className="text-gray-600 mb-4">
                Portrait necklines, Victorian-inspired sleeves, capelets, and Juliet caps
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Statement Elements */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-80">
              <Image
                src="/images/12.jpeg"
                alt="Statement wedding dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Statement Elements</h3>
              <p className="text-gray-600 mb-4">
                Oversized bows, 3D floral appliqués, and dramatic volume
              </p>
            </div>
          </div>

          {/* Warm Tones */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-80">
              <Image
                src="/images/14.jpeg"
                alt="Champagne wedding dress"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif">Warm Tones</h3>
              <p className="text-gray-600 mb-4">
                Champagne, blush, and ivory over nude - moving away from stark white
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformable Designs */}
      <section className="bg-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Transformable Designs</h3>
            <p className="text-xl text-gray-700">Detachable skirts and removable sleeves for ceremony-to-reception versatility</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-2">👗</span>
              <h4 className="font-semibold">Detachable Skirts</h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-2">✨</span>
              <h4 className="font-semibold">Removable Sleeves</h4>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <span className="text-4xl mb-2">🔄</span>
              <h4 className="font-semibold">Two-in-One Looks</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}