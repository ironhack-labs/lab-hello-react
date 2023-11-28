import ImageOne from "./ImageOne"
import ImageTwo from "./ImageTwo"
import "tailwindcss/tailwind.css"

function Navbar() {
  return (
    <div id="navbar" className="bg-zinc-800 fixed inset-x-0 top-0 z-10  px-10 py-1 shadow-md border-slate-500 md:flex md:items-center md:justify-between  ">
      <ImageOne />
      <ImageTwo />
    </div>
  );
}

export default Navbar;
