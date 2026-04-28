import Link from 'next/link';
import { Navbar } from '@layouts';

const NavbarComponent = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarComponent;