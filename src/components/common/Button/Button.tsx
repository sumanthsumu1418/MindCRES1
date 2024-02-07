import React from "react";

interface ButtonProps {
  onClick?: () => any;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset"; 
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  className,
  type = "button",
}) => {
  return (
    <button
      className={`lg:px-[2.4rem] sm:px-6  lg:h-[48px] text-[20px] sm:h-[38px]  border:none outline:none rounded-full cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
