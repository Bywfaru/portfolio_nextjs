import styles from "@/styles/pages/Home.module.scss";
import {
    Hero,
    About,
    Skills,
    Education,
    Contact,
    Projects,
} from "@/components/Sections";
import { Navbar } from "@/components";

const Home = () => {
    return (
        <div className={styles.container}>
            <Navbar />

            <div className={styles.containerMargin}>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </div>
        </div>
    );
};

export default Home;
