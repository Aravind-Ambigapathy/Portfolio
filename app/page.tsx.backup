typescript
import BlogListingPage from "@/components/blogs";
import Portfolio from "@/components/mypage";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Client 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Client 2",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Client 3",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <main className="w-full flex flex-col gap-8">
        <BlogListingPage />
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-primary">Testimonials</h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-secondary p-8 rounded-lg shadow-md w-full md:w-1/3"
              >
                <p className="text-lg font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-200">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </section>
        {/* <Portfolio /> */}
      </main>
    </div>
  );
}

/* Global CSS Variables */
:root {
  --primary: #3498db;
  --primary-dark: #2c3e50;
  --secondary: #f1c40f;
  --gray-200: #e5e5ea;
  --gray-600: #666;
}