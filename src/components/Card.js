function Card(props) {

    return (
        <div class="card col-3">
           <img src={props.card.img} class="card-img-top"  alt="card-img"/>
           <h5 class="card-title">{props.card.title}</h5>
           <p class="card-text">{props.card.description}</p>
        </div>

    );
  }
  
  export default Card;
