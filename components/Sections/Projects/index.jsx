import { useState } from "react";
import styles from "./Projects.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import ProjectCard from "./components/ProjectCard";
import projects from "res/projects.json";
import { Anchor } from "../../";
import Image from "next/image";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

const Projects = () => {
    const [visibleProject, setVisibleProject] = useState(0);

    const handleArrowClick = (event) => {
        const { value } = event.target;
        let newValue = visibleProject + +value;

        if (newValue > projects.length - 1) newValue = 0;
        if (newValue < 0) newValue = projects.length - 1;

        console.log(newValue);

        setVisibleProject(newValue);
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
        <section className={sectionsStyles.container}>
            <Anchor name={"projects"} />

            <h1 className={homeStyles.heading}>Projects</h1>

            <div className={styles.laptopContainer}>
                <Image
                    src={"/assets/images/blank_laptop.jpg"}
                    alt={"Laptop"}
                    layout={"fill"}
                    objectFit={"contain"}
                />

                <div className={styles.projectCardsContainer}>
                    <button
                        className={`${styles.projectNavButton} ${styles.projectNavButtonLeft}`}
                        onClick={handleArrowClick}
                        value={-1}
                    >
                        <BsCaretLeft className={styles.projectNavButtonIcon} />
                    </button>
                    <button
                        className={`${styles.projectNavButton} ${styles.projectNavButtonRight}`}
                        onClick={handleArrowClick}
                        value={1}
                    >
                        <BsCaretRight className={styles.projectNavButtonIcon} />
                    </button>

                    <div className={styles.progressionStepContainer}>
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                value={index}
                                onClick={handleProgressionStepClick}
                                className={
                                    visibleProject === index
                                        ? styles.progressionStepActive
                                        : styles.progressionStep
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
            </div>

            <div className={styles.smartphoneContainer}>
                <div className={styles.smartphoneContainerImage}>
                    <Image
                        src={"/assets/images/blank_smartphone.png"}
                        alt={"Smartphone"}
                        layout={"fill"}
                        objectFit={"contain"}
                    />
                </div>

                <div className={styles.projectCardsContainer}>
                    <button
                        className={`${styles.projectNavButton} ${styles.projectNavButtonLeft}`}
                        onClick={handleArrowClick}
                        value={-1}
                    >
                        <BsCaretLeft className={styles.projectNavButtonIcon} />
                    </button>
                    <button
                        className={`${styles.projectNavButton} ${styles.projectNavButtonRight}`}
                        onClick={handleArrowClick}
                        value={1}
                    >
                        <BsCaretRight className={styles.projectNavButtonIcon} />
                    </button>

                    <div className={styles.progressionStepContainer}>
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                value={index}
                                onClick={handleProgressionStepClick}
                                className={
                                    visibleProject === index
                                        ? styles.progressionStepActive
                                        : styles.progressionStep
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
            </div>
        </section>
    );
};

export default Projects;
