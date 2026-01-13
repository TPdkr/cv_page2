import styles from "./footer.module.css";
import Separator from "../atomics/separator";

function Footer(){
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
                    <h4 onClick={toEmail} className={styles.link}>- TPDKRT@GMAIL.COM</h4>
                    <h4 onClick={toGit} className={styles.link}>- HTTPS://GITHUB.COM/TPDKR</h4>
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