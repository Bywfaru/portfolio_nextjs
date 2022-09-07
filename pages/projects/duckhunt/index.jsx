import { useState, useEffect, useRef } from "react";
import styles from "@/styles/pages/projects/DuckHunt.module.scss";
import Image from "next/image";

const GameState = {
    MAIN_MENU: 0,
    GAME_IN_PROGRESS: 1,
    GAME_OVER: 2,
    LEADERBOARD: 3,
};

const DuckSpriteSheet = {
    COLUMNS: 3,
    ROWS: 4,
    CELL_WIDTH: 76,
    CELL_HEIGHT: 76,
};

const DuckHunt = () => {
    const [gameState, setGameState] = useState(GameState.MAIN_MENU);
    const [numBirds, setNumBirds] = useState(0);
    const [duckSpriteSheetX, setDuckSpriteSheetX] = useState(0);
    const [duckPosition, setDuckPosition] = useState({
        top: 0,
        left: 0,
    });
    const gameContainerRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (
                duckSpriteSheetX <
                DuckSpriteSheet.CELL_WIDTH * (DuckSpriteSheet.COLUMNS - 1)
            ) {
                setDuckSpriteSheetX(
                    duckSpriteSheetX + DuckSpriteSheet.CELL_WIDTH
                );
            } else {
                setDuckSpriteSheetX(0);
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, [duckSpriteSheetX]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (gameState === GameState.GAME_IN_PROGRESS) {
                const newDuckPosition = { ...duckPosition };

                if (
                    duckPosition.left <
                    gameContainerRef.current.clientWidth - 38
                ) {
                    newDuckPosition.left = duckPosition.left + 1;
                } else {
                    newDuckPosition.left = 0;
                }

                if (
                    duckPosition.top <
                    gameContainerRef.current.clientHeight - 38
                ) {
                    if (duckPosition.left % 50 === 0)
                        newDuckPosition.top = duckPosition.top + 1;
                } else {
                    newDuckPosition.top = 0;
                }

                setDuckPosition(newDuckPosition);
            }
        }, 2);

        return () => clearTimeout(timeout);
    }, [duckPosition, gameState]);

    return (
        <div className={styles.container}>
            <div className={styles.gameContainer} ref={gameContainerRef}>
                <div className={styles.gameBackground}>
                    <Image
                        src={"/assets/images/duckhunt/duck_hunt_fg.png"}
                        layout={"fill"}
                        objectFit={"cover"}
                        objectPosition={"bottom"}
                        alt={"Game background"}
                    />
                </div>

                {gameState === GameState.MAIN_MENU && (
                    <div className={styles.mainMenuContainer}>
                        <button
                            className={styles.mainMenuItem}
                            onClick={() =>
                                setGameState(GameState.GAME_IN_PROGRESS)
                            }
                        >
                            START
                        </button>

                        <button
                            className={styles.mainMenuItem}
                            onClick={() => setGameState(GameState.LEADERBOARD)}
                        >
                            LEADERBOARD
                        </button>
                    </div>
                )}

                {gameState === GameState.GAME_IN_PROGRESS && (
                    <div
                        className={styles.duckSpriteSheet}
                        style={{
                            backgroundPosition: `${duckSpriteSheetX}px 0`,
                            left: `${duckPosition.left}px`,
                            top: `${duckPosition.top}px`,
                        }}
                        onClick={() => console.log("I've been clicked!")}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default DuckHunt;
