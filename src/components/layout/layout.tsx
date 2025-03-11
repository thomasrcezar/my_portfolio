import { ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
