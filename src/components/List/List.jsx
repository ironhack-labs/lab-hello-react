import './List.css'
import image1 from '../../assets/icon1.png'
import image2 from '../../assets/icon2.png'
import image3 from '../../assets/icon3.png'
import image4 from '../../assets/icon4.png'

const List = () => {
    return (
        <div className="List">
            <div className="List-item">
                <img src={image1} alt="" />
                <h2>Declarative</h2>
                <p>React makes it paintless to create interactive UIs-</p>
            </div>
            <div className="List-item">
                <img src={image2} alt="" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="List-item">
                <img src={image3} alt="" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className="List-item">
                <img src={image4} alt="" />
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default List;