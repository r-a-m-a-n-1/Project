import React from "react";
import { Link } from "react-router-dom";

const Sem4_ece_VideoPlaylist = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 4 ECE - Video Lectures</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 - Analog Communication */}
          <Link
            to="/sem4/ece/analog-communication-videos"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Analog Communication" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Analog Communication</h2>
          </Link>

          {/* Card 2 - Antenna And Wave Propagation */}
          <Link
            to="/sem4/ece/antenna-wave-propagation-videos"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Antenna And Wave Propagation" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Antenna And Wave Propagation</h2>
          </Link>

          {/* Card 3 - CMOS VLSI Design */}
          <Link
            to="/sem4/ece/cmos-vlsi-design-videos"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="CMOS VLSI Design" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">CMOS VLSI Design</h2>
          </Link>

          {/* Card 4 - Control System */}
          <Link
            to="/sem4/ece/control-system-videos"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Control System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Control System</h2>
          </Link>

          {/* Card 5 - Integrated Circuit Technologies */}
          <Link
            to="/sem4/ece/integrated-circuit-tech-videos"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Integrated Circuit Technologies" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Integrated Circuit Technologies</h2>
          </Link>

          {/* Card 6 - Money And Banking */}
          <Link
            to="/sem4/ece/money-and-banking-videos"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Money And Banking" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Money And Banking</h2>
          </Link>

          {/* Card 7 - Network Synthesis And Analog Filters */}
          <Link
            to="/sem4/ece/network-synthesis-filters-videos"
            className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Network Synthesis And Analog Filters" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Network Synthesis And Analog Filters</h2>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Sem4_ece_VideoPlaylist;
