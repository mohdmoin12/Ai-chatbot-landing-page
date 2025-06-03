// import { 
//   faFacebookF,
//   faTwitter,
//   faLinkedinIn,
//   faInstagram
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Footer = () => {
//   const links = {
//     product: ["Features", "Pricing", "Integrations", "Updates", "Roadmap"],
//     resources: ["Blog", "Help Center", "Tutorials", "Webinars", "API Docs"],
//     company: ["About Us", "Careers", "Contact", "Press", "Partners"]
//   };

//   return (
//     <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
//       {/* Content similar to original HTML */}
//     </footer>
//   );
// };

// export default Footer;

// import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
// import { useEffect } from 'react';

// const Footer = () => {
//   const links = {
//     product: ["Features", "Pricing", "Integrations", "Updates", "Roadmap"],
//     resources: ["Blog", "Help Center", "Tutorials", "Webinars", "API Docs"],
//     company: ["About Us", "Careers", "Contact", "Press", "Partners"]
//   };

//   useEffect(() => {
//     // Add 3D tilt effect to social icons on mouse move
//     const socialIcons = document.querySelectorAll('.social-icon-3d');
    
//     const handleMouseMove = (e) => {
//       const rect = e.currentTarget.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
      
//       const angleX = (y - centerY) / 10;
//       const angleY = (centerX - x) / 10;
      
//       e.currentTarget.style.transform = `translateY(-5px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
//     };
    
//     const handleMouseLeave = (e) => {
//       e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
//     };
    
//     socialIcons.forEach(icon => {
//       icon.addEventListener('mousemove', handleMouseMove);
//       icon.addEventListener('mouseleave', handleMouseLeave);
//     });
    
//     // Add floating animation to links
//     const textLinks = document.querySelectorAll('.link-3d');
    
//     const handleLinkEnter = (e) => {
//       e.currentTarget.style.transform = 'translateY(-3px)';
//     };
    
//     const handleLinkLeave = (e) => {
//       e.currentTarget.style.transform = 'translateY(0)';
//     };
    
//     textLinks.forEach(link => {
//       link.addEventListener('mouseenter', handleLinkEnter);
//       link.addEventListener('mouseleave', handleLinkLeave);
//     });
    
//     return () => {
//       socialIcons.forEach(icon => {
//         icon.removeEventListener('mousemove', handleMouseMove);
//         icon.removeEventListener('mouseleave', handleMouseLeave);
//       });
      
//       textLinks.forEach(link => {
//         link.removeEventListener('mouseenter', handleLinkEnter);
//         link.removeEventListener('mouseleave', handleLinkLeave);
//       });
//     };
//   }, []);

//   return (
//     <footer className="bg-black border-t border-gray-800 pt-12 pb-8 relative overflow-hidden">
//       {/* Floating 3D elements in background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-blue-500 opacity-10 floating-element" style={{ animationDelay: '0s' }}></div>
//         <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-purple-600 opacity-10 floating-element" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-blue-400 opacity-10 floating-element" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-purple-500 opacity-10 floating-element" style={{ animationDelay: '3s' }}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
//           <div className="col-span-2">
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4 logo-3d">
//               AI NEXUS
//             </div>
//             <p className="text-gray-400 mb-4">
//               Revolutionizing business communication with AI-powered solutions that work 24/7 to grow your revenue.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 social-icon-3d"
//               >
//                 <Facebook className="text-white w-4 h-4" />
//               </a>
//               <a 
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 social-icon-3d"
//               >
//                 <Twitter className="text-white w-4 h-4" />
//               </a>
//               <a 
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 social-icon-3d"
//               >
//                 <Linkedin className="text-white w-4 h-4" />
//               </a>
//               <a 
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 social-icon-3d"
//               >
//                 <Instagram className="text-white w-4 h-4" />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-white">Product</h3>
//             <ul className="space-y-2">
//               {links.product.map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-gray-400 link-3d relative inline-block">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
//             <ul className="space-y-2">
//               {links.resources.map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-gray-400 link-3d relative inline-block">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
//             <ul className="space-y-2">
//               {links.company.map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-gray-400 link-3d relative inline-block">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-400 text-sm mb-4 md:mb-0">
//             &copy; 2023 AI Nexus. All rights reserved.
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-400 hover:text-blue-400 text-sm link-3d relative inline-block">Privacy Policy</a>
//             <a href="#" className="text-gray-400 hover:text-blue-400 text-sm link-3d relative inline-block">Terms of Service</a>
//             <a href="#" className="text-gray-400 hover:text-blue-400 text-sm link-3d relative inline-block">Cookie Policy</a>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .social-icon-3d {
//           transition: all 0.3s ease;
//           transform-style: preserve-3d;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
        
//         .social-icon-3d:hover {
//           transform: translateY(-5px) rotateX(20deg);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
//         }
        
//         .link-3d {
//           transition: all 0.3s ease;
//         }
        
//         .link-3d:hover {
//           transform: translateY(-2px);
//         }
        
//         .link-3d::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: linear-gradient(90deg, #3b82f6, #8b5cf6);
//           transition: width 0.3s ease;
//         }
        
//         .link-3d:hover::after {
//           width: 100%;
//         }
        
//         .logo-3d {
//           text-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
//           transition: all 0.5s ease;
//         }
        
//         .logo-3d:hover {
//           text-shadow: 0 8px 16px rgba(139, 92, 246, 0.4);
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         .floating-element {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;


import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useEffect } from 'react';

const Footer = () => {

  useEffect(() => {
    // Add 3D tilt effect to social icons on mouse move
    const socialIcons = document.querySelectorAll('.social-icon-3d');
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 10;
      const angleY = (centerX - x) / 10;
      
      e.currentTarget.style.transform = `translateY(-5px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };
    
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    };
    
    socialIcons.forEach(icon => {
      icon.addEventListener('mousemove', handleMouseMove);
      icon.addEventListener('mouseleave', handleMouseLeave);
    });
    
    // Add floating animation to links
    const textLinks = document.querySelectorAll('.link-3d');
    
    const handleLinkEnter = (e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
    };
    
    const handleLinkLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    };
    
    textLinks.forEach(link => {
      link.addEventListener('mouseenter', handleLinkEnter);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      socialIcons.forEach(icon => {
        icon.removeEventListener('mousemove', handleMouseMove);
        icon.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      textLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkEnter);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <footer className=" pt-12 pb-8 relative overflow-hidden">
      {/* Floating 3D elements in background */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-yellow-400 opacity-15 floating-element" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-yellow-500 opacity-10 floating-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-yellow-300 opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-yellow-600 opacity-12 floating-element" style={{ animationDelay: '3s' }}></div>
      </div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-yellow-400 mb-4 logo-3d">
              POP AI
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing business communication with AI-powered solutions that work 24/7 to grow your revenue.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 social-icon-3d"
              >
                <Facebook className="text-white w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 social-icon-3d"
              >
                <Twitter className="text-white w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 social-icon-3d"
              >
                <Linkedin className="text-white w-4 h-4" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 social-icon-3d"
              >
                <Instagram className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Product</h3>
            <ul className="space-y-2">
              {links.product.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 link-3d relative inline-block transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 link-3d relative inline-block transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Company</h3>
            <ul className="space-y-2">
              {links.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 link-3d relative inline-block transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        
        <div className="border-t border-yellow-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 POP AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm link-3d relative inline-block transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm link-3d relative inline-block transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm link-3d relative inline-block transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .social-icon-3d {
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .social-icon-3d:hover {
          transform: translateY(-5px) rotateX(20deg);
          box-shadow: 0 10px 20px rgba(254, 215, 0, 0.3);
        }
        
        .link-3d {
          transition: all 0.3s ease;
        }
        
        .link-3d:hover {
          transform: translateY(-2px);
        }
        
        .link-3d::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FED700;
          transition: width 0.3s ease;
        }
        
        .link-3d:hover::after {
          width: 100%;
        }
        
        .logo-3d {
          text-shadow: 0 4px 8px rgba(254, 215, 0, 0.4);
          transition: all 0.5s ease;
          filter: drop-shadow(0 0 10px rgba(254, 215, 0, 0.3));
        }
        
        .logo-3d:hover {
          text-shadow: 0 8px 16px rgba(254, 215, 0, 0.6);
          filter: drop-shadow(0 0 20px rgba(254, 215, 0, 0.5));
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;