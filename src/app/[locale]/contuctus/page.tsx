"use client";

// Припускаємо, що Header і Footer існують у цьому шляху
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image"; // Next.js Image component

// SVG для іконок (використовуємо Font Awesome, але вбудовуємо як SVG)
const socialIcons = [
  { name: "Facebook", href: "#", src: "/Vector_facebook.png" },
  { name: "LinkedIn", href: "#", src: "/linkedin.png" },
  { name: "Twitter", href: "#", src: "/twitter.png" },
];

export default function ContactPage() {
  return (
    <div className="font-inter flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Hero + Form (з фоном) */}
      <div className="relative flex-grow">
        {/* Фон */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/mask.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Section */}
        <section className="relative mt-20 ml-[-150px] py-20 text-left text-white">
          <div className="mx-auto max-w-3xl px-4">
            <p className="text-lg">Get Started</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Get in touch with us.
              <br />
              We&apos;re here to assist you.
            </h1>
          </div>

          {/* Social Icons */}
          <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 transform pr-8 md:block">
            <div className="mb-[35px] ml-[-530px] flex flex-col items-center space-y-4">
              {socialIcons.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white transition duration-300 hover:scale-110"
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="h-4 w-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative z-10 mx-auto -mt-16 w-full max-w-4xl rounded-xl bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-xl font-semibold">Contact</h2>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="What can we help you with?"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-md bg-blue-900 px-6 py-2 font-medium text-white transition hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>

      {/* Info Block */}
      <section className="mx-auto mt-16 mb-[50px] w-full max-w-4xl px-6 text-gray-900">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="pr-12">
            <h2 className="text-3xl font-extrabold text-blue-900">
              We are always happy to assist you
            </h2>
          </div>
          <div className="border-l border-gray-200 pl-6">
            <p className="font-bold text-gray-800">Email Address</p>
            <p className="mt-1 cursor-pointer text-blue-900 transition hover:text-blue-600">
              help@info.com
            </p>
            <p className="mt-3 text-sm text-gray-700">
              Assistance hours: <br /> Mon – Fri: 6 am to 8 pm EST
            </p>
          </div>
          <div className="border-l border-gray-200 pl-6">
            <p className="font-bold text-gray-800">Number</p>
            <p className="mt-1 cursor-pointer text-blue-900 transition hover:text-blue-600">
              (808) 998-34256
            </p>
            <p className="mt-3 text-sm text-gray-700">
              Assistance hours: <br /> Mon – Fri: 6 am to 8 pm EST
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-emerald-600 py-12 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center md:flex-row md:gap-12 md:text-left">
          <div className="flex-shrink-0 md:w-1/2">
            <h2 className="text-3xl font-bold">Subscribe to our Newsletter</h2>
            <p className="mt-2 text-sm text-emerald-100">
              Stay informed about the latest updates, results, and announcements
              by subscribing to our newsletter.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 md:max-w-none md:flex-grow md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md px-4 py-3 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="rounded-md bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-gray-100 focus:ring-2 focus:ring-white focus:outline-none">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
