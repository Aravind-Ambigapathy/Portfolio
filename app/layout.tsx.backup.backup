import Head from 'next/head';
import Link from 'next/link';
import styles from '../globals.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testimonial</title>
      </Head>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;