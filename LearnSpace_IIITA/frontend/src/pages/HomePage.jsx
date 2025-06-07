import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from './about.jpg';

import AmazingFeature from './AmazingFeaturesPages';
import ChooseSemester from './ChooseSemesterPage';
import About from './AboutPage';

function HomePage() {
  const location = useLocation();
  const [showArrow, setShowArrow] = useState(true);

  const arrowStyle = {
    width: 0,
    height: 0,
    borderLeft: "50px solid transparent",
    borderRight: "50px solid transparent",
    borderTop: "80px solid",
    margin: "10px 0",
    animation: "moveArrow 2s infinite ease-in-out",
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen overflow-x-hidden">
      {/* Inject custom keyframes for arrow animation */}
      <style>{`
        @keyframes moveArrow {
          0% { transform: translateY(-50px); opacity: 0; }
          50% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(50px); opacity: 0; }
        }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 blur"></div>

        {/* Main text */}
        <div className="relative z-10 text-center px-4">
          <div className="text-6xl font-bold mb-12">
            <span className="bg-gradient-to-r from-[#ff6347] via-[#1e90ff] to-[#32cd32] bg-clip-text text-transparent animate-pulse">
              Welcome to IIIT Learn Space
            </span>
          </div>
        </div>

        {/* Scroll arrow */}
        {location.pathname === "/" && showArrow && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
            <div style={{ ...arrowStyle, borderTopColor: "black" }}></div>
            <div style={{ ...arrowStyle, borderTopColor: "rgba(0, 0, 0, 0.7)", animationDelay: "0.3s" }}></div>
            <div style={{ ...arrowStyle, borderTopColor: "rgba(0, 0, 0, 0.5)", animationDelay: "0.6s" }}></div>
          </div>
        )}
      </div>

      {/* Content Sections */}
      <section id="amazing-feature" className="w-full">
        <AmazingFeature />
      </section>

      <section id="choose-semester" className="w-full">
        <ChooseSemester />
      </section>

      <section id="about" className="w-full">
        <About />
      </section>
    </div>
  );
}

export default HomePage;
