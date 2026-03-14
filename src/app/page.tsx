import Link from "next/link";
import Testimonials from "@/components/Testimonars";
import React from "react";


import HomeSlider from "@/components/HomeSlider";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-2">
      
    

      <section className="mt-2 text-center">
        <h1 className="text-4xl text-black font-bold">Welcome to Fundi Juma Atelier</h1>
        <p className="mt-3 text-lg text-gray-600">
          Discover curated clothing styles for modern fashion lovers.
        </p>
     </section>
      <HomeSlider/>

      <Testimonials/>
  
    </main>
  
  );
}
