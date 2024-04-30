import { Syne } from 'next/font/google';
import '../components/layout/global.scss';

const syne = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata = {
  title: {
    template: '%s | Dreamsbyte',
    default: 'Dreamsbyte',
  },
  description: 'A really good Construction site',
  keywords: 'development, design, database, figma, javascript, html, css',
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
