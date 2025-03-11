import { ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
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
