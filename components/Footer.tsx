import React from 'react';
import { Page } from '../types';
import Logo from './ui/Logo';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const FooterLink: React.FC<{
  page: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, navigateTo, children }) => (
  <button onClick={() => navigateTo(page)} className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </button>
);


const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-green-700 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Logo className="w-8 h-8 mr-2" />
              TK Ali bin Abi Thalib
            </h3>
            <p className="text-gray-300">Tempat Bermain Sambil Belajar, Membangun Generasi Cerdas dan Ceria.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><FooterLink page={Page.About} navigateTo={navigateTo}>Tentang Kami</FooterLink></li>
              <li><FooterLink page={Page.Curriculum} navigateTo={navigateTo}>Kurikulum</FooterLink></li>
              <li><FooterLink page={Page.Facilities} navigateTo={navigateTo}>Fasilitas</FooterLink></li>
              <li><FooterLink page={Page.Achievements} navigateTo={navigateTo}>Prestasi & Karya</FooterLink></li>
              <li><FooterLink page={Page.News} navigateTo={navigateTo}>Berita</FooterLink></li>
              <li><FooterLink page={Page.Enrollment} navigateTo={navigateTo}>Pendaftaran</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start"><span className="mt-1 mr-2">📍</span>Jl. Pendidikan No. 123, Jakarta, Indonesia</li>
              <li className="flex items-center"><span className="mr-2">📞</span>(021) 123-4567</li>
              <li className="flex items-center"><span className="mr-2">📧</span>info@tk-abithalib.sch.id</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.149 2 12.315 2zm-1.002 6.363a3.636 3.636 0 100 7.272 3.636 3.636 0 000-7.272zM12 14a2 2 0 110-4 2 2 0 010 4zm6.406-7.18a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" clipRule="evenodd" /></svg></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-green-600 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TK Ali bin Abi Thalib. All Rights Reserved. <span className="mx-2">|</span> <button onClick={() => navigateTo(Page.Admin)} className="hover:text-white">Admin Panel</button></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;