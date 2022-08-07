import styles from "./Skills.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import programmingLanguages from "configs/programming_languages.json";
import technologies from "configs/technologies.json";
import Image from "next/image";

const Skills = () => {
    return (
        <section id={"skills"} className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Skills</h1>

            <div className={styles.container}>
                <div className={styles.skillsContainer}>
                    <h2 className={homeStyles.subHeading}>
                        Programming Languages
                    </h2>

                    <div className={styles.logoContainer}>
                        {programmingLanguages.map((language, index) => (
                            <Image
                                key={index}
                                src={language.logo}
                                width={50}
                                height={50}
                                alt={`${language.name} logo`}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.skillsContainer}>
                    <h2 className={homeStyles.subHeading}>Technologies</h2>

                    <div className={styles.logoContainer}>
                        {technologies.map((technology, index) => (
                            <Image
                                key={index}
                                src={technology.logo}
                                width={50}
                                height={50}
                                alt={`${technology.name} logo`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
