// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRobot, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

// const Hero = () => {
//   return (
//     <section className="pt-32 pb-20 bg-grid">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
//           <div className="animate__animated animate__fadeInLeft">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Increase Your <span className="gradient-text">Sales And Productivity</span> By Using Our All-In-One AI Software
//             </h1>
//             <p className="text-lg text-gray-400 mb-8 max-w-lg">
//               Revolutionize your business with our cutting-edge AI solutions that handle customer interactions, streamline operations, and boost revenue 24/7.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition transform hover:scale-105 pulse">
//                 Try Now For Free
//               </a>
//               <a href="#features" className="px-8 py-3 border border-blue-600 hover:bg-blue-600/20 rounded-lg font-bold transition transform hover:scale-105">
//                 Explore Features
//               </a>
//             </div>
//             <div className="mt-6 flex items-center text-sm text-gray-500">
//               <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 mr-1 text-green-500" />
//               No Obligations • Cancel Anytime
//             </div>
//           </div>
//           <div className="mt-12 lg:mt-0 animate__animated animate__fadeInRight">
//             <div className="relative">
//               <div className="absolute -top-6 -left-6 w-full h-full border-2 border-blue-500 rounded-2xl z-0 animate-pulse"></div>
//               <div className="relative z-10 overflow-hidden rounded-2xl glow">
//                 <img 
//                   src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop" 
//                   alt="AI Dashboard" 
//                   className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
//                 />
//               </div>
//               <div className="absolute -bottom-28 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl shadow-xl animate-bounce-slow">
//                 <div className="flex items-center">
//                   <div className="mr-3">
//                     <FontAwesomeIcon icon={faRobot} className="text-3xl" />
//                   </div>
//                   <div>
//                     <div className="text-xs text-white/80">AI ASSISTANT ONLINE</div>
//                     <div className="font-bold text-white">Ready to help!</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-black-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Increase Your <span className="text-yellow-400">Sales And Productivity</span> By Using Our All-In-One AI Software
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Revolutionize your business with our cutting-edge AI solutions that handle customer interactions, streamline operations, and boost revenue 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold text-gray-900 transition transform hover:scale-105 shadow-lg">
                Try Now For Free
              </a>
              <a href="#features" className="px-8 py-3 border-2 border-yellow-500 hover:bg-yellow-500/10 rounded-lg font-bold text-yellow-400 hover:text-yellow-300 transition transform hover:scale-105">
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex items-center text-sm text-gray-400">
              <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 mr-1 text-green-400" />
              No Obligations • Cancel Anytime
            </div>
          </div>
          <div className="mt-12 lg:mt-0 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-yellow-500/40 rounded-2xl z-0 animate-pulse"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl glow-yellow ">
                <img 
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop"
                  alt="AI Dashboard"
                  className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-28 -right-6 bg-yellow-500 p-4 rounded-xl shadow-xl animate-bounce-slow border border-yellow-400">
                <div className="flex items-center">
                  <div className="mr-3">
                    <FontAwesomeIcon icon={faRobot} className="text-3xl text-gray-900" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-800 font-medium">AI ASSISTANT ONLINE</div>
                    <div className="font-bold text-gray-900">Ready to help!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;