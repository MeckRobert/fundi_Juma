import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* Title */}
      <section className="text-center">
        <h1 className="text-4xl text-black font-bold">About Fundi Juma</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Fundi_Juma is a modern clothing brand focused on showcasing
          different fashion styles with creativity and elegance. Our goal
          is to inspire people through curated fashion collections.
        </p>
      </section>

      {/* Image + Story */}
      <section className="mt-16 grid gap-10 md:grid-cols-2 items-center">
        
        <div>
          <Image
            src="/images/23.jpg"
            alt="Fashion Style"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl text-black font-semibold">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Fundi_Juma started with a vision to create a platform where
            people can explore unique clothing styles. From streetwear to
            classic fashion, we believe clothing is a powerful way to
            express personality and confidence.
          </p>

          <p className="mt-4 text-gray-600">
            Our collections focus on quality fabrics, modern design,
            and timeless style that fits every occasion.
          </p>
        </div>

      </section>

      {/* Mission Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Our mission is to inspire creativity in fashion by presenting
          carefully curated clothing styles. We aim to help individuals
          discover styles that reflect their identity and confidence.
        </p>
      </section>

    </main>
  );
}