import iconOne from "../../images/icon1.png";
import iconTwo from "../../images/icon2.png";
import iconThree from "../../images/icon3.png";
import iconFour from "../../images/icon4.png";
import FunctionalitiesCard from "../FunctionalitiesCard/FunctionalitiesCard";

const imageList = [iconOne, iconTwo, iconThree, iconFour];

function SecondSection() {
  return (
    <div className="SecondSection">
      <FunctionalitiesCard
        functionality={"Declarative"}
        src={iconOne}
        description={"React make sit painless to create interactive UIs."}
      />

      <FunctionalitiesCard
        functionality={"Components"}
        src={iconTwo}
        description={"Build encapsulated components that manage their state."}
      />

      <FunctionalitiesCard
        functionality={"Single-Way"}
        src={iconThree}
        description={"A set of immutable values are passed to the component's."}
      />

      <FunctionalitiesCard
        functionality={"JSX"}
        src={iconFour}
        description={"Statically-typed, designed to run on modern browsers."}
      />
    </div>
  );
}

export default SecondSection;
