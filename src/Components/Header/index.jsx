import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
  return (
    <Link to="/">
      <img className="header__img" src="/images/Header.png" alt="header" />
    </Link>
  );
}

export default Header;
