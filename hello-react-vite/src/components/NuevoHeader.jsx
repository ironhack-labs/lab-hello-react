import logoImg from "../assets/ironhackLogo.png";
import rayitasImg from "../assets/rayitas.png";

function Header() {
  return (
    <div id="header">
      <div id="nav-bar">
        <img src={logoImg} alt="logo" width="50px" />
        <img src={rayitasImg} alt="rayitas-img" width="50px" />
      </div>
      <div id="content-header">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
}

export default Header;
