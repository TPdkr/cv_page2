import styles from "./separator.module.css";

function Separator({simb}){
    return (
        <div className={styles.Separator}>
            {simb.repeat(1000)}
        </div>
    );
}

export default Separator