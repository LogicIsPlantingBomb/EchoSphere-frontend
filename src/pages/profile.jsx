import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Profile = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [showPostModal, setShowPostModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: "p001",
      content: "The corporations say neural implants improve productivity, but at what cost to our humanity?",
      likes: 42,
      comments: 15,
      timestamp: "2 hours ago",
      tags: ["NEURAL", "CORP"]
    },
    {
      id: "p002",
      content: "Anyone else notice the increased drone activity in Sector 7? Think they're monitoring the recent protests...",
      likes: 89,
      comments: 36,
      timestamp: "6 hours ago",
      tags: ["SURVEILLANCE", "RESIST"]
    }
  ]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTags, setNewPostTags] = useState("");

  // Mock data for debate wins over time
  const debateWinsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Debates Won",
        data: [5, 8, 12, 10, 15, 18, 20, 22, 25, 28, 30, 32],
        borderColor: "#00f0ff",
        backgroundColor: "rgba(0, 240, 255, 0.1)",
        tension: 0.4,
      },
    ],
  };

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

  const handleCreatePost = () => {
    if (newPostContent.trim() === "") return;
    
    const newPost = {
      id: `p${Math.floor(Math.random() * 10000)}`,
      content: newPostContent,
      likes: 0,
      comments: 0,
      timestamp: "Just now",
      tags: newPostTags.split(",").map(tag => tag.trim().toUpperCase()).filter(tag => tag !== "")
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    setNewPostTags("");
    setShowPostModal(false);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
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

        <Link to="/profile" className="flex flex-col md:flex-row items-center text-cyan-400 w-full py-3 px-2 md:px-4 mb-3 rounded bg-gray-800/50 border-l-2 border-cyan-500">
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
        
        {/* Profile Header */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative">
          <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
          
          {/* Profile Image */}
          <div className={`relative w-32 h-32 ${glitchActive ? 'translate-x-0.5' : ''} transition-transform duration-100`}>
            <div className="absolute inset-0 border-2 border-cyan-500 rounded-lg transform rotate-2"></div>
            <div className="absolute inset-0 border-2 border-pink-500 rounded-lg transform -rotate-2"></div>
            <div className="relative w-32 h-32 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border-2 border-purple-400/50">
              <div className="text-6xl text-cyan-500">NR</div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500"></div>
              <div className="absolute top-0 right-0 bg-black/60 px-2 py-0.5 text-xs text-cyan-400 font-mono">ONLINE</div>
              <button className="absolute bottom-2 right-2 bg-pink-500/80 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                <span className="transform translate-y-px">+</span>
              </button>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 ${glitchActive ? 'skew-x-1' : ''} transition-transform duration-100`}>
              NETRUNNER_137
            </h1>
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs rounded font-mono">LVL 23</span>
              <span className="px-2 py-1 bg-pink-900/30 border border-pink-500/30 text-pink-400 text-xs rounded font-mono">REP 1,378</span>
              <span className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 text-purple-400 text-xs rounded font-mono">CRYPTO ¢2,543</span>
            </div>
            <p className="mt-3 text-gray-300 font-mono text-sm">
              Dissident. Coder. Truth-seeker. Fighting against corporate mind control since 2019.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              <button className="px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-500/20 transition-colors duration-300">
                EDIT_PROFILE
              </button>
              <button className="px-4 py-2 bg-transparent border border-pink-500 text-pink-400 font-mono text-sm rounded hover:bg-pink-500/20 transition-colors duration-300">
                SETTINGS
              </button>
              <button onClick={() => setShowPostModal(true)} className="px-4 py-2 bg-transparent border border-purple-500 text-purple-400 font-mono text-sm rounded hover:bg-purple-500/20 transition-colors duration-300">
                NEW_POST
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono">TOTAL_POSTS</h3>
            <p className="text-2xl font-bold text-cyan-400 mt-1">47</p>
          </div>
          
          <div className="p-4 bg-gray-900/60 backdrop-blur-sm border border-pink-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-pink-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono">DEBATES_WON</h3>
            <p className="text-2xl font-bold text-pink-400 mt-1">16</p>
          </div>
          
          <div className="p-4 bg-gray-900/60 backdrop-blur-sm border border-purple-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-purple-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono">TOTAL_LIKES</h3>
            <p className="text-2xl font-bold text-purple-400 mt-1">2,358</p>
          </div>
          
          <div className="p-4 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono">CONNECTIONS</h3>
            <p className="text-2xl font-bold text-cyan-400 mt-1">124</p>
          </div>
        </div>
        
        {/* Debate Wins Graph - HEIGHT REDUCED */}
        <div className="w-full mt-8">
          <div className="p-6 bg-gray-900/60 backdrop-blur-sm border border-cyan-800/30 rounded-lg relative">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <h3 className="text-sm font-semibold text-gray-400 font-mono mb-4">DEBATE_WINS_OVER_TIME</h3>
            <div className="h-40"> {/* Height reduced to about half */}
              <Line 
                data={debateWinsData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)",
                      },
                      ticks: {
                        color: "#00f0ff",
                      },
                    },
                    y: {
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)",
                      },
                      ticks: {
                        color: "#00f0ff",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Posts Section */}
        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono mb-4">YOUR_POSTS</h2>
          
          <div className="space-y-4">
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
                  <div className="flex gap-2">
                    <button onClick={() => handleDeletePost(post.id)} className="text-gray-500 hover:text-pink-500 transition-colors duration-300">
                      <span className="text-xs font-mono">[DELETE]</span>
                    </button>
                    <button className="text-gray-500 hover:text-cyan-500 transition-colors duration-300">
                      <span className="text-xs font-mono">[EDIT]</span>
                    </button>
                  </div>
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
                  <span className="text-gray-500">{post.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Create Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowPostModal(false)}></div>
          <div className="relative p-6 bg-gray-900 border border-cyan-800/50 rounded-lg w-full max-w-xl z-10">
            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-pink-500"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500"></div>
            
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-mono mb-4">CREATE_NEW_POST</h2>
            
            <textarea
              className="w-full p-4 rounded bg-gray-800/80 text-cyan-300 font-mono outline-none border border-cyan-900 focus:border-cyan-500 placeholder-cyan-700 caret-pink-500 h-32 resize-none mb-4"
              placeholder="ENTER YOUR MESSAGE TO THE NETWORK..."
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />

            <input
              type="text"
              className="w-full p-3 rounded bg-gray-800/80 text-pink-300 font-mono outline-none border border-pink-900 focus:border-pink-500 placeholder-pink-700 caret-cyan-500 mb-4"
              placeholder="TAGS (COMMA SEPARATED)"
              value={newPostTags}
              onChange={(e) => setNewPostTags(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPostModal(false)}
                className="px-4 py-2 bg-transparent border border-gray-600 text-gray-400 font-mono text-sm rounded hover:bg-gray-800 transition-colors duration-300"
              >
                CANCEL
              </button>
              <button
                onClick={handleCreatePost}
                className="px-4 py-2 bg-transparent border border-cyan-500 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-500/20 transition-colors duration-300"
              >
                TRANSMIT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
