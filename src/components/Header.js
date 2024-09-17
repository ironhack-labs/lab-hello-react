import Navbar from "./Navbar";
import Button from "./Button";


function Header() {
    return (
        <header className="App-header">  
        <Navbar/>
        <div className="introtxt">
        <h1>
            Say hello to ReactJS
        </h1>
        <p>
          You will learn how to use the most popular frontend library and become a super Ninja developer.
        </p>
        <Button/>
        </div>

      </header>
    );
  }
  
  export default Header;
  

