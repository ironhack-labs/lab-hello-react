import declarativeIcon from "../assets/icon1.png";
import componentsIcon from "../assets/icon2.png";
import singleWayIcon from "../assets/icon3.png";
import jsxIcon from "../assets/icon4.png";
import Specification from "./specification";

function SpecsList() {
    return (
        <div id="spec-list-container">
            <ul>
                <Specification img={declarativeIcon} title="Declarative" text="React makes it painless to create interactive UIs."/>
                <Specification img={componentsIcon} title="Components" text="Build encapsulated components that manage their stat"/>
                <Specification img={singleWayIcon} title="Single-Way" text="A set of immutable values are passed to the component's"/>
                <Specification img={jsxIcon} title="JSX" text="Statically-typed, designed to run on modern browsers."/>
            </ul>
        </div>
    );
}

export default SpecsList;