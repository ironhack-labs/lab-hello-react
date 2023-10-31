import styles from "../../my-css.module.css";  

function Greeting(){
    return(
        <div className={styles.main}>
            <div> 
                <div className={styles.mainImg}>
                    <div>
                    <img src="./src/assets/ironhack-logo-xs.png" alt="ironhack logo" />
                    </div>
                    <div>
                    <img src="./src/assets/menu-top-xs.png" alt="menu top" />
                    </div>
                </div>
            </div>

            <div>
                <h1 className={styles.lettering}>Say hello to <br />
                 ReactJS</h1>

                </div>
                <div  className={styles.lettering}>
                    <p>You will learn how to use <br />
                the most popular frontend library <br />
                and become a super Ninja developer.</p>
                </div>
                <div>
                    <button href="">Awesome!</button>
            </div>
        </div>
    )
}

export default Greeting;