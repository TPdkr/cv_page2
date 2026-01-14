import styles from "./projects.module.css";

export function SimpleHeader({title, src}){
    return(
        <div className={styles.header}>
            <img src={src} className={styles.headerImg}/>
            <h2>{title}</h2>
        </div>
    );
}

/**
 * Project snapshot line that shows the date
 * 
 * @date {date - the time of completion} 
 * @tags {list of tags as strings} 
 * @returns 
 */
export function ProjectSnapshot({date, tags}){

    return (
        <div className={styles.projectSnapshot}>
            <h4 className="inv">{date}</h4>
            <div className={styles.snapTags}>
                {tags.map((tag)=>
                <h4 
                className={styles.tag} 
                key={tag}
                style={{
                    backgroundColor: `var(--${tag})`
                }}
                >
                {tag}
                </h4>
            )}
            </div>
        </div>
    );
}

export function ProjectDescription({date, tags, location, children}){
    return(
    <div>
        <ProjectSnapshot date={date} tags={tags}/>
        <h2 className="inv">DESCRIPTION</h2>
        {children}
        <h4 className={styles.loc}>{location}</h4>
    </div>);
}