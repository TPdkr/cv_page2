import styles from "./building.module.css";
import frog from "../assets/frog.gif"

function Building(){
    return(<div className={styles.building}>
        <div className={styles.overlay}>
            <h1>OOOOPSIES</h1>
            <h3>This page is still being built. Come back later and keep slaying.</h3>
            <img src={frog}/>
        </div>
    </div>);
}

export default Building