import NavBar from "./navbar";
import Content from "./content";

function Header() {
    return (
      <header>
      <div class="container">
        <br/><br />
        <NavBar />
        <Content />
        </div>
      </header>
    );
  }
  
  export default Header;