// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { 
//   Hand, 
//   Music, 
//   MessageCircle, 
//   RotateCcw, 
//   Brain, 
//   Languages, 
//   Zap,
//   AlertTriangle 
// } from 'lucide-react';

// const Robot3DSection = () => {
//   const canvasRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const robotRef = useRef(null);
//   const mixerRef = useRef(null);
//   const clockRef = useRef(null);
//   const cameraRef = useRef(null);
//   const controlsRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             initRobot();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (canvasRef.current) {
//       observer.observe(canvasRef.current.parentElement);
//     }

//     return () => {
//       if (canvasRef.current?.parentElement) {
//         observer.unobserve(canvasRef.current.parentElement);
//       }
//       // Cleanup Three.js resources
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//     };
//   }, []);

//   const initRobot = () => {
//     if (!canvasRef.current) return;

//     // Create scene
//     const scene = new THREE.Scene();
//     scene.background = null;
//     sceneRef.current = scene;

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       canvasRef.current.offsetWidth / canvasRef.current.offsetHeight,
//       0.1,
//       1000
//     );
//     camera.position.set(0, 1.5, 3);
//     cameraRef.current = camera;

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     canvasRef.current.appendChild(renderer.domElement);
//     rendererRef.current = renderer;

//     // Add lights
//     const ambientLight = new THREE.AmbientLight(0x404040);
//     scene.add(ambientLight);

//     const directionalLight1 = new THREE.DirectionalLight(0x0099ff, 0.8);
//     directionalLight1.position.set(1, 1, 1);
//     scene.add(directionalLight1);

//     const directionalLight2 = new THREE.DirectionalLight(0xff9900, 0.6);
//     directionalLight2.position.set(-1, -1, -1);
//     scene.add(directionalLight2);

//     const hemisphereLight = new THREE.HemisphereLight(0x0099ff, 0xff6600, 0.6);
//     scene.add(hemisphereLight);

//     // Add orbit controls (simplified version)
//     let isDragging = false;
//     let previousMousePosition = { x: 0, y: 0 };

//     const handleMouseDown = (event) => {
//       isDragging = true;
//       previousMousePosition = { x: event.clientX, y: event.clientY };
//     };

//     const handleMouseMove = (event) => {
//       if (!isDragging) return;
      
//       const deltaMove = {
//         x: event.clientX - previousMousePosition.x,
//         y: event.clientY - previousMousePosition.y
//       };

//       const rotationSpeed = 0.005;
//       camera.position.x = camera.position.x * Math.cos(deltaMove.x * rotationSpeed) - camera.position.z * Math.sin(deltaMove.x * rotationSpeed);
//       camera.position.z = camera.position.x * Math.sin(deltaMove.x * rotationSpeed) + camera.position.z * Math.cos(deltaMove.x * rotationSpeed);
      
//       camera.lookAt(0, 0, 0);
//       previousMousePosition = { x: event.clientX, y: event.clientY };
//     };

//     const handleMouseUp = () => {
//       isDragging = false;
//     };

//     renderer.domElement.addEventListener('mousedown', handleMouseDown);
//     renderer.domElement.addEventListener('mousemove', handleMouseMove);
//     renderer.domElement.addEventListener('mouseup', handleMouseUp);

//     // Create a simple robot geometry (since we can't load GLTF easily)
//     const createSimpleRobot = () => {
//       const robotGroup = new THREE.Group();

//       // Body
//       const bodyGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.4);
//       const bodyMaterial = new THREE.MeshPhongMaterial({ 
//         color: 0x4a90e2,
//         shininess: 100
//       });
//       const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
//       body.position.y = 0.5;
//       robotGroup.add(body);

//       // Head
//       const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
//       const headMaterial = new THREE.MeshPhongMaterial({ 
//         color: 0x5ba3f5,
//         shininess: 100
//       });
//       const head = new THREE.Mesh(headGeometry, headMaterial);
//       head.position.y = 1.5;
//       robotGroup.add(head);

//       // Eyes
//       const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
//       const eyeMaterial = new THREE.MeshPhongMaterial({ 
//         color: 0x00ff00,
//         emissive: 0x004400
//       });
      
//       const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
//       leftEye.position.set(-0.15, 1.6, 0.25);
//       robotGroup.add(leftEye);

//       const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
//       rightEye.position.set(0.15, 1.6, 0.25);
//       robotGroup.add(rightEye);

//       // Arms
//       const armGeometry = new THREE.BoxGeometry(0.2, 0.8, 0.2);
//       const armMaterial = new THREE.MeshPhongMaterial({ color: 0x3a7bc8 });
      
//       const leftArm = new THREE.Mesh(armGeometry, armMaterial);
//       leftArm.position.set(-0.6, 0.3, 0);
//       robotGroup.add(leftArm);

//       const rightArm = new THREE.Mesh(armGeometry, armMaterial);
//       rightArm.position.set(0.6, 0.3, 0);
//       robotGroup.add(rightArm);

//       // Legs
//       const legGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.25);
//       const legMaterial = new THREE.MeshPhongMaterial({ color: 0x2a5aa8 });
      
//       const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
//       leftLeg.position.set(-0.2, -0.5, 0);
//       robotGroup.add(leftLeg);

//       const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
//       rightLeg.position.set(0.2, -0.5, 0);
//       robotGroup.add(rightLeg);

