import logoIronhack from "../assets/ironhack-logo-xs.png"
import logoMenu from "../assets/menu-top-xs.png"

function Botonera(){
    return (
        <div className="botonera">
            <img src= {logoIronhack} alt="" />
            <img src={logoMenu} alt="" />
        </div>
    )
}

export default Botonera