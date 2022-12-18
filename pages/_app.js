import { Footer } from '@/components';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={'siteContainer'}>
        <Component {...pageProps} />
      </div>

      <Footer />

      <Analytics />
    </>
  );
}

export default MyApp;
