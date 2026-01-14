import styles from "./about.module.css";

import header from "../../assets/projects/os/header.png"
import { SimpleHeader, ProjectDescription } from "../../atomics/projects.jsx";

function About(){
    const date="2026-ONGOING";
    const tags=["React", "HTML","JS","CSS","vite"];

    return (
        <>
            <SimpleHeader title="Portfolio website 2.0" src={header}/>
            <div className={styles.content}>
                <ProjectDescription date={date} tags={tags} location="PERSONAL PROJECT">
                    <p>
                        <br></br>
                        This is my perosnal website which has the goal of making it easier to share contacts, showcase my projects and link my digital presence together.
                        It is meant to contain all info you can also find in my CV and more. This is due to the fact that in general CV is limited and a webiste simply has more space.
                    </p>
                </ProjectDescription>

            </div>

        </>
    );
}

export default About