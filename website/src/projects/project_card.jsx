import styles from "./project_card.module.css";
import { useNavigate } from "react-router-dom";

function ProjectCard({project}){
    //navigation part
    const navigate = useNavigate();

    const toProject = ()=>{navigate(`./${project.name}/`)}
    //tags need to be turbed into a string
    const tag_str = (project.tags).join(" | ");

    //color is not static and depends on the project type
    const colorSquareSt ={
        backgroundColor: `var(--${project.color})`
    }

    return(
        <div className={styles.cardContainer} key={project.name} onClick={toProject}>
            {/** card */}
            <div className={styles.card}>
                {/** this is the header of the card */}
                <div className={styles.cardImg}>
                    <img src={project.pic} className={styles.pic}/>
                    <div className={styles.picDesc}>
                        <h4 className={`${styles.year} inv`}>{project.year}</h4>
                        <div className={styles.colorSquare} style={colorSquareSt}>
                        </div>
                    </div>
                </div>
                {/** this is the text content */}
                <div className={styles.cardText}>
                    <h4>
                        {project.title}
                    </h4>
                    <p>
                        {project.desc}
                    </p>
                    <p className={styles.tags}>
                        {tag_str}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard