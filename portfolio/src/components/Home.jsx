import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#text-2", { delay: 2000, origin: "top"})
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
    sr.reveal("#content-2", { delay: 2500, origin: "bottom" });
  }, [sr]);
  return (
    <div id="home" name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p id="text" className="text-pink-600">Hi, my name is</p>
        <h1 id="content" className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Patrycja Bochnak
        </h1>
        <h2 id="content" className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p id="text-2" className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          porttitor lorem facilisis, ornare tortor eget, blandit leo. Duis
          consectetur rhoncus est feugiat rutrum. Suspendisse tellus nulla,
          feugiat eu ullamcorper at, facilisis quis tellus.
        </p>
        <div id="content-2">
          <button 
          className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            <Link to="projects" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
