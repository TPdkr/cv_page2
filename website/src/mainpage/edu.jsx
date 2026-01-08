import styles from "./edu.module.css";
import uni from "../assets/uni.png";
import school from "../assets/school.png";
import { Cell, FilledCell, Grid } from "../atomics/grid";

function Edu(){
    return (
        <>
            <h1 className={`inv ${styles.education}`} id="edu">
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
                {/** text contents */}
                <h4>---2023-PRESENT</h4>
                <p>
                    During my studies here I advanced my technical and non technical skills. I actively participated in campus live and in classes.
                    <br></br><br></br>
                    I learned essential knowledge in the field of computer science and completed many group projects during my studies.
                    <br></br><br></br>
                    I volunteered as a peer mentor for 2 years as well as lead student clubs on campus, which made me better at clear communication,
                    scheduling my time and managing responsibilities.
                </p>
                {/** grid with the grades */}
                <Grid className={styles.uniGrades}>
                    <Cell><p><b>(90%, 1.33)</b> Software engineering</p></Cell>
                    <FilledCell className={styles.uniGradesTitle}><p>
                        Course work; 
                        GPA:
                        Credits: 175
                    </p></FilledCell>
                    <Cell><p><b>(100%, 1.00)</b> Operating systems</p></Cell>
                    <Cell><p><b>(97%, 1.00)</b> Databases and web services</p></Cell>
                    <Cell><p><b>(100%, 1.00)</b> Algorithms and data structures</p></Cell>
                    <Cell><p><b>(96%, 1.00)</b> Programming in C/C++</p></Cell>
                </Grid>
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
                            I studied in a specialized class with strong focus on IT, Mathematics and Physics.<br></br><br></br>
                            The diploma I received had all grades at 100%. The curriculum was challaning, but It laid the strong foundations for my degree.<br></br><br></br>
                            Here I started learning such languages such as C++ and python, which helped me while starting my Bachelor's.
                        </p>

                        <Grid className={styles.schoolGpa}>
                            <Cell><p className={styles.onBack}>
                                1.00(perfect) GPA
                            </p></Cell>

                            <FilledCell><p className={styles.onPr}>
                                Gold medal for acedemic achievements
                            </p></FilledCell>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edu