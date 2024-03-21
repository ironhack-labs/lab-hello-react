function LandingPage() {
  return (
    <div className="App">
      <section className="intro">
        <nav>
          <img className="logo" src="./logo.png" alt="" />
          <img className="menu" src="./menu.png" alt="" />
        </nav>
        <div className="text-intro">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library and
            become a super Ninja developer
          </p>
          <button className="button">Awesome!</button>
        </div>
      </section>
      <section className="icon-section">
        <div className="icon-container">
          <img className="icon" src="/icon1.png" alt="" />
          <h3>Declarative</h3>
          <p></p>
        </div>
        <div className="icon-container">
          <img className="icon" src="/icon2.png" alt="" />
          <h3>Components</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            porro repellat illo ducimus optio asperiores et sit dolorem unde nam
            laudantium rerum temporibus aperiam dolorum earum, atque cupiditate
            error. Sunt.
          </p>
        </div>
        <div className="icon-container">
          <img className="icon" src="/icon3.png" alt="" />
          <h3>Single-Way</h3>
          <p></p>
        </div>
        <div className="icon-container">
          <img className="icon" src="./icon4.png" alt="" />
          <h3>JSX</h3>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
