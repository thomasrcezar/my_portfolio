// src/components/layout/Navbar.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const isActive = (path: string) => {
    return router.pathname === path ? 'bg-blue-600 text-white' : 'hover:bg-gray-700';
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              My Portfolio
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/projects')}`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
