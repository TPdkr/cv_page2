import styles from "./button.module.css";

/**
 * My button function with appropriate styling
 * 
 * @param {*} children - content of the button
 * @returns 
 */
function Button({children, type="primary", onClick=()=>{console.log("I was clicked heehehe");}}){
    /*
    PRIMARY BUTTON
    */
    const contStPr ={
        backgroundColor: "var(--onBackground)",
        border: "3px solid var(--onBackground)"
    };

    const ButtonStPr={
        backgroundColor: "var(--background)",
        color: "var(--onBackground)"
    };

    /*
    BRIGHT BUTTON
    */
    const contStBr ={
        backgroundColor: "var(--background)",
        border: "3px solid var(--onBackground)"
    };

    const ButtonStBr={
        backgroundColor: "var(--onBackground)",
        color: "var(--background)"
    };

    /*
    SETTING BUTTON STYLE
    */
    let contSt = contStPr;
    let ButtonSt = ButtonStPr;
    if (type=="primary"){
        contSt = contStPr;
        ButtonSt = ButtonStPr;
    } else if(type=="bright"){
        contSt = contStBr;
        ButtonSt = ButtonStBr;
    }

    return (
        <div className={styles.ButtonContainer} style={contSt} onClick={onClick}>
            <button className={styles.Button} style={ButtonSt}>
                {children}
            </button>
        </div>
    );
}

export default Button