// const CTA = () => {
//   return (
//     <section id="contact" className="py-20 bg-black">
//       {/* Content similar to original HTML */}
//     </section>
//   );
// };

// export default CTA;



// import React, { useState } from 'react';

// const CTA = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     service: '',
//     message: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can add your form submission logic here
//     alert('Thank you for your interest! We\'ll get back to you soon.');
    
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       company: '',
//       service: '',
//       message: ''
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/20 rounded-2xl border border-gray-800 p-8 md:p-12 relative overflow-hidden">
//           {/* Background blur effects */}
//           <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full filter blur-xl"></div>
//           <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full filter blur-xl"></div>
          
//           <div className="relative z-10">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
//               Get started with our all-in-one AI solution today and experience the difference 24/7 automation can make.
//             </p>
           
//             <div className="space-y-4 max-w-lg mx-auto">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <input 
//                     type="text" 
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your Name" 
//                     className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <input 
//                     type="email" 
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Email Address" 
//                     className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <input 
//                   type="text" 
//                   name="company"
//                   value={formData.company}
//                   onChange={handleInputChange}
//                   placeholder="Company Name" 
//                   className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
//                 />
//               </div>
//               <div>
//                 <select 
//                   name="service"
//                   value={formData.service}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white"
//                 >
//                   <option value="" className="text-gray-400">How can we help you?</option>
//                   <option value="chatbot" className="text-white">AI Chatbot</option>
//                   <option value="phone-agent" className="text-white">AI Phone Agent</option>
//                   <option value="crm" className="text-white">CRM</option>
//                   <option value="automation" className="text-white">Automation</option>
//                   <option value="other" className="text-white">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <textarea 
//                   rows="4" 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Your Message" 
//                   className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400 resize-none"
//                 ></textarea>
//               </div>
//               <div className="pt-4">
//                 <button 
//                   type="button"
//                   onClick={handleSubmit}
//                   className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:shadow-xl transition-all transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
//                 >
//                   Get Started Now
//                 </button>
//               </div>
//             </div>
           
//             <div className="mt-8 text-center text-sm text-gray-500">
//               Try Our All-In-One Software For Free • No Obligations • Cancel Anytime
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CTA;


