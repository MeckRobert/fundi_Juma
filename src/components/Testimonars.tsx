"use client"
import Image from "next/image";
import React from "react";

const testimonials = [
    {
      name: "Amina Hassan",
      image: "/images/2.jpeg",
      text: "Fundi Juma clothing styles are amazing. The quality and design are modern and stylish.",
      rating: 5,
      role: "Fashion Enthusiast",
    },
    {
      name: "John Michael",
      image: "/images/2.jpeg",
      text: "I love the creativity behind these fashion styles. Very unique and elegant.",
      rating: 5,
      role: "Style Blogger",
    },
    {
      name: "Sarah Paul",
      image: "/images/10.jpeg",
      text: "The clothing collections are inspiring. Perfect styles for modern fashion lovers.",
      rating: 5,
      role: "Fashion Designer",
    },
    {
      name: "David Kimaro",
      image: "/images/11.jpeg",
      text: "Great fashion ideas and beautiful designs. I highly recommend Fundi Juma.",
      rating: 4,
      role: "Regular Customer",
    },
    {
      name: "Neema Joseph",
      image: "/images/12.jpeg",
      text: "Very impressive clothing catalog with modern and stylish presentation.",
      rating: 5,
      role: "Influencer",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
  
        {/* Title Section */}
        <div className="relative text-center mb-16">
          <h1>
            <span className="inline-block px-3 py-1 text-lg font-semibold text-yellow-600 bg-yellow-100 rounded-full mb-4">
              Testimonials
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why fashion lovers trust Fundi Juma for their unique style needs
          </p>
        </div>
  
        {/* Cards Grid */}
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl font-serif text-gray-200"></div>
                
                {/* Rating Stars - Inline SVG */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < item.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill={i < item.rating ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  ))}
                </div>
  
                {/* Testimonial Text */}
                <p className="relative text-gray-700 leading-relaxed mb-6 z-10">
                  {item.text}
                </p>
  
                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover ring-4 ring-yellow-50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Bottom CTA */}
        <div className="relative mt-16 text-center">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied customers</p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Share Your Experience
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
  
        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
  
      </section>
    );
  }