import logo from '../assets/ironhack-logo-xs.png'


// 1. Create a function that returns HTML or JSX content
function Navbar() {
    return (
      <nav>
        <img
          id="nav-logo"
          src={logo}
          alt="logo"
        />
        
        
      </nav>
    );
  }
  
  // 2. Export the function:
  export default Navbar;
  