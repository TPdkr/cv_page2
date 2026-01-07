import Separator from "../atomics/separator";
import styles from "./volunteering.module.css";

function Volunteering(){
    return (<>
    <Separator simb="*"/>
    <div className={styles.header}>
        <h2>
            VOLUNTEERING
        </h2>
    </div>
    <Separator simb="*"/>
    {/** CROCHET CLUB */}
    <div>
        <p className="inv">CROCHET CLUB</p>
        <p><br></br>
            <b>PREDIDENT OF CROCHET CLUB, CONSTRUCTOR UNIVERSITY BREMEN</b><br></br>
            2023-ONGOING<br></br><br></br>

            Organized events and onboarded people to the art and craft of crochet. Managed club finances.
        </p>
        <p className="indent"><br></br>
            RESPONSIBILITES:<br></br>
            - managing club hours<br></br>
            - teaching newcomers<br></br>
            - club financial records<br></br>
            - promotion of events and the club on university campus<br></br>
        </p>
    </div>
    {/** PEER MENTORSHIP */}
    <div>
        <p className="inv">PEER MENTOR</p>
        <p><br></br>
            <b>PEER MENTOR AT COLLEGE 3, CONSTRUCTOR UNIVERSITY BREMEN</b><br></br>
            2024-ONGOING<br></br><br></br>

            Volunteered to help new students find their way around campus and inform them on univeristy matters. Also, focused on promoting health and informing about the health system.
        </p>
        <p className="indent"><br></br>
            RESPONSIBILITES:<br></br>
            - helping with organizing campus events<br></br>
            - introducing students to how university life runs<br></br>
            - looking over an assigned group of 1st year student and helping them<br></br>
            - explaining the German health system<br></br>
        </p>
    </div>
    
    </>);
}

export default Volunteering