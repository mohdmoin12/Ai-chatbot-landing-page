// import { 
//   faPhoneVolume,
//   faClock,
//   faRandom,
//   faInfoCircle,
//   faEnvelope,
//   faProjectDiagram,
//   faSlidersH,
//   faBrain
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const FeaturesGrid = () => {
//   const features = [
//     { icon: faPhoneVolume, title: "Conversational Phone Calls", description: "Live voice conversations with all your inbound calls in natural, human-like tone.", color: "blue" },
//     { icon: faClock, title: "Custom Working Hours", description: "Your business phone rings first, and AI takes over only if no one answers.", color: "purple" },
//     // Add other features...
//   ];

//   return (
//     <section className="py-20 bg-black">
//       {/* Content similar to original HTML */}
//     </section>
//   );
// };

// export default FeaturesGrid;


// import React from 'react';
// import { 
//   Phone, 
//   Clock, 
//   Shuffle, 
//   Info, 
//   Mail, 
//   GitBranch, 
//   Sliders, 
//   Brain 
// } from 'lucide-react';

// const FeaturesGrid = () => {
//   const features = [
//     {
//       icon: Phone,
//       title: "Conversational Phone Calls",
//       description: "Live voice conversations with all your inbound calls in natural, human-like tone.",
//       color: "blue"
//     },
//     {
//       icon: Clock,
//       title: "Custom Working Hours",
//       description: "Your business phone rings first, and AI takes over only if no one answers.",
//       color: "purple"
//     },
//     {
//       icon: Shuffle,
//       title: "Route Inbound Calls",
//       description: "Forward calls to particular team members under certain conditions.",
//       color: "pink"
//     },
//     {
//       icon: Info,
//       title: "Gather Information",
//       description: "From contact information to custom fields, capture all the most important lead info.",
//       color: "green"
//     },
//     {
//       icon: Mail,
//       title: "Email Summary",
//       description: "Get a notification with a summary and recording of each call your employee handles.",
//       color: "yellow"
//     },
//     {
//       icon: GitBranch,
//       title: "Workflow Activation",
//       description: "After hanging up, automatically follow-up with new leads to maximise conversion.",
//       color: "red"
//     },
//     {
//       icon: Sliders,
//       title: "Tone Customization",
//       description: "Personalize your employee to represent the unique culture of your business.",
//       color: "indigo"
//     },
//     {
//       icon: Brain,
//       title: "Simple & Effective Prompting",
//       description: "Give your employee a goal and let it go to work, without all the training headaches.",
//       color: "blue"
//     }
//   ];

//   const getColorClasses = (color) => {
//     const colorMap = {
//       blue: "bg-blue-900/20 text-blue-400",
//       purple: "bg-purple-900/20 text-purple-400",
//       pink: "bg-pink-900/20 text-pink-400",
//       green: "bg-green-900/20 text-green-400",
//       yellow: "bg-yellow-900/20 text-yellow-400",
//       red: "bg-red-900/20 text-red-400",
//       indigo: "bg-indigo-900/20 text-indigo-400"
//     };
//     return colorMap[color] || colorMap.blue;
//   };

//   return (
//     <section className="py-20 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               All the features you need
//             </span>{" "}
//             in one place
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Our comprehensive solution provides everything you need to automate your customer interactions and grow your business.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => {
//             const IconComponent = feature.icon;
//             return (
//               <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
//                 <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-4`}>
//                   <IconComponent className="w-5 h-5" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </div>
//             );
//           })}

//           {/* CTA Card */}
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-blue-900/20 relative overflow-hidden hover:border-gray-700 transition-colors">
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl"></div>
//             <div className="relative z-10">
//               <h3 className="text-xl font-bold mb-3">Ready to automate your business?</h3>
//               <p className="text-gray-400 mb-6">
//                 WANT TO SEE A DEMO OF AI VOICE AGENT?
//               </p>
//               <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition transform hover:scale-105">
//                 Try It Yourself For Free!
//               </button>
//               <div className="mt-2 text-xs text-gray-500">
//                 No Credit Card Required | No Contract
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesGrid;




import React from 'react';
import { 
  Phone, 
  Clock, 
  Shuffle, 
  Info, 
  Mail, 
  GitBranch, 
  Sliders, 
  Brain 
} from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Phone,
      title: "Conversational Phone Calls",
      description: "Live voice conversations with all your inbound calls in natural, human-like tone.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Custom Working Hours",
      description: "Your business phone rings first, and AI takes over only if no one answers.",
      color: "purple"
    },
    {
      icon: Shuffle,
      title: "Route Inbound Calls",
      description: "Forward calls to particular team members under certain conditions.",
      color: "pink"
    },
    {
      icon: Info,
      title: "Gather Information",
      description: "From contact information to custom fields, capture all the most important lead info.",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Summary",
      description: "Get a notification with a summary and recording of each call your employee handles.",
      color: "yellow"
    },
    {
      icon: GitBranch,
      title: "Workflow Activation",
      description: "After hanging up, automatically follow-up with new leads to maximise conversion.",
      color: "red"
    },
    {
      icon: Sliders,
      title: "Tone Customization",
      description: "Personalize your employee to represent the unique culture of your business.",
      color: "indigo"
    },
    {
      icon: Brain,
      title: "Simple & Effective Prompting",
      description: "Give your employee a goal and let it go to work, without all the training headaches.",
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-900/20 text-blue-400",
      purple: "bg-purple-900/20 text-purple-400",
      pink: "bg-pink-900/20 text-pink-400",
      green: "bg-green-900/20 text-green-400",
      yellow: "bg-yellow-900/20 text-yellow-400",
      red: "bg-red-900/20 text-red-400",
      indigo: "bg-indigo-900/20 text-indigo-400"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span style={{ color: '#FED700' }}>
              All the features you need
            </span>{" "}
            in one place
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our comprehensive solution provides everything you need to automate your customer interactions and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className={`w-12 h-12 ${getColorClasses(feature.color)} rounded-lg flex items-center justify-center mb-4`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-blue-900/20 relative overflow-hidden hover:border-gray-700 transition-colors">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full filter blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">Ready to automate your business?</h3>
              <p className="text-gray-400 mb-6">
                WANT TO SEE A DEMO OF AI VOICE AGENT?
              </p>
              <button className="inline-flex items-center px-6 py-3" style={{ backgroundColor: '#FED700', color: 'black' }}>
                Try It Yourself For Free!
              </button>
              <div className="mt-2 text-xs text-gray-500">
                No Credit Card Required | No Contract
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;