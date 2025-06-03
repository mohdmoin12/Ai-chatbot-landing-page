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

// import React, { useState } from 'react';
// import {
//   Brain,
//   Settings,
//   Cpu,
//   Bot,
//   Rocket,
//   Terminal,
//   UserCheck,
//   Menu
// } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleNavClick = (href) => {
//     setIsMobileMenuOpen(false);
//     // Smooth scroll to section
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');

//         /* .tech-font {
//           font-family: 'Orbitron', sans-serif;
//         } */

//         .ai-gradient-text {
//           background: linear-gradient(90deg, #00d1ff, #0077ff, #b545ff);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .ai-glow {
//           animation: aiPulse 2s infinite alternate;
//         }

//         @keyframes aiPulse {
//           0% {
//             box-shadow: 0 0 10px rgba(0, 209, 255, 0.3);
//           }
//           100% {
//             box-shadow: 0 0 25px rgba(0, 119, 255, 0.6);
//           }
//         }
//       `}</style>

//       <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-[7rem]">

//             <div className="flex items-center">
//               <div className="flex-shrink-0 flex items-center">
//                 {/* AI-themed logo */}
//                 <div className="relative">
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-2 ai-glow">
//                     <Brain className="text-white text-xl" size={20} />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
//                 </div>
//                 <span className="text-2xl font-bold ai-gradient-text ">
//                   NEXUS<span className="text-white">AI</span>
//                 </span>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <button
//                     onClick={() => handleNavClick('#features')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
//                   >
//                     <Settings className="mr-2 text-blue-400" size={16} />
//                     <span className="">FEATURES</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick('#how-it-works')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
//                   >
//                     <Cpu className="mr-2 text-purple-400" size={16} />
//                     <span className="">TECH</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick('#robot')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
//                   >
//                     <Bot className="mr-2 text-green-400" size={16} />
//                     <span className="">AI DEMO</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick('#pricing')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-400 transition flex items-center cursor-pointer"
//                   >
//                     <Rocket className="mr-2 text-yellow-400" size={16} />
//                     <span className="">UPGRADE</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-4 flex items-center md:ml-6">
//                 <button
//                   onClick={() => handleNavClick('#contact')}
//                   className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition mr-4 "
//                 >
//                   <Terminal className="inline mr-2" size={16} />
//                   CONTACT US
//                 </button>
//                 {/* <button className="px-4 py-2 rounded-md text-sm font-medium border border-blue-600 hover:bg-blue-600/20 transition ">
//                   <UserCheck className="inline mr-2" size={16} />
//                   LOGIN
//                 </button> */}
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 type="button"
//                 onClick={toggleMobileMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-400 focus:outline-none"
//               >
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-lg`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <button
//               onClick={() => handleNavClick('#features')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
//             >
//               <Settings className="mr-2 text-blue-400" size={16} />
//               Features
//             </button>
//             <button
//               onClick={() => handleNavClick('#how-it-works')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
//             >
//               <Cpu className="mr-2 text-purple-400" size={16} />
//               Tech
//             </button>
//             <button
//               onClick={() => handleNavClick('#robot')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
//             >
//               <Bot className="mr-2 text-green-400" size={16} />
//               AI Demo
//             </button>
//             <button
//               onClick={() => handleNavClick('#pricing')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition flex items-center"
//             >
//               <Rocket className="mr-2 text-yellow-400" size={16} />
//               Upgrade
//             </button>
//             <div className="pt-4 border-t border-gray-800">
//               <button
//                 onClick={() => handleNavClick('#contact')}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition mb-2 flex items-center"
//               >
//                 <Terminal className="mr-2" size={16} />
//                 Contact
//               </button>
//               <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium border border-blue-600 hover:bg-blue-600/20 transition flex items-center">
//                 <UserCheck className="mr-2" size={16} />
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import {
//   Brain,
//   Settings,
//   Cpu,
//   Bot,
//   Rocket,
//   Terminal,
//   UserCheck,
//   Menu
// } from 'lucide-react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleNavClick = (href) => {
//     setIsMobileMenuOpen(false);
//     // Smooth scroll to section
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');

//         /* .tech-font {
//           font-family: 'Orbitron', sans-serif;
//         } */

//         .ai-gradient-text {
//           background: linear-gradient(90deg, #00d1ff, #FED700, #b545ff);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .ai-glow {
//           animation: aiPulse 2s infinite alternate;
//         }

//         @keyframes aiPulse {
//           0% {
//             box-shadow: 0 0 10px rgba(0, 209, 255, 0.3);
//           }
//           100% {
//             box-shadow: 0 0 25px rgba(254, 215, 0, 0.6);
//           }
//         }
//       `}</style>