//       robotGroup.scale.set(0.7, 0.7, 0.7);
//       robotGroup.position.y = -1;
      
//       return robotGroup;
//     };

//     const robot = createSimpleRobot();
//     scene.add(robot);
//     robotRef.current = robot;

//     // Initialize animation system
//     const mixer = new THREE.AnimationMixer(robot);
//     mixerRef.current = mixer;
//     clockRef.current = new THREE.Clock();

//     setIsLoading(false);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (mixerRef.current && clockRef.current) {
//         mixerRef.current.update(clockRef.current.getDelta());
//       }

//       // Add subtle rotation to the robot
//       if (robotRef.current) {
//         robotRef.current.rotation.y += 0.005;
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       if (!canvasRef.current || !camera || !renderer) return;
      
//       camera.aspect = canvasRef.current.offsetWidth / canvasRef.current.offsetHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       renderer.domElement.removeEventListener('mousedown', handleMouseDown);
//       renderer.domElement.removeEventListener('mousemove', handleMouseMove);
//       renderer.domElement.removeEventListener('mouseup', handleMouseUp);
//     };
//   };

//   const handleWave = () => {
//     if (!robotRef.current) return;
    
//     // Simple wave animation
//     const tl = { rotation: 0 };
//     const animate = () => {
//       tl.rotation += 0.1;
//       if (robotRef.current && robotRef.current.children[5]) { // Right arm
//         robotRef.current.children[5].rotation.z = Math.sin(tl.rotation) * 0.5;
//       }
//       if (tl.rotation < Math.PI * 4) {
//         requestAnimationFrame(animate);
//       } else {
//         if (robotRef.current && robotRef.current.children[5]) {
//           robotRef.current.children[5].rotation.z = 0;
//         }
//       }
//     };
//     animate();
//   };

//   const handleDance = () => {
//     if (!robotRef.current) return;
    
//     // Simple dance animation
//     let danceTime = 0;
//     const dance = () => {
//       danceTime += 0.1;
//       if (robotRef.current) {
//         robotRef.current.rotation.y += 0.05;
//         robotRef.current.position.y = -1 + Math.sin(danceTime) * 0.1;
//       }
//       if (danceTime < Math.PI * 8) {
//         requestAnimationFrame(dance);
//       } else {
//         if (robotRef.current) {
//           robotRef.current.position.y = -1;
//         }
//       }
//     };
//     dance();
//   };

//   const handleTalk = () => {
//     if (!robotRef.current) return;
    
//     // Simple talk animation (head movement)
//     let talkTime = 0;
//     const talk = () => {
//       talkTime += 0.2;
//       if (robotRef.current && robotRef.current.children[1]) { // Head
//         robotRef.current.children[1].rotation.y = Math.sin(talkTime) * 0.2;
//       }
//       if (talkTime < Math.PI * 6) {
//         requestAnimationFrame(talk);
//       } else {
//         if (robotRef.current && robotRef.current.children[1]) {
//           robotRef.current.children[1].rotation.y = 0;
//         }
//       }
//     };
//     talk();
//   };

//   const handleReset = () => {
//     if (!robotRef.current) return;
    
//     // Reset all animations
//     robotRef.current.rotation.set(0, 0, 0);
//     robotRef.current.position.y = -1;
//     robotRef.current.children.forEach((child, index) => {
//       if (index === 1) child.rotation.y = 0; // Head
//       if (index === 5) child.rotation.z = 0; // Right arm
//     });
//   };

//   return (
//     <section id="robot" className="py-20 bg-black relative overflow-hidden">
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
        
//         .tech-font {
//           font-family: 'Orbitron', sans-serif;
//         }
        
//         .ai-gradient-text {
//           background: linear-gradient(90deg, #00d1ff, #0077ff, #b545ff);
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
        
//         .binary-background {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .binary-background::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-image: linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px);
//           background-size: 20px 20px;
//           opacity: 0.3;
//           pointer-events: none;
//         }
        
//         .circuit-line {
//           position: absolute;
//           background: linear-gradient(90deg, transparent, #3b82f6, transparent);
//           height: 2px;
//           transform-origin: left center;
//           animation: circuitFlow 3s linear infinite;
//           opacity: 0.5;
//         }
        
//         @keyframes circuitFlow {
//           0% {
//             transform: scaleX(0);
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.8;
//           }
//           100% {
//             transform: scaleX(1);
//             opacity: 0;
//           }
//         }
//       `}</style>
      
//       <div className="absolute inset-0 binary-background">
//         {/* Circuit lines effect */}
//         <div className="circuit-line" style={{top: '20%', left: '10%', width: '200px', animationDelay: '0s'}}></div>
//         <div className="circuit-line" style={{top: '40%', left: '30%', width: '150px', animationDelay: '0.5s'}}></div>
//         <div className="circuit-line" style={{top: '60%', left: '20%', width: '250px', animationDelay: '1s'}}></div>
//         <div className="circuit-line" style={{top: '30%', left: '50%', width: '180px', animationDelay: '1.5s'}}></div>
//         <div className="circuit-line" style={{top: '70%', left: '60%', width: '220px', animationDelay: '2s'}}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 tech-font">
//             <span className="ai-gradient-text">MEET YOUR</span> AI ASSISTANT
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Interact with our advanced AI assistant in real-time. Watch as it processes requests and provides intelligent responses.
//           </p>
//         </div>
        
