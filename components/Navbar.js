'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'Обо мне' },
    { href: '/projects', label: 'Проекты' },
    { href: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 card-dark border-b border-gray-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl neon-text">
            H4r0n.dev
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  pathname === link.href 
                    ? 'text-purple-400 bg-purple-900/30 neon-border' 
                    : 'text-gray-400 hover:text-purple-400 hover:bg-purple-900/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-purple-900/30 text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden card-dark border-t border-gray-800 px-6 py-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                pathname === link.href 
                  ? 'text-purple-400 bg-purple-900/30' 
                  : 'text-gray-400 hover:bg-purple-900/20'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}