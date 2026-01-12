import styles from "./project_card.module.css";

function ProjectCard({project}){
    const tag_str = (project.tags).join(" | ");

    const colorSquareSt ={
        backgroundColor: `var(--${project.color})`
    }

    return(
        <div className={styles.cardContainer} id={project.name}>
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