import styles from './folder.module.css';

import { useState } from "react";

function Folder({folderName, stagger=0, children}) {
	const [isFolderOpen, setIsFolderOpen] = useState(false);
	
	const isOpen = (isFolderOpen)? styles.open : styles.closed;

	return (
		<div className={`${styles.folder} ${isOpen}`} onClick={() => setIsFolderOpen(!isFolderOpen)}>
			<div className={styles.folderHeader} style={{marginLeft: `${(stagger % 6) * 1.4+1}rem` }}>
				<h4>{folderName}</h4>
			</div>
			<div className={styles.folderContent}>
				<div>
					{children}
				</div>
			</div>
		</div>
	);
}

export {Folder};