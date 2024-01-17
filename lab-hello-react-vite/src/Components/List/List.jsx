import icono1 from '../../assets/icon1.png';
import icono2 from '../../assets/icon2.png';
import icono3 from '../../assets/icon3.png';
import icono4 from '../../assets/icon4.png';

const List = () => {
    return (
      <div className="List">
        <div className="List-item">
          <h1>Item 1</h1>
          <img src={icono1}/>
        </div>
        <div className="List-item">
          <h1>Item 2</h1>
          <img src={icono2}/>
        </div>
        <div className="List-item">
          <h1>Item 3</h1>
          <img src={icono3}/>
        </div>
        <div className="List-item">
          <h1>Item 4</h1>
          <img src={icono4}/>
        </div>
      </div>
    )
  }

export default List;