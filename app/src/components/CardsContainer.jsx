import Card from "./Card";

export default function CardsContainer({ cardData }) {
  return (
    <div className="card-container">
      {cardData.map((card) => (
        <Card
          key={card.id}
          imgUrl={card.imgUrl}
          title={card.title}
          text={card.text}
        />
      ))}
    </div>
  );
}
