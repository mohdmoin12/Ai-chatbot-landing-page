// import { 
//   faPhoneAlt, 
//   faSms, 
//   faEnvelope, 
//   faHeadset,
//   faCalendar,
//   faPhone,
//   faEnvelope as faEnvelopeSolid,
//   faTasks,
//   faBell
// } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Communication = () => {
//   const channels = [
//     { icon: faPhoneAlt, name: "Phone Calls", color: "blue" },
//     { icon: faSms, name: "SMS", color: "green" },
//     { icon: faEnvelope, name: "Email", color: "red" },
//     { icon: faWhatsapp, name: "WhatsApp", color: "green" },
//     { icon: faFacebookMessenger, name: "Facebook Messages", color: "blue" },
//     { icon: faInstagram, name: "Instagram Messages", color: "pink" }
//   ];

//   const actions = [
//     { icon: faCalendar, color: "blue", text: "Send calendar" },
//     { icon: faPhone, color: "green", text: "Call customers" },
//     { icon: faEnvelopeSolid, color: "yellow", text: "Send emails" },
//     { icon: faTasks, color: "purple", text: "Create tasks" },
//     { icon: faBell, color: "red", text: "Send notifications" }
//   ];

//   return (
//     <section className="py-20 bg-black">
//       {/* Content similar to original HTML */}
//     </section>
//   );
// };

// export default Communication;


// import React from 'react';
// import { 
//   faPhoneAlt, 
//   faSms, 
//   faEnvelope, 
//   faHeadset, 
//   faCalendar, 
//   faPhone, 
//   faEnvelope as faEnvelopeSolid, 
//   faTasks, 
//   faBell,
//   faRobot,
//   faUser,
//   faPaperPlane
// } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Communication = () => {
//   const channels = [
//     { icon: faPhoneAlt, name: "Phone Calls", color: "blue" },
//     { icon: faSms, name: "SMS", color: "green" },
//     { icon: faEnvelope, name: "Email", color: "red" },
//     { icon: faWhatsapp, name: "WhatsApp", color: "green" },
//     { icon: faFacebookMessenger, name: "Facebook Messages", color: "blue" },
//     { icon: faInstagram, name: "Instagram Messages", color: "pink" }
//   ];

//   const actions = [
//     { icon: faCalendar, color: "blue" },
//     { icon: faPhone, color: "green" },
//     { icon: faEnvelopeSolid, color: "yellow" },
//     { icon: faTasks, color: "purple" },
//     { icon: faBell, color: "red" }
//   ];

//   const getColorClasses = (color, type = 'bg') => {
//     const colorMap = {
//       blue: type === 'bg' ? 'bg-blue-900/30 text-blue-400' : 'border-blue-600 bg-blue-600/50 text-blue-300',
//       green: type === 'bg' ? 'bg-green-900/30 text-green-400' : 'border-green-600 bg-green-600/50 text-green-300',
//       red: type === 'bg' ? 'bg-red-900/30 text-red-400' : 'border-red-600 bg-red-600/50 text-red-300',
//       pink: type === 'bg' ? 'bg-pink-800/30 text-pink-300' : 'border-pink-600 bg-pink-600/50 text-pink-300',
//       yellow: type === 'bg' ? 'bg-yellow-900/30 text-yellow-400' : 'border-yellow-600 bg-yellow-600/50 text-yellow-300',
//       purple: type === 'bg' ? 'bg-purple-900/30 text-purple-400' : 'border-purple-600 bg-purple-600/50 text-purple-300'
//     };
//     return colorMap[color] || colorMap.blue;
//   };

