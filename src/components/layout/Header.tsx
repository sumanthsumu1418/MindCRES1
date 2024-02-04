// import React from "react";
import Button from "../common/Button/Button";
import { icons } from "../constants/assets";

const Header = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        <img className="h-8 mr-4" src={icons.logo} alt="Logo" />

        <div className="flex items-center space-x-4 w-1/3 justify-between">
          <a href="/" className="text-primary">About</a>
          <a href="/about" className="text-primary">Services</a>

          <a href="/contact">
            <Button className="button_no_hover" onClick={handleClick}>
              Contact Us
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
