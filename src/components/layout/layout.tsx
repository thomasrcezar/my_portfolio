import { ReactNode } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation('common');

  const defaultTitle = String(t('hero.name')); // Explicitly cast to string
  const defaultDescription = String(t('hero.description')); // Explicitly cast to string

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        {/* Add other default meta tags here if needed, e.g., Open Graph */}
        {/* <meta property="og:title" content={defaultTitle} /> */}
        {/* <meta property="og:description" content={defaultDescription} /> */}
        {/* <meta property="og:image" content="/path/to/default/image.jpg" /> */}
      </Head>
      <header className="border-b border-gray-800">
        <Navbar />
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Thomas Cezar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
