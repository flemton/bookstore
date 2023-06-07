import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <nav className="nav">
    <h1 className="bookstore">
      Bookstore CMS
    </h1>
    <ul className="nav-items">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