import React, { useState } from 'react';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/20 rounded-3xl border border-gray-800 relative overflow-hidden">
          {/* Background blur effects */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-2xl animate-pulse delay-500"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center min-h-[600px]">
            {/* Left Side - AI Brain Animation */}
            <div className="flex items-center justify-center h-full">
              <div className="relative group w-full max-w-md">
                {/* Background Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl opacity-70 animate-pulse-glow"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full filter blur-2xl animate-pulse-glow-2"></div>
                
                {/* Neural Network Lines */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full animate-pulse-lines" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8"/>
                      </linearGradient>
                      <linearGradient id="lineGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Animated Neural Connections */}
                    <g className="animate-draw-1">
                      <path d="M50,100 Q200,50 350,100" stroke="url(#lineGrad1)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-dash"/>
                      <path d="M80,200 Q200,150 320,200" stroke="url(#lineGrad2)" strokeWidth="2" fill="none" strokeDasharray="3,3" className="animate-dash-2"/>
                      <path d="M60,300 Q200,250 340,300" stroke="url(#lineGrad1)" strokeWidth="2" fill="none" strokeDasharray="4,4" className="animate-dash-3"/>
                    </g>
                    
                    {/* Connection Nodes */}
                    <circle cx="50" cy="100" r="4" fill="#3B82F6" className="animate-pulse-node"/>
                    <circle cx="350" cy="100" r="4" fill="#8B5CF6" className="animate-pulse-node delay-300"/>
                    <circle cx="80" cy="200" r="3" fill="#06B6D4" className="animate-pulse-node delay-600"/>
                    <circle cx="320" cy="200" r="3" fill="#EC4899" className="animate-pulse-node delay-900"/>
                  </svg>
                </div>
                
                {/* Main AI Brain Container */}
                <div className="relative z-10 h-full min-h-[500px] flex items-center justify-center">
                  {/* Floating Particles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-particle-1"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-particle-2"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-particle-3"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float-particle-4"></div>
                    <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full animate-float-particle-5"></div>
                    <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-white rounded-full animate-float-particle-6"></div>
                  </div>
                  
                  {/* AI Brain Image Container */}
                  <div className="relative transform-gpu transition-all duration-700 hover:scale-110 group-hover:rotate-2">
                    {/* Rotating Border Ring */}
                    <div className="absolute -inset-8 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-border opacity-50"></div>
                    <div className="absolute -inset-6 border border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-border-reverse opacity-30"></div>
                    
                    {/* Brain Image */}
                    <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-gray-900/80 to-blue-900/40 backdrop-blur-sm border border-blue-500/30 shadow-2xl shadow-blue-500/20 group-hover:shadow-purple-500/30 transition-all duration-500">
                      <img 
                        src="/ai1.avif" 
                        alt="AI Brain" 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 animate-subtle-zoom"
                      />
                      
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20 animate-pulse-overlay"></div>
                      
                      {/* Scanning Line Effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div className="absolute -inset-x-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
                      </div>
                    </div>
                    
                    {/* Energy Pulses */}
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-ping-slow"></div>
                      <div className="absolute inset-2 border border-purple-400/20 rounded-full animate-ping-slower"></div>
                    </div>
                  </div>
                  
                  {/* Data Flow Indicators */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="flex space-x-1">
                      <div className="w-1 h-8 bg-blue-400 rounded-full animate-data-flow"></div>
                      <div className="w-1 h-6 bg-purple-400 rounded-full animate-data-flow delay-200"></div>
                      <div className="w-1 h-4 bg-cyan-400 rounded-full animate-data-flow delay-400"></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 rotate-180">
                    <div className="flex space-x-1">
                      <div className="w-1 h-6 bg-pink-400 rounded-full animate-data-flow"></div>
                      <div className="w-1 h-8 bg-purple-400 rounded-full animate-data-flow delay-300"></div>
                      <div className="w-1 h-4 bg-blue-400 rounded-full animate-data-flow delay-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Form */}
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                  Ready to 
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Transform</span> Your Business?
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Get started with our all-in-one AI solution today and experience the difference 24/7 automation can make for your business growth.
                </p>
              </div>
             
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70 group-hover:border-gray-600"
                      required
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address" 
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70 group-hover:border-gray-600"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name" 
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-gray-800/70 group-hover:border-gray-600"
                  />
                </div>
                
                <div className="group">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 hover:bg-gray-800/70 group-hover:border-gray-600"
                    required
                  >
                    <option value="" className="text-gray-400">How can we help you?</option>
                    <option value="chatbot" className="text-white">AI Chatbot</option>
                    <option value="phone-agent" className="text-white">AI Phone Agent</option>
                    <option value="crm" className="text-white">CRM Integration</option>
                    <option value="automation" className="text-white">Business Automation</option>
                    <option value="other" className="text-white">Custom Solution</option>
                  </select>
                </div>
                
                <div className="group">
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..." 
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300 hover:bg-gray-800/70 group-hover:border-gray-600"
                  />
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get Started Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
             
              <div className="pt-4 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free Trial
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No Setup Fees
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cancel Anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-border-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-glow-2 {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-overlay {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(400px); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes data-flow {
          0%, 100% { height: 1rem; opacity: 0.3; }
          50% { height: 2rem; opacity: 1; }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -20px) rotate(90deg); }
          50% { transform: translate(-10px, -10px) rotate(180deg); }
          75% { transform: translate(-20px, 10px) rotate(270deg); }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, -15px) rotate(90deg); }
          50% { transform: translate(15px, -25px) rotate(180deg); }
          75% { transform: translate(25px, 15px) rotate(270deg); }
        }
        
        @keyframes float-particle-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(120deg); }
          66% { transform: translate(-25px, -5px) rotate(240deg); }
        }
        
        @keyframes float-particle-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, -25px) rotate(120deg); }
          66% { transform: translate(30px, -10px) rotate(240deg); }
        }
        
        @keyframes float-particle-5 {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-40px); opacity: 1; }
        }
        
        @keyframes float-particle-6 {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(40px); opacity: 1; }
        }
        
        @keyframes dash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 20; }
        }
        
        @keyframes dash-2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -15; }
        }
        
        @keyframes dash-3 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 25; }
        }
        
        @keyframes pulse-lines {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        @keyframes pulse-node {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        
        .animate-spin-border {
          animation: spin-border 8s linear infinite;
        }
        
        .animate-spin-border-reverse {
          animation: spin-border-reverse 12s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow-2 {
          animation: pulse-glow-2 4s ease-in-out infinite;
        }
        
        .animate-pulse-overlay {
          animation: pulse-overlay 5s ease-in-out infinite;
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 8s ease-in-out infinite;
        }
        
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-data-flow {
          animation: data-flow 2s ease-in-out infinite;
        }
        
        .animate-float-particle-1 {
          animation: float-particle-1 15s ease-in-out infinite;
        }
        
        .animate-float-particle-2 {
          animation: float-particle-2 12s ease-in-out infinite;
        }
        
        .animate-float-particle-3 {
          animation: float-particle-3 18s ease-in-out infinite;
        }
        
        .animate-float-particle-4 {
          animation: float-particle-4 14s ease-in-out infinite;
        }
        
        .animate-float-particle-5 {
          animation: float-particle-5 6s ease-in-out infinite;
        }
        
        .animate-float-particle-6 {
          animation: float-particle-6 7s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dash 3s linear infinite;
        }
        
        .animate-dash-2 {
          animation: dash-2 2.5s linear infinite;
        }
        
        .animate-dash-3 {
          animation: dash-3 3.5s linear infinite;
        }
        
        .animate-pulse-lines {
          animation: pulse-lines 4s ease-in-out infinite;
        }
        
        .animate-pulse-node {
          animation: pulse-node 2s ease-in-out infinite;
        }
        
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-900 { animation-delay: 900ms; }
      `}</style>
    </section>
  );
};

export default CTA;