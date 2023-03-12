import Icon from "./Icon";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";


function IconList() {
  return (
    <div className="cardsContainer d-flex justify-content-evenly m-3 px-5">
      <Icon
        img={icon1}
        name="Declarative"
        text="React makes it painless to create interactive UIs"
      />
      <Icon
        img={icon2}
        title="Components"
        text="Build encapsulated components that manage their state"
      />
      <Icon
        img={icon3}
        name="Single-Way"
        text="A set of immutable values are passed to the component's"
      />
      <Icon
        img={icon4}
        name="JSX"
        text="Statically-typed, designed ttu run on modern browsers"
      />
    </div>
  );
}

export default IconList;
