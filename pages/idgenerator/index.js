import { useState, useEffect } from "react";
import adjectives from "res/adjectives";
import styles from "styles/IdGenerator.module.scss";
import { AiFillQuestionCircle, AiFillCloseCircle } from "react-icons/ai";

const NUM_POKEMON = 913;
const NUM_NATURES = 25;
const NUM_ADJECTIVES = adjectives.length;
const POKE_API_ENDPOINT = "https://pokeapi.co/api/v2";

const getPokemonId = () => Math.floor(Math.random() * NUM_POKEMON + 1);
const getNatureId = () => Math.floor(Math.random() * NUM_NATURES + 1);
const getRarity = () => (Math.round(Math.random()) === 1 ? "shiny" : "regular");
const getAdjective = () =>
    adjectives[Math.floor(Math.random() * NUM_ADJECTIVES)];

export const getServerSideProps = async (context) => {
    const { test } = context.query;

    return {
        props: {
            test: test === "true",
        },
    };
};

const Home = ({ test }) => {
    const [url, setUrl] = useState("");
    const [generatedUrl, setGeneratedUrl] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let timeout;

        if (showToast) {
            timeout = setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }

        if (timeout) return () => clearTimeout(timeout);
    }, [showToast]);

    const handleResolvedPromises = (allData) => {
        const [pokemon, nature] = allData;
        const rarity = getRarity();
        const adjective = getAdjective();
        const defaultUrl =
            "http://localhost:3000" + (test ? "/176/checkout" : "");
        let id = `${rarity}_${adjective}_${nature.name}_${pokemon.name}`;
        let newUrl = url.length ? url : defaultUrl;
        const searchParams = new URLSearchParams({
            provider: "TEST",
            affid: "1",
            click_id: id,
        });

        newUrl.includes("?") ? (newUrl += "&") : (newUrl += "?");
        newUrl += searchParams.toString();

        setGeneratedUrl(newUrl.toString());
        setErrorMessage(null);
        setIsLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const pokemon = getPokemonId();
        const nature = getNatureId();
        const urls = [
            fetch(`${POKE_API_ENDPOINT}/pokemon/${pokemon}`).then((res) =>
                res.json()
            ),
            fetch(`${POKE_API_ENDPOINT}/nature/${nature}`).then((res) =>
                res.json()
            ),
        ];

        Promise.all(urls)
            .then(handleResolvedPromises)
            .catch((error) => setErrorMessage(error.message));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUrl);

        setShowToast(true);
    };

    return (
        <>
            <div
                className={`${styles.copiedToastContainer} ${
                    showToast && styles.copiedToastShow
                }`}
            >
                <span className={styles.copiedToast}>Copied!</span>
            </div>

            {showModal && (
                <div className={styles.helpModalContainer}>
                    <div className={styles.helpModal}>
                        The URL to add the query string to. If left empty,
                        http://localhost:3000 will be used by default
                        <AiFillCloseCircle
                            className={styles.closeBtn}
                            onClick={() => setShowModal()}
                        />
                    </div>
                </div>
            )}

            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>
                        Link With Query String Generator
                    </h1>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputContainer}>
                            <input
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder={"Base URL"}
                                className={styles.textField}
                                disabled={isLoading}
                            />
                            <AiFillQuestionCircle
                                className={styles.questionMarkBtn}
                                onClick={() => setShowModal(!showModal)}
                            />
                        </div>

                        <button
                            className={styles.button}
                            type="submit"
                            disabled={isLoading}
                            style={isLoading ? { cursor: "default" } : {}}
                        >
                            {isLoading ? "Generating..." : "Generate URL"}
                        </button>
                    </form>

                    <div className={styles.resultContainer}>
                        <span className={styles.yourUrlText}>Your URL:</span>

                        <a
                            href={generatedUrl}
                            className={styles.anchor}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            {generatedUrl}
                        </a>

                        <span>{errorMessage}</span>

                        {generatedUrl && !errorMessage && (
                            <button
                                onClick={handleCopy}
                                className={styles.button}
                            >
                                Copy
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;