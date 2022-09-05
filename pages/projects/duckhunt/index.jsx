import styles from "@/styles/pages/projects/DuckHunt.module.scss";
import Image from "next/image";

const DuckHunt = () => {
    return (
        <div className={styles.container}>
            <div className={styles.gameContainer}>
                <div className={styles.gameBackground}>
                    <Image
                        src={"/assets/images/duckhunt/duck_hunt_bg.jpg"}
                        layout={"fill"}
                        objectFit={"cover"}
                        objectPosition={"bottom"}
                        alt={"Game background"}
                    />
                </div>

                <div className={styles.mainMenuContainer}>
                    <button className={styles.mainMenuItem}>
                        <span className={styles.mainMenuItemText}>START</span>
                    </button>

                    <button className={styles.mainMenuItem}>
                        <span className={styles.mainMenuItemText}>
                            LEADERBOARD
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DuckHunt;
