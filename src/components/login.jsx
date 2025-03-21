import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [headerText, setHeaderText] = useState("JACK_IN");
  const [isScrambling, setIsScrambling] = useState(true);
  const [scanLine, setScanLine] = useState(0);
  const finalText = "ECHOSPHERE";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|{}[]";

  useEffect(() => {
    // Text scrambling effect on load
    if (isScrambling) {
      let iterations = 0;
      const maxIterations = 20; // Total number of scrambles
      const interval = 3000 / maxIterations; // Total time divided by iterations
      
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
    // Random glitch effect trigger after initial scrambling
    if (!isScrambling) {
      const glitchInterval = setInterval(() => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }, Math.random() * 5000 + 3000);
      
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#00f0ff05_1px,_transparent_1px),_linear-gradient(to_bottom,_#00f0ff05_1px,_transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* Scanning line effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent z-10 pointer-events-none"
        style={{ transform: `translateY(${scanLine}vh)`, height: '5vh' }}
      ></div>
      
      {/* Floating holographic elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-500 opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-cyan-500 opacity-10 blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
      
      <div className={`relative z-10 p-8 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-lg border border-cyan-500/30 w-96 shadow-[0_0_15px_rgba(0,240,255,0.5)] ${glitchActive ? 'translate-x-1 skew-x-1' : ''} transition-transform duration-100`}>
        {/* Glitchy header with scrambling effect */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 text-center mb-2 tracking-wider font-mono animate-flicker">
            {headerText}
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500"></div>
          {glitchActive && !isScrambling && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-pink-500 opacity-70 transform -translate-x-1 font-mono">{headerText}</div>
          )}
        </div>
        
        <div className="mt-4 mb-2 text-xs text-cyan-400 font-mono">ENTER CREDENTIALS TO ACCESS NETRUNNER TERMINAL_</div>
        
        <form className="mt-6 space-y-4">
          <div className="relative">
            <input 
              type="email" 
              placeholder="NETID" 
              className="w-full p-3 pl-4 rounded bg-gray-800/80 text-cyan-300 font-mono outline-none border border-cyan-900 focus:border-cyan-500 placeholder-cyan-700 caret-pink-500"
            />
            <div className="absolute top-0 left-0 h-full w-1 bg-cyan-500"></div>
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="PASSCODE" 
              className="w-full p-3 pl-4 rounded bg-gray-800/80 text-pink-300 font-mono outline-none border border-pink-900 focus:border-pink-500 placeholder-pink-700 caret-cyan-500"
            />
            <div className="absolute top-0 left-0 h-full w-1 bg-pink-500"></div>
          </div>
          
          <button className="w-full mt-4 p-3 bg-transparent border border-cyan-500 text-cyan-400 font-bold font-mono rounded hover:bg-cyan-500/20 transition-all duration-300 shadow-lg shadow-cyan-500/20 relative overflow-hidden group">
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">AUTHENTICATE</span>
          </button>
        </form>
        
        <div className="h-px w-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 mt-6 mb-4"></div>
        
        <p className="text-center text-gray-400 font-mono text-sm">
          NO CREDENTIALS? <Link to="/register" className="text-pink-400 hover:text-pink-300 relative">
            <span className="relative z-10">CREATE_PROFILE</span>
            <span className="absolute bottom-0 left-0 right-0 h-px bg-pink-500 transform scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
          </Link>
        </p>
        
        <div className="mt-6 text-xs text-gray-500 font-mono text-center">[ARASAKA CORP NET ACCESS TERMINAL v2.0.77]</div>
      </div>
    </div>
  );
};

export default Login;
