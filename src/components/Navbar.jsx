import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const FILE_URL = "http://localhost:3000/files/PATRYCJABOCHNAK.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleDownload = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Load failed");
        }
        return response.blob();
      })
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-40">
      <div>Frontend dev portfolio</div>

      {/* Menu dla dużych ekranów */}
      <ul className="hidden md:flex space-x-4">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <Link to={section} smooth={true} duration={800} offset={-50}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menu mobilne */}
      <div className="md:hidden">
        {/* Ikona Hamburgera */}
        <div
          onClick={handleClick}
          className="absolute top-4 right-4 text-2xl text-gray-300 cursor-pointer z-50"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Menu */}
        {nav && (
          <div className="fixed inset-0 bg-[#0a192f] bg-opacity-100 z-40 flex flex-col items-center justify-center">
            <ul className="space-y-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <li key={section} className="text-2xl text-white">
                    <Link
                      onClick={handleClick}
                      to={section}
                      smooth={true}
                      duration={500}
                      offset={-50}
                      className="hover:text-gray-400"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Ikony społecznościowe */}
      <div className="hidden md:flex fixed top-[35%] left-0 flex-col">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/patrycja-bochnak-779a931a7/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/PatrycjaBochnak"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:patrycjabochnak@protonmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <button
              onClick={() => handleDownload(FILE_URL)}
              className="flex justify-between items-center w-full text-gray-300"
            >
              CV <BsFillPersonLinesFill size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
