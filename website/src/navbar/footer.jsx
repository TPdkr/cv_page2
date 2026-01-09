import styles from "./footer.module.css";
import bop_d from "../assets/atom_dark.svg";
import bop_l from "../assets/atom_light.svg";
import Separator from "../atomics/separator";

import { useTheme } from "../themer.jsx";

function Footer(){
    //the theme context
    const {isLight} = useTheme();
    const bop = (isLight)? bop_l : bop_d;

    //links to the thingies
    const toGit = ()=> {
        window.location.href="https://github.com/TPdkr";
    };

    const toEmail = ()=>{
        window.location.href="mailto:tpdkrt@gmail.com";
    };

    return(
        <div className={styles.footer}>
            <Separator simb="/"/>
            <div className={styles.content}>
                <div className={styles.cont}>
                    <h4>
                        CONTACTS:
                    </h4>
                    <h4 onClick={toEmail} className={styles.link}>- [EMAIL] (TPDKRT@GMAIL.COM)</h4>
                    <h4 onClick={toGit} className={styles.link}>- [GITHUB] (HTTPS://GITHUB.COM/TPDKR)</h4>
                    <img src={bop} className={styles.bop}></img>
                </div>
                <p>
                    WEBSITE MADE BY TIMOFEI PODKORYTOV(TPDKR@GITHUB.COM) USING REACT, HTML AND CSS AS WELL AS GITHUB PAGES
                </p>
            </div>
            <Separator simb="/"/>
        </div>
    );
}

export default Footer