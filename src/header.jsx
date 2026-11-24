import './header.css';

function Header({ logoUrl, logoAlt, menuImgUrl }) {
  return (
    <header className='header'>
      <img src={logoUrl} alt={logoAlt} className='header-logo' />

      <button className='header-btn'>
        <img src={menuImgUrl} alt="menu" />
      </button>
    </header>
  );
}

export default Header;