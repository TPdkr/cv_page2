import styles from "./popup.module.css";

import cross_l from "../assets/cross_light.svg";
import cross_d from "../assets/cross_dark.svg";

import { useTheme } from "../themer.jsx";
import { useState } from "react";

export function usePopUp() {
    const [isOpen, setOpen] = useState(false);
    const close = () => setOpen(false);
    const open = () => setOpen(true);
    
    return { isOpen, close, open };
}

export function PopUp({isOpen, close, maxWidth="30rem",children}){
    //STYLING CONDITIONAL ON INPUT
    const popStyle = {
        maxWidth: maxWidth
    }

    //THEME CONTEXT
    const {isLight} = useTheme();
    const cross = (isLight)? cross_d : cross_l;

    return (<div className={`${styles.popUpBack} ${(isOpen)? styles.open : styles.closed} `} onClick={close}>
        <div className={styles.popUpWindow} style={popStyle}>
            <img src={cross} className={styles.closePopUp}/>
            {children}
        </div>
    </div>);
}