
import Card from "./utilities/Card";

export default function Section() {
  const cardData = [
    {
      img: "src/assets/icon1.png",
      title: "Declarative",
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
      title: "Components",
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
      title: "Single-Way",
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
      title: "JSX",
    },
  ];

  return (
    <section className="p-8 grid grid-cols-4 gap-[17.3px]">
      {cardData.map((data) => {
        return <Card img={data.img} title={data.title}></Card>;
      })}
    </section>
  );
}