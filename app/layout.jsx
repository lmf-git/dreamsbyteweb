import { Syne, Inter } from 'next/font/google';
import { cookies } from 'next/headers';
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
  metadataBase: new URL('https://dreamsbyte.com'),
  title: {
    template: '%s | DreamsByte',
    default: 'DreamsByte | Welcome Forward',
  },
  description: 'From concept to reality, we offer full stack development, e-commerce solutions, captivating design, and more. Email contact@dreamsbyte.com to start realising your digital dreams.',
  keywords: 'development, design, database, figma, javascript, html, css',
  "msapplication-TileColor": "#ffc40d",
  openGraph: {
    title: 'DreamsByte | Welcome Forward',
    description: 'From concept to reality, we offer full stack development, e-commerce solutions, captivating design, and more. Email contact@dreamsbyte.com to start realising your digital dreams.',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'DreamsByte - Full Stack Development & Design'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamsByte | Welcome Forward',
    description: 'From concept to reality, we offer full stack development, e-commerce solutions, captivating design, and more. Email contact@dreamsbyte.com to start realising your digital dreams.',
    images: ['/card.png']
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicons/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicons/favicon.ico',
    apple: { url: '/favicons/apple-touch-icon.png', sizes: '180x180' },
    other: {
      rel: 'mask-icon',
      url: '/favicons/favicon.svg',
      color: '#000000'
    }
  },
  "apple-mobile-web-app-title": "DreamsByte",
  manifest: '/favicons/site.webmanifest',
  other: {
    "fediverse:creator": "@dreamsbyte@mastodon.social"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: 'white'
};

import Layout from '../components/layout/Layout/Layout';

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const initialLanguage = cookieStore.get('language')?.value || 'en';
  const htmlLang = initialLanguage === 'es' ? 'es-AR' : 'en';

  return <html lang={htmlLang} className={`${syne.variable} ${inter.variable}`}>
    <body>
      <Layout initialLanguage={initialLanguage}>
        {children}
      </Layout>
    </body>
  </html>;
};
