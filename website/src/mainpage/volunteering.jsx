import Separator from "../atomics/separator";
import styles from "./volunteering.module.css";

import { getCheck } from "../navbar/check.jsx";

function Volunteering(){
    const {isSafe} = getCheck();

    const spectrum = (
        <>
            {/** SPECTRUM CLUB */}
            <div>
                <p className="inv">SPECTRUM CLUB</p>
                <p><br></br>
                    <b>BOARD MEMBER OF SPECTRUM, CONSTRUCTOR UNIVERSITY BREMEN</b><br></br>
                    2023-2026<br></br><br></br>

                    Participated in a queer straight alliance organization. Helped organize club and campus wide events and support the local community.
                    Some of our events had up to 100 attendees and significant success with univeristy community.
                </p>
                <p><br></br>RESPONSIBILITES:</p>
                <p className="indent">
                    - managing club finances<br></br>
                    - event planning and organization<br></br>
                    - participating in board meetings<br></br>
                    - applying for and aquiring funding<br></br>
                </p>
            </div>
        </>
    )

    return (<>
    <div className={styles.header}>
        <Separator simb="-"/>
        <h2>
            VOLUNTEERING
        </h2>
        <Separator simb="-"/>
    </div>
    {/** PEER MENTORSHIP */}
    <div>
        <p className="inv">PEER MENTOR</p>
        <p><br></br>
            <b>PEER MENTOR AT COLLEGE 3, CONSTRUCTOR UNIVERSITY BREMEN</b><br></br>
            2024-ONGOING<br></br><br></br>

            Volunteered to help new students find their way around campus and inform them on univeristy matters.
            Also, focused on promoting health and informing about the German health system. Awarded for outstanding
            performance in spring 2025.
        </p>
        <p><br></br>RESPONSIBILITES:</p>
        <p className="indent">
            - helping with organizing campus events<br></br>
            - introducing students to how university life runs<br></br>
            - looking over an assigned group of 1st year student and helping them<br></br>
            - explaining the German health system<br></br>
        </p>
    </div>
    {(isSafe)? spectrum : <></>}
    {/** CROCHET CLUB */}
    <div>
        <p className="inv">CROCHET CLUB</p>
        <p><br></br>
            <b>PREDIDENT OF CROCHET CLUB, CONSTRUCTOR UNIVERSITY BREMEN</b><br></br>
            2023-ONGOING<br></br><br></br>

            Organized events and onboarded people to the art and craft of crochet. Managed club finances.
            Participated in campus wide events such as a charity winter market and an art exhibit
        </p>
        <p><br></br>RESPONSIBILITES:</p>
        <p className="indent">
            - managing club hours(around 2 times a week)<br></br>
            - teaching newcomers<br></br>
            - club's financial side<br></br>
            - promotion of events and the club on university campus<br></br>
        </p>
    </div>
    </>);
}

export default Volunteering