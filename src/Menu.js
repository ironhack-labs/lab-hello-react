import logo from './images/logoIronhack.png';
import menu from './images/menu-bar.png';

function Menu(){
    return (
        <div className='menu'>
            <img src={logo} alt="logo" /><img src={menu} alt="menu" />
        </div>
    )
 
}

export default Menu;