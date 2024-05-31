import { Syne } from 'next/font/google';
import '../components/layout/global.scss';
import Head from 'next/head';

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata = {
  title: {
    template: '%s | Dreamsbyte',
    default: 'Dreamsbyte',
  },
  description: '',
  keywords: 'development, design, database, figma, javascript, html, css',
  "msapplication-TileColor": "#ffc40d",
  "theme-color": "#ffd800"
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'transparent'
};

export default function RootLayout({ children }) {
  return <html lang="en" className={syne.className}>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/mask-icon.svg" color="#5bbad5" />
    </Head>
    <body>{ children }</body>
  </html>;
};
