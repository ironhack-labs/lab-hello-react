import './App.css';
import ironhackLogo from "./images/ironhack-logo-xs.png"
import dropdownMenue from "./images/menu-top-xs.png"
import picture1 from "./images/icon1.png"
import picture2 from "./images/icon2.png"
import picture3 from "./images/icon3.png"
import picture4 from "./images/icon4.png"


function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img className="imageNavbar" src={ironhackLogo} alt="bla"/>
        <img className="imageNavbar" src={dropdownMenue} height="10px" alt="" />
      </div>

      <div className="flexbox">
        <h1 max-width="10px">Say hello to ReactJs</h1>
        <h2 max-width="10px">You will learn how to use the most popular frontend library and become a super Nunja developer</h2>
        <button className="button"> Awesome!</button>
      </div>

      <div className="flexbox2">
        <img src={picture1} alt="bla" />
        <img src={picture2}  alt="bla" />
        <img src={picture3}  alt="bla" />
        <img src={picture4} alt="bla" />

      </div>





    </div>



  );
}
export default App;





