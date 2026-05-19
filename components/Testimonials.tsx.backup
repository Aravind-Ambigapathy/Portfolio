import Testimonial from './Testimonial';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      name: 'Bob Smith',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Mike Brown',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Jane Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Tom Johnson',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Emily Davis',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
  ]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials__container">
        {testimonials.slice(0, showMore ? testimonials.length : 4).map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
        {showMore && testimonials.slice(4, testimonials.length).map((testimonial, index) => (
          <Testimonial
            key={index + 4}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
        {!showMore && (
          <button className="show-more" onClick={handleShowMore}>
            Read more
          </button>
        )}
        {showMore && (
          <button className="show-more" onClick={handleShowMore}>
            Show less
          </button>
        )}
      </div>
    </section>
  );
};

export default Testimonials;