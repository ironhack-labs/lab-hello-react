import Card from "./Card";
import section1 from "../src/assets/section1.png";
import section2 from "../src/assets/section2.png";
import section3 from "../src/assets/section3.png";
import section4 from "../src/assets/section4.png";

function Benefits() {
  const benefitsData = [
    { img: section1, title: "Declarative", description: "React makes it painless to create interactive UIs" },
    { img: section2, title: "Components", description: "Build encapsulated components that manage their state" },
    { img: section3, title: "Single-way", description: "A set of inmutable values are passed to the components" },
    { img: section4, title: "JSX", description: "Statically-typed, designed to run on modern browsers" },
  ];

  return (
    <section id="benefits">
      {benefitsData.map((benefit, index) => (
        <Card
          key={index}
          img={benefit.img}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </section>
  );
}

export default Benefits;