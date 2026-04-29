import Link from 'next/link';
import Image from 'next/image';
import styles from './mypage.module.css';

const MyPage = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/testimonial">
        <a>Testimonial</a>
      </Link>
    </div>
  );
};

export default MyPage;