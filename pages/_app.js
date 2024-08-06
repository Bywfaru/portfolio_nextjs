import { Footer } from "@/components";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>William He | Full-stack web developer</title>
      </Head>

      <div className={"siteContainer"}>
        <Component {...pageProps} />
      </div>

      <Footer />

      <Analytics />
    </>
  );
}

export default MyApp;
