import header from "../../assets/projects/loggedout/header.png"
import Gallery from "../../atomics/gallery";

import top from "../../assets/projects/loggedout/top.png"

import { ProjectDescription, SimpleHeader } from "../../atomics/projects";

function Loggedout(){
	//this is description info
	const date="2026";
	const tags=["Python","Jupyter_notebooks",];
	const location="PERSONAL PROJECT";
	const title="LOGGEDOUT LINKDING ANALYZER";

	return (
		<>
			<SimpleHeader src={header} title={title}></SimpleHeader>
			<div className="contentBox">
				<ProjectDescription date={date} tags={tags} location={location}>
					<p><br></br>
						A simple tool to analyze LinkdIn posting for most common key words for a given query and thus predict
						best words to include in a CV.
						<br></br><br></br>
					</p>
					<a href="https://github.com/TPdkr/loggedout">GitHub repository</a>
				</ProjectDescription>				
				<div className="textBox">
                    <h3>GOAL</h3>
                    <p>
                        I wanted to achieve the following:
                    </p>
                    <p className="indent">
                        * make it easy to spot key words for a given query on LinkdIn so that I would be able to include them
						in my CV<br></br>
						* crawl the LindIn page and take only most relevant sections and data
						* exclude common words that are not relevant 
                    </p>
                </div>
                <div className="textBox">
                    <h3>CHALLANGES AND REASONS</h3>
                    <p>
                        I learned to make a simple web crawler, that fetched data using Python. I just wanted to have some fun and to experiment with 
						this project to be honest.
                    </p>
                </div>
				
				<div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--big"}}>
					<h3 style={{ marginBottom: "var(--small)" }}>EXAMPLE OUTPUT:</h3>
					<img src={top} alt="Example output showing a rating of words" style={{ maxWidth: "min(48rem,100%)", height: 'auto' }}></img>
				</div>
			</div>
		</>
	)
}

export default Loggedout