import IconOne from '../images/icon1.png'
function ImageOne(){
    return (
        <div className='section'>
            <img
                src={IconOne}
                alt="wrench"/>
            <h2>Declarative</h2>
            <p> React makes it painless to create interactive UIs</p>
        </div>
    );
}
export default ImageOne;