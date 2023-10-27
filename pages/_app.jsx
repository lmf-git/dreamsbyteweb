import { Syne } from 'next/font/google';
import "../styles/global.scss";
import Head from 'next/head';
 
const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
//   display: 'swap',
});

export default function Application({ Component, pageProps }) {
    return <div className={syne.className}>
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="theme-color" content="transparent" />
          <link rel="icon" href="/favicon.svg" />
          <link rel="mask-icon" href="/favicon.svg" color="#000000" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <Component {...pageProps} />
    </div>;
};
