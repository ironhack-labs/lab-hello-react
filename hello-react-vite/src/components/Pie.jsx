import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
const styleFooter = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  color: "black",

};

function Footer() {
  return (
    <>
      <section style={styleFooter}>
        <div>
          <img src={img3} alt="" />
          <h1>Declarative</h1>
          <p>React makes itt painless to create interactive UIs</p>
        </div>

        <div>
          <img src={img4} alt="" />
          <h1>Components</h1>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div>
          <img src={img5} alt="" />
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to th component`s</p>
        </div>

        <div>
          <img src={img6} alt="" />

          <h1>JSX</h1>
          <p>Statically-typed,designed to run on modern browsers</p>
        </div>
      </section>
    </>
  );
}
export default Footer;
