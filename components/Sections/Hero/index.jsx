import { NameLogo, GetInTouchBtn } from "./components";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.container}>
            <NameLogo />

            <h2 className={styles.title}>Full-stack web developer</h2>

            <GetInTouchBtn />
        </div>
    );
};

export default Hero;
