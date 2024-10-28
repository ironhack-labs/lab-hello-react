import { Card } from "./Card";

import firstImg from "../assets/icon1.png";
import secondImg from "../assets/icon2.png";
import thirdImg from "../assets/icon3.png";
import fourthImg from "../assets/icon4.png";

export const Section1 = () => {
  const text1 = "React makes it painless to create interactive UIs.";
  const text2 = "Build encapsulated components that manage their state.";
  const text3 = "A set of immutable values are passed to the components.";
  const text4 = "Statically-typed, designed to run on modern browsers.";
  return (
    <div id="section1">
      <Card imgLink={firstImg} text={text1} heading="Declarative" />
      <Card imgLink={secondImg} text={text2} heading="Components" />
      <Card imgLink={thirdImg} text={text3} heading="Single-Way" />
      <Card imgLink={fourthImg} text={text4} heading="JSX" />
    </div>
  );
};
