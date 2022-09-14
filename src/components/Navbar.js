import ImageLogo from "./ImageLogo";
import ImageMenu from "./ImageMenu";
import './Navbar.css'
function Navbar(){
    return(
      <nav id="navbar">
        <ImageLogo />
        <ImageMenu />
      </nav>
    )
}
export default Navbar