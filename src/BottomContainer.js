import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function BottomContainer (){
    return(
        <div className="icons">
            <div className="eachIcon">
                <img src={icon1} className='icon' alt=""/>
                <h4>Declarative</h4>
                <p>React makes it
                    painless to create
                    interactive UIs.
                </p>
            </div>
            <div className="eachIcon">
                <img src={icon2} className='icon' alt=""/>
                <h4>Components</h4>
                <p>Build encapsulated
                    components that
                    manage their state.
                </p>
            </div>
            <div className="eachIcon">
                <img src={icon3} className='icon' alt=""/>
                <h4>Single-Way</h4>
                <p>A set of immutable
                    values are passed to
                    the component's.
                </p>
            </div>
            <div className="eachIcon">
                <img src={icon4} className='icon' alt=""/>
                <p>Statically-typed,
                    designed to run on
                    modern browsers.
                </p>
            </div>
        </div>
    );
}
export default BottomContainer;