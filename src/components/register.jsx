import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [scanLine, setScanLine] = useState(0);
  const [glitchText, setGlitchText] = useState(false);
  const [headerText, setHeaderText] = useState("INITIALIZE");
  const [isScrambling, setIsScrambling] = useState(true);
  const finalText = "ECHOSPHERE";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|{}[]";
  
  useEffect(() => {
    // Text scrambling effect on load
    if (isScrambling) {
      let iterations = 0;
      const maxIterations = 20; // Total number of scrambles
      const interval = 3000 / maxIterations; // 3 seconds divided by iterations
      
      const scrambleInterval = setInterval(() => {
        setHeaderText(current => {
          // Generate scrambled text that gradually resolves to final text
          return current.split('').map((_, index) => {
            // As iterations increase, more characters lock into their final state
            if (index < Math.floor((iterations / maxIterations) * finalText.length)) {
              return finalText[index];
            }
            // Otherwise return a random character
            return characters[Math.floor(Math.random() * characters.length)];
          }).join('');
        });
        
        iterations++;
        if (iterations >= maxIterations) {
          clearInterval(scrambleInterval);
          setHeaderText(finalText);
          setIsScrambling(false);
        }
      }, interval);
      
      return () => clearInterval(scrambleInterval);
    }
  }, [isScrambling]);

  useEffect(() => {
    // Random text glitch effect after initial scrambling
    if (!isScrambling) {
      const glitchInterval = setInterval(() => {
        setGlitchText(true);
        setTimeout(() => setGlitchText(false), 150);
      }, Math.random() * 4000 + 2000);
      
      return () => clearInterval(glitchInterval);
    }
  }, [isScrambling]);
  
  useEffect(() => {
    // Scan line animation
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev < 100 ? prev + 1 : 0));
    }, 30);
    
    return () => clearInterval(scanInterval);
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center bg-black overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(38,38,38,0.8)_0,_rgba(0,0,0,0.8)_100%)] z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#f700ff05_1px,_transparent_1px),_linear-gradient(to_bottom,_#f700ff05_1px,_transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* Scanning line effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent z-10 pointer-events-none"
        style={{ transform: `translateY(${scanLine}vh)`, height: '5vh' }}
      ></div>
      
      {/* Floating holographic elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-pink-500 opacity-10 blur-xl"></div>
      <div className="absolute top-1/3 left-20 w-24 h-24 rounded-full bg-cyan-500 opacity-10 blur-xl"></div>
      
      <div className="relative z-10 p-8 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-lg border border-purple-500/30 w-96 shadow-[0_0_15px_rgba(247,0,255,0.5)]">
        {/* Glitchy header with scrambling effect */}
        <div className="relative">
          <h2 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center mb-2 tracking-wider font-mono ${glitchText && !isScrambling ? 'opacity-90' : ''}`}>
            {headerText}
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500"></div>
        </div>
        
        <div className="mt-4 mb-2 text-xs text-purple-400 font-mono">CREATE NEW IDENTITY IN THE SYSTEM_</div>
        
        <form className="mt-6 space-y-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="HANDLE" 
              className="w-full p-3 pl-4 rounded bg-gray-800/80 text-purple-300 font-mono outline-none border border-purple-900 focus:border-purple-500 placeholder-purple-700 caret-pink-500"
            />
            <div className="absolute top-0 left-0 h-full w-1 bg-purple-500"></div>
            <div className="absolute -right-1 top-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="relative group">
            <input 
              type="email" 
              placeholder="NEURAL-LINK" 
              className="w-full p-3 pl-4 rounded bg-gray-800/80 text-pink-300 font-mono outline-none border border-pink-900 focus:border-pink-500 placeholder-pink-700 caret-purple-500"
            />
            <div className="absolute top-0 left-0 h-full w-1 bg-pink-500"></div>
            <div className="absolute -right-1 top-1/2 w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="relative group">
            <input 
              type="password" 
              placeholder="ACCESS_KEY" 
              className="w-full p-3 pl-4 rounded bg-gray-800/80 text-purple-300 font-mono outline-none border border-purple-900 focus:border-purple-500 placeholder-purple-700 caret-pink-500"
            />
            <div className="absolute top-0 left-0 h-full w-1 bg-purple-500"></div>
            <div className="absolute -right-1 top-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <button className="w-full mt-4 p-3 bg-transparent border border-pink-500 text-pink-400 font-bold font-mono rounded hover:bg-pink-500/20 transition-all duration-300 shadow-lg shadow-pink-500/20 relative overflow-hidden group">
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">CREATE_PROFILE</span>
          </button>
        </form>
        
        <div className="h-px w-full bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 mt-6 mb-4"></div>
        
        <p className="text-center text-gray-400 font-mono text-sm">
          ALREADY REGISTERED? <Link to="/login" className="text-purple-400 hover:text-purple-300 relative">
            <span className="relative z-10">JACK_IN</span>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
          </Link>
        </p>
        
        <div className="mt-6 text-xs text-gray-500 font-mono text-center">[SYSTEM STATUS: READY | SECURE CHANNEL: ACTIVE]</div>
      </div>
    </div>
  );
};

export default Register;
