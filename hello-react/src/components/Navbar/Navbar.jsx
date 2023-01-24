
import Logo from '../../images/ironhack-logo-xs.png'
import Icon from '../../images/menu-top-xs.png'


const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-2 flex justify-between items-center">
            <img src={Logo} alt="Logo" className="w-8 h-8 mr-4" />
            <div className="flex-shrink-0">
                <img src={Icon} alt="Menu icon" className="w-6 h-6 cursor-pointer" onClick={() => alert('Menu clicked')} />
            </div>
        </nav>
    );
}
export default Navbar;