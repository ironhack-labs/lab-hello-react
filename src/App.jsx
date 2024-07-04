import logo from "./assets/ironhack-logo-xs.png"
import icon from "./assets/menu-top-xs.png"

function App() {
  return (
   <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-icon">
          <img src={icon} alt="menu" />
        </div>
      </nav>
      <div className="header-content">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button className="awesome-button">Awesome!</button>
      </div>
    </header>
  );
}

export default App;