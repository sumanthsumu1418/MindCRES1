

import React, { useState } from 'react';
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
    <header>
      <nav className="flex  container items-center justify-between p-4">
        <div className=''>
        <img className="h-8 mr-4" src={icons.logo} alt="Logo" />
        </div>

        {/* Hamburger menu for small devices */}
        <div className="md:hidden lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Navigation items */}
        <div
          className={`lg:flex items-center space-x-4 w-2/3 ${
            menuOpen ? 'block' : 'hidden'
          } lg:flex justify-evenly`}
        >
          <a href="/" className="text-primary">
            About
          </a>
          <a href="/services" className="text-primary">
            Services
          </a>
          <a href="/contact">
            <Button className="button_hover" onClick={handleClick}>
              Contact Us
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
