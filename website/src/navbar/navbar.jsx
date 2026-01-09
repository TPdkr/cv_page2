import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styles from "./navbar.module.css";
import hamburger_d from "../assets/menu_dark.svg";
import cross_d from "../assets/cross_dark.svg";
import hamburger_l from "../assets/menu_light.svg";
import cross_l from "../assets/cross_light.svg";
import { useState } from "react";

//theming
import { useTheme } from "../themer.jsx";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

function Navbar(){
    //NAVBAR STATE VALUES
    const [isOpen, setOpen] = useState(false);
    const close = () => setOpen(false);
    const open = () => setOpen(true);

    const isOpenClass = (isOpen)? styles.open : styles.closed;

    //THEME SWITCHER
    const {isLight,toggleTheme} = useTheme();
    const cross = (isLight)? cross_l : cross_d;
    const hamburger = (isLight)? hamburger_l : hamburger_d;

    const switchState = (isLight)? styles.light : styles.dark

    return (
        <nav className={styles.Navbar}>
            <img src={cross} className={`${styles.cross} ${isOpenClass}`} onClick={close}/>
            <img src={hamburger} className={`${styles.hamburger} ${isOpenClass}`} onClick={open}/>
            <div className={`${styles.Links} ${isOpenClass}`}>
                <Link to="cv_page2/" onClick={close}>Home</Link>
                <Link to="cv_page2/projects/" onClick={close}>Projects</Link>
                <HashLink smooth to="cv_page2/#exp" onClick={close}>Experience</HashLink>
                <HashLink smooth to="cv_page2/#edu" onClick={close}>Education</HashLink>
            </div>
            <div className={styles.header}>
                <div className={`${styles.themeSwitch} ${switchState}`} onClick={toggleTheme}>
                    <img src={moon} className={`${styles.moon}  ${switchState}`}/>
                    <img src={sun} className={`${styles.sun}  ${switchState}`}/>
                </div>
                <p>
                    cv_page2.html
                </p>
            </div>
            
        </nav>
    );
}

export default Navbar