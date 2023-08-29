
import ironhackLogo from '../../../public/images/Logo.png'
import bar from '../../../public/images/bar.png'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <img src={ironhackLogo} alt="" />
            <img src={bar} alt="" />
        </nav>
    )
}

export default Navbar
