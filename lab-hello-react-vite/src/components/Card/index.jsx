export default function Card({ image, title, text }) {
  return (
    <>
      <img src={image} />
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );
}
