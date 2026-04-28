import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Testimonials />
    </div>
  );
};

export default Layout;