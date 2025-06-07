import React from "react";
import { Link } from "react-router-dom";

const Sem2_it_LectureNotes = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 2 IT - Lecture Notes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 - Computer Organization And Architecture */}
          <Link
            to="/sem2/computer-organization-notes"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/en_py.png"
              alt="Computer Organization And Architecture"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Computer Organization And Architecture</h2>
          </Link>

          {/* Card 2 - Data Structures And Algorithms */}
          <Link
            to="/sem2/data-structures-algorithms-notes"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/fee.png"
              alt="Data Structures And Algorithms"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Data Structures And Algorithms</h2>
          </Link>

          {/* Card 3 - Discrete Mathematical Structures */}
          <Link
            to="/sem2/discrete-math-notes"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/linear_algebra.png"
              alt="Discrete Mathematical Structures"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Discrete Mathematical Structures</h2>
          </Link>

          {/* Card 4 - Physical Education */}
          <Link
            to="/sem2/physical-education-notes"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/psp.png"
              alt="Physical Education"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Physical Education</h2>
          </Link>

          {/* Card 5 - Principles Of Data Communication */}
          <Link
            to="/sem2/data-communication-notes"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/com_skill.png"
              alt="Principles Of Data Communication"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Principles Of Data Communication</h2>
          </Link>

          {/* Card 6 - Principles Of Management */}
          <Link
            to="/sem2/management-principles-notes"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/ethics.png"
              alt="Principles Of Management"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Principles Of Management</h2>
          </Link>

          {/* Card 7 - Web Development */}
          <Link
            to="/sem2/web-development-notes"
            className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/web_dev.png"
              alt="Web Development"
              className="w-16 h-16 mb-4 animate-bounce"
            />
            <h2 className="text-xl font-bold text-center px-2">Web Development</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem2_it_LectureNotes;
