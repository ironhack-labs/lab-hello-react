import '../components/list.css'
import img1 from '../assets/icon1.png'
import img2 from '../assets/icon2.png'
import img3 from '../assets/icon3.png'
import img4 from '../assets/icon4.png'

function List() {
    return (
        <div className="List">
        <div className='List-item'>
            <img src={img1} />
            <h3>Declarative</h3>
            <p className='P2'>React makes it painless to create interactive UIs</p>
        </div>
        <div className='List-item'>
        <img src={img2} />
            <h3>Componets</h3>
            <p className='P2'>Build encapsulated components that manage their state</p>
        </div>
        <div className='List-item'>
            <img src={img3} />
            <h3>Single-Way</h3>
            <p className='P2'>A set of immutable values are passed to the component´s</p>
        </div>
        <div className='List-item'>
            <img src={img4} />
            <h3>JSX</h3>
            <p className='P2'>Statically-typed, designed to run on modern browsers.</p>
        </div>

        </div>
    )
}

export default List