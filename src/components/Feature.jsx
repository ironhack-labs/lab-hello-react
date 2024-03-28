import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
const items = [
  ["Declarative", "React makes it painless to create interactive UIs.", img1],
  [
    "Components",
    "Build encapsulated components that manage their state.",
    img2,
  ],
  [
    "Single-Way",
    "A set of immutable values are passed to the component's.",
    img3,
  ],
  ["JSX", "Statically-typed, designed to run on modern browsers.", img4],
];
const Feature = () => {
  items.forEach((item) => {
    console.log(item);
  });
  return (
    <div className="featureContainer">
      {items.map((item) => (
        <>
          <div className="con1">
            <img key={item.id} src={item[2]} />
            <h2 className="feature-h2" key={item.id}>{item[0]}</h2>
            <p className="featuer-parg" key={item.id}>{item[1]}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Feature;
