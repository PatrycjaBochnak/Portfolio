import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Patrycja, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="sm:text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor lorem facilisis, ornare tortor eget, blandit leo. Duis
              consectetur rhoncus est feugiat rutrum. Suspendisse tellus nulla,
              feugiat eu ullamcorper at, facilisis quis tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
