import { ProjectSnapshot, SimpleHeader } from "../../atomics/projects";
import header from "../../assets/projects/vision/header.png"
import styles from "./vision.module.css";

function Vision(){
    const tags = ["Python", "Jupyter_notebooks"];
    const date ="2025";
    return (<>
        <SimpleHeader title="COMPUTER VISION COURSE" src={header}/>
        <div className={styles.content}>
            {/** this is the header, the goal is to contain all crucial info kind of like an abstract */}
            <div>
                <ProjectSnapshot date={date} tags={tags}/>
                <h2 className="inv">DESCRIPTION</h2>
                <p>
                    <br></br>
                    This course explored the basics of computer vision and image processing. The assignments matched the lectures and asked us to 
                    implement certain well known algorithms and functions as well as discuss/prove how and why certain things work or don't.
                    <br></br><br></br>
                    All assignments are stored in a single GitHub repo that <b>was published AFTER the completion of the course</b>.
                    <br></br><br></br>
                </p>
                <a href="https://github.com/TPdkr/computer_vision_cub_hw" target="_blank">GitHub repository computer vision assignments</a>
                <h4 className={styles.loc}>COMPLETED AT: CONSTRUCTOR UNIVERISTY BREMEN</h4>
            </div>
            {/** these are the assignments */}
            <div>

            <h3 className="inv">ASSIGNMENTS</h3>
            <div className={styles.assignments}>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 1: convolution and correlation
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 2: edge detection
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 3: convolution and correlation
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 4: convolution and correlation
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 5: convolution and correlation
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 6: convolution and correlation
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
                <div className={styles.assignment}>
                    <h4>
                        Assignment 7: convolution and correlation
                    </h4>
                    <p className="inv">ABOUT:</p>
                    <p>
                        The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them
                        in Python using numpy. 
                    </p>
                </div>
            </div>
            </div>
            
        </div>
        
    </>)
}

export default Vision