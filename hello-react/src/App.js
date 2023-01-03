import "./App.css";
import SecondPannel from "./SecondPannel";

const dataMain = [
  {
    icon: "images/icon1.png",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    icon: "/images/icon2.png",
    title: "Components",
    description: "Build encapsulated components that manage their state.",
  },
  {
    icon: "/images/icon3.png",
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's.",
  },
  {
    icon: "/images/icon4.png",
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers.",
  },
];
export default function App() {
  return (
    <div className="body">
      <div className="backGroundTop">
        <div className="topContainer">
          <div className="nav ">
            <img
              className="iconIronhack"
              src="/images/ironhack-logo-xs.png"
              alt="ironLogo"
            ></img>
            <img
              className="iconMenu"
              src="/images/menu-top-xs.png"
              alt="menuLogo"
            ></img>
          </div>

          <div className="innerBox">
            <div className="titleLanding">Say hello to ReactJs</div>

            <div className="textPres">
              <p>You will learn how to use</p>
              <p>the most popular frontend library,</p>
              <p>and become a super Ninja developer.</p>
            </div>

            <button className="awesomeButton">Awesome!</button>
          </div>
        </div>

        <div>
          <div className="bottomPannel">
            {dataMain.map((e) => {
              return <SecondPannel {...e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
