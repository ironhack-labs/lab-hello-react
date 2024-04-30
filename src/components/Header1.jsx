import imgLogo from "../assets/images/ironhack-logo-xs.png"
import barritaLogo from "../assets/images/menu-top-xs.png"

function Header1(){
    return(
        <header id="main-header">
            <div id="logos">
            <img src={imgLogo} width={"40px"}/>
            <img src={barritaLogo} height={"20px"} width={"20px"}/></div>
            <h1>Say hello to ReactJS</h1>
            
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <br/>
            <button>Awesome!</button>




        </header>
    )
}
export default Header1