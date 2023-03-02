import componentsImg from "../images/components-img.png";

function Components () {
    return (
        <div className="sectionTwo-element">
            <img src={componentsImg} alt='components-icon' />
            <h4> Components </h4>
            <p>Build encapsulated<br></br> components that <br></br> manage their state.</p>
        </div>
    );
}

export default Components;