import styles from "./mainpage.module.css";
import Header from "./header.jsx";

function MainPage(){
    return (
    <div className={styles.mainPage}>
        <Header/>
    </div>
    );
}

export default MainPage