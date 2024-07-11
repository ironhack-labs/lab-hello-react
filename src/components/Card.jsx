export default function Card(props) {
    return (
      <div className="card">
        <img src={props.data.img} alt="" />
        <h3 className="text-2xl font-semibold">{props.data.title}</h3>
        {props.data.descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    );
  }
  