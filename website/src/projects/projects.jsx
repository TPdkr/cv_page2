import styles from "./projects.module.css";
import ProjectCard from "./project_card";
import Footer from "../navbar/footer";

//preview of the projects
import os_preview from "../assets/projects/os/preview.png";
import about_preview from "../assets/projects/about/preview.png";
import vision_preview from "../assets/projects/vision/preview.png";
import se_preview from "../assets/projects/se/preview.png";
import genau_preview from "../assets/projects/genau/preview.png";
import dbs_preview from "../assets/projects/dbs/preview.png";

import { useTheme } from "../themer.jsx";
import sunset_d from "../assets/projects/sunset_dark.png";
import sunset_l from "../assets/projects/sunset_light.png";

const projectsList = [
    {
        name:"about",
        pic: about_preview,
        title: "Portfolio website 2.0",
        year: "2026",
        color: "React",
        desc: "Personal website with experince and project info.",
        tags: ["React", "HTML","JS","CSS","vite"],
        type: "personal"
    },
    {
        name:"vision",
        pic: vision_preview,
        title: "Computer vision course",
        year: "2025",
        color: "Python",
        desc: "Computer vision course assignments.",
        tags: ["Python", "Jupyter_notebooks"],
        type: "uni"
    },
    {
        name:"se",
        pic: se_preview,
        title: "Software engineering",
        year: "2025",
        color: "JS",
        desc: "Course group project.",
        tags: ["JS", "HTML", "CSS","SQL", "PHP"],
        type: "uni"
    },
    {
        name:"genau",
        pic: genau_preview,
        title: "Genau! German vocabulary app",
        year: "2025",
        color: "Kotlin",
        desc: "A langauge learning app for memorizing vocabulary",
        tags: ["Kotlin"],
        type: "personal"
    },
    {
        name:"os",
        pic: os_preview,
        title: "Operating systems",
        year: "2024",
        color: "C",
        desc: "Operating systems course assignments.",
        tags: ["C", "Makefiles"],
        type: "uni"
    },
    {
        name:"dbs",
        pic: dbs_preview,
        title: "Databases and web services",
        year: "2024",
        color: "PHP",
        desc: "2nd year course group project on databases",
        tags: [ "PHP","SQL","CSS","HTML","JS"],
        type: "uni"
    },
    
]

function Projects(){
    //const elipse = elipse_d;
    const {isLight} = useTheme();

    const sunset = (isLight)? sunset_l : sunset_d;

    return (
    <>
        <div className={styles.projectsList}>
            {/*<div className={styles.header}>
                <div className={styles.headerText}>
                    <h1 className="inv">Projects</h1>
                    <h4>This page showcases my projects, both personal and university ones. Feel free to explore and click around the page. This is meant to be something something.</h4>
                </div>
                <div className={styles.headerImg}>
                    <img src={elipse} className={styles.headerElipse}/>
                    <img src={elipse} className={styles.headerElipse}/>
                    <img src={elipse} className={styles.headerElipse}/>
                    <img src={elipse} className={styles.headerElipse}/>
                </div>
            </div>*/}
            <div className={styles.header}>
                <img src={sunset} className={styles.sunset}/>
                <h2>Projects page</h2>
                <h4 className={styles.subtitle}>
                    This page showcases my projects, both personal and university ones. Feel free to explore and click around the page.
                </h4>
            </div>
            {/** this is the list of projects */}
            <div className={styles.cardsWrap}>
                <div className={styles.projectsCards}>
                    {projectsList.map((project)=><ProjectCard project={project} key={project.name}/>)}
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Projects