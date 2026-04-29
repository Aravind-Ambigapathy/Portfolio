import styles from './Testimonial.module.css';

interface TestimonialProps {
  name: string;
  position: string;
  quote: string;
}

const Testimonial = ({ name, position, quote }: TestimonialProps) => {
  return (
    <div className={styles.testimonial}>
      <img src="/window.svg" alt={name} />
      <div className={styles.testimonialContent}>
        <div className={styles.name}>{name}</div>
        <div className={styles.position}>{position}</div>
        <div className={styles.quote}>{quote}</div>
      </div>
    </div>
  );
};

export default Testimonial;