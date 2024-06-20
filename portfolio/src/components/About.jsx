import React, { useEffect } from "react";

const About = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#content", { delay: 1400, origin: "bottom" });
    sr.reveal("#content-2", { delay: 2000, origin: "bottom" });
  }, [sr]);
  return (
    <div
      id="about"
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div
        id="text"
        className="p-8 flex flex-col justify-center items-center w-full h-full"
      >
        <div className="max-w-[1000px] pb-8 w-full grid-cols-2 gap-8">
          <div className="sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div  id="content" className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Patrycja, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p  id="content-2" className="sm:text-right">
              I am actively seeking my first professional opportunity. I hold an
              Engineering degree in Dietetics and a Master's degree in IT
              Project Management, where I began my journey into programming. For
              the past two years, I have been honing my skills in front-end
              development. I am passionate about creating intuitive and engaging
              user experiences, and I am eager to bring my knowledge and
              enthusiasm to a dynamic team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
