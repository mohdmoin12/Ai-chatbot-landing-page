// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//        <div className="flex items-center justify-between" style={{ height: '6.5rem' }}>

//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <span className="text-2xl font-bold gradient-text">AI NEXUS</span>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>Features</a>
//                 <a href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>How It Works</a>
//                 <a href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>Testimonials</a>
//                 <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition" onClick={closeMenu}>Pricing</a>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <a href="#contact" className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition mr-4" onClick={closeMenu}>Contact Us</a>
//               <button className="px-4 py-2 rounded-md text-sm font-medium border border-blue-600 hover:bg-blue-600/20 transition">Login</button>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button 
//               type="button" 
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none"
//             >
//               <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile menu */}
//       <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-lg`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>Features</a>
//           <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>How It Works</a>
//           <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>Testimonials</a>
//           <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition" onClick={closeMenu}>Pricing</a>
//           <div className="pt-4 border-t border-gray-800">
//             <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 transition mb-2" onClick={closeMenu}>Contact Us</a>
//             <button className="block px-3 py-2 rounded-md text-base font-medium border border-blue-600 hover:bg-blue-600/20 transition">Login</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { 
  Brain, 
  Settings, 
  Cpu, 
  Bot, 
  Rocket, 
  Terminal, 
  UserCheck, 
  Menu 
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');
        
        .tech-font {
          font-family: 'Orbitron', sans-serif;
        }
        
        .ai-gradient-text {
          background: linear-gradient(90deg, #00d1ff, #0077ff, #b545ff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .ai-glow {
          animation: aiPulse 2s infinite alternate;
        }
        
        @keyframes aiPulse {
          0% {
            box-shadow: 0 0 10px rgba(0, 209, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 25px rgba(0, 119, 255, 0.6);
          }
        }
      `}</style>
      
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* AI-themed logo */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-2 ai-glow">
                    <Brain className="text-white text-xl" size={20} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold ai-gradient-text tech-font">
                  NEXUS<span className="text-white">AI</span>
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button 
                    onClick={() => handleNavClick('#features')}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
                  >
                    <Settings className="mr-2 text-blue-400" size={16} />
                    <span className="tech-font">FEATURES</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('#how-it-works')}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
                  >
                    <Cpu className="mr-2 text-purple-400" size={16} />
                    <span className="tech-font">TECH</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('#robot')}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
                  >
                    <Bot className="mr-2 text-green-400" size={16} />
                    <span className="tech-font">AI DEMO</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('#pricing')}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
                  >
                    <Rocket className="mr-2 text-yellow-400" size={16} />
                    <span className="tech-font">UPGRADE</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition mr-4 tech-font"
                >
                  <Terminal className="inline mr-2" size={16} />
                  CONTACT
                </button>
                <button className="px-4 py-2 rounded-md text-sm font-medium border border-blue-600 hover:bg-blue-600/20 transition tech-font">
                  <UserCheck className="inline mr-2" size={16} />
                  LOGIN
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavClick('#features')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
            >
              <Settings className="mr-2 text-blue-400" size={16} />
              Features
            </button>
            <button 
              onClick={() => handleNavClick('#how-it-works')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
            >
              <Cpu className="mr-2 text-purple-400" size={16} />
              Tech
            </button>
            <button 
              onClick={() => handleNavClick('#robot')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
            >
              <Bot className="mr-2 text-green-400" size={16} />
              AI Demo
            </button>
            <button 
              onClick={() => handleNavClick('#pricing')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
            >
              <Rocket className="mr-2 text-yellow-400" size={16} />
              Upgrade
            </button>
            <div className="pt-4 border-t border-gray-800">
              <button 
                onClick={() => handleNavClick('#contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition mb-2 flex items-center"
              >
                <Terminal className="mr-2" size={16} />
                Contact
              </button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium border border-blue-600 hover:bg-blue-600/20 transition flex items-center">
                <UserCheck className="mr-2" size={16} />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;