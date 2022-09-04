import styles from "@/styles/pages/projects/DuckHunt.module.scss";
import Image from "next/image";

const DuckHunt = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gameContainer}>
                <div className={styles.gameBackground}>{/* <Image /> */}</div>
            </div>
        </div>
    );
};

export default DuckHunt;
