typescript
import BlogListingPage from "@/components/blogs";
import Portfolio from "@/components/mypage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <main className="w-full flex flex-col gap-8">
        <BlogListingPage />
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/3"
                >
                  <p className="text-lg font-bold">Client Name</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
              ))}
          </div>
        </section>
        {/* <Portfolio /> */}
      </main>
    </div>
  );
}