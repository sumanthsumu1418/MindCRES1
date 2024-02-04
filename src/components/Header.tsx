"use client";

import React from "react";
import Button from "./common/Button/Button";
import { Icons } from "./constants/assets";
// const DynamicButton = dynamic(() => import('./common/Button/Button'), { ssr: false });

const Header: React.FC = () => {
  const handleClick = () => {
    // Handle the click event
    console.log("Button clicked");
  };
  return (
    <header>
      <nav>
        <div>
          <img src={Icons.Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
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
