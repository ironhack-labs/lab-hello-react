import "./App.css";
import PropertyCard from "./components/PropertyCard";
import Welcome from "./components/Welcome";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const propertiesArray = [
  {
    image: icon1,
    title: "Declarative",
    description: "React make it painless to create interactive UIs",
  },
  {
    image: icon2,
    title: "Components",
    description: "Build encapsulated components that manage their state",
  },
  {
    image: icon3,
    title: "Single-Way",
    description: "A set of immutable values are passed to the component´s",
  },
  {
    image: icon4,
    title: "JSX",
    description: "Statically-typed,designed to run on modern browsers",
  },
];

function App() {
  return (
    <div className="App">
      <Welcome />
      <div className="properties-container">
      {propertiesArray.map((property,i) =>
        <PropertyCard property={property} key={i}/>
      )}
      </div>
    </div>
   



  );
}

export default App;
