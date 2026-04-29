'use client'
import BlogListingPage from "@/components/blogs";
import Testimonials from "@/components/Testimonials";

export default function Home() {

  return (
    <div className="mx-auto p-4 bg-white text-blue-900">
      <main className="w-full flex flex-col gap-8">
        <BlogListingPage />
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-primary">Testimonials</h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <Testimonials />
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}