import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-8 space-y-6">
      <h1 className="text-4xl font-bold">🎬 THE NOTICEBOARD</h1>
      <p className="max-w-xl text-lg">
        The only link you'll need to find and manage film jobs, connect with actors and crew, and organize shoots efficiently.
      </p>
      
      <div className="space-y-4">
        <Link
          to="/noticeboard"
          className="bg-emerald-400 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
        >
          Click A NoticeBoard To Life!!!
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
