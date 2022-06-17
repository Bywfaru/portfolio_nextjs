import styles from "./Skills.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";

const Skills = () => {
    return (
        <div className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Skills</h1>

            <h2 className={homeStyles["sub-heading"]}>Programming Languages</h2>

            <h2 className={homeStyles["sub-heading"]}>Technologies</h2>
        </div>
    );
};

export default Skills;
