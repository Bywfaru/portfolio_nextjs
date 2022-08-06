import styles from "./Education.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";

const Education = () => {
    return (
        <div className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Education</h1>

            <div className={styles.schoolsContainer}>
                <div className={styles.schoolContainer}>
                    <span className={styles.schoolName}>
                        British Columbia Institute of Technology
                    </span>
                    <span className={styles.schoolOption}>
                        Computer Systems Technology - Web and Mobile Development
                    </span>
                    <span className={styles.schoolGraduated}>
                        Graduated Dec 2021 - Diploma
                    </span>
                    <span className={styles.schoolYears}>
                        Jan 2020 - Dec 2021
                    </span>
                </div>

                <div className={styles.schoolContainer}>
                    <span className={styles.schoolName}>Douglas College</span>
                    <span className={styles.schoolOption}>
                        Computing Studies and Information Systems
                    </span>
                    <span className={styles.schoolGraduated}>
                        Completed courses: <br />
                        <span className={styles.schoolCompletedCourses}>
                            C++ Programming, Introduction to Programming,
                            Calculus, Introduction to Programming II, Data
                            Structures & Algorithms, Calculus II, Business
                            Statistics, Linear Algebra, Academic Writing,
                            Discrete Mathematics I, Introduction to Programming
                            II
                        </span>
                    </span>
                    <span className={styles.schoolYears}>
                        Sep 2017 - May 2019
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Education;
