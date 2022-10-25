import IronhackLogo from '../images/ironhack-logo-xs.png';
import MenuToggle from '../images/menu-top-xs.png';

console.log(IronhackLogo);

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={IronhackLogo} alt="logo" />
        <img src={MenuToggle} alt="logo" />
      </nav>
      <div className="heading">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.
        </p>
        <button className="header-button">Awesome!</button>
      </div>
    </header>
  );
}
export default Header;
