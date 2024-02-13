import imgHeder from "../assets/ironhack-logo-xs.png"
import imgIcono from "../assets/menu-top-xs.png"

const style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "50px",

}


function Header (){
    return(
        <div style={style}>
            <img  src={imgHeder} alt="menu-icon" />
            <img  src={imgIcono} alt="icono" />

        </div>
       
    )
}

export default Header