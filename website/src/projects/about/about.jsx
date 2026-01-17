import styles from "./about.module.css";

//assets
import header from "../../assets/projects/about/header.png"
import circuit from "../../assets/projects/about/circuit.png"

//gallery
import ref1 from "../../assets/projects/about/ref1.jpeg"
import ref2 from "../../assets/projects/about/ref2.jpeg"
import ref3 from "../../assets/projects/about/ref3.jpeg"
import ref4 from "../../assets/projects/about/ref4.jpg"

//projects elements
import { SimpleHeader, ProjectDescription } from "../../atomics/projects.jsx";

//basic elements
import Button from "../../atomics/button.jsx";
import Separator from "../../atomics/separator.jsx";
import { Cell, FilledCell } from "../../atomics/grid.jsx";
import Gallery from "../../atomics/gallery.jsx";

function About(){
    //this is description info
    const date="2026-ONGOING";
    const tags=["React", "HTML","JS","CSS","vite"];

    //this is the gallery list contents
    const references =[
        {
            src: ref1,
            desc: (<p>this is a references</p>)
        },
        {
            src: ref2,
            desc: (<p>this is a reference with a longer description that lasts multiple lines</p>)
        },
        {
            src: ref3,
            desc: (<p>this is a pic</p>)
        },
        {
            src: ref4,
            desc: (<p>this is a picture</p>)
        }
    ]

    return (
        <>
            <SimpleHeader title="PORTFOLIO WEBSITE 2.0" src={header}/>
            <div className={styles.content}>
                <ProjectDescription date={date} tags={tags} location="PERSONAL PROJECT">
                    <p>
                        <br></br>
                        This is my perosnal website aiming to make it easier to share contacts, showcase my projects and link my digital presence together.
                        It is meant to contain all info you can also find in my CV and more. This is due to the fact that CVs have very limited space.
                        <br></br><br></br>
                        This page is meant to convey a pretty detailed overview of this project if you are into that. More on the design side.
                        So, it can be a nice read, but I tried to also include plenty of nice visuals. For more technical details repo readme file works better.
                        <br></br><br></br>
                        I attempted doing a similar thing before. This is a refinement on that idea.
                        <br></br><br></br>
                    </p>
                    <a href="https://github.com/TPdkr/cv_page2">GitHub repo link</a>
                </ProjectDescription>
                {/** this is the goals section */}
                <div className={styles.goals}>
                    <div className={styles.goalsText}>
                        <div>
                            <h3>GOALS</h3>
                            <p>
                                The clear goals for this project are:
                            </p>
                            <p className={`indent ${styles.highlight}`}>
                                - show my <b>projects</b><br></br>
                                - provide <b>contact information</b><br></br>
                                - describe <b>my education and experience</b><br></br>
                                - have a personal <b>visual language</b> that resonates with me personally<br></br>
                            </p>
                            <p><br></br>
                                The first 3 I addressed through website contents and strucure, that imitates the standard CV section.
                                However, for visual language I had to dig deeper into my interests and wants.
                            </p>
                        </div>
                        <div>
                            <h3>WORK PROCESS</h3>
                            <p className={styles.highlight}>
                                1. identify key sections and pages<br></br>
                                2. gather references and create a visual langauge<br></br>
                                3. build prototypes in Luncay and choose the best ones<br></br>
                                4. implement the design in code and launch on GitHub pages<br></br>
                            </p>
                            <p><br></br>
                                Since I already attempted to create a website for this purpose it served as a base in terms
                                of sections to include and information architecture. But content is largely different.
                            </p>
                        </div>
                        <div>
                            <h3 className="inv">DESIGN LANGUAGE</h3>
                            <p><br></br>
                                It is inspired by CLIs and old computers. Thus it embraces <b>simplicity </b> 
                                 and working with <b>limitations</b> such as a small color pallete and low
                                resolution.
                                <br></br><br></br>
                                Yet I also tried to keep it <b>modern</b> both visually, feature and architecture wise. 
                            </p>
                        </div>
                    </div>
                    <img src={circuit} className={styles.circuit}></img>
                </div>
                {/** gallery is presented here */}
                <Gallery pictures={references}/>
                {/** this is the elements used part */}
                <Separator simb="-"></Separator>
                <div className={styles.elements}>
                    <div>
                        <h2 className="inv">ELEMENTS USED</h2>
                        <h1>H1 header</h1>
                        <h2>H2 header</h2>
                        <h3>H3 header</h3>
                        <h4>H4 header</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest.
                        </p>
                        <a href="https://youtu.be/QGsevnbItdU?si=KCJxuE7fQAKULDM9">link styling</a>
                    </div>
                    <div className={styles.elementsShoe}>
                        <Button>primary button type</Button>
                        <Button type="bright">bright button type</Button>
                        <h4>A separator can use any string and splits sections</h4>
                        <Separator simb=";) "></Separator>
                        <Cell>simple cell</Cell>
                        <FilledCell>filled cell</FilledCell>
                    </div>
                </div>
                 <Separator simb="-"></Separator>


            </div>

        </>
    );
}

export default About