import { Footer } from "components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
