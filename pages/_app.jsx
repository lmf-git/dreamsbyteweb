import { Syne } from 'next/font/google';
import "../styles/global.scss";
 
const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
//   display: 'swap',
});

export default function Application({ Component, pageProps }) {
    return <div className={syne.className}>
        <Component {...pageProps} />
    </div>;
};
