import './List.css'; 
import icono1 from '../../assets/icon1.png';
import icono2 from '../../assets/icon2.png';
import icono3 from '../../assets/icon3.png';
import icono4 from '../../assets/icon4.png';

const List = () => {
    return (
      <div className="List">
        <div className="List-item">
          <img src={icono1}/>
          <h2>Declerative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="List-item">
          <img src={icono2}/>
          <h2>Componenetes</h2>
          <p>Bulid encapsulated componenetes thta manage their statae</p>
        </div>
        <div className="List-item">
          <img src={icono3}/>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="List-item">
          <img src={icono4}/>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    )
  }

export default List;