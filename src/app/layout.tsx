import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hat Yai Expat Realty | Premium Properties in Hat Yai',
  description: 'Find your perfect real estate investment or rental in Hat Yai, Thailand. We specialize in serving expats and investors with premium properties and local expertise.',
  openGraph: {
    title: 'Hat Yai Expat Realty',
    description: 'Find your perfect real estate investment or rental in Hat Yai, Thailand.',
    url: 'https://hatyaiexpatrealty.com',
    siteName: 'Hat Yai Expat Realty',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
