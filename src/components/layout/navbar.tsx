// src/components/layout/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const isActive = (path: string) => {
    return router.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <span className="mr-2">Thomas Cezar</span>
              <div className="w-8 h-1 bg-blue-500"></div>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/projects" className={`text-sm font-medium ${isActive('/projects')}`}>
              Projects
            </Link>
            <Link href="/services" className={`text-sm font-medium ${isActive('/services')}`}>
              Services
            </Link>
            <Link href="/process" className={`text-sm font-medium ${isActive('/process')}`}>
              Process
            </Link>
            <Link href="/about" className={`text-sm font-medium ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/contact" className={`text-sm font-medium ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link href="/blog" className={`text-sm font-medium ${isActive('/blog')}`}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
