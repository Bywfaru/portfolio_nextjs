import styles from "./About.module.scss";
import homeStyles from "styles/Home.module.scss";
import sectionsStyles from "../Sections.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Anchor } from "../../";

const About = () => {
    return (
        <section className={sectionsStyles.container}>
            <Anchor name={"about"} />
            <h1 className={homeStyles.heading}>Hi, I&apos;m William</h1>
            <div className={styles.avatarContainer}>
                <Image
                    src={"/assets/images/social-media/github-avatar.png"}
                    width={156}
                    height={156}
                    alt={"Github avatar"}
                    className={styles.avatar}
                />
            </div>
            <h2 className={homeStyles.subHeading}>Pleased to meet you!</h2>
            <p>
                I&apos;m a 23-year old full-stack web developer with a burning
                passion for web design and development. I&apos;m a graduate of
                British Columbia Institute of Technology, where I completed my{" "}
                <em>
                    <a
                        href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Computer Systems Technology - Web and Mobile Development
                    </a>
                </em>{" "}
                diploma.
                <br />
                <br />
                Aside from web development, I would love to pursue game design
                and development. I have always dreamed about telling moving
                tales through exciting gameplay accompanied by breathtaking art.
            </p>
        </section>
    );
};

export default About;
