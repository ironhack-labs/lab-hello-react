import Fifth from "./5th.jpg";
import ImageOne from "./5th.jpg"
import Sixth from "./6th.jpg";
import ImageTwo from "./6th.jpg"
import "tailwindcss/tailwind.css"

function Navbar() {
  return (
    <div id="navbar" className="bg-zinc-800 fixed inset-x-0 top-0 z-10  px-10 py-1 shadow-md border-slate-500 md:flex md:items-center md:justify-between  ">
      <Fifth />
      <Sixth />
    </div>
  );
}

export default Navbar;