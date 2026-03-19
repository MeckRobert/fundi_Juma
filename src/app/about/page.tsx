import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* Hero Title with Elegant Description */}
      <section className="text-center">
        <h1 className="text-5xl text-black font-bold tracking-tight">
          The Art of <span className="text-amber-500">Fundi Juma</span>
        </h1>
        <div className="mt-6 w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
        <p className="mt-8 text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Where exceptional craftsmanship meets visionary design. Fundi Juma transforms 
          life's most precious moments into timeless fashion statements, creating 
          unforgettable experiences through the art of clothing.
        </p>
      </section>

      {/* Hero Image - High Quality Fashion Design */}
      <section className="mt-16">
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/30.jpg"
            alt="Elegant fashion design by Fundi Juma"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-2xl font-light">Master Tailor & Fashion Designer</p>
            <p className="text-4xl font-bold mt-2">Fundi Juma</p>
          </div>
        </div>
      </section>

      {/* Story Section with Designer Focus */}
      <section className="mt-24 grid gap-12 md:grid-cols-2 items-center">
        
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/31.jpg"
            alt="Fundi Juma crafting a custom wedding attire"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl text-black font-bold">The Designer's Journey</h2>
          <div className="w-20 h-1 bg-amber-700 rounded-full"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Fundi Juma is not just a fashion designer; he is an architect of dreams, 
            a weaver of memories, and an artist who paints with fabric and thread. 
            With over two decades of experience in haute couture, Fundi has established 
            himself as the premier destination for those seeking sartorial excellence 
            for life's most significant moments.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            His journey began in the vibrant streets of Tanzania, where he apprenticed 
            under master tailors, learning the sacred art of precision cutting and 
            garment construction. Today, Fundi Juma stands as a beacon of African 
            craftsmanship, blending traditional techniques with contemporary aesthetics 
            to create pieces that transcend time.
          </p>
        </div>

      </section>

      {/* Special Events Section */}
      <section className="mt-24">
        <h2 className="text-3xl text-black font-bold text-center">Crafting Memories for Life's Precious Moments</h2>
        <div className="w-20 h-1 bg-amber-700 mx-auto mt-4 rounded-full"></div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Wedding Cards */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/33.jpg"
              alt="Elegant wedding attire by Fundi Juma"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Wedding Couture</h3>
              <p className="mt-2">Bespoke bridal and groom attire that makes your special day unforgettable</p>
            </div>
          </div>

          {/* Birthday Cards */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/28.jpg"
              alt="Celebration outfit by Fundi Juma"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Birthday Celebrations</h3>
              <p className="mt-2">Statement pieces that make you shine on your special day</p>
            </div>
          </div>

          {/* Corporate & Legal Events */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional corporate wear by Fundi Juma"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Legal & Corporate</h3>
              <p className="mt-2">Professional attire that commands respect and exudes confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Designer's Philosophy */}
      <section className="mt-24 bg-gray-50 rounded-2xl p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black">The Fundi Juma Promise</h2>
          <div className="w-20 h-1 bg-amber-700 mx-auto mt-4 rounded-full"></div>
          
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold">Precision Fit</h3>
              <p className="mt-2 text-gray-600">Every garment is meticulously crafted to your exact measurements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold">Timeless Design</h3>
              <p className="mt-2 text-gray-600">Classic styles that transcend seasonal trends</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold">Personal Touch</h3>
              <p className="mt-2 text-gray-600">One-on-one consultations to bring your vision to life</p>
            </div>
          </div>

          <p className="mt-12 text-gray-700 text-lg italic">
            "I don't just make clothes; I create heirlooms that carry the memories of your 
            most cherished moments. Every stitch tells a story, every garment preserves a legacy."
          </p>
          <p className="mt-4 text-amber-700 font-semibold">— Fundi Juma</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-black">Let's Create Something Beautiful Together</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether it's your wedding day, a milestone birthday, or a significant corporate event, 
          Fundi Juma is ready to craft the perfect attire for your special occasion.
        </p>
        <button className="mt-8 bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition text-lg font-semibold">
          Book a Consultation
        </button>
      </section>

    </main>
  );
}