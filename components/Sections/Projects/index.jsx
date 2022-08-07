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

    return (
        <section id={"projects"} className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Projects</h1>

            <div className={styles.projectCardsContainer}>
                <div className={styles.projectNavButtonContainer}>
                    <button
                        className={styles.projectNavButton}
                        onClick={handleArrowClick}
                        value={-1}
                    >
                        {"<"}
                    </button>
                    <button
                        className={styles.projectNavButton}
                        onClick={handleArrowClick}
                        value={1}
                    >
                        {">"}
                    </button>
                </div>

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

                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        url={project.url}
                        screenshot={project.screenshot}
                        isVisible={visibleProject === index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
