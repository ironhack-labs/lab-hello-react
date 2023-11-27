import '/public/reset.css';
import './App.css';
import './components/Card/styles.css';
import Card from './components/Card';
<style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');</style>;

function App() {
  return (
    <>
      <div className="banner">
        <div className="navbar">
          <img src="../src/assets/ironhack-logo-xs.png" alt="IronHack Logo" />
          <img src="../src/assets/menu-top-xs.png" alt="Hamburger Menu" />
        </div>
        <div className="textAndButton">
          <div className="title">
            <h1>Say hello to</h1>
            <h1>ReactJS</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <p>Praesent porttitor cursus tellus, eget efficitur diam scelerisque sed. </p>
          <p>Quisque hendrerit sem congue, placerat massa id, pharetra quam.</p>

          <button className="button">Awsome!</button>
        </div>

        <div className="cards-section ">
          <div className="card">
            <Card image="src/assets/icon1.png" title="Declarative" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Card image="src/assets/icon2.png" title="Components" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Card image="src/assets/icon3.png" title="Single-Way" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
          <div className="card">
            <Card image="src/assets/icon4.png" title="JSX" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
