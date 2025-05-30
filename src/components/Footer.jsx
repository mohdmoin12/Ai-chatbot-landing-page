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




import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const links = {
    product: ["Features", "Pricing", "Integrations", "Updates", "Roadmap"],
    resources: ["Blog", "Help Center", "Tutorials", "Webinars", "API Docs"],
    company: ["About Us", "Careers", "Contact", "Press", "Partners"]
  };

  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              AI NEXUS
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing business communication with AI-powered solutions that work 24/7 to grow your revenue.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-200"
              >
                <Twitter size={16} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                <Instagram size={16} className="text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              {links.product.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {links.company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2023 AI Nexus. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;