export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* Title */}
      <section className="text-center">
        <h1 className="text-4xl text-black font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          We'd love to hear from you. Send us a message and we will respond as soon as possible.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mt-16 grid gap-10 md:grid-cols-2">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl text-black font-semibold">Get in Touch</h2>

          <p className="mt-4 text-gray-600">
            If you have questions about our clothing styles or want to collaborate,
            feel free to reach out to us using the contact form.
          </p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p><strong>Email:</strong>  fundijumaatelier@yahoo.com</p>
            <p><strong>Phone:</strong> +255718245045</p>
            <p><strong>Location:</strong> Dar es Salaam, Tanzania</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="mt-1 w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="mt-1 w-full rounded border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800"
          >
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}