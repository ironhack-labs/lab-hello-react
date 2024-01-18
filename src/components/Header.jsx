import Ironhack from "../assets/ironhack.png"
import ReactPicture from "../assets/react.svg"
import Repair from "../assets/repair.png"
import Play from "../assets/playSymbol.png"
import Settings from "../assets/settings.png"
import Tag from "../assets/tag.png"



function Header() {
    return (
    <div>
        <img src={Ironhack} alt="Ironhack symbol"></img>
        <img src={ReactPicture} alt ="React symbol"></img>
        <img src={Repair} alt ="Repair symbol"></img>
        <img src={Play} alt ="Play symbol"></img>
        <img src={Settings} alt ="Settings symbol"></img>
        <img src={Tag} alt ="Tag symbol"></img>
    </div>
    
    )
}

export default Header