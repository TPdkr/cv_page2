import styles from "./mainpage.module.css";
import Header from "./header.jsx";
import Contacts from "./contacts.jsx";
import Zmt from "./zmt.jsx";

function MainPage(){
    return (
    <div className={styles.mainPage}>
        <Header/>
        <Contacts/>
        <Zmt/>
    </div>
    );
}

export default MainPage