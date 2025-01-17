import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink
        to={ROUTES.HOME}
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
        end
      >
        Home
      </NavLink>
      <NavLink
        to={ROUTES.ABOUT}
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        About
      </NavLink>
    </nav>
  );
}
