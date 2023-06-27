import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div>
      
      <NavLink className={css.navlink} to="/register">Sign Up</NavLink>
      <NavLink className={css.navlink} to="/login">Log In</NavLink>
    </div>
  );
};