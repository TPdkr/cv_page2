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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas.
                        <br></br>
                    </p>
                    <div className={styles.links}>
                        <a href="https://github.com/TPdkr/learner"> GitHub repository link</a>
                        <a href="https://github.com/TPdkr/learner/blob/9326e204f2a658139270883de9a33939ca515030/genau.apk">App APK file on GitHub</a>
                    </div>
                </ProjectDescription>
            </div>
            

        </>
    )
}

export default Genau