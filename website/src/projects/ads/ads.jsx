import header from "../../assets/projects/ads/header.png"

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function ADS(){
    //this is description info
    const date="2024";
    const tags=["Cpp","C","Makefiles", "Python"];
    const location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN";
    const title="ALGORITHMS AND DATA STRUCTURES";

    return (
        <>
            <SimpleHeader src={header} title={title}></SimpleHeader>
            <div className="contentBox">
                <ProjectDescription date={date} tags={tags} location={location}>
                    <p>
                        <br></br>
                        This was a 1st year couse that taught essential algorithms such as ones related to <b>sorting and binary trees</b>. It had 
                        <b>many assignments and coding involved</b>. We were often asked to implement a certian algorithm and to track how well it performed.
                        <br></br><br></br>
                        Each week we had an assignment to complete and a certain result was awarded with bonus points for the exam. Tasks were
                        implemented in C/C++ and the visualizations used Python and matplotlib.
                        <br></br><br></br>
                    </p>
                    <a href="https://github.com/TPdkr/algorithms-and-data-structures-hw">GitHub repository with assignments</a>
                </ProjectDescription>
            </div>
        </>
    )
}

export default ADS