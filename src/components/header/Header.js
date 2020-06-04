import React from 'react';
import Logo from '../../img/logo-tsoft.png';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="##">
          <img src={Logo} alt="Logo" />
        </a>
      </nav>
    </div>
  );
};

export default Header;
