import { Analytics } from '@vercel/analytics/react';
import font from 'next/font/local';
import '../styles/global.scss';

const variableFont = font({ src: '../public/Syne/Syne-VariableFont_wght.ttf' });

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>{`
      :root {
        --syne: ${variableFont.style.fontFamily};
      }
      * {
        font-family: ${variableFont.style.fontFamily};  
      }
    `}</style>
    <Component {...pageProps} />;
    <Analytics />
  </>
}