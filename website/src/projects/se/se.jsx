import styles from "./se.module.css";

import header from "../../assets/projects/se/header.png"

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function SE(){
    //this is description info
    const date="2025";
    const tags=["JS", "HTML", "CSS","SQL", "PHP"];
    const grade="89% (1.33)";

    return (
        <>
            <SimpleHeader src={header} title="SOFTWARE ENGINEERING"></SimpleHeader>
            <div className="contentBox">
                {/** header section */}
                <ProjectDescription date={date} tags={tags} location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN" grade={grade}>
                    <p><br></br>
                        This was a group project complted in a group of 11 people over the span of 3 submissions that focused on learning how to 
                        engineer software and what project management is. It asked us to write <b>UML, system architecture, specification</b> and more
                        besides creating code in accordance with those.
                        <br></br><br></br>
                        It was hosted on a university server at the time of the course. The main goals was to develop a simple project management software solution
                        while providing all the necessary documentations.
                        <br></br><br></br>
                        GitHub repo also provides info on setup and file structure of this project.
                        <br></br><br></br>
                    </p>
                    <a href="https://github.com/AnuraagDeshpande/SoftwareSuperProject_repo">GitHub repository of this project</a>
                </ProjectDescription>
                <div className="textBox">
                    {/**project page contents */}
                    <h3>GOAL</h3>
                    <p>
                        The project aimed to create a project management software solution. The assignment says: "The project management system to be developed has to be based on
                        the Project Management Body of Knowledge (PMBOK)".
                        <br></br><br></br>
                        <b>Among other things it was supposed to:</b>
                    </p>
                    <p className="indent">
                        * Develop project charter<br></br>
                        * Identify stakeholders<br></br>
                        * Develop project management plan<br></br>
                        * Scope<br></br>
                        * Schedule<br></br>
                        * Risk<br></br>
                        * etc.<br></br>
                    </p>
                </div>
                <div className="textBox">
                    <h3>MY ROLE</h3>
                    <p>
                        Our team was split into 2: frontend dev and backend dev. I was part of the frontend team and code wise contributed to that
                        section of the code.
                    </p>
                </div>
                <div className="textBox">
                    <h3>CHALLANGES</h3>
                    <p>
                        We encountered many challanges during this project. The main were learning what a lot of documentation standards meant and 
                        implementing them. Also, working as a team of 11 created space for communication issues, that were always resolved in the end.
                    </p>
                </div>
                <div className="textBox">
                    <h3 className="inv">SUBMISSIONS</h3>
                    <p>
                        <br></br>
                        <b className="inv">SUBMISSION 1</b><br></br><br></br>
                        This corresponds to the initiation stage of the project, when all key requirements are specified before being
                        put into work later on. The process here was also very important and after numerous discussions we came to the
                        conclusion that <b>iterative model</b> fits us best.
                        <br></br><br></br>
                        <b>REQUIREMENTS:</b>
                    </p>
                    <p className="indent">
                        - Explanation of the <b>productivity scheme of the team</b><br></br>
                        - <b>Productivity</b> (self-assesment) of the integrants of the team<br></br>
                        - Description of the <b>software process</b> to be used by the team<br></br>
                        - <b>Justification of the software process</b> to be used by the team <br></br>
                        - <b>Software requirements specification</b><br></br>
                        - <b>UI documentation (design, prototypes)</b><br></br>
                    </p>
                    <p>
                        <br></br>
                        <b className="inv">SUBMISSION 2</b><br></br><br></br>
                        It focused on overall design of the system and its architecture.
                        <br></br><br></br>
                        <b>REQUIREMENTS:</b>
                    </p>
                    <p className="indent">
                        - <b>System Architecture Description</b> ISO/IEC/IEEE 42010<br></br>
                        - <b>System Design Description (SDD)</b> approaching IEEE 1610-2009 include: API, tracebility matrix (TM)<br></br>
                        - Productivity (self-assesment) of the integrants of the team of the work done for submission II<br></br>
                    </p>
                    <p>
                        <br></br>
                        <b className="inv">SUBMISSION 3</b><br></br><br></br>
                        Final submission that included all remaining parts of the project to be submitted and had a 
                        presentation/demo of the results. 
                        <br></br><br></br>
                        <b>REQUIREMENTS:</b>
                    </p>
                    <p className="indent">
                        - <b>Code</b><br></br>
                        - <b>Demo</b><br></br>
                        - Productivity (self-assesment) of the integrants of the team of the work done for submission<br></br>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SE