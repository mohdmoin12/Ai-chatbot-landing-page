import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between" style={{ height: '6.5rem' }}>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-text">AI NEXUS</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>Features</a>
                <a href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>How It Works</a>
                <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>Testimonials</a>
                <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>Pricing</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition mr-4" onClick={closeMenu}>Contact Us</a>
              <button className="px-4 py-2 rounded-md text-sm font-medium border border-blue-600 hover:bg-blue-600/20 transition">Login</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
              type="button" 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>How It Works</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>Testimonials</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>Pricing</a>
          <div className="pt-4 border-t border-gray-800">
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 transition mb-2" onClick={closeMenu}>Contact Us</a>
            <button className="block px-3 py-2 rounded-md text-base font-medium border border-blue-600 hover:bg-blue-600/20 transition">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;