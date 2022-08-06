import styles from "./Projects.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import ProjectCard from "./components/ProjectCard";
import projects from "configs/projects.json";

const Projects = () => {
    return (
        <div className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Projects</h1>

            <div className={styles.projectCardsContainer}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        url={project.url}
                        screenshot={project.screenshot}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
