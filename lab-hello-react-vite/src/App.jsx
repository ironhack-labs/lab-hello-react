import "./App.css";
import HeroBannerLeft from "./components/HeroBannerLeft";
import Tile from "./components/Tile";
import Navbar from "./components/navbar/Navbar";

function App() {
  const tileData = [
    {
      tileImgSrc: "/src/assets/icon1.png",
      tileImgAlt: "Icon Benefit 1: Declarative",
      tileTitle: "Declarative",
      tileText: "React makes it painless to create interactive UIs.",
    },
    {
      tileImgSrc: "/src/assets/icon2.png",
      tileImgAlt: "Icon Benefit 2: Components",
      tileTitle: "Components",
      tileText: "Build encapsulated components that manage their state",
    },
    {
      tileImgSrc: "/src/assets/icon3.png",
      tileImgAlt: "Icon Benefit 3: Single-Way",
      tileTitle: "Single-Way",
      tileText: "A set of immutable values are passed to the component's.",
    },
    {
      tileImgSrc:'/src/assets/icon4.png',
      tileImgAlt:'Icon Benefit 4: JSX',
      tileTitle: 'JSX',
      tileText:'Statically-typed, designed to run on modern browsers.',
    }
  ];


  return (
    <>
      <div className="App">
        <header>
          <Navbar />
          <HeroBannerLeft />
        </header>
        <section id="react-benefits">
        <div className="tileGrid">
          {tileData.map((data, index) => (
            <Tile 
            key={index}
            {...data}
            />
          ))}
        </div>
        </section>
      </div>
    </>
  );
}

export default App;
