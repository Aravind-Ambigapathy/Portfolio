import Link from 'next/link';
import Image from 'next/image';
import styles from './blogs.module.css';

const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/testimonial">
        <a>Testimonial</a>
      </Link>
    </div>
  );
};

export default Blogs;