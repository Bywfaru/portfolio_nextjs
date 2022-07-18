import styles from "styles/Home.module.scss";
import { Hero, About, Skills } from "components/Sections";
import { Navbar } from "components";

const Home = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.containerMargin}>
                <Hero />
                <About />
                <Skills />
            </div>
        </div>
    );
};

export default Home;
