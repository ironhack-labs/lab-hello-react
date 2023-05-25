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
      <div className="under-header">
        <h1 className="text-header">Say Hello to ReactJS</h1>
        <h3 className="text-h3">
          You will learn to use the most popular frontend library, and become a
          super Ninja Developer
        </h3>
        <button class="btn-awesome">Awesome</button>
      </div>
      </div>
    </div>
    <div className="container-footer">
    <Footer />
    </div>
    </div>
  );
}

export default App;
