import styles from "./mainpage.module.css";
import Header from "./header.jsx";
import Contacts from "./contacts.jsx";
import Zmt from "./zmt.jsx";
import Edu from "./edu.jsx";

function MainPage(){
    return (
    <div className={styles.mainPage}>
        <Header/>
        <Contacts/>
        <Zmt/>
        <Edu/>
    </div>
    );
}

export default MainPage