import header from "../../assets/projects/caughtup/header.png"
import Gallery from "../../atomics/gallery";

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function Caughtup(){
	//this is description info
	const date="2026";
	const tags=["Python","Shell"];
	const location="PERSONAL PROJECT";
	const title="CAUGHTUP CLI SERIES TRACKER";

	return (
		<>
			<SimpleHeader src={header} title={title}></SimpleHeader>
			<div className="contentBox">
				<ProjectDescription date={date} tags={tags} location={location}>
					<p><br></br>
						A minimalistic CLI tool that allows tracking series watch progress independent of streaming platforms as well as 
						a cross platform schedule of upcoming episodes. System also includes tagging and search functions that allow the user to 
						organize the data.
						<br></br><br></br>
					</p>
					<a href="https://github.com/TPdkr/caughtup">GitHub repository</a>
				</ProjectDescription>{/**TODO set the link and header to actual pics */}
				<div>
					<h2>Project gallery:</h2>
					{/**<Gallery pictures={{}}/>{/** TODO add actual images */}
				</div>
				<div className="textBox">
                    <h3>GOAL</h3>
                    <p>
                        I wanted to achieve the following:
                    </p>
                    <p className="indent">
                        * make a simple, but practical and useful CLI to track series watch progress<br></br>
						* be able to organize the data using tags and search it<br></br>
						* provide a list of upcoming episodes with a single command in correct order<br></br>
						* apply software engineering principles and generally make the project easy to maintain<br></br>
                    </p>
                </div>
                <div className="textBox">
                    <h3>CHALLANGES</h3>
                    <p>
                        I learned to make a nice Python CLI using the clicks library and applied the UML in practice
						to design and implement the system. This allowed for the project to have a more comprehensice documentation
						section compared to a lot fo my past entries.
                    </p>
                </div>
			</div>
		</>
	)
}

export default Caughtup