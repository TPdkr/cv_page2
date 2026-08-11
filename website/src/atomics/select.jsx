import { useState, useRef, useEffect } from "react";
import styles from "./select.module.css";

function MultiSelectDropdown({ label, options, selected, setSelected }) {
	//const [selected, setSelected] = useState(() => new Set(options)); // all selected by default
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef(null);

	// close when clicking outside
	useEffect(() => {
		function handleClickOutside(e) {
			if (containerRef.current && !containerRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	function toggleOption(option) {
		setSelected((prev) => {
			const next = new Set(prev);
			next.has(option) ? next.delete(option) : next.add(option);
			return next;
		});
	}

	function selectAll() {
		setSelected(new Set(options));
	}

	function selectNone() {
		setSelected(new Set());
	}

	const summary =
		selected.size === options.length
			? "All"
			: selected.size === 0
			? "None"
			: `${selected.size} selected`;

	return (
		<div className={styles.wrapper} ref={containerRef}>
			<label className={styles.label}>{label}</label>

			<button
				type="button"
				className={styles.trigger}
				onClick={() => setIsOpen((o) => !o)}
			>
				{summary}
				<span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
			</button>

			{isOpen && (
				<div className={styles.dropdown}>
					<div className={styles.quickActions}>
						<button type="button" onClick={selectAll} className={styles.quickBtn}>
							All
						</button>
						<button type="button" onClick={selectNone} className={styles.quickBtn}>
							None
						</button>
					</div>

					<ul className={styles.optionList}>
						{options.map((option) => (
							<li key={option} onClick={() => toggleOption(option)} className={styles.option}>
								<span className={styles.checkbox}>
									{selected.has(option) ? "[x]" : "[ ]"}
								</span>
								{option}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default MultiSelectDropdown;