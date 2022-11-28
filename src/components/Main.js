import IronPic from "../images/ironhack-logo-xs.png";
import MenuLogo from "../images/menu-top-xs.png";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";

function Main () {
    return(
        <div>

            <div className="navbar">
                <div>
                    <img src={IronPic} alt="ironhack-logo" id="ironhackLogo"/>
                </div>
                <div>
                    <img src={MenuLogo} alt="menu-logo" id="menukLogo"/>
                </div>
            </div>

            <div className="body-content">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use <br/>the most popular frontend library,<br/> and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>

            <div className="footer">

                <div className="card">
                    <img src={Icon1} alt="Icon1"/>
                    <h2>Declarative</h2>
                    <p>React makes it paintless to create interactive UIs.</p>
                </div>

                <div className="card">
                    <img src={Icon2} alt="Icon2"/>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state</p>
                </div>

                <div className="card">
                    <img src={Icon3} alt="Icon3"/>
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component´s</p>
                </div>

                <div className="card">
                    <img src={Icon4} alt="Icon4"/>
                    <h2>JSX</h2>
                    <p>Statically-typed, desigend to run on modern browsers.</p>
                </div>

            </div>
        </div>
    );
}



export default Main;
