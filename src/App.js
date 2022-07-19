import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Perks from "./components/Perks";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Header />
			</div>

			<Perks />
		</div>
	);
}

export default App;
