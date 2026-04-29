'use client'
import BlogListingPage from "@/components/blogs";
import Portfolio from "@/components/mypage";
import Testimonial from "@/components/Testimonial";
import { useState } from "react";

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Client 1",
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Client 2",
      image: "",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Client 3",
      image: "",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  return (
    <div className="mx-auto p-4 bg-white text-blue-900">
      <main className="w-full flex flex-col gap-8">
        <BlogListingPage />
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-primary">Testimonials</h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} name={testimonial.name} image={testimonial.image} text={testimonial.text} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </section>
        <Portfolio />
      </main>
    </div>
  );
}