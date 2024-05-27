function Navbar({ logo, menu }) {
    return (
      <div className="navbar">
        <img className="ironhackLogo" src={logo} alt="logo" />
        <img className="menuIcon" src={menu} alt="menu" />
      </div>
    );
  }
  
  export default Navbar;