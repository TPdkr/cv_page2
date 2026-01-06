import Button from "../atomics/button";
import {Cell, FilledCell} from "../atomics/grid";
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
                        C/C++ | Kotlin | HTML | React |Python | CSS |PHP | Haskell |git |Linux  | GitHub | LateX
                    </p>
                </div>
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
        </div>
    );
}

export default Contacts