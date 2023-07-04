import '@/styles/index.scss';

import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const alegreya = Alegreya({
  subsets: ['cyrillic'],
  variable: '--font-alegreya',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Пицца на заказ',
  description: 'Тестовая работа для front-end разработчика от компании Вебпрактик',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
      <body>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}

