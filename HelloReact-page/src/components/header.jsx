import ironHackImg from "../assets/ironhacklogo.png"
import rayasImg from "../assets/rayas.png"



function Header (){

return(
    <div id="main-header">
        <div id ="header-img">
        <img src={ironHackImg} alt="logo" width="50px"/>
        <img src={rayasImg} alt="imagenrayas" width= "50px"/>
        </div>
     <h1>Say hello to ReactJS</h1>
     <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
     <button>Awesome!</button>
    </div>
    
   
   
)

}

export default Header;