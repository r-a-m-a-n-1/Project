import React from "react";
import { Link } from "react-router-dom";

const Sem2_it_VideoPlaylist = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      {/* Header */}
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 2 IT - Video Playlists</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 - Data Structures and Algorithms */}
          <Link
            to="/sem2/data-structures-and-algorithms"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Data Structures" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Data Structures and Algorithms</h2>
          </Link>

          {/* Card 2 - Computer Organization and Architecture */}
          <Link
            to="/sem2/computer-organization-architecture"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Computer Org" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Computer Organization and Architecture</h2>
          </Link>

          {/* Card 3 - Discrete Mathematical Structures */}
          <Link
            to="/sem2/discrete-mathematical-structures"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Discrete Math" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Discrete Mathematical Structures</h2>
          </Link>

          {/* Card 4 - Principles of Data Communication */}
          <Link
            to="/sem2/principles-of-data-communication"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Data Comm" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Principles of Data Communication</h2>
          </Link>

          {/* Card 5 - Web Development */}
          <Link
            to="/sem2/web-development"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Web Dev" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Web Development</h2>
          </Link>

          {/* Card 6 - Physical Education */}
          <Link
            to="/sem2/physical-education"
            className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Physical Education" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Physical Education</h2>
          </Link>

          {/* Card 7 - Principles of Management */}
          <Link
            to="/sem2/principles-of-management"
            className="cursor-pointer bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Principles of Management" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Principles of Management</h2>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Sem2_it_VideoPlaylist;
