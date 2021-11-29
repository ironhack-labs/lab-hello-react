import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar.js";
import Text from "./text.js";
import Button from "./button.js";

function App() {
	return (
		<div className="App">
			<div class="background">
				<nav class="navbar">
					<div class="image-nav1">
						<img
							src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
							alt="logo"
						/>
					</div>
					<div class="image-nav2">
						<img
							src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png
"
							alt=""
						/>
					</div>
				</nav>
				<div class="text">
					<Text />
				</div>
				<div>
					<Button />
				</div>
			</div>
			<div class="images">
				<div class="image1">
					<img
						src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png
"
						alt=""
					/>
					<p>
						<b>Declarative</b>
						React make it painless..
					</p>
				</div>
				<img
					src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png
"
					alt=""
				/>
				<img
					src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png
"
					alt=""
				/>
				<img
					src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png
"
					alt=""
				/>
			</div>
			<div></div>
			<div></div>
		</div>
	);
}

export default App;
