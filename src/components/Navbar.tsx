import Link from 'next/link';
import { Globe, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="text-xl font-bold text-indigo-950 hidden sm:block">
            Hat Yai Expat Realty
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="#properties" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Properties
          </Link>
          <Link href="#expat-guide" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Expat Guide
          </Link>
          <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Actions Container */}
        <div className="flex items-center gap-4">
          {/* Language Switcher Placeholder */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer text-slate-600 hover:text-indigo-600 transition-colors px-2 py-1 rounded-md">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">EN / TH</span>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contact Agent
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
