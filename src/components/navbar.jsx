import logo from '../image/ironhack-logo-xs.png'
import menu from '../image/menu-top-xs.png'


function Navbar() {
  return (
    <nav class="App-logo">
      <img src={logo} alt="logo"/>
      <img src={menu} alt="menu"/>
    </nav>
  );
}

export default Navbar;