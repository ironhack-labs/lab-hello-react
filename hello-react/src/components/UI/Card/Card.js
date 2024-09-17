import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imgSrc} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default Card;
