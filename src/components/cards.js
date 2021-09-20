export default function Cards(props) {
  return (
    <div class="card">
      <img src={props.card.img} class="card-img-top" alt="card icon"></img>
      <div class="card-body">
        <h5 class="card-title">{props.card.title}</h5>
        <p class="card-text">{props.card.text}</p>
      </div>
    </div>
  );
}
