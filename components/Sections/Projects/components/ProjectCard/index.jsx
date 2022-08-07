import styles from "./ProjectCard.module.scss";
import Image from "next/image";

const ProjectCard = ({ isVisible = true, name, url, screenshot }) => {
    return (
        <div
            className={styles.projectCard}
            style={{
                display: isVisible ? "block" : "none",
            }}
        >
            <Image
                src={screenshot}
                layout={"fill"}
                objectFit={"contain"}
                alt={""}
            />
        </div>
    );
};

export default ProjectCard;
