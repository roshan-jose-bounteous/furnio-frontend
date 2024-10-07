import React from "react";
import { ProductDiscountProps } from "@/types/types";

const ProductDiscount = ({ discount }: ProductDiscountProps) => {
  return (
    <div
      className={`absolute top-2 right-2 text-white text-xs rounded-full px-1 py-3 font-poppins ${
        discount === "New" ? "bg-[#2EC1AC] px-2" : "bg-[#E97171]"
      }`}
    >
      {discount === "New" ? "New" : `- ${discount}`}
    </div>
  );
};

export default ProductDiscount;
