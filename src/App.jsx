import "./App.css";
import HeaderComponent from "./assets/components/HeaderComponent";
import ContentComponent from "./assets/components/ContentComponent";
import FeatureComponent from "./assets/components/FeatureComponent";

function App() {
  const features = [
    {
      image: "/src/assets/images/icon1.png",
      title: "Declarative",
      description: "React makes it painless to create interactive UIs.",
    },
    {
      image: "/src/assets/images/icon2.png",
      title: "Components",
      description: "Build encapsulated components that manage their state.",
    },
    {
      image: "/src/assets/images/icon3.png",
      title: "Single-Way",
      description: "A set of immutable values are passed to the component's.",
    },
    {
      image: "/src/assets/images/icon4.png",
      title: "JSX",
      description: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <>
      <div className="App">
        <HeaderComponent />
        <ContentComponent />
      </div>
      <div className="features">
        {features.map((item) => (
          <FeatureComponent
            img={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;
