import React, { useEffect } from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import bootstrap from "../assets/bootstrap.svg";
import express from "../assets/express.svg";
import github from "../assets/github.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.svg";

const Skills = ({ sr }) => {
  useEffect(() => {
    sr.reveal("#text", { origin: "top" });
    sr.reveal("#text-2", { delay: 1400, origin: "bottom" });
    sr.reveal("#content", { delay: 2000, origin: "top" });
  }, [sr]);
  return (
    <div
      id="skills"
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        <div className="sm:mt-10">
          <p
            id="text"
            className="text-4xl font-bold inline border-b-4 border-pink-600"
          >
            Skills
          </p>
          <p id="text-2" className="py-4">
            These are the technologies I've worked with
          </p>
        </div>
        <div id="content" className="w-full overflow-y-auto grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML"></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="HTML"></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML"></img>
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="HTML"></img>
            <p className="my-4">REACT JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ marginTop: "12px" }}
              className="w-20 mx-auto"
              src={typescript}
              alt="HTML"
            ></img>
            <p className="my-4">TYPESCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={nodejs} alt="HTML"></img>
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ marginTop: "60px" }}
              className="w-20 mx-auto"
              src={express}
              alt="HTML"
            ></img>
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ marginTop: "6px" }}
              className="w-20 mx-auto"
              src={mongodb}
              alt="HTML"
            ></img>
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={bootstrap} alt="HTML"></img>
            <p style={{ marginTop: "23px" }} className="my-4">
              BOOTSTRAP
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              style={{ marginTop: "37px" }}
              className="w-20 mx-auto"
              src={tailwind}
              alt="HTML"
            ></img>
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="HTML"></img>
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
