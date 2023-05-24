import ironhack from "../images/ironhack.png";
import menu from "../images/menu.png";

function Navbar() {
  return (
    <div className="flex flex-row justify-between p-6 px-11">
      <div>
        <img className="w-14" src={ironhack} alt="logo" />
      </div>
      <div>
        <img className="w-14" src={menu} alt="menu" />
      </div>
    </div>
  );
}

export default Navbar;