//       <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-[7rem]">

//             <div className="flex items-center">
//               <div className="flex-shrink-0 flex items-center">
//                 {/* AI-themed logo */}
//                 <div className="relative">
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-500 flex items-center justify-center mr-2 ai-glow">
//                     <Brain className="text-white text-xl" size={30} />
//                   </div>
//                   <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
//                 </div>
//                 <span className="text-2xl font-bold ai-gradient-text ">
//                   POPUP<span className="text-white">AI</span>
//                 </span>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <button
//                     onClick={() => handleNavClick('#features')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                     style={{ '--tw-text-opacity': 1, color: 'rgb(255 255 255 / var(--tw-text-opacity))' }}
//                   >
//                     <Settings className="mr-2" style={{ color: '#FED700' }} size={16} />
//                     <span className="">FEATURES</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick('#how-it-works')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                   >
//                     <Cpu className="mr-2 text-purple-400" size={16} />
//                     <span className="">TECH</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick('#robot')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                   >
//                     <Bot className="mr-2 text-green-400" size={16} />
//                     <span className="">AI DEMO</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick('#pricing')}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                   >
//                     <Rocket className="mr-2 text-yellow-400" size={16} />
//                     <span className="">UPGRADE</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-4 flex items-center md:ml-6">
//                 <button
//                   onClick={() => handleNavClick('#contact')}
//                   className="px-4 py-2 rounded-md text-sm font-medium transition mr-4"
//                   style={{
//                     background: 'linear-gradient(to right, #FED700)',
//                     color: 'white'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = 'linear-gradient(to right, #e6c200)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = 'linear-gradient(to right, #FED700)';
//                   }}
//                 >
//                   <Terminal className="inline mr-2" size={25} />
//                   CONTACT US
//                 </button>
//                 {/* <button className="px-4 py-2 rounded-md text-sm font-medium border border-yellow-600 hover:bg-yellow-600/20 transition ">
//                   <UserCheck className="inline mr-2" size={16} />
//                   LOGIN
//                 </button> */}
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 type="button"
//                 onClick={toggleMobileMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-400 focus:outline-none"
//               >
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-lg`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <button
//               onClick={() => handleNavClick('#features')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Settings className="mr-2" style={{ color: '#FED700' }} size={16} />
//               Features
//             </button>
//             <button
//               onClick={() => handleNavClick('#how-it-works')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Cpu className="mr-2 text-purple-400" size={16} />
//               Tech
//             </button>
//             <button
//               onClick={() => handleNavClick('#robot')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Bot className="mr-2 text-green-400" size={16} />
//               AI Demo
//             </button>
//             <button
//               onClick={() => handleNavClick('#pricing')}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Rocket className="mr-2 text-yellow-400" size={16} />
//               Upgrade
//             </button>
//             <div className="pt-4 border-t border-gray-800">
//               <button
//                 onClick={() => handleNavClick('#contact')}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition mb-2 flex items-center"
//                 style={{
//                   background: 'linear-gradient(to right, #FED700, #b545ff)',
//                   color: 'white'
//                 }}
//               >
//                 <Terminal className="mr-2" size={16} />
//                 Contact
//               </button>
//               <button
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium border transition flex items-center"
//                 style={{
//                   borderColor: '#FED700',
//                   color: 'white'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = 'rgba(254, 215, 0, 0.2)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'transparent';
//                 }}
//               >
//                 <UserCheck className="mr-2" size={16} />
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import {
//   Brain,
//   Settings,
//   Cpu,
//   Bot,
//   Rocket,
//   Terminal,
//   UserCheck,
//   Menu,
// } from "lucide-react";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleNavClick = (href) => {
//     setIsMobileMenuOpen(false);
//     // Smooth scroll to section
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap");

//         .ai-gradient-text {
//           background: linear-gradient(90deg, #fed700, #ffe55c);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .brand-logo {
//           width: 40px;
//           height: 40px;
//           object-fit: contain;
//           border-radius: 8px;
//         }

//         .ai-glow {
//           animation: aiPulse 2s infinite alternate;
//         }

//         @keyframes aiPulse {
//           0% {
//             box-shadow: 0 0 10px rgba(254, 215, 0, 0.3);
//           }
//           100% {
//             box-shadow: 0 0 25px rgba(254, 215, 0, 0.6);
//           }
//         }
//       `}</style>

