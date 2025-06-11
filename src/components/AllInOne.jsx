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


// import React, { useState } from 'react';
// import {
//   MessageCircle,
//   Phone,
//   Users,
//   Globe,
//   MailOpen,
//   CheckSquare,
//   MessageSquare,
//   Plus,
//   Play,
//   Pause
// } from 'lucide-react';

// const AllInOne = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);

//   const tools = [
//     { icon: MessageCircle, name: "Intercom", color: "blue" },
//     { icon: Phone, name: "Aircall", color: "green" },
//     { icon: Users, name: "HubSpot", color: "red" },
//     { icon: Globe, name: "Webflow", color: "purple" },
//     { icon: MailOpen, name: "Mailchimp", color: "yellow" },
//     { icon: MessageSquare, name: "Twilio", color: "pink" },
//     { icon: CheckSquare, name: "Zapier", color: "indigo" },
//     { icon: MessageCircle, name: "ManyChat", color: "blue" },
//     { icon: MessageSquare, name: "WhatsApp Business", color: "green" },
//     { icon: Plus, name: "And more...", color: "gray" }
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

//   const handlePlayVideo = () => {
//     setShowVideo(true);
//     setIsPlaying(true);
//   };

//   const togglePlayPause = () => {
//     const video = document.getElementById('demo-video');
//     if (video) {
//       if (isPlaying) {
//         video.pause();
//       } else {
//         video.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
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
//               {!showVideo ? (
//                 <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-80 flex items-center justify-center rounded-xl">
//                   <div className="text-center">
//                     <div 
//                       className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-colors cursor-pointer transform hover:scale-110"
//                       onClick={handlePlayVideo}
//                     >
//                       <Play className="text-blue-400 text-2xl ml-1" />
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">Demo Video</h3>
//                     <p className="text-gray-400 text-sm">See our platform in action</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="relative h-100 rounded-xl overflow-hidden">
//                 <video
//   id="demo-video"
//   className="w-full h-full object-cover"
//   controls
//   autoPlay
//   onPlay={() => setIsPlaying(true)}
//   onPause={() => setIsPlaying(false)}
//   onEnded={() => setIsPlaying(false)}
// >
//   <source src="/ai2.mp4" type="video/mp4" />
//   <p className="text-gray-400">Your browser does not support the video tag.</p>
// </video>

                  
//                   {/* Custom play/pause overlay (optional) */}
//                   <div 
//                     className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer bg-black/20"
//                     onClick={togglePlayPause}
//                   >
//                     <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       {isPlaying ? (
//                         <Pause className="text-white text-2xl" />
//                       ) : (
//                         <Play className="text-white text-2xl ml-1" />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Tools Grid Section */}
//         <div className="mb-16">
//           <h3 className="text-xl font-bold text-center mb-8">
//             Our All-In-One Software Replaces the Tools Listed Below And More Helping You Save Money Every Month.
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {tools.map((tool, index) => {
//               const IconComponent = tool.icon;
//               return (
//                 <div 
//                   key={index} 
//                   className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:bg-gray-900/70 transition-colors duration-200 hover:border-gray-700"
//                 >
//                   <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
//                     <IconComponent className="w-5 h-5" />
//                   </div>
//                   <span className="text-sm font-medium">{tool.name}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllInOne;


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   MessageCircle,
//   Phone,
//   Users,
//   Globe,
//   MailOpen,
//   CheckSquare,
//   MessageSquare,
//   Plus,
//   Play,
//   Pause
// } from 'lucide-react';

// const AllInOne = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef(null);

//   // Auto play video when component mounts
//   useEffect(() => {
//     setShowVideo(true);
//     setIsPlaying(true);
//   }, []);

//   // Handle video play/pause when isPlaying state changes
//   useEffect(() => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.play().catch(error => {
//           console.error("Autoplay was prevented:", error);
//           // Handle autoplay restrictions here if needed
//         });
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying, showVideo]);

//   const tools = [
//     { icon: MessageCircle, name: "Intercom", color: "blue" },
//     { icon: Phone, name: "Aircall", color: "green" },
//     { icon: Users, name: "HubSpot", color: "red" },
//     { icon: Globe, name: "Webflow", color: "purple" },
//     { icon: MailOpen, name: "Mailchimp", color: "yellow" },
//     { icon: MessageSquare, name: "Twilio", color: "pink" },
//     { icon: CheckSquare, name: "Zapier", color: "indigo" },
//     { icon: MessageCircle, name: "ManyChat", color: "blue" },
//     { icon: MessageSquare, name: "WhatsApp Business", color: "green" },
//     { icon: Plus, name: "And more...", color: "gray" }
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

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
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
//               {!showVideo ? (
//                 <div className="bg-gradient-to-r from-gray-800 to-gray-900 h-80 flex items-center justify-center rounded-xl">
//                   <div className="text-center">
//                     <div 
//                       className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-colors cursor-pointer transform hover:scale-110"
//                       onClick={() => setShowVideo(true)}
//                     >
//                       <Play className="text-blue-400 text-2xl ml-1" />
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">Demo Video</h3>
//                     <p className="text-gray-400 text-sm">See our platform in action</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="relative h-100 rounded-xl overflow-hidden">
//                   <video
//                     ref={videoRef}
//                     id="demo-video"
//                     className="w-full h-full object-cover"
//                     controls
//                     muted // Important for autoplay in many browsers
//                     autoPlay
//                     playsInline // Important for iOS
//                     onPlay={() => setIsPlaying(true)}
//                     onPause={() => setIsPlaying(false)}
//                     onEnded={() => setIsPlaying(false)}
//                   >
//                     <source src="/ai2.mp4" type="video/mp4" />
//                     <p className="text-gray-400">Your browser does not support the video tag.</p>
//                   </video>
                  
//                   {/* Custom play/pause overlay (optional) */}
//                   <div 
//                     className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer bg-black/20"
//                     onClick={togglePlayPause}
//                   >
//                     <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       {isPlaying ? (
//                         <Pause className="text-white text-2xl" />
//                       ) : (
//                         <Play className="text-white text-2xl ml-1" />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Tools Grid Section */}
//         <div className="mb-16">
//           <h3 className="text-xl font-bold text-center mb-8">
//             Our All-In-One Software Replaces the Tools Listed Below And More Helping You Save Money Every Month.
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {tools.map((tool, index) => {
//               const IconComponent = tool.icon;
//               return (
//                 <div 
//                   key={index} 
//                   className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:bg-gray-900/70 transition-colors duration-200 hover:border-gray-700"
//                 >
//                   <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
//                     <IconComponent className="w-5 h-5" />
//                   </div>
//                   <span className="text-sm font-medium">{tool.name}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllInOne;




// import React, { useState, useEffect, useRef } from 'react';
// import {
//   MessageCircle,
//   Phone,
//   Users,
//   Globe,
//   MailOpen,
//   CheckSquare,
//   MessageSquare,
//   Plus,
//   Play,
//   Pause
// } from 'lucide-react';

// const AllInOne = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef(null);

//   // Auto play video when component mounts
//   useEffect(() => {
//     setShowVideo(true);
//     setIsPlaying(true);
//   }, []);

//   // Handle video play/pause when isPlaying state changes
//   useEffect(() => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.play().catch(error => {
//           console.error("Autoplay was prevented:", error);
//           // Handle autoplay restrictions here if needed
//         });
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying, showVideo]);

//   const tools = [
//     { icon: MessageCircle, name: "Intercom", color: "blue" },
//     { icon: Phone, name: "Aircall", color: "green" },
//     { icon: Users, name: "HubSpot", color: "red" },
//     { icon: Globe, name: "Webflow", color: "purple" },
//     { icon: MailOpen, name: "Mailchimp", color: "yellow" },
//     { icon: MessageSquare, name: "Twilio", color: "pink" },
//     { icon: CheckSquare, name: "Zapier", color: "indigo" },
//     { icon: MessageCircle, name: "ManyChat", color: "blue" },
//     { icon: MessageSquare, name: "WhatsApp Business", color: "green" },
//     { icon: Plus, name: "And more...", color: "gray" }
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

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <section id="Demo"  className="py-20 bg-gradient-to-b from-black to-gray-900/50 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             <span style={{ color: '#FED700' }}>
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
//           <div 
//             className="absolute -top-32 -right-32 w-64 h-64 rounded-full filter blur-3xl"
//             style={{ backgroundColor: 'rgba(254, 215, 0, 0.1)' }}
//           ></div>
//           <div 
//             className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full filter blur-3xl"
//             style={{ backgroundColor: 'rgba(254, 215, 0, 0.1)' }}
//           ></div>
          
//           <div className="relative z-10">
//             <div 
//               className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
//               style={{ boxShadow: '0 25px 50px -12px rgba(254, 215, 0, 0.2)' }}
//             >
//               {!showVideo ? (
//                 <div 
//                   className="h-80 flex items-center justify-center rounded-xl"
//                   style={{ background: 'linear-gradient(to right, #1f2937, #111827)' }}
//                 >
//                   <div className="text-center">
//                     <div 
//                       className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-colors cursor-pointer transform hover:scale-110"
//                       style={{ backgroundColor: 'rgba(254, 215, 0, 0.2)' }}
//                       onClick={() => setShowVideo(true)}
//                     >
//                       <Play className="text-2xl ml-1" style={{ color: '#FED700' }} />
//                     </div>
//                     <h3 className="text-xl font-bold mb-2">Demo Video</h3>
//                     <p className="text-gray-400 text-sm">See our platform in action</p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="relative h-100 rounded-xl overflow-hidden">
//                   <video
//                     ref={videoRef}
//                     id="demo-video"
//                     className="w-full h-full object-cover"
//                     controls
//                     muted // Important for autoplay in many browsers
//                     autoPlay
//                     playsInline // Important for iOS
//                     onPlay={() => setIsPlaying(true)}
//                     onPause={() => setIsPlaying(false)}
//                     onEnded={() => setIsPlaying(false)}
//                   >
//                     <source src="/ai2.mp4" type="video/mp4" />
//                     <p className="text-gray-400">Your browser does not support the video tag.</p>
//                   </video>
                  
//                   {/* Custom play/pause overlay (optional) */}
//                   <div 
//                     className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer bg-black/20"
//                     onClick={togglePlayPause}
//                   >
//                     <div 
//                       className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
//                       style={{ backgroundColor: 'rgba(254, 215, 0, 0.2)' }}
//                     >
//                       {isPlaying ? (
//                         <Pause className="text-white text-2xl" />
//                       ) : (
//                         <Play className="text-white text-2xl ml-1" />
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Tools Grid Section */}
//         <div className="mb-16">
//           <h3 className="text-xl font-bold text-center mb-8">
//             Our All-In-One Software Replaces the Tools Listed Below And More Helping You Save Money Every Month.
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {tools.map((tool, index) => {
//               const IconComponent = tool.icon;
//               return (
//                 <div 
//                   key={index} 
//                   className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:bg-gray-900/70 transition-colors duration-200 hover:border-gray-700"
//                 >
//                   <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-3`}>
//                     <IconComponent className="w-5 h-5" />
//                   </div>
//                   <span className="text-sm font-medium">{tool.name}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllInOne;



import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  Phone,
  Users,
  Globe,
  Mail,
  CheckSquare,
  MessageSquare,
  Plus,
  Play,
  Pause,
  Zap,
  Bot
} from 'lucide-react';

const AllInOne = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // Auto play video when component mounts
  useEffect(() => {
    setShowVideo(true);
    setIsPlaying(true);
  }, []);

  // Handle video play/pause when isPlaying state changes
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(error => {
          console.error("Autoplay was prevented:", error);
          // Handle autoplay restrictions here if needed
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, showVideo]);

  // Custom SVG Icons for better brand representation
  const IntercomIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );

  const HubSpotIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.5 8.5c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5S11.5 4 14 4s4.5 2 4.5 4.5zM12 14c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z"/>
      <circle cx="7" cy="7" r="2"/>
    </svg>
  );

  const WebflowIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  const MailchimpIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  const TwilioIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <circle cx="8" cy="8" r="2"/>
      <circle cx="16" cy="8" r="2"/>
      <circle cx="8" cy="16" r="2"/>
      <circle cx="16" cy="16" r="2"/>
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
    </svg>
  );

  const ManyChatIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  );

  const AircallIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  const tools = [
    { icon: IntercomIcon, name: "Intercom", color: "blue" },
    { icon: AircallIcon, name: "Aircall", color: "green" },
    { icon: HubSpotIcon, name: "HubSpot", color: "red" },
    { icon: WebflowIcon, name: "Webflow", color: "purple" },
    { icon: MailchimpIcon, name: "Mailchimp", color: "yellow" },
    { icon: TwilioIcon, name: "Twilio", color: "pink" },
    { icon: CheckSquare, name: "Zapier", color: "indigo" },
    { icon: ManyChatIcon, name: "ManyChat", color: "blue" },
    { icon: WhatsAppIcon, name: "WhatsApp Business", color: "green" },
    { icon: Plus, name: "And more...", color: "gray" }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-900/20 text-blue-400 border-blue-500/30',
      green: 'bg-green-900/20 text-green-400 border-green-500/30',
      red: 'bg-red-900/20 text-red-400 border-red-500/30',
      purple: 'bg-purple-900/20 text-purple-400 border-purple-500/30',
      yellow: 'bg-yellow-900/20 text-yellow-400 border-yellow-500/30',
      pink: 'bg-pink-900/20 text-pink-400 border-pink-500/30',
      indigo: 'bg-indigo-900/20 text-indigo-400 border-indigo-500/30',
      gray: 'bg-gray-600/20 text-gray-400 border-gray-500/30'
    };
    return colorMap[color] || colorMap.blue;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="Demo" className="py-20 bg-gradient-to-b from-black to-gray-900/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span style={{ color: '#FED700' }}>
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
          <div 
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full filter blur-3xl"
            style={{ backgroundColor: 'rgba(254, 215, 0, 0.1)' }}
          ></div>
          <div 
            className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full filter blur-3xl"
            style={{ backgroundColor: 'rgba(254, 215, 0, 0.1)' }}
          ></div>
          
          <div className="relative z-10">
            <div 
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 25px 50px -12px rgba(254, 215, 0, 0.2)' }}
            >
              {!showVideo ? (
                <div 
                  className="h-80 flex items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(to right, #1f2937, #111827)' }}
                >
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600/30 transition-colors cursor-pointer transform hover:scale-110"
                      style={{ backgroundColor: 'rgba(254, 215, 0, 0.2)' }}
                      onClick={() => setShowVideo(true)}
                    >
                      <Play className="text-2xl ml-1" style={{ color: '#FED700' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Demo Video</h3>
                    <p className="text-gray-400 text-sm">See our platform in action</p>
                  </div>
                </div>
              ) : (
                <div className="relative h-100 rounded-xl overflow-hidden">
                  <video
                    ref={videoRef}
                    id="demo-video"
                    className="w-full h-full object-cover"
                    controls
                    muted
                    autoPlay
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  >
                    <source src="/ai2.mp4" type="video/mp4" />
                    <p className="text-gray-400">Your browser does not support the video tag.</p>
                  </video>
                  
                  {/* Custom play/pause overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer bg-black/20"
                    onClick={togglePlayPause}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(254, 215, 0, 0.2)' }}
                    >
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
                  className="group p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-700 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 ${getColorClasses(tool.color)} rounded-full flex items-center justify-center mx-auto mb-3 border group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent />
                  </div>
                  <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">{tool.name}</span>
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