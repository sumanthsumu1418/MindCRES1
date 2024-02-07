


import React, { useState } from "react";
import Button from "../common/Button/Button";
import { icons } from "../constants/assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed pl-20 top-0 w-[100%] p-4 bg-white z-[99]">
      <nav className="flex items-center justify-between">
        <div className="">
          <a href="/">
            <img className="h-8 mr-4" src={icons.logo} alt="Logo" />
          </a>
        </div>

        {/* Hamburger menu for small devices */}
        <div className="md:hidden lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation items for larger screens */}
        <div className="hidden md:flex lg:flex lg:justify-evenly top-0 items-center space-x-4 w-2/3">
          <a href="#about" className="text-primary">
            About
          </a>
          <a href="#services" className="text-primary">
            Services
          </a>
          <a href="#contact">
            <Button className="button_hover" onClick={handleClick}>
              Contact Us
            </Button>
          </a>
        </div>
      </nav>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="md:hidden lg:hidden fixed top-16 left-0 w-full bg-white p-4 z-[100]">
          <div className="flex flex-col items-end space-y-2">
            <a href="#about" className="text-primary">
              About
            </a>
            <a href="#services" className="text-primary">
              Services
            </a>
            <a href="#contact">
              <Button className="button_hover" onClick={handleClick}>
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
