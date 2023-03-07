import DeclarativeImg from "./Images/icon1.png";
import ComponentsImg from "./Images/icon2.png";
import SingleWayImg from "./Images/icon3.png";
import JsxImg from "./Images/icon4.png";
const DeclarativeImgTag = <img id = "declarative-img" src={DeclarativeImg} alt = "declarative"/>;
const ComponentsImgTag = < img id = "components-img" src = {ComponentsImg} alt = "components"/>;
const SingleWayImgTag = < img id = "single-way-img" src = {SingleWayImg} alt = "single way"/>
const JsxImgTag = < img id = "jsx-img" src = {JsxImg} alt = "JSX"/>;

function Bottom() {
  return (
    <div className="bottom-information">
      <div id="declarative">
        {DeclarativeImgTag}
        <h4> Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
    <div id = "components">
    {ComponentsImgTag}
    <h4> Components </h4>
    <p>
        Build encapsulated components that manage their state.
    </p>
    </div>
    <div id = "single-way">
     {SingleWayImgTag}
     <h4> Single-Way</h4>
     <p>
        A set of immutable values are passed to the component's.
     </p>
    </div>
    <div id = "jsx">
     {JsxImgTag}
     <h4>
        JSX
     </h4>
     <p>
        Statically-typed designed to run on modern browsers.
     </p>
    </div>
    </div>
  );
}

export default Bottom;