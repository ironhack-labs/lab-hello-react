import './App.css';
import Button from './components/Button';
import Feature from './components/Feature';
import FeatureList from './components/FeatureList';
import Navbar from './components/Navbar';

import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="hero">
        <h1 className="hero__title">Say hello to ReactJS</h1>
        <p className="hero__subtitle">You will learn how to use the most popular frontend library and become a Super Ninja developer.</p>
        <Button url="#" text="Awesome!" />
      </section>
      <section className="about">
        <FeatureList>
          <Feature 
            imgPath={icon1}
            alt="Declarative"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <Feature 
            imgPath={icon2}
            alt="Components"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Feature 
            imgPath={icon3}
            alt="Single-Way"
            title="Single-Way"
            description="A set of immutable variables are passed to the components."
          />
          <Feature 
            imgPath={icon4}
            alt="JSX"
            title="JSX"
            description="Statically typed, designed to run on modern browsers."
          />
        </FeatureList>

      </section>
    </div>
  );
}

export default App;
