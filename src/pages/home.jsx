import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [glitchText, setGlitchText] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [titleText, setTitleText] = useState("ECHOSPHERE");
  const [isRandomizing, setIsRandomizing] = useState(true);
  
  // Characters to use for randomization
  const chars = "ECHOSPHERE0123456789@#$%&*<>/\\|";
  
  useEffect(() => {
    // Initial title randomization effect
    let iteration = 0;
    const finalText = "ECHOSPHERE";
    const totalIterations = 15; // Number of iterations before completing
    const randomizationInterval = 80; // ms between updates
    
    const interval = setInterval(() => {
      setTitleText(current => {
        // Build the new string with some letters randomized and some finalized
        let result = "";
        for (let i = 0; i < finalText.length; i++) {
          // More iterations = more finalized characters
          if (i < iteration / 2) {
            result += finalText[i];
          } else {
            result += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        return result;
      });
      
      iteration += 1;
      
      if (iteration >= totalIterations) {
        clearInterval(interval);
        setTitleText(finalText);
        setIsRandomizing(false);
        
        // Schedule periodic glitch effects after initial animation completes
        setTimeout(() => {
          startPeriodicGlitches();
        }, 800);
      }
    }, randomizationInterval);
    
    // Scan line animation
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev < 100 ? prev + 1 : 0));
    }, 30);
    
    return () => {
      clearInterval(interval);
      clearInterval(scanInterval);
    };
  }, []);
  
  // Function to start periodic glitches after initial animation
  const startPeriodicGlitches = () => {
    // Random glitch effect for logo after initial animation
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      
      // Random title scramble during glitch
      setTitleText(current => {
        let result = "";
        const finalText = "ECHOSPHERE";
        for (let i = 0; i < finalText.length; i++) {
          // Randomize a few characters
          if (Math.random() > 0.7) {
            result += chars[Math.floor(Math.random() * chars.length)];
          } else {
            result += finalText[i];
          }
        }
        return result;
      });
      
      // Reset after glitch
      setTimeout(() => {
        setGlitchText(false);
        setTitleText("ECHOSPHERE");
      }, 150);
    }, Math.random() * 4000 + 2000);
    
    return () => clearInterval(glitchInterval);
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_rgba(38,38,38,0.8)_0,_rgba(0,0,0,0.8)_100%)] z-0"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,_#00f0ff05_1px,_transparent_1px),_linear-gradient(to_bottom,_#00f0ff05_1px,_transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* Scanning line effect */}
      <div 
        className="fixed inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent z-10 pointer-events-none"
        style={{ transform: `translateY(${scanLine}vh)`, height: '5vh' }}
      ></div>
      
      {/* Floating holographic elements */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full bg-pink-500 opacity-10 blur-xl"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-500 opacity-10 blur-xl"></div>
      <div className="fixed top-1/3 right-20 w-24 h-24 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center px-6 pt-16 pb-20">
        
        {/* Hero Section */}
        <div className="text-center mt-8 relative">
          <h1 className={`text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 ${glitchText ? 'skew-x-2' : ''} transition-transform duration-100 animate-flicker`}>
            {titleText.split('').map((char, index) => (
              <span 
                key={index} 
                className={`inline-block ${isRandomizing || glitchText ? 'animate-pulse' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {char}
              </span>
            ))}
          </h1>
          {glitchText && (
            <h1 className="text-7xl font-bold text-pink-500 absolute top-0 left-0 w-full opacity-70 transform translate-x-1 animate-flicker">
              {titleText}
            </h1>
          )}
          <div className="h-px w-full bg-gradient-to-r from-cyan-500 via-pink-400 to-purple-500 mt-2"></div>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl font-mono">
            [WHERE OPINIONS <span className="text-cyan-400">COLLIDE</span> AND <span className="text-pink-400">TRUTH</span> EMERGES]
          </p>
        </div>
        
        {/* About Section */}
        <div className="mt-16 max-w-3xl text-center relative p-6 border border-cyan-500/20 bg-black/40 backdrop-blur-sm rounded-lg">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">WHAT_IS::ECHOSPHERE</h2>
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
          <p className="mt-4 text-gray-300 font-mono">
            ECHOSPHERE is a decentralized neural network for anonymous discourse on contentious topics. Your digital identity remains encrypted while your opinions shape the network. Engage in real-time data streams, stake your crypto on winning arguments, and watch as the hivemind reaches consensus.
          </p>
        </div>
        
        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
            <h3 className="text-xl font-semibold text-cyan-400 font-mono tracking-wider">STEALTH_MODE</h3>
            <p className="text-gray-300 mt-2 font-mono text-sm">Express opinions without identity verification. Our quantum encryption protocols ensure complete anonymity.</p>
          </div>
          
          <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-pink-800/30 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-pink-500"></div>
            <h3 className="text-xl font-semibold text-pink-400 font-mono tracking-wider">NEURAL_DEBATES</h3>
            <p className="text-gray-300 mt-2 font-mono text-sm">Real-time argumentation with neurally-mapped discussion flows. Track key arguments in augmented reality.</p>
          </div>
          
          <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-purple-800/30 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            <h3 className="text-xl font-semibold text-purple-400 font-mono tracking-wider">CRYPTO_STAKES</h3>
            <p className="text-gray-300 mt-2 font-mono text-sm">Bet digital currency on your position. Winning factions split the pot—virtual coffee or actual credits to your account.</p>
          </div>
        </div>
        
        {/* New Features Section */}
        <div className="mt-12 w-full max-w-6xl">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-mono text-center mb-6">SYSTEM_UPGRADES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <h3 className="text-xl font-semibold text-cyan-400 font-mono tracking-wider flex items-center">
                <span className="mr-2 text-2xl">⟨⟩</span> MEMORY_CORE
              </h3>
              <p className="text-gray-300 mt-2 font-mono text-sm">Our neural summarizer condenses hours of debate into digestible packets. New users can quickly sync with discussions without parsing the entire data stream.</p>
            </div>
            
            <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-pink-800/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
              <h3 className="text-xl font-semibold text-pink-400 font-mono tracking-wider flex items-center">
                <span className="mr-2 text-2xl">⟨⟩</span> SYN_BOT
              </h3>
              <p className="text-gray-300 mt-2 font-mono text-sm">Advanced AI moderator trained on debate protocols. Provides counter-arguments, fact verification, and keeps discussions on neural pathways.</p>
            </div>
            
            <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-purple-800/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
              <h3 className="text-xl font-semibold text-purple-400 font-mono tracking-wider flex items-center">
                <span className="mr-2 text-2xl">⟨⟩</span> ARGUMENT_CODEC
              </h3>
              <p className="text-gray-300 mt-2 font-mono text-sm">Key points from each side are encrypted with special markers. Quantum tagging highlights strongest assertions and logical vulnerabilities in real-time.</p>
            </div>
            
            <div className="group p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <h3 className="text-xl font-semibold text-cyan-400 font-mono tracking-wider flex items-center">
                <span className="mr-2 text-2xl">⟨⟩</span> REWARD_PROTOCOL
              </h3>
              <p className="text-gray-300 mt-2 font-mono text-sm">Winning side claims the digital pot. Cash out for actual coffee delivery to your physical address, or reinvest in the network for enhanced privileges.</p>
            </div>
          </div>
        </div>
        
        {/* Active Debates */}
        <div className="mt-16 w-full max-w-6xl">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono text-center mb-6">LIVE_NEURAL_STREAMS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-4 bg-gray-900/60 backdrop-blur-sm border border-pink-800/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-2 bg-pink-500 animate-pulse"></div>
              <h3 className="text-lg font-semibold text-pink-400 font-mono">Should AI Systems Have Legal Personhood?</h3>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-cyan-400 font-mono">FOR: 57%</span>
                <span className="text-gray-400 font-mono">POT: 248¢</span>
                <span className="text-pink-400 font-mono">AGAINST: 43%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "57%" }}></div>
              </div>
            </div>
            
            <div className="group p-4 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500 animate-pulse"></div>
              <h3 className="text-lg font-semibold text-cyan-400 font-mono">Is Neural Interface Technology Worth Privacy Risks?</h3>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-cyan-400 font-mono">FOR: 32%</span>
                <span className="text-gray-400 font-mono">POT: 542¢</span>
                <span className="text-pink-400 font-mono">AGAINST: 68%</span>
              </div>
              <div className="mt-2 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "32%" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 relative">
          <Link to="/feed">
            <button className="px-10 py-4 bg-transparent border-2 border-pink-500 text-white font-bold text-lg rounded-lg relative overflow-hidden group">
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-purple-500/20 transition-all duration-500 group-hover:w-full"></span>
              <span className="relative z-10 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
                <span className={glitchText ? 'hidden' : 'inline'}>INITIALIZE_CONNECTION</span>
                <span className={glitchText ? 'inline' : 'hidden'}>INIT14L1Z3_C0NN3CT</span> <span className="text-white">⟫</span>
              </span>
            </button>
          </Link>
	  <br/>
	  <br/>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-mono w-full text-center">
            [CONNECTION STATUS: SECURE | NEURAL ENCRYPTION: ACTIVE]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
