
import ironhack from "../images/ironhack.png";
import menu from "../images/menu.png"

function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <img className="scale-50" src={ironhack} alt="logo" />
      </div>
      <div>
        <img className="scale-50" src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
