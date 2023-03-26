import React from 'react';
import './header.styles.css';

const Header = () => {
  return (
    <header>
      <nav className="header-menu">
        <ul className="header-menu__list">
          <li className="header-menu__list-item">
            <a href="/">Home</a>
          </li>
          <li className="header-menu__list-item">
            <a href="/form">Form</a>
          </li>
          <li className="header-menu__list-item">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
