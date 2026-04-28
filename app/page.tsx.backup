'use client'
import BlogListingPage from "@/components/blogs";
import Portfolio from "@/components/mypage";
import { useState } from "react";

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Card1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Card2",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Card3",
      text: "I am changed",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white text-blue-900">
      <main className="w-full flex flex-col gap-8">
        <BlogListingPage />
        <section className="flex flex-col gap-16">
          <h2 className="text-4xl font-bold text-yellow-500">Blogs List</h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-lg shadow-md w-full md:w-1/3"
              >
                <p className="text-lg font-bold text-black">{testimonial.name}</p>
                <p className="">{testimonial.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <input
              type="search"
              placeholder="Search Blog or Testimonial"
              className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="bg-dark-blue hover:bg-dark-blue-dark text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </button>
          </div>
        </section>
        {/* <Portfolio /> */}
      </main>
      <footer className="bg-dark-blue p-4 text-white mt-8">
        &copy; 2023 Your Company
      </footer>
    </div>
  );
}