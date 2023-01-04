import "./App.scss";
import MainSection from "./components/mainSection/mainSection.component";
import Feature from "./components/feature/feature.component";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
const details = [
  {
    src: icon1,
    title: "Declerative",
    text: "React makes it painless to create interactive UIs",
  },
  {
    src: icon2,
    title: "Components",
    text: "Build encapsulated components that manage their state",
  },
  {
    src: icon3,
    title: "Single-Way",
    text: "A set of immutable values are passed to the component's",
  },
  {
    src: icon4,
    title: "JSX",
    text: "Statically-typed, designed to run on modern browsers",
  },
];

function App() {
  return (
    <div className="App">
      <MainSection />
      <div className="container">
        {details.map((detail, index) => {
          return (
            <Feature
              key={index}
              src={detail.src}
              title={detail.title}
              text={detail.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
