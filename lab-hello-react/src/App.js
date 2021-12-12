// src/App.js
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="flex flex-col content-start justify-start ">
        <Main />
      </div>
    </div>
  );
}
export default App;
