"use client";

import React from "react";
import Button from "../common/Button/Button";
import { icons } from "../constants/assets";

// const DynamicButton = dynamic(() => import('./common/Button/Button'), { ssr: false });

const Header: React.FC = () => {
  const handleClick = () => {
    // Handle the click event
    console.log("Button clicked");
  };

  return (
    <header>
      <nav className="flex flex-row items-center justify-between p-4 bg-gray-800">
        <div className="flex flex-row items-center">
          <img className="h-8 mr-4" src={icons.logo} alt="Logo" />
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/contact">
              <Button className="button_no_hover" onClick={handleClick}>
                Click me
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
