import ironhacklogo from '../../assets/ironhack-logo-xs.png'
import menu from '../../assets/menu-top-xs.png'

function NavBar(){
return (<div id = "navbar">
        <img id = "menuicon" src={menu}></img>
        <img src={ironhacklogo}></img>
    </div>)
}

export default NavBar;