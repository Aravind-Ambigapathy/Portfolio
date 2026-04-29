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
    <div className="mx-auto p-4 bg-white text-blue-900">
      <main className="w-full flex flex-col gap-8">
        <div className="blogs-container">
          <BlogListingPage />
        </div>
        <section className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-primary">Testimonials</h2>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
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
            <button className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </section>
        {/* <Portfolio /> */}
      </main>
    </div>
  );
}