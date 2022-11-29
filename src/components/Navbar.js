import IcoPhoto from "../images/ico.png"
import MenuPhoto from "../images/menu.png"
//1. Crear funcion

function Navbar(){
    return(
        <nav>
        <img className="ico" src={IcoPhoto} alt="ico Ironhack"></img>
        <div>
            <img className="ico" src={MenuPhoto} alt="Menu"></img> 
        </div>
        </nav>
    )
}
export default Navbar;