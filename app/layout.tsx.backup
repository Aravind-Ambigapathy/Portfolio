import Head from 'next/head';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My App</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Testimonials testimonials={[
        { name: 'John Doe', quote: 'This is a testimonial' },
        { name: 'Jane Doe', quote: 'This is another testimonial' },
      ]} />
    </div>
  );
};

export default Layout;