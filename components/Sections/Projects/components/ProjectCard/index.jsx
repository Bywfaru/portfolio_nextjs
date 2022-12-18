import styles from "./ProjectCard.module.scss";
import Image from "next/image";

const ProjectCard = ({
  isVisible = true,
  name,
  url,
  screenshot,
  isQueued = false,
}) => {
  return (
    <>
      <div
        className={styles.projectCard}
        style={{
          display: isVisible || isQueued ? "block" : "none",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "all" : "none",
        }}
      >
        {isVisible && (
          <>
            <a
              href={url}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className={styles.overlay}>
                <span className={styles.overlayProjectName}>{name}</span>
              </div>
              <Image
                src={screenshot}
                layout={"fill"}
                objectFit={"contain"}
                alt={`${name} screenshot`}
              />
            </a>
          </>
        )}

        {isQueued && (
          <Image
            src={screenshot}
            layout={"fill"}
            objectFit={"contain"}
            alt={`${name} screenshot`}
          />
        )}
      </div>
    </>
  );
};

export default ProjectCard;
