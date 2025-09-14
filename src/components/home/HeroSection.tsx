import React from "react";
import { FaGraduationCap, FaRebel } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden h-[70vh] flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(95, 224, 126, 0.7) 0%, rgba(222, 240, 122, 0.7) 100%)`,
        }}
      ></div>

      {/* Content */}
      <div className="relative flex items-center justify-center z-10 w-4xl h-[70%] mx-auto px-4 sm:px-6 lg:px-8 bg-black/70">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Courses
          </h1>

          {/* Input box */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex w-full max-w-2xl bg-white shadow-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search by keyword, example: labour law"
                className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 placeholder-italic focus:outline-none focus:ring-0"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white p-4 transition-colors duration-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16">
                {/* First block - Graduation cap */}
                <div className="flex items-center space-x-3">
                  <FaGraduationCap />
                  <span className="text-white text-base font-medium">
                    Over 43,000 participant.
                  </span>
                </div>

                {/* Second block - Information/Play icon */}
                <div className="flex items-center space-x-3 text-white">
                  <FaRebel />
                  <span className="text-white text-base font-medium">
                    More than 1500 Training.
                  </span>
                </div>

                {/* Third block - Paper airplane */}
                <div className="flex items-center space-x-3">
                  <IoMdPaperPlane />
                  <span className="text-white text-base font-medium">
                    Learn anything.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
