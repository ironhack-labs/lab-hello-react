import ironhackLogo from "../assets/ironhack-logo-xs.png"
import menuTopImg from "../assets/menu-top-xs.png"

function Header () {

    const divStyle = {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "30px",
        paddingLeft: "80px",
        paddingRight: "60px",
    }

    return (
        <div style={divStyle}>
        <img src={ironhackLogo} width="50px" alt="ironhack-logo" />
        
        <img src={menuTopImg} width="30px" height="15px" alt="menu-top" />
        </div>
    )
}
export default Header