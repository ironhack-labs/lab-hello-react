import logoIronhack from "../assets/ironhack-logo-xs.png"
import menuImg from "../assets/menu-top-xs.png"

function Header (){

    return(
        <>
        <header>
        <section>
            <img src={logoIronhack} alt="logo" height={30} />
            <img src={menuImg} alt="barras" height={8} />
        </section>
<h1>Say hello to ReactJS</h1>
<p>You will learn how to use the most popular fronted library, and become a super Ninja developer.</p>
<button>Awesome!</button>
</header>
</>
    )


}

export default Header