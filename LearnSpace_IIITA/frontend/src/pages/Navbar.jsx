


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
// import { GiNotebook } from 'react-icons/gi';
// import { MdAutoAwesome, MdAdminPanelSettings } from 'react-icons/md';
// const logo = "/11.png"; 

// const fullText = "Learn Better, Score Higher";

// function Navbar() {
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     const typingSpeed = 75;
//     const deletingSpeed = 100;
//     const delayBetweenCycles = 1500;

//     if (isTyping) {
//       if (textIndex < fullText.length) {
//         const timer = setTimeout(() => {
//           setDisplayedText(fullText.slice(0, textIndex + 1));
//           setTextIndex(textIndex + 1);
//         }, typingSpeed);
//         return () => clearTimeout(timer);
//       } else {
//         setTimeout(() => setIsTyping(false), delayBetweenCycles);
//       }
//     } else {
//       if (textIndex > 0) {
//         const timer = setTimeout(() => {
//           setDisplayedText(fullText.slice(0, textIndex - 1));
//           setTextIndex(textIndex - 1);
//         }, deletingSpeed);
//         return () => clearTimeout(timer);
//       } else {
//         setTimeout(() => setIsTyping(true), delayBetweenCycles);
//       }
//     }
//   }, [textIndex, isTyping]);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-900 px-6 py-2 flex justify-between items-center shadow-md z-50">
//       {/* Logo and animated text */}
//       <div className="flex items-center">
//         <img src={logo} alt="Website Logo" className="h-10 w-10 object-cover mr-3" />
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-lg font-semibold border-r-2 border-yellow-500 pr-2 animate-typing">
//           {displayedText}
//         </span>
//       </div>

//       {/* Navigation links as icons with tooltips */}
//       <ul className="flex space-x-6 text-lg font-medium text-gray-200">
//         <li className="relative group flex flex-col items-center">
//           <Link to="/" className="hover:text-blue-500 transition-colors duration-300">
//             <AiOutlineHome size={24} />
//           </Link>
//           <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Home</span>
//         </li>
//         <li className="relative group flex flex-col items-center">
//           <Link to="/about" className="hover:text-blue-500 transition-colors duration-300">
//             <AiOutlineInfoCircle size={24} />
//           </Link>
//           <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">About</span>
//         </li>
//         <li className="relative group flex flex-col items-center">
//           <Link to="/choose-semester" className="hover:text-blue-500 transition-colors duration-300">
//             <GiNotebook size={24} />
//           </Link>
//           <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Semesters</span>
//         </li>
//         <li className="relative group flex flex-col items-center">
//           <Link to="/amazing-feature" className="hover:text-blue-500 transition-colors duration-300">
//             <MdAutoAwesome size={24} />
//           </Link>
//           <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Feature</span>
//         </li>
//         <li className="relative group flex flex-col items-center">
//           <Link to="/admin/login" className="hover:text-blue-500 transition-colors duration-300">
//             <MdAdminPanelSettings size={24} />
//           </Link>
//           <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Admin</span>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import { MdAutoAwesome } from 'react-icons/md';

const logo = "/11.png"; // Main logo
const aviatorLogo = "/admin.png"; // Aviator icon for Admin

const fullText = "Learn Better, Score Higher";

function Navbar() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 75;
    const deletingSpeed = 100;
    const delayBetweenCycles = 1500;

    if (isTyping) {
      if (textIndex < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(false), delayBetweenCycles);
      }
    } else {
      if (textIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setTimeout(() => setIsTyping(true), delayBetweenCycles);
      }
    }
  }, [textIndex, isTyping]);

  const navItemStyle = `
    relative group flex flex-col items-center
  `;

  const textStyle = `
    text-xs mt-2 text-transparent h-4 transition-all duration-300
    group-hover:text-blue-400
  `;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 px-6 py-2 flex justify-between items-center shadow-md z-50">
      {/* Logo and animated text */}
      <div className="flex items-center">
        <img src={logo} alt="Website Logo" className="h-10 w-10 object-cover mr-3" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-lg font-semibold border-r-2 border-yellow-500 pr-2 animate-typing">
          {displayedText}
        </span>
      </div>

      {/* Navigation links */}
      <ul className="flex space-x-6 text-lg font-medium text-gray-200">
        <li className={navItemStyle}>
          <Link to="/" className="hover:text-blue-500 transition duration-300">
            <AiOutlineHome size={24} />
          </Link>
          <span className={textStyle}>Home</span>
        </li>
        <li className={navItemStyle}>
          <Link to="/about" className="hover:text-blue-500 transition duration-300">
            <AiOutlineInfoCircle size={24} />
          </Link>
          <span className={textStyle}>About</span>
        </li>
        <li className={navItemStyle}>
          <Link to="/choose-semester" className="hover:text-blue-500 transition duration-300">
            <GiNotebook size={24} />
          </Link>
          <span className={textStyle}>Semesters</span>
        </li>
        <li className={navItemStyle}>
          <Link to="/amazing-feature" className="hover:text-blue-500 transition duration-300">
            <MdAutoAwesome size={24} />
          </Link>
          <span className={textStyle}>Feature</span>
        </li>
        <li className={navItemStyle}>
          <Link to="/admin/login" className="hover:opacity-80 transition-opacity duration-300">
            <img src={aviatorLogo} alt="Admin" className="h-7 w-7 object-contain" />
          </Link>
          <span className={`${textStyle} text-center`}>Admin</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

