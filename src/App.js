import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="under-navbar">
        <h1>Say Hello to ReactJS</h1>
        <h3>
          You will learn to use the most popular frontend library, and become a
          super Ninja Developer
        </h3>
        <button>Awesome</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
