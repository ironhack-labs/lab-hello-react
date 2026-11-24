import './services.css';

function Services({ img, title, description }) {
  return (
    <li className='services-item'>
      <img src={img} alt={title} />

      <h3 className='services-item_title'>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default Services;