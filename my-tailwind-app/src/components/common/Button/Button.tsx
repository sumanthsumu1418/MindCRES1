import React from 'react';

interface ButtonProps {
    onClick: () => any;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string; // Added className property
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children, className }) => {
    return (
        <button className={`px-[20px] h-[48px] border:none outline:none rounded-[31px] ${className}`} onClick={onClick} disabled={disabled} >
            {children}
        </button>
    );
};

export default Button;