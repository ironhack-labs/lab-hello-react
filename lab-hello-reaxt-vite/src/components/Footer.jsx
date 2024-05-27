import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

export const Footer = () => {
    return <div id="footer">
        <img src={icon1} alt= "icon1" /> 
        <h3> Declarative</h3>
        <p>React make it painless to create interactiv Uis.</p>
        <img src={icon2} alt="icon2" />
        <h3>components</h3>
        <p>Build encapsulated components that manage their state</p>
        <img src={icon3} alt = "icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable value are passed to the component's</p>
        <img src={icon4} alt = "icon4" />
        <h3>JSX</h3>
        <p>statically typed desing to run on modern browsers</p>
    </div>;

  };
  export const Header = () => {
    return <div>Header</div>;
  };