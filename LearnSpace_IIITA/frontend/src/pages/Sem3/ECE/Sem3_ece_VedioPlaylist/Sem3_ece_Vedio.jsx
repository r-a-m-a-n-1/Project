import React from "react";
import { Link } from "react-router-dom";

const Sem3_ece_Video = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 3 ECE - Video Lectures</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 - Analog Electronics And Linear ICs */}
          <Link
            to="/sem3/ece/analog-electronics-videos"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Analog Electronics And Linear ICs" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Analog Electronics And Linear ICs</h2>
          </Link>

          {/* Card 2 - Biology For Engineers */}
          <Link
            to="/sem3/ece/biology-engineers-videos"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Biology For Engineers" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Biology For Engineers</h2>
          </Link>

          {/* Card 3 - Electromagnetic Field And Waves */}
          <Link
            to="/sem3/ece/em-field-waves-videos"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Electromagnetic Field And Waves" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Electromagnetic Field And Waves</h2>
          </Link>

          {/* Card 4 - Indian Economics */}
          <Link
            to="/sem3/ece/indian-economics-videos"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Indian Economics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Indian Economics</h2>
          </Link>

          {/* Card 5 - MicroProcessor Interface And Programming */}
          <Link
            to="/sem3/ece/microprocessor-interface-videos"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="MicroProcessor Interface And Programming" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">MicroProcessor Interface And Programming</h2>
          </Link>

          {/* Card 6 - Introduction To Finance */}
          <Link
            to="/sem3/ece/finance-intro-videos"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Introduction To Finance" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Introduction To Finance</h2>
          </Link>

          {/* Card 7 - Signal And System */}
          <Link
            to="/sem3/ece/signal-systems-videos"
            className="cursor-pointer bg-gradient-to-br from-cyan-400 to-cyan-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Signal And System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Signal And System</h2>
          </Link>

          {/* Card 8 - UnnatBharat Abhiyaan */}
          <Link
            to="/sem3/ece/unnat-bharat-videos"
            className="cursor-pointer bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="UnnatBharat Abhiyaan" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">UnnatBharat Abhiyaan</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem3_ece_Video;
