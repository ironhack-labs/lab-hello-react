import './App.css';
import React from 'react';
import Header from './Header';
import HeroText from './HeroText';
import Feature from './Feature';

const featuresArray = [
  {
    title: 'Declarative',
    image: './images/icon1.png',
    description: 'React makes it painless to create interactive UIs.'
  },
  {
    title: 'Components',
    image: './images/icon2.png',
    description: 'Build encalpsulated components that manage their state'
  },
  {
    title: 'Single-way',
    image: './images/icon3.png',
    description: 'A set of immutable values are passed to the components'
  },
  {
    title: 'JSX',
    image: './images/icon4.png',
    description: 'Statically typed, designed to run on modern browsers'
  }
];

function App() {
  return (
    <div className="background">
      <Header />
      <div className="flex-container">
        <HeroText />
      </div>
      <div className="features-container">
        {featuresArray.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            image={feature.image}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;