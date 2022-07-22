import styles from "./Projects.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import ProjectCard from "./components/ProjectCard";

const TestData = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
];

const Projects = () => {
    return (
        <div className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Projects</h1>

            <div className={styles.projectsCarousel}>
                <div className={styles.projectCardsContainer}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
};

export default Projects;
