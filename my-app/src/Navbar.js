import Logo from'./images/ironhack-logo-xs.png';
import Menu from './images/menu-top-xs.png';

function Navbar() {

   
    return (
        <div class='navbar'>
        <img class ="logo-img" src={Logo} alt="logo" />
        <img  class="menu-img" src={Menu} alt="menu" />
        <div class ='container'>
        <h2>Say hello to </h2>
        <h2>ReactJS</h2>
        <p class="topP">You will lear now to use </p>
        <p>the most popular frontend library and </p>
        <p class="bottomP">become a super ninja FrontEnd developer</p>
        <button>Awesome!</button>
        </div>
        </div>
    );
  }

  export default Navbar;