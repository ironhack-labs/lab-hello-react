export function Service(props) {
  return (
    <div id={props.id} className='text-start'>
      <img src={props.img} className='' alt={props.title} />
      <h5 className='card-title'>{props.title}</h5>
      <p className='card-text'>{props.text}</p>
    </div>
  );
}
