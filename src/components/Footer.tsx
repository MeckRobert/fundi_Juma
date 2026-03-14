"use client"
import Link from "next/link"
import React from "react";

export default function Footer() {
  const phoneNumber = "+255718245045"; // Your Tanzania number
  const message = encodeURIComponent(
    "Hello Fundi Juma, I would like to inquire about your clothing styles."
  );
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid gap-8 md:grid-cols-4">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold text-gray-900">Fundi Juma</h2>
            <p className="mt-3 text-sm text-gray-600">
              Bringing fashion, identity and creativity together through modern curated styles.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Category', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
            <div className="space-y-2">
              <Link 
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              className="block text-sm text-gray-600 hover:text-gray-900">WhatsApp</Link>
              <Link href="https://www.instagram.com/fundi.juma.atelier?igsh=MXQxMXJ2NGh4ZG4yaw%3D%3D&utm_source=qr" className="block text-sm text-gray-600 hover:text-gray-900">Instagram</Link>
              {/* <Link href="fundijumaatelier@yahoo.com" className="block text-sm text-gray-600 hover:text-gray-900">Email</Link> */}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
            <p className="text-sm text-gray-600">Dar es Salaam, Tanzania</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fundi Juma. All rights reserved.
        </div>
      </div>
    </footer>
  );
}