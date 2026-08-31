import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: 'Four Stones AI — AI Consulting for Small Business',
  description:
    'AI consulting for small businesses in Huntsville, Madison, Decatur, and surrounding North Alabama. Workshops, custom builds, and hands-on consulting that save real time and money.',
  keywords: 'AI consulting, small business AI, Huntsville Alabama, Madison Alabama, Decatur Alabama, North Alabama AI, AI automation, custom AI tools',
  openGraph: {
    title: 'Four Stones AI',
    description: 'Stop talking about AI. Start using it.',
    url: 'https://fourstones.ai',
    siteName: 'Four Stones AI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${fraunces.variable}`}>
      <body className={`${inter.className} bg-[#0B0F14] text-[#CBD5E1] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
