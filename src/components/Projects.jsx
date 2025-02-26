import React, { useEffect } from "react";
import englishschool from "../assets/english-school.png";
import pastevents from "../assets/pastevents.png";
import pomodoro from "../assets/pomodoro.png";
import atufit from "../assets/atufit.png";

const Projects = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#text-2", { delay: 1400, origin: "bottom" });
    sr.reveal("#content", { delay: 2000, origin: "top" });
  }, [sr]);
  return (
    <div
      id="projects"
      name="projects"
      className="w-full h-screen p-8 text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p
            id="text"
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"
          >
            Projects
          </p>
          <p id="content" className="py-4">
            Check out my recent projects
          </p>
        </div>

        {/* Container */}
        <div
          id="content-2"
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto"
        >
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${atufit})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center transition-all duration-300 hover:brightness-50"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition duration-300 relative z-10">
              <span className="text-2xl font-bold text-white tracking-wider flex justify-center text-center">
                A Tu Fit
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://atufit-frontend-6bf4b5f39d4a.herokuapp.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
              {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pastevents})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center transition-all duration-300 hover:brightness-50">

            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                What happened on that day?
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://what-happened-on-that-day-app-ad5f5b66226e.herokuapp.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${englishschool})` }}
             className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center transition-all duration-300 hover:brightness-50">
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                InsideOut English School
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://szkolainsideout.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${pomodoro})` }}

            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center transition-all duration-300 hover:brightness-50">
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pomodoro App
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://pomodoro-technique-app-4e85bc813558.herokuapp.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
