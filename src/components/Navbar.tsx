"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/10.PNG"
              alt="Fundi Juma Logo"
              width={60}
              height={45}
              className="h-auto rounded-full w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
            >
              Home
            </Link>

            {/* Categories Dropdown - Desktop */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-xl shadow-lg py-2 border border-gray-100">
                <Link
                    href="/consultation"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Consultation
                  </Link>
                  <Link
                    href="/pre-marriage"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Pre-Wedding
                  </Link>
                  <Link
                    href="/special_events"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Special Event
                  </Link>
                  <Link
                    href="/wedding_dress"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Wedding dresses
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
            >
              About Us
            </Link>

            <Link 
              href="/contact" 
              className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link 
             href="/gallery"
             className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
            >
              Gallery
            </Link>
          </div>

          {/* Mobile Menu Link */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-black hover:text-white transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
      } overflow-hidden bg-white border-t border-gray-100`}>
        <div className="px-4 py-3 space-y-2">
          <Link 
            href="/" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          


          {/* Mobile Categories Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex w-full items-center justify-between px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            >
              <span>Categories</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
              isDropdownOpen ? 'max-h-50' : 'max-h-0'
            }`}>
              <Link
                href="/consultation"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-black hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Consultation
              </Link>
              <Link
                href="/pre-marriage"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-black hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pre Wedding 
              </Link>
              <Link
                href="/special_events"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-black hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Special Events
              </Link>
              <Link
                href="/wedding_dress"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-black hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Wedding Dress
              </Link>
            </div>
          </div>

          
          <Link 
            href="/contact" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <Link 
            href="/about" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <div className="pt-2">
            <Link 
             href="/gallery"
             className="w-full  text-black px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}