import SegmentCard from "./SegmentCard";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function Segments() {
  return (
    <div className="segments">
      <SegmentCard
        image_source={icon1}
        image_desc="gear_icon"
        title="Decarative"
        text="React makes it painless to create interactive UIs."
      />
      <SegmentCard
        image_source={icon2}
        image_desc="laptop_icon"
        title="Components"
        text="Build encapsulated components that manage their state."
      />
      <SegmentCard
        image_source={icon3}
        image_desc="computer_icon"
        title="Single-Way"
        text="A set of immutable values are passed to the component's."
      />
      <SegmentCard
        image_source={icon4}
        image_desc="coding_icon"
        title="JSX"
        text="Statically-typed, designed to run on modern browsers."
      />
    </div>
  );
}

export default Segments;
