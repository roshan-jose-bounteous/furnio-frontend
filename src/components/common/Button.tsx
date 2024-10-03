import React from "react";
import { ReactNode } from "react";

type ButtonProps = {
  variant: "Pagination" | "AddToCart" | "SortBy";
  children: ReactNode;
  className?: string; // Custom class for styling
};

const Button = ({ variant, children, className = "" }: ButtonProps) => {
  // Define styles for each variant
  const baseStyles = "py-2 px-4  focus:outline-none transition duration-300";

  const variantStyles = {
    Pagination: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    AddToCart: "bg-green-500 text-white hover:bg-green-600",
    SortBy: "bg-white text-[#9F9F9F]",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
