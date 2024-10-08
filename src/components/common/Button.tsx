import React from "react";
import { ReactNode } from "react";

type ButtonProps = {
  variant:
    | "Pagination"
    | "AddToCart"
    | "SortBy"
    | "Subscribe"
    | "Sizes"
    | "Colors"
    | "Quantity"
    | "Related"
    | "Buy"
    | "Default";
  children?: ReactNode;
  text?: string;
  onClick?: () => void;
  disabled?: Boolean;
  className?: string; // Custom class for styling
};

const Button = ({
  variant,
  text = "",
  children,
  className = "",
  onClick,
  disabled,
}: ButtonProps) => {
  // Define styles for each variant
  const baseStyles = " focus:outline-none transition duration-300";

  const variantStyles = {
    Pagination:
      "bg-[#F9F1E7] hover:bg-[#B88E2F] py-2 px-4 rounded-lg text-lg hover:text-white font-poppins",
    Colors: "rounded-full px-4 py-4",
    Related:
      "bg-white text-[#B88E2F] font-poppins px-6 py-2 font-semibold border-[#B88E2F] border-2 ",
    Quantity: "font-poppins border-black border rounded-md px-2 py-2",
    Buy: "font-poppins text-lg border-black border px-4 py-2 rounded-lg",
    Sizes:
      "bg-[#F9F1E7] hover:bg-[#B88E2F] py-2 px-3 rounded-lg text-sm hover:text-white font-poppins",
    AddToCart: "font-poppins px-6 py-2 font-semibold ",
    SortBy: " py-2 px-4 bg-white text-[#9F9F9F]",
    Default: "",
    Subscribe:
      "text-sm font-medium font-poppins px-0 py-4 uppercase text-black border-b border-black pb-1 hover:text-gray-800 transition-colors ",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
