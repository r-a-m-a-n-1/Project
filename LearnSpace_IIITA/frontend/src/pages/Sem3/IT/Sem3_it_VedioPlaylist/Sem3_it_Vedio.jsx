import React from "react";
import { Link } from "react-router-dom";

const Sem3_it_VideoPlaylist = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 3 IT - Video Lectures</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 - Indian Economic */}
          <Link
            to="/sem3/it/indian-economics-videos"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Indian Economic" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Indian Economic</h2>
          </Link>

          {/* Card 2 - Introduction To Finance */}
          <Link
            to="/sem3/it/introduction-finance-videos"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Introduction To Finance" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Introduction To Finance</h2>
          </Link>

          {/* Card 3 - Object Oriented Methodologies */}
          <Link
            to="/sem3/it/oopm-videos"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Object Oriented Methodologies" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Object Oriented Methodologies</h2>
          </Link>

          {/* Card 4 - Operating System */}
          <Link
            to="/sem3/it/operating-system-videos"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Operating System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Operating System</h2>
          </Link>

          {/* Card 5 - Probability And Statistics */}
          <Link
            to="/sem3/it/probability-statistics-videos"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Probability And Statistics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Probability And Statistics</h2>
          </Link>

          {/* Card 6 - Software Engineering */}
          <Link
            to="/sem3/it/software-engineering-videos"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Software Engineering" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Software Engineering</h2>
          </Link>

          {/* Card 7 - Theory Of Computation */}
          <Link
            to="/sem3/it/theory-computation-videos"
            className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Theory Of Computation" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Theory Of Computation</h2>
          </Link>

          {/* Card 8 - Yoga */}
          <Link
            to="/sem3/it/yoga-videos"
            className="cursor-pointer bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Yoga" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Yoga</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem3_it_VideoPlaylist;
