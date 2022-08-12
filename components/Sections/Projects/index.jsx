import { useState } from "react";
import styles from "./Projects.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import ProjectCard from "./components/ProjectCard";
import projects from "configs/projects.json";

const Projects = () => {
    const [visibleProject, setVisibleProject] = useState(0);

    const handleArrowClick = (event) => {
        const { value } = event.target;

        if (visibleProject + +value >= projects.length) {
            setVisibleProject(0);
        } else if (visibleProject + +value < 0) {
            setVisibleProject(projects.length - 1);
        } else {
            setVisibleProject(visibleProject + +value);
        }
    };

    const handleProgressionStepClick = (event) => {
        const { value } = event.target;

        setVisibleProject(+value);
    };

    const getIsQueued = (index) => {
        let nextIndex = visibleProject + 1;
        let prevIndex = visibleProject - 1;

        if (nextIndex > projects.length - 1) nextIndex = 0;
        if (prevIndex < 0) prevIndex = projects.length - 1;

        return index === nextIndex || index === prevIndex;
    };

    return (
        <section id={"projects"} className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Projects</h1>

            <span className={styles.projectTitle}>
                {projects[visibleProject].name}
            </span>

            <div className={styles.projectCardsContainer}>
                <button
                    className={`${styles.projectNavButton} ${styles.projectNavButtonLeft}`}
                    onClick={handleArrowClick}
                    value={-1}
                >
                    {"<"}
                </button>
                <button
                    className={`${styles.projectNavButton} ${styles.projectNavButtonRight}`}
                    onClick={handleArrowClick}
                    value={1}
                >
                    {">"}
                </button>

                <div className={styles.progressionStepContainer}>
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            value={index}
                            onClick={handleProgressionStepClick}
                            className={
                                styles[
                                    "progressionStep" +
                                        (visibleProject === index
                                            ? "Active"
                                            : "")
                                ]
                            }
                        ></button>
                    ))}
                </div>

                <div className={styles.projectCardContainer}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            url={project.url}
                            screenshot={project.screenshot}
                            isVisible={visibleProject === index}
                            isQueued={getIsQueued(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
