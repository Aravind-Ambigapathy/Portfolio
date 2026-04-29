import styles from './Testimonial.module.css';

interface Props {
  name: string;
  image: string;
  text: string;
}

const Testimonial = ({ name, image, text }: Props) => {
  return (
    <div className={styles.testimonial}>
      <p>{text}</p>
      <p>- {name}</p>
    </div>
  );
};

export default Testimonial;