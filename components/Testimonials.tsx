import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our customers say</h2>
      <div className="testimonials__container">
        <Testimonial
          name="John Doe"
          image="https://via.placeholder.com/150"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
        />
        <Testimonial
          name="Jane Doe"
          image="https://via.placeholder.com/150"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
        />
        <Testimonial
          name="Bob Smith"
          image="https://via.placeholder.com/150"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."
        />
      </div>
    </section>
  );
};

export default Testimonials;