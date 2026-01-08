import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styles from "./navbar.module.css";
import hamburger from "../assets/menu.svg";
import cross from "../assets/cross_dark.svg";
import { useState } from "react";

function Navbar(){
    const [isOpen, setOpen] = useState(false);
    const close = () => setOpen(false);
    const open = () => setOpen(true);

    const isOpenClass = (isOpen)? styles.open : styles.closed;

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
            <p className={styles.header}>
                cv_page2.html
            </p>
        </nav>
    );
}

export default Navbar