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
  "apple-touch-icon": "",
  "manifest": "",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffd800',
  maskIcon: "/favicons/mask-icon.svg"
};

export default function RootLayout({ children }) {
  return <html lang="en" className={syne.className}>
    <body>{ children }</body>
  </html>;
};
