import React from 'react';
const Footer: React.FC = () => {
        return (
          <footer>
            <div className="flex justify-between">
              <span className="text-secondary font-[31px]">
                From concept to code,let's bring your code to life
              </span>

              <img src="/assets/Home/logo.svg" alt="Logo" />
            </div>
          </footer>
        );
};

export default Footer;