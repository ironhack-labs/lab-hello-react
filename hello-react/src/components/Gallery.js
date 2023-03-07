import icon1 from "../images/icon-1.png"
import icon2 from "../images/icon-2.png"
import icon3 from "../images/icon-3.png"
import icon4 from "../images/icon-4.png"
import Card from "./Card"

function Gallery() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Card image={icon1} title="Declarative" description="React makes it painless to create interactive UIs" />
        </div>
        <div className="col">
          <Card image={icon2} title="Components" description="build encapsulated componets that manage theri state" />
        </div>
        <div className="col">
          <Card image={icon3} title="Single-Way" description="A set of inmutable values are passed to the componet's" />
        </div>
        <div className="col">
          <Card image={icon4} title="JSX" description="Statically-typed, designed to run on modern browsers" />
        </div>
      </div>
    </div>
  )
}

export default Gallery