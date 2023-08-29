import Feature from "../features/Feature";
import "./FeaturesList.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

function FeaturesList() {
  const features = [
    {
      icon: icon1,
      title: "Declarative",
      text: "React makes it painless to create interactive Uls.",
    },
    {
      icon: icon2,
      title: "Components",
      text: "Build encapsulated components that manage their state.",
    },
    {
      icon: icon3,
      title: "Single-Way",
      text: "A set of immutable values are passed to the component's.",
    },
    {
      icon: icon4,
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <>
      {features.map((feature) => (
        <Feature
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
          key={feature.title}
        />
      ))}
    </>
  );
}

export default FeaturesList;
