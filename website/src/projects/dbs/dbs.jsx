import styles from "./dbs.module.css";

import header from "../../assets/projects/dbs/header.png"

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function DBs(){
    const date="2024";
    const tags=[ "PHP","SQL","CSS","HTML","JS"];

    return(<>
        <SimpleHeader src={header} title="DATABASES AND WEB SERVICES"></SimpleHeader>
        <div className="contentBox">
            <ProjectDescription date={date} tags={tags} location="COMPLETED AT CONSTRUCTOR UNIVERISTY BREMEN" grade="95% (1.00)">
                <p>
                    <br></br>
                    A group project for a university course aimed at producing a simple food rating website.
                    Project completed in a team of 4. <b>Version control, PHP server and mySQL database</b>
                    were hosted on a now shut down university server.
                    <br></br><br></br>
                    This was conducted based on sequentially completing assignments each asking for a new 
                    part of the website or databse to be added. The final product received a good grade, but 
                    I would not call a fully fledged product. However, this was also an educational course
                    aimed at teaching about databases and for that it was sufficient.
                </p>
            </ProjectDescription>
            <div className="textBox">
                <h3>GOAL</h3>
                <p>
                    Create a simple servery food rating website <b>without</b> using any frameworks so as to 
                    better understand the basics of HTML and CSS and how they function before using higher
                    abstraction tools.
                    <br></br><br></br>
                    <b>We were tasked with</b>
                </p>
                <p className="indent">
                    * <b>Describe functionality</b> of the service<br></br>
                    * Create <b>ER diagram</b> of the future database<br></br>
                    * Convert the diagram into an <b>SQL schema, create tables</b><br></br>
                    * Design <b>SQL queries</b><br></br>
                    * Create a simple design language and a main page<br></br>
                    * Implement a <b>search component and input forms with autocomplete</b><br></br>
                    * Gather error logs<br></br>
                    * Integrate open street maps<br></br>
                </p>
            </div>
            <div className="textBox">
                <h3>MY ROLE</h3>
                <p>
                    The team had no clear roles since the project was relatively small and we all wanted to learn. So,
                    I had a hand at most tasks in one way or the other.
                </p>
            </div>
            <div className="textBox">
                <h3>CHALLANGES</h3>
                <p>
                    The main challange came with a lot of us having little to no experience with web development before
                    this. But it pushed us to learn faster and immediately apply the skills in the project.
                </p>
            </div>
        </div>

    </>)
}

export default DBs