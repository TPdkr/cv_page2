import header from "../../assets/projects/cc/header.png"

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function CCpp(){
    //this is description info
    const date="2023";
    const tags=["Cpp","C","Makefiles"];
    const location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN";
    const title="PROGRAMMING IN C AND C++";

    return (
        <>
            <SimpleHeader src={header} title={title}></SimpleHeader>
            <div className="contentBox">
                <ProjectDescription date={date} tags={tags} location={location}>
                    <p><br></br>
                        Introductory course on programming in <b>C, C++ and using Makefiles</b>. It had weekly assignments, which contributed to 33% 
                        of the grade for the course. The course covered all essential parts of both languages and some algorithms to make use of them.
                        Also, all assignments are grouped into a repository linked below.
                        <br></br><br></br>
                    </p>
                    <a href="https://github.com/TPdkr/Programming-in-C-and-C-">GitHub repository with assignments</a>
                </ProjectDescription>
            </div>
        </>
    )
}

export default CCpp