//         <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-black">
//           <div ref={canvasRef} className="w-full h-full"></div>
          
//           {/* Loading indicator */}
//           {isLoading && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//               <div className="text-center">
//                 <div className="inline-block relative">
//                   <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <Brain className="text-blue-400" size={24} />
//                   </div>
//                 </div>
//                 <p className="mt-4 text-blue-400">Initializing AI assistant...</p>
//               </div>
//             </div>
//           )}
          
//           {/* Error indicator */}
//           {error && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//               <div className="text-center">
//                 <AlertTriangle className="text-red-500 text-3xl mb-2 mx-auto" size={48} />
//                 <p className="text-red-400">Failed to load AI assistant</p>
//               </div>
//             </div>
//           )}
          
//           {/* Controls overlay */}
//           {!isLoading && !error && (
//             <div className="absolute bottom-4 left-0 right-0 px-6">
//               <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
//                 <div className="flex items-center space-x-4">
//                   <button 
//                     onClick={handleWave}
//                     className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition"
//                   >
//                     <Hand className="text-blue-300" size={16} />
//                   </button>
//                   <button 
//                     onClick={handleDance}
//                     className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center hover:bg-purple-600/50 transition"
//                   >
//                     <Music className="text-purple-300" size={16} />
//                   </button>
//                   <button 
//                     onClick={handleTalk}
//                     className="w-10 h-10 bg-green-600/30 rounded-lg flex items-center justify-center hover:bg-green-600/50 transition"
//                   >
//                     <MessageCircle className="text-green-300" size={16} />
//                   </button>
//                   <div className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2 text-gray-400 text-sm">
//                     Choose an interaction mode...
//                   </div>
//                   <button 
//                     onClick={handleReset}
//                     className="w-10 h-10 bg-red-600/30 rounded-lg flex items-center justify-center hover:bg-red-600/50 transition"
//                   >
//                     <RotateCcw className="text-red-300" size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-blue-500/30">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
//                 <Brain className="text-blue-400" size={20} />
//               </div>
//               <h3 className="text-lg font-bold tech-font">NEURAL NETWORK</h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Powered by deep learning algorithms that continuously improve through interactions.
//             </p>
//           </div>
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-green-500/30">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
//                 <Languages className="text-green-400" size={20} />
//               </div>
//               <h3 className="text-lg font-bold tech-font">NLP PROCESSING</h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Natural language understanding allows for human-like conversation and comprehension.
//             </p>
//           </div>
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
//                 <Zap className="text-purple-400" size={20} />
//               </div>
//               <h3 className="text-lg font-bold tech-font">REAL-TIME</h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Processes requests and provides responses in milliseconds for seamless interaction.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Robot3DSection;


// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { 
//   Hand, 
//   Music, 
//   MessageCircle, 
//   RotateCcw, 
//   Brain, 
//   Languages, 
//   Zap,
//   AlertTriangle 
// } from 'lucide-react';

// const Robot3DSection = () => {
//   const canvasRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Refs for Three.js objects
//   const sceneRef = useRef(null);
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const robotRef = useRef(null);
//   const mixerRef = useRef(null);
//   const controlsRef = useRef(null);
//   const animationIdRef = useRef(null);

//   useEffect(() => {
//     const initRobot = () => {
//       try {
//         // 1. Create scene
//         const scene = new THREE.Scene();
//         scene.background = null;
//         sceneRef.current = scene;

//         // 2. Create camera
//         const camera = new THREE.PerspectiveCamera(
//           75,
//           canvasRef.current.offsetWidth / canvasRef.current.offsetHeight,
//           0.1,
//           1000
//         );
//         camera.position.set(0, 1.5, 3);
//         cameraRef.current = camera;

//         // 3. Create renderer
//         const renderer = new THREE.WebGLRenderer({ 
//           antialias: true, 
//           alpha: true 
//         });
//         renderer.setSize(
//           canvasRef.current.offsetWidth, 
//           canvasRef.current.offsetHeight
//         );
//         renderer.setPixelRatio(window.devicePixelRatio);
//         canvasRef.current.appendChild(renderer.domElement);
//         rendererRef.current = renderer;

//         // 4. Add lights
//         const ambientLight = new THREE.AmbientLight(0x404040);
//         scene.add(ambientLight);

//         const directionalLight1 = new THREE.DirectionalLight(0x0099ff, 0.8);
//         directionalLight1.position.set(1, 1, 1);
//         scene.add(directionalLight1);

//         const directionalLight2 = new THREE.DirectionalLight(0xff9900, 0.6);
//         directionalLight2.position.set(-1, -1, -1);
//         scene.add(directionalLight2);

//         const hemisphereLight = new THREE.HemisphereLight(0x0099ff, 0xff6600, 0.6);
//         scene.add(hemisphereLight);

//         // 5. Add orbit controls
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true;
//         controls.dampingFactor = 0.05;
//         controls.minDistance = 2;
//         controls.maxDistance = 5;
//         controls.enablePan = false;
//         controls.maxPolarAngle = Math.PI * 0.9;
//         controls.minPolarAngle = Math.PI * 0.4;
//         controlsRef.current = controls;

