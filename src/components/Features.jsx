// import { useInView } from 'react-intersection-observer';
// import { 
//   faCommentDots, 
//   faUsers, 
//   faPhoneAlt, 
//   faRobot, 
//   faGlobe, 
//   faInbox,
//   faBolt,
//   faInfinity,
//   faClock,
//   faProjectDiagram,
//   faSyncAlt,
//   faArrowRight
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const FeatureCard = ({ icon, title, description, color, details }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   return (
//     <div 
//       ref={ref}
//       className={`feature-card bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transition duration-300 transform ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
//     >
//       <div className={`w-14 h-14 rounded-lg bg-${color}-900/30 flex items-center justify-center mb-4`}>
//         <FontAwesomeIcon icon={icon} className={`text-${color}-400 text-2xl`} />
//       </div>
//       <h3 className="text-xl font-bold mb-3">{title}</h3>
//       <p className="text-gray-400 mb-4">{description}</p>
//       <div className={`inline-block px-3 py-1 bg-${color}-900/30 text-${color}-400 rounded-full text-sm font-medium`}>
//         Learn more →
//       </div>
//       <div className="mt-4 pt-4 border-t border-gray-700/50 flex items-center text-sm text-gray-500">
//         <FontAwesomeIcon icon={details.icon} className={`mr-2 text-${color}-400`} />
//         {details.text}
//       </div>
//     </div>
//   );
// };

// const Features = () => {
//   const features = [
//     {
//       icon: faCommentDots,
//       title: "AI Chatbot",
//       description: "Two way AI chatbot that can be installed on your website to answer questions quickly and accurately.",
//       color: "blue",
//       details: { icon: faBolt, text: "Instant response time under 1s" }
//     },
//     {
//       icon: faUsers,
//       title: "CRM",
//       description: "Manage unlimited contact and customer information to enhance relationships and sales efforts.",
//       color: "purple",
//       details: { icon: faInfinity, text: "Unlimited contacts & custom fields" }
//     },
//     {
//       icon: faPhoneAlt,
//       title: "AI Phone Agent",
//       description: "Phone agent will answer the calls and respond to FAQs, take notes or transfer calls so you never miss a call again.",
//       color: "pink",
//       details: { icon: faClock, text: "24/7 availability" }
//     },
//     {
//       icon: faRobot,
//       title: "Automation",
//       description: "Create automations based on your requirements, from first response to invoicing.",
//       color: "green",
//       details: { icon: faProjectDiagram, text: "Drag & drop workflow builder" }
//     },
//     {
//       icon: faGlobe,
//       title: "Website & Funnels",
//       description: "Create unlimited websites and funnels using our templates. You won't have to pay extra for hosting ever again.",
//       color: "indigo",
//       details: { icon: faProjectDiagram, text: "100+ customizable templates" }
//     },
//     {
//       icon: faInbox,
//       title: "One Inbox",
//       description: "All your conversations from SMS, Emails, Instagram, WhatsApp can be viewed in one Inbox.",
//       color: "yellow",
//       details: { icon: faSyncAlt, text: "Real-time synchronization" }
//     }
//   ];

//   return (
//     <section id="features" className="py-20 bg-gray-900/50 tech-pattern">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             <span className="gradient-text">Powerful Features</span> To Transform Your Business
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Our all-in-one platform provides everything you need to automate, optimize, and scale your business operations.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <FeatureCard 
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//               color={feature.color}
//               details={feature.details}
//             />
//           ))}
//         </div>
        
//         <div className="mt-16 text-center">
//           <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:shadow-xl transition-all transform hover:scale-105 hover:from-blue-700 hover:to-purple-700">
//             <span>Try Our All-In-One Software For Free</span>
//             <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
//           </a>
//           <div className="mt-4 text-sm text-gray-500">
//             No Obligations • Cancel Anytime
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


import { useInView } from 'react-intersection-observer';
import { 
  faCommentDots, 
  faUsers, 
  faPhoneAlt, 
  faRobot, 
  faGlobe, 
  faInbox,
  faBolt,
  faInfinity,
  faClock,
  faProjectDiagram,
  faSyncAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureCard = ({ icon, title, description, color, details }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      ref={ref}
      className={`feature-card bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 transition duration-300 transform ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
    >
      <div className={`w-14 h-14 rounded-lg bg-${color}-900/30 flex items-center justify-center mb-4`}>
        <FontAwesomeIcon icon={icon} className={`text-${color}-400 text-2xl`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className={`inline-block px-3 py-1 bg-${color}-900/30 text-${color}-400 rounded-full text-sm font-medium`}>
        Learn more →
      </div>
      <div className="mt-4 pt-4 border-t border-gray-700/50 flex items-center text-sm text-gray-500">
        <FontAwesomeIcon icon={details.icon} className={`mr-2 text-${color}-400`} />
        {details.text}
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: faCommentDots,
      title: "AI Chatbot",
      description: "Two way AI chatbot that can be installed on your website to answer questions quickly and accurately.",
      color: "blue",
      details: { icon: faBolt, text: "Instant response time under 1s" }
    },
    {
      icon: faUsers,
      title: "CRM",
      description: "Manage unlimited contact and customer information to enhance relationships and sales efforts.",
      color: "purple",
      details: { icon: faInfinity, text: "Unlimited contacts & custom fields" }
    },
    {
      icon: faPhoneAlt,
      title: "AI Phone Agent",
      description: "Phone agent will answer the calls and respond to FAQs, take notes or transfer calls so you never miss a call again.",
      color: "pink",
      details: { icon: faClock, text: "24/7 availability" }
    },
    {
      icon: faRobot,
      title: "Automation",
      description: "Create automations based on your requirements, from first response to invoicing.",
      color: "green",
      details: { icon: faProjectDiagram, text: "Drag & drop workflow builder" }
    },
    {
      icon: faGlobe,
      title: "Website & Funnels",
      description: "Create unlimited websites and funnels using our templates. You won't have to pay extra for hosting ever again.",
      color: "indigo",
      details: { icon: faProjectDiagram, text: "100+ customizable templates" }
    },
    {
      icon: faInbox,
      title: "One Inbox",
      description: "All your conversations from SMS, Emails, Instagram, WhatsApp can be viewed in one Inbox.",
      color: "yellow",
      details: { icon: faSyncAlt, text: "Real-time synchronization" }
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900/50 tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span style={{ color: '#FED700' }}>Powerful Features</span> To Transform Your Business
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Our all-in-one platform provides everything you need to automate, optimize, and scale your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              details={feature.details}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-black hover:shadow-xl transition-all transform hover:scale-105"
            style={{
              background: '#FED700',
              ':hover': {
                background: '#E6C200'
              }
            }}
            onMouseEnter={(e) => e.target.style.background = '#E6C200'}
            onMouseLeave={(e) => e.target.style.background = '#FED700'}
          >
            <span>Try Our All-In-One Software For Free</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
          <div className="mt-4 text-sm text-gray-500">
            No Obligations • Cancel Anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;