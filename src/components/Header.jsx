import logo from "../assets/ironhack-logo-xs.png";
import menu from "../assets/menu-top-xs.png";

const headerStyle = {
  backgroundColor: "darkgrey",
  display: "flex",
  flexDirection: "column",
};
const nav = {
  display: "flex",
  margin: "20px 30px 0 50px",
  justifyContent: "space-between",
};
const headerDiv1 = {
  display: "flex",
  justifyContent: "flex-start",
  textAlign: "left",
  marginLeft: "50px",
  width: "500px",
};
const h2style = {
  backgroundColor: "white",
  textAlign: "center",
  borderRadius: "5px",
  width: "170px",
  padding: "10px 0",
  color: "blue",
  fontSize: "1.2em",
  marginBottom: "60px",
};
const h4style = {
  margin: "0",
  marginBottom: "40px",
  width: "50%",
  textAlign: "start",
};
function Header() {
  return (
    <header id="main-header" style={headerStyle}>
      <nav id="navbar" style={nav}>
        <div id="logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="menu">
          <img src={menu} alt="menu" />
        </div>
      </nav>
      <div style={headerDiv1}>
        <div>
          <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
            Say Hello to ReactJS
          </h1>
          <h4 style={h4style}>
            You will learn how to use the most popilar frontend library, and
            become a Ninja developer
          </h4>
          <h2 style={h2style}>Awesome!</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
