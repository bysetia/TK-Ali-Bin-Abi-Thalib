import React, { useState } from 'react';
import { Page } from '../types';
import Button from './ui/Button';
import Logo from './ui/Logo';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, navigateTo, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => navigateTo(page)}
      className={`text-base md:text-lg font-bold transition-colors duration-300 ${
        isActive ? 'text-orange-500' : 'text-gray-700 hover:text-orange-400'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { page: Page.Home, label: 'Beranda' },
    { page: Page.About, label: 'Tentang Kami' },
    { page: Page.Curriculum, label: 'Kurikulum' },
    { page: Page.Facilities, label: 'Fasilitas' },
    { page: Page.Gallery, label: 'Galeri' },
    { page: Page.Achievements, label: 'Prestasi & Karya' },
    { page: Page.News, label: 'Berita' },
    { page: Page.KidsZone, label: 'Zona Anak' },
    { page: Page.Enrollment, label: 'Pendaftaran' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-2">
               <Logo className="w-10 h-10" />
              <span className="text-xl md:text-2xl font-black text-gray-800">TK Ali bin Abi Thalib</span>
            </button>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map(item => (
                 <NavLink key={item.page} page={item.page} currentPage={currentPage} navigateTo={navigateTo}>
                    {item.label}
                 </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => navigateTo(Page.Enrollment)} size="md" variant="primary">
              Daftar Sekarang
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map(item => (
                   <NavLink key={item.page} page={item.page} currentPage={currentPage} navigateTo={(page) => { navigateTo(page); setIsMenuOpen(false); }}>
                      {item.label}
                   </NavLink>
              ))}
              <Button onClick={() => { navigateTo(Page.Enrollment); setIsMenuOpen(false); }} size="md" variant="primary" className="w-full mt-4">
                Daftar Sekarang
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;