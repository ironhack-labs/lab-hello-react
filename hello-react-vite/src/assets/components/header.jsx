import image5 from "../images/icon5.png"
import image6 from "../images/icon6.png"

function Header(){
return (
    <div id="main-header">
    <div id="nav-bar">
    <img src={image6} alt="image6" height="50px" />
    <img src={image5} alt="image5" height="10px" />
    </div>
    <h1 id="main-text">Say hello to ReactJS</h1>
    <p id="text1">You will learn how to use the most popular frontend library, and become a Super Ninja developer.</p>
    <button id="button">Awesome!</button>
    </div>
)
}
export default Header