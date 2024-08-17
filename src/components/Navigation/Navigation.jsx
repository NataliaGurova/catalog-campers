import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = ({ isHomePage }) => {
  return (
    <header className={clsx(css.header, isHomePage && css.headerHome)}>
      <div className={clsx(css.container, isHomePage && css.containerHome)}>
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
