import {SimpleHeader, ProjectDescription } from "../../atomics/projects";
import header from "../../assets/projects/vision/header.png"
import styles from "./vision.module.css";

function Vision(){
    const tags = ["Python", "Jupyter_notebooks"];
    const date ="2025";
    const grade="96% (1.00)";

    const assignmentsList = [
        {
            title:"Assignment 1: convolution and correlation",
            desc:"The assignment explores basic computer vision operations of convolution and correlation. It asks to implement them in Python using numpy."

        },
        {
            title:"Assignment 2: edge detection",
            desc: "The assignment asks to implement the canny edge detection algorithm."
        },
        {
            title: "Assignment 3: panoramas",
            desc: "This challenge is focused on implementing a panorama using Harris corner, RANSAC and hog."
        },
        {
            title: "Assignment 4: object recognition",
            desc: "Here we were tasked with creating an object recognition model using a convolutional neural network."
        },
        {
            title: "Assignment 5: face recongition, eigenfaces",
            desc: "Eigenfaces algorithm, coding a simple face recognition algorithm that works across different scales."
        },
        {
            title: "Assignment 6: cameras and their transformation",
            desc: "This assignment was not mandatory and thus not fully completed. Using cameras and math behind them."
        },
        {
            title: "Assignment 7: clustering in images",
            desc: "Not a mandatory assignment I completed for bonus points. It is about segmenting images using different algorithms and feature vectors."
        }
    ]
    return (<>
        <SimpleHeader title="COMPUTER VISION COURSE" src={header}/>
        <div className="contentBox">
            {/** this is the header, the goal is to contain all crucial info kind of like an abstract */}
            <ProjectDescription date={date} tags={tags} location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN" grade={grade}>
                <p>
                    <br></br>
                    This course explored the basics of computer vision and image processing. The assignments matched the lectures and asked us to 
                    implement certain well known algorithms and functions as well as discuss/prove how and why certain things work or don't.
                    <br></br><br></br>
                    All assignments are stored in a single GitHub repo that <b>was published AFTER the completion of the course</b>.
                    <br></br><br></br>
                </p>
                <a href="https://github.com/TPdkr/computer_vision_cub_hw" target="_blank">GitHub repository computer vision assignments</a>
            </ProjectDescription>
            {/** these are the assignments */}
            <div>
                <h3 className="inv">ASSIGNMENTS</h3>
                <div className="assignmentsGrid">
                    {assignmentsList.map((assignment)=><Assignment title={assignment.title} desc={assignment.desc}/>)}
                </div>
            </div>
            
        </div>
        
    </>)
}

function Assignment({title, desc}){
    return (
        <div className={styles.assignment} key={title}>
            <h4>
                {title}
            </h4>
            <p className="inv">ABOUT:</p>
            <p><br></br>{desc}</p>
        </div>
    );
}

export default Vision