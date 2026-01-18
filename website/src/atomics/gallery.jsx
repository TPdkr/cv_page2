import styles from "./gallery.module.css";

import { usePopUp, PopUp } from "./popup.jsx";
import { useState } from "react";

function Gallery({pictures}){
    //CURRENT IMAGE STATE
    const [currentPic, setPic] = useState(pictures[0]);

    //POP UP MENU AND ITS STATE
    const popUpState = usePopUp();
    const open = popUpState.open;
    const close = popUpState.close;
    const isOpen = popUpState.isOpen;

    const onPicClick = (pic)=>{
        setPic(pic);
        open();
    }

    return (
        <div>
            <div className={styles.gallery}>
                {pictures.map((pic, index)=>
                    <div className={styles.pic} key={index}>
                        <img src={pic.src} className={styles.img} onClick={()=>{onPicClick(pic);}}></img>
                    </div>
                )}
            </div>
            <PopUp close={close} isOpen={isOpen} maxWidth="100%">
                <div className={styles.popUpContent}>
                    <img src={currentPic.src} className={styles.popUpPic}></img>
                    {("desc" in currentPic)? <p className={styles.popUpDesc}>{currentPic.desc}</p> : <></>}
                </div>
            </PopUp>
        </div>

    );
}

export default Gallery