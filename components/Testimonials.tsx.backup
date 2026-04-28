import { FC, useState } from 'react';
import Testimonial from './Testimonial';

interface TestimonialsProps {
  testimonials: {
    name: string;
    quote: string;
  }[];
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            active={active === index}
            setActive={setActive}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;