import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="text-center max-w-xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-snug">
          Hello, I'm <br className="block sm:hidden" />
          <span className="text-blue-600 block sm:inline">Fasasi Mayokun</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
          A passionate full-stack web developer with a strong interest in backend development.
          I love building practical and interactive applications that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-center transition duration-300"
          >
            Learn More About Me
          </Link>
          <Link
            to="/projects"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-xl text-center transition duration-300"
          >
            See My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
