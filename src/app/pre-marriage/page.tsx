"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const preMarriageData = [
  {
    id: 1,
    category: "Engagement",
    title: "Romantic Engagement Moments",
    description: "Beautiful pre-wedding engagement shoots capturing love and commitment",
    imageUrl: "/images/2.jpeg",
    couple: "Michael & Sarah",
    location: "Beach Resort",
    date: "March 2025"
  },
  {
    id: 2,
    category: "Traditional",
    title: "Traditional Pre-Wedding Ceremony",
    description: "Cultural rituals and traditions before the big day",
    imageUrl: "/images/17.jpeg",
    couple: "David & Amina",
    location: "Family Home",
    date: "February 2025"
  },
  {
    id: 3,
    category: "Couple Shoot",
    title: "Love Story in Pictures",
    description: "Capturing the essence of love before marriage",
    imageUrl: "/images/8.jpeg",
    couple: "James & Mary",
    location: "City Park",
    date: "January 2025"
  },
  {
    id: 4,
    category: "Preparations",
    title: "Getting Ready Together",
    description: "Special moments of preparation and anticipation",
    imageUrl: "/images/9.jpeg",
    couple: "Robert & Grace",
    location: "Wedding Venue",
    date: "December 2024"
  }
];

export default function PreMarriage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/9.jpeg"
            alt="Pre Marriage Romance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Pre-Marriage</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Capturing beautiful moments before saying I do
          </p>
          <div className="flex gap-4 mt-8">
            <span className="px-4 py-2 bg-black rounded-full text-md">
              Engagement
            </span>
            <span className="px-4 py-2 bg-yellow-700 rounded-full text-md">
              Couple Shoot
            </span>
            <span className="px-4 py-2 bg-gray-500 rounded-full text-md">
              Traditions
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pre-Wedding Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beautiful moments captured before marriage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preMarriageData.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400 text-black text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{item.couple}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-10">Pre-Marriage Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Engagement', 'Mehendi', 'Haldi', 'Sangeet'].map((cat) => (
              <div key={cat} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <span className="text-gray-800">{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}