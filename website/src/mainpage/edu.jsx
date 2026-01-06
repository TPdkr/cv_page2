import styles from "./edu.module.css";
import uni from "../assets/uni.png";
import school from "../assets/school.png";
import { Cell, FilledCell } from "../atomics/grid";

function Edu(){
    return (
        <>
            <h1 className={`inv ${styles.education}`}>
                EDUCATION
            </h1>
            {/** CONSTRUCTOR*/}
            <div className={styles.uni}>
                <h2>CONSTRUCTOR UNIVERSITY BREMEN</h2>
                <div className={styles.suptitle}>
                    <h3>
                        BSc Computer Science
                    </h3>
                    <h3>
                        Bremen, Germany
                    </h3>
                </div>
                <img src={uni} className={styles.uniPic}/>
                <h4>---2023-PRESENT</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas distinguique possit, augeri.
                    <br></br>
                    <br></br>
                    Modo efficiatur concludaturque ratio tradit, non qua via captiosa solvantur ambigua distinguantur ostendit; iudicia rerum in sensibus ponit, quibus si semel aliquid falsi pro vero probatum sit, sublatum esse omne iudicium veri et falsi putat. Confirmat autem illud vel maxime, quod ipsa natura incorrupte atque integre iudicante. Itaque.
                </p>
            </div>
            {/** SESC SECTION*/}
            <div className={styles.sesc}>
                <h2>SPECIALIZED SCIENTIFIC AND EDUCATIONAL CENTER</h2>
                <div className={styles.suptitle}>
                    <h3>
                        High schol diploma
                    </h3>
                    <h3>
                        Ekaterinburg, Russia
                    </h3>
                </div>
                <div className={styles.sescGrid}>
                    <img src={school} className={styles.schoolPic}></img>
                    <div>
                        <h4>---2020-2023</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas distinguique.
                        </p>

                        <div className={styles.schoolGpa}>
                            <Cell><p className={styles.onBack}>
                                1.00(perfect) GPA
                            </p></Cell>

                            <FilledCell><p className={styles.onPr}>
                                Gold medal for acedemic achievements
                            </p></FilledCell>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edu