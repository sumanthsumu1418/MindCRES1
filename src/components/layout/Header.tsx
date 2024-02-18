import React, { useState } from "react";
import Button from "../common/Button/Button";
import { icons } from "../constants/assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
  };
  // const handleClose = () => {
  //   console.log("Button closed");
  // };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 h-[100%] w-[100%] md:w-[100%] lg:w-[100%]  h-[125px] md:h-[162px] lg:h-[182px]   flex items-center bg-white z-[99] ">
      <nav className="flex container  h-[100%] items-center justify-between">
        <div className="">
          <a href="/">
            <img
              className="h-[35px] md:h-[50px] lg:h-[50px] mr-4 "
              src={icons.logo}
              alt="Logo"
            />
          </a>
        </div>

        {/* Hamburger menu for small devices */}
        <div className=" md:hidden   lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary  relative focus:outline-none"
          >
            {menuOpen ? (
              <img
                src={icons.closeIcon}
                className="relative scale-[0.6] z-[99]"
                alt="Logo"
              />
            ) : (
              <img
                src={icons.menuIcon}
                className="relative scale-[0.6]"
                alt="Logo"
              />
            )}
          </button>
        </div>

        {/* Navigation items for larger screens */}
        <div className="hidden md:flex lg:flex lg:justify-between lg:w-[35%]  top-0 items-center lg:space-x-4 space-x-[60px] ">
          <a
            href="#about"
            className="text-primary scroll-smooth focus:scroll-auto scroll-my-2  text-[25px]"
          >
            About
          </a>
          <a
            href="#services"
            className="text-primary scroll-smooth focus:scroll-auto scroll-my-2   text-[25px]"
          >
            Services
          </a>
          <a href="#contact">
            <Button
              className="button_hover bg-primary scroll-smooth focus:scroll-auto scroll-my-2  text-[21px]"
              onClick={handleClick} 
            >
              Contact Us
            </Button>
          </a>
        </div>
      </nav>

      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className="md:hidden top-0 h-[100%] flex justify-center items-center  lg:hidden fixed  left-0 w-full bg-white p-4 z-1">
          <div className="flex flex-col lg:items-end items-center space-y-2">
            <a
              href="#about"
              className="text-primary scroll-smooth focus:scroll-auto text-[55px]"
            >
              About
            </a>
            <a
              href="#services"
              className="text-primary  scroll-smooth focus:scroll-auto text-[55px] "
            >
              Services
            </a>
            <a href="#contact">
              <Button
                className="button_hover mt-[45px] scroll-smooth focus:scroll-auto text-[12px] px-4 scale-[3]"
                onClick={handleClick}
              >
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
