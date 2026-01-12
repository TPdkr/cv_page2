import styles from "./os.module.css";
import header from "../../assets/projects/os/header.png"

function OS(){
    return (
        <>
            <div className={styles.header}>
                <img src={header} className={styles.headerImg}/>
                <h2>OPERATING SYSTEMS ASSIGNMENTS</h2>
            </div>
            <div className={styles.pageContent}>
                <div>
                    <h2 className="inv">DESCRIPTION</h2>
                    <p className="indent"><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in voluptatem, ut postea variari voluptas distinguique possit, augeri amplificarique non possit. At etiam Athenis, ut e patre.In reque eo meliore, quo maior sit, mediocritatem desiderent. Sive enim ad sapientiam perveniri potest, non paranda nobis solum ea, sed fruenda etiam sapientia est; sive hoc difficile est, tamen nec modus est ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et tibi probatus videretur et iis, quos modo nominavi, cum inciderit, ut id meo arbitratu facerem.
Rerum necessitatibus saepe eveniet, ut et adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Sed cum ea, quae dixi, sole ipso illustriora et clariora sunt, si omnia deorsus e regione inferiorem.</p>
                </div>
                <div>
                    <h3 className="inv">ASSIGNMENTS</h3>
                </div>
            </div>
                
        </>
    );
}

export default OS