//       <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-[6rem]">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 flex items-center">
//                 {/* Brand logo */}
//                 <div className="relative mr-3">
//                   <img
//                     src="/pop-phones.webp"
//                     alt="POPI Brand Logo"
//                     className="brand-logo ai-glow"
//                   />
//                   <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-black animate-pulse"></div>
//                 </div>
//                 {/* <span className="text-2xl font-bold text-yellow-400">
//                   POP AI
//                 </span> */}
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <button
//                     onClick={() => handleNavClick("#features")}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                     style={{
//                       "--tw-text-opacity": 1,
//                       color: "rgb(255 255 255 / var(--tw-text-opacity))",
//                     }}
//                   >
//                     <Settings
//                       className="mr-2"
//                       style={{ color: "#FED700" }}
//                       size={16}
//                     />
//                     <span className="">FEATURES</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick("#how-it-works")}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                   >
//                     <Cpu className="mr-2 text-purple-400" size={16} />
//                     <span className="">TECH</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick("#robot")}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                   >
//                     <Bot className="mr-2 text-green-400" size={16} />
//                     <span className="">AI DEMO</span>
//                   </button>
//                   <button
//                     onClick={() => handleNavClick("#pricing")}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer"
//                   >
//                     <Rocket className="mr-2 text-yellow-400" size={16} />
//                     <span className="">UPGRADE</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-4 flex items-center md:ml-6">
//                 <button
//                   onClick={() => handleNavClick("#contact")}
//                   className="px-4 py-2 rounded-md text-lg font-medium transition mr-4"
//                   style={{
//                     background: " #FED700",
//                     color: "black",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background =
//                       " #e6c200";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background =
//                       " #FED700";
//                   }}
//                 >
//                   LET'S TALK 
//                 </button>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 type="button"
//                 onClick={toggleMobileMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-400 focus:outline-none"
//               >
//                 <Menu className="h-6 w-6" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         <div
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } md:hidden bg-gray-900/95 backdrop-blur-lg`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <button
//               onClick={() => handleNavClick("#features")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Settings
//                 className="mr-2"
//                 style={{ color: "#FED700" }}
//                 size={16}
//               />
//               Features
//             </button>
//             <button
//               onClick={() => handleNavClick("#how-it-works")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Cpu className="mr-2 text-purple-400" size={16} />
//               Tech
//             </button>
//             <button
//               onClick={() => handleNavClick("#robot")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Bot className="mr-2 text-green-400" size={16} />
//               AI Demo
//             </button>
//             <button
//               onClick={() => handleNavClick("#pricing")}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center"
//             >
//               <Rocket className="mr-2 text-yellow-400" size={16} />
//               Upgrade
//             </button>
//             <div className="pt-4 border-t border-gray-800">
//               <button
//                 onClick={() => handleNavClick("#contact")}
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition mb-2 flex items-center"
//                 style={{
//                   background: "linear-gradient(to right, #FED700)",
//                   color: "white",
//                 }}
//               >
//                 <Terminal className="mr-2" size={16} />
//                 Contact us
//               </button>
//               {/* <button 
//                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium border transition flex items-center"
//                 style={{ 
//                   borderColor: '#FED700',
//                   color: 'white'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = 'rgba(254, 215, 0, 0.2)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'transparent';
//                 }}
//               >
//                 <UserCheck className="mr-2" size={16} />
//                 Login
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // SVG Icons
  const SettingsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FED700" strokeWidth="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
    </svg>
  );

  const CpuIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(196 181 253)" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path>
    </svg>
  );

  const BotIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(74 222 128)" strokeWidth="2">
      <rect width="18" height="10" x="3" y="11" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="m3 11 7.5-7.5L18 11"></path>
      <circle cx="9" cy="16" r="1"></circle>
      <circle cx="15" cy="16" r="1"></circle>
    </svg>
  );

  const RocketIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(251 191 36)" strokeWidth="2">
      <path d="M4.5 16.5 12 9l7.5 7.5L12 24l-7.5-7.5z"></path>
      <path d="M12 2 9.5 9.5 12 12l2.5-2.5L12 2z"></path>
    </svg>
  );

  const TerminalIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4,17 10,11 4,5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );

  return (
    <div>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap");

        .brand-logo {
          width: 80px;
          height: 65px;
          object-fit: contain;
          border-radius: 12px;
        }

        .ai-glow {
          animation: aiPulse 2s infinite alternate;
        }

        {/* @keyframes aiPulse {
          0% {
            box-shadow: 0 0 15px rgba(254, 215, 0, 0.3);
          }
          100% {
            box-shadow: 0 0 35px rgba(254, 215, 0, 0.6);
          } */}
        }
      `}</style>

      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                {/* Brand logo */}
                <div className="relative">
                  <img
                    src="/pop-phones.webp"
                    alt="POPI Brand Logo"
                    className="brand-logo ai-glow"
                  />
                  {/* <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-black animate-pulse"></div> */}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={() => handleNavClick("#features")}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer text-white"
                  >
                    <SettingsIcon />
                    <span className="ml-2">FEATURES</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("#how-it-works")}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer text-white"
                  >
                    {/* <CpuIcon />
                    <span className="ml-2">TECH</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("#robot")}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer text-white"
                  > */}
                    <BotIcon />
                    <span className="ml-2">DEMO</span>
                  </button>
                  <button
                    onClick={() => handleNavClick("#pricing")}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition flex items-center cursor-pointer text-white"
                  >
                    <RocketIcon />
                    <span className="ml-2">CONTACT US</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="px-4 py-2 rounded-md text-lg font-medium transition mr-4 bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  LET'S TALK 
                </button>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-400 focus:outline-none text-white"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-gray-900/95 backdrop-blur-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick("#features")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center text-white"
            >
              <SettingsIcon />
              <span className="ml-2">Features</span>
            </button>
            <button
              onClick={() => handleNavClick("#how-it-works")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center text-white"
            >
              <CpuIcon />
              <span className="ml-2">Tech</span>
            </button>
            <button
              onClick={() => handleNavClick("#robot")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center text-white"
            >
              <BotIcon />
              <span className="ml-2">AI Demo</span>
            </button>
            <button
              onClick={() => handleNavClick("#pricing")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-yellow-400 transition flex items-center text-white"
            >
              <RocketIcon />
              <span className="ml-2">Upgrade</span>
            </button>
            <div className="pt-4 border-t border-gray-800">
              <button
                onClick={() => handleNavClick("#contact")}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium transition mb-2 flex items-center bg-yellow-400 text-black"
              >
                <TerminalIcon />
                <span className="ml-2">Contact us</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;