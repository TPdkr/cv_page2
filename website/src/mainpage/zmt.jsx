import styles from "./zmt.module.css";
import wave from "../assets/wave.png";
import Separator from "../atomics/separator";

function Zmt(){
    return (
        <>
            <h1 className={`inv ${styles.experience}`} >
                EXPERIENCE
            </h1>
            <div className={styles.zmt}>
                <div className={styles.content}>
                    <h2>WORKING STUDENT IN MACHINE LEARNING WITH MARINE DATA</h2>
                    <div>
                        <h3>DEC 2025 - PRESENT</h3>
                        <h4>
                            At leibnitz insititute for marine research
                        </h4>
                        <p className="inv"> TASKS</p>
                        <p className={styles.tasks}>
                                - formatiing and gathering data with python and pandas<br></br>
                                - uni and multivaribal analysis<br></br>
                                - data transformation for better model performance<br></br>
                                - traning 3 models on ocean data and analyzing the results<br></br>
                                - presenting project to internship supervisors and the research group<br></br>
                        </p>
                    </div>
                </div>
                <img src={wave} className={styles.wave}></img>
            </div>
            <div>
                <h2>INTERNSHIP</h2>
                <h3 className={styles.suptitle}>JUNE 2025 - SEPTEMBER 2025</h3>
                <h4>
                    At leibnitz insititute for marine research
                </h4>
            </div>
            <Separator simb="-"></Separator>
        </>
    );
}

export default Zmt