//         // 6. Load robot model
//         const loader = new GLTFLoader();
//         loader.load(
//           'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
//           (gltf) => {
//             const robot = gltf.scene;
//             robot.scale.set(0.7, 0.7, 0.7);
//             robot.position.y = -1;
//             scene.add(robot);
//             robotRef.current = robot;

//             // Initialize animation mixer
//             const mixer = new THREE.AnimationMixer(robot);
//             mixerRef.current = mixer;

//             // Set initial animation
//             const clips = gltf.animations;
//             if (clips && clips.length) {
//               const clip = THREE.AnimationClip.findByName(clips, 'Idle');
//               const action = mixer.clipAction(clip);
//               action.play();
//             }

//             setIsLoading(false);
//           },
//           undefined,
//           (error) => {
//             console.error('Error loading robot model', error);
//             setError('Failed to load AI assistant');
//             setIsLoading(false);
//           }
//         );

//         // 7. Animation loop
//         const clock = new THREE.Clock();
//         const animate = () => {
//           animationIdRef.current = requestAnimationFrame(animate);
          
//           if (mixerRef.current) {
//             mixerRef.current.update(clock.getDelta());
//           }
          
//           if (controlsRef.current) {
//             controlsRef.current.update();
//           }
          
//           renderer.render(scene, camera);
//         };
        
//         animate();

//         // 8. Handle window resize
//         const handleResize = () => {
//           if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;
          
//           cameraRef.current.aspect = 
//             canvasRef.current.offsetWidth / canvasRef.current.offsetHeight;
//           cameraRef.current.updateProjectionMatrix();
//           rendererRef.current.setSize(
//             canvasRef.current.offsetWidth, 
//             canvasRef.current.offsetHeight
//           );
//         };

//         window.addEventListener('resize', handleResize);

//         // Cleanup function
//         return () => {
//           window.removeEventListener('resize', handleResize);
//           if (animationIdRef.current) {
//             cancelAnimationFrame(animationIdRef.current);
//           }
//           if (rendererRef.current) {
//             rendererRef.current.dispose();
//           }
//           if (controlsRef.current) {
//             controlsRef.current.dispose();
//           }
//         };

//       } catch (err) {
//         console.error('Error initializing 3D scene:', err);
//         setError('Failed to initialize 3D scene');
//         setIsLoading(false);
//       }
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             initRobot();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (canvasRef.current?.parentElement) {
//       observer.observe(canvasRef.current.parentElement);
//     }

//     return () => {
//       if (canvasRef.current?.parentElement) {
//         observer.unobserve(canvasRef.current.parentElement);
//       }
//     };
//   }, []);

//   const playAnimation = (animationName, loopCount = 1) => {
//     if (!mixerRef.current || !robotRef.current) return;

//     const loader = new GLTFLoader();
//     loader.load(
//       'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
//       (gltf) => {
//         const clips = gltf.animations;
//         if (clips && clips.length) {
//           const clip = THREE.AnimationClip.findByName(clips, animationName);
//           if (clip) {
//             const action = mixerRef.current.clipAction(clip);
//             action.reset();
            
//             if (loopCount === Infinity) {
//               action.setLoop(THREE.LoopRepeat, Infinity);
//             } else {
//               action.setLoop(THREE.LoopOnce, loopCount);
//               action.clampWhenFinished = true;
//             }
            
//             action.play();
//           }
//         }
//       }
//     );
//   };

//   const handleWave = () => {
//     playAnimation('Wave');
//     setTimeout(() => {
//       playAnimation('Idle');
//     }, 2000);
//   };

//   const handleDance = () => {
//     playAnimation('Dance', Infinity);
//   };

//   const handleTalk = () => {
//     playAnimation('Talking', 3);
//     setTimeout(() => {
//       playAnimation('Idle');
//     }, 5000);
//   };

//   const handleReset = () => {
//     playAnimation('Idle');
//   };

//   return (
//     <section id="robot" className="py-20 bg-black relative overflow-hidden binary-background">
//       <style jsx>{`
//         .binary-background {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .binary-background::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-image: linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px);
//           background-size: 20px 20px;
//           opacity: 0.3;
//           pointer-events: none;
//         }
        
//         .circuit-line {
//           position: absolute;
//           background: linear-gradient(90deg, transparent, #3b82f6, transparent);
//           height: 2px;
//           transform-origin: left center;
//           animation: circuitFlow 3s linear infinite;
//           opacity: 0.5;
//         }
        
//         @keyframes circuitFlow {
//           0% {
//             transform: scaleX(0);
//             opacity: 0;
//           }
//           50% {
//             opacity: 0.8;
//           }
//           100% {
//             transform: scaleX(1);
//             opacity: 0;
//           }
//         }
//       `}</style>
      
//       <div className="absolute inset-0">
//         {/* Circuit lines effect */}
//         <div className="circuit-line" style={{top: '20%', left: '10%', width: '200px', animationDelay: '0s'}}></div>
//         <div className="circuit-line" style={{top: '40%', left: '30%', width: '150px', animationDelay: '0.5s'}}></div>
//         <div className="circuit-line" style={{top: '60%', left: '20%', width: '250px', animationDelay: '1s'}}></div>
//         <div className="circuit-line" style={{top: '30%', left: '50%', width: '180px', animationDelay: '1.5s'}}></div>
//         <div className="circuit-line" style={{top: '70%', left: '60%', width: '220px', animationDelay: '2s'}}></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 tech-font">
//             <span className="ai-gradient-text">MEET YOUR</span> AI ASSISTANT
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             Interact with our advanced AI assistant in real-time. Watch as it processes requests and provides intelligent responses.
//           </p>
//         </div>
        
//         <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-black">
//           <div ref={canvasRef} className="w-full h-full"></div>
          
//           {isLoading && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//               <div className="text-center">
//                 <div className="inline-block relative">
//                   <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <Brain className="text-blue-400" size={24} />
//                   </div>
//                 </div>
//                 <p className="mt-4 text-blue-400">Initializing AI assistant...</p>
//               </div>
//             </div>
//           )}
          
//           {error && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
//               <div className="text-center">
//                 <AlertTriangle className="text-red-500 text-3xl mb-2 mx-auto" size={48} />
//                 <p className="text-red-400">{error}</p>
//               </div>
//             </div>
//           )}
          
//           {!isLoading && !error && (
//             <div className="absolute bottom-4 left-0 right-0 px-6">
//               <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
//                 <div className="flex items-center space-x-4">
//                   <button 
//                     onClick={handleWave}
//                     className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition"
//                   >
//                     <Hand className="text-blue-300" size={16} />
//                   </button>
//                   <button 
//                     onClick={handleDance}
//                     className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center hover:bg-purple-600/50 transition"
//                   >
//                     <Music className="text-purple-300" size={16} />
//                   </button>
//                   <button 
//                     onClick={handleTalk}
//                     className="w-10 h-10 bg-green-600/30 rounded-lg flex items-center justify-center hover:bg-green-600/50 transition"
//                   >
//                     <MessageCircle className="text-green-300" size={16} />
//                   </button>
//                   <div className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2 text-gray-400 text-sm">
//                     Choose an interaction mode...
//                   </div>
//                   <button 
//                     onClick={handleReset}
//                     className="w-10 h-10 bg-red-600/30 rounded-lg flex items-center justify-center hover:bg-red-600/50 transition"
//                   >
//                     <RotateCcw className="text-red-300" size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-blue-500/30">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
//                 <Brain className="text-blue-400" size={20} />
//               </div>
//               <h3 className="text-lg font-bold tech-font">NEURAL NETWORK</h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Powered by deep learning algorithms that continuously improve through interactions.
//             </p>
//           </div>
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-green-500/30">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
//                 <Languages className="text-green-400" size={20} />
//               </div>
//               <h3 className="text-lg font-bold tech-font">NLP PROCESSING</h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Natural language understanding allows for human-like conversation and comprehension.
//             </p>
//           </div>
//           <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
//                 <Zap className="text-purple-400" size={20} />
//               </div>
//               <h3 className="text-lg font-bold tech-font">REAL-TIME</h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Processes requests and provides responses in milliseconds for seamless interaction.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Robot3DSection;

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Hand, Music, MessageCircle, Lightbulb, Scan, Plane, RotateCcw, Bot, Smile, Shield, FlaskConical, Cpu, MemoryStick, Network, MessageSquare, AlertTriangle, BrainCircuit } from 'lucide-react';

