import styles from "./About.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import Image from "next/image";

const About = () => {
    return (
        <div className={sectionsStyles.container}>
            <h1 className={homeStyles.heading}>Who Am I?</h1>

            <div className={styles.avatar__container}>
                <Image
                    src={"/assets/images/social-media/github-avatar.png"}
                    width={156}
                    height={156}
                    alt={"Github avatar"}
                    className={styles.avatar}
                />
            </div>

            <h2 className={homeStyles["sub-heading"]}>Hi, I&apos;m William</h2>
            <p>
                I&apos;m a 23-year old full-stack web developer with a burning
                passion for web design and development. I&apos;m a graduate of
                British Columbia Institute of Technology, where I completed my{" "}
                <a href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/">
                    <em>
                        Computer Systems Technology - Web and Mobile Development
                    </em>{" "}
                </a>
                diploma.
                <br />
                <br />
                Aside from web development, I would love to pursue game design
                and development. I have always dreamed about telling a moving
                tale through exciting gameplay and beautiful arts and graphics.
            </p>
        </div>
    );
};

export default About;
