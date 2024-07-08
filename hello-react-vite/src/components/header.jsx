import imag1 from "../assets/images/image1.png"
import imag2 from "../assets/images/image2.png"

function Header() {
  return (
    <div id= "main-header">
         <div id= "nav-bar">
  <img src={imag1} alt="" width={"60px"} height={"60px"}/>
  <img src={imag2} alt="" width={"60px"} height={"60px"}/>
    </div>
      <h1 id = "main-text">Say hello to ReactJS</h1>
      <p id= "parrafo">You will learn how to use
        the most popular frontend library.
        and become a super Ninja developer.
      </p>
      <br />
      <button>Awesome!</button>
      </div>
  )
}

export default Header;
