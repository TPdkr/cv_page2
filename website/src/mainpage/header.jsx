import styles from "./header.module.css";
import star_d from "../assets/star_dark.svg";
import star2_d from "../assets/star_sharp_dark.svg";
import star_l from "../assets/star_light.svg";
import star2_l from "../assets/star_sharp_light.svg";
import mePic from "../assets/me.png";

import {useTheme} from "../themer.jsx";

/**
 * Header of the main page
 * @returns JSX
 */
function Header(){
    const {isLight} = useTheme();

    const star = (isLight)? star_l : star_d;
    const star2 = (isLight)? star2_l : star2_d;

    return (
        <div>
            <div className={styles.title}>
                <h1>CV website</h1>
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