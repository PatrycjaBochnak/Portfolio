import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleDownload = () => {
    const fileUrl = "../assets/PATRYCJABOCHNAK.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", true);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed w-full h-16 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>Frontend dev portfolio</div>

      {/* Menu xl */}

      <ul className="hidden md:flex space-x-4">
        <li>
          <Link to="home" smooth duration={800}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={800}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth offset={-50} duration={800}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth offset={-50} duration={800}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={800}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}

      <div className="md:hidden">
        <div onClick={handleClick}>{!nav ? <FaBars /> : <FaTimes />}</div>
        {nav && (
          <ul className="absolute top-16 left-0 w-full bg-[#0a192f] flex flex-col items-center">
            <li className="py-4">
              <Link onClick={handleClick} to="home" smooth duration={500}>
                Home
              </Link>
            </li>
            <li className="py-4">
              <Link onClick={handleClick} to="about" smooth duration={500}>
                About
              </Link>
            </li>
            <li className="py-4">
              <Link onClick={handleClick} to="skills" smooth duration={500}>
                Skills
              </Link>
            </li>
            <li className="py-4">
              <Link onClick={handleClick} to="projects" smooth duration={500}>
                Projects
              </Link>
            </li>
            <li className="py-4">
              <Link onClick={handleClick} to="contact" smooth duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Social media icons */}

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
              onClick={handleDownload}
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
