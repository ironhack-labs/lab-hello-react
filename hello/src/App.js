import "./App.css";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import Features from "./components/Features";

function App() {
  return (
    <main className="App">
      <section className="top-page">
        <nav>
          <img src={logo} alt="" />
          <img src={menu} alt="" />
        </nav>

        <div className="text-top-page">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
      </section>

      <Features />
    </main>
  );
}

export default App;
