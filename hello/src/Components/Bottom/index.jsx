import styles from "../../my-css.module.css";  

function Bottom(){
    return(
        <div className={styles.main2}>
            <div>
                <img src="./src/assets/icon1.png" alt="icon 1" />
                <h2>Declarative</h2>
                <p className={styles.main2.p}>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="./src/assets/icon2.png" alt="" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="./src/assets/icon3.png" alt="" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src="./src/assets/icon4.png" alt="" />
                <h2>JSX</h2>
                <p>Statically-typd designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Bottom;