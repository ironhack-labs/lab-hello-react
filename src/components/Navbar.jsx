import Logo from "../assets/logo/ironhack-logo-xs.png"
import MenuTop from "../assets/icons/menu-top-xs.png"

function Navbar() {
  return (
    <>
      <div id="navbar">
        <button>
          <img src={Logo}/>
        </button>
        <button>
          <img src={MenuTop}/>
        </button>
      </div>
    </>
  )
}

export default Navbar;