const Robot3DSection = () => {
  // Agent data with descriptions
const agents = {
  'assistant-bot': {
    name: 'Assistant Bot',
    desc: 'Standard helper AI for general tasks and questions',
    modelUrl: 'https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
    animations: ['Idle', 'Wave', 'Dance', 'Talking', 'Standing'],
    color: '#3b82f6',
    responses: [
      "Assistant Bot ready for commands.",
      "Analyzing input patterns...",
      "Processing module activated",
      "Accessing knowledge database",
      "How may I assist you today?"
    ]
  },
  'friendly-ai': {
    name: 'Friendly AI',
    desc: 'More human-like interactions with emotional intelligence',
    modelUrl: 'https://threejs.org/examples/models/gltf/Soldier.glb',
    animations: ['Idle', 'Walk', 'Run', 'TPose'],
    color: '#10b981',
    scale: 1,
    responses: [
      "Hello there! How are you doing today?",
      "I'm here to help with a friendly approach.",
      "Would you like me to explain something?",
      "I sense you might need assistance with something...",
      "Let me help out with that task!"
    ]
  },
  'security-ai': {
    name: 'Security AI',
    desc: 'Specialized in threat detection and cyber defense',
    modelUrl: 'https://threejs.org/examples/models/gltf/Xbot.glb',
    animations: ['Idle', 'Walking', 'Running', 'Dance'],
    color: '#ef4444',
    scale: 1,
    responses: [
      "Security protocols engaged. All systems green.",
      "Scanning for potential threats...",
      "Network activity normal at this time.",
      "Detecting potential security vulnerabilities...",
      "Defensive measures activated."
    ]
  },
  'scientist-ai': {
    name: 'Scientist AI',
    desc: 'Research and data analysis specialist',
    modelUrl: 'https://threejs.org/examples/models/gltf/Stork.glb',
    animations: ['Idle', 'Flying'],
    color: '#8b5cf6',
    scale: 0.4,
    responses: [
      "Research module activated. What data should we examine?",
      "Running analysis on the selected parameters...",
      "Interesting findings from the latest dataset.",
      "Calculating probabilities and potential outcomes...",
      "My recommendation based on the data is..."
    ]
  }
};

  // State
  const [currentAgent, setCurrentAgent] = useState('assistant-bot');
  const [currentResponse, setCurrentResponse] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('personality');
  const agentData = agents[currentAgent];

  // Refs
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const agentRef = useRef(null);
  const mixerRef = useRef(null);
  const controlsRef = useRef(null);
  const animationIdRef = useRef(null);
  const responseIntervalRef = useRef(null);

  // Update AI response text
  useEffect(() => {
    updateResponse();
    responseIntervalRef.current = setInterval(updateResponse, 4000);
    
    return () => {
      if (responseIntervalRef.current) {
        clearInterval(responseIntervalRef.current);
      }
    };
  }, [currentAgent]);

  const updateResponse = () => {
    setCurrentResponse(prev => (prev + 1) % agentData.responses.length);
  };

  // Initialize scene
  useEffect(() => {
    const initScene = () => {
      try {
        // Create scene
        const scene = new THREE.Scene();
        scene.background = null;
        sceneRef.current = scene;
        
        // Create camera
        const camera = new THREE.PerspectiveCamera(
          75,
          canvasRef.current.offsetWidth / canvasRef.current.offsetHeight,
          0.1,
          1000
        );
        camera.position.set(0, 1.5, 3);
        cameraRef.current = camera;
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        });
        renderer.setSize(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        canvasRef.current.innerHTML = '';
        canvasRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        
        const directionalLight1 = new THREE.DirectionalLight(0x0099ff, 0.8);
        directionalLight1.position.set(1, 1, 1);
        scene.add(directionalLight1);
        
        const directionalLight2 = new THREE.DirectionalLight(0xff9900, 0.6);
        directionalLight2.position.set(-1, -1, -1);
        scene.add(directionalLight2);
        
        const hemisphereLight = new THREE.HemisphereLight(0x0099ff, 0xff6600, 0.6);
        scene.add(hemisphereLight);
        
        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 1.5;
        controls.maxDistance = 10;
        controls.enablePan = false;
        controls.maxPolarAngle = Math.PI * 0.9;
        controls.minPolarAngle = Math.PI * 0.4;
        controlsRef.current = controls;
        
        // Start animation loop
        const clock = new THREE.Clock();
        const animate = () => {
          animationIdRef.current = requestAnimationFrame(animate);
          
          if (mixerRef.current) {
            mixerRef.current.update(clock.getDelta());
          }
          
          if (controlsRef.current) {
            controlsRef.current.update();
          }
          
          renderer.render(scene, camera);
        };
        
        animate();
        
        // Load initial agent
        loadAgent(currentAgent);
        
        // Handle window resize
        const handleResize = () => {
          camera.aspect = canvasRef.current.offsetWidth / canvasRef.current.offsetHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
          if (rendererRef.current) {
            rendererRef.current.dispose();
          }
        };
      } catch (error) {
        console.error('Error initializing 3D scene:', error);
        setError('Failed to initialize 3D scene');
        setIsLoading(false);
      }
    };

    if (canvasRef.current && !sceneRef.current) {
      initScene();
    }
  }, []);

  // Load agent model
  const loadAgent = async (agentType) => {
    try {
      setCurrentAgent(agentType);
      setIsLoading(true);
      setError(null);
      
      const agentData = agents[agentType];
      
      // Reset scene if we have an existing agent
      if (agentRef.current) {
        sceneRef.current.remove(agentRef.current);
        if (mixerRef.current) {
          mixerRef.current.stopAllAction();
          mixerRef.current = null;
        }
      }
      
      // Load agent model
      const loader = new GLTFLoader();
      
      // Add error handling for failed model loading
      const gltf = await new Promise((resolve, reject) => {
        loader.load(
          agentData.modelUrl,
          resolve,
          undefined,
          (error) => {
            console.error(`Error loading ${agentData.name} model:`, error);
            reject(new Error(`Failed to load ${agentData.name} model`));
          }
        );
      });
      
      const agent = gltf.scene;
      agent.scale.set(agentData.scale || 0.7, agentData.scale || 0.7, agentData.scale || 0.7);
      agent.position.y = agentData.yOffset || -1;
      sceneRef.current.add(agent);
      agentRef.current = agent;
      
      // Initialize animation mixer
      const mixer = new THREE.AnimationMixer(agent);
      mixerRef.current = mixer;
      
      // Set initial animation
      const clips = gltf.animations;
      if (clips && clips.length) {
        const clip = THREE.AnimationClip.findByName(clips, 'Idle');
        if (clip) {
          const action = mixer.clipAction(clip);
          action.play();
        }
      }
      
      setIsLoading(false);
      setCurrentResponse(0);
    } catch (error) {
      console.error('Error in loadAgent:', error);
      setError(error.message);
      setIsLoading(false);
      
      // Attempt to load default model if current fails
      if (agentType !== 'assistant-bot') {
        setTimeout(() => {
          loadAgent('assistant-bot');
        }, 2000);
      }
    }
  };

  // Button handlers for agent actions
  const playAnimation = async (animationName, loopCount = 1, responseIndex = 0) => {
    if (!mixerRef.current || !agentRef.current) return;
    
    try {
      const loader = new GLTFLoader();
      const gltf = await new Promise((resolve, reject) => {
        loader.load(
          agentData.modelUrl,
          resolve,
          undefined,
          reject
        );
      });
      
      const clips = gltf.animations;
      if (clips && clips.length) {
        const clip = THREE.AnimationClip.findByName(clips, animationName);
        if (clip) {
          const action = mixerRef.current.clipAction(clip);
          action.reset();
          
          if (loopCount === Infinity) {
            action.setLoop(THREE.LoopRepeat, Infinity);
          } else {
            action.setLoop(THREE.LoopOnce, loopCount);
            action.clampWhenFinished = true;
          }
          
          action.play();
          
          // Update AI response based on animation
          if (responseIndex >= 0 && responseIndex < agentData.responses.length) {
            setCurrentResponse(responseIndex);
          }
          
          // Return to idle after animation completes for non-looping actions
          if (loopCount !== Infinity) {
            setTimeout(() => {
              const idleClip = THREE.AnimationClip.findByName(clips, 'Idle');
              if (idleClip) {
                const idleAction = mixerRef.current.clipAction(idleClip);
                idleAction.play();
              }
            }, clip.duration * 1000);
          }
        } else {
          console.warn(`Animation ${animationName} not found`);
          setCurrentResponse(0);
        }
      }
    } catch (error) {
      console.error('Error playing animation:', error);
      setError('Failed to play animation');
    }
  };

  const handleAgentChange = (agentType) => {
    loadAgent(agentType);
  };

  const handleWave = () => {
    const animation = agentData.animations.includes('Wave') ? 'Wave' : 
                     agentData.animations.includes('Greet') ? 'Greet' : 'Idle';
    playAnimation(animation, 1, 1);
  };

  const handleDance = () => {
    if (agentData.animations.includes('Dance')) {
      playAnimation('Dance', Infinity, 2);
    } else {
      setCurrentResponse(0);
    }
  };

  const handleTalk = () => {
    const animation = agentData.animations.includes('Talking') ? 'Talking' : 
                     agentData.animations.includes('Greet') ? 'Greet' : 'Idle';
    playAnimation(animation, 3, 3);
  };

  const handleExplain = () => {
    const animation = agentData.animations.includes('Explain') ? 'Explain' : 
                     agentData.animations.includes('Greet') ? 'Greet' : 'Idle';
    playAnimation(animation, 1, 2);
  };

  const handleScan = () => {
    if (agentData.animations.includes('Scan')) {
      playAnimation('Scan', 1, 1);
    } else {
      setCurrentResponse(0);
    }
  };

  const handleFly = () => {
    if (currentAgent === 'scientist-ai') {
      setCurrentResponse(1);
    } else {
      setCurrentResponse(0);
    }
  };

  const handleReset = () => {
    playAnimation('Idle');
    setCurrentResponse(0);
  };

  const handleHello = () => {
    setCurrentResponse(0);
    playAnimation(agentData.animations.includes('Greet') ? 'Greet' : 'Idle', 1, 0);
  };

  return (
    <section id="robot" className="py-20 binary-background relative">
      {/* Circuit lines */}
      <div className="absolute inset-0">
        <div className="circuit-line" style={{ top: '20%', left: '10%', width: '200px', animationDelay: '0s' }}></div>
        <div className="circuit-line" style={{ top: '40%', left: '30%', width: '150px', animationDelay: '0.5s' }}></div>
        <div className="circuit-line" style={{ top: '60%', left: '20%', width: '250px', animationDelay: '1s' }}></div>
        <div className="circuit-line" style={{ top: '30%', left: '50%', width: '180px', animationDelay: '1.5s' }}></div>
        <div className="circuit-line" style={{ top: '70%', left: '60%', width: '220px', animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
            <span className="ai-gradient-text">AI AGENT</span> COLLECTION
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our diverse range of AI agent personalities. Each has unique capabilities and interaction styles.
          </p>
        </div>
        
        {/* Agent Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(agents).map(([key, agent]) => (
            <div 
              key={key}
              className={`agent-card bg-gray-900/50 rounded-lg p-4 cursor-pointer text-center ${currentAgent === key ? 'selected' : ''}`}
              onClick={() => handleAgentChange(key)}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${agent.color}20` }}
              >
                {key === 'assistant-bot' && <Bot className={`text-[${agent.color}]`} />}
                {key === 'friendly-ai' && <Smile className={`text-[${agent.color}]`} />}
                {key === 'security-ai' && <Shield className={`text-[${agent.color}]`} />}
                {key === 'scientist-ai' && <FlaskConical className={`text-[${agent.color}]`} />}
              </div>
              <h3 className="font-bold  mb-1">{agent.name}</h3>
              <p className="text-xs text-gray-400">{agent.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Control Panel */}
          <div className="lg:w-1/2 bg-gradient-to-b from-gray-900/80 to-black rounded-xl p-6 border border-gray-800 glass-effect">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold  mb-4 ai-gradient-text">
                  Agent Control Panel
                </h3>
                
                {/* Tabs */}
                <div className="flex border-b border-gray-700 mb-4">
                  <button
                    className={`py-2 px-4 text-sm font-medium ${activeTab === 'personality' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('personality')}
                  >
                    Personality
                  </button>
                  <button
                    className={`py-2 px-4 text-sm font-medium ${activeTab === 'settings' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    Settings
                  </button>
                  <button
                    className={`py-2 px-4 text-sm font-medium ${activeTab === 'status' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('status')}
                  >
                    Status
                  </button>
                </div>
                
                {/* Tab Content */}
                {activeTab === 'personality' && (
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm mb-2">Agent Personality</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 py-2 px-4 rounded  text-sm transition">Friendly</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded  text-sm transition">Professional</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded  text-sm transition">Technical</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-4 rounded  text-sm transition">Humorous</button>
                    </div>
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm mb-2">Voice Output</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="bg-green-600/20 hover:bg-green-600/30 text-green-300 py-2 px-3 rounded  text-xs transition">Speech</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-3 rounded  text-xs transition">Text</button>
                      <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 px-3 rounded  text-xs transition">Both</button>
                    </div>
                  </div>
                )}
                
                {activeTab === 'status' && (
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Cpu className="text-blue-400 mr-2 w-4 h-4" />
                        <span className="text-sm">Processing Power</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-xs ml-2 text-gray-400">65%</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <MemoryStick className="text-purple-400 mr-2 w-4 h-4" />
                        <span className="text-sm">Memory Usage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                        <span className="text-xs ml-2 text-gray-400">42%</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <Network className="text-green-400 mr-2 w-4 h-4" />
                        <span className="text-sm">Network Latency</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                        </div>
                        <span className="text-xs ml-2 text-gray-400">28ms</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600/30 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <p id="ai-response" className="text-sm font-mono pulse-text">
                      {agentData.responses[currentResponse]}
                    </p>
                    <button 
                      onClick={handleHello}
                      className="mt-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 py-1 px-3 rounded text-xs transition"
                    >
                      Say Hello
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - 3D Agent Viewer */}
          <div className="lg:w-1/2 relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-black">
            <div id="agent-canvas" ref={canvasRef} className="w-full h-full"></div>
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-center">
                  <div className="inline-block relative">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Cpu className="text-blue-400 w-6 h-6" />
                    </div>
                  </div>
                  <p className="mt-4 text-blue-400">Initializing AI agent...</p>
                </div>
              </div>
            )}
            
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-center">
                  <AlertTriangle className="text-red-500 w-12 h-12 mb-2 mx-auto" />
                  <p className="text-red-400">{error}</p>
                  <button 
                    onClick={() => loadAgent('assistant-bot')}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                  >
                    Load Default Agent
                  </button>
                </div>
              </div>
            )}
            
            <div className="absolute bottom-4 left-0 right-0 px-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hidden">
                  <button 
                    onClick={handleWave}
                    className="flex-shrink-0 w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition"
                  >
                    <Hand className="text-blue-300 w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleDance}
                    className="flex-shrink-0 w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center hover:bg-purple-600/50 transition"
                  >
                    <Music className="text-purple-300 w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleTalk}
                    className="flex-shrink-0 w-10 h-10 bg-green-600/30 rounded-lg flex items-center justify-center hover:bg-green-600/50 transition"
                  >
                    <MessageCircle className="text-green-300 w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleExplain}
                    className="flex-shrink-0 w-10 h-10 bg-yellow-600/30 rounded-lg flex items-center justify-center hover:bg-yellow-600/50 transition"
                  >
                    <Lightbulb className="text-yellow-300 w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleScan}
                    className="flex-shrink-0 w-10 h-10 bg-red-600/30 rounded-lg flex items-center justify-center hover:bg-red-600/50 transition"
                  >
                    <Scan className="text-red-300 w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleFly}
                    className="flex-shrink-0 w-10 h-10 bg-indigo-600/30 rounded-lg flex items-center justify-center hover:bg-indigo-600/50 transition"
                  >
                    <Plane className="text-indigo-300 w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleReset}
                    className="flex-shrink-0 w-10 h-10 bg-gray-600/30 rounded-lg flex items-center justify-center hover:bg-gray-600/50 transition"
                  >
                    <RotateCcw className="text-gray-300 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Agent Capabilities */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold  mb-6 text-center ai-gradient-text">Agent Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <BrainCircuit className="text-blue-400 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold ">Multimodal AI</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Processes text, voice, and visual inputs simultaneously for comprehensive understanding.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                  <Network className="text-purple-400 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold ">Real-time Learning</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Continuously adapts and improves based on user interactions and environmental data.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-green-500/30 hover:border-green-500/60 transition">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
                  <Shield className="text-green-400 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold ">Security Focused</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Built with enterprise-grade security and privacy protections at every layer.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS styles */}
      <style jsx global>{`
        @keyframes circuitFlow {
          0% { transform: scaleX(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        
        .circuit-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          height: 2px;
          transform-origin: left center;
          animation: circuitFlow 3s linear infinite;
          opacity: 0.5;
        }
        
        .ai-gradient-text {
          background: linear-gradient(90deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        /* .tech-font {
          font-family: 'Courier New', monospace;
          letter-spacing: 1px;
        }
         */
        .binary-background {
          position: relative;
          overflow: hidden;
        }
        
        .binary-background::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
          pointer-events: none;
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #3b82f6 }
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: .15em solid #3b82f6;
          white-space: nowrap;
          animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-20px) }
          100% { transform: translateY(0px) }
        }
        
        .agent-card {
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .agent-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1);
        }
        
        .agent-card.selected {
          border: 2px solid #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }
        
        .glass-effect {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pulse-text {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Robot3DSection;