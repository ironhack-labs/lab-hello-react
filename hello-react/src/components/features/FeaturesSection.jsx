import FeaturesCard from "./FeaturesCard";
import declarativeIcon from "../../assets/icon1.png";
import componentsIcon from "../../assets/icon2.png";
import singleIcon from "../../assets/icon3.png"
import jsxIcon from "../../assets/icon4.png"

function FeaturesSection( { className = "" }) {
    return (
        <div className={`d-flex justify-content-around py-3 ${className}`}>
            <FeaturesCard src = {declarativeIcon} title = "Declarative" description ="React makes it painless to create interactive UIs." />
            <FeaturesCard src = {componentsIcon} title = "Components" description ="Build encapsulated components that manage their state" />
            <FeaturesCard src = {singleIcon} title = "Single-Way" description ="A set of immutable values are passed to the component's" />
            <FeaturesCard src = {jsxIcon} title = "JSX" description ="Statically-typed designed to run on modern browsers." />
        </div>
    )
}

export default FeaturesSection;