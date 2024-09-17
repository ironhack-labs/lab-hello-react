import logo from '../images/Ironhack Student Portal.png'
import menu from '../images/menu-top-xs.png'


function Header() {
  return (
      <header className="App-header">
      <nav >
        <img src={logo} className="App-logo" alt="logo"/>
        <img src={menu} className="Menu-logo" alt="logo"/>        
      </nav>
        <div className="Text-p">
        <h1>Say hello to <br/> ReactJS</h1>
        <p>You will learn how to use <br/>
        the most popular frontend library, <br/>
        and become super Ninja developer.</p>
        <button> Awesome!</button>
        </div>
        </header>
  );
}
export default Header;
