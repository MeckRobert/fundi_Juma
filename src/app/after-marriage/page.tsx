"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const afterMarriageData = [
  {
    id: 1,
    category: "Wedding Day",
    title: "The Big Day",
    description: "Beautiful wedding ceremony moments captured forever",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop",
    couple: "John & Elizabeth",
    location: "Grand Cathedral",
    date: "March 2025"
  },
  {
    id: 2,
    category: "Reception",
    title: "Celebration with Family",
    description: "Joyous reception party with loved ones",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop",
    couple: "Peter & Jane",
    location: "Luxury Hotel",
    date: "February 2025"
  },
  {
    id: 3,
    category: "Honeymoon",
    title: "Honeymoon Memories",
    description: "First days of marriage in paradise",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop",
    couple: "Chris & Patricia",
    location: "Maldives",
    date: "January 2025"
  },
  {
    id: 4,
    category: "Newlyweds",
    title: "Starting New Life",
    description: "Beautiful moments as husband and wife",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&auto=format&fit=crop",
    couple: "Andrew & Rachel",
    location: "New Home",
    date: "December 2024"
  }
];

export default function AfterMarriage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/4.jpeg"
            alt="After Marriage Celebration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">After-Marriage</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Celebrating the beautiful journey of marriage
          </p>
          <div className="flex gap-4 mt-8">
            <span className="px-6 py-2 bg-black rounded-full text-sm">
              Wedding Day
            </span>
            <span className="px-6 py-2 bg-yellow-700 rounded-full text-sm">
              Reception
            </span>
            <span className="px-6 py-2 bg-gray-500 rounded-full text-sm">
              Honeymoon
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wedding Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Beautiful memories from the wedding day and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {afterMarriageData.map((item) => (
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wedding Highlights */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-10">Wedding Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: 'Wedding Ceremony', icon: '💒' },
              { name: 'Reception Party', icon: '🎉' },
              { name: 'First Dance', icon: '💃' },
              { name: 'Cake Cutting', icon: '🎂' },
              { name: 'Bouquet Toss', icon: '💐' },
              { name: 'Honeymoon', icon: '🌴' }
            ].map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-2">{item.icon}</div>
                <span className="text-gray-800 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}