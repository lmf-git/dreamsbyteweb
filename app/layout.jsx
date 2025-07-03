import { Syne, Inter } from 'next/font/google';
import '../components/layout/global.scss';

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne'
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata = {
  title: {
    template: '%s | Dreamsbyte',
    default: 'Dreamsbyte | Welcome Forward',
  },
  description: 'From concept to reality, we offer full stack development, e-commerce solutions, captivating design, and more. Email contact@dreamsbyte.com to start realising your digital dreams.',
  keywords: 'development, design, database, figma, javascript, html, css',
  "msapplication-TileColor": "#ffc40d",
  "apple-touch-icon": "/icon.svg",
  "manifest": "/manifest.json"
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'white',
  maskIcon: "/icon.svg"
};

export default function RootLayout({ children }) {
  return <html lang="en" className={`${syne.variable} ${inter.variable}`}>
    <body>{ children }</body>
  </html>;
};
