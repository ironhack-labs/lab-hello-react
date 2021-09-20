import "./App.css"
import { Card } from "./components/card"
import { SuperiorPart } from "./components/main-content"

import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

console.log(icon1)

const card1 = {
	img: icon1,
	title: "Declarative",
	paragraph: "React makes it painless to create interactive.",
}
const card2 = {
	img: icon2,
	title: "Components",
	paragraph: "Build encapsulated components that manage their state.",
}
const card3 = {
	img: icon3,
	title: "Single-way",
	paragraph: "A set of immutable values are passed to the components.",
}
const card4 = {
	img: icon4,
	title: "JSX",
	paragraph: "Statically-typed, designed to run on modern browsers.",
}

function App() {
	return (
		<div className="App">
			<SuperiorPart />
			<div className="gallery">
				<Card card={card1} />
				<Card card={card2} />
				<Card card={card3} />
				<Card card={card4} />
			</div>
		</div>
	)
}
export default App
