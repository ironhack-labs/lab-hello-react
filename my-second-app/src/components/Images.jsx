import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"

function Images() {
  return (
    <div id = "functions">
      
      <span >
        <img src =  {icon1}/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </span>

      <span>
        <img src =  {icon2}/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </span>

      <span>
        <img src = {icon3}/>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </span>

      <span>
        <img src = {icon4}/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </span>

    </div>
  )
}

export default Images;
