export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-child">
        <img src="./src/assets/icon1.png" alt="icon1" />
        <h3>Declerative</h3>
        <p>React makes it</p>
        <p>painless to create</p>
        <p>interactive UIs</p>
      </div>
      <div className="gallery-child">
        <img src="./src/assets/icon2.png" alt="icon2" />
        <h3>Components</h3>
        <p>Buil encapsulated</p>
        <p>components that</p>
        <p>manage their state</p>
      </div>
      <div className="gallery-child">
        <img src="./src/assets/icon3.png" alt="icon3" />
        <h3>Single-Way</h3>
        <p>A set of immutable</p>
        <p>values are passed to</p>
        <p>the component's</p>
      </div>
      <div className="gallery-child">
        <img src="./src/assets/icon4.png" alt="icon4" />
        <h3>JSX</h3>
        <p>Statically-typed</p>
        <p>designed to run</p>
        <p>modern browsers</p>
      </div>
    </div>
  );
}
