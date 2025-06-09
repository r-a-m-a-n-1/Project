// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const semesters = [
//   { name: "Semester 1", color: "from-purple-400 to-purple-500" },
//   { name: "Semester 2", color: "from-green-400 to-green-500" },
//   { name: "Semester 3", color: "from-blue-400 to-blue-500" },
//   { name: "Semester 4", color: "from-pink-400 to-pink-500" },
//   { name: "Semester 5", color: "from-yellow-400 to-yellow-500" },
//   { name: "Semester 6", color: "from-indigo-400 to-indigo-500" },
//   { name: "Semester 7", color: "from-red-400 to-red-500" },
//   { name: "Semester 8", color: "from-teal-400 to-teal-500" },
// ];

// const ChooseSemesterPage = () => {
//   const navigate = useNavigate();
//   const fullText = "Choose Your Semester";
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     let timer;
//     const typingSpeed = 75;
//     const deletingSpeed = 100;
//     const delayBetweenCycles = 1500;

//     if (isTyping) {
//       if (textIndex < fullText.length) {
//         timer = setTimeout(() => {
//           setDisplayedText(fullText.slice(0, textIndex + 1));
//           setTextIndex(textIndex + 1);
//         }, typingSpeed);
//       } else {
//         timer = setTimeout(() => setIsTyping(false), delayBetweenCycles);
//       }
//     } else {
//       if (textIndex > 0) {
//         timer = setTimeout(() => {
//           setDisplayedText(fullText.slice(0, textIndex - 1));
//           setTextIndex(textIndex - 1);
//         }, deletingSpeed);
//       } else {
//         timer = setTimeout(() => setIsTyping(true), delayBetweenCycles);
//       }
//     }
//     return () => clearTimeout(timer);
//   }, [textIndex, isTyping, fullText]);

//   return (
//     <div className="min-h-screen w-full flex flex-col bg-black">
//       {/* Animated Heading with typewriter effect */}
//       <header className="py-6 mt-6">
//         <div className="flex items-center justify-center h-20">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center min-h-[3rem]">
//             {displayedText}
//             <span className="border-r-2 border-blue-600 animate-pulse ml-1"></span>
//           </h1>
//         </div>
//       </header>

//       {/* Main Content - Grid of Semester Cards */}
//       <main className="flex-grow w-full overflow-y-auto">
//         <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
//           {semesters.map((semester, index) => (
//             <div
//               key={index}
//               onClick={() =>
//                 navigate(
//                   index + 1 === 2
//                     ? "/sem2_home"
//                     : index + 1 === 3
//                     ? "/sem3_home"
//                     : index + 1 === 4
//                     ? "/sem4_home"
//                     : index + 1 === 5
//                     ? "/sem5_home"
//                     : index + 1 === 6
//                     ? "/sem6_home"
//                     : index + 1 === 7
//                     ? "/sem7_home"
//                     : index + 1 === 8
//                     ? "/sem8_home"
//                     : `/sem${index + 1}`
//                 )
//               }
//               className={`cursor-pointer bg-gradient-to-br ${semester.color} text-white shadow-lg rounded-xl text-center p-8 h-60 flex flex-col justify-center transform transition duration-300 hover:scale-105 w-full`}
//             >
//               <h5 className="text-2xl md:text-3xl font-extrabold tracking-wide">
//                 {semester.name}
//               </h5>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ChooseSemesterPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaCalculator,
  FaFlask,
  FaAtom,
  FaChartBar,
  FaCog,
  FaGlobe,
  FaLaptop
} from "react-icons/fa";

const semesters = [
  {
    name: "Semester 1",
    color: "from-purple-600 via-purple-700 to-purple-800",
    icon: <FaBook size={36} />
  },
  {
    name: "Semester 2",
    color: "from-green-600 via-green-700 to-green-800",
    icon: <FaCalculator size={36} />
  },
  {
    name: "Semester 3",
    color: "from-blue-600 via-blue-700 to-blue-800",
    icon: <FaFlask size={36} />
  },
  {
    name: "Semester 4",
    color: "from-pink-600 via-pink-700 to-pink-800",
    icon: <FaAtom size={36} />
  },
  {
    name: "Semester 5",
    color: "from-yellow-500 via-yellow-600 to-yellow-700",
    icon: <FaChartBar size={36} />
  },
  {
    name: "Semester 6",
    color: "from-indigo-600 via-indigo-700 to-indigo-800",
    icon: <FaCog size={36} />
  },
  {
    name: "Semester 7",
    color: "from-red-600 via-red-700 to-red-800",
    icon: <FaGlobe size={36} />
  },
  {
    name: "Semester 8",
    color: "from-teal-600 via-teal-700 to-teal-800",
    icon: <FaLaptop size={36} />
  }
];

const ChooseSemesterPage = () => {
  const navigate = useNavigate();
  const fullText = "Choose Your Semester";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timer;
    const typingSpeed = 75;
    const deletingSpeed = 100;
    const delayBetweenCycles = 1500;

    if (isTyping) {
      if (textIndex < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(false), delayBetweenCycles);
      }
    } else {
      if (textIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => setIsTyping(true), delayBetweenCycles);
      }
    }
    return () => clearTimeout(timer);
  }, [textIndex, isTyping, fullText]);

  return (
    <div className="min-h-screen w-full bg-black pt-24 px-4">
      {/* Animated Heading */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-wide">
          {displayedText}
          <span className="border-r-2 border-blue-600 animate-pulse ml-1"></span>
        </h1>
        <p className="text-gray-400 text-lg mt-2">
          Start exploring notes, lectures, and papers
        </p>
      </header>

      {/* Semester Cards Grid */}
      <main className="relative z-0">
        <div className="relative z-0 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {semesters.map((semester, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(
                  index + 1 === 2
                    ? "/sem2_home"
                    : index + 1 === 3
                    ? "/sem3_home"
                    : index + 1 === 4
                    ? "/sem4_home"
                    : index + 1 === 5
                    ? "/sem5_home"
                    : index + 1 === 6
                    ? "/sem6_home"
                    : index + 1 === 7
                    ? "/sem7_home"
                    : index + 1 === 8
                    ? "/sem8_home"
                    : `/sem${index + 1}`
                )
              }
              className={`relative cursor-pointer bg-gradient-to-br ${semester.color} text-white shadow-2xl rounded-xl text-center p-8 h-60 flex flex-col items-center justify-center transform transition duration-300 hover:scale-110 hover:z-20 space-y-4`}
              style={{
                boxShadow:
                  "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(255, 255, 255, 0.1)"
              }}
            >
              <div
                style={{
                  filter:
                    "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))"
                }}
              >
                {semester.icon}
              </div>
              <h5 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md">
                {semester.name}
              </h5>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChooseSemesterPage;
