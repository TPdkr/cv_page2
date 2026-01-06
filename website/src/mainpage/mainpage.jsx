import styles from "./mainpage.module.css";
import Header from "./header.jsx";
import Contacts from "./contacts.jsx";

function MainPage(){
    return (
    <div className={styles.mainPage}>
        <Header/>
        <Contacts/>
    </div>
    );
}

export default MainPage