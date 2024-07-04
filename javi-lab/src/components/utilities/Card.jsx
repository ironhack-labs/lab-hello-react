export default function Card({ img, title }) {
  const card1 = "src/assets/icon1.png";

  return (
    <div className="flex flex-col justify-evenly items-start;">
      <img src={img} alt="" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        maxime?
      </p>
    </div>
  );
}