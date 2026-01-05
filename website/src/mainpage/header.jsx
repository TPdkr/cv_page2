import styles from "./header.module.css";
import star from "../assets/star_dark.svg";
import star2 from "../assets/star_sharp_dark.svg";
import mePic from "../assets/me_dark.png";

/**
 * Header of the main page
 * @returns JSX
 */
function Header(){
    return (
        <div>
            <div className={styles.title}>
                <h1>Portfolio website</h1>
                <img src={star} className={styles.star}/>
            </div>

            <p className={styles.suptitle}>
                This website shows my achievements, expereinces and projects. Feel free to explore, click on things and reach out through my contacts here.
            </p>

            <div className={styles.bottom}>
                <img src={mePic} className={styles.me}></img>
                <div className={styles.myName}>
                    <img src={star2} className={styles.starName}/>
                    <h2>Timofei Podkorytov</h2>
                </div>
            </div>
        </div>
    );
}

export default Header