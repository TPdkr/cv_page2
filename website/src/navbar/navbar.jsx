import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar(){
    return (
        <nav className={styles.Navbar}>
            <span className={styles.Links}>
                <Link to="cv_page2/">Home</Link>
                <Link to="cv_page2/projects/">Projects</Link>
            </span>
            <p className={styles.header}>
                cv_page2.html
            </p>
        </nav>
    );
}

export default Navbar