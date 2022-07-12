/*
En comentario si lo hicistéis sin componentes
*/

// export default App;
//---------------------------------------------------
// src/App.js
import "./App.css";
//load images
import logo from "./images/logo.png";
import menu from "./images/menu-top-xs.png";
import image1 from "./images/icon1.png";
import image2 from "./images/icon2.png";
import image3 from "./images/icon3.png";
import image4 from "./images/icon4.png";

//doing components
import LogoImage from "./components/LogoImage";
import MenuImage from "./components/MenuImage";
import HeaderText from "./components/HeaderText";
import HeaderButton from "./components/HeaderButton";
import MenuIcons from "./components/MenuIcons";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="headerImages">
          <LogoImage image={logo} />
          {/* <img src={logo} alt="logo" /> */}
          <MenuImage image={menu} />
          {/* <a href="/">
						<img src={menu} alt="menu" id="imageMenu" />
					</a> */}
        </div>
        <div className="headerContent">
          {/* <h1 className="headerContentH1">Say hello to ReactJS</h1>
					<p className="headerContentP">
						You will learn how to use<br /> the most popular frontend library,<br /> and become a super
						Ninja developer.
					</p> */}
          <HeaderText />
          <HeaderButton />
          {/* <a className="headerContentButton" href="/">
						Awesome!
					</a> */}
        </div>
      </header>
      <section className="section">
        <MenuIcons image={image1} />
        <MenuIcons image={image2} />
        <MenuIcons image={image3} />
        <MenuIcons image={image4} />
        {/* <div>
					<img src={image1} alt="logo" />
					<h2 className="sectionH1"> Declarative</h2>
					<p className="sectionP">
						React makes it<br /> painless to create<br /> interactive UIs
					</p>
				</div>
				<div>
					<img src={image2} alt="logo" />
					<h2 className="sectionH1">Components</h2>
					<p className="sectionP">
						Build encapsulated<br /> components that<br /> manage their state.
					</p>
				</div>
				<div>
					<img src={image3} alt="logo" />
					<h2 className="sectionH1">Single-Way</h2>
					<p className="sectionP">
						A set of immutable<br />values are passed to<br /> the component's.
					</p>
				</div>
				<div>
					<img src={image4} alt="logo" />
					<h2 className="sectionH1">JSX</h2>
					<p className="sectionP">
						Statically-typed,<br /> designed to run on<br /> modern browsers.
					</p>
				</div> */}
      </section>
    </div>
  );
}
export default App;
