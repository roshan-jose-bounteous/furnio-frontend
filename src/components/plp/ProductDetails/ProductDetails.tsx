// src/components/ProductDetails.tsx
import React from "react";
import Typography from "@/components/common/Typography";
import { ProductDetailsProps } from "@/types/types";

const formatCurrency = (price: number) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

const ProductDetails = ({
  productName,
  description,
  price,
  originalPrice,
}: ProductDetailsProps) => {
  return (
    <div className="py-4 px-4 flex flex-col gap-2 bg-[#F4F5F7]">
      <Typography
        variant="h3"
        className="text-xl font-semibold font-poppins"
        text={productName}
      />
      <Typography
        variant="h3"
        className="text-gray-500 font-medium font-poppins"
        text={description}
      />
      <div className="flex flex-row justify-between items-center">
        {price && (
          <Typography
            variant="p"
            className="text-lg font-semibold text-black font-poppins"
            text={formatCurrency(price)}
          />
        )}
        {originalPrice && (
          <Typography
            variant="p"
            className="line-through text-sm text-gray-500 pr-2 font-poppins"
            text={formatCurrency(originalPrice)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
