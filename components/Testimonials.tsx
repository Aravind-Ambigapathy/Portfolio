import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Testimonial
            name="John Doe"
            position="CEO, XYZ Corporation"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          />
          <Testimonial
            name="Jane Doe"
            position="CTO, ABC Inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          />
          <Testimonial
            name="Bob Smith"
            position="Founder, DEF Startup"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;