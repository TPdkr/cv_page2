import { ProjectSnapshot, SimpleHeader } from "../../atomics/projects";
import header from "../../assets/projects/vision/header.png"
import styles from "./vision.module.css";

function Vision(){
    const tags = ["Python", "Jupyter_notebooks"];
    const date ="2025";
    return (<>
        <SimpleHeader title="COMPUTER VISION COURSE" src={header}/>
        <div className={styles.content}>
            <div>
                <ProjectSnapshot date={date} tags={tags}/>
                <h2 className="inv">DESCRIPTION</h2>
                <p>
                    <br></br>
                    This course explored the basics of computer vision and image processing. The assignments matched the lectures and asked us to 
                    implement certain well known algorithms and functions as well as discuss/prove how and why certain things work or don't.
                    <br></br><br></br>
                    All assignments are stored in a single GitHub repo that <b>was published AFTER the completion of the course</b>.
                    <br></br>
                </p>
                <h4 className={styles.loc}>COMPLETED AT: CONSTRUCTOR UNIVERISTY BREMEN</h4>
            </div>
            
        </div>
        
    </>)
}

export default Vision