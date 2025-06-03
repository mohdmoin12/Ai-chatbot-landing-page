// import { 
//   faRobot,
//   faUser,
//   faMicrophone,
//   faPaperPlane,
//   faQuoteLeft,
//   faCheck
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const AIEmployee = () => {
//   return (
//     <section className="py-20 bg-gray-900/50 border-y border-gray-800">
//       {/* Content similar to original HTML */}
//     </section>
//   );
// };

// export default AIEmployee;

// import React from 'react';
// import {
//   faRobot,
//   faUser,
//   faMicrophone,
//   faPaperPlane,
//   faQuoteLeft,
//   faCheck
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const AIEmployee = () => {
//   const features = [
//     { text: "No setup fees" },
//     { text: "No contracts" }
//   ];

//   const aiMessages = [
//     "Hello! Thank you for calling ABC Company. How can I assist you today?",
//     "Would you like to schedule an appointment with one of our consultants?"
//   ];

//   const customerMessages = [
//     "Hi, I'd like to inquire about your service pricing options.",
//     "Yes, I'd like to schedule for next Tuesday if possible."
//   ];

//   return (
//     <section className="py-20 bg-gray-900/50 border-y border-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
//           {/* Left Content */}
//           <div className="mb-12 lg:mb-0">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Never miss another call
//               </span>
//               <br />
//               WITH YOUR NEW AI EMPLOYEE (VOICE AI AGENT + AI CHATBOT)
//             </h2>
//             <p className="text-gray-400 mb-8">
//               AI Employee will answer your phone calls, take messages, respond to chats and set appointments 24/7
//             </p>
            
//             {/* Testimonial */}
//             <div className="bg-gray-800/50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0">
//                   <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-400 text-xl mt-1 mr-3" />
//                 </div>
//                 <div>
//                   <p className="italic mb-2">
//                     "This thing is unreal. Takes calls, generates leads & bookings, sends recap emails & transcripts - it can even shoot follow up texts to the caller!"
//                   </p>
//                   <p className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                     Chase Buckner
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Features Grid */}
//             <div className="grid grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mr-3">
//                       <FontAwesomeIcon icon={faCheck} className="text-blue-400 text-xs" />
//                     </div>
//                     <span className="text-sm">{feature.text}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Right Content - Chat Interface */}
//           <div>
//             <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
//               {/* Window Header */}
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
//                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 </div>
//                 <div className="text-sm text-gray-500">AI Call • In Progress</div>
//               </div>
              
//               {/* AI Assistant Section */}
//               <div className="bg-gray-900 rounded-lg p-4 mb-4">
//                 <div className="flex items-center mb-3">
//                   <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-3">
//                     <FontAwesomeIcon icon={faRobot} className="text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">AI Assistant</h4>
//                     <div className="text-xs text-gray-500">Responding to customer</div>
//                   </div>
//                 </div>
//                 <div className="pl-13">
//                   {aiMessages.map((message, index) => (
//                     <div key={index} className="bg-blue-900/20 rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 mb-2 last:mb-0">
//                       <p className="text-sm">{message}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Customer Section */}
//               <div className="bg-gray-900 rounded-lg p-4">
//                 <div className="flex items-center mb-3">
//                   <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
//                     <FontAwesomeIcon icon={faUser} className="text-green-400" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold">Customer</h4>
//                     <div className="text-xs text-gray-500">Sarah M.</div>
//                   </div>
//                 </div>
//                 <div className="pl-13">
//                   {customerMessages.map((message, index) => (
//                     <div key={index} className="bg-gray-800 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-3 mb-2 last:mb-0">
//                       <p className="text-sm">{message}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Input Area */}
//               <div className="mt-4 flex items-center">
//                 <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full mr-3">
//                   <FontAwesomeIcon icon={faMicrophone} className="text-gray-400" />
//                 </div>
//                 <div className="flex-grow bg-gray-800 rounded-full py-2 px-4 text-sm text-gray-400">
//                   AI is responding...
//                 </div>
//                 <div className="ml-3 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
//                   <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIEmployee;



import React from 'react';
import {
  faRobot,
  faUser,
  faMicrophone,
  faPaperPlane,
  faQuoteLeft,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AIEmployee = () => {
  const features = [
    { text: "No setup fees" },
    { text: "No contracts" }
  ];

  const aiMessages = [
    "Hello! Thank you for calling ABC Company. How can I assist you today?",
    "Would you like to schedule an appointment with one of our consultants?"
  ];

  const customerMessages = [
    "Hi, I'd like to inquire about your service pricing options.",
    "Yes, I'd like to schedule for next Tuesday if possible."
  ];

  return (
    <section className="py-20 bg-gray-900/50 border-y border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span style={{ color: '#FED700' }}>
                Never miss another call
              </span>
              <br />
              WITH YOUR NEW AI EMPLOYEE (VOICE AI AGENT + AI CHATBOT)
            </h2>
            <p className="text-gray-400 mb-8">
              AI Employee will answer your phone calls, take messages, respond to chats and set appointments 24/7
            </p>
            
            {/* Testimonial */}
            <div className="bg-gray-800/50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-400 text-xl mt-1 mr-3" />
                </div>
                <div>
                  <p className="italic mb-2">
                    "This thing is unreal. Takes calls, generates leads & bookings, sends recap emails & transcripts - it can even shoot follow up texts to the caller!"
                  </p>
                  <p className="font-bold" style={{ color: '#FED700' }}>
                    Chase Buckner
                  </p>
                </div>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mr-3">
                      <FontAwesomeIcon icon={faCheck} className="text-blue-400 text-xs" />
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Chat Interface */}
          <div>
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
              {/* Window Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-500">AI Call • In Progress</div>
              </div>
              
              {/* AI Assistant Section */}
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faRobot} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Assistant</h4>
                    <div className="text-xs text-gray-500">Responding to customer</div>
                  </div>
                </div>
                <div className="pl-13">
                  {aiMessages.map((message, index) => (
                    <div key={index} className="bg-blue-900/20 rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 mb-2 last:mb-0">
                      <p className="text-sm">{message}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Customer Section */}
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faUser} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Customer</h4>
                    <div className="text-xs text-gray-500">Sarah M.</div>
                  </div>
                </div>
                <div className="pl-13">
                  {customerMessages.map((message, index) => (
                    <div key={index} className="bg-gray-800 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-3 mb-2 last:mb-0">
                      <p className="text-sm">{message}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Input Area */}
              <div className="mt-4 flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full mr-3">
                  <FontAwesomeIcon icon={faMicrophone} className="text-gray-400" />
                </div>
                <div className="flex-grow bg-gray-800 rounded-full py-2 px-4 text-sm text-gray-400">
                  AI is responding...
                </div>
                <div className="ml-3 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEmployee;