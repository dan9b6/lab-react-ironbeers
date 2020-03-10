import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <nav className="nav__bar">
      <Link to="/">Home</Link>
      <Link to="/beers">Beers</Link>
      <Link to="/random-beer">Random-Beers</Link>
      <Link to="/new-beer">New-Beers</Link>
    </nav>
  );
};

export default Navbar;
