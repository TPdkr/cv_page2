import styles from "./genau.module.css";

//assets
import header from "../../assets/projects/genau/header.png";

//components
import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function Genau(){
    const date="2025";
    const tags=["Kotlin"];
    const location="PERSONAL PROJECT";

    return(
        <>
            <SimpleHeader src={header} title="GENAU! GERMAN VOCABULARY APP"></SimpleHeader>
            <div className="contentBox">
                <ProjectDescription date={date} tags={tags} location={location}>
                    <p>
                        <br></br>
                        I set out to create a simple way to memorize German vocabulary at the beginning of 2025. I created
                        a simple Adroid app with <b>Kotlin and SQLlite</b> to challange myself and learn words in a nicer way.
                        <br></br>
                        <b>Android studio</b> was my work environment and GitHub for version control. Some things
                        I learned as I went using official Android courses.
                    </p>
                    <div className={styles.links}>
                        <a href="https://github.com/TPdkr/learner"> GitHub repository link</a>
                        <a href="https://github.com/TPdkr/learner/blob/9326e204f2a658139270883de9a33939ca515030/genau.apk">App APK file on GitHub</a>
                    </div>
                </ProjectDescription>
                <div className="textBox">
                    <h3>GOAL</h3>
                    <p>
                        I wanted to achieve the following:
                    </p>
                    <p className="indent">
                        * organize german vocabulary into courses and units<br></br>
                        * tailor experience to the German language with explicit article buttons<br></br>
                        * autocomplete translate<br></br>
                        * have that spark of slighlty teasing the user<br></br>
                        * remind me to memorize words after time passes<br></br>
                    </p>
                </div>
                <div className="textBox">
                    <h3>CHALLANGES</h3>
                    <p>
                        It was my first relatively complex Android app. So, it took me plemty of time to create. But I 
                        also learned a lot about android development and applying my Kotlin Knowledge in practice. 
                    </p>
                </div>
                <div className="textBox">
                    <h3>DESIGN LANGUAGE</h3>
                    <p>
                        I did not feel the need to customize much as I like the official Android visual style and feel. So,
                        it adapts to user color pallete and feels like a native android app. 
                    </p>
                </div>
            </div>
            

        </>
    )
}

export default Genau