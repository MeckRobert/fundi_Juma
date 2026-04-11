"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  
  const userRole = session?.user?.role;
  const isAuthenticated = status === "authenticated";

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                Our Services
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
                    href="/wedding_dress"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Wedding Dressing
                  </Link>
                  <Link
                    href="/special_events"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    Special Event Dressing
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
              href="/gallery" 
              className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
            >
             Gallery
            </Link>

            <Link 
              href="/contact" 
              className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>

            {/* Customer Booking Link - Only for authenticated customers */}
            {isAuthenticated && userRole === 'CUSTOMER' && (
              <Link 
                href="/customer/bookings" 
                className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
              >
                My Consultations
              </Link>
            )}

            {/* Admin Link - Only for admins */}
            {isAuthenticated && userRole === 'ADMIN' && (
              <Link 
                href="/admin/bookings" 
                className="text-gray-700 hover:bg-black hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-medium"
              >
                Manage Bookings
              </Link>
            )}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex md:items-center md:gap-4">
            {!isAuthenticated ? (
              <Link 
                href="/login"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
              >
                Login
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
                >
                  <span>{session.user?.name || 'Account'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border border-gray-100 z-50">
                    {/* Dashboard link based on role */}
                    {userRole === 'CUSTOMER' && (
                      <Link
                        href="/customer/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    )}
                    {userRole === 'ADMIN' && (
                      <Link
                        href="/admin/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    
                    {/* Bookings link */}
                    {userRole === 'CUSTOMER' && (
                      <Link
                        href="/customer/bookings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Consultations
                      </Link>
                    )}
                    
                    {/* New Booking link */}
                    {userRole === 'CUSTOMER' && (
                      <Link
                        href="/customer/bookings/new"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        + New Booking
                      </Link>
                    )}
                    
                    {/* Admin bookings link */}
                    {userRole === 'ADMIN' && (
                      <Link
                        href="/admin/bookings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Manage All Bookings
                      </Link>
                    )}
                    
                    <hr className="my-1 border-gray-200" />
                    
                    <button
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        signOut();
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
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
        isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 invisible'
      } overflow-hidden bg-white border-t border-gray-100`}>
        <div className="px-4 py-3 space-y-2">
          <Link 
            href="/" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="space-y-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex w-full items-center justify-between px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            >
              <span>Our Services</span>
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
              isDropdownOpen ? 'max-h-96' : 'max-h-0'
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
                href="/wedding_dress"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-black hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Wedding Dressing
              </Link>
              <Link
                href="/special_events"
                className="block px-4 py-3 text-sm text-gray-600 hover:bg-black hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Special Event Dressing
              </Link>
            </div>
          </div>

          <Link 
            href="/about" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          
          <Link 
            href="/gallery" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          
          <Link 
            href="/contact" 
            className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          {/* Mobile Booking Links for Authenticated Users */}
          {isAuthenticated && userRole === 'CUSTOMER' && (
            <>
              <Link 
                href="/customer/dashboard" 
                className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/customer/bookings" 
                className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                My Consultations
              </Link>
              <Link 
                href="/customer/bookings/new" 
                className="block px-4 py-3 bg-black text-white rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                + New Booking
              </Link>
            </>
          )}

          {/* Mobile Admin Links */}
          {isAuthenticated && userRole === 'ADMIN' && (
            <>
              <Link 
                href="/admin/dashboard" 
                className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Admin Dashboard
              </Link>
              <Link 
                href="/admin/bookings" 
                className="block px-4 py-3 text-gray-700 hover:bg-black hover:text-white rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Manage Bookings
              </Link>
            </>
          )}

          {/* Mobile Auth Section */}
          <div className="pt-4 space-y-2">
            {!isAuthenticated ? (
              <Link 
                href="/login"
                className="block text-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="w-full text-center bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 font-medium text-sm"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}