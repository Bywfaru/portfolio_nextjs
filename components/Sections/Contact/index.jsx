import styles from "./Contact.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";

const Contact = () => {
    return (
        <div className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Contact</h1>
        </div>
    );
};

export default Contact;
