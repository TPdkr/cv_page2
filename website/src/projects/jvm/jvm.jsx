import header from "../../assets/projects/jvm/header.png"

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function JVM(){
    const date="2024";
    const tags =["Kotlin"];

    const assignments = [
        {
            title: "Coroutines and channels course",
            href: "https://github.com/TPdkr/Coroutines_and_channels",
            desc: "Course on Kotlin coroutines and asynchronous programming. It explains how to use coroutines in IntelliJ IDEA to perform network requests without blocking the underlying thread or callbacks"
        },
        {
            title: "Hanoi towets",
            href: "https://github.com/TPdkr/Hanoi_Towers",
            desc: "CLI for a well know Hanoi towers problem implemented in Kotlin."
        },
        {
            title: "Kotlin CSC course part 3",
            href: "https://github.com/TPdkr/CSC_Kotlin_Course_Part3",
            desc: "3d part of the Kotlin course I completed for the university course."
        },
        {
            title: "Intelij IDEA refractoring",
            href: "https://github.com/TPdkr/Refactoring_Course)",
            desc: "A course about how to use the IDEA refractoring features."
        },
        {
            title: "CSC kotlin course",
            href: "https://github.com/TPdkr/CSC_Kotlin_Course",
            desc: "A course on Kotlin basic consisting of multiple subprojects. Each one helps by splitting the task into clear steps."
        }
    ]
    return (
        <>
            <SimpleHeader src={header} title="DEVELOPMENT IN JAVA VIRTUAL MACHINE"></SimpleHeader>
            <div className="contentBox">
                <ProjectDescription date={date} tags={tags} location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN">
                    <p><br></br>
                        This is a development in <b>Kotlin</b> course that taught the inner working of the Java virtual machine 
                        as well as coding in the language. It consisted of many assignments listed below. 
                        <br></br><br></br>
                        It was very practice orineted with a lot of practice and tutorials.
                    </p>
                </ProjectDescription>
                <div>
                    <h3 className="inv">ASSIGNMENTS</h3>
                    <div className="assignmentsGrid">
                        {
                            assignments.map((assignment, index)=>
                                <Assignment assignment={assignment} index={index}/>
                            )
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

function Assignment({assignment, index}){
    return (
        <div key={index}>
            <h4>{assignment.title}</h4>
            <p><br></br>
                {assignment.desc}
                <br></br><br></br>
            </p>
            <a href={assignment.href} target="_blank">GitHub repository</a>
        </div>
    );
}

export default JVM
