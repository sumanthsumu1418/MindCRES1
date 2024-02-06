import React from 'react';

interface ButtonProps {
  onClick: () => any;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string; // Added className property
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className }) => {
  return (
    <button className={`px-4 sm:px-6  h-10 sm:h-[38px] border:none outline:none rounded-full cursor-pointer ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
