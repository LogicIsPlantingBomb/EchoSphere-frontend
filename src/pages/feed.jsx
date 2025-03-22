import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Feed = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [posts, setPosts] = useState([
    {
      id: "p003",
      user: "NETRUNNER_42",
      content: "The megacorps are pushing neural implants again. What happened to free will?",
      likes: 56,
      comments: 22,
      timestamp: "1 hour ago",
      tags: ["NEURAL", "FREEWILL"]
    },
    {
      id: "p004",
      user: "CYBERPUNK_99",
      content: "Sector 5 is under heavy surveillance. Avoid the area if you value your privacy.",
      likes: 78,
      comments: 34,
      timestamp: "3 hours ago",
      tags: ["SURVEILLANCE", "WARNING"]
    },
    {
      id: "p005",
      user: "ECHO_01",
      content: "The resistance is growing. Join us if you believe in a free future.",
      likes: 102,
      comments: 45,
      timestamp: "5 hours ago",
      tags: ["RESIST", "FREEDOM"]
    }
  ]);

  useEffect(() => {
    // Random glitch effect trigger
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, Math.random() * 5000 + 3000);
    
    // Scan line animation
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev < 100 ? prev + 1 : 0));
    }, 30);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(scanInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex">
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
      
      {/* Side Navigation */}
      <div className="w-20 md:w-64 bg-gray-900/80 backdrop-blur-md border-r border-cyan-900/50 h-screen z-30 flex flex-col items-center md:items-start py-8 px-2 md:px-6">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center mb-8">
          <span className="text-black font-bold text-xl">NC</span>
        </div>
        
        <Link to="/feed" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-cyan-400 transition-colors duration-300 w-full py-3 px-2 md:px-4 mb-3 rounded hover:bg-gray-800/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs font-mono mt-1 md:mt-0 md:ml-3 hidden md:block">HOME</span>
        </Link>

        <Link to="/search" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-pink-400 transition-colors duration-300 w-full py-3 px-2 md:px-4 mb-3 rounded hover:bg-gray-800/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs font-mono mt-1 md:mt-0 md:ml-3 hidden md:block">SEARCH</span>
        </Link>

        <Link to="/messages" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-purple-400 transition-colors duration-300 w-full py-3 px-2 md:px-4 mb-3 rounded hover:bg-gray-800/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-xs font-mono mt-1 md:mt-0 md:ml-3 hidden md:block">MESSAGES</span>
        </Link>

        <Link to="/profile" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-cyan-400 w-full py-3 px-2 md:px-4 mb-3 rounded hover:bg-gray-800/50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs font-mono mt-1 md:mt-0 md:ml-3 hidden md:block">PROFILE</span>
        </Link>
        
        <div className="mt-auto">
          <Link to="/settings" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-cyan-400 transition-colors duration-300 w-full py-3 px-2 md:px-4 mb-3 rounded hover:bg-gray-800/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-mono mt-1 md:mt-0 md:ml-3 hidden md:block">SETTINGS</span>
          </Link>
          
          <Link to="/logout" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-pink-400 transition-colors duration-300 w-full py-3 px-2 md:px-4 rounded hover:bg-gray-800/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-xs font-mono mt-1 md:mt-0 md:ml-3 hidden md:block">DISCONNECT</span>
          </Link>
        </div>
      </div>
      
      {/* Content container */}
      <div className="relative z-20 flex-1 flex flex-col items-center px-4 py-8 max-w-6xl mx-auto overflow-y-auto">
        {/* Feed Header */}
        <div className="w-full p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative mb-8">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
          
          <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 ${glitchActive ? 'skew-x-1' : ''} transition-transform duration-100`}>
            NETWORK_FEED
          </h1>
          <p className="text-gray-300 font-mono text-sm mt-2">
            Latest transmissions from the network. Stay informed, stay connected.
          </p>
        </div>
        
        {/* Posts Section */}
        <div className="w-full space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-pink-500 to-purple-500"></div>
              
              <div className="flex justify-between items-start">
                <div className="flex gap-2 text-xs mb-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-1.5 py-0.5 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 font-mono rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-xs font-mono">{post.timestamp}</span>
              </div>
              
              <p className="text-gray-300 font-mono text-sm">
                {post.content}
              </p>
              
              <div className="flex justify-between items-center mt-3 text-xs font-mono">
                <div className="flex gap-4">
                  <span className="text-cyan-400 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="text-pink-400 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
                <span className="text-gray-500 text-xs font-mono">@{post.user}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
