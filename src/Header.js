import './Header.css' 
import Navbar from './Navbar.js';
import Text from './Text.js'
import Button from './Button';


const Header = ()=> {
    return (
      <div className= 'Header'>
          <Navbar />
          <Text />
          <Button />
      </div>
    );
  }

  export default Header