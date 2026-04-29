import Testimonial from './Testimonial';
import { useState } from 'react';

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Jane Doe',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Bob Smith',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Alice Johnson',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Mike Brown',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Emma Davis',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'John Doe',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Jane Doe',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Bob Smith',
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
  ];

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials__container">
        {testimonials.slice(0, showMore ? testimonials.length : 3).map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            text={testimonial.text}
          />
        ))}
        {showMore && (
          <button className="show-more" onClick={handleShowMore}>
            Show less
          </button>
        )}
        {!showMore && (
          <button className="show-more" onClick={handleShowMore}>
            Read more
          </button>
        )}
      </div>
    </section>
  );
};

export default Testimonials;