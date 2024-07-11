import Card from "./Card";

export default function Section() {
  const cardData = [
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
      title: "Declarative",
      descriptions: [
        "React makes it",
        "painless to create",
        "interactive UIs.",
        
      ],
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
      title: "Components",
      descriptions: [
        
        "Built encapsulated",
        "components that",
        "manage their state.",
      
      ],
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
      title: "Single-way",
      descriptions: [
      
        "A set of immutable",
        "values are passed to",
        "the component's.",
       
      ],
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
      title: "JSX",
      descriptions: [
        "Statically-typed.",
        "designed to run on",
        "m  odern browsers.",
      ],
    },
  ];

  return (
    <section className="p-8 grid grid-cols-4 gap-[17.3px]">
      {cardData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </section>
  );
}
