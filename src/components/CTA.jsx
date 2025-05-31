// const CTA = () => {
//   return (
//     <section id="contact" className="py-20 bg-black">
//       {/* Content similar to original HTML */}
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your interest! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/20 rounded-2xl border border-gray-800 p-8 md:p-12 relative overflow-hidden">
          {/* Background blur effects */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full filter blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Get started with our all-in-one AI solution today and experience the difference 24/7 automation can make.
            </p>
           
            <div className="space-y-4 max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <div>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white"
                >
                  <option value="" className="text-gray-400">How can we help you?</option>
                  <option value="chatbot" className="text-white">AI Chatbot</option>
                  <option value="phone-agent" className="text-white">AI Phone Agent</option>
                  <option value="crm" className="text-white">CRM</option>
                  <option value="automation" className="text-white">Automation</option>
                  <option value="other" className="text-white">Other</option>
                </select>
              </div>
              <div>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <div className="pt-4">
                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:shadow-xl transition-all transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started Now
                </button>
              </div>
            </div>
           
            <div className="mt-8 text-center text-sm text-gray-500">
              Try Our All-In-One Software For Free • No Obligations • Cancel Anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;