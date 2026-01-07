import styles from "./mainpage.module.css";
import Header from "./header.jsx";
import Contacts from "./contacts.jsx";
import Zmt from "./zmt.jsx";
import Edu from "./edu.jsx";
import Volunteering from "./volunteering.jsx";
import Footer from "../navbar/footer.jsx";

function MainPage(){
    return (
    <>
        <div className={styles.mainPage}>
            <Header/>
            <Contacts/>
            <Zmt/>
            <Edu/>
            <Volunteering/>
        </div>
        <Footer/>
    </>
    );
}

export default MainPage