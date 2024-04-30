import Head from 'next/head';
import { Syne } from 'next/font/google';

import "../style/globals.scss";

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata = {
  title: {
    template: '%s | Allied Construction',
    default: 'Allied Construction',
  },
  description: 'A really good Construction site',
  keywords: 'based, construction, shop',
  themeColor: 'transparent'
};

export const viewport = {
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return <html lang="en" className={syne.className}>
    <body>{ children }</body>
  </html>;
};
