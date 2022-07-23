import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'

const Navbar = () => {
  return (
    <nav className='navbar'> 
            <img src={logo} alt="Ironhack logo" />
            <img src={menu} alt="menu button" />
     </nav>
  )
}


export default Navbar