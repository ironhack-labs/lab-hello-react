import "./Cards.css";
import icon1 from "../icon1.png";
import icon2 from "../icon2.png";
import icon3 from "../icon3.png";
import icon4 from "../icon4.png";

function Cards() {
  const reactChars = [
    {
      declarative: {
        title: "Declarative",
        description: "React makes it painles to create interactive UIs",
      },
      componentes: {
        title: "Components",
        description: "Build encapsulated components that manage their site",
      },
      singleway: {
        title: "Single-Way",
        description: "A set of immutable values are passed to the component's",
      },
      jsx: {
        title: "JSX",
        description: "Statically-typed designed to run on modern browsers",
      },
    },
  ];

  return (
    <div className="card-container">
      <div>
        <img src={icon1} alt="" />
        <h3>{reactChars[0].declarative.title}</h3>
        <p>{reactChars[0].declarative.description}</p>
      </div>
      <div>
        <img src={icon2} alt="" />
        <h3>{reactChars[0].componentes.title}</h3>
        <p>{reactChars[0].componentes.description}</p>
      </div>
      <div>
        <img src={icon3} alt="" />
        <h3>{reactChars[0].singleway.title}</h3>
        <p>{reactChars[0].singleway.description}</p>
      </div>
      <div>
        <img src={icon4} alt="" />
        <h3>{reactChars[0].jsx.title}</h3>
        <p>{reactChars[0].jsx.description}</p>
      </div>
    </div>
  );
}

export default Cards;
