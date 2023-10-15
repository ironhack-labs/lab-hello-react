import React from 'react';

function Features() {
  return (
    <section id="secondSection">
      <article>
        <img src="./src/assets/icon1.png" alt="Declarative" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </article>
      <article>
        <img src="./src/assets/icon2.png" alt="Components" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </article>
      <article>
        <img src="./src/assets/icon3.png" alt="Single-Way" />
        <h2>Single-Way</h2>
        <p>A set of inmutable values are passed to the component's.</p>
      </article>
      <article>
        <img src="./src/assets/icon4.png" alt="JSX" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
    </section>
  );
}

export default Features;
