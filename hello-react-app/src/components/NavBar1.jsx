import menu from "../assets/menu-top-xs.png"
import ironHack from "../assets/ironhack-logo-xs.png"

function Navbar() {

    return (
      <nav>
        
        <div
            class = "image"
            style = {{
               height: "600px",
               width: "550px",
               backgroundImage: "../assets/react.svg", 
                backgroundSize: "contain",  backgroundRepeat: "no-repeat",
            }}>
         
        
          <img id="nav-img" src={ironHack} alt="navbar"/> 
        
        
        <img
          id="nav-img"
          src={menu}
          alt="navbar"
        />
        <p>Say Hello React to React JS</p>

        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
  
