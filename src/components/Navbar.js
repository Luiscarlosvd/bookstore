import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => (
  <header className="header-layout">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="nav-link">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="categories" className="nav-link">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
