import "./LandingStyles.css";
import ironhack from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
const Landing = ()=>{


return(

<div>
    <div className="black">
        <div className="ironhack">
            <img src={ironhack} />
            <h1>Say hello to ReactJS</h1>
            <p className="pTitle">you will learn how to use the most popualar frontend library,
                and become a super ninja developer.
            </p>
        </div>

        <div className="burguer" >
            <img src={menu} />
        </div>
    </div>

<div className="icons">
<div>
<img src={icon1} />
<h2>Declarative</h2>
<p>React makes it painless to create interactive UIs</p>
</div>

<div>
<img src={icon2} />
<h2>Components</h2>
<p>Build encapsulated components thstt manage their state</p>
</div>

<div>
<img src={icon3} />
<h2>Single-Way</h2>
<p>A set of immutable values are passed to the component`s</p>
</div>

<div>
<img src={icon4} />
<h2>Jsx</h2>
<p>Statically-typed,desinged to run on modern browsers
</p>
</div>

</div>

</div>



)
}




export default Landing;