import styles from "./ProjectCard.module.scss";
import { useRef, useEffect } from "react";

const ProjectCard = () => {
    const cardRef = useRef(HTMLDivElement);

    return <div className={styles.projectCard} ref={cardRef}></div>;
};

export default ProjectCard;
