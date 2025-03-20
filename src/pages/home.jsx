import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white px-6">
      
      {/* Hero Section */}
      <div className="text-center mt-20">
        <h1 className="text-6xl font-bold text-red-500 neon-glow animate-pulse">
          EchoSphere
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Where opinions collide. Join heated debates, take sides, and make your voice count!
        </p>
      </div>

      {/* About Section */}
      <div className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-blue-500">What is EchoSphere?</h2>
        <p className="mt-4 text-gray-400">
          EchoSphere is a place for anonymous discussions on trending topics. Whether you support or counter an opinion, 
          your voice matters! Participate in real-time debates, highlight key arguments, and even place virtual bets on 
          the winning side!
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-red-400">🔹 Stay Anonymous</h3>
          <p className="text-gray-300 mt-2">Express your opinions freely without revealing your identity.</p>
        </div>
        
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-400">🔹 Real-Time Debates</h3>
          <p className="text-gray-300 mt-2">Take sides and argue on trending topics with live updates.</p>
        </div>

        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-yellow-400">🔹 Bet & Win</h3>
          <p className="text-gray-300 mt-2">Place virtual bets and support your side in discussions.</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <Link to="/feed">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-md transition">
            Join the Discussion 🚀
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

