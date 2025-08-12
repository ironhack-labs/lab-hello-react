import "./Specification.css";

function Specification(props) {
    return (
        <li id="specification">
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </li>
    );
}

export default Specification;
