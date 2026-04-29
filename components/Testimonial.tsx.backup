import styles from './Testimonial.module.css';

interface Props {
  name: string;
  image: string;
  text: string;
}

const Testimonial = ({ name, image, text }: Props) => {
  return (
    <div className={styles.testimonial}>
      <img src={image} alt={name} className={styles.testimonialImg} />
      <p className={styles.testimonialText}>{text}</p>
      <p className={styles.testimonialAuthor}>- {name}</p>
    </div>
  );
};

export default Testimonial;