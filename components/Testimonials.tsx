import Testimonial from './Testimonial';

const testimonials = [
  {
    name: 'John Doe',
    position: 'CEO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Jane Doe',
    position: 'CTO',
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;