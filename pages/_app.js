import { Footer } from "@/components";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <div className={"siteContainer"}>
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
