import styles from './Testimonial.module.css';

interface Props {
  name: string;
  text: string;
}

const Testimonial = ({ name, text }: Props) => {
  return (
    <div className={styles.testimonial}>
      <p className={styles.testimonialText}>{text}</p>
      <p className={styles.testimonialAuthor}>- {name}</p>
    </div>
  );
};

export default Testimonial;