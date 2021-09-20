import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png';
import Headline from './Headline';
import Button from './Button';

function Layout(props) {
    return (
        <>
            <div className="header">
                <nav className="navbar">
                    <img id="logo" src={logo} alt="logo" />
                    <img id="menu" src={menu} alt="menu" />
                </nav>
                <div className="headline">
                    <Headline />
                    <Button />
                </div>
            </div>

            {props.children}

            <footer className="sticky-bottom">
                <p>By Laura Alabau</p>
            </footer>
        </>    
    );
  }
  
  export default Layout;
  