import logoImage from "../assets/ironhack-logo-xs.png";
import menuImage from "../assets/menu-top-xs.png"

function Header() {

return(

    <section className="container-header">
        <nav id="nav-bar">
            <img src={logoImage} alt="logo" />
            <img src={menuImage} alt="buscador" id="img-menu" />
        </nav>
        <div className="text-header">
            <h1 >Say hello to ReactJS</h1>
            <p >You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button id="btn-section" >Awesome!</button>
        </div>
    </section>

);

}

export default Header;