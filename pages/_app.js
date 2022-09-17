import { Footer } from "@/components";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className={"siteContainer"}>
                <Component {...pageProps} />
            </div>

            <Footer />
        </>
    );
}

export default MyApp;
