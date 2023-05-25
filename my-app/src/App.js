import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header.jsx";
import Footer from "./component/footer.jsx";

function App() {
  return (
    <div className="App">
    <div className="container-fluid" style={{ backgroundColor: "#1F2535" }}>
    <div className="container">
      <Header />
      <div id="under-navbar" className="w-50 py-5">
        <h1 className="text-white text-xl">Say Hello to ReactJS</h1>
        <h3 className="text-white fs-4 my-3">
          You will learn to use the most popular frontend library, and become a
          super Ninja Developer
        </h3>
        <button class="btn btn-light fs-5 px-4 py-3 rounded-1 my-4">Awesome</button>
      </div>
      </div>
    </div>
    <div className="container py-5">
    <Footer />
    </div>
    </div>
  );
}

export default App;
