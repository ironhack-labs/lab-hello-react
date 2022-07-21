import logo from "../images/ironhack-logo-xs.png";
import bars from "../images/menu-top-xs.png";
import wrench from "../images/icon1.png";
import play from "../images/icon2.png";
import cog from "../images/icon3.png";
import text from "../images/icon4.png";

function FrontPage() {
	return (
		<div className="Home">
			<div className="App-header">
				<nav>
					<div className="App-logo">
						<img src={logo} alt="logo" />
					</div>
					<img src={bars} alt="nav button" className="burger-icon" />
				</nav>
				<div className="left">
					<h1>Say hello to ReactJS</h1>
					<p>
						You will learn how to use the most popular frontend library, and
						become a super Ninja developer.
					</p>

					<button className="AwesomeButton">Awesome!</button>
				</div>
			</div>

			<div className="Icons">
				<div>
					<img src={wrench} alt="1" />
					<h2>Declarative</h2>
					<p> React makes it painless to create interactive UIs.</p>
				</div>

				<div>
					<img src={play} alt="2" />
					<h2>Components</h2>
					<p>Build encapsulated components that manage their state.</p>
				</div>

				<div>
					<img src={cog} alt="3" />
					<h2>Single-Way</h2>
					<p>A set of immutable values are passed to the components.</p>
				</div>

				<div>
					<img src={text} alt="4" />
					<h2>JSX</h2>
					<p>Statically-typed, designed to run on modern browsers.</p>
				</div>
			</div>
		</div>
	);
}

export default FrontPage;
