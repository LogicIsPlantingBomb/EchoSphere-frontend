import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-darkGray">
      <div className="p-8 bg-gray-800 bg-opacity-80 backdrop-blur-md text-white rounded-lg shadow-xl w-96 border border-gray-700">
        <h2 className="text-3xl font-bold text-redAccent text-center neon-glow">Login</h2>
        <form className="mt-6 space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 rounded bg-gray-700 text-white outline-none border border-gray-600 focus:ring-2 focus:ring-blueAccent"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 rounded bg-gray-700 text-white outline-none border border-gray-600 focus:ring-2 focus:ring-redAccent"
          />
          <button className="w-full mt-2 p-3 bg-redAccent text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg shadow-redAccent/50">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-blueAccent hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

