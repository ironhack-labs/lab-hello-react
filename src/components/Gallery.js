import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function Gallery() {
  return (
    <div class="box-wrapper-2">
    <div class="container">
      <div>
          <img src={icon1}/>
          <h5>Declarative</h5>
          <p>React makes it <br></br>
          painless to create <br></br>
          interactive UIs</p>
      </div>
      <div>
      <img src={icon2}/>
      <h5>Components</h5>
          <p>Build encapsulated <br></br>
          components that <br></br>
          manages their state</p>
      </div>
      <div>
      <img src={icon3}/>
      <h5>Single-Way</h5>
          <p>A set of immutable <br></br>
          values are passed to <br></br>
          the component's</p>
      </div>
      <div>
      <img src={icon3}/>
      <h5>JSX</h5>
          <p>Statically-typed <br></br>
          designed to run on <br></br>
          modern browsers</p>
      </div>
    </div>
    </div>
  );
}

export default Gallery;
