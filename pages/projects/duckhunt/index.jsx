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

const DuckHunt = () => {
    const [ctx, setCtx] = useRef(null);

    useEffect(() => {}, []);

    return <canvas ref={ctx}></canvas>;
};

export default DuckHunt;
