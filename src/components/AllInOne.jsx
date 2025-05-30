// import { 
//   faCommentAlt,
//   faPhoneAlt,
//   faUserFriends,
//   faGlobe,
//   faEnvelopeOpenText,
//   faTasks,
//   faSms,
//   faPlus,
//   faPlay
// } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const AllInOne = () => {
//   const tools = [
//     { icon: faCommentAlt, name: "Intercom", color: "blue" },
//     { icon: faPhoneAlt, name: "Aircall", color: "green" },
//     { icon: faUserFriends, name: "HubSpot", color: "red" },
//     { icon: faGlobe, name: "Webflow", color: "purple" },
//     { icon: faEnvelopeOpenText, name: "Mailchimp", color: "yellow" },
//     { icon: faSms, name: "Twilio", color: "pink" },
//     { icon: faTasks, name: "Zapier", color: "indigo" },
//     { icon: faFacebookMessenger, name: "ManyChat", color: "blue" },
//     { icon: faWhatsapp, name: "WhatsApp Business", color: "green" },
//     { icon: faPlus, name: "And more...", color: "gray" }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
//       {/* Content similar to original HTML */}
//     </section>
//   );
// };

// export default AllInOne;


// import React from 'react';
// import {
//   faCommentAlt,
//   faPhoneAlt,
//   faUserFriends,
//   faGlobe,
//   faEnvelopeOpenText,
//   faTasks,
//   faSms,
//   faPlus,
//   faPlay
// } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const AllInOne = () => {
//   const tools = [
//     { icon: faCommentAlt, name: "Intercom", color: "blue" },
//     { icon: faPhoneAlt, name: "Aircall", color: "green" },
//     { icon: faUserFriends, name: "HubSpot", color: "red" },
//     { icon: faGlobe, name: "Webflow", color: "purple" },
//     { icon: faEnvelopeOpenText, name: "Mailchimp", color: "yellow" },
//     { icon: faSms, name: "Twilio", color: "pink" },
//     { icon: faTasks, name: "Zapier", color: "indigo" },
//     { icon: faFacebookMessenger, name: "ManyChat", color: "blue" },
//     { icon: faWhatsapp, name: "WhatsApp Business", color: "green" },
//     { icon: faPlus, name: "And more...", color: "gray" }
//   ];

//   const getColorClasses = (color) => {
//     const colorMap = {
//       blue: 'bg-blue-900/20 text-blue-400',
//       green: 'bg-green-900/20 text-green-400',
//       red: 'bg-red-900/20 text-red-400',
//       purple: 'bg-purple-900/20 text-purple-400',
//       yellow: 'bg-yellow-900/20 text-yellow-400',
//       pink: 'bg-pink-900/20 text-pink-400',
//       indigo: 'bg-indigo-900/20 text-indigo-400',
//       gray: 'bg-gray-600/20 text-gray-400'
//     };
//     return colorMap[color] || colorMap.blue;
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               All-In-One Software
//             </span>{" "}
//             to Grow Your Business
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Replace multiple expensive tools with our comprehensive solution that does it all - at a fraction of the cost.
//           </p>
//         </div>
        
//         {/* Demo Video Section */}
//         <div className="mb-16 p-6 bg-gray-900 rounded-xl border border-gray-800 relative overflow-hidden">
//           {/* Background blur effects */}
//           <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
//           <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          
//           <div className="relative z-10">
//             <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
//               <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-80 flex items-center justify-center rounded-xl">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-colors cursor-pointer">
//                     <FontAwesomeIcon icon={faPlay} className="text-blue-400 text-2xl ml-1" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">Demo Video</h3>
//                   <p className="text-gray-400 text-sm">See our platform in action</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Tools Grid Section */}
//         <div className="mb-16">
//           <h3 className="text-xl font-bold text-center mb-8">
//             Our All-In-One Software Replaces the Tools Listed Below And More Helping You Save Money Every Month.
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {tools.map((tool, index) => (
//               <div 
//                 key={index} 
//                 className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:bg-gray-900/70 transition-colors duration-200 hover:border-gray-700"
//               >
//                 <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
//                   <FontAwesomeIcon icon={tool.icon} />
//                 </div>
//                 <span className="text-sm font-medium">{tool.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllInOne;


import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Users,
  Globe,
  MailOpen,
  CheckSquare,
  MessageSquare,
  Plus,
  Play,
  Pause
} from 'lucide-react';

const AllInOne = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const tools = [
    { icon: MessageCircle, name: "Intercom", color: "blue" },
    { icon: Phone, name: "Aircall", color: "green" },
    { icon: Users, name: "HubSpot", color: "red" },
    { icon: Globe, name: "Webflow", color: "purple" },
    { icon: MailOpen, name: "Mailchimp", color: "yellow" },
    { icon: MessageSquare, name: "Twilio", color: "pink" },
    { icon: CheckSquare, name: "Zapier", color: "indigo" },
    { icon: MessageCircle, name: "ManyChat", color: "blue" },
    { icon: MessageSquare, name: "WhatsApp Business", color: "green" },
    { icon: Plus, name: "And more...", color: "gray" }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-900/20 text-blue-400',
      green: 'bg-green-900/20 text-green-400',
      red: 'bg-red-900/20 text-red-400',
      purple: 'bg-purple-900/20 text-purple-400',
      yellow: 'bg-yellow-900/20 text-yellow-400',
      pink: 'bg-pink-900/20 text-pink-400',
      indigo: 'bg-indigo-900/20 text-indigo-400',
      gray: 'bg-gray-600/20 text-gray-400'
    };
    return colorMap[color] || colorMap.blue;
  };

  const handlePlayVideo = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    const video = document.getElementById('demo-video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              All-In-One Software
            </span>{" "}
            to Grow Your Business
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Replace multiple expensive tools with our comprehensive solution that does it all - at a fraction of the cost.
          </p>
        </div>
        
        {/* Demo Video Section */}
        <div className="mb-16 p-6 bg-gray-900 rounded-xl border border-gray-800 relative overflow-hidden">
          {/* Background blur effects */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
              {!showVideo ? (
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-80 flex items-center justify-center rounded-xl">
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-colors cursor-pointer transform hover:scale-110"
                      onClick={handlePlayVideo}
                    >
                      <Play className="text-blue-400 text-2xl ml-1" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Demo Video</h3>
                    <p className="text-gray-400 text-sm">See our platform in action</p>
                  </div>
                </div>
              ) : (
                <div className="relative h-100 rounded-xl overflow-hidden">
                <video
  id="demo-video"
  className="w-full h-full object-cover"
  controls
  autoPlay
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
  onEnded={() => setIsPlaying(false)}
>
  <source src="/ai.mp4" type="video/mp4" />
  <p className="text-gray-400">Your browser does not support the video tag.</p>
</video>

                  
                  {/* Custom play/pause overlay (optional) */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer bg-black/20"
                    onClick={togglePlayPause}
                  >
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      {isPlaying ? (
                        <Pause className="text-white text-2xl" />
                      ) : (
                        <Play className="text-white text-2xl ml-1" />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Tools Grid Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center mb-8">
            Our All-In-One Software Replaces the Tools Listed Below And More Helping You Save Money Every Month.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div 
                  key={index} 
                  className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:bg-gray-900/70 transition-colors duration-200 hover:border-gray-700"
                >
                  <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOne;