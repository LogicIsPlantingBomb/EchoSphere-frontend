import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Discussion = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [selectedSide, setSelectedSide] = useState(null); // Tracks the user's chosen side
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: "d001",
      side: "FOR",
      user: "NETRUNNER_42",
      content: "Neural implants are the future. They enhance productivity and connectivity.",
      timestamp: "1 hour ago",
    },
    {
      id: "d002",
      side: "AGAINST",
      user: "CYBERPUNK_99",
      content: "Neural implants are a violation of personal freedom. We must resist.",
      timestamp: "2 hours ago",
    },
  ]);

  // Mock data for debate statistics
  const [debateStats, setDebateStats] = useState({
    for: 45, // Percentage of people in favor
    against: 55, // Percentage of people against
  });

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

  const handleChooseSide = (side) => {
    if (!selectedSide) {
      setSelectedSide(side);
      // Update debate stats (mock data)
      setDebateStats((prev) => ({
        ...prev,
        [side]: prev[side] + 5, // Simulate a new user choosing a side
      }));
    }
  };

  const handleCreatePost = () => {
    if (newPostContent.trim() === "" || !selectedSide) return;
    
    const newPost = {
      id: `d${Math.floor(Math.random() * 10000)}`,
      side: selectedSide,
      user: "NETRUNNER_137", // Replace with the logged-in user's name
      content: newPostContent,
      timestamp: "Just now",
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

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
        
        <Link to="/home" className="flex flex-col md:flex-row items-center text-gray-500 hover:text-cyan-400 transition-colors duration-300 w-full py-3 px-2 md:px-4 mb-3 rounded hover:bg-gray-800/50">
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
        {/* Debate Header */}
        <div className="w-full p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative mb-8">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
          
          <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 ${glitchActive ? 'skew-x-1' : ''} transition-transform duration-100`}>
            DEBATE: NEURAL IMPLANTS
          </h1>
          <p className="text-gray-300 font-mono text-sm mt-2">
            Should neural implants be mandatory for productivity enhancement?
          </p>
        </div>
        
        {/* Debate Statistics */}
        <div className="w-full grid grid-cols-2 gap-4 mb-8">
          <div className="p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono">IN FAVOR</h3>
            <p className="text-2xl font-bold text-cyan-400 mt-1">{debateStats.for}%</p>
          </div>
          
          <div className="p-6 bg-gray-900/60 backdrop-blur-sm border border-pink-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-pink-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono">AGAINST</h3>
            <p className="text-2xl font-bold text-pink-400 mt-1">{debateStats.against}%</p>
          </div>
        </div>
        
        {/* Choose Side */}
        {!selectedSide && (
          <div className="w-full mb-8">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono mb-4">CHOOSE YOUR SIDE</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleChooseSide("for")}
                className="p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-cyan-400">FOR</h3>
                <p className="text-gray-300 font-mono text-sm mt-2">Support neural implants for productivity.</p>
              </button>
              <button
                onClick={() => handleChooseSide("against")}
                className="p-6 bg-gray-900/60 backdrop-blur-sm border border-pink-800/30 rounded-lg hover:bg-pink-500/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-pink-400">AGAINST</h3>
                <p className="text-gray-300 font-mono text-sm mt-2">Oppose neural implants for personal freedom.</p>
              </button>
            </div>
          </div>
        )}
        
        {/* Posts Section */}
        <div className="w-full">
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono mb-4">DISCUSSION</h2>
          
          {/* Create Post */}
          {selectedSide && (
            <div className="mb-8">
              <textarea
                className="w-full p-4 rounded bg-gray-800/80 text-cyan-300 font-mono outline-none border border-cyan-900 focus:border-cyan-500 placeholder-cyan-700 caret-pink-500 h-32 resize-none mb-4"
                placeholder="ENTER YOUR ARGUMENT..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <button
                onClick={handleCreatePost}
                className="px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-500/20 transition-colors duration-300"
              >
                POST
              </button>
            </div>
          )}
          
          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg relative group">
                <div className={`absolute top-0 left-0 w-1 h-full ${
                  post.side === "FOR" ? "bg-cyan-500" : "bg-pink-500"
                }`}></div>
                
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 text-xs mb-2">
                    <span className={`px-1.5 py-0.5 ${
                      post.side === "FOR" ? "bg-cyan-900/30 border-cyan-500/30 text-cyan-400" : "bg-pink-900/30 border-pink-500/30 text-pink-400"
                    } border rounded font-mono`}>
                      {post.side}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs font-mono">{post.timestamp}</span>
                </div>
                
                <p className="text-gray-300 font-mono text-sm">
                  {post.content}
                </p>
                
                <div className="flex justify-between items-center mt-3 text-xs font-mono">
                  <span className="text-gray-500">@{post.user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
