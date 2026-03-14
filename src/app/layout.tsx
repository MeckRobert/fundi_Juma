import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-black">
      <body>
        <Navbar/>
        <main className="">
          {children}    
        </main>

        <Footer/>
      </body>
    </html>
  );
}
