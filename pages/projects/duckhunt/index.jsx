import { useState, useEffect, useRef } from "react";
import styles from "@/styles/pages/projects/DuckHunt.module.scss";
import Image from "next/image";

export const getStaticProps = (props) => {
    return {
        notFound: true,
        props: {},
    };
};

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

class Duck {
    constructor() {}
}

const DuckHunt = () => {
    const canvas = useRef(null);

    useEffect(() => {
        if (!canvas.current) return;

        const ctx = canvas.current.getContext("2d");

        drawBackground(ctx);
    }, [canvas]);

    const drawBackground = (ctx) => {
        ctx.fillStyle = "#000000";

        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
    };

    return (
        <div className={styles.canvasContainer}>
            <canvas className={styles.canvas} ref={canvas}></canvas>
        </div>
    );
};

export default DuckHunt;