//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Manage Multiple Communications
//               </span>{" "}
//               Using AI
//             </h2>
//             <p className="text-gray-400 mb-8 max-w-lg">
//               Our platform integrates with all your communication channels, providing seamless AI-powered interactions across every touchpoint.
//             </p>
            
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {channels.map((channel, index) => (
//                 <div key={index} className="flex items-center bg-gray-900/50 p-4 rounded-lg border border-gray-800">
//                   <div className={`w-12 h-12 rounded-lg ${getColorClasses(channel.color)} flex items-center justify-center mr-4`}>
//                     <FontAwesomeIcon icon={channel.icon} className="text-xl" />
//                   </div>
//                   <span className="font-medium">{channel.name}</span>
//                 </div>
//               ))}
//             </div>
            
//             <div className="bg-gray-900 p-5 rounded-xl border-l-4 border-blue-500">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <FontAwesomeIcon icon={faHeadset} className="text-blue-400 text-2xl mr-3" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-bold mb-2">24/7 Customer Service Response</h4>
//                   <p className="text-gray-400 text-sm">
//                     Phone AI Agent will answer calls. AI Chatbot will respond to SMS, Emails, Facebook, Instagram and WhatsApp messages.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-12 lg:mt-0">
//             <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden h-96">
//               <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10"></div>
              
//               {/* Browser Header */}
//               <div className="absolute top-5 left-5 right-5 bg-gray-800 rounded-lg p-3">
//                 <div className="flex items-center">
//                   <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
//                   <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
//                   <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                   <div className="ml-2 text-xs text-gray-400">dashboard.ai</div>
//                 </div>
//               </div>
              
//               {/* Chat Interface */}
//               <div className="absolute top-20 left-5 right-5 bottom-5 bg-gray-800/80 rounded-lg backdrop-blur-sm p-4">
//                 {/* AI Message */}
//                 <div className="flex items-center mb-4">
//                   <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
//                     <FontAwesomeIcon icon={faRobot} className="text-blue-400" />
//                   </div>
//                   <div className="flex-grow">
//                     <div className="h-3 bg-gray-700 rounded-full animate-pulse mb-2" style={{width: '70%'}}></div>
//                     <div className="h-2 bg-gray-700 rounded-full animate-pulse" style={{width: '50%'}}></div>
//                   </div>
//                 </div>
                
//                 {/* Message Content */}
//                 <div className="space-y-3 mb-4">
//                   <div className="h-3 bg-gray-700 rounded-full animate-pulse" style={{width: '90%'}}></div>
//                   <div className="h-3 bg-gray-700 rounded-full animate-pulse" style={{width: '80%'}}></div>
//                   <div className="h-3 bg-gray-700 rounded-full animate-pulse" style={{width: '60%'}}></div>
//                 </div>
                
//                 {/* User Message */}
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
//                     <FontAwesomeIcon icon={faUser} className="text-green-400" />
//                   </div>
//                   <div className="flex-grow">
//                     <div className="h-3 bg-gray-700 rounded-full animate-pulse mb-2" style={{width: '60%'}}></div>
//                     <div className="h-2 bg-gray-700 rounded-full animate-pulse" style={{width: '40%'}}></div>
//                   </div>
//                 </div>
                
//                 {/* Input Field */}
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <div className="flex items-center bg-gray-900 rounded-full p-2">
//                     <div className="w-6 h-6 bg-gray-700 rounded-full ml-1 mr-3"></div>
//                     <div className="text-xs text-gray-500">Type a message...</div>
//                     <div className="ml-auto w-6 h-6 bg-blue-600/30 rounded-full flex items-center justify-center">
//                       <FontAwesomeIcon icon={faPaperPlane} className="text-blue-400 text-xs" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Animated Background Element */}
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
//             </div>
            
//             {/* Workflow Section */}
//             <div className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-800">
//               <h4 className="text-lg font-bold mb-4">Automate Tasks Using Workflows</h4>
//               <p className="text-gray-400 text-sm mb-4">
//                 We can trigger actions like send calendar, book appointments, call customers or leads all without you having to lift a finger.
//               </p>
//               <div className="flex -space-x-2">
//                 {actions.map((action, index) => (
//                   <div key={index} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${getColorClasses(action.color, 'border')}`}>
//                     <FontAwesomeIcon icon={action.icon} className="text-xs" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Communication;



import React from 'react';
import { 
  faPhoneAlt, 
  faSms, 
  faEnvelope, 
  faHeadset, 
  faCalendar, 
  faPhone, 
  faEnvelope as faEnvelopeSolid, 
  faTasks, 
  faBell,
  faRobot,
  faUser,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Communication = () => {
  const channels = [
    { icon: faPhoneAlt, name: "Phone Calls", color: "blue" },
    { icon: faSms, name: "SMS", color: "green" },
    { icon: faEnvelope, name: "Email", color: "red" },
    { icon: faWhatsapp, name: "WhatsApp", color: "green" },
    { icon: faFacebookMessenger, name: "Facebook Messages", color: "blue" },
    { icon: faInstagram, name: "Instagram Messages", color: "pink" }
  ];

  const actions = [
    { icon: faCalendar, color: "blue" },
    { icon: faPhone, color: "green" },
    { icon: faEnvelopeSolid, color: "yellow" },
    { icon: faTasks, color: "purple" },
    { icon: faBell, color: "red" }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: type === 'bg' ? 'bg-blue-900/30 text-blue-400' : 'border-blue-600 bg-blue-600/50 text-blue-300',
      green: type === 'bg' ? 'bg-green-900/30 text-green-400' : 'border-green-600 bg-green-600/50 text-green-300',
      red: type === 'bg' ? 'bg-red-900/30 text-red-400' : 'border-red-600 bg-red-600/50 text-red-300',
      pink: type === 'bg' ? 'bg-pink-800/30 text-pink-300' : 'border-pink-600 bg-pink-600/50 text-pink-300',
      yellow: type === 'bg' ? 'bg-yellow-900/30 text-yellow-400' : 'border-yellow-600 bg-yellow-600/50 text-yellow-300',
      purple: type === 'bg' ? 'bg-purple-900/30 text-purple-400' : 'border-purple-600 bg-purple-600/50 text-purple-300'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span style={{ color: '#FED700' }}>
                Manage Multiple Communications
              </span>{" "}
              Using AI
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Our platform integrates with all your communication channels, providing seamless AI-powered interactions across every touchpoint.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {channels.map((channel, index) => (
                <div key={index} className="flex items-center bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(channel.color)} flex items-center justify-center mr-4`}>
                    <FontAwesomeIcon icon={channel.icon} className="text-xl" />
                  </div>
                  <span className="font-medium">{channel.name}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-900 p-5 rounded-xl border-l-4" style={{ borderLeftColor: '#FED700' }}>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon icon={faHeadset} className="text-2xl mr-3" style={{ color: '#FED700' }} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">24/7 Customer Service Response</h4>
                  <p className="text-gray-400 text-sm">
                    Phone AI Agent will answer calls. AI Chatbot will respond to SMS, Emails, Facebook, Instagram and WhatsApp messages.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden h-96">
              <div className="absolute inset-0" style={{ 
                background: `linear-gradient(to bottom, rgba(254, 215, 0, 0.1), rgba(254, 215, 0, 0.05))` 
              }}></div>
              
              {/* Browser Header */}
              <div className="absolute top-5 left-5 right-5 bg-gray-800 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="ml-2 text-xs text-gray-400">dashboard.ai</div>
                </div>
              </div>
              
              {/* Chat Interface */}
              <div className="absolute top-20 left-5 right-5 bottom-5 bg-gray-800/80 rounded-lg backdrop-blur-sm p-4">
                {/* AI Message */}
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'rgba(254, 215, 0, 0.2)' }}>
                    <FontAwesomeIcon icon={faRobot} style={{ color: '#FED700' }} />
                  </div>
                  <div className="flex-grow">
                    <div className="h-3 bg-gray-700 rounded-full animate-pulse mb-2" style={{width: '70%'}}></div>
                    <div className="h-2 bg-gray-700 rounded-full animate-pulse" style={{width: '50%'}}></div>
                  </div>
                </div>
                
                {/* Message Content */}
                <div className="space-y-3 mb-4">
                  <div className="h-3 bg-gray-700 rounded-full animate-pulse" style={{width: '90%'}}></div>
                  <div className="h-3 bg-gray-700 rounded-full animate-pulse" style={{width: '80%'}}></div>
                  <div className="h-3 bg-gray-700 rounded-full animate-pulse" style={{width: '60%'}}></div>
                </div>
                
                {/* User Message */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faUser} className="text-green-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="h-3 bg-gray-700 rounded-full animate-pulse mb-2" style={{width: '60%'}}></div>
                    <div className="h-2 bg-gray-700 rounded-full animate-pulse" style={{width: '40%'}}></div>
                  </div>
                </div>
                
                {/* Input Field */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center bg-gray-900 rounded-full p-2">
                    <div className="w-6 h-6 bg-gray-700 rounded-full ml-1 mr-3"></div>
                    <div className="text-xs text-gray-500">Type a message...</div>
                    <div className="ml-auto w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(254, 215, 0, 0.3)' }}>
                      <FontAwesomeIcon icon={faPaperPlane} className="text-xs" style={{ color: '#FED700' }} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated Background Element */}
              <div 
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 animate-pulse"
                style={{ background: '#FED700' }}
              ></div>
            </div>
            
            {/* Workflow Section */}
            <div className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-4">Automate Tasks Using Workflows</h4>
              <p className="text-gray-400 text-sm mb-4">
                We can trigger actions like send calendar, book appointments, call customers or leads all without you having to lift a finger.
              </p>
              <div className="flex -space-x-2">
                {actions.map((action, index) => (
                  <div key={index} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${getColorClasses(action.color, 'border')}`}>
                    <FontAwesomeIcon icon={action.icon} className="text-xs" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communication;