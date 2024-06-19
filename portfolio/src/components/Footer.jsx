import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-[30px] p-2 text-center bg-[#0a192f] text-gray-300">
        &copy; {currentYear} Patrycja Bochnak. All right reserved.
    </footer>
  );
};

export default Footer;
