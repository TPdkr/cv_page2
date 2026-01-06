import styles from "./grid.module.css";

export function Cell({children, className=""}){
    return (
        <div className={`${styles.cell} ${className}`}>
            {children}
        </div>
    );
}

export function FilledCell({children, className=""}){
    return (
        <div className={`${styles.filledCell} ${className}`}>
            {children}
        </div>
    )
}