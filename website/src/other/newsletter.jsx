import styles from "./newsletter.module.css";
import Button from "../atomics/button";
import Separator from "../atomics/separator";

import email_pic from "../assets/letter/email.png";

import { useState } from "react";
import {Folder} from "../atomics/folder.jsx";

const BUTTONDOWN_USERNAME = "TPdkr";

function Newsletter(){
const [isFolderOpen, setIsFolderOpen] = useState(false);

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
					<Folder folderName="2024">
						Something something 
					</Folder>
					<Folder folderName="2023" stagger={1}>
						something something something
					</Folder>
				</div>
			</div>
		</div>
	)
}

export default Newsletter