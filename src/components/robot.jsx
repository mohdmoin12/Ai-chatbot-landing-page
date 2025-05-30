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


import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { 
  Hand, 
  Music, 
  MessageCircle, 
  RotateCcw, 
  Brain, 
  Languages, 
  Zap,
  AlertTriangle 
} from 'lucide-react';

const Robot3DSection = () => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Refs for Three.js objects
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const robotRef = useRef(null);
  const mixerRef = useRef(null);
  const controlsRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const initRobot = () => {
      try {
        // 1. Create scene
        const scene = new THREE.Scene();
        scene.background = null;
        sceneRef.current = scene;

        // 2. Create camera
        const camera = new THREE.PerspectiveCamera(
          75,
          canvasRef.current.offsetWidth / canvasRef.current.offsetHeight,
          0.1,
          1000
        );
        camera.position.set(0, 1.5, 3);
        cameraRef.current = camera;

        // 3. Create renderer
        const renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true 
        });
        renderer.setSize(
          canvasRef.current.offsetWidth, 
          canvasRef.current.offsetHeight
        );
        renderer.setPixelRatio(window.devicePixelRatio);
        canvasRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // 4. Add lights
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

        // 5. Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 2;
        controls.maxDistance = 5;
        controls.enablePan = false;
        controls.maxPolarAngle = Math.PI * 0.9;
        controls.minPolarAngle = Math.PI * 0.4;
        controlsRef.current = controls;

        // 6. Load robot model
        const loader = new GLTFLoader();
        loader.load(
          'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
          (gltf) => {
            const robot = gltf.scene;
            robot.scale.set(0.7, 0.7, 0.7);
            robot.position.y = -1;
            scene.add(robot);
            robotRef.current = robot;

            // Initialize animation mixer
            const mixer = new THREE.AnimationMixer(robot);
            mixerRef.current = mixer;

            // Set initial animation
            const clips = gltf.animations;
            if (clips && clips.length) {
              const clip = THREE.AnimationClip.findByName(clips, 'Idle');
              const action = mixer.clipAction(clip);
              action.play();
            }

            setIsLoading(false);
          },
          undefined,
          (error) => {
            console.error('Error loading robot model', error);
            setError('Failed to load AI assistant');
            setIsLoading(false);
          }
        );

        // 7. Animation loop
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

        // 8. Handle window resize
        const handleResize = () => {
          if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;
          
          cameraRef.current.aspect = 
            canvasRef.current.offsetWidth / canvasRef.current.offsetHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(
            canvasRef.current.offsetWidth, 
            canvasRef.current.offsetHeight
          );
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
          if (rendererRef.current) {
            rendererRef.current.dispose();
          }
          if (controlsRef.current) {
            controlsRef.current.dispose();
          }
        };

      } catch (err) {
        console.error('Error initializing 3D scene:', err);
        setError('Failed to initialize 3D scene');
        setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initRobot();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current?.parentElement) {
      observer.observe(canvasRef.current.parentElement);
    }

    return () => {
      if (canvasRef.current?.parentElement) {
        observer.unobserve(canvasRef.current.parentElement);
      }
    };
  }, []);

  const playAnimation = (animationName, loopCount = 1) => {
    if (!mixerRef.current || !robotRef.current) return;

    const loader = new GLTFLoader();
    loader.load(
      'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb',
      (gltf) => {
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
          }
        }
      }
    );
  };

  const handleWave = () => {
    playAnimation('Wave');
    setTimeout(() => {
      playAnimation('Idle');
    }, 2000);
  };

  const handleDance = () => {
    playAnimation('Dance', Infinity);
  };

  const handleTalk = () => {
    playAnimation('Talking', 3);
    setTimeout(() => {
      playAnimation('Idle');
    }, 5000);
  };

  const handleReset = () => {
    playAnimation('Idle');
  };

  return (
    <section id="robot" className="py-20 bg-black relative overflow-hidden binary-background">
      <style jsx>{`
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
        
        .circuit-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          height: 2px;
          transform-origin: left center;
          animation: circuitFlow 3s linear infinite;
          opacity: 0.5;
        }
        
        @keyframes circuitFlow {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: scaleX(1);
            opacity: 0;
          }
        }
      `}</style>
      
      <div className="absolute inset-0">
        {/* Circuit lines effect */}
        <div className="circuit-line" style={{top: '20%', left: '10%', width: '200px', animationDelay: '0s'}}></div>
        <div className="circuit-line" style={{top: '40%', left: '30%', width: '150px', animationDelay: '0.5s'}}></div>
        <div className="circuit-line" style={{top: '60%', left: '20%', width: '250px', animationDelay: '1s'}}></div>
        <div className="circuit-line" style={{top: '30%', left: '50%', width: '180px', animationDelay: '1.5s'}}></div>
        <div className="circuit-line" style={{top: '70%', left: '60%', width: '220px', animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tech-font">
            <span className="ai-gradient-text">MEET YOUR</span> AI ASSISTANT
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Interact with our advanced AI assistant in real-time. Watch as it processes requests and provides intelligent responses.
          </p>
        </div>
        
        <div className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-black">
          <div ref={canvasRef} className="w-full h-full"></div>
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-center">
                <div className="inline-block relative">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Brain className="text-blue-400" size={24} />
                  </div>
                </div>
                <p className="mt-4 text-blue-400">Initializing AI assistant...</p>
              </div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-center">
                <AlertTriangle className="text-red-500 text-3xl mb-2 mx-auto" size={48} />
                <p className="text-red-400">{error}</p>
              </div>
            </div>
          )}
          
          {!isLoading && !error && (
            <div className="absolute bottom-4 left-0 right-0 px-6">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handleWave}
                    className="w-10 h-10 bg-blue-600/30 rounded-lg flex items-center justify-center hover:bg-blue-600/50 transition"
                  >
                    <Hand className="text-blue-300" size={16} />
                  </button>
                  <button 
                    onClick={handleDance}
                    className="w-10 h-10 bg-purple-600/30 rounded-lg flex items-center justify-center hover:bg-purple-600/50 transition"
                  >
                    <Music className="text-purple-300" size={16} />
                  </button>
                  <button 
                    onClick={handleTalk}
                    className="w-10 h-10 bg-green-600/30 rounded-lg flex items-center justify-center hover:bg-green-600/50 transition"
                  >
                    <MessageCircle className="text-green-300" size={16} />
                  </button>
                  <div className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2 text-gray-400 text-sm">
                    Choose an interaction mode...
                  </div>
                  <button 
                    onClick={handleReset}
                    className="w-10 h-10 bg-red-600/30 rounded-lg flex items-center justify-center hover:bg-red-600/50 transition"
                  >
                    <RotateCcw className="text-red-300" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-blue-500/30">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                <Brain className="text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold tech-font">NEURAL NETWORK</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Powered by deep learning algorithms that continuously improve through interactions.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-green-500/30">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
                <Languages className="text-green-400" size={20} />
              </div>
              <h3 className="text-lg font-bold tech-font">NLP PROCESSING</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Natural language understanding allows for human-like conversation and comprehension.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                <Zap className="text-purple-400" size={20} />
              </div>
              <h3 className="text-lg font-bold tech-font">REAL-TIME</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Processes requests and provides responses in milliseconds for seamless interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Robot3DSection;