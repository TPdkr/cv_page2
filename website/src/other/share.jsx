import styles from "./share.module.css";
import qr from "../assets/qr.png";

function Share(){
    return(
        <div className={styles.sharePage}>
            <h3>Reach out to me</h3>
            <div>
                <img src={qr}/>
                <p>website link</p>
            </div>
            <div className={styles.links}>
                <a href="mailto:tpdkrt@gmail.com">email: tpdkrt@gmail.com</a>
                <a href="https://github.com/TPdkr">GitHub: Tpdkr</a>
                <a href="https://tpdkr.github.io/cv_page2/">webite: tpdkr.github.io/cv_page2/</a>
            </div>
        </div>
    )
}

export default Share