import Testimonial from './Testimonial';
import { useState } from 'react';

const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const testimonials = [
    {
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Jane Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Bob Smith',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Alice Johnson',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Mike Brown',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      name: 'Emma Davis',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
  ];

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleLoadMore = () => {
    setShowMore(true);
  };

  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials__container">
        <div className={styles.testimonials__row}>
          {testimonials.slice(0, showMore ? testimonials.length : 6).map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              text={testimonial.text}
            />
          ))}
        </div>
        {showMore && testimonials.slice(6, testimonials.length).map((testimonial, index) => (
          <div key={index + 6} className={styles.testimonials__row}>
            <Testimonial
              key={index + 6}
              name={testimonial.name}
              text={testimonial.text}
            />
          </div>
        ))}
        {!showMore && (
          <button className="show-more" onClick={handleLoadMore}>
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