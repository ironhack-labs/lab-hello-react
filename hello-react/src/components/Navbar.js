import image01 from '../images/lp-image01.jpg'
import image02 from '../images/lp-image02.png'



function Navbar() {
    return (
        <nav>
            <div id="navbar">
                <img src={image01} alt=""></img>
            </div>
            <div>
                <img src={image02} alt=""></img>
            </div>
        </nav>
    )
}

export default Navbar;