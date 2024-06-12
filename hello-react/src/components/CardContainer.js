import Card from "./Card"
import img1 from "../images/icon1.png"
import img2 from "../images/icon2.png"
import img3 from "../images/icon3.png"
import img4 from "../images/icon4.png"

function CardContainer() {
    return (
        <div className=''>
            <div className='row d-flex align-items-center justify-content-center'>
                <div className='col-2'>
                    <Card title='Declarative' text='React makes it painless to create interactive UIs.' image={img1}/>
                </div>
                <div className='col-2'>
                    <Card title='Components' text='Build encapsulated components that manage their state.' image={img2}/>
                </div>
                <div className='col-2'>
                    <Card title='Single-Way' text="A set of immutable values are passed to the component's" image={img3}/>
                </div>
                <div className='col-2'>
                    <Card title='JSX' text='Statically-typed, designed to run on modern browsers' image={img4}/>
                </div>
            </div>
        </div>
    )
}

export default CardContainer