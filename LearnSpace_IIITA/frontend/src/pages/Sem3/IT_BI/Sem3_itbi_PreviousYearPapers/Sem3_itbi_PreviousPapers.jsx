import React from "react";
import { Link } from "react-router-dom";

const Sem3_itbi_PreviousPapers = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Semester 3 IT-BI - Previous Year Papers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 - Foundation Of Fintech */}
          <Link
            to="/sem3/itbi/foundation-fintech-papers"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Foundation Of Fintech" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Foundation Of Fintech</h2>
          </Link>

          {/* Card 2 - Indian Economics */}
          <Link
            to="/sem3/itbi/indian-economics-papers"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Indian Economics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Indian Economics</h2>
          </Link>

          {/* Card 3 - Introduction To Finance */}
          <Link
            to="/sem3/itbi/introduction-finance-papers"
            className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Introduction To Finance" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Introduction To Finance</h2>
          </Link>

          {/* Card 4 - Object Oriented Methodologies */}
          <Link
            to="/sem3/itbi/oopm-papers"
            className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Object Oriented Methodologies" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Object Oriented Methodologies</h2>
          </Link>

          {/* Card 5 - Operating System */}
          <Link
            to="/sem3/itbi/operating-system-papers"
            className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Operating System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Operating System</h2>
          </Link>

          {/* Card 6 - Prayas */}
          <Link
            to="/sem3/itbi/prayas-papers"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Prayas" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Prayas</h2>
          </Link>

          {/* Card 7 - Probability And Statistics */}
          <Link
            to="/sem3/itbi/probability-statistics-papers"
            className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Probability And Statistics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Probability And Statistics</h2>
          </Link>

          {/* Card 8 - Software Engineering */}
          <Link
            to="/sem3/itbi/software-engineering-papers"
            className="cursor-pointer bg-gradient-to-br from-cyan-400 to-cyan-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Software Engineering" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-center px-2">Software Engineering</h2>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Sem3_itbi_PreviousPapers;
