import styles from "./gallery.module.css";

function Gallery({pictures}){
    return (
        <div className={styles.gallery}>
            {pictures.map((pic, index)=>
                <div className={styles.pic} key={index}>
                    <img src={pic.src} className={styles.img}></img>
                </div>
            )}
        </div>
    );
}

export default Gallery