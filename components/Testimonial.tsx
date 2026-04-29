import styles from './Testimonial.module.css';

interface TestimonialProps {
  name: string;
  position: string;
  text: string;
}

const Testimonial = ({ name, position, text }: TestimonialProps) => {
  return (
    <div className={styles.testimonial}>
      <blockquote>
        <p>{text}</p>
        <footer>
          <cite>
            {name} <br />
            {position}
          </cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default Testimonial;