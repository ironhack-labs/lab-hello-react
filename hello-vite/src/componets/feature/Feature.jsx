import './Feature.css';

function Feature (pros) {

    const { title, text, img } = pros;
    return (
            <div className='feature-information'>
            <img src= { img } alt= { title } />
            <h4> { title} </h4>
            <p> { text } </p>

            </div>
    )

}

export default Feature;