import img1 from "../images/icon1.png"
import img2 from "../images/icon2.png"
import img3 from "../images/icon3.png"
import img4 from "../images/icon4.png"


function DisplayImages(){
return(
    <div>
            <div className="firstPart">
            <nav className="navBar">
                <img className="ironicon" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="" />
                <img className="home" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="" />
            </nav>
            <div className="content">
                <h1>Say hello to ReactJs</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
            </div>



        <div className="icons">
           <div className="divInside">
        <img src={img1} alt="image1" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactiove UIs.</p>
       </div>
       <div className="divInside"> 
        <img src={img2} alt="image2" />
        <h2>Components</h2>
        <p>Buils encapsulated components that manage their state.</p>
       </div>
       <div className="divInside">
        <img src={img3} alt="image3" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
       </div>
       <div className="divInside">
        <img src={img4} alt="image4" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
       </div>
</div>


    </div>
)
}

export default DisplayImages 