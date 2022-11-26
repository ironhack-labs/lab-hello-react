// Import images from  images folder
import Logo from '../images/ironhack-logo-xs.png'
import Menu from '../images/menu-top-xs.png';

// Import Componetes 

import Content from './Content-Header';


function Header(){
    return(
        <header>
            <section className="header-wrapper">
                <nav>
                    <img src={Logo} alt='Iron-hack Logo'></img>
                    <img className="burger-icon" src={Menu} alt="Menu" ></img>
                </nav>
                <Content/>
            </section>
        </header>


    );
}

export default Header;