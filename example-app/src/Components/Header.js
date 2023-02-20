import Button from "./Button.js";
import Navbar from "./Navbar.js";

function Header() {
  return (
    <div className="header-content">
      <Navbar />
      <h1>Say hello to ReactJS</h1>
      <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
      <Button
        text="Awesome!"
        url="https://beta.reactjs.org/"
      />
    </div>
  );
}

export default Header;
