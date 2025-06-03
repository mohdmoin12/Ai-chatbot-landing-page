// const Stats = () => {
//   const stats = [
//     { value: "60,000+", label: "CUSTOMERS" },
//     { value: "1.4m+", label: "BUSINESSES" },
//     { value: "622M+", label: "LEADS" },
//     { value: "14.7B+", label: "CONVERSATIONS" }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800">
//       {/* Content similar to original HTML */}
//     </section>
//   );
// };

// export default Stats;


// import React from 'react';

// const Stats = () => {
//   const stats = [
//     { value: "60,000+", label: "CUSTOMERS" },
//     { value: "1.4m+", label: "BUSINESSES" },
//     { value: "622M+", label: "LEADS" },
//     { value: "14.7B+", label: "CONVERSATIONS" }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               You Will Get
//             </span>{" "}
//             Proven Technology
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Trusted by businesses worldwide to handle their customer interactions and drive growth.
//           </p>
//         </div>
       
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
//                 {stat.value}
//               </div>
//               <div className="text-gray-400">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;



// import React, { useState, useEffect, useRef } from 'react';

// const Stats = () => {
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const [counters, setCounters] = useState([0, 0, 0, 0]);
//   const sectionRef = useRef(null);

//   const stats = [
//     { value: 60000, suffix: "+", label: "CUSTOMERS" },
//     { value: 1400000, suffix: "+", label: "BUSINESSES", display: "1.4m+" },
//     { value: 622000000, suffix: "+", label: "LEADS", display: "622M+" },
//     { value: 14700000000, suffix: "+", label: "CONVERSATIONS", display: "14.7B+" }
//   ];

//   const formatNumber = (num, index) => {
//     const stat = stats[index];
    
//     if (index === 1) { // Businesses - 1.4m+
//       return (num / 1000000).toFixed(1) + 'm+';
//     } else if (index === 2) { // Leads - 622M+
//       return Math.round(num / 1000000) + 'M+';
//     } else if (index === 3) { // Conversations - 14.7B+
//       return (num / 1000000000).toFixed(1) + 'B+';
//     } else { // Customers - 60,000+
//       return num.toLocaleString() + '+';
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
          
//           // Animate each counter
//           stats.forEach((stat, index) => {
//             let currentValue = 0;
//             const increment = stat.value / 100; // 100 steps for animation
//             const duration = 2000; // 2 seconds
//             const stepTime = duration / 100;
            
//             const timer = setInterval(() => {
//               currentValue += increment;
//               if (currentValue >= stat.value) {
//                 currentValue = stat.value;
//                 clearInterval(timer);
//               }
              
//               setCounters(prev => {
//                 const newCounters = [...prev];
//                 newCounters[index] = Math.floor(currentValue);
//                 return newCounters;
//               });
//             }, stepTime);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, [hasAnimated]);

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-20 bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               You Will Get
//             </span>{" "}
//             Proven Technology
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Trusted by businesses worldwide to handle their customer interactions and drive growth.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center group">
//               <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 transition-transform duration-300 group-hover:scale-110">
//                 {hasAnimated ? formatNumber(counters[index], index) : '0+'}
//               </div>
//               <div className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;



import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { value: 60000, suffix: "+", label: "CUSTOMERS" },
    { value: 1400000, suffix: "+", label: "BUSINESSES", display: "1.4m+" },
    { value: 622000000, suffix: "+", label: "LEADS", display: "622M+" },
    { value: 14700000000, suffix: "+", label: "CONVERSATIONS", display: "14.7B+" }
  ];

  const formatNumber = (num, index) => {
    
    if (index === 1) { // Businesses - 1.4m+
      return (num / 1000000).toFixed(1) + 'm+';
    } else if (index === 2) { // Leads - 622M+
      return Math.round(num / 1000000) + 'M+';
    } else if (index === 3) { // Conversations - 14.7B+
      return (num / 1000000000).toFixed(1) + 'B+';
    } else { // Customers - 60,000+
      return num.toLocaleString() + '+';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate each counter
          stats.forEach((stat, index) => {
            let currentValue = 0;
            const increment = stat.value / 100; // 100 steps for animation
            const duration = 2000; // 2 seconds
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
              currentValue += increment;
              if (currentValue >= stat.value) {
                currentValue = stat.value;
                clearInterval(timer);
              }
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(currentValue);
                return newCounters;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900/50 to-black border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span style={{ color: '#FED700' }}>
              You Will Get
            </span>{" "}
            Proven Technology
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Trusted by businesses worldwide to handle their customer interactions and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div 
                className="text-4xl md:text-5xl font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ color: '#FED700' }}
              >
                {hasAnimated ? formatNumber(counters[index], index) : '0+'}
              </div>
              <div className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;