import "./App.css";
import logo from "./assets/ironhack-logo-xs.png";
import menu from "./assets/menu-top-xs.png";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <main className="background pb-5">
        <Navbar />
        <section className="text-section pt-5 py-5">
          <div>
            <h1>
              Say hello to
              <br />
              ReactJS
            </h1>
            <p>
              You will learn how to use <br />
              the most popular frontend library,
              <br />
              and become a super Ninja developer.
            </p>
            <button>Awesome!</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;