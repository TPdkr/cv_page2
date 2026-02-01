import Button from "../atomics/button";
import {Cell, FilledCell} from "../atomics/grid";
import Separator from "../atomics/separator";
import styles from "./contacts.module.css";
import { useNavigate } from 'react-router-dom';
import { PopUp, usePopUp } from "../atomics/popup.jsx";
import { getCheck } from "../navbar/check.jsx";

function Contacts(){
    const navigate = useNavigate();
    //cv
    const {isSafe} = getCheck();

    //POP UP MENU AND ITS STATE
    const popUpState = usePopUp();
    const open = popUpState.open;
    const close = popUpState.close;
    const isOpen = popUpState.isOpen;

    //LINKS
    const toGit = ()=> {
        window.location.href="https://github.com/TPdkr";
    };

    const toEmail = ()=>{
        window.location.href="mailto:tpdkrt@gmail.com";
    };

    const toCV = ()=>{
        const link = document.createElement('a');
        const cv1 = "/cv_page2/assets/CV8.pdf";
        const cv2 = "/cv_page2/assets/CV81.pdf";
        link.href = isSafe ? cv1 : cv2;
        //link.download = `${isSafe ? 'frog' : 'glitch'}.gif`;
        link.click();
    }

    return (
        <div className={styles.content}>
            <Separator simb="-"/>
                {/** this is the contacts info section */}
                <div className={styles.buttonRow}>
                    <Button onClick={open}>Contacts</Button>
                    <p>
                        Find my email, GitHub and CV. Best way to reach out to me is via email. I respond withing 1-3 working days.
                    </p>
                </div>
                {/** this is the projects/skills shortlist */}
                <div className={styles.buttonRow}>
                    <Button type="bright" onClick={()=>{navigate("./projects/")}}>Projects</Button>
                    <p>
                        C/C++ | Kotlin | HTML | JS | React | Python | CSS | PHP | Haskell | git | Linux  | GitHub | LateX
                    </p>
                </div>
                <a href="/cv_page2/assets/A2.pdf">German language certificate</a>
                {/** this is the languages table */}
                <div className={styles.grid}>
                    <FilledCell><h4>Languages.txt</h4></FilledCell>
                    <Cell className={styles.o1}><h4>English</h4></Cell>
                    <Cell className={styles.o2}><h4>German</h4></Cell>
                    <Cell className={styles.o3}><h4>Native: Russian</h4></Cell>
                    <Cell className={styles.o4}><h4>C2 Profficient</h4></Cell>
                    <Cell className={styles.o5}><h4>B1 Intermediate</h4></Cell>
                </div>
            <Separator simb="-"/>
            <PopUp close={close} isOpen={isOpen}>
                <h2  className={styles.popUpTitle}>
                    My contacts
                </h2>
                <p className={styles.popUpDesc}>
                    Find my email, GitHub and CV. Best way to reach out to me is via email. I respond withing 1-3 working days.
                </p>
                <div className={styles.popUpLinks}>
                    <Button type="bright" onClick={toGit}>
                        GitHub
                    </Button>
                    <Button type="bright" onClick={toEmail}>
                        Email
                    </Button>
                    <Button type="bright" onClick={toCV}>
                        CV
                    </Button>
                    {/*<Button type="bright">
                        LinkdIn
                    </Button>*/}
                </div>
            </PopUp>
        </div>
    );
}

export default Contacts

/*
function usePopUp() {
    const [isOpen, setOpen] = useState(false);
    const close = () => setOpen(false);
    const open = () => setOpen(true);
    
    return { isOpen, close, open };
}

function PopUp({isOpen, close, children}){
     //THEME CONTEXT
    const {isLight} = useTheme();
    const cross = (isLight)? cross_d : cross_l;

    return (<div className={`${styles.popUpBack} ${(isOpen)? styles.open : styles.closed} `} onClick={close}>
        <div className={styles.popUpWindow}>
            <img src={cross} className={styles.closePopUp}/>
            {children}
        </div>
    </div>);
}*/