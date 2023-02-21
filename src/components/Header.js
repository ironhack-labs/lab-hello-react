import React from 'react';
import backgroundImage from '../https://user-images.githubusercontent.com/23629340/43718926-863a3c7a-998c-11e8-803b-7c9bc87425bb.png';
p
function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="header__title">Welcome to my website</h1>
      <p className="header__subtitle">This is a sample landing page</p>
    </header>
  );
}

export default Header;