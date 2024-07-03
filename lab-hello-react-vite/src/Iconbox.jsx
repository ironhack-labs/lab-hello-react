function Iconbox({icon1,icon2,icon3,icon4}) {
    return (
      <div className="icon-box">
        <div className="icon-single">
          <img src={icon1} alt="icon"></img>
          <h3>Declarative</h3>
            <p>React makes it painless to create interactive UI</p>
        </div>
        <div className="icon-single">
          <img src={icon2} alt="icon"></img>
          <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="icon-single">
          <img src={icon3} alt="icon"></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="icon-single">
          <img src={icon4} alt="icon"></img>
          <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    );
  }

  export default Iconbox;