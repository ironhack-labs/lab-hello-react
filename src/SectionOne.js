import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const components = [
  {
    img: <img src={icon1} alt="illustration" />,
    title: "Declarative",
    description: "React makes it painless to create interactive UIs",
    id: 1,
  },
  {
    img: <img src={icon2} alt="illustration" />,
    title: "Components",
    description: "Build encapsulated components that manage their state.",
    id: 2,
  },
  {
    img: <img src={icon3} alt="illustration" />,
    title: "Single-Way",
    description: "A set of immutable values are passed to the components.",
    id: 3,
  },
  {
    img: <img src={icon4} alt="illustration" />,
    title: "JSX",
    description: "Statically-typed, design to run on modern browsers.",
    id: 4,
  },
];

function SectionOne() {
  return (
    <div id="section-one">
      <div id="section-one-container">
        {components.map((component) => {
          return (
            <div className="compContainer" key={component.id}>
              {component.img}
              <h2>{component.title}</h2>
              <p>{component.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionOne;
