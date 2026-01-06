import Button from "../atomics/button";
import Separator from "../atomics/separator";
import styles from "./contacts.module.css";

function Contacts(){
    return (
        <div className={styles.content}>
            <Separator simb="-"/>
                {/** this is the contacts info section */}
                <div className={styles.buttonRow}>
                    <Button>Contacts</Button>
                    <p>
                        Find my phone, emial, GitHub and LinkdIn. Best way to reach out to me is via email. I respond withing 1-3 working days.
                    </p>
                </div>
                {/** this is the projects/skills shortlist */}
                <div className={styles.buttonRow}>
                    <Button type="bright">Projects</Button>
                    <p>
                        C/C++	| Kotlin	| HTML	| React	|Python	| CSS	|PHP	| Haskell	|git	|Linux  | GitHub	| LateX	
                    </p>
                </div>
            <Separator simb="-"/>
        </div>
    );
}

export default Contacts