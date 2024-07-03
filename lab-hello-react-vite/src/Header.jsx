function Header({ logo, menuLogo }) {
    return (
        <div className="header">
          <img src={logo} alt="logo"></img>
          <img src={menuLogo} alt="menu logo"></img>
        </div>
    );
  }
  
  export default Header;