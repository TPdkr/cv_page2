import styles from "./newsletter.module.css";
import Button from "../atomics/button";
import Separator from "../atomics/separator";

import email_pic from "../assets/letter/email.png";

import { useState } from "react";
import fm from 'front-matter';
import {Folder} from "../atomics/folder.jsx";

const BUTTONDOWN_USERNAME = "TPdkr";

function Newsletter(){
const [isFolderOpen, setIsFolderOpen] = useState(false);

//paths are loaded into the thing
const emails = import.meta.glob('../content/newsletters/*.md', {
	eager: true,   // resolve immediately at build time, not as async imports
	query: '?raw', // import as raw string content, not as a parsed JS module
	import: 'default',
});

//here the contents are parsed into text
const emails_data = Object.entries(emails).map(([path, content]) => {
	const { attributes, body } = fm(content);
	return { attributes, body };
});


const isOpen = (isFolderOpen)? styles.open : styles.closed;

	return(
		<div className={styles.Newsletter}>
			<div className={styles.headerContainer}>
				<img src={email_pic} alt="email icon" />
				<div className={styles.header}>
					<h2>Subscribe to my newsletter</h2>
					<p>Get notified when I post new content on my website and read about interesting bits I find. I promise not to spam you!</p>
					<form className={styles.form}
					action={`https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`} 
					method="POST" 
					target="_blank" 
					noValidate>
						<input type="hidden" name="embed" value="1" />
						<input type="hidden" name="tag" value="mywebsite" />
						<input type="email" name="email" placeholder="Enter your email" required />
						<Button func_type="submit">Subscribe</Button>
					</form>
				</div>
			</div>
			<div className={styles.archive}>
				<div><Separator simb="~" /></div>
				<h3>Newsletter Archive</h3>
				<p>Check out my previous newsletters below.</p>
				<div className={styles.folders}>
					{emails_data.map(({ attributes, body }, index) => (
						<Folder key={index} folderName={attributes.title} stagger={index}>
							<div dangerouslySetInnerHTML={{ __html: body }} />
						</Folder>
					))}
				</div>
			</div>
		</div>
	)
}

export default Newsletter