import styles from "styles/Home.module.scss";
import { Hero, About, Skills } from "components/Sections";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles["container--margin"]}>
                <Hero />
                <About />
                <Skills />
            </div>
        </div>
    );
};

export default Home;
