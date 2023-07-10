import "./App.css";

function App() {
  return (
    <div>
      <header className="Header">
        <img id="logo" src="../src/assets/images/logo.png" alt="logo" />
        <img id="menu" src="../src/assets/images/menu.png" alt="menu" />
      </header>

      <container className="container">
        <h2>Say Hello to ReactJS</h2>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome</button>
      </container>

      <img src="../src/assets/images/icon1.png" alt="" />
      <img src="../src/assets/images/icon2.png" alt="" />
      <img src="../src/assets/images/icon3.png" alt="" />
      <img src="../src/assets/images/icon4.png" alt="" />
    </div>
  );
}

export default App;
