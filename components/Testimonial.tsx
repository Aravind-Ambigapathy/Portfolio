import { FC } from 'react';

interface TestimonialProps {
  active: boolean;
  setActive: (index: number) => void;
  testimonial: {
    name: string;
    quote: string;
  };
}

const Testimonial: FC<TestimonialProps> = ({ active, setActive, testimonial }) => {
  return (
    <div
      className={`testimonial ${active ? 'active' : ''}`}
      onClick={() => setActive(testimonials.indexOf(testimonial))}
    >
      <p>{testimonial.quote}</p>
      <p>{testimonial.name}</p>
    </div>
  );
};

export default Testimonial;