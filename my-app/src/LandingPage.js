
import './LandingPage.css'
import iconIronhack from "./images/ironhack-logo-xs.png"
import menuTopIcon  from "./images/menu-top-xs.png"
import icon1        from "./images/icon1.png"
import icon2        from "./images/icon2.png"
import icon3        from "./images/icon3.png"
import icon4        from "./images/icon4.png"


const LandingPage = () => {

    return(
        <div>
            <div className="background">
                <div className="headerIcons" >
                    <img src={iconIronhack} alt="Icon ironhack" />
                    <img id="menuIcon" src={menuTopIcon} alt="Menu icon" />
                </div>
                <div className="infoHeader" >
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a Super Ninja developer.</p>
                    <button>Awesome!</button>
                    <br />
                </div>
                
            </div>
            <div className="footer" >
                <div>
                    <img src={icon1} alt="icon" />
                    <h2>Declarative</h2>
                    <p>React makes it <br /> painless to create <br /> interactive Uls.</p>
                </div>
                <div>
                    <img src={icon2} alt="icon" />
                    <h2>Components</h2>
                    <p>Build encapsulated <br /> components that <br /> manage their state.</p>
                </div>
                <div>
                     <img src={icon3} alt="icon" />
                    <h2>Single-way</h2>
                    <p>A set of immutable <br /> values are passed to <br /> the component´s.</p>
                </div>
                <div>
                    <img src={icon4} alt="icon" />
                    <h2>JSX</h2>
                    <p>Statically-typed, <br /> designed to run on <br /> modern browsers.</p>
                </div>
            </div>
            
        </div>
        
    )
}





export default LandingPage