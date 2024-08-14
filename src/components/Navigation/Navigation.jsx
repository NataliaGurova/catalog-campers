import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      {/* <p className={css.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{' '}
        GoMerch Store
      </p> */}
<div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog Campers
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites Campers
        </NavLink>
      </nav>
      </div>
    </header>
  );
};

export default Navigation;
