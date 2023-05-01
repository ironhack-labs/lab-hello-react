import "./App.css";
import Navbar from "./components/Navbar";
import MyButton from "./components/MyButton";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
    return (
        <div className="App">
            <div className="say">
                <Navbar />

                <h1>Say Hello to React js</h1>
                <p>
                    You will learn hoW to use the most popular frontend
                    library,and become a super Ninja developer
                </p>
                <MyButton />
            </div>
            <img src={icon1} />
            <h2>Declarative</h2>
            <p>react makes it painless to create interactive UIs</p>
            <img src={icon2} />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
            <img src={icon3} />
            <h2>Single way</h2>
            <p>A set.....</p>
            <img src={icon4} />
            <h2>JSX</h2>
            <p>Statically-typed,designed to run on modern browsers</p>
        </div>
    );
}

export default App;
